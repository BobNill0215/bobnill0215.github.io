$file = "E:\opencode\camera-review-site\src\data\security-cameras.ts"
$lines = Get-Content $file

$closeLine = -1
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -eq '];' -and ($i + 1) -lt $lines.Count -and $lines[$i+1] -eq '') {
        $closeLine = $i
        break
    }
}
if ($closeLine -eq -1) { throw "Could not find data array end" }

$header = $lines[0..($closeLine - 1)]
$footer = $lines[$closeLine..($lines.Count - 1)]

$brandModels = @(
    ,@('Hikvision', 'DS-2CD2387G2-LU', 'DS-2CD2347G2-LU', 'DS-2CD2386G2-I', 'DS-2CD2T87G2-L', 'DS-2CD2047G2-L', 'DS-2CD2385FWD-I', 'DS-2CD2T47G2-L', 'DS-2CD2383G2-I', 'DS-2CD2T83G2-I', 'DS-2CD2386G2-IU')
    ,@('Dahua', 'IPC-HDW3849HP-AS', 'IPC-HDW2849HP-AS', 'IPC-HDW2549HP-AS', 'IPC-HFW3849HP-AS', 'IPC-HDBW2849R1', 'IPC-HDW3849HP', 'IPC-HFW2849HP', 'IPC-HDBW2549', 'IPC-HDW2549HP', 'IPC-HFW2549HP')
    ,@('EZVIZ', 'C8W Pro', 'C8C', 'C6W 4MP', 'C6N', 'C3T', 'C3A', 'C8W', 'C6T', 'C1C', 'L4 Pro')
    ,@('Xiaomi', 'C700', 'C500', 'C300', 'C200', 'AW300', 'BW500', 'CW700', 'CW400', 'BW400', 'CW300')
    ,@('TP-Link', 'Tapo C200', 'Tapo C210', 'Tapo C310', 'Tapo C320WS', 'Tapo C420', 'Tapo C520WS', 'Tapo C100', 'Tapo C110', 'Tapo C425', 'Tapo C225')
    ,@('Ring', 'Stick Up Cam 5MP', 'Indoor Cam 2K', 'Spotlight Cam Plus', 'Doorbell Cam 4K', 'Floodlight Cam Pro', 'Outdoor Cam 4K', 'Peephole Cam', 'Indoor Cam 2nd Gen', 'Stick Up Cam Pro', 'Alarm Pro')
    ,@('Arlo', 'Ultra 2', 'Pro 5', 'Pro 4', 'Essential XL', 'Video Doorbell 2K', 'Essential 2K', 'Pro 3 Floodlight', 'Ultra 2 Floodlight', 'Essential Indoor', 'Pro 5S')
    ,@('Google Nest', 'Cam IQ Outdoor', 'Cam IQ Indoor', 'Nest Cam (Battery)', 'Nest Doorbell (Battery)', 'Nest Cam with Floodlight', 'Nest Cam Indoor', 'Nest Cam Outdoor', 'Hello Doorbell', 'Nest Cam IQ', 'Dropcam')
    ,@('Annke', 'NC800', 'NC500', 'NC400', 'NC300', 'C800', 'C500', 'C400', 'C300', 'NC200', 'NC100')
    ,@('Reolink', 'RLC-811A', 'RLC-810A', 'RLC-520A', 'RLC-511WA', 'Argus 3 Pro', 'Argus PT Ultra', 'E1 Pro', 'E1 Zoom', 'Duo 2', 'RLC-842A')
    ,@('Uniview', 'IPC2324SB', 'IPC2314SB', 'IPC2324SR3', 'IPC3614SR3', 'IPC2324SB-D', 'IPC2314SR3', 'IPC3614SR3-D', 'IPC2324SB-F40', 'IPC2314SB-F40', 'IPC3614SB')
    ,@('Bosch', 'FLEXIDOME IP 8000', 'FLEXIDOME IP 7000', 'DINION IP 8000', 'DINION IP 7000', 'AUTODOME IP 7000', 'FLEXIDOME IP micro 8000', 'DINION IP thermal 8000', 'FLEXIDOME IP starlight 8000', 'DINION IP bullet 8000', 'MIC IP 7000')
)

