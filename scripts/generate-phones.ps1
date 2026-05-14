param(
    [int]$Count = 500,
    [string]$OutputFile = "E:\opencode\camera-review-site\src\data\phones.ts"
)

$ErrorActionPreference = 'Stop'

# ============================================================
# Realistic phone data pools
# ============================================================

$brands = @(
    @{Name='Samsung';Models=@('Galaxy S','Galaxy S+','Galaxy S Ultra','Galaxy Note','Galaxy Z Fold','Galaxy Z Flip','Galaxy A','Galaxy M','Galaxy F')}
    @{Name='Apple';Models=@('iPhone','iPhone Pro','iPhone Pro Max','iPhone Plus','iPhone SE')}
    @{Name='Xiaomi';Models=@('Xiaomi','Xiaomi Pro','Xiaomi Ultra','Xiaomi Lite','Xiaomi T','Redmi K','Redmi Note','Redmi','POCO','POCO F','POCO X')}
    @{Name='Huawei';Models=@('Pura','Pura Pro','Pura Ultra','Mate','Mate Pro','Mate RS','Nova','Nova Pro','Pocket')}
    @{Name='OPPO';Models=@('Find X','Find X Pro','Find X Ultra','Reno','Reno Pro','Reno+','A')}
    @{Name='vivo';Models=@('X','X Pro','X Ultra','X Fold','V','Y','iQOO','iQOO Neo','iQOO Pro')}
    @{Name='OnePlus';Models=@('OnePlus','OnePlus Pro','OnePlus Ultra','OnePlus R','OnePlus Nord','OnePlus Ace')}
    @{Name='Realme';Models=@('GT','GT Pro','GT Neo','GT Master','Realme','Realme Pro','Narzo','Narzo Pro')}
    @{Name='Honor';Models=@('Magic','Magic Pro','Magic Ultimate','V','HONOR','HONOR Pro','X')}
    @{Name='Google';Models=@('Pixel','Pixel Pro','Pixel XL','Pixel A')}
    @{Name='Motorola';Models=@('Edge','Edge+','Edge Pro','Razr','G','G Power','ThinkPhone')}
    @{Name='Sony';Models=@('Xperia 1','Xperia 5','Xperia Pro','Xperia 10')}
    @{Name='ASUS';Models=@('ZenFone','ZenFone Pro','ROG Phone','ROG Phone Pro')}
    @{Name='Nokia';Models=@('Nokia G','Nokia X','Nokia XR')}
    @{Name='LG';Models=@('LG V','LG G','LG Wing','LG Velvet')}
    @{Name='Nothing';Models=@('Nothing Phone','Nothing Phone+')}
    @{Name='ZTE';Models=@('Axon','Axon Ultra','Nubia','Nubia Red Magic','Blade')}
    @{Name='Lenovo';Models=@('Legion Phone','Lenovo')}
    @{Name='TCL';Models=@('TCL 20','TCL 30','TCL 40','TCL 50')}
    @{Name='Meizu';Models=@('Meizu','Meizu Pro','Meizu Note')}
)

$yearsMonth = @()
2020..2026 | ForEach-Object {
    $y = $_
    1..12 | ForEach-Object {
        $yearsMonth += "$y-{0:D2}" -f $_
    }
}

