const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, '..', 'src', 'data', 'cameras.ts');
let content = fs.readFileSync(file, 'utf8');

const marker = '\n];\n\nexport const cameraBrands';
const splitIdx = content.indexOf(marker);
if (splitIdx === -1) throw new Error('Could not find data array end');

const header = content.slice(0, splitIdx + 1);
const footer = content.slice(splitIdx + 1);

const brandModels = [
  ['Canon', 'EOS R', 'EOS RP', 'EOS R10', 'EOS R50', 'EOS R8', 'EOS R5', 'EOS R3', 'EOS R7', 'EOS R6', 'EOS R100'],
  ['Sony', 'A7 IV', 'A7S III', 'A7C', 'A6700', 'A6100', 'A6400', 'A6600', 'A1', 'A7R III', 'A9 II'],
  ['Nikon', 'Z5', 'Z6 II', 'Z7 II', 'Z50', 'Z30', 'Zfc', 'Z9', 'Zf', 'Z6 III', 'Z8'],
  ['Fujifilm', 'X-T4', 'X-T30 II', 'X-S10', 'X100V', 'X-E4', 'GFX 100S', 'GFX 50S II', 'X-Pro3', 'X-T200', 'X-H2S'],
  ['Panasonic', 'Lumix S5', 'Lumix GH6', 'Lumix G100', 'Lumix S1', 'Lumix S1R', 'Lumix G9', 'Lumix S1H', 'Lumix GX9', 'Lumix FZ1000 II', 'Lumix ZS200'],
  ['Leica', 'Q2', 'M11', 'SL2', 'M10-P', 'Q-P', 'D-Lux 7', 'V-Lux 5', 'M10 Monochrom', 'CL', 'SL2-S'],
  ['OM SYSTEM', 'OM-1', 'OM-5', 'OM-D E-M1X', 'OM-D E-M10 IV', 'OM-D E-M5 III', 'TG-7', 'TG-6', 'OM-D E-M1 III', 'PEN E-P7', 'OM-3'],
  ['Blackmagic', 'Pocket Cinema 6K Pro', 'Pocket Cinema 4K', 'URSA Mini Pro 12K', 'Micro Studio 4K G2', 'Video Assist', 'URSA Broadcast', 'Studio 4K Plus', 'DaVinci Panel', 'Pocket 6K G2', 'BM 3G-SDI'],
  ['Pentax', 'K-3 III', 'K-1 II', 'KF', 'WG-8', 'K-70', '645Z', 'KP', 'K-S2', 'WG-6', 'Q-S1'],
  ['Sigma', 'fp', 'fp L', 'sd Quattro H', 'dp Quattro', 'BF', 'sd Quattro', 'dp Quattro 4K', 'fp Ultra', 'fp II', 'dp3 Quattro'],
  ['Hasselblad', 'X1D II 50C', '907X', 'H6D-100c', 'CFV II 50C', 'XPan', 'H6D-400c', '500C/M', 'X2D', '907X 100C', 'X1D'],
];

const sensorTypes = [
  '全画幅 BSI-CMOS', '全画幅 CMOS', '全画幅 stacked CMOS', 'APS-C CMOS',
  'APS-C X-Trans CMOS', 'MFT Live MOS', '中画幅 CMOS', '全画幅 BSI-CMOS (部分堆叠)',
];
const mpPool = ['24.2MP','26.1MP','33MP','45.7MP','61MP','20.4MP','40.2MP','50.1MP','30.3MP','12.2MP','47MP','100MP','15MP','36MP','18MP'];
const isoPool = ['100-51200','100-102400','50-204800','100-25600','100-64000','100-12800','100-32000'];
const stabPool = ['5级 IBIS','6级 IBIS','7级 IBIS','8级 IBIS','机身防抖','电子防抖','4.5级 IBIS','5.5级 IBIS'];
const afPool = ['759点相位检测 + AI','1053点 + 深度学习 AF','493点 + 3D追踪','425点 混合AF','273点 相位检测','693点 + AI主体识别','117点 对比度检测','315点 智能追踪','105点 十字型','自动对焦','399点 相位检测','81点 区域AF'];
const featPool = ['AI主体识别','深度学习AF','预拍摄功能','无黑屏连拍','8K视频','4K 120fps','6K超采样','双原生ISO','像素位移合成','机内RAW处理','HEIF支持','HDR PQ','防尘防滴','双卡槽','USB-C充电','Wi-Fi 6E','蓝牙5.0','主体追踪','鸟类识别','延迟摄影','多重曝光','对焦包围','静音快门','人脸检测','眼部追踪'];
const resPool = ['8K 60fps / 4K 120fps','6K 60fps / 4K 120fps','4K 120fps','4K 60fps','8K 30fps / 4K 120fps','5.7K 60fps / 4K 120fps','6K 30fps / 4K 60fps','8K 24fps / 4K 60fps','DCI 4K 60fps'];
const fmtPool = ['8K','6K','5.7K','4K','2.7K','1080p','720p'];
const vFeatPool = ['Log录制','10-bit 4:2:2','HLG','HDR','变形模式','内录RAW','HDMI RAW输出','机内降采样','音频输入','时间码','帧内压缩','ProRes RAW','BRAW','All-I压缩','慢动作120fps','V-Log'];
const burstPool = ['30fps RAW / 60fps JPEG','20fps RAW / 30fps JPEG','10fps (机械快门)','14fps (电子快门)','40fps RAW','8fps (机械快门)','15fps RAW / 20fps JPEG','12fps RAW','5fps (机械快门)','25fps (电子快门)','120fps (裁切模式)','60fps JPEG'];
const battPool = ['CIPA 530张','CIPA 450张','CIPA 390张','CIPA 600张','CIPA 340张','CIPA 480张','CIPA 350张','CIPA 580张','CIPA 420张','CIPA 320张'];
const weightPool = ['630g','710g','580g','445g','800g','520g','660g','950g','395g','700g','850g','480g','320g','1500g','1200g','540g','685g','490g'];
const screenPool = ['3英寸 162万点翻转屏','3.2英寸 210万点翻转屏','3英寸 104万点翻转屏','3.2英寸 184万点翻转屏','3.5英寸 236万点翻转屏','2.95英寸 162万点翻转屏','3英寸 92万点固定屏','3.2英寸 233万点翻转屏','3.69英寸 OLED取景器','3英寸 122万点翻转屏','2.5英寸 80万点固定屏'];
const connPool = ['Wi-Fi 6E','Wi-Fi 6','Wi-Fi 5','蓝牙5.0','蓝牙5.2','USB-C','HDMI','HDMI 2.1','耳机/麦克风','USB 3.2 Gen 2','USB 2.0','USB-C PD'];
const priceRanges = [{min:499,max:2999},{min:3499,max:7999},{min:8999,max:17999},{min:18999,max:49999}];

