export interface ActionCameraSpec {
  megapixels: string;
  aperture: string;
  focalLength?: string;
  sensorSize?: string;
  stabilization: string;
  features: string[];
}

export interface ActionCamera {
  id: string;
  name: string;
  brand: string;
  releaseDate: string;
  price: string;
  mainCamera: ActionCameraSpec;
  ultrawide?: ActionCameraSpec;
  videoMax: string;
  videoFormats: string[];
  videoFeatures: string[];
  imageFeatures: string[];
  battery: string;
  waterproof: string;
  weight: string;
  dimensions: string;
  screen: string;
  connectivity: string[];
}

export const actionCamerasData: ActionCamera[] = [
  {
    id: 'gopro-hero-13',
    name: 'GoPro Hero 13 Black',
    brand: 'GoPro',
    releaseDate: '2024-09',
    price: '$399',
    mainCamera: {
      megapixels: '27MP',
      aperture: 'f/2.5',
      focalLength: '12mm (等效)',
      stabilization: 'HyperSmooth 6.0',
      features: ['5.3K 60fps', '4K 120fps', 'HDR'],
    },
    videoMax: '5.3K 60fps',
    videoFormats: ['5.3K', '4K', '2.7K', '1080p'],
    videoFeatures: ['HyperSmooth 6.0', 'Horizon Lock', 'TimeWarp', 'Hindsight', 'Scheduled Capture'],
    imageFeatures: ['27MP Photo', 'SuperPhoto HDR', 'LiveBurst', 'RAW Photo'],
    battery: '1720mAh',
    waterproof: '11m (无壳)',
    weight: '154g',
    dimensions: '71.8 x 50.8 x 33.6mm',
    screen: '2.27" 后置 + 1.4" 前置',
    connectivity: ['Wi-Fi', 'Bluetooth', 'GPS', 'USB-C'],
  },
  {
    id: 'gopro-hero-12',
    name: 'GoPro Hero 12 Black',
    brand: 'GoPro',
    releaseDate: '2023-09',
    price: '$349',
    mainCamera: {
      megapixels: '27MP',
      aperture: 'f/2.5',
      focalLength: '12mm (等效)',
      stabilization: 'HyperSmooth 6.0',
      features: ['5.3K 60fps', '4K 120fps', 'HDR'],
    },
    videoMax: '5.3K 60fps',
    videoFormats: ['5.3K', '4K', '2.7K', '1080p'],
    videoFeatures: ['HyperSmooth 6.0', 'Horizon Lock', 'TimeWarp 3.0', 'HDR Video'],
    imageFeatures: ['27MP Photo', 'SuperPhoto HDR', 'LiveBurst'],
    battery: '1720mAh',
    waterproof: '11m (无壳)',
    weight: '154g',
    dimensions: '71.8 x 50.8 x 33.6mm',
    screen: '2.27" 后置 + 1.4" 前置',
    connectivity: ['Wi-Fi', 'Bluetooth', 'GPS', 'USB-C'],
  },
  {
    id: 'dji-action-4',
    name: 'DJI Action 4',
    brand: 'DJI',
    releaseDate: '2023-08',
    price: '$329',
    mainCamera: {
      megapixels: '48MP',
      aperture: 'f/2.8',
      sensorSize: '1/1.3"',
      stabilization: 'RockSteady 3.0+',
      features: ['4K 120fps', 'DNG', '155° 超广角'],
    },
    ultrawide: {
      megapixels: '-',
      aperture: 'f/2.8',
      focalLength: '155°',
      stabilization: '-',
      features: ['155° 超广角'],
    },
    videoMax: '4K 120fps',
    videoFormats: ['4K', '2.7K', '1080p'],
    videoFeatures: ['RockSteady 3.0+', 'HorizonSteady', 'Timecode', 'D-Log M'],
    imageFeatures: ['48MP Photo', 'RAW', 'Star Timelapse'],
    battery: '1770mAh (160分钟)',
    waterproof: '18m (无壳)',
    weight: '145g',
    dimensions: '70.5 x 44.2 x 32.8mm',
    screen: '2.25" 后触 + 1.4" 前彩',
    connectivity: ['Wi-Fi', 'Bluetooth', 'USB-C'],
  },
  {
    id: 'dji-action-5-pro',
    name: 'DJI Action 5 Pro',
    brand: 'DJI',
    releaseDate: '2024-09',
    price: '$399',
    mainCamera: {
      megapixels: '48MP',
      aperture: 'f/2.8',
      sensorSize: '1/1.3"',
      stabilization: 'RockSteady 3.0+',
      features: ['4K 120fps', 'DNG', 'HLG'],
    },
    videoMax: '4K 120fps',
    videoFormats: ['4K', '2.7K', '1080p'],
    videoFeatures: ['RockSteady 3.0+', 'HorizonSteady', 'D-Log M', 'HLG'],
    imageFeatures: ['48MP Photo', 'RAW', 'Star Timelapse', 'AI 追踪'],
    battery: '1950mAh (240分钟)',
    waterproof: '20m (无壳)',
    weight: '146g',
    dimensions: '70.5 x 44.2 x 32.8mm',
    screen: '2.5" OLED 后触 + 1.46" 前彩',
    connectivity: ['Wi-Fi', 'Bluetooth', 'USB-C'],
  },
  {
    id: 'dji-pocket-3',
    name: 'DJI Pocket 3',
    brand: 'DJI',
    releaseDate: '2023-10',
    price: '$399',
    mainCamera: {
      megapixels: '64MP',
      aperture: 'f/2.0',
      sensorSize: '1/1.7"',
      stabilization: '3轴云台',
      features: ['4K 120fps', '旋转屏', '智能跟随'],
    },
    videoMax: '4K 120fps',
    videoFormats: ['4K', '2.7K', '1080p'],
    videoFeatures: ['3轴云台防抖', '智能跟随6.0', 'DJI OsmoAudio', 'Sound Track'],
    imageFeatures: ['64MP Photo', 'Panorama', 'Motionlapse'],
    battery: '1300mAh (166分钟)',
    waterproof: '-',
    weight: '249g',
    dimensions: '139.7 x 42.2 x 33.5mm',
    screen: '2" 旋转屏',
    connectivity: ['Wi-Fi', 'Bluetooth', 'USB-C'],
  },
  {
    id: 'insta360-x4',
    name: 'Insta360 X4',
    brand: 'Insta360',
    releaseDate: '2024-04',
    price: '$499',
    mainCamera: {
      megapixels: '72MP (360°)',
      aperture: 'f/1.9',
      sensorSize: '1/2.51"',
      stabilization: 'FlowState 防抖',
      features: ['8K 30fps 360°', '4K 60fps 单镜'],
    },
    videoMax: '8K 30fps',
    videoFormats: ['8K 360°', '4K 60fps 单镜', '4K 120fps 慢动作'],
    videoFeatures: ['FlowState', '360° HDR', 'AI剪辑', '隐形自拍杆', 'Reframe'],
    imageFeatures: ['72MP 360° Photo', 'PureShot', 'HDR Photo'],
    battery: '2290mAh (135分钟8K)',
    waterproof: '10m (无壳)',
    weight: '191g',
    dimensions: '123.6 x 45.4 x 26.6mm',
    screen: '2.5" 可触摸',
    connectivity: ['Wi-Fi', 'Bluetooth', 'USB-C'],
  },
  {
    id: 'insta360-go3',
    name: 'Insta360 GO 3',
    brand: 'Insta360',
    releaseDate: '2023-06',
    price: '$249',
    mainCamera: {
      megapixels: '12MP',
      aperture: 'f/2.2',
      stabilization: 'FlowState',
      features: ['2.7K 30fps', 'IPX8防水', '磁吸设计'],
    },
    videoMax: '2.7K 30fps',
    videoFormats: ['2.7K', '1440p', '1080p'],
    videoFeatures: ['FlowState', 'TimeShift', 'AI剪辑', '语音控制'],
    imageFeatures: ['12MP Photo', 'RAW', 'Interval Photo'],
    battery: '310mAh (Action Pod 1300mAh)',
    waterproof: '5m (本体) / 60m (Action Pod)',
    weight: '35.5g (本体)',
    dimensions: '52.1 x 23.6 x 21.4mm',
    screen: '1.3" 翻转屏 (Action Pod)',
    connectivity: ['Wi-Fi', 'Bluetooth'],
  },
  {
    id: 'akaso-brave-12',
    name: 'AKASO Brave 12',
    brand: 'AKASO',
    releaseDate: '2024-01',
    price: '$149',
    mainCamera: {
      megapixels: '48MP',
      aperture: 'f/2.8',
      stabilization: 'EIS',
      features: ['4K 60fps', '防抖', '超广角'],
    },
    videoMax: '4K 60fps',
    videoFormats: ['4K', '2.7K', '1080p'],
    videoFeatures: ['EIS', '水下模式', '车载模式'],
    imageFeatures: ['48MP Photo', 'Time-lapse', 'Burst'],
    battery: '1800mAh',
    waterproof: '30m (带壳)',
    weight: '132g',
    dimensions: '63 x 42 x 29mm',
    screen: '2" 后触',
    connectivity: ['Wi-Fi', 'USB-C'],
  },
  {
    id: 'insta360-x3',
    name: 'Insta360 X3',
    brand: 'Insta360',
    releaseDate: '2022-09',
    price: '$329',
    mainCamera: {
      megapixels: '48MP (360°)',
      aperture: 'f/1.9',
      sensorSize: '1/2.3"',
      stabilization: 'FlowState',
      features: ['5.7K 30fps 360°', '4K 60fps 单镜'],
    },
    videoMax: '5.7K 30fps',
    videoFormats: ['5.7K 360°', '4K 60fps 单镜', '3K 180fps'],
    videoFeatures: ['FlowState', '360° HDR', 'AI剪辑', '隐形自拍杆'],
    imageFeatures: ['48MP 360° Photo', 'PureShot', 'HDR Photo'],
    battery: '1800mAh (81分钟)',
    waterproof: '10m (无壳)',
    weight: '184g',
    dimensions: '114 x 46 x 22.5mm',
    screen: '2.29" 可触摸',
    connectivity: ['Wi-Fi', 'Bluetooth', 'USB-C'],
  },
];

export const actionBrands = [...new Set(actionCamerasData.map(c => c.brand))];

export function getActionCameraById(id: string): ActionCamera | undefined {
  return actionCamerasData.find(c => c.id === id);
}

export function getActionCamerasByBrand(brand: string): ActionCamera[] {
  return actionCamerasData.filter(c => c.brand === brand);
}