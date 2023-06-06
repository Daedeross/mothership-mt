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
Remove-Item .\library\public\web -Recurse -Force;

Set-Location web;
npm run pack;
Set-Location ..

Copy-Item -Path ".\web\dist" -Destination ".\library\public\web" -Recurse

Compress-Archive -Path $contents -DestinationPath $zipFile;

Rename-Item $zipFile $libFile

Copy-Item $libFile "D:\MapTool\Campaigns";