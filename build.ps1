$contents = "events.json", ".\library.json", ".\license.txt", ".\mts_properties.json", ".\readme.md", ".\library";
$libName = "mothership";
$libFile = $libName + ".mtlib";
$zipFile = $libName + ".zip";

if (Test-Path $libFile) {
    Remove-Item $libFile
}
if (Test-Path $zipFile) {
    Remove-Item $zipFile
}
Remove-Item .\library\public\sheet -Recurse -Force;

Set-Location sheet;
npm run pack;
Set-Location ..
Copy-Item -Path ".\sheet\dist" -Destination ".\library\public\sheet" -Recurse

Set-Location overlay\roll;
npm run pack;
Set-Location ..\..
Copy-Item -Path ".\overlay\roll\dist" -Destination ".\library\public\overlay\roll" -Recurse

Compress-Archive -Path $contents -DestinationPath $zipFile;

Rename-Item $zipFile $libFile

Copy-Item $libFile "D:\MapTool\Campaigns";