$mainSensors = @(
    @{Mega='200MP';Apertures=@('f/1.4','f/1.5','f/1.6','f/1.7','f/1.8','f/2.0');FL=@('23mm','24mm','23mm','24mm','23mm');Sizes=@('1/1.3"','1/1.4"','1/1.12"','1/1.56"','1/1.28"','1"','1/1.22"','1/1.35"');Stars=@('OIS','OIS','OIS');Feats=@('ISOCELL HP2','ISOCELL HP3','ISOCELL HP9','ISOCELL HP5','LYT-900','LYT-901','LYT-808','LYT-818','IMX989','IMX989','OV50H','OV50K')}
    @{Mega='50MP';Apertures=@('f/1.4','f/1.5','f/1.57','f/1.6','f/1.63','f/1.68','f/1.7','f/1.75','f/1.78','f/1.8','f/1.88','f/1.9','f/1.95');FL=@('23mm','24mm','23mm','24mm','23mm','24mm','35mm');Sizes=@('1/1.3"','1/1.4"','1/1.12"','1/1.56"','1/1.28"','1/1.35"','1/1.22"','1/1.43"','1"');Stars=@('OIS','OIS','OIS','Sensor-shift OIS');Feats=@('LYT-900','LYT-901','LYT-808','LYT-818','IMX989','IMX890','IMX906','IMX920','OV50H','OV50K','OV50A','GN2','GN1','GNV')}
    @{Mega='48MP';Apertures=@('f/1.6','f/1.78','f/1.8','f/1.9');FL=@('23mm','24mm','23mm');Sizes=@('1/1.28"','1/1.3"','1/1.31"','1/1.4"','1/2"');Stars=@('OIS','OIS','Sensor-shift OIS');Feats=@('IMX586','IMX689','IMX789','Sony Fusion')}
    @{Mega='108MP';Apertures=@('f/1.8','f/1.9','f/2.0');FL=@('23mm','24mm','23mm');Sizes=@('1/1.33"','1/1.52"','1/1.67"','1/1.14"');Stars=@('OIS','OIS');Feats=@('ISOCELL HM3','ISOCELL HM2','ISOCELL HM1','ISOCELL HM6')}
    @{Mega='64MP';Apertures=@('f/1.8','f/1.89','f/2.0');FL=@('23mm','24mm');Sizes=@('1/1.72"','1/1.7"','1/2"');Stars=@('OIS','OIS');Feats=@('GW1','GW2','GW3','IMX682','IMX686')}
)

$uwSensors = @(
    @{Mega='50MP';Apertures=@('f/1.9','f/2.0','f/2.2','f/2.4');FL=@('12mm','13mm','14mm','15mm');Sizes=@('1/2.5"','1/2.55"','1/2.75"','1/1.95"','1/2.4"');Stars=@('-','-','-');Feats=@('120° FOV','123° FOV','114° FOV','119° FOV','122° FOV','126° FOV','150° FOV','115° FOV','128° FOV','Micro','Macro','AI','Freeform')}
    @{Mega='48MP';Apertures=@('f/1.7','f/1.8','f/2.0','f/2.2');FL=@('12mm','13mm','14mm');Sizes=@('1/2.5"','1/2.55"','1/2"','1/2.35"');Stars=@('-','-','Quad PD');Feats=@('120° FOV','123° FOV','126° FOV','Macro Focus','Autofocus')}
    @{Mega='12MP';Apertures=@('f/2.0','f/2.2','f/2.4');FL=@('12mm','13mm','14mm','16mm');Sizes=@('1/2.55"','1/2.6"','1/3"','1/2.8"');Stars=@('-','-');Feats=@('120° FOV','114° FOV','112° FOV','Super Steady','Stills','Autofocus')}
    @{Mega='13MP';Apertures=@('f/2.2','f/2.4');FL=@('12mm','13mm','15mm','16mm');Sizes=@('1/3"','1/3.1"','1/3.4"','1/2.8"');Stars=@('-','-');Feats=@('120° FOV','122° FOV','112° FOV','Micro','Macro')}
    @{Mega='8MP';Apertures=@('f/2.2','f/2.3','f/2.4');FL=@('12mm','13mm','14mm','15mm','16mm','17mm');Sizes=@('1/4"','1/4.4"','1/5"','1/3.2"');Stars=@('-','-');Feats=@('112° FOV','120° FOV','118° FOV','106° FOV')}
    @{Mega='40MP';Apertures=@('f/1.8','f/2.0','f/2.2');FL=@('12mm','13mm','14mm','18mm');Sizes=@('1/1.7"','1/2"','1/2.7"');Stars=@('-','-');Feats=@('120° FOV','Macro','Cine','RYYB')}
    @{Mega='32MP';Apertures=@('f/2.0','f/2.2','f/2.4');FL=@('13mm','14mm','15mm');Sizes=@('1/2.8"','1/3"','1/3.14"');Stars=@('-','-');Feats=@('120° FOV','Macro','AI','HDR')}
    @{Mega='16MP';Apertures=@('f/2.0','f/2.2','f/2.4');FL=@('12mm','13mm','14mm','15mm','16mm');Sizes=@('1/3"','1/3.06"','1/3.4"','1/2.8"');Stars=@('-','-');Feats=@('123° FOV','120° FOV','HDR','Macro')}
    @{Mega='64MP';Apertures=@('f/2.0','f/2.4');FL=@('12mm','13mm','14mm');Sizes=@('1/2"','1/1.7"','1/1.8"');Stars=@('-','-');Feats=@('120° FOV','Macro','AI')}
)

