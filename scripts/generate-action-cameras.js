const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, '..', 'src', 'data', 'action-cameras.ts');
let content = fs.readFileSync(file, 'utf8');

const marker = '\n];\n\nexport const actionBrands';
const splitIdx = content.indexOf(marker);
if (splitIdx === -1) throw new Error('Could not find data array end');

const header = content.slice(0, splitIdx + 1);
const footer = content.slice(splitIdx + 1);

const brandModels = [
  ['GoPro','HERO13 Black','HERO12 Black','HERO11 Black','HERO10 Black','HERO9 Black','HERO8 Black','HERO7 Black','HERO Max','HERO12 White','HERO Session'],
  ['DJI','Action 5','Action 3','Action 2','Osmo Action 4','Osmo Action','Pocket 3','Pocket 2','Osmo Mobile 7','Avata','Osmo Mobile 5'],
  ['Insta360','X5','X4','X3','GO 3','GO 3S','GO 2','One RS','One R','Ace Pro','Ace'],
  ['Sony','HDR-AS300','HDR-AS50','RX0 II','RX0','FDR-X3000R','HDR-AS200V','HDR-AZ1','RX100 V','ZV-1F','FX30'],
  ['Garmin','VIRB Ultra 30','VIRB 360','VIRB XE','VIRB X','Dash Cam 67W','Dash Cam Mini 3','VIRB Ultra 40','Garmin Varia','Garmin VA','Garmin Approach'],
  ['Akaso','BRAVE 8 LE','BRAVE 7 LE','BRAVE 6 Plus','EK7000 Pro','V50X','V50 Elite','BRAVE 4','SE8000','CS300','X-TREME 2'],
  ['SJCAM','C500X','C300','SJ8 Pro','SJ7 Star','SJ6 Legend','SJ4000','C500','C200','SJ9','SJ8 Air'],
  ['RICOH','Theta Z1','Theta SC2','Theta V','Theta X','WG-8','WG-70','Theta SC','Theta S','WG-M2','WG-6'],
  ['Xiaomi','Mi Action Camera 4K','Yi 4K+','Yi 4K','Yi 2 Pro','MiJia Mini 4K','Yi Lite','Yi Action Camera','Xiaomi Action Cam','Mi Sphere 360','Yi 4K VR'],
];

const mpPool = ['48MP','27MP','24MP','20MP','18MP','16MP','14MP','12MP','10MP','8MP'];
const apPool = ['f/1.8','f/2.0','f/2.2','f/2.4','f/2.5','f/2.8','f/3.0','f/1.9'];
const sensPool = ['1/1.3英寸','1/1.5英寸','1/1.7英寸','1/2.0英寸','1/2.3英寸','1/2.5英寸','1英寸','1/2.8英寸'];
const stabPool = ['RockSteady 5.0','RockSteady 4.0','HyperSmooth 6.0','HyperSmooth 5.0','HyperSmooth 4.0','FlowState 2.0','6-Axis 陀螺仪','EIS','4-Axis','AI增稳','HorizonLock','SuperSteady'];
const mainFeatPool = ['4K/120fps','5.3K/60fps','8K/30fps','超广角','D-Log','夜景模式','磁吸安装','前后双屏','慢动作','HDR视频','语音控制','定时拍摄','循环录制'];
const vMaxPool = ['5.3K/60fps','4K/120fps','4K/60fps','5.7K/30fps','8K/30fps','4K/30fps','1080p/60fps','2.7K/120fps'];
const vFmtPool = ['5.3K','4K','2.7K','1080p','720p'];
const vFeatPool = ['RockSteady','HorizonSteady','D-Log M','水下色彩还原','HDR','慢动作','延时摄影','TimeWarp','车载模式','Loop Recording','定时拍摄','语音控制','GPS记录'];
const imgFeatPool = ['48MP Photo','RAW','PureShot','SuperNight','Timelapse','Burst','HDR Photo','Night Mode','Panorama','Interval Photo'];
const battPool = ['1770mAh (160分钟)','1900mAh (180分钟)','1500mAh (135分钟)','1200mAh (100分钟)','580mAh (70分钟)','2000mAh (200分钟)','1050mAh (90分钟)','1300mAh (120分钟)'];
const waterPool = ['18m (无壳)','10m (无壳)','5m (无壳)','40m (带壳)','60m (带壳)','30m (带壳)','20m (带壳)'];
const weightPool = ['145g','130g','120g','154g','100g','56g','170g','85g','110g','200g'];
const screenPool = ['2.25英寸后触屏','2.0英寸后触屏','1.4英寸前彩 + 2.25英寸后触','1.76英寸后触','1.5英寸前屏','2.4英寸后触屏','1.3英寸前彩 + 2.0英寸后触'];
const connPool = ['Wi-Fi','Bluetooth','USB-C','GPS','NFC','Micro HDMI','USB 2.0','USB 3.0'];

