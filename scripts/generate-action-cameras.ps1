$file = "E:\opencode\camera-review-site\src\data\action-cameras.ts"
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
    ,@('GoPro', 'HERO13 Black', 'HERO12 Black', 'HERO11 Black', 'HERO10 Black', 'HERO9 Black', 'HERO8 Black', 'HERO7 Black', 'HERO Max', 'HERO12 White', 'HERO Session')
    ,@('DJI', 'Action 5', 'Action 3', 'Action 2', 'Osmo Action 4', 'Osmo Action', 'Pocket 3', 'Pocket 2', 'Osmo Mobile 7', 'Avata', 'Osmo Mobile 5')
    ,@('Insta360', 'X5', 'X4', 'X3', 'GO 3', 'GO 3S', 'GO 2', 'One RS', 'One R', 'Ace Pro', 'Ace')
    ,@('Sony', 'HDR-AS300', 'HDR-AS50', 'RX0 II', 'RX0', 'FDR-X3000R', 'HDR-AS200V', 'HDR-AZ1', 'RX100 V', 'ZV-1F', 'FX30')
    ,@('Garmin', 'VIRB Ultra 30', 'VIRB 360', 'VIRB XE', 'VIRB X', 'Dash Cam 67W', 'Dash Cam Mini 3', 'VIRB Ultra 40', 'Garmin Varia', 'Garmin VA', 'Garmin Approach')
    ,@('Akaso', 'BRAVE 8 LE', 'BRAVE 7 LE', 'BRAVE 6 Plus', 'EK7000 Pro', 'V50X', 'V50 Elite', 'BRAVE 4', 'SE8000', 'CS300', 'X-TREME 2')
    ,@('SJCAM', 'C500X', 'C300', 'SJ8 Pro', 'SJ7 Star', 'SJ6 Legend', 'SJ4000', 'C500', 'C200', 'SJ9', 'SJ8 Air')
    ,@('RICOH', 'Theta Z1', 'Theta SC2', 'Theta V', 'Theta X', 'WG-8', 'WG-70', 'Theta SC', 'Theta S', 'WG-M2', 'WG-6')
    ,@('Xiaomi', 'Mi Action Camera 4K', 'Yi 4K+', 'Yi 4K', 'Yi 2 Pro', 'MiJia Mini 4K', 'Yi Lite', 'Yi Action Camera', 'Xiaomi Action Cam', 'Mi Sphere 360', 'Yi 4K VR')
)

