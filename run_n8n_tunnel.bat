@echo off
echo "Stopping any existing n8n..."
taskkill /F /IM node.exe /FI "WINDOWTITLE eq n8n*" >nul 2>&1
echo "Starting n8n with Public Internet Access (Tunnel)..."
echo "PLEASE WAIT related to the tunnel URL..."
n8n start --tunnel
pause