$teleSensors = @(
    @{Mega='50MP';Apertures=@('f/2.0','f/2.2','f/2.4','f/2.6','f/2.8','f/3.0','f/3.5','f/4.0','f/4.3');FL=@('65mm','70mm','73mm','85mm','90mm','100mm','111mm','135mm','230mm');Sizes=@('1/1.95"','1/1.56"','1/2"','1/2.51"','1/2.52"','1/2.5"','1/2.75"','1/2.6"','1/2.64"');Stars=@('OIS','OIS','OIS','OIS');Feats=@('2x','2.5x','3x','3.5x','4x','5x','6x','10x','periscope','telephoto macro','portrait','PDAF')}
    @{Mega='200MP';Apertures=@('f/2.2','f/2.4','f/2.6','f/2.67','f/2.8','f/3.0');FL=@('70mm','73mm','85mm','90mm','100mm','111mm','135mm');Sizes=@('1/1.4"','1/1.5"','1/1.56"','1/1.22"');Stars=@('OIS','OIS','OIS');Feats=@('HP9','HP3','HP5','3x','3.5x','4x','5x','periscope','telephoto macro','continuous optical zoom')}
    @{Mega='48MP';Apertures=@('f/2.0','f/2.2','f/2.4','f/2.6','f/2.8','f/3.5');FL=@('60mm','65mm','70mm','90mm','113mm','135mm');Sizes=@('1/2"','1/2.25"','1/2.55"','1/2.5"','1/2.4"');Stars=@('OIS','OIS','OIS');Feats=@('2x','2.5x','3x','3.5x','5x','periscope','portrait','PDAF')}
    @{Mega='12MP';Apertures=@('f/2.0','f/2.2','f/2.4','f/2.8');FL=@('50mm','52mm','67mm','77mm');Sizes=@('1/3"','1/3.06"','1/3.5"','1/3.94"','1/3.6"');Stars=@('OIS','OIS','OIS');Feats=@('2x','3x','PDAF','portrait','Tetraprism','optical zoom')}
    @{Mega='10MP';Apertures=@('f/2.0','f/2.2','f/2.4','f/2.6');FL=@('50mm','52mm','67mm','72mm','77mm');Sizes=@('1/3"','1/3.52"','1/3.94"','1/3.2"');Stars=@('OIS','OIS','OIS');Feats=@('3x','2x','optical zoom','PDAF','portrait')}
    @{Mega='8MP';Apertures=@('f/2.0','f/2.2','f/2.4');FL=@('50mm','52mm','67mm','72mm','77mm');Sizes=@('1/4"','1/4.4"','1/3.6"','1/4.2"');Stars=@('OIS','OIS');Feats=@('3x','2x','optical zoom','PDAF')}
    @{Mega='64MP';Apertures=@('f/2.4','f/2.6','f/2.8');FL=@('65mm','70mm','73mm','81mm');Sizes=@('1/2"','1/1.72"','1/2.5"');Stars=@('OIS','OIS');Feats=@('3x','portrait','telephoto','periscope')}
    @{Mega='32MP';Apertures=@('f/2.0','f/2.4','f/2.6','f/2.8');FL=@('50mm','65mm','70mm','80mm');Sizes=@('1/2.8"','1/3"','1/2.7"');Stars=@('OIS','OIS');Feats=@('2x','2.5x','portrait','PDAF')}
)

