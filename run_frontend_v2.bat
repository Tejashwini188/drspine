@echo off
echo Starting Chiropractic India V2 Frontend...
echo Running on http://localhost:3002
cd /d "%~dp0frontend-v2"
npm run dev -- --port 3002