const rng = () => Math.floor(Math.random() * 1000000);
const pick = (arr, count) => {
  const picked = new Set();
  while (picked.size < count) picked.add(arr[Math.floor(rng() % arr.length)]);
  return [...picked];
};

let entries = [];

for (let i = 0; i < 12; i++) {
  const bi = i % brandModels.length;
  const brand = brandModels[bi][0];
  const model = brandModels[bi][1 + Math.floor(i / brandModels.length) % 10];
  const name = `${brand} ${model}`;
  const id = name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/--+/g, '-').replace(/-$/, '');

  const priceVal = 599 + (rng() % 4400);
  const price = `¥${priceVal.toLocaleString('zh-CN')}`;
  const year = 2020 + (i % 6);
  const month = 1 + (rng() % 12);
  const releaseDate = `${year}-${String(month).padStart(2, '0')}`;

  const mps = mpPool[i % mpPool.length];
  const ap = apPool[i % apPool.length];
  const sen = sensPool[i % sensPool.length];
  const fl = i % 3 === 0 ? `\n      focalLength: '${(2 + (rng() % 4))}.0mm',` : '';
  const stab = stabPool[i % stabPool.length];
  const mfs = pick(mainFeatPool, 3 + (rng() % 2));
  const vMax = vMaxPool[i % vMaxPool.length];
  const fmts = pick(vFmtPool, 3 + (rng() % 2)).sort((a, b) => {
    const na = parseInt(a.replace(/[^0-9]/g,'')) || 0;
    const nb = parseInt(b.replace(/[^0-9]/g,'')) || 0;
    return nb - na;
  });
  const vfs = pick(vFeatPool, 3 + (rng() % 2));
  const imfs = pick(imgFeatPool, 2 + (rng() % 2));
  const batt = battPool[i % battPool.length];
  const water = waterPool[i % waterPool.length];
  const weight = weightPool[i % weightPool.length];
  const dims = `${60 + (rng() % 21)} x ${30 + (rng() % 26)} x ${20 + (rng() % 21)}mm`;
  const screen = screenPool[i % screenPool.length];
  const conns = pick(connPool, 2 + (rng() % 2));

  entries.push(`  {
    id: '${id}',
    name: '${name}',
    brand: '${brand}',
    releaseDate: '${releaseDate}',
    price: '${price}',
    mainCamera: {
      megapixels: '${mps}',
      aperture: '${ap}',${fl}
      sensorSize: '${sen}',
      stabilization: '${stab}',
      features: [${mfs.map(f => `'${f}'`).join(', ')}],
    },
    videoMax: '${vMax}',
    videoFormats: [${fmts.map(f => `'${f}'`).join(', ')}],
    videoFeatures: [${vfs.map(f => `'${f}'`).join(', ')}],
    imageFeatures: [${imfs.map(f => `'${f}'`).join(', ')}],
    battery: '${batt}',
    waterproof: '${water}',
    weight: '${weight}',
    dimensions: '${dims}',
    screen: '${screen}',
    connectivity: [${conns.map(c => `'${c}'`).join(', ')}],
  },`);
}

const output = header + '\n' + entries.join('\n') + '\n' + footer;
fs.writeFileSync(file, output, 'utf8');

const newLines = fs.readFileSync(file, 'utf8');
const cnt = (newLines.match(/^\s+id:/gm) || []).length;
console.log(`action-cameras.ts: ${cnt} entries`);
