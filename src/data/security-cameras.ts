export interface SecurityCameraSpec {
  resolution: string;
  nightVision: string;
  storage: string;
  features: string[];
}

export interface SecurityCamera {
  id: string;
  name: string;
  brand: string;
  type: 'indoor' | 'outdoor' | 'doorbell' | 'solar';
  releaseDate: string;
  price: string;
  specs: SecurityCameraSpec;
  waterproof: string;
  connectivity: string[];
}

export const securityCamerasData: SecurityCamera[] = [
  {
    id: 'hikvision-c6c',
    name: '萤石 C6CN',
    brand: '萤石 (EZVIZ)',
    type: 'indoor',
    releaseDate: '2024-03',
    price: '¥199',
    specs: {
      resolution: '1080P',
      nightVision: '红外10m',
      storage: '云存储/SD卡',
      features: ['AI人形检测', '360°云台', '双向语音', '移动追踪'],
    },
    waterproof: '-',
    connectivity: ['Wi-Fi 2.4GHz', 'APP控制'],
  },
  {
    id: 'hikvision-c6cn-4mp',
    name: '萤石 C6CN 4MP',
    brand: '萤石 (EZVIZ)',
    type: 'indoor',
    releaseDate: '2024-06',
    price: '¥299',
    specs: {
      resolution: '2K 4MP',
      nightVision: '红外10m',
      storage: '云存储/SD卡',
      features: ['AI人形/人脸检测', '360°云台', '双向语音', '星光级夜视'],
    },
    waterproof: '-',
    connectivity: ['Wi-Fi 2.4/5GHz', 'APP控制'],
  },
  {
    id: 'xiaomi-c400',
    name: '小米 智能摄像机 C400',
    brand: '小米',
    type: 'indoor',
    releaseDate: '2024-02',
    price: '¥249',
    specs: {
      resolution: '2K 4MP',
      nightVision: '红外10m',
      storage: '云存储/SD卡',
      features: ['AI人形检测', '360°云台', '米家联动', '本地AI芯片'],
    },
    waterproof: '-',
    connectivity: ['Wi-Fi 2.4GHz', '蓝牙MESH', '米家APP'],
  },
  {
    id: 'xiaomi-mjjsq05py',
    name: '小米 智能摄像机 云台版 Q5CY',
    brand: '小米',
    type: 'indoor',
    releaseDate: '2023-08',
    price: '¥229',
    specs: {
      resolution: '3K 5MP',
      nightVision: '红外12m',
      storage: '云存储/SD卡',
      features: ['AI人脸识别', '宠物检测', '宝宝哭声检测', 'HDR逆光'],
    },
    waterproof: '-',
    connectivity: ['Wi-Fi 6', '米家APP'],
  },
  {
    id: 'hikvision-c3w',
    name: '萤石 C3W',
    brand: '萤石 (EZVIZ)',
    type: 'outdoor',
    releaseDate: '2024-01',
    price: '¥299',
    specs: {
      resolution: '1080P',
      nightVision: '全彩夜视30m',
      storage: '云存储/SD卡',
      features: ['IP67防水', '声光报警', '双向对讲', 'PIR人体感应'],
    },
    waterproof: 'IP67',
    connectivity: ['Wi-Fi 2.4GHz', 'APP控制'],
  },
  {
    id: 'hikvision-c3tn',
    name: '萤石 C3TN',
    brand: '萤石 (EZVIZ)',
    type: 'outdoor',
    releaseDate: '2023-11',
    price: '¥199',
    specs: {
      resolution: '2MP',
      nightVision: '红外30m',
      storage: '云存储/SD卡',
      features: ['IP67防水', '人形检测', '双向语音', 'H.265压缩'],
    },
    waterproof: 'IP67',
    connectivity: ['Wi-Fi 2.4GHz', '有线网口', 'APP控制'],
  },
  {
    id: 'hikvision-c3a-4mp',
    name: '萤石 C3A 4MP',
    brand: '萤石 (EZVIZ)',
    type: 'outdoor',
    releaseDate: '2024-05',
    price: '¥399',
    specs: {
      resolution: '4MP',
      nightVision: '全彩30m',
      storage: '云存储/SD卡',
      features: ['IP67防水', 'AI人形车检测', '声光报警', '双向对讲'],
    },
    waterproof: 'IP67',
    connectivity: ['Wi-Fi 2.4GHz', '有线网口'],
  },
  {
    id: '360-p8',
    name: '360 智能摄像机 P8',
    brand: '360',
    type: 'indoor',
    releaseDate: '2024-04',
    price: '¥269',
    specs: {
      resolution: '2K 4MP',
      nightVision: '红外10m',
      storage: '云存储/SD卡',
      features: ['AI人形检测', '360°云台', '哭声检测', '手势呼叫'],
    },
    waterproof: '-',
    connectivity: ['Wi-Fi 2.4GHz', '360智能APP'],
  },
  {
    id: '360-outdoor-p5',
    name: '360 户外版 P5',
    brand: '360',
    type: 'outdoor',
    releaseDate: '2024-02',
    price: '¥349',
    specs: {
      resolution: '2K 4MP',
      nightVision: '全彩30m',
      storage: '云存储/SD卡',
      features: ['IP66防水', 'PIR人体感应', '声光报警', '云存储'],
    },
    waterproof: 'IP66',
    connectivity: ['Wi-Fi 2.4GHz', '有线网口'],
  },
  {
    id: 'tp-link-tapo-c310',
    name: 'TP-Link Tapo C310',
    brand: 'TP-Link',
    type: 'outdoor',
    releaseDate: '2023-06',
    price: '¥199',
    specs: {
      resolution: '3MP',
      nightVision: '红外30m',
      storage: '云存储/SD卡',
      features: ['IP66防水', '人形检测', '本地存储', '双向语音'],
    },
    waterproof: 'IP66',
    connectivity: ['Wi-Fi 2.4GHz', '有线网口'],
  },
  {
    id: 'tp-link-tapo-c325wb',
    name: 'TP-Link Tapo C325WB',
    brand: 'TP-Link',
    type: 'outdoor',
    releaseDate: '2024-03',
    price: '¥299',
    specs: {
      resolution: '2K 4MP',
      nightVision: '全彩50m',
      storage: '云存储/SD卡',
      features: ['IP66防水', 'AI检测', '彩色夜视', '声音报警'],
    },
    waterproof: 'IP66',
    connectivity: ['Wi-Fi 6', '有线网口'],
  },
  {
    id: 'xiaomi-bw300',
    name: '小米 智能摄像机 BW300',
    brand: '小米',
    type: 'outdoor',
    releaseDate: '2024-08',
    price: '¥349',
    specs: {
      resolution: '2K 4MP',
      nightVision: '全彩30m',
      storage: '云存储/SD卡',
      features: ['IP66防水', 'AI人形检测', '声光报警', '双向对讲'],
    },
    waterproof: 'IP66',
    connectivity: ['Wi-Fi 2.4GHz', '米家APP'],
  },
  {
    id: 'xiaomi-aw300',
    name: '小米 智能摄像机 AW300',
    brand: '小米',
    type: 'outdoor',
    releaseDate: '2023-09',
    price: '¥199',
    specs: {
      resolution: '2MP',
      nightVision: '红外15m',
      storage: '云存储/SD卡',
      features: ['IP65防水', '人形检测', '双向语音', '本地存储'],
    },
    waterproof: 'IP65',
    connectivity: ['Wi-Fi 2.4GHz', '米家APP'],
  },
  {
    id: 'hikvision-dscd1',
    name: '萤石 智能可视门铃 E6',
    brand: '萤石 (EZVIZ)',
    type: 'doorbell',
    releaseDate: '2024-04',
    price: '¥399',
    specs: {
      resolution: '2K 4MP',
      nightVision: '红外5m',
      storage: '云存储',
      features: ['AI人脸识别', '实时对讲', 'PIR感应', '快递检测'],
    },
    waterproof: '-',
    connectivity: ['Wi-Fi 2.4GHz', 'APP控制'],
  },
  {
    id: 'xiaomi-dw5',
    name: '小米 智能门铃 5',
    brand: '小米',
    type: 'doorbell',
    releaseDate: '2024-09',
    price: '¥329',
    specs: {
      resolution: '2K 4MP',
      nightVision: '红外5m',
      storage: '云存储/SD卡',
      features: ['AI人形检测', '实时对讲', '快递检测', '变声对讲'],
    },
    waterproof: 'IP65',
    connectivity: ['Wi-Fi 2.4GHz', '米家APP'],
  },
  {
    id: 'hikvision-solar-4g',
    name: '萤石 4G太阳能摄像机',
    brand: '萤石 (EZVIZ)',
    type: 'solar',
    releaseDate: '2024-06',
    price: '¥699',
    specs: {
      resolution: '2K 4MP',
      nightVision: '全彩20m',
      storage: '云存储/SD卡',
      features: ['4G流量版', '太阳能供电', 'IP65防水', 'AI检测'],
    },
    waterproof: 'IP65',
    connectivity: ['4G SIM', 'APP控制'],
  },
  {
    id: 'xiaomi-solar-bw500',
    name: '小米 太阳能摄像机 BW500',
    brand: '小米',
    type: 'solar',
    releaseDate: '2024-10',
    price: '¥599',
    specs: {
      resolution: '2K 4MP',
      nightVision: '全彩25m',
      storage: '云存储/SD卡',
      features: ['4G流量版', '太阳能供电', 'IP66防水', 'AI人形检测'],
    },
    waterproof: 'IP66',
    connectivity: ['4G SIM', '米家APP'],
  },
  {
    id: 'tp-link-tapo-c510w',
    name: 'TP-Link Tapo C510W',
    brand: 'TP-Link',
    type: 'outdoor',
    releaseDate: '2024-08',
    price: '¥399',
    specs: {
      resolution: '2K 4MP',
      nightVision: '全彩30m',
      storage: '云存储/SD卡',
      features: ['IP65防水', 'AI检测', '彩色夜视', '追踪功能'],
    },
    waterproof: 'IP65',
    connectivity: ['Wi-Fi 2.4/5GHz'],
  },
  {
    id: 'ezviz-cb2',
    name: '萤石 CB2 智能门铃',
    brand: '萤石 (EZVIZ)',
    type: 'doorbell',
    releaseDate: '2023-10',
    price: '¥299',
    specs: {
      resolution: '2MP',
      nightVision: '红外5m',
      storage: '云存储',
      features: ['AI人形检测', '双向对讲', 'PIR感应', '无线安装'],
    },
    waterproof: 'IP65',
    connectivity: ['Wi-Fi 2.4GHz'],
  },
  {
    id: '360-p9',
    name: '360 智能摄像机 P9',
    brand: '360',
    type: 'indoor',
    releaseDate: '2024-01',
    price: '¥399',
    specs: {
      resolution: '3K 5MP',
      nightVision: '红外10m',
      storage: '云存储/SD卡',
      features: ['AI人脸识别', '360°云台', '哭声检测', '手势呼叫'],
    },
    waterproof: '-',
    connectivity: ['Wi-Fi 6', '360智能APP'],
  },
];

export const securityBrands = [...new Set(securityCamerasData.map(c => c.brand))];

export function getSecurityCameraById(id: string): SecurityCamera | undefined {
  return securityCamerasData.find(c => c.id === id);
}

export function getSecurityCamerasByType(type: 'indoor' | 'outdoor' | 'doorbell' | 'solar'): SecurityCamera[] {
  return securityCamerasData.filter(c => c.type === type);
}