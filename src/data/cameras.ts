export interface CameraSpec {
  megapixels: string;
  sensorType: string;
  iso: string;
  stabilization: string;
  autofocus: string;
  features: string[];
}

export interface VideoSpec {
  maxResolution: string;
  formats: string[];
  features: string[];
}

export interface Camera {
  id: string;
  name: string;
  brand: string;
  releaseDate: string;
  price: string;
  sensor: CameraSpec;
  video: VideoSpec;
  burst: string;
  battery: string;
  weight: string;
  screen: string;
  connectivity: string[];
}

export const camerasData: Camera[] = [
  {
    id: 'canon-eos-r6v',
    name: 'Canon EOS R6 V',
    brand: 'Canon',
    releaseDate: '2026-05',
    price: '¥18,999',
    sensor: {
      megapixels: '32.5MP',
      sensorType: '全画幅 CMOS',
      iso: '100-102400',
      stabilization: '8级 IBIS',
      autofocus: '1053点 + 深度学习 AF',
      features: ['40fps RAW连拍', '7K RAW录制', '预拍摄功能', '动作优先对焦', '6K Open Gate'],
    },
    video: {
      maxResolution: '7K 60fps RAW / 4K 120fps',
      formats: ['7K RAW', '4K', '2.7K', '1080p'],
      features: ['7K Open Gate', 'Canon Log 2/3', 'XF-HEVC/S', '12-bit HDMI', '6小时录制'],
    },
    burst: '40fps RAW / 60fps JPEG / 预拍20张',
    battery: 'CIPA 450张',
    weight: '598g (机身)',
    screen: '3英寸 162万点翻转屏',
    connectivity: ['Wi-Fi 6', 'Bluetooth 5.1', 'USB-C', 'HDMI', '网口'],
  },
  {
    id: 'sony-a7v',
    name: 'Sony A7 V',
    brand: 'Sony',
    releaseDate: '2025-12',
    price: '¥15,999',
    sensor: {
      megapixels: '33MP',
      sensorType: '全画幅 BSI-CMOS (部分堆叠)',
      iso: '100-51200',
      stabilization: '7级 IBIS',
      autofocus: '759点相位检测 + AI主体识别',
      features: ['人体/动物/鸟类/昆虫/车辆/火车/飞机识别', '30fps无黑屏连拍', 'Pre-burst预拍1秒'],
    },
    video: {
      maxResolution: '4K 60fps',
      formats: ['4K', '2.7K', '1080p'],
      features: ['7K过采样4K', '4K 120fps (APS-C裁切)', 'S-Log3', '10-bit 4:2:2'],
    },
    burst: '30fps (电子快门) / 10fps (机械快门)',
    battery: 'CIPA 530张',
    weight: '659g',
    screen: '3.2英寸 210万点翻转屏',
    connectivity: ['Wi-Fi 6E', 'Bluetooth 5.0', 'USB-C', 'HDMI'],
  },
  {
    id: 'canon-eos-r6iii',
    name: 'Canon EOS R6 Mark III',
    brand: 'Canon',
    releaseDate: '2025-11',
    price: '¥19,999',
    sensor: {
      megapixels: '32.5MP',
      sensorType: '全画幅 CMOS',
      iso: '100-102400',
      stabilization: '8级 IBIS',
      autofocus: '1053点 + 深度学习 AF',
      features: ['40fps RAW连拍', '预拍摄功能', '动作优先对焦', '眼控对焦'],
    },
    video: {
      maxResolution: '6K 60fps RAW / 4K 120fps',
      formats: ['6K RAW', '4K', '2.7K', '1080p'],
      features: ['Open Gate 3:2录制', '内部RAW录制', 'Canon Log 3', 'HDR PQ'],
    },
    burst: '40fps RAW / 60fps JPEG',
    battery: 'CIPA 450张',
    weight: '670g',
    screen: '3英寸 162万点翻转屏',
    connectivity: ['Wi-Fi 6', 'Bluetooth', 'USB-C', 'HDMI', '耳机/麦克风'],
  },
  {
    id: 'nikon-z6iii',
    name: 'Nikon Z6 III',
    brand: 'Nikon',
    releaseDate: '2024-06',
    price: '¥13,999',
    sensor: {
      megapixels: '24.5MP',
      sensorType: '全画幅 部分堆叠 CMOS',
      iso: '100-64000',
      stabilization: '8级 IBIS',
      autofocus: '299点 + 3D追踪',
      features: ['-10EV低光对焦', '9种主体识别', '120fps连拍', '8K RAW输出'],
    },
    video: {
      maxResolution: '6K 60fps / 4K 120fps',
      formats: ['6K', '4K', '1080p'],
      features: ['ProRes RAW HQ', 'N-Log', '12-bit RAW输出', '6K/60p内部录制'],
    },
    burst: '20fps RAW / 60fps JPEG / 120fps (裁切)',
    battery: 'CIPA 390张',
    weight: '670g',
    screen: '3.2英寸 210万点翻转屏',
    connectivity: ['Wi-Fi 6E', 'Bluetooth', 'USB-C', 'HDMI', '耳机/麦克风'],
  },
  {
    id: 'nikon-z70200-f28-vr-s-ii',
    name: 'Nikon Z 70-200mm f/2.8 VR S II',
    brand: 'Nikon',
    releaseDate: '2026-02',
    price: '¥16,999',
    sensor: {
      megapixels: '-',
      sensorType: '镜头',
      iso: '-',
      stabilization: 'VR光学防抖',
      autofocus: 'Silky Swift VCM (SSVCM)',
      features: ['998g同类最轻', '减重26%', '3.5倍快速对焦', '6种镜片校正'],
    },
    video: {
      maxResolution: '-',
      formats: ['-'],
      features: ['内变焦', '恒定f/2.8', '防尘防滴'],
    },
    burst: '-',
    battery: '-',
    weight: '998g',
    screen: '-',
    connectivity: ['-'],
  },
  {
    id: 'sony-a7rv',
    name: 'Sony A7R V',
    brand: 'Sony',
    releaseDate: '2022-10',
    price: '¥23,999',
    sensor: {
      megapixels: '61MP',
      sensorType: '全画幅 BSI-CMOS',
      iso: '100-32000',
      stabilization: '8级 IBIS',
      autofocus: '693点 + AI主体识别',
      features: ['8K分辨率', 'Pixel Shift多张合成240MP', '人体姿态识别', '先进AI对焦'],
    },
    video: {
      maxResolution: '8K 25fps / 4K 60fps',
      formats: ['8K', '4K', '1080p'],
      features: ['8K过采样4K', 'S-Log3', '10-bit 4:2:2', '呼吸效应补偿'],
    },
    burst: '10fps Hi+',
    battery: 'CIPA 530张',
    weight: '723g',
    screen: '3.2英寸 209万点翻转屏',
    connectivity: ['Wi-Fi 6E', 'Bluetooth 5.0', 'USB-C', 'HDMI'],
  },
  {
    id: 'nikon-z8',
    name: 'Nikon Z8',
    brand: 'Nikon',
    releaseDate: '2023-05',
    price: '¥26,999',
    sensor: {
      megapixels: '45.7MP',
      sensorType: '全画幅 stacked CMOS',
      iso: '64-25600',
      stabilization: '6级 IBIS',
      autofocus: '493点 + 3D追踪',
      features: ['20fps RAW连拍', '120fps JPEG连拍', '8K 60fps视频', '无黑屏连拍'],
    },
    video: {
      maxResolution: '8K 60fps / 4K 120fps',
      formats: ['8K', '4K', '1080p'],
      features: ['8K RAW录制', 'ProRes RAW HQ', 'N-Log', '12-bit RAW输出'],
    },
    burst: '20fps RAW / 120fps JPEG',
    battery: 'CIPA 340张',
    weight: '910g',
    screen: '3.2英寸 210万点翻转屏',
    connectivity: ['Wi-Fi 6E', 'Bluetooth 5.0', 'USB-C', 'HDMI'],
  },
  {
    id: 'canon-eos-r5ii',
    name: 'Canon EOS R5 II',
    brand: 'Canon',
    releaseDate: '2024-07',
    price: '¥27,999',
    sensor: {
      megapixels: '45MP',
      sensorType: '全画幅 stacked CMOS',
      iso: '100-51200',
      stabilization: '8级 IBIS',
      autofocus: '1053点 + 深度学习',
      features: ['60fps RAW连拍', '8K 60fps', '眼控对焦', '动作优先AF'],
    },
    video: {
      maxResolution: '8K 60fps RAW / 4K 120fps',
      formats: ['8K RAW', '8K', '4K', '1080p'],
      features: ['8K RAW录制', '内部ProRes RAW', 'Canon Log 3', '16级动态范围'],
    },
    burst: '60fps RAW / 40fps JPEG',
    battery: 'CIPA 220张 (LCD)',
    weight: '738g',
    screen: '3.2英寸 210万点翻转屏',
    connectivity: ['Wi-Fi 6', 'Bluetooth', 'USB-C', 'HDMI', '网口'],
  },
  {
    id: 'fuji-xt5',
    name: 'Fujifilm X-T5',
    brand: 'Fujifilm',
    releaseDate: '2022-11',
    price: '¥10,499',
    sensor: {
      megapixels: '40.2MP',
      sensorType: 'APS-C X-Trans CMOS 5 HR',
      iso: '125-12800',
      stabilization: '7级 IBIS',
      autofocus: '425点 + AI主体识别',
      features: ['19种胶片模拟', 'Pixel Shift 160MP', 'AI主体识别', '优秀高感'],
    },
    video: {
      maxResolution: '6.2K 30fps / 4K 60fps',
      formats: ['6.2K', '4K', '1080p'],
      features: ['6.2K过采样4K', 'F-Log2', 'ProRes RAW', '高达13+档动态范围'],
    },
    burst: '15fps (机械) / 20fps (电子)',
    battery: 'CIPA 580张',
    weight: '557g',
    screen: '3英寸 184万点三向翻转屏',
    connectivity: ['Wi-Fi 6', 'Bluetooth 4.2', 'USB-C', 'HDMI'],
  },
  {
    id: 'sony-a1ii',
    name: 'Sony A1 II',
    brand: 'Sony',
    releaseDate: '2024-11',
    price: '¥48,999',
    sensor: {
      megapixels: '50MP',
      sensorType: '全画幅 stacked BSI-CMOS',
      iso: '100-32000',
      stabilization: '8.5级 IBIS',
      autofocus: '759点 + 先进AI',
      features: ['30fps 50MP连拍', '8K 30fps', '8K过采样4K', '无黑屏连拍'],
    },
    video: {
      maxResolution: '8K 30fps / 4K 120fps',
      formats: ['8K', '4K', '1080p'],
      features: ['8K RAW录制', 'S-Log3', '16-bit RAW输出', 'All-I编码'],
    },
    burst: '30fps RAW (无黑屏)',
    battery: 'CIPA 420张',
    weight: '743g',
    screen: '3.2英寸 209万点翻转屏',
    connectivity: ['Wi-Fi 6E', 'Bluetooth 5.0', 'USB-C', 'HDMI', '网口'],
  },
  {
    id: 'nikon-z9',
    name: 'Nikon Z9',
    brand: 'Nikon',
    releaseDate: '2021-12',
    price: '¥35,999',
    sensor: {
      megapixels: '45.7MP',
      sensorType: '全画幅 stacked CMOS',
      iso: '64-25600',
      stabilization: '6级 IBIS',
      autofocus: '493点 + 3D追踪',
      features: ['20fps RAW连拍1000+张', '8K 60fps', '无机械快门', '旗舰级可靠性'],
    },
    video: {
      maxResolution: '8K 60fps / 4K 120fps',
      formats: ['8K', '4K', '1080p'],
      features: ['8K RAW录制', 'ProRes RAW HQ', 'N-Log', '12-bit RAW输出'],
    },
    burst: '20fps RAW (无限缓冲)',
    battery: 'CIPA 700张',
    weight: '1340g',
    screen: '3.2英寸 210万点翻转屏',
    connectivity: ['Wi-Fi 6E', 'Bluetooth 5.0', 'USB-C', 'HDMI', '网口'],
  },
  {
    id: 'sony-a9iii',
    name: 'Sony A9 III',
    brand: 'Sony',
    releaseDate: '2023-11',
    price: '¥36,999',
    sensor: {
      megapixels: '24MP',
      sensorType: '全画幅 全域快门 CMOS',
      iso: '250-16000',
      stabilization: '8级 IBIS',
      autofocus: '759点 + AI',
      features: ['全球首款全域快门', '120fps无黑屏连拍', '无果冻效应', '闪光同步'],
    },
    video: {
      maxResolution: '4K 120fps',
      formats: ['4K', '1080p'],
      features: ['全域快门无果冻', 'S-Log3', '专业视频功能', '6K过采样4K'],
    },
    burst: '120fps (无黑屏)',
    battery: 'CIPA 400张',
    weight: '702g',
    screen: '3.2英寸 209万点翻转屏',
    connectivity: ['Wi-Fi 6E', 'Bluetooth 5.0', 'USB-C', 'HDMI'],
  },
  {
    id: 'sony-a7c-ii',
    name: 'Sony A7C II',
    brand: 'Sony',
    releaseDate: '2023-08',
    price: '¥11,999',
    sensor: {
      megapixels: '33MP',
      sensorType: '全画幅 BSI-CMOS',
      iso: '100-51200',
      stabilization: '7级 IBIS',
      autofocus: '759点 + AI主体识别',
      features: ['紧凑全画幅', 'AI对焦', '人体姿态识别', '创意外观'],
    },
    video: {
      maxResolution: '4K 60fps / 7K过采样',
      formats: ['4K', '1080p'],
      features: ['7K过采样4K', 'S-Log3', '10-bit 4:2:2', 'AI自动构图'],
    },
    burst: '10fps',
    battery: 'CIPA 560张',
    weight: '514g',
    screen: '3英寸 103万点翻转屏',
    connectivity: ['Wi-Fi 5', 'Bluetooth 4.2', 'USB-C', 'HDMI'],
  },
  {
    id: 'nikon-z50ii',
    name: 'Nikon Z50 II',
    brand: 'Nikon',
    releaseDate: '2024-11',
    price: '¥6,999',
    sensor: {
      megapixels: '21MP',
      sensorType: 'APS-C CMOS',
      iso: '100-51200',
      stabilization: '无 IBIS (电子防抖)',
      autofocus: '209点 + 3D追踪',
      features: ['9种主体识别', '3D追踪对焦', 'C30连拍', '高性价比'],
    },
    video: {
      maxResolution: '4K 60fps',
      formats: ['4K', '1080p'],
      features: ['4K 30fps 全幅', '4K 60fps (裁切)', 'N-Log', '6K过采样'],
    },
    burst: '30fps JPEG / 11fps RAW',
    battery: 'CIPA 300张',
    weight: '550g',
    screen: '3.2英寸 104万点翻转屏',
    connectivity: ['Wi-Fi 5', 'Bluetooth', 'USB-C', 'HDMI'],
  },
  {
    id: 'fuji-gfx100sii',
    name: 'Fujifilm GFX 100S II',
    brand: 'Fujifilm',
    releaseDate: '2024-05',
    price: '¥29,999',
    sensor: {
      megapixels: '102MP',
      sensorType: '中画幅 43.8x32.9mm',
      iso: '80-12800',
      stabilization: '8级 IBIS',
      autofocus: '425点 + AI主体识别',
      features: ['102MP中画幅', '8K录制', 'Pixel Shift 400MP', 'AI对焦'],
    },
    video: {
      maxResolution: '8K 30fps / 4K 60fps',
      formats: ['8K', '4K', '1080p'],
      features: ['8K录制', 'F-Log2', 'ProRes RAW', '16-bit RAW输出'],
    },
    burst: '8fps',
    battery: 'CIPA 540张',
    weight: '883g',
    screen: '3.2英寸 236万点翻转屏',
    connectivity: ['Wi-Fi 6', 'Bluetooth 4.2', 'USB-C', 'HDMI'],
  },
  {
    id: 'canon-eos-r7',
    name: 'Canon EOS R7',
    brand: 'Canon',
    releaseDate: '2022-05',
    price: '¥7,999',
    sensor: {
      megapixels: '32.5MP',
      sensorType: 'APS-H等效 CMOS',
      iso: '100-32000',
      stabilization: '8级 IBIS',
      autofocus: '651点 + 深度学习',
      features: ['高速连拍', '无裁切4K', '预拍摄功能', '动物识别'],
    },
    video: {
      maxResolution: '4K 60fps / 7K oversampling',
      formats: ['4K', '1080p'],
      features: ['7K过采样4K 30fps', '无裁切4K 60fps', 'Canon Log 3', 'HDR PQ'],
    },
    burst: '30fps (电子) / 15fps (机械)',
    battery: 'CIPA 500张',
    weight: '612g',
    screen: '3英寸 162万点翻转屏',
    connectivity: ['Wi-Fi 6', 'Bluetooth 4.2', 'USB-C', 'HDMI'],
  },
  {
    id: 'ricoh-gr-iv-mono',
    name: 'Ricoh GR IV Monochrome',
    brand: 'Ricoh',
    releaseDate: '2026-01',
    price: '¥7,999',
    sensor: {
      megapixels: '25.74MP',
      sensorType: 'APS-C 专用黑白CMOS (无低通)',
      iso: '100-102400',
      stabilization: '-',
      autofocus: '相位检测 AF',
      features: ['专用黑白传感器', '无彩色滤波', '内置红滤镜', 'GR镜头40mm等效'],
    },
    video: {
      maxResolution: 'Full HD 60fps',
      formats: ['1080p'],
      features: ['单色视频模式', '高感光度优化'],
    },
    burst: '8fps',
    battery: 'CIPA 300张',
    weight: '355g',
    screen: '3英寸 103万点触摸屏',
    connectivity: ['Wi-Fi', 'Bluetooth', 'USB-C'],
  },
  {
    id: 'sigma-35mm-f14-dg-ii',
    name: 'Sigma 35mm f/1.4 DG II Art',
    brand: 'Sigma',
    releaseDate: '2026-04',
    price: '¥7,500',
    sensor: {
      megapixels: '-',
      sensorType: '镜头',
      iso: '-',
      stabilization: '-',
      autofocus: '双HLA线性马达',
      features: ['比上代轻20%', '14%更短', '最佳光学性能', '67mm滤镜'],
    },
    video: {
      maxResolution: '-',
      formats: ['-'],
      features: ['静音对焦', '视频优化'],
    },
    burst: '-',
    battery: '-',
    weight: '530g',
    screen: '-',
    connectivity: ['-'],
  },
  {
    id: 'leica-noctilux-35f12',
    name: 'Leica Noctilux-M 35 f/1.2 ASPH',
    brand: 'Leica',
    releaseDate: '2026-01',
    price: '¥70,000',
    sensor: {
      megapixels: '-',
      sensorType: '镜头',
      iso: '-',
      stabilization: '-',
      autofocus: '手动对焦',
      features: ['首款35mm Noctilux', 'f/1.2超大光圈', '最近对焦50cm', '416g轻量'],
    },
    video: {
      maxResolution: '-',
      formats: ['-'],
      features: ['标志性散景', '电影感氛围'],
    },
    burst: '-',
    battery: '-',
    weight: '416g',
    screen: '-',
    connectivity: ['-'],
  },
  {
    id: 'panasonic-s5ii',
    name: 'Panasonic Lumix S5 II',
    brand: 'Panasonic',
    releaseDate: '2023-01',
    price: '¥9,999',
    sensor: {
      megapixels: '24MP',
      sensorType: '全画幅 CMOS',
      iso: '100-51200',
      stabilization: '5级 IBIS',
      autofocus: '779点相位检测',
      features: ['松下首款相位对焦', '6K 30fps', '优秀视频', '性价比高'],
    },
    video: {
      maxResolution: '6K 30fps / 4K 120fps',
      formats: ['6K', '5.9K', '4K', '1080p'],
      features: ['6K 30fps', '4K 120fps', 'V-Log', 'ProRes RAW', '变形镜头支持'],
    },
    burst: '9fps (AF-C)',
    battery: 'CIPA 370张',
    weight: '740g',
    screen: '3英寸 184万点翻转屏',
    connectivity: ['Wi-Fi 5', 'Bluetooth 5.0', 'USB-C', 'HDMI'],
  },
];

export const cameraBrands = [...new Set(camerasData.map(c => c.brand))];

export function getCameraById(id: string): Camera | undefined {
  return camerasData.find(c => c.id === id);
}

export function getCamerasByBrand(brand: string): Camera[] {
  return camerasData.filter(c => c.brand === brand);
}

export function getCamerasByPriceRange(min: number, max: number): Camera[] {
  return camerasData.filter(c => {
    const price = parseInt(c.price.replace(/[^0-9]/g, ''));
    return price >= min && price <= max;
  });
}

export function getCamerasByCategory(category: 'entry' | 'mid' | 'pro' | 'flagship'): Camera[] {
  const ranges = {
    entry: [0, 8000],
    mid: [8000, 15000],
    pro: [15000, 30000],
    flagship: [30000, Infinity],
  };
  const [min, max] = ranges[category];
  return getCamerasByPriceRange(min, max);
}