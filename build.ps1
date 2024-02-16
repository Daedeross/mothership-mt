$settingsFile = "buildinfo.json";
$localSettings = ".buildlocal";
$defaultContents = "events.json", "library.json", "LICENSE", "mts_properties.json", "README.md", "library";

function hasProperty($obj,[string]$propName) {
    $obj.PSObject.Properties.Name -contains $propName;
}

if (Test-Path $settingsFile) {
    $buildInfo = Get-Content $settingsFile | ConvertFrom-Json;
} else {
    Write-Output "$settingsFile does not exist, creating..."
    $buildInfo = [PSCustomObject]@{contents=$defaultContents};
    $buildInfo | ConvertTo-Json > $settingsFile;
}

if(-not ($buildInfo.PSObject.Properties.Name -contains "name")) {
    $libName = Read-Host -Prompt "Enter the name of the library";
    $buildInfo | Add-Member -MemberType NoteProperty -Name "name" -Value $libName;
    $buildInfo | ConvertTo-Json > $settingsFile;
}
$libFile = $buildInfo.name + ".mtlib";
$zipFile = $buildInfo.name + ".zip";

Write-Output "Cleaning last build"
if (Test-Path $libFile) {
    Remove-Item $libFile
}
if (Test-Path $zipFile) {
    Remove-Item $zipFile
}

if(-not ($buildInfo.PSObject.Properties.Name -contains "webApps")) {
    $apps = Read-Host -Prompt "Enter the paths to any included web-apps. Separate multiple entries with a comma (,)"
        | ForEach-Object { $_.Split(',') }
        | ForEach-Object { $_.Trim() } ;
    if($apps -is [System.String]) {
        $apps = @($apps);
    }
    $buildInfo | Add-Member -MemberType NoteProperty -Name "webApps" -Value $apps;
    $buildInfo | ConvertTo-Json > $settingsFile;
}

$cwd = Get-Location;

Write-Output "Building WebApps"
foreach ($webApp in $buildInfo.webApps) {
    $appOut = "library/public/$webApp";
    if (Test-Path $appOut) {
        Remove-Item $appOut -Recurse -Force
    }

    Set-Location $webApp;
    npm run pack;
    Set-Location $cwd;
    Copy-Item -Path "$webApp/dist" -Destination "$appOut" -Recurse;
}

Write-Output "Creating library file";

Compress-Archive -Path $buildInfo.contents -DestinationPath $zipFile;
Rename-Item $zipFile $libFile

if (Test-Path $localSettings) {
    $localInfo = Get-Content $localSettings | ConvertFrom-Json;
} else {
    Write-Output "$localSettings does not exist, creating..."
    $localInfo = [PSCustomObject]@{};
    $localInfo | ConvertTo-Json > $localSettings;
}

if(-not ($localInfo.PSObject.Properties.Name -contains "destination")) {
    $destination = Read-Host -Prompt "Enter the destination path (or Enter/Return to leave it here)";
    $localInfo | Add-Member -MemberType NoteProperty -Name "destination" -Value $destination;
    $localInfo | ConvertTo-Json > $localSettings;
}

if($localInfo.destination) {
    Copy-Item $libFile $localInfo.destination;
}

Write-Output "Build Complete!";