const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, '..', 'src', 'data', 'security-cameras.ts');
let content = fs.readFileSync(file, 'utf8');

const marker = '\n];\n\nexport const securityBrands';
const splitIdx = content.indexOf(marker);
if (splitIdx === -1) throw new Error('Could not find data array end');

const header = content.slice(0, splitIdx + 1);
const footer = content.slice(splitIdx + 1);

const brandModels = [
  ['Hikvision','DS-2CD2387G2-LU','DS-2CD2347G2-LU','DS-2CD2386G2-I','DS-2CD2T87G2-L','DS-2CD2047G2-L','DS-2CD2385FWD-I','DS-2CD2T47G2-L','DS-2CD2383G2-I','DS-2CD2T83G2-I','DS-2CD2386G2-IU'],
  ['Dahua','IPC-HDW3849HP-AS','IPC-HDW2849HP-AS','IPC-HDW2549HP-AS','IPC-HFW3849HP-AS','IPC-HDBW2849R1','IPC-HDW3849HP','IPC-HFW2849HP','IPC-HDBW2549','IPC-HDW2549HP','IPC-HFW2549HP'],
  ['EZVIZ','C8W Pro','C8C','C6W 4MP','C6N','C3T','C3A','C8W','C6T','C1C','L4 Pro'],
  ['Xiaomi','C700','C500','C300','C200','AW300','BW500','CW700','CW400','BW400','CW300'],
  ['TP-Link','Tapo C200','Tapo C210','Tapo C310','Tapo C320WS','Tapo C420','Tapo C520WS','Tapo C100','Tapo C110','Tapo C425','Tapo C225'],
  ['Ring','Stick Up Cam 5MP','Indoor Cam 2K','Spotlight Cam Plus','Doorbell Cam 4K','Floodlight Cam Pro','Outdoor Cam 4K','Peephole Cam','Indoor Cam 2nd Gen','Stick Up Cam Pro','Alarm Pro'],
  ['Arlo','Ultra 2','Pro 5','Pro 4','Essential XL','Video Doorbell 2K','Essential 2K','Pro 3 Floodlight','Ultra 2 Floodlight','Essential Indoor','Pro 5S'],
  ['Google Nest','Cam IQ Outdoor','Cam IQ Indoor','Nest Cam (Battery)','Nest Doorbell (Battery)','Nest Cam with Floodlight','Nest Cam Indoor','Nest Cam Outdoor','Hello Doorbell','Nest Cam IQ','Dropcam'],
  ['Annke','NC800','NC500','NC400','NC300','C800','C500','C400','C300','NC200','NC100'],
  ['Reolink','RLC-811A','RLC-810A','RLC-520A','RLC-511WA','Argus 3 Pro','Argus PT Ultra','E1 Pro','E1 Zoom','Duo 2','RLC-842A'],
  ['Uniview','IPC2324SB','IPC2314SB','IPC2324SR3','IPC3614SR3','IPC2324SB-D','IPC2314SR3','IPC3614SR3-D','IPC2324SB-F40','IPC2314SB-F40','IPC3614SB'],
  ['Bosch','FLEXIDOME IP 8000','FLEXIDOME IP 7000','DINION IP 8000','DINION IP 7000','AUTODOME IP 7000','FLEXIDOME IP micro 8000','DINION IP thermal 8000','FLEXIDOME IP starlight 8000','DINION IP bullet 8000','MIC IP 7000'],
];

const resPool = ['4K 8MP','4K 6MP','3K 5MP','2K 4MP','1080P','4K Ultra HD','2K QHD','5MP'];
const nightPool = ['红外30m','红外20m','红外10m','全彩夜视30m','全彩夜视20m','星光级夜视15m','红外50m','智能全彩','全彩夜视40m','红外25m'];
const storagePool = ['云存储/SD卡','云存储/NVR/SD卡','云存储/SD卡/NAS','NVR/SD卡','云存储/SD卡/SDHC'];
const featPool = ['AI人形检测','AI人脸识别','AI车辆检测','AI宠物检测','AI物品检测','AI哭声检测','AI异常声音检测','AI区域入侵','AI越界检测','AI烟火检测','360°云台','双向语音','声光报警','移动追踪','IP67防水','防破坏设计','H.265压缩','H.265+/H.264+','Wi-Fi 6','PoE供电','星光级夜视','智能追踪','隐私遮蔽','云台追踪','智能报警','人员计数','热度图','人脸抓拍','车牌识别','警戒区域'];
const typePool = ['indoor','outdoor','doorbell','solar'];
const waterPool = ['IP67','IP66','IP65','IP55','IPX5','IPX4','-'];
const connPool = ['Wi-Fi 2.4GHz','Wi-Fi 6','有线网口','PoE','蓝牙5.0','蓝牙MESH','4G','APP控制','ONVIF','RTSP','NVR连接','HomeKit'];

const rng = () => Math.floor(Math.random() * 1000000);
const pick = (arr, count) => {
  const picked = new Set();
  while (picked.size < count) picked.add(arr[Math.floor(rng() % arr.length)]);
  return [...picked];
};

let entries = [];

for (let i = 0; i < 30; i++) {
  const bi = i % brandModels.length;
  const brand = brandModels[bi][0];
  const model = brandModels[bi][1 + Math.floor(i / brandModels.length) % 10];
  const name = `${brand} ${model}`;
  const id = name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/--+/g, '-').replace(/-$/, '');

  const priceVal = 99 + (rng() % 1901);
  const price = `¥${priceVal.toLocaleString('zh-CN')}`;
  const year = 2020 + (i % 6);
  const month = 1 + (rng() % 12);
  const releaseDate = `${year}-${String(month).padStart(2, '0')}`;

  const type = typePool[i % typePool.length];
  const res = resPool[i % resPool.length];
  const night = nightPool[i % nightPool.length];
  const storage = storagePool[i % storagePool.length];
  const feats = pick(featPool, 3 + (rng() % 3));
  const water = waterPool[i % waterPool.length];
  const conns = pick(connPool, 2 + (rng() % 2));

  entries.push(`  {
    id: '${id}',
    name: '${name}',
    brand: '${brand}',
    type: '${type}',
    releaseDate: '${releaseDate}',
    price: '${price}',
    specs: {
      resolution: '${res}',
      nightVision: '${night}',
      storage: '${storage}',
      features: [${feats.map(f => `'${f}'`).join(', ')}],
    },
    waterproof: '${water}',
    connectivity: [${conns.map(c => `'${c}'`).join(', ')}],
  },`);
}

const output = header + '\n' + entries.join('\n') + '\n' + footer;
fs.writeFileSync(file, output, 'utf8');

const newLines = fs.readFileSync(file, 'utf8');
const cnt = (newLines.match(/^\s+id:/gm) || []).length;
console.log(`security-cameras.ts: ${cnt} entries`);
