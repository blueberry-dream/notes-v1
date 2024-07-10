# shell script to build server

# Define path to website
$siteDir = Join-Path -Path (Get-Location) -ChildPath "_site"

# Check if the '_site' directory exists
if (Test-Path -Path $siteDir) {
    try {
        Write-Host "Cleaning the _site directory..."
        Remove-Item -Path $siteDir -Recurse -Force
        Write-Host "The _site directory has been deleted."
    }
    catch {
        Write-Error "An error occurred while trying to clean the _site directory: $siteDir"
        Read-Host -Prompt "Press Enter to exit"
        exit
    }
}
else {
    Write-Host "The '_site' directory does not exist at the path: $siteDir"
}

# Building Site
try {
    Write-Host "Building site..."
    Write-Host "Running 'npm run build'"
    Invoke-Expression 'npm run build'
}
catch {
    Write-Error "Error in building site"
    Read-Host -Prompt "Press Enter to exit"
    exit
}

# Exit
Read-Host -Prompt "Press Enter to continue"