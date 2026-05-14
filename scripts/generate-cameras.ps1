$file = "E:\opencode\camera-review-site\src\data\cameras.ts"
$lines = Get-Content $file

# Find the line index where the data array closes
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
    ,@('Canon', 'EOS R', 'EOS RP', 'EOS R10', 'EOS R50', 'EOS R8', 'EOS R5', 'EOS R3', 'EOS R7', 'EOS R6', 'EOS R100')
    ,@('Sony', 'A7 IV', 'A7S III', 'A7C', 'A6700', 'A6100', 'A6400', 'A6600', 'A1', 'A7R III', 'A9 II')
    ,@('Nikon', 'Z5', 'Z6 II', 'Z7 II', 'Z50', 'Z30', 'Zfc', 'Z9', 'Zf', 'Z6 III', 'Z8')
    ,@('Fujifilm', 'X-T4', 'X-T30 II', 'X-S10', 'X100V', 'X-E4', 'GFX 100S', 'GFX 50S II', 'X-Pro3', 'X-T200', 'X-H2S')
    ,@('Panasonic', 'Lumix S5', 'Lumix GH6', 'Lumix G100', 'Lumix S1', 'Lumix S1R', 'Lumix G9', 'Lumix S1H', 'Lumix GX9', 'Lumix FZ1000 II', 'Lumix ZS200')
    ,@('Leica', 'Q2', 'M11', 'SL2', 'M10-P', 'Q-P', 'D-Lux 7', 'V-Lux 5', 'M10 Monochrom', 'CL', 'SL2-S')
    ,@('OM SYSTEM', 'OM-1', 'OM-5', 'OM-D E-M1X', 'OM-D E-M10 IV', 'OM-D E-M5 III', 'TG-7', 'TG-6', 'OM-D E-M1 III', 'PEN E-P7', 'OM-3')
    ,@('Blackmagic', 'Pocket Cinema Camera 6K Pro', 'Pocket Cinema Camera 4K', 'URSA Mini Pro 12K', 'Micro Studio Camera 4K G2', 'Video Assist', 'URSA Broadcast', 'Studio Camera 4K Plus', 'DaVinci Resolve Panel', 'Pocket Cinema 6K G2', 'Blackmagic 3G-SDI')
    ,@('Pentax', 'K-3 III', 'K-1 II', 'KF', 'WG-8', 'K-70', '645Z', 'KP', 'K-S2', 'WG-6', 'Q-S1')
    ,@('Sigma', 'fp', 'fp L', 'sd Quattro H', 'dp Quattro', 'BF', 'sd Quattro', 'dp Quattro 4K', 'fp Ultra', 'Sigma fp II', 'dp3 Quattro')
    ,@('Hasselblad', 'X1D II 50C', '907X', 'H6D-100c', 'CFV II 50C', 'XPan', 'H6D-400c', '500C/M', 'X2D', 'Hasselblad 907X', 'Hasselblad X1D')
)

$priceRanges = @(
    @{min=499;max=2999}
    @{min=3499;max=7999}
    @{min=8999;max=17999}
    @{min=18999;max=49999}
)