const rng = () => Math.floor(Math.random() * 1000000);
const pick = (arr, count) => {
  const picked = new Set();
  while (picked.size < count) picked.add(arr[Math.floor(rng() % arr.length)]);
  return [...picked];
};

let entries = [];

for (let i = 0; i < 50; i++) {
  const bi = i % brandModels.length;
  const brand = brandModels[bi][0];
  const model = brandModels[bi][1 + Math.floor(i / brandModels.length) % 10];
  const name = `${brand} ${model}`;
  const id = name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/--+/g, '-').replace(/-$/, '');

  const pr = priceRanges[i % priceRanges.length];
  const priceVal = pr.min + Math.floor(rng() % (pr.max - pr.min + 1));
  const price = `¥${priceVal.toLocaleString('zh-CN')}`;
  const year = 2020 + (i % 7);
  const month = 1 + (rng() % 12);
  const releaseDate = `${year}-${String(month).padStart(2, '0')}`;

  const mps = mpPool[i % mpPool.length];
  const sType = sensorTypes[i % sensorTypes.length];
  const iso = isoPool[i % isoPool.length];
  const stab = stabPool[i % stabPool.length];
  const af = afPool[i % afPool.length];
  const feats = pick(featPool, 4 + (rng() % 3));
  const vMax = resPool[i % resPool.length];
  const selectedFormats = pick(fmtPool, 3 + (rng() % 2)).sort((a, b) => {
    const na = parseInt(a.replace(/[^0-9]/g,'')) || 0;
    const nb = parseInt(b.replace(/[^0-9]/g,'')) || 0;
    return nb - na;
  });
  const vFeats = pick(vFeatPool, 2 + (rng() % 3));
  const burst = burstPool[i % burstPool.length];
  const battery = battPool[i % battPool.length];
  const weight = weightPool[i % weightPool.length];
  const screen = screenPool[i % screenPool.length];
  const conns = pick(connPool, 2 + (rng() % 3));

  entries.push(`  {
    id: '${id}',
    name: '${name}',
    brand: '${brand}',
    releaseDate: '${releaseDate}',
    price: '${price}',
    sensor: {
      megapixels: '${mps}',
      sensorType: '${sType}',
      iso: '${iso}',
      stabilization: '${stab}',
      autofocus: '${af}',
      features: [${feats.map(f => `'${f}'`).join(', ')}],
    },
    video: {
      maxResolution: '${vMax}',
      formats: [${selectedFormats.map(f => `'${f}'`).join(', ')}],
      features: [${vFeats.map(f => `'${f}'`).join(', ')}],
    },
    burst: '${burst}',
    battery: '${battery}',
    weight: '${weight}',
    screen: '${screen}',
    connectivity: [${conns.map(c => `'${c}'`).join(', ')}],
  },`);
}

const output = header + '\n' + entries.join('\n') + '\n' + footer;
fs.writeFileSync(file, output, 'utf8');

const newLines = fs.readFileSync(file, 'utf8');
const cnt = (newLines.match(/^\s+id:/gm) || []).length;
console.log(`cameras.ts: ${cnt} entries`);