$frontSensors = @(
    @{Mega='50MP';Apertures=@('f/2.0','f/2.2','f/2.45');FL=@('20mm','21mm','22mm','23mm','24mm');Sizes=@('-','-','-');Stars=@('AF','-','-');Feats=@('Autofocus','AF','HDR','Dual Pixel PDAF','Auto focus','EIS','4K','4K 60fps','OIS')}
    @{Mega='32MP';Apertures=@('f/2.0','f/2.2','f/2.4','f/2.45','f/2.5');FL=@('20mm','21mm','22mm','23mm','24mm','25mm','26mm');Sizes=@('-','-','-','-');Stars=@('AF','-','-');Feats=@('Autofocus','AF','HDR','face unlock','EIS','PDAF','Dual Pixel','4K','video')}
    @{Mega='16MP';Apertures=@('f/2.0','f/2.2','f/2.4','f/2.45','f/2.5');FL=@('20mm','21mm','22mm','23mm','24mm','25mm','26mm');Sizes=@('-','-','-');Stars=@('AF','-','-');Feats=@('AI','HDR','Autofocus','face unlock','PDAF','EIS','wide-angle')}
    @{Mega='12MP';Apertures=@('f/1.8','f/1.9','f/2.0','f/2.2','f/2.4');FL=@('20mm','21mm','22mm','23mm','24mm','25mm','26mm');Sizes=@('-','-','1/3.2"','1/3.6"','1/3.06"','1/2.8"','1/2.94"');Stars=@('AF','-','Dual pixel PDAF','OIS','Sensor-shift');Feats=@('Autofocus','HDR','Dolby Vision','Cinematic mode','Center Stage','Dual Capture','Bokeh Mode','PDAF','face ID')}
    @{Mega='8MP';Apertures=@('f/2.0','f/2.2','f/2.4');FL=@('20mm','21mm','22mm','24mm','25mm','26mm');Sizes=@('-','-');Stars=@('-','AF');Feats=@('AI','HDR','face unlock','EIS')}
    @{Mega='13MP';Apertures=@('f/2.0','f/2.2','f/2.4','f/2.5');FL=@('20mm','21mm','22mm','23mm','24mm','25mm','26mm');Sizes=@('-','-');Stars=@('-','AF');Feats=@('AF','Autofocus','HDR','face unlock','Dynamic photo')}
    @{Mega='10MP';Apertures=@('f/2.0','f/2.2','f/2.4');FL=@('20mm','21mm','22mm','23mm','24mm');Sizes=@('-','-','1/3.1"');Stars=@('AF','Dual PD','-');Feats=@('Autofocus','Dual PD','HDR','face unlock')}
    @{Mega='20MP';Apertures=@('f/2.0','f/2.2','f/2.4','f/2.45');FL=@('20mm','21mm','22mm','23mm','24mm');Sizes=@('-','-');Stars=@('-','AF');Feats=@('Autofocus','AF','HDR','face unlock','4K video')}
    @{Mega='5MP';Apertures=@('f/2.0','f/2.2','f/2.4');FL=@('-');Sizes=@('-');Stars=@('-');Feats=@('face unlock','HDR')}
)

$videoMaxList = @('4K 30fps','4K 60fps','4K 120fps','8K 24fps','8K 30fps','8K 60fps','1080p 240fps','4K 200fps')

$allVideoFeatures = @(
    @('Dolby Vision','HDR10+','ProRes RAW','Apple Log','Log','LOG','ACES','Cine')
    @('Nightography','Night Sight Video','AI Cinema','AI video enhancement','Portrait Video','Cinematic mode','Super Steady','EIS')
    @('Pro mode','ProRes','8K recording','10-bit HDR','HDR Vivid','HDR10','Hybrid Log Gamma','Slow Motion')
    @('Zeiss Cinematic','Zeiss T*','Leica film style','Hasselblad color','Vivo V3 chip','AI Video','AI Color Correction','AI Motion')
    @('6K 30fps','8K 30fps HDR','Director mode','Action mode','Super Resolution','Gyro-EIS','OIS+EIS','Optical Flow')
)

$allImageFeatures = @(
    @('AI Scene Optimization','Night Mode','Portrait Mode','Professional Mode','HDR+','Smart HDR','ProRAW','Ultra HDR')
    @('AI Enhance','Magic Eraser','Best Take','Photo Unblur','Object Eraser','AI Remove','AI Photo Edit','Magic Editor')
    @('Astrophotography','Panorama','Long exposure','Time-lapse','Macro mode','Food mode','Document mode','Monochrome')
    @('Zeiss optics','Hasselblad Natural Color','Leica Authentic','Leica Vibrant','Leica filters','Zeiss Cinematic','XMAGE','XD Fusion')
    @('AI portrait','AI beauty','Watermark','Pro mode RAW','Super Resolution','Pixel Shift','Live Photo','Dual Capture')
)