$sensorTypes = @(
    "鍏ㄧ敾骞?BSI-CMOS", "鍏ㄧ敾骞?CMOS", "鍏ㄧ敾骞?stacked CMOS", "APS-C CMOS",
    "APS-C X-Trans CMOS", "MFT Live MOS", "涓敾骞?CMOS", "鍏ㄧ敾骞?BSI-CMOS (閮ㄥ垎鍫嗗彔)"
)
$mpPool = @("24.2MP", "26.1MP", "33MP", "45.7MP", "61MP", "20.4MP", "40.2MP", "50.1MP", "30.3MP", "12.2MP", "47MP", "100MP", "15MP", "36MP", "18MP")
$isoPool = @("100-51200", "100-102400", "50-204800", "100-25600", "100-64000", "100-12800", "100-32000")
$stabPool = @("5绾?IBIS", "6绾?IBIS", "7绾?IBIS", "8绾?IBIS", "鏈鸿韩闃叉姈", "鐢靛瓙闃叉姈", "4.5绾?IBIS", "5.5绾?IBIS")
$afPool = @(
    "759鐐圭浉浣嶆娴?+ AI", "1053鐐?+ 娣卞害瀛︿範 AF", "493鐐?+ 3D杩借釜", "425鐐?娣峰悎AF",
    "273鐐?鐩镐綅妫€娴?, "693鐐?+ AI涓讳綋璇嗗埆", "117鐐?瀵规瘮搴︽娴?, "315鐐?鏅鸿兘杩借釜",
    "105鐐?鍗佸瓧鍨?, "鑷姩瀵圭劍", "399鐐?鐩镐綅妫€娴?, "81鐐?鍖哄煙AF"
)
$featPool = @(
    "AI涓讳綋璇嗗埆", "娣卞害瀛︿範AF", "棰勬媿鎽勫姛鑳?, "鏃犻粦灞忚繛鎷?, "8K瑙嗛", "4K 120fps",
    "6K瓒呴噰鏍?, "鍙屽師鐢烮SO", "鍍忕礌浣嶇Щ鍚堟垚", "鏈哄唴RAW澶勭悊", "HEIF鏀寔", "HDR PQ",
    "闃插皹闃叉淮", "鍙屽崱妲?, "USB-C鍏呯數", "Wi-Fi 6E", "钃濈墮5.0", "涓讳綋杩借釜", "楦熺被璇嗗埆",
    "寤惰繜鎽勫奖", "澶氶噸鏇濆厜", "瀵圭劍鍖呭洿", "闈欓煶蹇棬", "浜鸿劯妫€娴?, "鐪奸儴杩借釜"
)
$resPool = @(
    "8K 60fps / 4K 120fps", "6K 60fps / 4K 120fps", "4K 120fps",
    "4K 60fps", "8K 30fps / 4K 120fps", "5.7K 60fps / 4K 120fps",
    "6K 30fps / 4K 60fps", "8K 24fps / 4K 60fps", "DCI 4K 60fps"
)
$fmtPool = @("8K", "6K", "5.7K", "4K", "2.7K", "1080p", "720p")
$vFeatPool = @(
    "Log褰曞埗", "10-bit 4:2:2", "HLG", "HDR", "鍙樺舰妯″紡", "鍐呭綍RAW",
    "HDMI RAW杈撳嚭", "鏈哄唴闄嶉噰鏍?, "闊抽杈撳叆", "鏃堕棿鐮?, "甯у唴鍘嬬缉",
    "ProRes RAW", "BRAW", "All-I鍘嬬缉", "鎱㈠姩浣?20fps", "V-Log"
)
$burstPool = @(
    "30fps RAW / 60fps JPEG", "20fps RAW / 30fps JPEG", "10fps (鏈烘蹇棬)",
    "14fps (鐢靛瓙蹇棬)", "40fps RAW", "8fps (鏈烘蹇棬)", "15fps RAW / 20fps JPEG",
    "12fps RAW", "5fps (鏈烘蹇棬)", "25fps (鐢靛瓙蹇棬)", "120fps (瑁佸垏妯″紡)", "60fps JPEG"
)
$battPool = @("CIPA 530寮?, "CIPA 450寮?, "CIPA 390寮?, "CIPA 600寮?, "CIPA 340寮?, "CIPA 480寮?, "CIPA 350寮?, "CIPA 580寮?, "CIPA 420寮?, "CIPA 320寮?)
$weightPool = @("630g", "710g", "580g", "445g", "800g", "520g", "660g", "950g", "395g", "700g", "850g", "480g", "320g", "1500g", "1200g", "540g", "685g", "490g")
$screenPool = @(
    "3鑻卞 162涓囩偣缈昏浆灞?, "3.2鑻卞 210涓囩偣缈昏浆灞?, "3鑻卞 104涓囩偣缈昏浆灞?,
    "3.2鑻卞 184涓囩偣缈昏浆灞?, "3.5鑻卞 236涓囩偣缈昏浆灞?, "2.95鑻卞 162涓囩偣缈昏浆灞?,
    "3鑻卞 92涓囩偣鍥哄畾灞?, "3.2鑻卞 233涓囩偣缈昏浆灞?, "3.69鑻卞 OLED鍙栨櫙鍣?,
    "3鑻卞 122涓囩偣缈昏浆灞?, "2.5鑻卞 80涓囩偣鍥哄畾灞?
)
$connPool = @("Wi-Fi 6E", "Wi-Fi 6", "Wi-Fi 5", "钃濈墮5.0", "钃濈墮5.2", "USB-C", "HDMI", "HDMI 2.1", "鑰虫満/楹﹀厠椋?, "USB 3.2 Gen 2", "USB 2.0", "USB-C PD")

$rng = [Random]::new()

$newEntries = @()
for ($i = 0; $i -lt 50; $i++) {
    $bi = $i % $brandModels.Count
    $brand = $brandModels[$bi][0]
    $model = $brandModels[$bi][(1 + [Math]::Floor($i / $brandModels.Count) % 10)]
    $name = "$brand $model"
    $id = ($name -replace '[^a-zA-Z0-9\s-]', '').Trim() -replace '\s+', '-' -replace '--+', '-' -replace '-$', ''
    $id = $id.ToLower()

    $pr = $priceRanges[$i % $priceRanges.Count]
    $priceVal = $rng.Next($pr.min, $pr.max + 1)
    $price = "楼$($priceVal.ToString('N0'))"
    $year = 2020 + ($i % 7)
    $month = $rng.Next(1, 13)
    $releaseDate = "$year-{0:D2}" -f $month

    $mps = $mpPool[$i % $mpPool.Count]
    $sType = $sensorTypes[$i % $sensorTypes.Count]
    $iso = $isoPool[$i % $isoPool.Count]
    $stab = $stabPool[$i % $stabPool.Count]
    $af = $afPool[$i % $afPool.Count]

    $featCount = $rng.Next(4, 7)
    $feats = @()
    while ($feats.Count -lt $featCount) { $f = $featPool[$rng.Next(0, $featPool.Count)]; if ($feats -notcontains $f) { $feats += $f } }

    $vMax = $resPool[$i % $resPool.Count]

    $fCount = $rng.Next(3, 5)
    $selectedFormats = @()
    while ($selectedFormats.Count -lt $fCount) { $f = $fmtPool[$rng.Next(0, $fmtPool.Count)]; if ($selectedFormats -notcontains $f) { $selectedFormats += $f } }
    $selectedFormats = $selectedFormats | Sort-Object -Descending { [int]($_ -replace '[^0-9]', '') }

    $vFeatCount = $rng.Next(2, 5)
    $vFeats = @()
    while ($vFeats.Count -lt $vFeatCount) { $f = $vFeatPool[$rng.Next(0, $vFeatPool.Count)]; if ($vFeats -notcontains $f) { $vFeats += $f } }

    $burst = $burstPool[$i % $burstPool.Count]
    $battery = $battPool[$i % $battPool.Count]
    $weight = $weightPool[$i % $weightPool.Count]
    $screen = $screenPool[$i % $screenPool.Count]

    $cCount = $rng.Next(2, 5)
    $conns = @()
    while ($conns.Count -lt $cCount) { $c = $connPool[$rng.Next(0, $connPool.Count)]; if ($conns -notcontains $c) { $conns += $c } }

    $featsStr = "'$($feats -join "', '")'"
    $vFeatsStr = "'$($vFeats -join "', '")'"
    $fmtsStr = "'$($selectedFormats -join "', '")'"
    $connStr = "'$($conns -join "', '")'"

$entry = @"
  {
    id: '$id',
    name: '$name',
    brand: '$brand',
    releaseDate: '$releaseDate',
    price: '$price',
    sensor: {
      megapixels: '$mps',
      sensorType: '$sType',
      iso: '$iso',
      stabilization: '$stab',
      autofocus: '$af',
      features: [$featsStr],
    },
    video: {
      maxResolution: '$vMax',
      formats: [$fmtsStr],
      features: [$vFeatsStr],
    },
    burst: '$burst',
    battery: '$battery',
    weight: '$weight',
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
Write-Host "cameras.ts: $count entries (target: 105)"