$resPool = @("4K 8MP", "4K 6MP", "3K 5MP", "2K 4MP", "1080P", "4K Ultra HD", "2K QHD", "5MP")
$nightPool = @("绾㈠30m", "绾㈠20m", "绾㈠10m", "鍏ㄥ僵澶滆30m", "鍏ㄥ僵澶滆20m", "鏄熷厜绾у瑙?5m", "绾㈠50m", "鏅鸿兘鍏ㄥ僵", "鍏ㄥ僵澶滆40m", "绾㈠25m")
$storagePool = @("浜戝瓨鍌?SD鍗?, "浜戝瓨鍌?NVR/SD鍗?, "浜戝瓨鍌?SD鍗?NAS", "NVR/SD鍗?, "浜戝瓨鍌?SD鍗?SDHC")
$featPool = @(
    "AI浜哄舰妫€娴?, "AI浜鸿劯璇嗗埆", "AI杞﹁締妫€娴?, "AI瀹犵墿妫€娴?, "AI鐗╁搧妫€娴?,
    "AI鍝０妫€娴?, "AI寮傚父澹伴煶妫€娴?, "AI鍖哄煙鍏ヤ镜", "AI瓒婄晫妫€娴?, "AI鐑熺伀妫€娴?,
    "360掳浜戝彴", "鍙屽悜璇煶", "澹板厜鎶ヨ", "绉诲姩杩借釜", "IP67闃叉按",
    "闃茬牬鍧忚璁?, "H.265鍘嬬缉", "H.265+/H.264+", "Wi-Fi 6", "PoE渚涚數",
    "鏄熷厜绾у瑙?, "鏅鸿兘杩借釜", "闅愮閬斀", "浜戝彴杩借釜", "鏅鸿兘鎶ヨ",
    "浜哄憳璁℃暟", "鐑害鍥?, "浜鸿劯鎶撴媿", "杞︾墝璇嗗埆", "璀︽垝鍖哄煙"
)
$typePool = @('indoor', 'outdoor', 'doorbell', 'solar')
$waterPool = @("IP67", "IP66", "IP65", "IP55", "IPX5", "IPX4", "-")
$connPool = @("Wi-Fi 2.4GHz", "Wi-Fi 6", "鏈夌嚎缃戝彛", "PoE", "钃濈墮5.0", "钃濈墮MESH", "4G", "APP鎺у埗", "ONVIF", "RTSP", "NVR杩炴帴", "HomeKit")

$rng = [Random]::new()

$newEntries = @()
for ($i = 0; $i -lt 30; $i++) {
    $bi = $i % $brandModels.Count
    $brand = $brandModels[$bi][0]
    $model = $brandModels[$bi][(1 + [Math]::Floor($i / $brandModels.Count) % 10)]
    $name = "$brand $model"
    $id = ($name -replace '[^a-zA-Z0-9\s-]', '').Trim() -replace '\s+', '-' -replace '--+', '-' -replace '-$', ''
    $id = $id.ToLower()

    $priceVal = $rng.Next(99, 1999)
    $price = "楼$($priceVal.ToString('N0'))"
    $year = 2020 + ($i % 6)
    $month = $rng.Next(1, 13)
    $releaseDate = "$year-{0:D2}" -f $month

    $type = $typePool[$i % $typePool.Count]

    $res = $resPool[$i % $resPool.Count]
    $night = $nightPool[$i % $nightPool.Count]
    $storage = $storagePool[$i % $storagePool.Count]

    $featCount = $rng.Next(3, 6)
    $feats = @()
    while ($feats.Count -lt $featCount) { $f = $featPool[$rng.Next(0, $featPool.Count)]; if ($feats -notcontains $f) { $feats += $f } }
    $featsStr = "'$($feats -join "', '")'"

    $water = $waterPool[$i % $waterPool.Count]

    $cCount = $rng.Next(2, 4)
    $conns = @()
    while ($conns.Count -lt $cCount) { $c = $connPool[$rng.Next(0, $connPool.Count)]; if ($conns -notcontains $c) { $conns += $c } }
    $connStr = "'$($conns -join "', '")'"

$entry = @"
  {
    id: '$id',
    name: '$name',
    brand: '$brand',
    type: '$type',
    releaseDate: '$releaseDate',
    price: '$price',
    specs: {
      resolution: '$res',
      nightVision: '$night',
      storage: '$storage',
      features: [$featsStr],
    },
    waterproof: '$water',
    connectivity: [$connStr],
  },
"@
    $newEntries += $entry
}

$output = ($header -join "`r`n") + "`r`n"
foreach ($entry in $newEntries) {
    $output += $entry.TrimEnd() + "`r`n"
}
$output += ($footer -join "`r`n")

Set-Content -Path $file -Value $output -Encoding UTF8

$newLines = Get-Content $file
$count = ($newLines | Select-String -Pattern "^\s+id:").Count
Write-Host "security-cameras.ts: $count entries (target: 50)"