# ============================================================
# Helper functions
# ============================================================

$rng = [Random]::new()

function Pick-Random {
    param([Array]$Items)
    return $Items[$rng.Next($Items.Count)]
}

function Pick-RandomN {
    param([Array]$Items, [int]$Min = 1, [int]$Max = 5)
    $n = $rng.Next($Min, $Max + 1)
    $chosen = @()
    $copy = @($Items)
    1..$n | ForEach-Object {
        if ($copy.Count -eq 0) { return }
        $idx = $rng.Next($copy.Count)
        $chosen += $copy[$idx]
        $copy = $copy | Where-Object { $_ -ne $copy[$idx] }
    }
    return $chosen
}

function New-CameraSpec {
    param([Array]$SensorPool)
    $s = Pick-Random $SensorPool
    $mega = $s.Mega
    $aper = Pick-Random $s.Apertures
    $fl = Pick-Random $s.FL
    $size = Pick-Random $s.Sizes
    $stab = Pick-Random $s.Stars
    $featSet = Pick-RandomN $s.Feats -Min 2 -Max 5
    return @{
        megapixels = $mega
        aperture = $aper
        focalLength = $fl
        sensorSize = $size
        stabilization = $stab
        features = $featSet
    }
}

function Format-CameraSpec {
    param($Spec)
    $featsStr = ($Spec.features | ForEach-Object { "      '$_'" }) -join ",`n"
    return @"
    {
      megapixels: '$($Spec.megapixels)',
      aperture: '$($Spec.aperture)',
      focalLength: '$($Spec.focalLength)',
      sensorSize: '$($Spec.sensorSize)',
      stabilization: '$($Spec.stabilization)',
      features: [
$featsStr
      ],
    }
"@
}

function Format-PhoneEntry {
    param($Entry)
    $parts = @()

    $parts += "  {"
    $parts += "    id: '$($Entry.id)',"
    $parts += "    name: '$($Entry.name)',"
    $parts += "    brand: '$($Entry.brand)',"
    $parts += "    releaseDate: '$($Entry.releaseDate)',"

    $parts += "    mainCamera: $($Entry.mainCamera),"
    $parts += "    ultrawide: $($Entry.ultrawide),"
    $parts += "    telephoto1: $($Entry.telephoto1),"

    if ($Entry.telephoto2) {
        $parts += "    telephoto2: $($Entry.telephoto2),"
    }

    $parts += "    frontCamera: $($Entry.frontCamera),"
    $parts += "    videoMax: '$($Entry.videoMax)',"

    $vfeatsStr = ($Entry.videoFeatures | ForEach-Object { "      '$_'" }) -join ",`n"
    $parts += "    videoFeatures: ["
    $parts += $vfeatsStr
    $parts += "    ],"

    $ifeatsStr = ($Entry.imageFeatures | ForEach-Object { "      '$_'" }) -join ",`n"
    $parts += "    imageFeatures: ["
    $parts += $ifeatsStr
    $parts += "    ],"
    $parts += "  },"

    return $parts -join "`n"
}

# ============================================================
# Generate 500 phone entries
# ============================================================

$usedIds = @{}