$mpPool = @("48MP", "27MP", "24MP", "20MP", "18MP", "16MP", "14MP", "12MP", "10MP", "8MP")
$apPool = @("f/1.8", "f/2.0", "f/2.2", "f/2.4", "f/2.5", "f/2.8", "f/3.0", "f/1.9")
$sensPool = @("1/1.3鑻卞", "1/1.5鑻卞", "1/1.7鑻卞", "1/2.0鑻卞", "1/2.3鑻卞", "1/2.5鑻卞", "1鑻卞", "1/2.8鑻卞")
$stabPool = @("RockSteady 5.0", "RockSteady 4.0", "HyperSmooth 6.0", "HyperSmooth 5.0", "HyperSmooth 4.0", "FlowState 2.0", "6-Axis 闄€铻轰华", "EIS", "4-Axis", "AI澧炵ǔ", "HorizonLock", "SuperSteady")
$mainFeatPool = @("4K/120fps", "5.3K/60fps", "8K/30fps", "瓒呭箍瑙?, "D-Log", "澶滄櫙妯″紡", "纾佸惛瀹夎", "鍓嶅悗鍙屽睆", "鎱㈠姩浣?, "HDR瑙嗛", "璇煶鎺у埗", "瀹氭椂鎷嶆憚", "寰幆褰曞埗")
$vMaxPool = @("5.3K/60fps", "4K/120fps", "4K/60fps", "5.7K/30fps", "8K/30fps", "4K/30fps", "1080p/60fps", "2.7K/120fps")
$vFmtPool = @("5.3K", "4K", "2.7K", "1080p", "720p")
$vFeatPool = @("RockSteady", "HorizonSteady", "D-Log M", "姘翠笅鑹插僵杩樺師", "HDR", "鎱㈠姩浣?, "寤舵椂鎽勫奖", "TimeWarp", "杞﹁浇妯″紡", "Loop Recording", "瀹氭椂鎷嶆憚", "璇煶鎺у埗", "GPS璁板綍")
$imgFeatPool = @("48MP Photo", "RAW", "PureShot", "SuperNight", "Timelapse", "Burst", "HDR Photo", "Night Mode", "Panorama", "Interval Photo")

$battPool = @("1770mAh (160鍒嗛挓)", "1900mAh (180鍒嗛挓)", "1500mAh (135鍒嗛挓)", "1200mAh (100鍒嗛挓)", "580mAh (70鍒嗛挓)", "2000mAh (200鍒嗛挓)", "1050mAh (90鍒嗛挓)", "1300mAh (120鍒嗛挓)")
$waterPool = @("18m (鏃犲３)", "10m (鏃犲３)", "5m (鏃犲３)", "40m (甯﹀３)", "60m (甯﹀３)", "30m (甯﹀３)", "20m (甯﹀３)")
$weightPool = @("145g", "130g", "120g", "154g", "100g", "56g", "170g", "85g", "110g", "200g")
$screenPool = @("2.25鑻卞鍚庤Е灞?, "2.0鑻卞鍚庤Е灞?, "1.4鑻卞鍓嶅僵 + 2.25鑻卞鍚庤Е", "1.76鑻卞鍚庤Е", "1.5鑻卞鍓嶅睆", "2.4鑻卞鍚庤Е灞?, "1.3鑻卞鍓嶅僵 + 2.0鑻卞鍚庤Е")
$connPool = @("Wi-Fi", "Bluetooth", "USB-C", "GPS", "NFC", "Micro HDMI", "USB 2.0", "USB 3.0")

$rng = [Random]::new()

$newEntries = @()
for ($i = 0; $i -lt 12; $i++) {
    $bi = $i % $brandModels.Count
    $brand = $brandModels[$bi][0]
    $model = $brandModels[$bi][(1 + [Math]::Floor($i / $brandModels.Count) % 10)]
    $name = "$brand $model"
    $id = ($name -replace '[^a-zA-Z0-9\s-]', '').Trim() -replace '\s+', '-' -replace '--+', '-' -replace '-$', ''
    $id = $id.ToLower()

    $priceVal = $rng.Next(599, 4999)
    $price = "楼$($priceVal.ToString('N0'))"
    $year = 2020 + ($i % 6)
    $month = $rng.Next(1, 13)
    $releaseDate = "$year-{0:D2}" -f $month

    $mps = $mpPool[$i % $mpPool.Count]
    $ap = $apPool[$i % $apPool.Count]
    $sen = $sensPool[$i % $sensPool.Count]

    if ($i % 3 -eq 0) { $fl = "`n      focalLength: '$(($rng.Next(2, 6)).0mm)'," } else { $fl = "" }

    $stab = $stabPool[$i % $stabPool.Count]

    $mfCount = $rng.Next(3, 5)
    $mfs = @()
    while ($mfs.Count -lt $mfCount) { $f = $mainFeatPool[$rng.Next(0, $mainFeatPool.Count)]; if ($mfs -notcontains $f) { $mfs += $f } }
    $mfsStr = "'$($mfs -join "', '")'"

    $vMax = $vMaxPool[$i % $vMaxPool.Count]

    $fCount = $rng.Next(3, 5)
    $fmts = @()
    while ($fmts.Count -lt $fCount) { $f = $vFmtPool[$rng.Next(0, $vFmtPool.Count)]; if ($fmts -notcontains $f) { $fmts += $f } }
    $fmts = $fmts | Sort-Object -Descending { [int](($_ -replace '[^0-9]', '') -replace '^$', '0') }

    $vfCount = $rng.Next(3, 5)
    $vfs = @()
    while ($vfs.Count -lt $vfCount) { $f = $vFeatPool[$rng.Next(0, $vFeatPool.Count)]; if ($vfs -notcontains $f) { $vfs += $f } }
    $vfsStr = "'$($vfs -join "', '")'"

    $imfCount = $rng.Next(2, 4)
    $imfs = @()
    while ($imfs.Count -lt $imfCount) { $f = $imgFeatPool[$rng.Next(0, $imgFeatPool.Count)]; if ($imfs -notcontains $f) { $imfs += $f } }
    $imfsStr = "'$($imfs -join "', '")'"

    $batt = $battPool[$i % $battPool.Count]
    $water = $waterPool[$i % $waterPool.Count]
    $weight = $weightPool[$i % $weightPool.Count]
    $dims = "$($rng.Next(60, 80)) x $($rng.Next(30, 55)) x $($rng.Next(20, 40))mm"
    $screen = $screenPool[$i % $screenPool.Count]

    $cCount = $rng.Next(2, 4)
    $conns = @()
    while ($conns.Count -lt $cCount) { $c = $connPool[$rng.Next(0, $connPool.Count)]; if ($conns -notcontains $c) { $conns += $c } }
    $connStr = "'$($conns -join "', '")'"

$entry = @"
  {
    id: '$id',
    name: '$name',
    brand: '$brand',
    releaseDate: '$releaseDate',
    price: '$price',
    mainCamera: {
      megapixels: '$mps',
      aperture: '$ap',$fl
      sensorSize: '$sen',
      stabilization: '$stab',
      features: [$mfsStr],
    },
    videoMax: '$vMax',
    videoFormats: [$fmtsStr],
    videoFeatures: [$vfsStr],
    imageFeatures: [$imfsStr],
    battery: '$batt',
    waterproof: '$water',
    weight: '$weight',
    dimensions: '$dims',
    screen: '$screen',
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
Write-Host "action-cameras.ts: $count entries (target: 50)"
