# Start script

# Handle on siteDire and buildScript
$siteDir = Join-Path -Path (Get-Location) -ChildPath "_site"
$buildScriptPath = Join-Path -Path (Get-Location) -ChildPath "build.ps1"

# Build project if it doesn't exist yet
if (-not (Test-Path -Path $siteDir)) {
    Invoke-Expression -Command $buildScriptPath
}

# Launch site

## Clear Port
# Define the port number you want to check
$port = 8000
$processInfo = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique

if ($processInfo) {    
    Stop-Process -Id $processInfo -Force
    Write-Host "Process listening on port $port has been killed."
}
else {
    Write-Host "Port: $port is free for use."
}    


Set-Location -Path $siteDir;
Invoke-Expression 'node ".\scripts\server.js"' 
# try {
#     $jobRef = Start-Job -ScriptBlock { 
#         Set-Location -Path $using:siteDir
#         Invoke-Expression 'node ".\scripts\server.js"'       
#     }

#     # Start-Process "C:\Program Files\Google\Chrome\Application\chrome.exe" "http://127.0.0.1:8000/"
#     Receive-Job -Job $jobRef -Keep
# }
# catch { }
# finally {
#     Remove-Job -Job $jobRef -Force 
# }


Read-Host "Press Enter to exit"