function New-PhoneEntry {
    $brand = Pick-Random $brands
    $brandName = $brand.Name
    $modelBase = Pick-Random $brand.Models

    # Generate year/month
    $ym = Pick-Random $yearsMonth
    $year = [int]($ym.Substring(0,4))
    $monthNum = [int]($ym.Substring(5,2))

    # Generate model number based on year
    $modelNum = if ($modelBase -match '\d+$') {
        $year - 2014
    } elseif ($modelBase -match '\+( Ultra| Pro| Ultra)') {
        "$($year - 2014) Ultra"
    } elseif ($modelBase -match '\+$') {
        "$($year - 2014)+"
    } elseif ($brandName -eq 'Apple') {
        $modelStr = $modelBase
        $iphoneYear = $year - 2  # iPhones naming logic
        if ($modelStr -eq 'iPhone') { "$($iphoneYear)" }
        elseif ($modelStr -eq 'iPhone Pro') { "$($iphoneYear) Pro" }
        elseif ($modelStr -eq 'iPhone Pro Max') { "$($iphoneYear) Pro Max" }
        elseif ($modelStr -eq 'iPhone Plus') { "$($iphoneYear) Plus" }
        elseif ($modelStr -eq 'iPhone SE') { "$($iphoneYear - 4) SE" }
        else { "$($year - 2014)" }
    } elseif ($brandName -eq 'Google') {
        $pixelYear = $year - 2015
        if ($modelBase -eq 'Pixel') { "$pixelYear" }
        elseif ($modelBase -eq 'Pixel Pro') { "$pixelYear Pro" }
        elseif ($modelBase -eq 'Pixel XL') { "$pixelYear XL" }
        elseif ($modelBase -eq 'Pixel A') { "$pixelYear a" }
        else { "$pixelYear" }
    } elseif ($brandName -eq 'OnePlus') {
        if ($modelBase -eq 'OnePlus') { $year - 2011 }
        elseif ($modelBase -eq 'OnePlus Pro') { "$($year - 2011) Pro" }
        elseif ($modelBase -eq 'OnePlus Ultra') { "$($year - 2011) Ultra" }
        elseif ($modelBase -eq 'OnePlus R') { "$($year - 2011)R" }
        elseif ($modelBase -eq 'OnePlus Nord') { "$($year - 2017)" }
        elseif ($modelBase -eq 'OnePlus Ace') { "$($year - 2020)" }
        else { $year - 2011 }
    } else {
        "$($year - 2014)"
    }

    $fullName = "$brandName $modelBase $modelNum"

    # Create ID
    $idBase = ($brandName + '-' + $modelBase + '-' + $modelNum) -replace '[^\w\-]','' -replace '\s+','-'
    $id = $idBase
    $counter = 1
    while ($usedIds.ContainsKey($id)) {
        $id = "$idBase-$counter"
        $counter++
    }
    $usedIds[$id] = $true

    # Camera specs
    $mainCam = New-CameraSpec $mainSensors
    $uwCam = New-CameraSpec $uwSensors
    $teleCam = New-CameraSpec $teleSensors

    $hasSecondTele = ($rng.NextDouble() -lt 0.4)
    $tele2Cam = if ($hasSecondTele) { New-CameraSpec $teleSensors } else { $null }

    $frontCam = New-CameraSpec $frontSensors
    $videoMax = Pick-Random $videoMaxList

    $vfStack = Pick-Random $allVideoFeatures
    $vFeats = Pick-RandomN $vfStack -Min 2 -Max 5

    $imfStack = Pick-Random $allImageFeatures
    $iFeats = Pick-RandomN $imfStack -Min 2 -Max 6

    $entry = @{
        id = $id.ToLower()
        name = $fullName
        brand = $brandName
        releaseDate = $ym
        mainCamera = $mainCam
        ultrawide = $uwCam
        telephoto1 = $teleCam
        telephoto2 = $tele2Cam
        frontCamera = $frontCam
        videoMax = $videoMax
        videoFeatures = $vFeats
        imageFeatures = $iFeats
    }

    return $entry
}

# ============================================================
# Build output
# ============================================================

$entries = 1..$Count | ForEach-Object { New-PhoneEntry }

$sb = [System.Text.StringBuilder]::new()

[void]$sb.AppendLine("export interface CameraSpec {")
[void]$sb.AppendLine("  megapixels: string;")
[void]$sb.AppendLine("  aperture: string;")
[void]$sb.AppendLine("  focalLength: string;")
[void]$sb.AppendLine("  sensorSize: string;")
[void]$sb.AppendLine("  stabilization: string;")
[void]$sb.AppendLine("  features: string[];")
[void]$sb.AppendLine("}")
[void]$sb.AppendLine("")
[void]$sb.AppendLine("export interface PhoneCamera {")
[void]$sb.AppendLine("  id: string;")
[void]$sb.AppendLine("  name: string;")
[void]$sb.AppendLine("  brand: string;")
[void]$sb.AppendLine("  releaseDate: string;")
[void]$sb.AppendLine("  mainCamera: CameraSpec;")
[void]$sb.AppendLine("  ultrawide: CameraSpec;")
[void]$sb.AppendLine("  telephoto1: CameraSpec;")
[void]$sb.AppendLine("  telephoto2?: CameraSpec;")
[void]$sb.AppendLine("  frontCamera: CameraSpec;")
[void]$sb.AppendLine("  videoMax: string;")
[void]$sb.AppendLine("  videoFeatures: string[];")
[void]$sb.AppendLine("  imageFeatures: string[];")
[void]$sb.AppendLine("}")
[void]$sb.AppendLine("")
[void]$sb.AppendLine("export const phonesData: PhoneCamera[] = [")

