const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve Voice Test UI
app.use('/voice', express.static(path.join(__dirname, '../voice_test')));

// Proxy Route for n8n (Avoids CORS issues)
app.post('/api/chat-proxy', async (req, res) => {
    try {
        console.log("Sending to n8n...");
        const response = await fetch('http://localhost:5678/webhook/chat-agent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });

        if (!response.ok) {
            const text = await response.text();
            console.error(`n8n Error (${response.status}):`, text);
            return res.status(response.status).json({ error: `n8n Error: ${response.status} ${response.statusText}`, details: text });
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Proxy Error:", error);
        res.status(500).json({ error: 'Failed to connect to n8n. Is it running?', details: error.message });
    }
});

// Database Setup (SQLite)
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false
});

// Models
const Call = sequelize.define('Call', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    callerName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    intent: DataTypes.STRING,
    transcript: DataTypes.TEXT,
    status: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

const Appointment = sequelize.define('Appointment', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    datetime: DataTypes.DATE,
    customerName: DataTypes.STRING,
    customerPhone: DataTypes.STRING,
    status: { type: DataTypes.STRING, defaultValue: 'booked' }
});

// Sync Database
sequelize.sync().then(async () => {
    console.log('Database & tables created!');
    // Seed logic
    try {
        const count = await Appointment.count();
        if (count === 0) {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(10, 0, 0, 0);
            await Appointment.create({ datetime: tomorrow, customerName: 'Test User', customerPhone: '000', status: 'booked' });
            console.log('Seeded initial appointment');
        }
    } catch (e) {
        console.log("Error seeding:", e);
    }
});

// --- APPOINTMENT ENDPOINTS ---

app.get('/api/slots', async (req, res) => {
    const slots = [];
    const today = new Date();

    const booked = await Appointment.findAll({ where: { status: 'booked' } });
    const bookedTimes = booked.map(b => new Date(b.datetime).getTime());

    for (let i = 1; i <= 3; i++) {
        let d = new Date(today);
        d.setDate(d.getDate() + i);
        for (let h = 9; h < 17; h++) {
            d.setHours(h, 0, 0, 0);
            if (!bookedTimes.includes(d.getTime())) {
                slots.push(new Date(d));
            }
        }
    }
    res.json({ availableSlots: slots });
});

app.post('/api/appointments/book', async (req, res) => {
    const { name, phone, datetime } = req.body;
    try {
        const dateObj = new Date(datetime);
        const existing = await Appointment.findOne({
            where: {
                datetime: dateObj,
                status: 'booked'
            }
        });

        if (existing) {
            return res.status(409).json({ error: 'Slot already taken' });
        }

        const appt = await Appointment.create({
            datetime: dateObj,
            customerName: name,
            customerPhone: phone
        });
        res.json({ success: true, appointment: appt });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Booking failed' });
    }
});

app.post('/api/appointments/cancel', async (req, res) => {
    const { phone } = req.body;
    try {
        const appt = await Appointment.findOne({
            where: { customerPhone: phone, status: 'booked' },
            order: [['datetime', 'ASC']]
        });

        if (!appt) return res.status(404).json({ error: 'No active appointment found for this number' });

        appt.status = 'cancelled';
        await appt.save();
        res.json({ success: true, message: 'Appointment cancelled' });
    } catch (e) {
        res.status(500).json({ error: 'Cancellation failed' });
    }
});

// --- LOGGING ---
app.post('/api/webhook/call-end', async (req, res) => {
    try {
        const { callerName, phoneNumber, intent, transcript, status, duration } = req.body;

        await Call.create({
            callerName: callerName || 'Unknown',
            phoneNumber,
            intent: intent || 'general',
            transcript,
            status: status || 'completed',
            duration: duration || 0
        });

        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save call data' });
    }
});

app.get('/api/calls', async (req, res) => {
    const calls = await Call.findAll({ order: [['timestamp', 'DESC']] });
    res.json(calls);
});

app.get('/api/analytics', async (req, res) => {
    const totalCalls = await Call.count();
    const callsByIntent = await Call.findAll({
        attributes: ['intent', [sequelize.fn('COUNT', sequelize.col('intent')), 'count']],
        group: ['intent']
    });
    res.json({ totalCalls, callsByIntent });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