$first = $true
foreach ($e in $entries) {
    if (-not $first) {
        [void]$sb.AppendLine("")
    }
    $first = $false

    $mainStr = Format-CameraSpec $e.mainCamera
    $uwStr = Format-CameraSpec $e.ultrawide
    $teleStr = Format-CameraSpec $e.telephoto1
    $tele2Str = if ($e.telephoto2) { Format-CameraSpec $e.telephoto2 } else { $null }
    $frontStr = Format-CameraSpec $e.frontCamera

    $vfeatsStr = ($e.videoFeatures | ForEach-Object { "    '$_'" }) -join ",`n"
    $ifeatsStr = ($e.imageFeatures | ForEach-Object { "    '$_'" }) -join ",`n"

    [void]$sb.AppendLine("  {")
    [void]$sb.AppendLine("    id: '$($e.id)',")
    [void]$sb.AppendLine("    name: '$($e.name)',")
    [void]$sb.AppendLine("    brand: '$($e.brand)',")
    [void]$sb.AppendLine("    releaseDate: '$($e.releaseDate)',")
    [void]$sb.AppendLine("    mainCamera: $mainStr,")
    [void]$sb.AppendLine("    ultrawide: $uwStr,")
    [void]$sb.AppendLine("    telephoto1: $teleStr,")
    if ($tele2Str) {
        [void]$sb.AppendLine("    telephoto2: $tele2Str,")
    }
    [void]$sb.AppendLine("    frontCamera: $frontStr,")
    [void]$sb.AppendLine("    videoMax: '$($e.videoMax)',")
    [void]$sb.AppendLine("    videoFeatures: [")
    [void]$sb.AppendLine($vfeatsStr)
    [void]$sb.AppendLine("    ],")
    [void]$sb.AppendLine("    imageFeatures: [")
    [void]$sb.AppendLine($ifeatsStr)
    [void]$sb.AppendLine("    ],")
    [void]$sb.AppendLine("  },")
}

[void]$sb.AppendLine("];")
[void]$sb.AppendLine("")
[void]$sb.AppendLine("export const brands = [...new Set(phonesData.map(p => p.brand))];")
[void]$sb.AppendLine("")
[void]$sb.AppendLine("export function getPhoneById(id: string): PhoneCamera | undefined {")
[void]$sb.AppendLine("  return phonesData.find(p => p.id === id);")
[void]$sb.AppendLine("}")
[void]$sb.AppendLine("")
[void]$sb.AppendLine("export function getPhonesByBrand(brand: string): PhoneCamera[] {")
[void]$sb.AppendLine("  return phonesData.filter(p => p.brand === brand);")
[void]$sb.AppendLine("}")

$outPath = if ([System.IO.Path]::IsPathRooted($OutputFile)) {
    $OutputFile
} else {
    Join-Path -Path $PSScriptRoot -ChildPath $OutputFile
}

$content = $sb.ToString()
Set-Content -Path $outPath -Value $content -Encoding utf8

# Stats
$brandDist = $entries | Group-Object { $_.brand } | Sort-Object Count -Descending

Write-Host "=== Generation Complete ==="
Write-Host "Total entries: $($entries.Count)"
Write-Host "Output file: $outPath"
Write-Host ""
Write-Host "Brand distribution:"
$brandDist | ForEach-Object { Write-Host ("  {0,-12} {1,3}" -f $_.Name, $_.Count) }

$hasTele2 = ($entries | Where-Object { $_.telephoto2 }).Count
Write-Host ""
Write-Host "Entries with telephoto2: $hasTele2 ($([math]::Round($hasTele2 / $entries.Count * 100, 0))%)"
Write-Host "Unique brands: $($brandDist.Count)"

$fileInfo = Get-Item $outPath
Write-Host "File size: $([math]::Round($fileInfo.Length / 1KB, 0)) KB"
