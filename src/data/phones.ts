export interface CameraSpec {
  megapixels: string;
  aperture: string;
  focalLength: string;
  sensorSize: string;
  stabilization: string;
  features: string[];
}

export interface PhoneCamera {
  id: string;
  name: string;
  brand: string;
  releaseDate: string;
  mainCamera: CameraSpec;
  ultrawide: CameraSpec;
  telephoto1: CameraSpec;
  telephoto2?: CameraSpec;
  frontCamera: CameraSpec;
  videoMax: string;
  videoFeatures: string[];
  imageFeatures: string[];
}

export const phonesData: PhoneCamera[] = [
  {
    id: 'honor-magicultimate-7',
    name: 'Honor Magic Ultimate 7',
    brand: 'Honor',
    releaseDate: '2021-04',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'LYT-900',
      'OV50K',
      'IMX989',
      'GN2'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '120掳 FOV',
      'Micro',
      'Macro',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '113mm',
      sensorSize: '1/2.55"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      'periscope',
      '5x',
      'PDAF',
      '2.5x'
      ],
    },
    telephoto2:     {
      megapixels: '50MP',
      aperture: 'f/3.0',
      focalLength: '70mm',
      sensorSize: '1/2.6"',
      stabilization: 'OIS',
      features: [
      '5x',
      'telephoto macro',
      '3.5x',
      '2.5x'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'AF',
      'Dual Pixel PDAF',
      '4K',
      'OIS',
      'Auto focus'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'ProRes RAW'
    ],
    imageFeatures: [
    'AI Scene Optimization'
    ],
  },

  {
    id: 'sony-xperia1-10',
    name: 'Sony Xperia 1 10',
    brand: 'Sony',
    releaseDate: '2024-07',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'GW2',
      'GW3'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/2.5"',
      stabilization: '-',
      features: [
      '114掳 FOV',
      'Freeform',
      '115掳 FOV',
      '128掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '52mm',
      sensorSize: '1/3.5"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'Tetraprism'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'AF',
      'HDR',
      '4K 60fps',
      'Autofocus'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'EIS'
    ],
    imageFeatures: [
    'Object Eraser'
    ],
  },

  {
    id: 'oneplus-oneplusace-2',
    name: 'OnePlus OnePlus Ace 2',
    brand: 'OnePlus',
    releaseDate: '2022-05',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.28"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX689',
      'IMX789',
      'Sony Fusion',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '16mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      '114掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '77mm',
      sensorSize: '1/3.06"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '3x',
      '2x',
      'Tetraprism',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'HDR'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Zeiss T*'
    ],
    imageFeatures: [
    'Hasselblad Natural Color'
    ],
  },

  {
    id: 'sony-xperiapro-7',
    name: 'Sony Xperia Pro 7',
    brand: 'Sony',
    releaseDate: '2021-03',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.5',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX890',
      'LYT-808'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/5"',
      stabilization: '-',
      features: [
      '118掳 FOV',
      '112掳 FOV',
      '120掳 FOV',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '52mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2x',
      '3x',
      'PDAF',
      'o'
      ],
    },
    telephoto2:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '65mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'periscope',
      '3x',
      't',
      't'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'HDR',
      'Dual PD'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Vivo V3 chip'
    ],
    imageFeatures: [
    'Smart HDR'
    ],
  },

  {
    id: 'oppo-findx-11',
    name: 'OPPO Find X 11',
    brand: 'OPPO',
    releaseDate: '2025-07',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.7',
      focalLength: '23mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'LYT-901',
      'IMX989',
      'OV50H',
      'ISOCELL HP9',
      'ISOCELL HP2'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'HDR',
      '123掳 FOV',
      'Macro',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '111mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '3.5x',
      'telephoto macro'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '72mm',
      sensorSize: '1/4.2"',
      stabilization: 'OIS',
      features: [
      '3x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'Dual PD',
      features: [
      'Dual PD',
      'HDR',
      'Autofocus'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Hasselblad color'
    ],
    imageFeatures: [
    'Long exposure'
    ],
  },

  {
    id: 'honor-honorpro-12',
    name: 'Honor HONOR Pro 12',
    brand: 'Honor',
    releaseDate: '2026-08',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.67"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM6',
      'ISOCELL HM3',
      'ISOCELL HM1'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'AI',
      '120掳 FOV',
      'M',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '81mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'telephoto',
      'periscope',
      '3x'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '65mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      'PDAF',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'Dual PD',
      features: [
      'Autofocus',
      'face unlock',
      'Dual PD',
      'H'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'HDR10'
    ],
    imageFeatures: [
    'Zeiss optics'
    ],
  },

  {
    id: 'tcl-tcl20-6',
    name: 'TCL TCL 20 6',
    brand: 'TCL',
    releaseDate: '2020-02',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.88',
      focalLength: '23mm',
      sensorSize: '1/1.35"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'GNV',
      'LYT-900',
      'IMX920',
      'IMX890',
      'IMX989'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.7',
      focalLength: '12mm',
      sensorSize: '1/2.55"',
      stabilization: 'Quad PD',
      features: [
      '120掳 FOV',
      '126掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '67mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      '2x',
      '3x',
      'P',
      'P'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/3.06"',
      stabilization: 'Sensor-shift',
      features: [
      'face ID',
      'Dolby Vision'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Slow Motion'
    ],
    imageFeatures: [
    'Zeiss optics'
    ],
  },

  {
    id: 'oneplus-oneplus-11',
    name: 'OnePlus OnePlus 11',
    brand: 'OnePlus',
    releaseDate: '2022-08',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.67"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM6',
      'ISOCELL HM3'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/4.4"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '106掳 FOV',
      '118掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.8',
      focalLength: '100mm',
      sensorSize: '1/2.51"',
      stabilization: 'OIS',
      features: [
      'telephoto macro',
      '6x'
      ],
    },
    telephoto2:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '230mm',
      sensorSize: '1/2.64"',
      stabilization: 'OIS',
      features: [
      '5x',
      'portrait',
      '2.5x'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.8',
      focalLength: '25mm',
      sensorSize: '1/3.06"',
      stabilization: 'OIS',
      features: [
      'Bokeh Mode',
      'Dual Capture',
      'HDR',
      'face ID',
      'Dolby Vision'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'Vivo V3 chip'
    ],
    imageFeatures: [
    'Best Take'
    ],
  },

  {
    id: 'google-pixela-11a',
    name: 'Google Pixel A 11 a',
    brand: 'Google',
    releaseDate: '2026-05',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.31"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX586',
      'IMX789',
      'IMX689',
      'S',
      'S'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Macro',
      'HDR',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '135mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '3.5x',
      'telephoto macro'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '77mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'Tetraprism',
      '3x',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'EIS',
      'OIS'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'LOG'
    ],
    imageFeatures: [
    'Leica filters'
    ],
  },

  {
    id: 'google-pixela-10a',
    name: 'Google Pixel A 10 a',
    brand: 'Google',
    releaseDate: '2025-05',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.78',
      focalLength: '23mm',
      sensorSize: '1"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX920',
      'GN1'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'AI'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/4.3',
      focalLength: '73mm',
      sensorSize: '1/2.64"',
      stabilization: 'OIS',
      features: [
      'telephoto macro',
      '3x'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '67mm',
      sensorSize: '1/3.52"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H',
      'H',
      'H'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    '8K recording'
    ],
    imageFeatures: [
    'AI portrait'
    ],
  },

  {
    id: 'lenovo-legionphone-12',
    name: 'Lenovo Legion Phone 12',
    brand: 'Lenovo',
    releaseDate: '2026-01',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.4',
      focalLength: '23mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'ISOCELL HP2',
      'LYT-808'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '67mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.4',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'face unlock',
      '4K video',
      'HDR'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Gyro-EIS'
    ],
    imageFeatures: [
    'Portrait Mode'
    ],
  },

  {
    id: 'nokia-nokiaxr-10',
    name: 'Nokia Nokia XR 10',
    brand: 'Nokia',
    releaseDate: '2024-12',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '24mm',
      sensorSize: '1/1.4"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX586',
      'Sony Fusion',
      'IMX689',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/2.4"',
      stabilization: '-',
      features: [
      '119掳 FOV',
      '126掳 FOV',
      '120掳 FOV',
      '123掳 FOV',
      'AI'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.6',
      focalLength: '85mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      '5x',
      '3.5x',
      'HP3',
      'HP5'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/3.0',
      focalLength: '85mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      '5x'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.9',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'OIS',
      features: [
      'Autofocus',
      'HDR',
      'Dual Capture'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Log'
    ],
    imageFeatures: [
    'Super Resolution'
    ],
  },

  {
    id: 'xiaomi-xiaomi-10',
    name: 'Xiaomi Xiaomi 10',
    brand: 'Xiaomi',
    releaseDate: '2024-05',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'IMX789',
      'IMX689',
      'IMX586',
      'S'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/2.35"',
      stabilization: '-',
      features: [
      '126掳 FOV',
      'Autofocus',
      '120掳 FOV',
      'Macro Focus'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '72mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'optical zoom'
      ],
    },
    telephoto2:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '70mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'telephoto macro'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'EIS',
      'Dual Pixel PDAF'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Director mode'
    ],
    imageFeatures: [
    'Ultra HDR'
    ],
  },

  {
    id: 'tcl-tcl30-6',
    name: 'TCL TCL 30 6',
    brand: 'TCL',
    releaseDate: '2020-05',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/1.35"',
      stabilization: 'OIS',
      features: [
      'OV50K',
      'ISOCELL HP3',
      'ISOCELL HP2',
      'LYT-808',
      'OV50H'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      'Micro',
      '112掳 FOV',
      '122掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '90mm',
      sensorSize: '1/2.4"',
      stabilization: 'OIS',
      features: [
      '5x',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'AF',
      'HDR'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'ProRes RAW'
    ],
    imageFeatures: [
    'Portrait Mode'
    ],
  },

  {
    id: 'apple-iphoneplus-2021plus',
    name: 'Apple iPhone Plus 2021 Plus',
    brand: 'Apple',
    releaseDate: '2023-02',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'GN2',
      'IMX989',
      'GN1',
      'LYT-901'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/2.4"',
      stabilization: '-',
      features: [
      '128掳 FOV',
      '150掳 FOV',
      '122掳 FOV',
      'AI',
      '126掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '72mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2x',
      'portrait',
      '3x',
      'PDAF'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '135mm',
      sensorSize: '1/2.4"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.5',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'PDAF',
      'video',
      'Dual Pixel',
      'Autofocus'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'HDR Vivid'
    ],
    imageFeatures: [
    'Dual Capture'
    ],
  },

  {
    id: 'meizu-meizunote-7',
    name: 'Meizu Meizu Note 7',
    brand: 'Meizu',
    releaseDate: '2021-08',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '23mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'IMX682',
      'GW2',
      'GW1',
      'GW3',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.3',
      focalLength: '15mm',
      sensorSize: '1/5"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '106掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '72mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      '3x',
      'optical zoom',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/2.67',
      focalLength: '135mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      '4x',
      '5x',
      'telephoto macro',
      '3.5x',
      'HP9'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H',
      'H'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Zeiss Cinematic'
    ],
    imageFeatures: [
    'Magic Eraser'
    ],
  },

  {
    id: 'samsung-galaxyzfold-9',
    name: 'Samsung Galaxy Z Fold 9',
    brand: 'Samsung',
    releaseDate: '2023-03',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.7',
      focalLength: '24mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'OV50K',
      'LYT-900',
      'LYT-818',
      'LYT-808'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/2.35"',
      stabilization: '-',
      features: [
      '126掳 FOV',
      'Autofocus',
      '120掳 FOV',
      'Macro Focus',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.4',
      focalLength: '85mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'continuous optical zoom',
      '3.5x',
      '5x',
      '3x'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.4',
      focalLength: '90mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2.5x',
      'portrait',
      '3x',
      '5x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.2',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'HDR Vivid'
    ],
    imageFeatures: [
    'Super Resolution'
    ],
  },

  {
    id: 'zte-axonultra-9',
    name: 'ZTE Axon Ultra 9',
    brand: 'ZTE',
    releaseDate: '2023-05',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP3',
      'ISOCELL HP9',
      'LYT-808'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '123掳 FOV',
      'HDR',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.6',
      focalLength: '111mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      'telephoto macro',
      '4x'
      ],
    },
    telephoto2:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '73mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      '3x',
      'periscope',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'face unlock',
      'Autofocus'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'OIS+EIS'
    ],
    imageFeatures: [
    'Panorama'
    ],
  },

  {
    id: 'apple-iphonese-2016se',
    name: 'Apple iPhone SE 2016 SE',
    brand: 'Apple',
    releaseDate: '2022-12',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '24mm',
      sensorSize: '1/1.28"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX689',
      'Sony Fusion',
      'IMX586',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV',
      'Micro'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.6',
      focalLength: '100mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      '5x',
      'telephoto macro',
      'HP3'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '77mm',
      sensorSize: '1/3.5"',
      stabilization: 'OIS',
      features: [
      '3x',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.45',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      '4K 60fps',
      'Autofocus',
      'OIS'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    '8K recording'
    ],
    imageFeatures: [
    'Ultra HDR'
    ],
  },

  {
    id: 'nothing-nothingphone-12',
    name: 'Nothing Nothing Phone+ 12+',
    brand: 'Nothing',
    releaseDate: '2026-05',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX789',
      'Sony Fusion'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '12mm',
      sensorSize: '1/2.5"',
      stabilization: 'Quad PD',
      features: [
      '123掳 FOV',
      'Autofocus',
      '120掳 FOV',
      'Macro Focus'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/3.5',
      focalLength: '70mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      '3x',
      'periscope'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/3.0',
      focalLength: '90mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'telephoto macro',
      'HP9'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.45',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'PDAF',
      'face unlock',
      'EIS'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Slow Motion'
    ],
    imageFeatures: [
    'Object Eraser'
    ],
  },

  {
    id: 'google-pixel-8',
    name: 'Google Pixel 8',
    brand: 'Google',
    releaseDate: '2023-07',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.67"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM6',
      'ISOCELL HM3',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '120掳 FOV',
      'Micro',
      '122掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '65mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '10x',
      '5x',
      'portrait',
      'PDAF',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      '2x',
      '3x',
      'optical zoom',
      'P',
      'P'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/3.1"',
      stabilization: 'AF',
      features: [
      'HDR',
      'Dual PD',
      'Autofocus'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'AI Motion'
    ],
    imageFeatures: [
    'AI Remove'
    ],
  },

  {
    id: 'asus-rogphonepro-6',
    name: 'ASUS ROG Phone Pro 6',
    brand: 'ASUS',
    releaseDate: '2020-06',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'IMX682',
      'GW3',
      'IMX686',
      'GW2',
      'G'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.7',
      focalLength: '13mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Macro Focus',
      'Autofocus',
      '123掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.4',
      focalLength: '100mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      '3x',
      '4x',
      '3.5x',
      'continuous optical zoom',
      '5x'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AI',
      'wide-angle'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    '6K 30fps'
    ],
    imageFeatures: [
    'XMAGE'
    ],
  },

  {
    id: 'tcl-tcl50-6',
    name: 'TCL TCL 50 6',
    brand: 'TCL',
    releaseDate: '2020-01',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.31"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX789',
      'IMX586',
      'IMX689',
      'S'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/1.8',
      focalLength: '12mm',
      sensorSize: '1/2.7"',
      stabilization: '-',
      features: [
      'RYYB',
      'Cine',
      'Macro',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.67',
      focalLength: '135mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'continuous optical zoom',
      'telephoto macro',
      'HP5'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '52mm',
      sensorSize: '1/3.5"',
      stabilization: 'OIS',
      features: [
      'Tetraprism',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AF',
      '4K',
      'OIS'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Action mode'
    ],
    imageFeatures: [
    'ProRAW'
    ],
  },

  {
    id: 'oppo-findxpro-11',
    name: 'OPPO Find X Pro 11',
    brand: 'OPPO',
    releaseDate: '2025-09',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'IMX789',
      'IMX586',
      'Sony Fusion',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Super Steady',
      '114掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.6',
      focalLength: '72mm',
      sensorSize: '1/3.52"',
      stabilization: 'OIS',
      features: [
      '2x',
      'optical zoom'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.8',
      focalLength: '65mm',
      sensorSize: '1/2.55"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'portrait',
      '3.5x'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'AF',
      'Autofocus',
      '4K video',
      'H'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Gyro-EIS'
    ],
    imageFeatures: [
    'Dual Capture'
    ],
  },

  {
    id: 'tcl-tcl50-9',
    name: 'TCL TCL 50 9',
    brand: 'TCL',
    releaseDate: '2023-09',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '23mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'GW1',
      'IMX682',
      'GW3',
      'IMX686',
      'G'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Macro',
      'AI',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '73mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'periscope',
      '3x',
      'telephoto'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'Autofocus',
      'face unlock',
      'D'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Zeiss T*'
    ],
    imageFeatures: [
    'AI Enhance'
    ],
  },

  {
    id: 'oppo-a-10',
    name: 'OPPO A 10',
    brand: 'OPPO',
    releaseDate: '2024-01',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'GW1',
      'GW2',
      'GW3',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '15mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'HDR',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '52mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      '3x',
      'Tetraprism'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'face unlock'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Zeiss T*'
    ],
    imageFeatures: [
    'XMAGE'
    ],
  },

  {
    id: 'nothing-nothingphone-11',
    name: 'Nothing Nothing Phone+ 11+',
    brand: 'Nothing',
    releaseDate: '2025-04',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'IMX689',
      'IMX789',
      'Sony Fusion',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      '122掳 FOV',
      '120掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '50mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      '2x',
      '3x',
      'portrait',
      'P'
      ],
    },
    telephoto2:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '70mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'telephoto',
      'portrait',
      '3'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f',
      'f'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    '8K 30fps HDR'
    ],
    imageFeatures: [
    'AI Photo Edit'
    ],
  },

  {
    id: 'xiaomi-xiaomi-7',
    name: 'Xiaomi Xiaomi 7',
    brand: 'Xiaomi',
    releaseDate: '2021-08',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'LYT-808',
      'IMX989',
      'ISOCELL HP5',
      'OV50H',
      'ISOCELL HP9'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      '122掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '73mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      '3x',
      'portrait',
      'telephoto',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.5',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'video',
      'HDR'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Action mode'
    ],
    imageFeatures: [
    'ProRAW'
    ],
  },

  {
    id: 'motorola-razr-7',
    name: 'Motorola Razr 7',
    brand: 'Motorola',
    releaseDate: '2021-08',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '23mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'GW3'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Macro',
      'RYYB',
      'Cine',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      '2x',
      '3x',
      'PDAF',
      'o',
      'o'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.5',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'Dynamic photo',
      'Autofocus',
      'AF',
      'H'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Pro mode'
    ],
    imageFeatures: [
    'Magic Eraser'
    ],
  },

  {
    id: 'tcl-tcl30-11',
    name: 'TCL TCL 30 11',
    brand: 'TCL',
    releaseDate: '2025-08',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP5',
      'IMX989',
      'ISOCELL HP3',
      'LYT-901'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'AI',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '67mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'optical zoom',
      'Tetraprism'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/3.0',
      focalLength: '73mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      'HP3',
      'telephoto macro',
      'periscope',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'PDAF',
      'EIS',
      'wide-angle'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'AI Cinema'
    ],
    imageFeatures: [
    'Long exposure'
    ],
  },

  {
    id: 'lg-lgg-10',
    name: 'LG LG G 10',
    brand: 'LG',
    releaseDate: '2024-09',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.31"',
      stabilization: 'OIS',
      features: [
      'Sony Fusion',
      'IMX586'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'HDR',
      'Macro',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'telephoto',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'EIS',
      'HDR'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Hasselblad color'
    ],
    imageFeatures: [
    'XMAGE'
    ],
  },

  {
    id: 'zte-axonultra-6',
    name: 'ZTE Axon Ultra 6',
    brand: 'ZTE',
    releaseDate: '2020-03',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.5',
      focalLength: '24mm',
      sensorSize: '1/1.43"',
      stabilization: 'OIS',
      features: [
      'OV50H',
      'IMX920',
      'IMX906',
      'LYT-808'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'HDR',
      'AI'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '72mm',
      sensorSize: '1/4.2"',
      stabilization: 'OIS',
      features: [
      '3x',
      'PDAF',
      '2x',
      'o',
      'o'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/4.2"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      '2x',
      '3x',
      'P',
      'P'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.2',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Nightography'
    ],
    imageFeatures: [
    'Smart HDR'
    ],
  },

  {
    id: 'samsung-galaxysultra-10',
    name: 'Samsung Galaxy S Ultra 10',
    brand: 'Samsung',
    releaseDate: '2024-06',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.67"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM1',
      'ISOCELL HM3',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      'Autofocus',
      '123掳 FOV',
      '126掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.8',
      focalLength: '100mm',
      sensorSize: '1/2.75"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'periscope',
      '2.5x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'HDR',
      'Dual PD',
      'f',
      'f'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'HDR10+'
    ],
    imageFeatures: [
    'Long exposure'
    ],
  },

  {
    id: 'google-pixela-10a-1',
    name: 'Google Pixel A 10 a',
    brand: 'Google',
    releaseDate: '2025-07',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '24mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'IMX789',
      'Sony Fusion',
      'IMX586',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      '114掳 FOV',
      'Super Steady',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2.5x',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Action mode'
    ],
    imageFeatures: [
    'Object Eraser'
    ],
  },

  {
    id: 'apple-iphonepro-2024pro',
    name: 'Apple iPhone Pro 2024 Pro',
    brand: 'Apple',
    releaseDate: '2026-05',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.57',
      focalLength: '24mm',
      sensorSize: '1/1.22"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'GN1',
      'LYT-901',
      'GN2',
      'IMX989',
      'IMX906'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/1.8',
      focalLength: '13mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Cine',
      'RYYB',
      'Macro',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '65mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2x',
      '2.5x',
      'portrait',
      'P'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'EIS',
      'AF'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Nightography'
    ],
    imageFeatures: [
    'Best Take'
    ],
  },

  {
    id: 'vivo-y-7',
    name: 'vivo Y 7',
    brand: 'vivo',
    releaseDate: '2021-01',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.52"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM3',
      'ISOCELL HM2',
      'ISOCELL HM1'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/2.6"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      'Autofocus',
      '114掳 FOV',
      'Super Steady'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '81mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'telephoto',
      'portrait',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'AF'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'AI Color Correction'
    ],
    imageFeatures: [
    'Pro mode RAW'
    ],
  },

  {
    id: 'tcl-tcl50-10',
    name: 'TCL TCL 50 10',
    brand: 'TCL',
    releaseDate: '2024-02',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'IMX586',
      'IMX689'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '14mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      'AI',
      '119掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '77mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      '3x',
      'optical zoom',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/2.4',
      focalLength: '135mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      'periscope',
      'HP3',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.45',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'HDR',
      'face unlock',
      '4K video',
      'A'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Optical Flow'
    ],
    imageFeatures: [
    'Super Resolution'
    ],
  },

  {
    id: 'nokia-nokiag-6',
    name: 'Nokia Nokia G 6',
    brand: 'Nokia',
    releaseDate: '2020-11',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.78',
      focalLength: '24mm',
      sensorSize: '1"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'OV50A',
      'GNV',
      'LYT-901'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '16mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      'HDR',
      '123掳 FOV',
      '120掳 FOV',
      'M',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '67mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'HDR10'
    ],
    imageFeatures: [
    'Object Eraser'
    ],
  },

  {
    id: 'tcl-tcl30-7',
    name: 'TCL TCL 30 7',
    brand: 'TCL',
    releaseDate: '2021-10',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX689',
      'IMX789',
      'IMX586',
      'S',
      'S'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '16mm',
      sensorSize: '1/3.2"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '106掳 FOV',
      '112掳 FOV',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '67mm',
      sensorSize: '1/3.52"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'portrait',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AF',
      'HDR',
      '4K video',
      'Autofocus',
      'f'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Night Sight Video'
    ],
    imageFeatures: [
    'Monochrome'
    ],
  },

  {
    id: 'lenovo-legionphone-6',
    name: 'Lenovo Legion Phone 6',
    brand: 'Lenovo',
    releaseDate: '2020-09',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/1.35"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP9',
      'OV50H',
      'ISOCELL HP3',
      'IMX989'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '122掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/4.3',
      focalLength: '90mm',
      sensorSize: '1/2.52"',
      stabilization: 'OIS',
      features: [
      '4x',
      'PDAF',
      'portrait',
      'telephoto macro'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '77mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF',
      '2x',
      '3',
      '3'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      '4K 60fps'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'EIS'
    ],
    imageFeatures: [
    'AI beauty'
    ],
  },

  {
    id: 'sony-xperiapro-8',
    name: 'Sony Xperia Pro 8',
    brand: 'Sony',
    releaseDate: '2022-02',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'IMX789',
      'IMX689',
      'IMX586'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/3.06"',
      stabilization: '-',
      features: [
      'HDR',
      'Macro',
      '123掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '81mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'periscope'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '67mm',
      sensorSize: '1/3.2"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.4',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'face unlock',
      'AF',
      '4K video',
      'H'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'EIS'
    ],
    imageFeatures: [
    'Astrophotography'
    ],
  },

  {
    id: 'oppo-reno-7',
    name: 'OPPO Reno 7',
    brand: 'OPPO',
    releaseDate: '2021-03',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '24mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'GW3',
      'IMX686'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/2.5"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '123掳 FOV',
      '122掳 FOV',
      'Micro'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '72mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      '3x',
      'PDAF',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'OIS',
      'AF'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Cinematic mode'
    ],
    imageFeatures: [
    'Leica Vibrant'
    ],
  },

  {
    id: 'vivo-iqooneo-12',
    name: 'vivo iQOO Neo 12',
    brand: 'vivo',
    releaseDate: '2026-01',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'IMX789',
      'Sony Fusion'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/4.4"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '118掳 FOV',
      '106掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '2x',
      'portrait',
      'periscope',
      'telephoto macro',
      '2.5x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'EIS',
      'HDR'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    '10-bit HDR'
    ],
    imageFeatures: [
    'Hasselblad Natural Color'
    ],
  },

  {
    id: 'asus-rogphonepro-7',
    name: 'ASUS ROG Phone Pro 7',
    brand: 'ASUS',
    releaseDate: '2021-09',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.57',
      focalLength: '24mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'GN2',
      'GN1',
      'OV50K',
      'LYT-901'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Micro',
      '122掳 FOV',
      'Macro',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '67mm',
      sensorSize: '1/3.52"',
      stabilization: 'OIS',
      features: [
      '3x',
      'portrait',
      '2x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/3.6"',
      stabilization: 'Sensor-shift',
      features: [
      'HDR',
      'Bokeh Mode'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'EIS'
    ],
    imageFeatures: [
    'Zeiss Cinematic'
    ],
  },

  {
    id: 'huawei-mate-10',
    name: 'Huawei Mate 10',
    brand: 'Huawei',
    releaseDate: '2024-06',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'GW1',
      'IMX682',
      'GW3',
      'IMX686'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.3',
      focalLength: '12mm',
      sensorSize: '1/3.2"',
      stabilization: '-',
      features: [
      '106掳 FOV',
      '112掳 FOV',
      '118掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.8',
      focalLength: '90mm',
      sensorSize: '1/2.55"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2.5x',
      'periscope',
      'portrait',
      '5x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'face unlock',
      'HDR',
      'EIS'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'AI Cinema'
    ],
    imageFeatures: [
    'AI Enhance'
    ],
  },

  {
    id: 'oneplus-oneplusr-12r',
    name: 'OnePlus OnePlus R 12R',
    brand: 'OnePlus',
    releaseDate: '2023-06',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.7',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX906',
      'GN1',
      'OV50A'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/2.7"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Cine',
      'RYYB',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '65mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '67mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'PDAF',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Dynamic photo',
      'Autofocus',
      'face unlock',
      'AF',
      'H'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'LOG'
    ],
    imageFeatures: [
    'Long exposure'
    ],
  },

  {
    id: 'xiaomi-pocof-7',
    name: 'Xiaomi POCO F 7',
    brand: 'Xiaomi',
    releaseDate: '2021-10',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'GW2',
      'GW3',
      'GW1'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '15mm',
      sensorSize: '1/2.5"',
      stabilization: '-',
      features: [
      '126掳 FOV',
      '122掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '77mm',
      sensorSize: '1/3.06"',
      stabilization: 'OIS',
      features: [
      '3x',
      'PDAF'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/2.67',
      focalLength: '85mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'telephoto macro',
      '5x',
      'continuous optical zoom',
      '3.5x'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'OIS',
      '4K',
      'Dual Pixel PDAF'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'OIS+EIS'
    ],
    imageFeatures: [
    'Magic Eraser'
    ],
  },

  {
    id: 'huawei-matepro-10',
    name: 'Huawei Mate Pro 10',
    brand: 'Huawei',
    releaseDate: '2024-08',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'GNV',
      'GN1',
      'OV50K',
      'IMX906',
      'IMX920'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/2.75"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Micro',
      '123掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '65mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '2x',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'HDR',
      'Autofocus',
      'D'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'ProRes'
    ],
    imageFeatures: [
    'Watermark'
    ],
  },

  {
    id: 'xiaomi-pocox-11',
    name: 'Xiaomi POCO X 11',
    brand: 'Xiaomi',
    releaseDate: '2025-11',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'GW3',
      'IMX682'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/1.8"',
      stabilization: '-',
      features: [
      'AI',
      '120掳 FOV',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/3.5',
      focalLength: '113mm',
      sensorSize: '1/2.55"',
      stabilization: 'OIS',
      features: [
      '5x',
      '2.5x',
      '3.5x',
      'PDAF',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.45',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'OIS',
      '4K 60fps',
      'HDR'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'ACES'
    ],
    imageFeatures: [
    'Panorama'
    ],
  },

  {
    id: 'asus-rogphonepro-9',
    name: 'ASUS ROG Phone Pro 9',
    brand: 'ASUS',
    releaseDate: '2023-03',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM6',
      'ISOCELL HM2'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2.6"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '114掳 FOV',
      'Stills',
      'Super Steady',
      'Autofocus'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '73mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'telephoto',
      '3x',
      'p'
      ],
    },
    telephoto2:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '73mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      '3x',
      'portrait',
      'telephoto'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      '4K',
      'Dual Pixel PDAF',
      'OIS'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'HDR10'
    ],
    imageFeatures: [
    'Smart HDR'
    ],
  },

  {
    id: 'lg-lgg-11',
    name: 'LG LG G 11',
    brand: 'LG',
    releaseDate: '2025-10',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.31"',
      stabilization: 'OIS',
      features: [
      'IMX789',
      'IMX586',
      'Sony Fusion',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'HDR',
      'Macro',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '65mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.45',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      '4K video',
      'HDR'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'AI Motion'
    ],
    imageFeatures: [
    'Pro mode RAW'
    ],
  },

  {
    id: 'lg-lgg-10-1',
    name: 'LG LG G 10',
    brand: 'LG',
    releaseDate: '2024-03',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM6',
      'ISOCELL HM2',
      'ISOCELL HM3'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.0',
      focalLength: '18mm',
      sensorSize: '1/2.7"',
      stabilization: '-',
      features: [
      'RYYB',
      'Cine',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '65mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      '3x',
      'portrait',
      'periscope',
      't',
      't'
      ],
    },
    telephoto2:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '81mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'telephoto',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AF',
      'Dynamic photo'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'HDR Vivid'
    ],
    imageFeatures: [
    'ProRAW'
    ],
  },

  {
    id: 'honor-magicultimate-9',
    name: 'Honor Magic Ultimate 9',
    brand: 'Honor',
    releaseDate: '2023-11',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP3',
      'IMX989',
      'ISOCELL HP5',
      'ISOCELL HP2'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Cine',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.6',
      focalLength: '113mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      '5x',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '52mm',
      sensorSize: '1/4.2"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF',
      '2x',
      '3',
      '3'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.5',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Dual Pixel',
      'face unlock',
      'video'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Director mode'
    ],
    imageFeatures: [
    'Portrait Mode'
    ],
  },

  {
    id: 'realme-narzo-7',
    name: 'Realme Narzo 7',
    brand: 'Realme',
    releaseDate: '2021-02',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM6',
      'ISOCELL HM2',
      'ISOCELL HM3',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro',
      '122掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.6',
      focalLength: '70mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      '4x',
      'HP9',
      'continuous optical zoom',
      '3.5x',
      'telephoto macro'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '65mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      'PDAF',
      '2x',
      'p',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: 'Dual pixel PDAF',
      features: [
      'PDAF',
      'Center Stage',
      'face ID',
      'Dolby Vision'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'HDR10+'
    ],
    imageFeatures: [
    'Document mode'
    ],
  },

  {
    id: 'google-pixela-9a',
    name: 'Google Pixel A 9 a',
    brand: 'Google',
    releaseDate: '2024-09',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'GW1',
      'IMX682',
      'IMX686',
      'GW3',
      'G'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/3.14"',
      stabilization: '-',
      features: [
      'AI',
      'HDR',
      '120掳 FOV',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '80mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'EIS',
      'Autofocus'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'Slow Motion'
    ],
    imageFeatures: [
    'AI beauty'
    ],
  },

  {
    id: 'samsung-galaxyzflip-6',
    name: 'Samsung Galaxy Z Flip 6',
    brand: 'Samsung',
    releaseDate: '2020-11',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.5',
      focalLength: '24mm',
      sensorSize: '1/1.35"',
      stabilization: 'OIS',
      features: [
      'OV50H',
      'GNV',
      'IMX989'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '16mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Stills',
      '112掳 FOV',
      'Super Steady',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '67mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'optical zoom',
      'Tetraprism',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.9',
      focalLength: '26mm',
      sensorSize: '1/2.94"',
      stabilization: 'AF',
      features: [
      'Bokeh Mode',
      'Cinematic mode',
      'face ID',
      'HDR',
      'Dolby Vision'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'AI Color Correction'
    ],
    imageFeatures: [
    'AI Enhance'
    ],
  },

  {
    id: 'asus-zenfone-11',
    name: 'ASUS ZenFone 11',
    brand: 'ASUS',
    releaseDate: '2025-01',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'GW3',
      'IMX686',
      'GW1'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '17mm',
      sensorSize: '1/5"',
      stabilization: '-',
      features: [
      '106掳 FOV',
      '118掳 FOV',
      '112掳 FOV',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/3.5',
      focalLength: '230mm',
      sensorSize: '1/1.95"',
      stabilization: 'OIS',
      features: [
      '6x',
      'telephoto macro',
      '4x',
      '10x',
      'periscope'
      ],
    },
    telephoto2:     {
      megapixels: '50MP',
      aperture: 'f/4.3',
      focalLength: '90mm',
      sensorSize: '1/2.51"',
      stabilization: 'OIS',
      features: [
      '4x',
      '10x',
      '3x',
      '6x'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.45',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'HDR',
      '4K video'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Super Resolution'
    ],
    imageFeatures: [
    'Smart HDR'
    ],
  },

  {
    id: 'huawei-pocket-11',
    name: 'Huawei Pocket 11',
    brand: 'Huawei',
    releaseDate: '2025-02',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.67"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM6',
      'ISOCELL HM2',
      'ISOCELL HM1',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '15mm',
      sensorSize: '1/2.75"',
      stabilization: '-',
      features: [
      '115掳 FOV',
      'Micro'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '81mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      '3x',
      'portrait'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.6',
      focalLength: '113mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      '5x',
      '2x',
      '3.5x',
      '2.5x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'face unlock',
      'Autofocus',
      'D'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Vivo V3 chip'
    ],
    imageFeatures: [
    'Professional Mode'
    ],
  },

  {
    id: 'oneplus-oneplusr-13r',
    name: 'OnePlus OnePlus R 13R',
    brand: 'OnePlus',
    releaseDate: '2024-12',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.28"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'Sony Fusion',
      'IMX689',
      'IMX586'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      'Super Steady',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/3.5',
      focalLength: '65mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      '3x',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'OIS',
      features: [
      'Bokeh Mode',
      'Dolby Vision',
      'Cinematic mode',
      'face ID'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Optical Flow'
    ],
    imageFeatures: [
    'Monochrome'
    ],
  },

  {
    id: 'nothing-nothingphone-12-1',
    name: 'Nothing Nothing Phone 12',
    brand: 'Nothing',
    releaseDate: '2026-05',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.31"',
      stabilization: 'OIS',
      features: [
      'IMX689',
      'IMX789',
      'IMX586',
      'S'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '15mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'HDR'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '72mm',
      sensorSize: '1/4.2"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.45',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'AF',
      'HDR',
      'Dual Pixel',
      'EIS',
      'video'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Gyro-EIS'
    ],
    imageFeatures: [
    'Super Resolution'
    ],
  },

  {
    id: 'google-pixela-7a',
    name: 'Google Pixel A 7 a',
    brand: 'Google',
    releaseDate: '2022-02',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.67"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM6',
      'ISOCELL HM3',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.0',
      focalLength: '18mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'Macro',
      'Cine',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '70mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'portrait'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '80mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '2x',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AF',
      'Dual Pixel PDAF',
      'HDR'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'ACES'
    ],
    imageFeatures: [
    'Live Photo'
    ],
  },

  {
    id: 'xiaomi-xiaomilite-9',
    name: 'Xiaomi Xiaomi Lite 9',
    brand: 'Xiaomi',
    releaseDate: '2023-02',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '24mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'GW1',
      'GW2',
      'GW3',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '15mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x',
      '2.5x'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/3.5',
      focalLength: '60mm',
      sensorSize: '1/2.4"',
      stabilization: 'OIS',
      features: [
      '5x',
      'portrait',
      '2x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'face unlock',
      'HDR',
      'Dynamic photo'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Super Resolution'
    ],
    imageFeatures: [
    'Food mode'
    ],
  },

  {
    id: 'sony-xperiapro-11',
    name: 'Sony Xperia Pro 11',
    brand: 'Sony',
    releaseDate: '2025-06',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.7',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP5',
      'OV50K',
      'LYT-901'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '15mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Micro',
      '122掳 FOV',
      '120掳 FOV',
      'Macro',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '100mm',
      sensorSize: '1/2.52"',
      stabilization: 'OIS',
      features: [
      'telephoto macro',
      '3x',
      '4x'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.5',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      '4K'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Zeiss Cinematic'
    ],
    imageFeatures: [
    'Magic Eraser'
    ],
  },

  {
    id: 'nokia-nokiaxr-6',
    name: 'Nokia Nokia XR 6',
    brand: 'Nokia',
    releaseDate: '2020-10',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'OV50K',
      'ISOCELL HP2',
      'LYT-901'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/2.5"',
      stabilization: '-',
      features: [
      '119掳 FOV',
      'Macro',
      '150掳 FOV',
      'Micro'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.8',
      focalLength: '85mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'periscope',
      '5x',
      'continuous optical zoom'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '67mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'optical zoom',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'AF',
      'Autofocus',
      'Dynamic photo'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Optical Flow'
    ],
    imageFeatures: [
    'Professional Mode'
    ],
  },

  {
    id: 'sony-xperia5-9',
    name: 'Sony Xperia 5 9',
    brand: 'Sony',
    releaseDate: '2023-11',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'GN2',
      'LYT-900'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Macro',
      '123掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '81mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'portrait',
      '3x',
      't'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '77mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      '2x',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'AI',
      'HDR',
      'EIS',
      'f'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'AI Video'
    ],
    imageFeatures: [
    'Leica Authentic'
    ],
  },

  {
    id: 'oneplus-onepluspro-15pro',
    name: 'OnePlus OnePlus Pro 15 Pro',
    brand: 'OnePlus',
    releaseDate: '2026-07',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'LYT-808',
      'ISOCELL HP2',
      'ISOCELL HP9',
      'ISOCELL HP5'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.3',
      focalLength: '14mm',
      sensorSize: '1/4"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '106掳 FOV',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '52mm',
      sensorSize: '1/4"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF',
      '2x',
      '3',
      '3'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.45',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'HDR',
      'Dual Pixel PDAF'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Nightography'
    ],
    imageFeatures: [
    'AI Scene Optimization'
    ],
  },

  {
    id: 'vivo-xpro-8',
    name: 'vivo X Pro 8',
    brand: 'vivo',
    releaseDate: '2022-03',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '24mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'OV50K',
      'LYT-818',
      'ISOCELL HP5',
      'ISOCELL HP2',
      'IMX989'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '15mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      '119掳 FOV',
      '126掳 FOV',
      '150掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      'portrait',
      'PDAF',
      '2',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '22mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'HDR',
      'PDAF',
      'Cinematic mode'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'AI Motion'
    ],
    imageFeatures: [
    'Live Photo'
    ],
  },

  {
    id: 'vivo-y-10',
    name: 'vivo Y 10',
    brand: 'vivo',
    releaseDate: '2024-05',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'LYT-808',
      'OV50H',
      'ISOCELL HP3',
      'LYT-901'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Micro',
      'Macro',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '90mm',
      sensorSize: '1/1.95"',
      stabilization: 'OIS',
      features: [
      '6x',
      '3.5x',
      'telephoto macro',
      '5x'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '50mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'Tetraprism',
      'optical zoom',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'AI',
      'HDR',
      'face unlock'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Slow Motion'
    ],
    imageFeatures: [
    'Macro mode'
    ],
  },

  {
    id: 'lg-lgvelvet-6',
    name: 'LG LG Velvet 6',
    brand: 'LG',
    releaseDate: '2020-09',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.57',
      focalLength: '23mm',
      sensorSize: '1/1.35"',
      stabilization: 'OIS',
      features: [
      'IMX920',
      'LYT-818',
      'OV50A',
      'OV50H',
      'LYT-901'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.2',
      focalLength: '18mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '52mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'portrait',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AF',
      'EIS',
      'face unlock',
      'Autofocus'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'Nightography'
    ],
    imageFeatures: [
    'Document mode'
    ],
  },

  {
    id: 'asus-rogphone-10',
    name: 'ASUS ROG Phone 10',
    brand: 'ASUS',
    releaseDate: '2024-03',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'IMX682',
      'GW2',
      'GW1',
      'G'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/2.75"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      '150掳 FOV',
      '122掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.2',
      focalLength: '100mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'HP5',
      'periscope',
      '5x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '21mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      'Autofocus',
      'Dual PD'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Hasselblad color'
    ],
    imageFeatures: [
    'Pixel Shift'
    ],
  },

  {
    id: 'lenovo-lenovo-9',
    name: 'Lenovo Lenovo 9',
    brand: 'Lenovo',
    releaseDate: '2023-04',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'GW2',
      'IMX686',
      'GW1'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '14mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro Focus',
      'Autofocus'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '81mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'telephoto'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      '4K',
      '4K 60fps',
      'HDR'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'ACES'
    ],
    imageFeatures: [
    'AI Photo Edit'
    ],
  },

  {
    id: 'lenovo-lenovo-7',
    name: 'Lenovo Lenovo 7',
    brand: 'Lenovo',
    releaseDate: '2021-01',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP2',
      'LYT-901',
      'IMX989',
      'LYT-808'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'AI',
      'Macro',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.67',
      focalLength: '111mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      'HP9',
      'continuous optical zoom'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '65mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2x',
      '2.5x',
      'portrait',
      'P'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'AF',
      'PDAF',
      'HDR'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Apple Log'
    ],
    imageFeatures: [
    'Panorama'
    ],
  },

  {
    id: 'vivo-x-11',
    name: 'vivo X 11',
    brand: 'vivo',
    releaseDate: '2025-12',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.5',
      focalLength: '24mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'OV50H',
      'LYT-901',
      'GN2'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '16mm',
      sensorSize: '1/3.06"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      'HDR',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/2.4"',
      stabilization: 'OIS',
      features: [
      '2x',
      'portrait',
      'PDAF',
      'periscope',
      '5x'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '70mm',
      sensorSize: '1/2.4"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      'portrait',
      '3.5x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: 'Dual PD',
      features: [
      'face unlock',
      'HDR'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    '8K recording'
    ],
    imageFeatures: [
    'AI portrait'
    ],
  },

  {
    id: 'oppo-reno-7-1',
    name: 'OPPO Reno+ 7+',
    brand: 'OPPO',
    releaseDate: '2021-10',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'LYT-808',
      'LYT-901',
      'LYT-818',
      'ISOCELL HP5'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.0',
      focalLength: '18mm',
      sensorSize: '1/2.7"',
      stabilization: '-',
      features: [
      'RYYB',
      '120掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '77mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2x',
      'optical zoom',
      '3x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'Dual PD',
      features: [
      'Autofocus',
      'face unlock',
      'Dual PD'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'Apple Log'
    ],
    imageFeatures: [
    'Best Take'
    ],
  },

  {
    id: 'vivo-xultra-8',
    name: 'vivo X Ultra 8',
    brand: 'vivo',
    releaseDate: '2022-09',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'LYT-900',
      'IMX906'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro',
      'HDR'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '80mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2.5x',
      '2x',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/3.1"',
      stabilization: 'Dual PD',
      features: [
      'face unlock',
      'Autofocus',
      'HDR',
      'D',
      'D'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    '8K recording'
    ],
    imageFeatures: [
    'HDR+'
    ],
  },

  {
    id: 'lenovo-legionphone-12-1',
    name: 'Lenovo Legion Phone 12',
    brand: 'Lenovo',
    releaseDate: '2026-08',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'IMX789',
      'IMX586',
      'IMX689'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '15mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV',
      '123掳 FOV',
      'H'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '52mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2x',
      '3x',
      'PDAF',
      'optical zoom'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '70mm',
      sensorSize: '1/2.55"',
      stabilization: 'OIS',
      features: [
      '2x',
      'portrait',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'EIS',
      'face unlock',
      'AI',
      'H',
      'H'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Super Resolution'
    ],
    imageFeatures: [
    'Zeiss optics'
    ],
  },

  {
    id: 'lg-lgg-7',
    name: 'LG LG G 7',
    brand: 'LG',
    releaseDate: '2021-07',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.57',
      focalLength: '24mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'LYT-808',
      'IMX906',
      'LYT-901',
      'OV50A'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '15mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV',
      'HDR',
      'A',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '81mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'periscope',
      '3x',
      'telephoto',
      'p',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.5',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'EIS',
      'PDAF'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'HDR Vivid'
    ],
    imageFeatures: [
    'Monochrome'
    ],
  },

  {
    id: 'xiaomi-xiaomiultra-9',
    name: 'Xiaomi Xiaomi Ultra 9',
    brand: 'Xiaomi',
    releaseDate: '2023-07',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.67"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM3',
      'ISOCELL HM1',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      'Micro',
      '112掳 FOV',
      '122掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '85mm',
      sensorSize: '1/2.6"',
      stabilization: 'OIS',
      features: [
      '5x',
      '3.5x',
      'portrait'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '77mm',
      sensorSize: '1/4"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x',
      'optical zoom',
      '3'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '1/3.1"',
      stabilization: 'AF',
      features: [
      'face unlock',
      'Dual PD',
      'Autofocus',
      'H',
      'H'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Vivo V3 chip'
    ],
    imageFeatures: [
    'Zeiss optics'
    ],
  },

  {
    id: 'tcl-tcl20-7',
    name: 'TCL TCL 20 7',
    brand: 'TCL',
    releaseDate: '2021-03',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '23mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'LYT-901',
      'LYT-808',
      'OV50H'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/1.8',
      focalLength: '18mm',
      sensorSize: '1/2.7"',
      stabilization: '-',
      features: [
      'RYYB',
      'Macro',
      'Cine',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.4',
      focalLength: '111mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      '5x',
      'HP3',
      '3x',
      'HP9'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/2.94"',
      stabilization: 'AF',
      features: [
      'Center Stage',
      'Cinematic mode'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'AI Motion'
    ],
    imageFeatures: [
    'AI portrait'
    ],
  },

  {
    id: 'vivo-y-10-1',
    name: 'vivo Y 10',
    brand: 'vivo',
    releaseDate: '2024-08',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'GW3',
      'GW1',
      'IMX682',
      'IMX686',
      'G'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      'HDR',
      '120掳 FOV',
      'Macro',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.4',
      focalLength: '90mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      'HP5'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'PDAF',
      'Dual Pixel',
      'AF',
      '4K',
      'face unlock'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Slow Motion'
    ],
    imageFeatures: [
    'Leica Vibrant'
    ],
  },

  {
    id: 'zte-axon-12',
    name: 'ZTE Axon 12',
    brand: 'ZTE',
    releaseDate: '2026-07',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'LYT-901',
      'OV50K'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '15mm',
      sensorSize: '1/3.14"',
      stabilization: '-',
      features: [
      'AI',
      'HDR',
      'Macro',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '77mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x',
      '3x',
      'o'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'Dual PD',
      'Autofocus',
      'H'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    '8K 30fps HDR'
    ],
    imageFeatures: [
    'Panorama'
    ],
  },

  {
    id: 'apple-iphonepromax-2018promax',
    name: 'Apple iPhone Pro Max 2018 Pro Max',
    brand: 'Apple',
    releaseDate: '2020-03',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'LYT-901',
      'ISOCELL HP9',
      'LYT-818',
      'ISOCELL HP3'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV',
      'Micro',
      '112掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '52mm',
      sensorSize: '1/4"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'face unlock',
      'Dynamic photo',
      'HDR'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'ACES'
    ],
    imageFeatures: [
    'Leica filters'
    ],
  },

  {
    id: 'realme-narzopro-9',
    name: 'Realme Narzo Pro 9',
    brand: 'Realme',
    releaseDate: '2023-01',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP3',
      'ISOCELL HP5'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Super Steady',
      'Autofocus',
      '120掳 FOV',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.8',
      focalLength: '90mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      '5x',
      'telephoto macro'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '67mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2x',
      'optical zoom',
      'Tetraprism',
      'portrait',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.4',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'OIS+EIS'
    ],
    imageFeatures: [
    'Zeiss Cinematic'
    ],
  },

  {
    id: 'tcl-tcl50-9-1',
    name: 'TCL TCL 50 9',
    brand: 'TCL',
    releaseDate: '2023-07',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX789',
      'IMX689',
      'IMX586',
      'S'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '15mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '123掳 FOV',
      'HDR',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '80mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x',
      '2.5x'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'HDR',
      '4K video',
      'Autofocus',
      'A'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Super Steady'
    ],
    imageFeatures: [
    'Pixel Shift'
    ],
  },

  {
    id: 'lg-lgv-10',
    name: 'LG LG V 10',
    brand: 'LG',
    releaseDate: '2024-07',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'LYT-818',
      'IMX989',
      'ISOCELL HP9',
      'OV50H'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      'Micro',
      'Macro',
      '122掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/4"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.5',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'PDAF',
      'HDR',
      'EIS',
      'AI',
      'Autofocus'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Apple Log'
    ],
    imageFeatures: [
    'AI Remove'
    ],
  },

  {
    id: 'honor-honor-7',
    name: 'Honor HONOR 7',
    brand: 'Honor',
    releaseDate: '2021-05',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM1',
      'ISOCELL HM6',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Macro',
      'Micro',
      '120掳 FOV',
      '122掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '77mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'Tetraprism',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '67mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      '2x',
      '3x',
      'optical zoom',
      'P',
      'P'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'HDR',
      'AI',
      'PDAF'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Vivo V3 chip'
    ],
    imageFeatures: [
    'Super Resolution'
    ],
  },

  {
    id: 'huawei-pocket-11-1',
    name: 'Huawei Pocket 11',
    brand: 'Huawei',
    releaseDate: '2025-09',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'GW2',
      'GW1',
      'IMX686'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/3.2"',
      stabilization: '-',
      features: [
      '118掳 FOV',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '81mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'periscope',
      '3x',
      'telephoto',
      'p',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.0',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'face unlock'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Director mode'
    ],
    imageFeatures: [
    'ProRAW'
    ],
  },

  {
    id: 'asus-zenfonepro-11',
    name: 'ASUS ZenFone Pro 11',
    brand: 'ASUS',
    releaseDate: '2025-09',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP3',
      'LYT-900',
      'LYT-901'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/2.75"',
      stabilization: '-',
      features: [
      '126掳 FOV',
      '114掳 FOV',
      '122掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '73mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'telephoto',
      'portrait'
      ],
    },
    telephoto2:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '70mm',
      sensorSize: '1/2.64"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '5x',
      '10x',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'HDR',
      'AF',
      'Dynamic photo'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'AI Cinema'
    ],
    imageFeatures: [
    'Document mode'
    ],
  },

  {
    id: 'apple-iphonepro-2021pro',
    name: 'Apple iPhone Pro 2021 Pro',
    brand: 'Apple',
    releaseDate: '2023-10',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '24mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'Sony Fusion',
      'IMX689',
      'IMX789',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'AI',
      '120掳 FOV',
      'M',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      '2x',
      'portrait',
      '3x',
      'P'
      ],
    },
    telephoto2:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/2.75"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      'portrait',
      'telephoto macro'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.5',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'Dynamic photo',
      'AF',
      'HDR',
      'f'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'ProRes'
    ],
    imageFeatures: [
    'Best Take'
    ],
  },

  {
    id: 'huawei-puraultra-6',
    name: 'Huawei Pura Ultra 6',
    brand: 'Huawei',
    releaseDate: '2020-12',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM6',
      'ISOCELL HM3'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/4"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '106掳 FOV',
      '112掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.4',
      focalLength: '135mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '5x',
      '3x'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '50mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'portrait',
      'Tetraprism',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'EIS',
      'Dual Pixel'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'ProRes RAW'
    ],
    imageFeatures: [
    'XD Fusion'
    ],
  },

  {
    id: 'meizu-meizupro-11',
    name: 'Meizu Meizu Pro 11',
    brand: 'Meizu',
    releaseDate: '2025-11',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM1'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      'Micro',
      'Macro',
      '122掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '67mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      '3x',
      'Tetraprism',
      'portrait'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '72mm',
      sensorSize: '1/4"',
      stabilization: 'OIS',
      features: [
      '3x',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'wide-angle',
      'PDAF',
      'AI'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Cinematic mode'
    ],
    imageFeatures: [
    'Monochrome'
    ],
  },

  {
    id: 'nokia-nokiag-12',
    name: 'Nokia Nokia G 12',
    brand: 'Nokia',
    releaseDate: '2026-09',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.7',
      focalLength: '23mm',
      sensorSize: '1/1.12"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'OV50A',
      'GNV',
      'LYT-900'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      'Macro',
      '122掳 FOV',
      'Micro',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '70mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '2x',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.45',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      '4K 60fps',
      'OIS',
      'Dual Pixel PDAF',
      'Auto focus',
      'Autofocus'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Slow Motion'
    ],
    imageFeatures: [
    'Portrait Mode'
    ],
  },

  {
    id: 'nokia-nokiaxr-10-1',
    name: 'Nokia Nokia XR 10',
    brand: 'Nokia',
    releaseDate: '2024-04',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'LYT-900',
      'OV50K',
      'LYT-901'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '112掳 FOV',
      'Super Steady',
      'Autofocus'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/4.3',
      focalLength: '73mm',
      sensorSize: '1/2.75"',
      stabilization: 'OIS',
      features: [
      'telephoto macro',
      '4x',
      '2.5x',
      'portrait'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.4',
      focalLength: '113mm',
      sensorSize: '1/2.4"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '3.5x',
      '2.5x'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      '4K',
      '4K 60fps'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'HDR Vivid'
    ],
    imageFeatures: [
    'Dual Capture'
    ],
  },

  {
    id: 'lenovo-legionphone-6-1',
    name: 'Lenovo Legion Phone 6',
    brand: 'Lenovo',
    releaseDate: '2020-07',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'OV50K',
      'ISOCELL HP2'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/1.8',
      focalLength: '18mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'RYYB',
      'Cine',
      'M',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '70mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      'portrait',
      '2x',
      'P'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.6',
      focalLength: '50mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '3x',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.45',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'HDR'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'LOG'
    ],
    imageFeatures: [
    'Pro mode RAW'
    ],
  },

  {
    id: 'realme-realme-12',
    name: 'Realme Realme 12',
    brand: 'Realme',
    releaseDate: '2026-09',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '24mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'GW2',
      'IMX682',
      'IMX686',
      'GW1'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.0',
      focalLength: '18mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '52mm',
      sensorSize: '1/3.5"',
      stabilization: 'OIS',
      features: [
      'Tetraprism',
      'optical zoom'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'optical zoom',
      'portrait',
      '3x',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.4',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'AF'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'ProRes RAW'
    ],
    imageFeatures: [
    'Magic Eraser'
    ],
  },

  {
    id: 'google-pixelpro-6pro',
    name: 'Google Pixel Pro 6 Pro',
    brand: 'Google',
    releaseDate: '2021-07',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'GW1',
      'IMX686',
      'GW3',
      'GW2',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.3',
      focalLength: '16mm',
      sensorSize: '1/5"',
      stabilization: '-',
      features: [
      '118掳 FOV',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '67mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      '3x',
      'PDAF',
      'optical zoom',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.9',
      focalLength: '26mm',
      sensorSize: '1/3.06"',
      stabilization: 'OIS',
      features: [
      'Dolby Vision',
      'PDAF',
      'Cinematic mode',
      'Autofocus'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'AI video enhancement'
    ],
    imageFeatures: [
    'AI portrait'
    ],
  },

  {
    id: 'nokia-nokiag-6-1',
    name: 'Nokia Nokia G 6',
    brand: 'Nokia',
    releaseDate: '2020-04',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '23mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'LYT-808',
      'IMX989',
      'ISOCELL HP5'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      'Stills',
      'Super Steady',
      '120掳 FOV',
      'Autofocus'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '65mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'portrait',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/2.94"',
      stabilization: '-',
      features: [
      'PDAF',
      'Autofocus'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'AI video enhancement'
    ],
    imageFeatures: [
    'Time-lapse'
    ],
  },

  {
    id: 'sony-xperia5-10',
    name: 'Sony Xperia 5 10',
    brand: 'Sony',
    releaseDate: '2024-09',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '23mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'IMX586',
      'Sony Fusion',
      'IMX789'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Cine',
      'RYYB',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '73mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'telephoto',
      'portrait',
      '3'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.45',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'wide-angle',
      'face unlock',
      'Autofocus'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'HDR10+'
    ],
    imageFeatures: [
    'Magic Eraser'
    ],
  },

  {
    id: 'motorola-gpower-9',
    name: 'Motorola G Power 9',
    brand: 'Motorola',
    releaseDate: '2023-07',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'OV50K',
      'IMX989',
      'OV50H',
      'LYT-901'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2"',
      stabilization: 'Quad PD',
      features: [
      'Autofocus',
      '126掳 FOV',
      '123掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.4',
      focalLength: '135mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      '2x',
      '3x',
      'periscope',
      '3.5x'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '65mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '5x'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'wide-angle',
      'Autofocus',
      'AI'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Hasselblad color'
    ],
    imageFeatures: [
    'Pro mode RAW'
    ],
  },

  {
    id: 'nokia-nokiag-12-1',
    name: 'Nokia Nokia G 12',
    brand: 'Nokia',
    releaseDate: '2026-01',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '24mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'IMX689',
      'Sony Fusion',
      'IMX789',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'portrait',
      '2.5x',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      '4K',
      'face unlock',
      'AF',
      'HDR'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'EIS'
    ],
    imageFeatures: [
    'XMAGE'
    ],
  },

  {
    id: 'asus-rogphone-9',
    name: 'ASUS ROG Phone 9',
    brand: 'ASUS',
    releaseDate: '2023-08',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '24mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'LYT-901',
      'ISOCELL HP3',
      'LYT-900'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '123掳 FOV',
      'HDR',
      'M',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '3x',
      'telephoto',
      'p',
      'p'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '80mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF',
      '2.5x'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.5',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Dual Pixel',
      'video'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Action mode'
    ],
    imageFeatures: [
    'Super Resolution'
    ],
  },

  {
    id: 'samsung-galaxys-12',
    name: 'Samsung Galaxy S 12',
    brand: 'Samsung',
    releaseDate: '2026-06',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM2',
      'ISOCELL HM3',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      'Macro',
      'Micro'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/3.0',
      focalLength: '90mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'telephoto macro',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H',
      'H'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Apple Log'
    ],
    imageFeatures: [
    'Object Eraser'
    ],
  },

  {
    id: 'sony-xperia5-6',
    name: 'Sony Xperia 5 6',
    brand: 'Sony',
    releaseDate: '2020-03',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.68',
      focalLength: '23mm',
      sensorSize: '1/1.43"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'GN1',
      'LYT-901'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/2.35"',
      stabilization: 'Quad PD',
      features: [
      '126掳 FOV',
      'Macro Focus',
      '120掳 FOV',
      '123掳 FOV',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.6',
      focalLength: '135mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'telephoto macro',
      '2.5x',
      '10x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'Dual PD',
      'Autofocus'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Nightography'
    ],
    imageFeatures: [
    'HDR+'
    ],
  },

  {
    id: 'oneplus-onepluspro-14pro',
    name: 'OnePlus OnePlus Pro 14 Pro',
    brand: 'OnePlus',
    releaseDate: '2025-12',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'IMX682',
      'GW2',
      'GW1'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '12mm',
      sensorSize: '1/2.5"',
      stabilization: '-',
      features: [
      '126掳 FOV',
      '123掳 FOV',
      'Macro Focus',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.6',
      focalLength: '135mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'telephoto macro',
      '3x',
      'continuous optical zoom',
      '5x',
      'HP5'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.2',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Log'
    ],
    imageFeatures: [
    'AI Enhance'
    ],
  },

  {
    id: 'oppo-reno-11',
    name: 'OPPO Reno 11',
    brand: 'OPPO',
    releaseDate: '2025-04',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM3',
      'ISOCELL HM1',
      'ISOCELL HM6'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Super Steady',
      '112掳 FOV',
      '114掳 FOV',
      'Autofocus',
      'Stills'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '65mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'telephoto'
      ],
    },
    telephoto2:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '73mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '3x',
      'telephoto'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.2',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Cinematic mode'
    ],
    imageFeatures: [
    'Long exposure'
    ],
  },

  {
    id: 'zte-blade-8',
    name: 'ZTE Blade 8',
    brand: 'ZTE',
    releaseDate: '2022-05',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'LYT-900',
      'OV50K',
      'OV50H'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/2.75"',
      stabilization: '-',
      features: [
      '150掳 FOV',
      'AI'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '65mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2.5x',
      '2x',
      'P',
      'P'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '60mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      'PDAF',
      '5x',
      'periscope',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f',
      'f',
      'f'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    '6K 30fps'
    ],
    imageFeatures: [
    'Pixel Shift'
    ],
  },

  {
    id: 'honor-magic-8',
    name: 'Honor Magic 8',
    brand: 'Honor',
    releaseDate: '2022-09',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.7',
      focalLength: '24mm',
      sensorSize: '1/1.35"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'LYT-818'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'AI',
      '120掳 FOV',
      'HDR'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/3.0',
      focalLength: '73mm',
      sensorSize: '1/1.95"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      '6x',
      '4x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'EIS',
      'face unlock',
      'HDR',
      'A'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Leica film style'
    ],
    imageFeatures: [
    'ProRAW'
    ],
  },

  {
    id: 'nokia-nokiax-6',
    name: 'Nokia Nokia X 6',
    brand: 'Nokia',
    releaseDate: '2020-04',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.7',
      focalLength: '24mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'ISOCELL HP5',
      'OV50K',
      'ISOCELL HP2',
      'LYT-900'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      '122掳 FOV',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.6',
      focalLength: '67mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'portrait'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'PDAF',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'PDAF',
      'wide-angle',
      'AI',
      'HDR',
      'Autofocus'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Super Steady'
    ],
    imageFeatures: [
    'AI Remove'
    ],
  },

  {
    id: 'asus-rogphone-10-1',
    name: 'ASUS ROG Phone 10',
    brand: 'ASUS',
    releaseDate: '2024-09',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'OV50K',
      'LYT-818',
      'ISOCELL HP5',
      'ISOCELL HP3'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/1.8"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '77mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'optical zoom',
      'portrait'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '60mm',
      sensorSize: '1/2.4"',
      stabilization: 'OIS',
      features: [
      '2x',
      '3x',
      '3.5x',
      '5x'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'AF'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    '8K recording'
    ],
    imageFeatures: [
    'Best Take'
    ],
  },

  {
    id: 'huawei-nova-6',
    name: 'Huawei Nova 6',
    brand: 'Huawei',
    releaseDate: '2020-05',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM3',
      'ISOCELL HM1',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '52mm',
      sensorSize: '1/4"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      '3x',
      '2x',
      'P'
      ],
    },
    telephoto2:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '81mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'telephoto',
      '3x',
      'periscope',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.4',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      '4K video'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Optical Flow'
    ],
    imageFeatures: [
    'Long exposure'
    ],
  },

  {
    id: 'honor-v-7',
    name: 'Honor V 7',
    brand: 'Honor',
    releaseDate: '2021-03',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.4',
      focalLength: '23mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'LYT-818',
      'GN2',
      'GN1',
      'OV50A'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/4"',
      stabilization: '-',
      features: [
      '106掳 FOV',
      '118掳 FOV',
      '112掳 FOV',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.6',
      focalLength: '52mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'portrait',
      'optical zoom',
      '3x',
      '2'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '77mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.45',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Dual Pixel',
      'EIS',
      'Autofocus'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Nightography'
    ],
    imageFeatures: [
    'Leica Vibrant'
    ],
  },

  {
    id: 'lenovo-legionphone-11',
    name: 'Lenovo Legion Phone 11',
    brand: 'Lenovo',
    releaseDate: '2025-04',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/1.31"',
      stabilization: 'OIS',
      features: [
      'IMX586',
      'IMX689',
      'Sony Fusion',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/4"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '50mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'optical zoom',
      'PDAF',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'Dual PD',
      features: [
      'Autofocus',
      'Dual PD',
      'face unlock'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Nightography'
    ],
    imageFeatures: [
    'Zeiss Cinematic'
    ],
  },

  {
    id: 'honor-magic-11',
    name: 'Honor Magic 11',
    brand: 'Honor',
    releaseDate: '2025-06',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.95',
      focalLength: '23mm',
      sensorSize: '1/1.22"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX920',
      'GN2',
      'LYT-900'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'AI',
      'M',
      'M',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '77mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'PDAF',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/2.6',
      focalLength: '90mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      'periscope',
      'HP9',
      'HP5'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      '4K',
      'Auto focus'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Hasselblad color'
    ],
    imageFeatures: [
    'Photo Unblur'
    ],
  },

  {
    id: 'xiaomi-xiaomipro-7',
    name: 'Xiaomi Xiaomi Pro 7',
    brand: 'Xiaomi',
    releaseDate: '2021-05',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.7',
      focalLength: '23mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'ISOCELL HP3',
      'OV50H',
      'LYT-901',
      'LYT-818'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/2"',
      stabilization: 'Quad PD',
      features: [
      '120掳 FOV',
      '123掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.6',
      focalLength: '52mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'optical zoom',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '77mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF',
      '3x',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.45',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'AI',
      'PDAF',
      'Autofocus',
      'EIS'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'LOG'
    ],
    imageFeatures: [
    'Object Eraser'
    ],
  },

  {
    id: 'apple-iphonepro-2021pro-1',
    name: 'Apple iPhone Pro 2021 Pro',
    brand: 'Apple',
    releaseDate: '2023-07',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.5',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'OV50K',
      'IMX890',
      'OV50H',
      'GNV',
      'LYT-900'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '15mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'HDR',
      '123掳 FOV',
      'M',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.8',
      focalLength: '135mm',
      sensorSize: '1/2.55"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '5x',
      '3.5x',
      'periscope',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.2',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H',
      'H',
      'H',
      'H'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'ProRes'
    ],
    imageFeatures: [
    'Time-lapse'
    ],
  },

  {
    id: 'google-pixel-10',
    name: 'Google Pixel 10',
    brand: 'Google',
    releaseDate: '2025-04',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.88',
      focalLength: '23mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'OV50A',
      'IMX906'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/1.8"',
      stabilization: '-',
      features: [
      'Macro',
      'AI',
      '1',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '65mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      '3x',
      'telephoto',
      'portrait',
      'p',
      'p'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/3.5',
      focalLength: '60mm',
      sensorSize: '1/2.55"',
      stabilization: 'OIS',
      features: [
      '2x',
      '2.5x',
      'periscope',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.45',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'EIS',
      'Dual Pixel PDAF',
      '4K 60fps',
      'HDR'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Zeiss T*'
    ],
    imageFeatures: [
    'HDR+'
    ],
  },

  {
    id: 'vivo-x-11-1',
    name: 'vivo X 11',
    brand: 'vivo',
    releaseDate: '2025-04',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'Sony Fusion',
      'IMX586',
      'IMX789',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '12mm',
      sensorSize: '1/2.5"',
      stabilization: '-',
      features: [
      '126掳 FOV',
      'AI'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '72mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF',
      '3x',
      '2',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.45',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      '4K video',
      'face unlock',
      'Autofocus',
      'HDR'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    '8K 30fps HDR'
    ],
    imageFeatures: [
    'Best Take'
    ],
  },

  {
    id: 'motorola-gpower-9-1',
    name: 'Motorola G Power 9',
    brand: 'Motorola',
    releaseDate: '2023-08',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '24mm',
      sensorSize: '1/2"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'Sony Fusion',
      'IMX586',
      'IMX689'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '14mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '126掳 FOV',
      'Autofocus',
      '123掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'telephoto',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'PDAF',
      'video'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    '10-bit HDR'
    ],
    imageFeatures: [
    'Document mode'
    ],
  },

  {
    id: 'nokia-nokiax-10',
    name: 'Nokia Nokia X 10',
    brand: 'Nokia',
    releaseDate: '2024-01',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.4',
      focalLength: '23mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP9',
      'ISOCELL HP2',
      'IMX989',
      'LYT-901',
      'LYT-808'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/1.8"',
      stabilization: '-',
      features: [
      'Macro',
      'AI',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.4',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Cinematic mode'
    ],
    imageFeatures: [
    'Professional Mode'
    ],
  },

  {
    id: 'meizu-meizu-11',
    name: 'Meizu Meizu 11',
    brand: 'Meizu',
    releaseDate: '2025-10',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.7',
      focalLength: '24mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'GN1',
      'IMX906',
      'GN2',
      'OV50H',
      'OV50K'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '123掳 FOV',
      'HDR',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      '4x',
      '3.5x',
      'telephoto macro'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '77mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      '3x',
      '2x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.5',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'EIS',
      'AI',
      'PDAF',
      'face unlock',
      'wide-angle'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    '8K 30fps HDR'
    ],
    imageFeatures: [
    'Professional Mode'
    ],
  },

  {
    id: 'google-pixela-7a-1',
    name: 'Google Pixel A 7 a',
    brand: 'Google',
    releaseDate: '2022-04',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.95',
      focalLength: '23mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'OV50K',
      'OV50H',
      'GNV',
      'LYT-901',
      'IMX906'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/2.6"',
      stabilization: '-',
      features: [
      '114掳 FOV',
      '112掳 FOV',
      'Autofocus',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '65mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'telephoto',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'face unlock'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Log'
    ],
    imageFeatures: [
    'Magic Editor'
    ],
  },

  {
    id: 'vivo-y-6',
    name: 'vivo Y 6',
    brand: 'vivo',
    releaseDate: '2020-10',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '23mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'GW3',
      'IMX686'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '12mm',
      sensorSize: '1/2.75"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '126掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '65mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      'portrait'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF',
      '3x',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'EIS',
      'AI',
      'HDR'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'HDR10'
    ],
    imageFeatures: [
    'Leica Vibrant'
    ],
  },

  {
    id: 'nothing-nothingphone-8',
    name: 'Nothing Nothing Phone+ 8+',
    brand: 'Nothing',
    releaseDate: '2022-12',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.67"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM3',
      'ISOCELL HM1',
      'ISOCELL HM2'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Super Steady',
      'Stills',
      '112掳 FOV',
      '114掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '81mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'portrait',
      '3x',
      't'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.4',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      '4K video',
      'AF',
      'face unlock'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Optical Flow'
    ],
    imageFeatures: [
    'Watermark'
    ],
  },

  {
    id: 'nothing-nothingphone-6',
    name: 'Nothing Nothing Phone+ 6+',
    brand: 'Nothing',
    releaseDate: '2020-11',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.88',
      focalLength: '24mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'GNV',
      'GN1',
      'IMX920'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Super Steady',
      '120掳 FOV',
      'Stills',
      '112掳 FOV',
      '114掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.8',
      focalLength: '70mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'telephoto macro',
      'HP3',
      '3x',
      'HP5',
      'continuous optical zoom'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2x',
      '2.5x',
      'P'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/3.2"',
      stabilization: 'AF',
      features: [
      'face ID',
      'Dolby Vision',
      'Dual Capture',
      'HDR'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'AI Cinema'
    ],
    imageFeatures: [
    'Zeiss Cinematic'
    ],
  },

  {
    id: 'zte-axonultra-11',
    name: 'ZTE Axon Ultra 11',
    brand: 'ZTE',
    releaseDate: '2025-10',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.52"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM3',
      'ISOCELL HM6',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '15mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      'HDR',
      'Macro',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '70mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'PDAF',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.45',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'face unlock',
      'HDR',
      '4K video',
      'A'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Dolby Vision'
    ],
    imageFeatures: [
    'Macro mode'
    ],
  },

  {
    id: 'zte-axonultra-8',
    name: 'ZTE Axon Ultra 8',
    brand: 'ZTE',
    releaseDate: '2022-08',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.4',
      focalLength: '24mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'LYT-808',
      'OV50K',
      'ISOCELL HP9',
      'ISOCELL HP3'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.2',
      focalLength: '135mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      '4x',
      '5x',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      '4K',
      'Dual Pixel'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Action mode'
    ],
    imageFeatures: [
    'Macro mode'
    ],
  },

  {
    id: 'nothing-nothingphone-10',
    name: 'Nothing Nothing Phone 10',
    brand: 'Nothing',
    releaseDate: '2024-08',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '24mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'LYT-818',
      'ISOCELL HP9',
      'LYT-808',
      'OV50H'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Macro',
      'HDR',
      '120掳 FOV',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '67mm',
      sensorSize: '1/4"',
      stabilization: 'OIS',
      features: [
      '3x',
      'optical zoom'
      ],
    },
    telephoto2:     {
      megapixels: '50MP',
      aperture: 'f/2.8',
      focalLength: '65mm',
      sensorSize: '1/2.6"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '23mm',
      sensorSize: '1/3.06"',
      stabilization: 'OIS',
      features: [
      'face ID',
      'PDAF'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Cinematic mode'
    ],
    imageFeatures: [
    'Live Photo'
    ],
  },

  {
    id: 'xiaomi-poco-8',
    name: 'Xiaomi POCO 8',
    brand: 'Xiaomi',
    releaseDate: '2022-03',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '24mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'LYT-808',
      'ISOCELL HP5',
      'IMX989',
      'ISOCELL HP9'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/2.5"',
      stabilization: '-',
      features: [
      '126掳 FOV',
      'Macro',
      'AI',
      '114掳 FOV',
      'Freeform'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.67',
      focalLength: '73mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'continuous optical zoom',
      'HP3'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Center Stage',
      'PDAF',
      'HDR',
      'face ID'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'EIS'
    ],
    imageFeatures: [
    'AI beauty'
    ],
  },

  {
    id: 'zte-blade-12',
    name: 'ZTE Blade 12',
    brand: 'ZTE',
    releaseDate: '2026-08',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '23mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'IMX682',
      'GW1',
      'GW2',
      'IMX686',
      'G'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/3.14"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.8',
      focalLength: '100mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '10x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.9',
      focalLength: '25mm',
      sensorSize: '1/3.2"',
      stabilization: 'AF',
      features: [
      'Bokeh Mode',
      'face ID'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'HDR10'
    ],
    imageFeatures: [
    'Night Mode'
    ],
  },

  {
    id: 'vivo-xfold-8',
    name: 'vivo X Fold 8',
    brand: 'vivo',
    releaseDate: '2022-12',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.57',
      focalLength: '24mm',
      sensorSize: '1/1.43"',
      stabilization: 'OIS',
      features: [
      'OV50K',
      'OV50A',
      'IMX906',
      'LYT-818',
      'GN1'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Stills',
      '120掳 FOV',
      '114掳 FOV',
      'Super Steady',
      'Autofocus'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/3.5',
      focalLength: '65mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '2x',
      '2.5x',
      'portrait',
      '3.5x',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '20mm',
      sensorSize: '1/3.6"',
      stabilization: 'AF',
      features: [
      'Dual Capture',
      'Dolby Vision',
      'Bokeh Mode',
      'Cinematic mode',
      'Autofocus'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Log'
    ],
    imageFeatures: [
    'Magic Eraser'
    ],
  },

  {
    id: 'huawei-puraultra-11',
    name: 'Huawei Pura Ultra 11',
    brand: 'Huawei',
    releaseDate: '2025-07',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'OV50A',
      'OV50H',
      'IMX989',
      'IMX920'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.3',
      focalLength: '16mm',
      sensorSize: '1/4.4"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '118掳 FOV',
      '112掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '135mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'periscope',
      'portrait',
      '3.5x'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'Dual Pixel',
      'face unlock'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'Zeiss T*'
    ],
    imageFeatures: [
    'Leica Authentic'
    ],
  },

  {
    id: 'tcl-tcl20-10',
    name: 'TCL TCL 20 10',
    brand: 'TCL',
    releaseDate: '2024-02',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.68',
      focalLength: '23mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'GNV',
      'LYT-900',
      'OV50H',
      'GN2',
      'OV50K'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/1.8"',
      stabilization: '-',
      features: [
      'AI',
      '120掳 FOV',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '77mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      '2x',
      '3x',
      'PDAF',
      'portrait'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2.5x'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.5',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'wide-angle',
      'PDAF',
      'Autofocus',
      'AI'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Slow Motion'
    ],
    imageFeatures: [
    'XMAGE'
    ],
  },

  {
    id: 'realme-gtpro-6',
    name: 'Realme GT Pro 6',
    brand: 'Realme',
    releaseDate: '2020-04',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM3',
      'ISOCELL HM6',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/4.4"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '106掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.8',
      focalLength: '135mm',
      sensorSize: '1/2.55"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      'periscope',
      '2x',
      'PDAF',
      '2.5x'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '70mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.5',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'video',
      'Autofocus',
      'HDR',
      'AF'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'ProRes RAW'
    ],
    imageFeatures: [
    'Super Resolution'
    ],
  },

  {
    id: 'honor-honorpro-6',
    name: 'Honor HONOR Pro 6',
    brand: 'Honor',
    releaseDate: '2020-10',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'LYT-808',
      'LYT-900'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro',
      'A',
      'A',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '52mm',
      sensorSize: '1/3.5"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'Tetraprism',
      'portrait'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '77mm',
      sensorSize: '1/3.06"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF',
      '3x',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'HDR',
      '4K',
      'AF'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'HDR10+'
    ],
    imageFeatures: [
    'AI Photo Edit'
    ],
  },

  {
    id: 'google-pixelpro-11pro',
    name: 'Google Pixel Pro 11 Pro',
    brand: 'Google',
    releaseDate: '2026-08',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'IMX789',
      'IMX586',
      'Sony Fusion',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.7',
      focalLength: '14mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      '120掳 FOV',
      'Macro Focus'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '52mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'Tetraprism',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.4',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AF',
      'Autofocus',
      'face unlock',
      '4K video',
      'H'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'Super Steady'
    ],
    imageFeatures: [
    'AI Remove'
    ],
  },

  {
    id: 'lenovo-lenovo-12',
    name: 'Lenovo Lenovo 12',
    brand: 'Lenovo',
    releaseDate: '2026-09',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '23mm',
      sensorSize: '1/1.31"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX586',
      'Sony Fusion',
      'IMX689',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/2.6"',
      stabilization: '-',
      features: [
      'Stills',
      '112掳 FOV',
      '120掳 FOV',
      '114掳 FOV',
      'Autofocus'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.6',
      focalLength: '90mm',
      sensorSize: '1/2.55"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '3.5x',
      '3x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.2',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f',
      'f'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'ACES'
    ],
    imageFeatures: [
    'AI Enhance'
    ],
  },

  {
    id: 'samsung-galaxya-9',
    name: 'Samsung Galaxy A 9',
    brand: 'Samsung',
    releaseDate: '2023-02',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM3',
      'ISOCELL HM2',
      'ISOCELL HM6',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/2.4"',
      stabilization: '-',
      features: [
      '150掳 FOV',
      '119掳 FOV',
      '123掳 FOV',
      'Micro',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '77mm',
      sensorSize: '1/3.52"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '52mm',
      sensorSize: '1/3.06"',
      stabilization: 'OIS',
      features: [
      '3x',
      'Tetraprism',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.45',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'Autofocus',
      'PDAF'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Super Resolution'
    ],
    imageFeatures: [
    'Document mode'
    ],
  },

  {
    id: 'oneplus-oneplusnord-3',
    name: 'OnePlus OnePlus Nord 3',
    brand: 'OnePlus',
    releaseDate: '2020-10',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.67"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM1',
      'ISOCELL HM6'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2.35"',
      stabilization: 'Quad PD',
      features: [
      'Autofocus',
      '120掳 FOV',
      '126掳 FOV',
      'Macro Focus'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'Tetraprism',
      'optical zoom',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'AF',
      'Autofocus',
      'Dynamic photo',
      'H'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Leica film style'
    ],
    imageFeatures: [
    'Document mode'
    ],
  },

  {
    id: 'asus-zenfone-10',
    name: 'ASUS ZenFone 10',
    brand: 'ASUS',
    releaseDate: '2024-11',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'GW3',
      'IMX682',
      'GW1',
      'GW2'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/2.7"',
      stabilization: '-',
      features: [
      'Cine',
      'RYYB',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '80mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2.5x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.2',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'HDR Vivid'
    ],
    imageFeatures: [
    'Ultra HDR'
    ],
  },

  {
    id: 'realme-narzo-10',
    name: 'Realme Narzo 10',
    brand: 'Realme',
    releaseDate: '2024-08',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'IMX682',
      'GW1',
      'IMX686'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Macro',
      'HDR'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '70mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '3x'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/2.67',
      focalLength: '111mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      '5x',
      '3.5x',
      'HP9'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Dual PD',
      'Autofocus',
      'face unlock'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Cine'
    ],
    imageFeatures: [
    'Photo Unblur'
    ],
  },

  {
    id: 'lenovo-lenovo-8',
    name: 'Lenovo Lenovo 8',
    brand: 'Lenovo',
    releaseDate: '2022-08',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '24mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'IMX586',
      'IMX689',
      'IMX789',
      'S',
      'S'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '13mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '126掳 FOV',
      'Macro Focus',
      'Autofocus',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '113mm',
      sensorSize: '1/2.4"',
      stabilization: 'OIS',
      features: [
      '3x',
      '5x'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'Cinematic mode'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'OIS+EIS'
    ],
    imageFeatures: [
    'Hasselblad Natural Color'
    ],
  },

  {
    id: 'lenovo-lenovo-10',
    name: 'Lenovo Lenovo 10',
    brand: 'Lenovo',
    releaseDate: '2024-08',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'GW3',
      'GW1',
      'IMX682'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      'Autofocus',
      '120掳 FOV',
      '112掳 FOV',
      '114掳 FOV',
      'Stills'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '65mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'telephoto',
      '3x',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'wide-angle',
      'face unlock'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'HDR Vivid'
    ],
    imageFeatures: [
    'Food mode'
    ],
  },

  {
    id: 'lg-lgwing-12',
    name: 'LG LG Wing 12',
    brand: 'LG',
    releaseDate: '2026-01',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM3',
      'ISOCELL HM6',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      'Macro',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '50mm',
      sensorSize: '1/4"',
      stabilization: 'OIS',
      features: [
      '3x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'Autofocus',
      'AF',
      'Dynamic photo',
      'f'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Cine'
    ],
    imageFeatures: [
    'Hasselblad Natural Color'
    ],
  },

  {
    id: 'xiaomi-poco-9',
    name: 'Xiaomi POCO 9',
    brand: 'Xiaomi',
    releaseDate: '2023-09',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '24mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'GW1',
      'IMX686'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/3.14"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '70mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2x',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AI',
      'EIS',
      'HDR',
      'f',
      'f'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Vivo V3 chip'
    ],
    imageFeatures: [
    'Object Eraser'
    ],
  },

  {
    id: 'samsung-galaxym-11',
    name: 'Samsung Galaxy M 11',
    brand: 'Samsung',
    releaseDate: '2025-02',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.67"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM2'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/3.06"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      'HDR',
      '120掳 FOV',
      'M',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.6',
      focalLength: '67mm',
      sensorSize: '1/3.52"',
      stabilization: 'OIS',
      features: [
      '2x',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      '4K 60fps',
      'Auto focus',
      'HDR',
      '4K',
      'Autofocus'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Hybrid Log Gamma'
    ],
    imageFeatures: [
    'Pixel Shift'
    ],
  },

  {
    id: 'oppo-findxultra-8',
    name: 'OPPO Find X Ultra 8',
    brand: 'OPPO',
    releaseDate: '2022-09',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'GW2',
      'IMX686',
      'GW3',
      'GW1'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/3.06"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.6',
      focalLength: '72mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '3x',
      'portrait',
      'optical zoom'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '72mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '3x',
      'optical zoom',
      'PDAF',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'Dual Pixel',
      'Autofocus'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'AI Video'
    ],
    imageFeatures: [
    'Astrophotography'
    ],
  },

  {
    id: 'nothing-nothingphone-7',
    name: 'Nothing Nothing Phone+ 7+',
    brand: 'Nothing',
    releaseDate: '2021-11',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'IMX586',
      'Sony Fusion',
      'IMX789'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/4"',
      stabilization: '-',
      features: [
      '106掳 FOV',
      '112掳 FOV',
      '120掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.4',
      focalLength: '73mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      'telephoto macro'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '65mm',
      sensorSize: '1/2.4"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.45',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'Autofocus',
      'AF',
      'face unlock'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'HDR10+'
    ],
    imageFeatures: [
    'Astrophotography'
    ],
  },

  {
    id: 'nokia-nokiaxr-8',
    name: 'Nokia Nokia XR 8',
    brand: 'Nokia',
    releaseDate: '2022-06',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '23mm',
      sensorSize: '1/1.31"',
      stabilization: 'OIS',
      features: [
      'IMX689',
      'IMX789'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '16mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Autofocus',
      '112掳 FOV',
      'Stills',
      'Super Steady'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '72mm',
      sensorSize: '1/3.52"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'PDAF',
      '2x',
      'optical zoom',
      '3'
      ],
    },
    telephoto2:     {
      megapixels: '50MP',
      aperture: 'f/2.8',
      focalLength: '70mm',
      sensorSize: '1/2.75"',
      stabilization: 'OIS',
      features: [
      '10x',
      '2x',
      '6x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'face unlock',
      'HDR'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Vivo V3 chip'
    ],
    imageFeatures: [
    'Dual Capture'
    ],
  },

  {
    id: 'sony-xperia1-9',
    name: 'Sony Xperia 1 9',
    brand: 'Sony',
    releaseDate: '2023-05',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.78',
      focalLength: '24mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'GNV',
      'LYT-901',
      'IMX890',
      'GN2'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/1.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '50mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '2x',
      'PDAF'
      ],
    },
    telephoto2:     {
      megapixels: '50MP',
      aperture: 'f/2.6',
      focalLength: '111mm',
      sensorSize: '1/1.95"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      '4x',
      'telephoto macro',
      'portrait',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.5',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'wide-angle',
      'HDR',
      'AI'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'AI Color Correction'
    ],
    imageFeatures: [
    'Leica Vibrant'
    ],
  },

  {
    id: 'google-pixelpro-8pro',
    name: 'Google Pixel Pro 8 Pro',
    brand: 'Google',
    releaseDate: '2023-07',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.75',
      focalLength: '24mm',
      sensorSize: '1/1.43"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'LYT-901',
      'GN1'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Macro',
      'AI'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'optical zoom',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.6',
      focalLength: '70mm',
      sensorSize: '1/2.4"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2.5x',
      '5x',
      '3x',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.45',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      '4K',
      'EIS'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'AI video enhancement'
    ],
    imageFeatures: [
    'Portrait Mode'
    ],
  },

  {
    id: 'honor-magic-10',
    name: 'Honor Magic 10',
    brand: 'Honor',
    releaseDate: '2024-07',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'GW3',
      'GW2',
      'IMX686',
      'IMX682'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'AI',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.8',
      focalLength: '65mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      '5x',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '77mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF',
      '3x',
      '2',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'video',
      'EIS',
      'Autofocus',
      'face unlock',
      'Dual Pixel'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'AI Cinema'
    ],
    imageFeatures: [
    'Magic Editor'
    ],
  },

  {
    id: 'zte-blade-9',
    name: 'ZTE Blade 9',
    brand: 'ZTE',
    releaseDate: '2023-12',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM6',
      'ISOCELL HM1',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.0',
      focalLength: '18mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'RYYB',
      'Macro',
      'C'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '230mm',
      sensorSize: '1/2.6"',
      stabilization: 'OIS',
      features: [
      '5x',
      '3x',
      '4x',
      '2.5x'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '52mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      '3x',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Dual Pixel PDAF',
      'Auto focus'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    '8K 30fps HDR'
    ],
    imageFeatures: [
    'XD Fusion'
    ],
  },

  {
    id: 'google-pixelxl-8xl',
    name: 'Google Pixel XL 8 XL',
    brand: 'Google',
    releaseDate: '2023-05',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'LYT-808',
      'IMX989',
      'ISOCELL HP2'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      '120掳 FOV',
      'Macro Focus',
      '126掳 FOV',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/3.06"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'Tetraprism',
      '3x'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.6',
      focalLength: '77mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2x',
      'portrait',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'PDAF',
      'Autofocus',
      'Center Stage',
      'Cinematic mode',
      'Dual Capture'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    '10-bit HDR'
    ],
    imageFeatures: [
    'Portrait Mode'
    ],
  },

  {
    id: 'tcl-tcl30-10',
    name: 'TCL TCL 30 10',
    brand: 'TCL',
    releaseDate: '2024-05',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'GW3',
      'GW1',
      'IMX682'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/1.8"',
      stabilization: '-',
      features: [
      'Macro',
      'AI',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/3.5',
      focalLength: '65mm',
      sensorSize: '1/2.4"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'PDAF'
      ],
    },
    telephoto2:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '70mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'portrait',
      '3x',
      't'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.5',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AI',
      'PDAF',
      'Autofocus',
      'wide-angle'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'AI Color Correction'
    ],
    imageFeatures: [
    'AI Enhance'
    ],
  },

  {
    id: 'motorola-razr-8',
    name: 'Motorola Razr 8',
    brand: 'Motorola',
    releaseDate: '2022-02',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/1.31"',
      stabilization: 'OIS',
      features: [
      'IMX689',
      'Sony Fusion',
      'IMX789',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/2.5"',
      stabilization: '-',
      features: [
      '115掳 FOV',
      '126掳 FOV',
      '114掳 FOV',
      'Micro',
      '122掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '67mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '3x',
      'Tetraprism',
      'optical zoom',
      'PDAF',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'AF',
      'HDR',
      '4K',
      'Autofocus',
      'video'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Cinematic mode'
    ],
    imageFeatures: [
    'Pixel Shift'
    ],
  },

  {
    id: 'samsung-galaxys-10',
    name: 'Samsung Galaxy S+ 10+',
    brand: 'Samsung',
    releaseDate: '2024-11',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'LYT-901'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Autofocus',
      '114掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '2x',
      'portrait',
      'P'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/2.6',
      focalLength: '73mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'HP3',
      'HP5',
      '4x',
      'continuous optical zoom',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.4',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'AF',
      'HDR',
      '4K video',
      'face unlock'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Zeiss Cinematic'
    ],
    imageFeatures: [
    'Astrophotography'
    ],
  },

  {
    id: 'honor-magicultimate-12',
    name: 'Honor Magic Ultimate 12',
    brand: 'Honor',
    releaseDate: '2026-06',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '23mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'GW1'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '15mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      '128掳 FOV',
      'Freeform'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/4.2"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x',
      '3x',
      'o'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.45',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      '4K video'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Zeiss Cinematic'
    ],
    imageFeatures: [
    'Macro mode'
    ],
  },

  {
    id: 'realme-gtmaster-11',
    name: 'Realme GT Master 11',
    brand: 'Realme',
    releaseDate: '2025-06',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.57',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'IMX906',
      'IMX989',
      'OV50H'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '120掳 FOV',
      '114掳 FOV',
      'Super Steady'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3.06"',
      stabilization: 'OIS',
      features: [
      '3x',
      'Tetraprism',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Auto focus',
      'HDR'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'HDR Vivid'
    ],
    imageFeatures: [
    'AI Photo Edit'
    ],
  },

  {
    id: 'motorola-gpower-6',
    name: 'Motorola G Power 6',
    brand: 'Motorola',
    releaseDate: '2020-01',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'GW3'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/2.35"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Autofocus',
      '126掳 FOV',
      'Macro Focus'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '230mm',
      sensorSize: '1/1.95"',
      stabilization: 'OIS',
      features: [
      '3x',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.45',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'OIS',
      'Auto focus',
      'Dual Pixel PDAF'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'HDR Vivid'
    ],
    imageFeatures: [
    'Professional Mode'
    ],
  },

  {
    id: 'huawei-pocket-8',
    name: 'Huawei Pocket 8',
    brand: 'Huawei',
    releaseDate: '2022-06',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM3',
      'ISOCELL HM6'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/3.06"',
      stabilization: '-',
      features: [
      'HDR',
      '120掳 FOV',
      '123掳 FOV',
      'M',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '70mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      '3x',
      'telephoto',
      'periscope'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/3.5',
      focalLength: '65mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '3.5x',
      'periscope',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H',
      'H',
      'H',
      'H'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    '6K 30fps'
    ],
    imageFeatures: [
    'Super Resolution'
    ],
  },

  {
    id: 'oppo-reno-8',
    name: 'OPPO Reno+ 8+',
    brand: 'OPPO',
    releaseDate: '2022-12',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'OV50K',
      'ISOCELL HP5'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Super Steady',
      'Stills',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x',
      '2.5x',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.45',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      '4K',
      'Autofocus',
      'PDAF',
      'HDR',
      'face unlock'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'AI video enhancement'
    ],
    imageFeatures: [
    'AI beauty'
    ],
  },

  {
    id: 'zte-nubia-12',
    name: 'ZTE Nubia 12',
    brand: 'ZTE',
    releaseDate: '2026-04',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'LYT-808',
      'OV50K'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/2.7"',
      stabilization: '-',
      features: [
      'Cine',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/3.0',
      focalLength: '70mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      '4x',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '22mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      'Dual PD',
      'Autofocus',
      'face unlock'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Cinematic mode'
    ],
    imageFeatures: [
    'Professional Mode'
    ],
  },

  {
    id: 'realme-narzopro-10',
    name: 'Realme Narzo Pro 10',
    brand: 'Realme',
    releaseDate: '2024-09',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'LYT-818',
      'LYT-808'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      'Macro',
      '123掳 FOV',
      'HDR',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '72mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.5',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'PDAF',
      'EIS',
      'wide-angle'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'AI Cinema'
    ],
    imageFeatures: [
    'AI Enhance'
    ],
  },

  {
    id: 'nokia-nokiag-8',
    name: 'Nokia Nokia G 8',
    brand: 'Nokia',
    releaseDate: '2022-08',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.7',
      focalLength: '23mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'LYT-901',
      'ISOCELL HP5',
      'OV50K',
      'OV50H'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '112掳 FOV',
      'Autofocus',
      '114掳 FOV',
      'Super Steady'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '67mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      '2x',
      'portrait',
      'Tetraprism',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '23mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      'HDR',
      'Dual PD',
      'Autofocus',
      'f',
      'f'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Leica film style'
    ],
    imageFeatures: [
    'Zeiss optics'
    ],
  },

  {
    id: 'motorola-edgepro-11',
    name: 'Motorola Edge Pro 11',
    brand: 'Motorola',
    releaseDate: '2025-12',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '24mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'OV50H',
      'OV50K',
      'ISOCELL HP9',
      'IMX989'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Micro',
      'Macro',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '77mm',
      sensorSize: '1/3.2"',
      stabilization: 'OIS',
      features: [
      '3x',
      'PDAF',
      'optical zoom',
      'portrait',
      '2'
      ],
    },
    telephoto2:     {
      megapixels: '50MP',
      aperture: 'f/2.6',
      focalLength: '135mm',
      sensorSize: '1/2.75"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'telephoto macro',
      '2.5x',
      'portrait',
      '4x'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.2',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'HDR'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Portrait Video'
    ],
    imageFeatures: [
    'Astrophotography'
    ],
  },

  {
    id: 'tcl-tcl20-7-1',
    name: 'TCL TCL 20 7',
    brand: 'TCL',
    releaseDate: '2021-02',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '23mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'OV50K',
      'LYT-818',
      'ISOCELL HP2'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '15mm',
      sensorSize: '1/2.5"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '119掳 FOV',
      '115掳 FOV',
      'Micro',
      '150掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2.5x',
      '2x',
      'p',
      'p'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'portrait',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.8',
      focalLength: '20mm',
      sensorSize: '1/2.94"',
      stabilization: 'Dual pixel PDAF',
      features: [
      'HDR',
      'Autofocus'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Action mode'
    ],
    imageFeatures: [
    'Leica Vibrant'
    ],
  },

  {
    id: 'nothing-nothingphone-12-2',
    name: 'Nothing Nothing Phone 12',
    brand: 'Nothing',
    releaseDate: '2026-06',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.52"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM1',
      'ISOCELL HM6',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.2',
      focalLength: '18mm',
      sensorSize: '1/2.7"',
      stabilization: '-',
      features: [
      'Cine',
      'Macro',
      'RYYB',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '73mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'telephoto',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '1/3.1"',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'HDR'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Vivo V3 chip'
    ],
    imageFeatures: [
    'ProRAW'
    ],
  },

  {
    id: 'xiaomi-xiaomi-9',
    name: 'Xiaomi Xiaomi 9',
    brand: 'Xiaomi',
    releaseDate: '2023-07',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.52"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM6',
      'ISOCELL HM1'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '15mm',
      sensorSize: '1/3.06"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      '120掳 FOV',
      'HDR',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.8',
      focalLength: '70mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF',
      'periscope',
      '2.5x',
      '3.5x'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.45',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'EIS',
      'Autofocus',
      'HDR',
      'face unlock',
      'AI'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'LOG'
    ],
    imageFeatures: [
    'AI Scene Optimization'
    ],
  },

  {
    id: 'google-pixela-7a-2',
    name: 'Google Pixel A 7 a',
    brand: 'Google',
    releaseDate: '2022-01',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'LYT-900',
      'IMX906'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'HDR',
      'Macro',
      'A',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3.2"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.45',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      '4K',
      'HDR'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Hasselblad color'
    ],
    imageFeatures: [
    'Pixel Shift'
    ],
  },

  {
    id: 'huawei-pocket-6',
    name: 'Huawei Pocket 6',
    brand: 'Huawei',
    releaseDate: '2020-04',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.35"',
      stabilization: 'OIS',
      features: [
      'LYT-900',
      'ISOCELL HP3'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2.35"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '126掳 FOV',
      '123掳 FOV',
      'Macro Focus',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '81mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'telephoto',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'EIS',
      'video',
      '4K',
      'PDAF',
      'Autofocus'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Portrait Video'
    ],
    imageFeatures: [
    'Watermark'
    ],
  },

  {
    id: 'samsung-galaxya-10',
    name: 'Samsung Galaxy A 10',
    brand: 'Samsung',
    releaseDate: '2024-01',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'IMX586',
      'IMX789',
      'IMX689'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'AI',
      'Macro',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '70mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      '3x',
      '2x',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'Dual PD',
      features: [
      'HDR',
      'Dual PD'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'ProRes'
    ],
    imageFeatures: [
    'Zeiss optics'
    ],
  },

  {
    id: 'oppo-renopro-8',
    name: 'OPPO Reno Pro 8',
    brand: 'OPPO',
    releaseDate: '2022-11',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.5',
      focalLength: '35mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'LYT-901',
      'IMX890'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      '114掳 FOV',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'periscope'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '80mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'portrait',
      '2.5x'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'EIS',
      'HDR',
      'AI',
      'PDAF'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Portrait Video'
    ],
    imageFeatures: [
    'Hasselblad Natural Color'
    ],
  },

  {
    id: 'vivo-xpro-11',
    name: 'vivo X Pro 11',
    brand: 'vivo',
    releaseDate: '2025-08',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.7',
      focalLength: '23mm',
      sensorSize: '1/1.35"',
      stabilization: 'OIS',
      features: [
      'LYT-900',
      'OV50H',
      'LYT-818'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '126掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '77mm',
      sensorSize: '1/3.2"',
      stabilization: 'OIS',
      features: [
      '2x',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '23mm',
      sensorSize: '1/3.1"',
      stabilization: 'Dual PD',
      features: [
      'face unlock',
      'HDR',
      'Autofocus',
      'D'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'HDR Vivid'
    ],
    imageFeatures: [
    'ProRAW'
    ],
  },

  {
    id: 'apple-iphonepromax-2018promax-1',
    name: 'Apple iPhone Pro Max 2018 Pro Max',
    brand: 'Apple',
    releaseDate: '2020-06',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '23mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'IMX682',
      'GW2',
      'IMX686'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV',
      'Micro',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/2.55"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '3.5x',
      '2x',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H',
      'H'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    '6K 30fps'
    ],
    imageFeatures: [
    'Watermark'
    ],
  },

  {
    id: 'asus-zenfonepro-12',
    name: 'ASUS ZenFone Pro 12',
    brand: 'ASUS',
    releaseDate: '2026-02',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.8',
      focalLength: '35mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'IMX906',
      'GN2',
      'IMX989',
      'GN1'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'RYYB',
      'Cine'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.4',
      focalLength: '85mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      '4x',
      'HP9',
      '5x',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'face unlock'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Super Steady'
    ],
    imageFeatures: [
    'Portrait Mode'
    ],
  },

  {
    id: 'samsung-galaxys-11',
    name: 'Samsung Galaxy S+ 11+',
    brand: 'Samsung',
    releaseDate: '2025-07',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '23mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'IMX682',
      'IMX686'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      'Macro',
      '120掳 FOV',
      'H',
      'H'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '77mm',
      sensorSize: '1/3.06"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.45',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'EIS',
      'HDR'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Hasselblad color'
    ],
    imageFeatures: [
    'Document mode'
    ],
  },

  {
    id: 'nokia-nokiaxr-12',
    name: 'Nokia Nokia XR 12',
    brand: 'Nokia',
    releaseDate: '2026-06',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '23mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'GW2',
      'IMX686'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '67mm',
      sensorSize: '1/4"',
      stabilization: 'OIS',
      features: [
      '3x',
      'PDAF',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '81mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '3x',
      'periscope',
      't'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      '4K',
      'Dual Pixel',
      'AF'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'Slow Motion'
    ],
    imageFeatures: [
    'Monochrome'
    ],
  },

  {
    id: 'oppo-reno-9',
    name: 'OPPO Reno+ 9+',
    brand: 'OPPO',
    releaseDate: '2023-11',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '24mm',
      sensorSize: '1/1.4"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX689',
      'IMX586',
      'IMX789'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/3.2"',
      stabilization: '-',
      features: [
      '106掳 FOV',
      '120掳 FOV',
      '118掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '77mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF',
      '3x',
      '2'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '70mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '3x',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'Dynamic photo',
      'face unlock'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Night Sight Video'
    ],
    imageFeatures: [
    'Ultra HDR'
    ],
  },

  {
    id: 'xiaomi-redmi-6',
    name: 'Xiaomi Redmi 6',
    brand: 'Xiaomi',
    releaseDate: '2020-04',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.4',
      focalLength: '23mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'ISOCELL HP2',
      'ISOCELL HP9',
      'OV50H',
      'LYT-901'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '122掳 FOV',
      'Micro',
      '112掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '80mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '80mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2x',
      '2.5x',
      'P'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AF',
      'HDR'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'AI Cinema'
    ],
    imageFeatures: [
    'Magic Editor'
    ],
  },

  {
    id: 'huawei-matepro-7',
    name: 'Huawei Mate Pro 7',
    brand: 'Huawei',
    releaseDate: '2021-04',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.4',
      focalLength: '24mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'OV50H',
      'OV50K'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Micro',
      'Macro',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '67mm',
      sensorSize: '1/4.2"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'optical zoom',
      '3x',
      '2',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.5',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'HDR',
      'PDAF'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'AI video enhancement'
    ],
    imageFeatures: [
    'Object Eraser'
    ],
  },

  {
    id: 'tcl-tcl20-6-1',
    name: 'TCL TCL 20 6',
    brand: 'TCL',
    releaseDate: '2020-02',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '23mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'GW2',
      'GW1',
      'IMX686',
      'IMX682'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/1.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'AI',
      'M',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '73mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      '3x',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.5',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'AF',
      'face unlock'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Hasselblad color'
    ],
    imageFeatures: [
    'AI portrait'
    ],
  },

  {
    id: 'honor-magicultimate-9-1',
    name: 'Honor Magic Ultimate 9',
    brand: 'Honor',
    releaseDate: '2023-02',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.7',
      focalLength: '23mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP9',
      'OV50H',
      'OV50K'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      'Macro',
      'HDR',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.67',
      focalLength: '90mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'HP5',
      'HP9',
      'periscope',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'AF',
      'Autofocus',
      '4K video',
      'f'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Super Steady'
    ],
    imageFeatures: [
    'Smart HDR'
    ],
  },

  {
    id: 'motorola-g-11',
    name: 'Motorola G 11',
    brand: 'Motorola',
    releaseDate: '2025-11',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'IMX689',
      'Sony Fusion'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'AI',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '73mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'telephoto',
      '3x',
      'p',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.8',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: 'Dual pixel PDAF',
      features: [
      'Dolby Vision',
      'Autofocus'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Action mode'
    ],
    imageFeatures: [
    'AI Scene Optimization'
    ],
  },

  {
    id: 'asus-zenfone-11-1',
    name: 'ASUS ZenFone 11',
    brand: 'ASUS',
    releaseDate: '2025-05',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.57',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'GN2',
      'LYT-900'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '15mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      'Micro',
      '112掳 FOV',
      '122掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '50mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2x',
      'portrait',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'AF',
      'Dynamic photo'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Action mode'
    ],
    imageFeatures: [
    'Long exposure'
    ],
  },

  {
    id: 'realme-narzopro-8',
    name: 'Realme Narzo Pro 8',
    brand: 'Realme',
    releaseDate: '2022-02',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.52"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM6',
      'ISOCELL HM2'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Autofocus',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '77mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF',
      '2x',
      '3',
      '3'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '77mm',
      sensorSize: '1/4"',
      stabilization: 'OIS',
      features: [
      '3x',
      'PDAF',
      '2x',
      'o'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.4',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'face unlock',
      'HDR',
      '4K video'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'ProRes RAW'
    ],
    imageFeatures: [
    'Astrophotography'
    ],
  },

  {
    id: 'samsung-galaxyzflip-11',
    name: 'Samsung Galaxy Z Flip 11',
    brand: 'Samsung',
    releaseDate: '2025-01',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.5',
      focalLength: '23mm',
      sensorSize: '1/1.22"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'OV50H',
      'IMX906',
      'LYT-818',
      'OV50K',
      'GNV'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      '114掳 FOV',
      '112掳 FOV',
      'Autofocus',
      'Super Steady',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '111mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'telephoto macro'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Dual Pixel',
      'video',
      'EIS'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Leica film style'
    ],
    imageFeatures: [
    'Zeiss Cinematic'
    ],
  },

  {
    id: 'asus-rogphonepro-6-1',
    name: 'ASUS ROG Phone Pro 6',
    brand: 'ASUS',
    releaseDate: '2020-10',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'GW1',
      'GW2',
      'GW3',
      'IMX682',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'RYYB',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/3.5',
      focalLength: '60mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'portrait',
      '2x',
      '3.5x',
      '5x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H',
      'H'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Cine'
    ],
    imageFeatures: [
    'AI Photo Edit'
    ],
  },

  {
    id: 'tcl-tcl50-12',
    name: 'TCL TCL 50 12',
    brand: 'TCL',
    releaseDate: '2026-06',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'GW3',
      'GW1',
      'IMX686',
      'GW2',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/2.75"',
      stabilization: '-',
      features: [
      '114掳 FOV',
      '150掳 FOV',
      '115掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.8',
      focalLength: '90mm',
      sensorSize: '1/2.4"',
      stabilization: 'OIS',
      features: [
      '3x',
      'portrait',
      '2.5x',
      '3.5x'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      '4K',
      'Dual Pixel PDAF',
      'AF'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Cinematic mode'
    ],
    imageFeatures: [
    'Best Take'
    ],
  },

  {
    id: 'oneplus-oneplus-15',
    name: 'OnePlus OnePlus 15',
    brand: 'OnePlus',
    releaseDate: '2026-09',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'LYT-808',
      'IMX989'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/3.14"',
      stabilization: '-',
      features: [
      'Macro',
      'HDR',
      'AI',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'AI',
      'face unlock',
      'E'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'AI Motion'
    ],
    imageFeatures: [
    'Leica Authentic'
    ],
  },

  {
    id: 'zte-nubia-9',
    name: 'ZTE Nubia 9',
    brand: 'ZTE',
    releaseDate: '2023-05',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.67"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM6',
      'ISOCELL HM1',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '67mm',
      sensorSize: '1/3.5"',
      stabilization: 'OIS',
      features: [
      '3x',
      'portrait'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '52mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'Tetraprism',
      'optical zoom',
      '2x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'PDAF',
      'Autofocus'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Nightography'
    ],
    imageFeatures: [
    'Leica filters'
    ],
  },

  {
    id: 'tcl-tcl20-11',
    name: 'TCL TCL 20 11',
    brand: 'TCL',
    releaseDate: '2025-01',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP2',
      'ISOCELL HP3',
      'OV50H',
      'LYT-900'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/2.35"',
      stabilization: 'Quad PD',
      features: [
      '120掳 FOV',
      'Macro Focus'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.2',
      focalLength: '100mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'HP3',
      '3x',
      'telephoto macro'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.5',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'HDR'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Zeiss T*'
    ],
    imageFeatures: [
    'Macro mode'
    ],
  },

  {
    id: 'realme-narzopro-12',
    name: 'Realme Narzo Pro 12',
    brand: 'Realme',
    releaseDate: '2026-03',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'GW1',
      'GW2',
      'GW3',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '13mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Autofocus',
      'Macro Focus',
      '123掳 FOV',
      '120掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '70mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'telephoto',
      'portrait'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.4',
      focalLength: '65mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      'periscope',
      '3x',
      'portrait',
      '5x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.4',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H',
      'H',
      'H',
      'H'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Zeiss T*'
    ],
    imageFeatures: [
    'AI Remove'
    ],
  },

  {
    id: 'meizu-meizupro-9',
    name: 'Meizu Meizu Pro 9',
    brand: 'Meizu',
    releaseDate: '2023-09',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM2',
      'ISOCELL HM6'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '122掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '60mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2x',
      '5x',
      '3.5x'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '72mm',
      sensorSize: '1/3.52"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.4',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      '4K video',
      'AF',
      'face unlock',
      'HDR',
      'A'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    '6K 30fps'
    ],
    imageFeatures: [
    'Document mode'
    ],
  },

  {
    id: 'vivo-iqoo-8',
    name: 'vivo iQOO 8',
    brand: 'vivo',
    releaseDate: '2022-07',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM1',
      'ISOCELL HM3',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'AI',
      '120掳 FOV',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '52mm',
      sensorSize: '1/3.5"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'optical zoom',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '67mm',
      sensorSize: '1/4"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF',
      'optical zoom',
      '3',
      '3'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Dynamic photo',
      'face unlock',
      'AF'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'AI Motion'
    ],
    imageFeatures: [
    'Pixel Shift'
    ],
  },

  {
    id: 'samsung-galaxym-8',
    name: 'Samsung Galaxy M 8',
    brand: 'Samsung',
    releaseDate: '2022-11',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '24mm',
      sensorSize: '1/2"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX689',
      'IMX586',
      'IMX789'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Micro',
      '122掳 FOV',
      '112掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/3.5',
      focalLength: '70mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x',
      'portrait',
      '3x',
      '3.5x'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'EIS',
      'wide-angle'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'ACES'
    ],
    imageFeatures: [
    'Time-lapse'
    ],
  },

  {
    id: 'lenovo-lenovo-12-1',
    name: 'Lenovo Lenovo 12',
    brand: 'Lenovo',
    releaseDate: '2026-03',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.6',
      focalLength: '24mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'OV50K',
      'LYT-900',
      'LYT-901'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/2.75"',
      stabilization: '-',
      features: [
      'Micro',
      '128掳 FOV',
      '126掳 FOV',
      '150掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '72mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      '3x',
      'PDAF',
      'optical zoom',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      '4K video',
      'Autofocus',
      'HDR',
      'face unlock',
      'A'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Leica film style'
    ],
    imageFeatures: [
    'AI beauty'
    ],
  },

  {
    id: 'apple-iphoneplus-2020plus',
    name: 'Apple iPhone Plus 2020 Plus',
    brand: 'Apple',
    releaseDate: '2022-11',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'IMX586',
      'Sony Fusion',
      'IMX689',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Macro',
      'HDR',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '72mm',
      sensorSize: '1/3.2"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'optical zoom',
      'portrait',
      '3x',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.2',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'face unlock',
      'Autofocus',
      '4K video',
      'AF',
      'H'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Cinematic mode'
    ],
    imageFeatures: [
    'Monochrome'
    ],
  },

  {
    id: 'oneplus-oneplus-11-1',
    name: 'OnePlus OnePlus 11',
    brand: 'OnePlus',
    releaseDate: '2022-04',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'GW3',
      'GW1',
      'IMX682',
      'GW2'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro',
      'A',
      'A',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.4',
      focalLength: '135mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'continuous optical zoom',
      'HP3',
      '4x',
      'periscope',
      'HP9'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.5',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'Autofocus',
      'video',
      'AF'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Nightography'
    ],
    imageFeatures: [
    'Watermark'
    ],
  },

  {
    id: 'meizu-meizupro-10',
    name: 'Meizu Meizu Pro 10',
    brand: 'Meizu',
    releaseDate: '2024-12',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '24mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'GW2',
      'IMX682',
      'IMX686'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '12mm',
      sensorSize: '1/1.95"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '115掳 FOV',
      '119掳 FOV',
      'AI'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '52mm',
      sensorSize: '1/3.2"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '3x',
      '2x',
      'optical zoom',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'AI',
      'HDR',
      'EIS'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Hasselblad color'
    ],
    imageFeatures: [
    'AI Scene Optimization'
    ],
  },

  {
    id: 'google-pixela-10a-2',
    name: 'Google Pixel A 10 a',
    brand: 'Google',
    releaseDate: '2025-08',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.68',
      focalLength: '23mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'OV50A',
      'OV50H',
      'OV50K',
      'GN1'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.7',
      focalLength: '13mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Autofocus',
      '123掳 FOV',
      '126掳 FOV',
      'Macro Focus'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'telephoto',
      '3x',
      'p'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '52mm',
      sensorSize: '1/4.2"',
      stabilization: 'OIS',
      features: [
      '2x',
      '3x',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.4',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'AF',
      '4K video',
      'HDR'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Cinematic mode'
    ],
    imageFeatures: [
    'Night Mode'
    ],
  },

  {
    id: 'honor-magic-11-1',
    name: 'Honor Magic 11',
    brand: 'Honor',
    releaseDate: '2025-11',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.67"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM3',
      'ISOCELL HM1',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      '122掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '72mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      '3x',
      '2x',
      'P'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '113mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      '5x',
      '2x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.45',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'wide-angle',
      'Autofocus'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'AI Motion'
    ],
    imageFeatures: [
    'XMAGE'
    ],
  },

  {
    id: 'tcl-tcl20-7-2',
    name: 'TCL TCL 20 7',
    brand: 'TCL',
    releaseDate: '2021-06',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM6',
      'ISOCELL HM1',
      'ISOCELL HM2',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      'Macro',
      '123掳 FOV',
      'HDR'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.4',
      focalLength: '60mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      '2x',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'EIS',
      'face unlock',
      'HDR',
      'A',
      'A'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'LOG'
    ],
    imageFeatures: [
    'Food mode'
    ],
  },

  {
    id: 'apple-iphonese-2017se',
    name: 'Apple iPhone SE 2017 SE',
    brand: 'Apple',
    releaseDate: '2023-02',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '24mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'GW3',
      'IMX686',
      'GW1',
      'GW2'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'Cine',
      'Macro',
      'RYYB'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.8',
      focalLength: '73mm',
      sensorSize: '1/2.6"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      '6x',
      '5x',
      'telephoto macro',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Auto focus',
      'Dual Pixel PDAF',
      'HDR'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'HDR10+'
    ],
    imageFeatures: [
    'Portrait Mode'
    ],
  },

  {
    id: 'google-pixelxl-6xl',
    name: 'Google Pixel XL 6 XL',
    brand: 'Google',
    releaseDate: '2021-03',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.63',
      focalLength: '23mm',
      sensorSize: '1/1.22"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'OV50A',
      'OV50H',
      'GNV',
      'IMX890'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/1.95"',
      stabilization: '-',
      features: [
      '126掳 FOV',
      '119掳 FOV',
      '115掳 FOV',
      '114掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2.5x',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '77mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.45',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'EIS',
      'OIS',
      'Auto focus',
      '4K'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'AI video enhancement'
    ],
    imageFeatures: [
    'AI Photo Edit'
    ],
  },

  {
    id: 'xiaomi-xiaomiultra-6',
    name: 'Xiaomi Xiaomi Ultra 6',
    brand: 'Xiaomi',
    releaseDate: '2020-12',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.31"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX586',
      'IMX689',
      'Sony Fusion',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '65mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x',
      '2.5x',
      'p'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/2.2',
      focalLength: '90mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      'HP5',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'ProRes'
    ],
    imageFeatures: [
    'Hasselblad Natural Color'
    ],
  },

  {
    id: 'huawei-pura-8',
    name: 'Huawei Pura 8',
    brand: 'Huawei',
    releaseDate: '2022-10',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.35"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP5',
      'ISOCELL HP2',
      'LYT-808',
      'LYT-818'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      '114掳 FOV',
      'Stills',
      'Super Steady',
      '120掳 FOV',
      'Autofocus'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '3x',
      'telephoto',
      'portrait',
      'p'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '52mm',
      sensorSize: '1/3.5"',
      stabilization: 'OIS',
      features: [
      '3x',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'AF',
      '4K',
      'HDR',
      'OIS'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Leica film style'
    ],
    imageFeatures: [
    'Long exposure'
    ],
  },

  {
    id: 'sony-xperia1-8',
    name: 'Sony Xperia 1 8',
    brand: 'Sony',
    releaseDate: '2022-07',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'GW1',
      'GW3',
      'IMX686',
      'GW2',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      'Autofocus',
      '120掳 FOV',
      '114掳 FOV',
      'Super Steady',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '70mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      'PDAF',
      'portrait',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.4',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H',
      'H',
      'H',
      'H'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Night Sight Video'
    ],
    imageFeatures: [
    'Super Resolution'
    ],
  },

  {
    id: 'lenovo-lenovo-6',
    name: 'Lenovo Lenovo 6',
    brand: 'Lenovo',
    releaseDate: '2020-05',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'GW2',
      'IMX682',
      'IMX686',
      'GW3',
      'G'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro',
      'HDR',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/3.0',
      focalLength: '135mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      '4x',
      '5x',
      'HP5',
      'continuous optical zoom',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.4',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    '8K 30fps HDR'
    ],
    imageFeatures: [
    'AI portrait'
    ],
  },

  {
    id: 'tcl-tcl50-6-1',
    name: 'TCL TCL 50 6',
    brand: 'TCL',
    releaseDate: '2020-11',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'GW1'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'AI',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '80mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'portrait',
      '2x',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'AF',
      'Dynamic photo'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Hasselblad color'
    ],
    imageFeatures: [
    'AI Scene Optimization'
    ],
  },

  {
    id: 'nokia-nokiaxr-8-1',
    name: 'Nokia Nokia XR 8',
    brand: 'Nokia',
    releaseDate: '2022-11',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.5',
      focalLength: '35mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'GN1',
      'GNV'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'AI',
      '120掳 FOV',
      'HDR'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '52mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      '3x',
      'PDAF',
      'Tetraprism'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.45',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Dual Pixel PDAF',
      'AF'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Dolby Vision'
    ],
    imageFeatures: [
    'Hasselblad Natural Color'
    ],
  },

  {
    id: 'motorola-edge-11',
    name: 'Motorola Edge 11',
    brand: 'Motorola',
    releaseDate: '2025-01',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.52"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM6',
      'ISOCELL HM1'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Stills',
      '114掳 FOV',
      'Autofocus',
      '120掳 FOV',
      'Super Steady'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '52mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF',
      'Tetraprism'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '77mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.4',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H',
      'H',
      'H'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Super Steady'
    ],
    imageFeatures: [
    'Document mode'
    ],
  },

  {
    id: 'realme-gtneo-10',
    name: 'Realme GT Neo 10',
    brand: 'Realme',
    releaseDate: '2024-04',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'ISOCELL HP2',
      'ISOCELL HP9',
      'ISOCELL HP5'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/3.2"',
      stabilization: '-',
      features: [
      '118掳 FOV',
      '112掳 FOV',
      '106掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/3.5',
      focalLength: '90mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'periscope',
      '2.5x',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'OIS',
      'Dual Pixel PDAF',
      'AF',
      'HDR',
      '4K 60fps'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'HDR10'
    ],
    imageFeatures: [
    'AI portrait'
    ],
  },

  {
    id: 'asus-zenfonepro-12-1',
    name: 'ASUS ZenFone Pro 12',
    brand: 'ASUS',
    releaseDate: '2026-06',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.88',
      focalLength: '35mm',
      sensorSize: '1/1.35"',
      stabilization: 'OIS',
      features: [
      'GN2',
      'OV50K',
      'LYT-900'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/3.06"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      'Macro',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.4',
      focalLength: '73mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      '5x',
      'HP9',
      '3.5x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'Autofocus',
      'Dual PD',
      'H',
      'H'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'LOG'
    ],
    imageFeatures: [
    'Macro mode'
    ],
  },

  {
    id: 'xiaomi-xiaomipro-10',
    name: 'Xiaomi Xiaomi Pro 10',
    brand: 'Xiaomi',
    releaseDate: '2024-01',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.52"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM3',
      'ISOCELL HM1',
      'ISOCELL HM6',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '17mm',
      sensorSize: '1/3.2"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '106掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '50mm',
      sensorSize: '1/3.2"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '3x',
      'optical zoom',
      'portrait',
      '2'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/3.0',
      focalLength: '85mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      'continuous optical zoom',
      'HP3',
      'telephoto macro',
      'HP9'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'AI',
      'EIS',
      'face unlock',
      'H'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'AI Color Correction'
    ],
    imageFeatures: [
    'Macro mode'
    ],
  },

  {
    id: 'apple-iphonese-2019se',
    name: 'Apple iPhone SE 2019 SE',
    brand: 'Apple',
    releaseDate: '2025-11',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.68',
      focalLength: '35mm',
      sensorSize: '1/1.28"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'OV50K',
      'OV50H',
      'GN1',
      'IMX920'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/2.75"',
      stabilization: '-',
      features: [
      '114掳 FOV',
      '115掳 FOV',
      'AI'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '70mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '2x',
      'PDAF',
      'p',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.2',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      '4K video',
      'HDR',
      'face unlock',
      'A'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'ACES'
    ],
    imageFeatures: [
    'AI Scene Optimization'
    ],
  },

  {
    id: 'huawei-nova-7',
    name: 'Huawei Nova 7',
    brand: 'Huawei',
    releaseDate: '2021-07',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.88',
      focalLength: '35mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'OV50H',
      'IMX989',
      'LYT-818',
      'LYT-901'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'HDR',
      'Macro',
      '123掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '50mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x',
      '3x',
      'o',
      'o'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '1/3.6"',
      stabilization: '-',
      features: [
      'Bokeh Mode',
      'HDR',
      'Center Stage'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'HDR10+'
    ],
    imageFeatures: [
    'Smart HDR'
    ],
  },

  {
    id: 'meizu-meizupro-9-1',
    name: 'Meizu Meizu Pro 9',
    brand: 'Meizu',
    releaseDate: '2023-08',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.35"',
      stabilization: 'OIS',
      features: [
      'IMX906',
      'OV50A',
      'IMX920',
      'GN1',
      'LYT-808'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Macro',
      'AI'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '135mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      '2.5x'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'Dynamic photo',
      'face unlock',
      'AF'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'Hasselblad color'
    ],
    imageFeatures: [
    'AI Enhance'
    ],
  },

  {
    id: 'nokia-nokiaxr-8-2',
    name: 'Nokia Nokia XR 8',
    brand: 'Nokia',
    releaseDate: '2022-08',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX689',
      'IMX586'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/4"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '120掳 FOV',
      '118掳 FOV',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '52mm',
      sensorSize: '1/3.5"',
      stabilization: 'OIS',
      features: [
      '3x',
      'portrait',
      'Tetraprism',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'video',
      'EIS',
      '4K',
      'AF'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'ProRes'
    ],
    imageFeatures: [
    'Leica Vibrant'
    ],
  },

  {
    id: 'asus-zenfone-6',
    name: 'ASUS ZenFone 6',
    brand: 'ASUS',
    releaseDate: '2020-04',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'IMX586',
      'IMX689',
      'Sony Fusion'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Cine',
      'RYYB'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '73mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      '3x',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.2',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f',
      'f',
      'f'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'AI Video'
    ],
    imageFeatures: [
    'Pro mode RAW'
    ],
  },

  {
    id: 'sony-xperia5-12',
    name: 'Sony Xperia 5 12',
    brand: 'Sony',
    releaseDate: '2026-04',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'IMX689',
      'Sony Fusion',
      'IMX586'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'AI',
      'HDR'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '73mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '3x',
      'periscope',
      't'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'EIS',
      'face unlock'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'HDR Vivid'
    ],
    imageFeatures: [
    'Object Eraser'
    ],
  },

  {
    id: 'vivo-xpro-7',
    name: 'vivo X Pro 7',
    brand: 'vivo',
    releaseDate: '2021-11',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'GW2',
      'GW1',
      'IMX682'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Micro',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '73mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'telephoto'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'face unlock',
      'Autofocus'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'HDR10'
    ],
    imageFeatures: [
    'Leica filters'
    ],
  },

  {
    id: 'motorola-thinkphone-12',
    name: 'Motorola ThinkPhone 12',
    brand: 'Motorola',
    releaseDate: '2026-07',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'Sony Fusion',
      'IMX689',
      'IMX586',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Macro',
      'AI',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '80mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '2x',
      'PDAF',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.5',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'AF'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Hybrid Log Gamma'
    ],
    imageFeatures: [
    'Pixel Shift'
    ],
  },

  {
    id: 'samsung-galaxys-7',
    name: 'Samsung Galaxy S+ 7+',
    brand: 'Samsung',
    releaseDate: '2021-02',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'LYT-901',
      'OV50A'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.0',
      focalLength: '18mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV',
      'Cine',
      'R'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '77mm',
      sensorSize: '1/3.52"',
      stabilization: 'OIS',
      features: [
      '2x',
      '3x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H',
      'H',
      'H',
      'H'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'EIS'
    ],
    imageFeatures: [
    'Best Take'
    ],
  },

  {
    id: 'lenovo-lenovo-8-1',
    name: 'Lenovo Lenovo 8',
    brand: 'Lenovo',
    releaseDate: '2022-09',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.52"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM6',
      'ISOCELL HM3'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '114掳 FOV',
      '120掳 FOV',
      'Super Steady',
      '112掳 FOV',
      'Autofocus'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '65mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '2x',
      '5x',
      '2.5x',
      '3.5x'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '72mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '3x',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.4',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AF',
      '4K video',
      'face unlock',
      'Autofocus'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Dolby Vision'
    ],
    imageFeatures: [
    'Astrophotography'
    ],
  },

  {
    id: 'honor-magicultimate-11',
    name: 'Honor Magic Ultimate 11',
    brand: 'Honor',
    releaseDate: '2025-09',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM6',
      'ISOCELL HM1',
      'ISOCELL HM3',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Super Steady',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'wide-angle',
      'AI',
      'EIS'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'HDR Vivid'
    ],
    imageFeatures: [
    'Long exposure'
    ],
  },

  {
    id: 'samsung-galaxyf-12',
    name: 'Samsung Galaxy F 12',
    brand: 'Samsung',
    releaseDate: '2026-07',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.63',
      focalLength: '23mm',
      sensorSize: '1/1.43"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX890',
      'IMX920',
      'OV50H',
      'LYT-900',
      'OV50A'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/3.14"',
      stabilization: '-',
      features: [
      'AI',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '70mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '3x',
      'portrait',
      'telephoto',
      'p',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'Autofocus',
      'OIS',
      'AF'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'ProRes'
    ],
    imageFeatures: [
    'Monochrome'
    ],
  },

  {
    id: 'lg-lgvelvet-9',
    name: 'LG LG Velvet 9',
    brand: 'LG',
    releaseDate: '2023-09',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM6',
      'ISOCELL HM1',
      'ISOCELL HM2',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro Focus',
      '123掳 FOV',
      '126掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'Dual PD',
      'face unlock',
      'H',
      'H'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'ProRes'
    ],
    imageFeatures: [
    'Watermark'
    ],
  },

  {
    id: 'oneplus-oneplusr-9r',
    name: 'OnePlus OnePlus R 9R',
    brand: 'OnePlus',
    releaseDate: '2020-07',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.6',
      focalLength: '24mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'ISOCELL HP5',
      'ISOCELL HP9',
      'OV50H',
      'LYT-818'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '12mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Autofocus',
      '126掳 FOV',
      '123掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/3.5',
      focalLength: '65mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'portrait',
      '5x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'AI',
      'HDR'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Pro mode'
    ],
    imageFeatures: [
    'Watermark'
    ],
  },

  {
    id: 'meizu-meizu-11-1',
    name: 'Meizu Meizu 11',
    brand: 'Meizu',
    releaseDate: '2025-10',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.7',
      focalLength: '24mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'GN2',
      'IMX906',
      'LYT-901',
      'OV50H'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '16mm',
      sensorSize: '1/2.6"',
      stabilization: '-',
      features: [
      '114掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.6',
      focalLength: '100mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      'HP9',
      'HP5',
      'telephoto macro',
      'periscope',
      'HP3'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'AI'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'AI Video'
    ],
    imageFeatures: [
    'Portrait Mode'
    ],
  },

  {
    id: 'vivo-y-8',
    name: 'vivo Y 8',
    brand: 'vivo',
    releaseDate: '2022-01',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'GW1',
      'IMX686',
      'GW2',
      'GW3',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'AI',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '52mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      '2x',
      'optical zoom',
      '3x'
      ],
    },
    telephoto2:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '81mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '3x',
      'telephoto',
      'p',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.4',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f',
      'f',
      'f'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Optical Flow'
    ],
    imageFeatures: [
    'Document mode'
    ],
  },

  {
    id: 'huawei-matepro-7-1',
    name: 'Huawei Mate Pro 7',
    brand: 'Huawei',
    releaseDate: '2021-09',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.52"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM3',
      'ISOCELL HM2',
      'ISOCELL HM1'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/1.95"',
      stabilization: '-',
      features: [
      '114掳 FOV',
      '150掳 FOV',
      'Micro',
      '122掳 FOV',
      '126掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '67mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF',
      '3x',
      '2',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'EIS',
      '4K 60fps',
      '4K',
      'OIS'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'HDR10'
    ],
    imageFeatures: [
    'Night Mode'
    ],
  },

  {
    id: 'sony-xperia1-11',
    name: 'Sony Xperia 1 11',
    brand: 'Sony',
    releaseDate: '2025-09',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.7',
      focalLength: '24mm',
      sensorSize: '1/1.35"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'LYT-818',
      'ISOCELL HP5'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '15mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'HDR',
      '123掳 FOV',
      '120掳 FOV',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.6',
      focalLength: '72mm',
      sensorSize: '1/3.2"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '3x',
      'optical zoom',
      'PDAF'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2.5x',
      '2x',
      'P'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '22mm',
      sensorSize: '1/2.94"',
      stabilization: 'AF',
      features: [
      'Center Stage',
      'Cinematic mode'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Portrait Video'
    ],
    imageFeatures: [
    'Super Resolution'
    ],
  },

  {
    id: 'honor-v-12',
    name: 'Honor V 12',
    brand: 'Honor',
    releaseDate: '2026-01',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'Sony Fusion',
      'IMX586',
      'IMX789'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/1.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro',
      'A',
      'A',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      'periscope',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.45',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'face unlock'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Apple Log'
    ],
    imageFeatures: [
    'Document mode'
    ],
  },

  {
    id: 'zte-axonultra-12',
    name: 'ZTE Axon Ultra 12',
    brand: 'ZTE',
    releaseDate: '2026-01',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'IMX920',
      'GNV',
      'OV50K',
      'IMX890'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '15mm',
      sensorSize: '1/2.5"',
      stabilization: '-',
      features: [
      'Macro',
      '150掳 FOV',
      '128掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '77mm',
      sensorSize: '1/4.2"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '20mm',
      sensorSize: '1/3.1"',
      stabilization: 'Dual PD',
      features: [
      'Autofocus',
      'HDR',
      'Dual PD'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Zeiss Cinematic'
    ],
    imageFeatures: [
    'Magic Editor'
    ],
  },

  {
    id: 'zte-axon-12-1',
    name: 'ZTE Axon 12',
    brand: 'ZTE',
    releaseDate: '2026-06',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'GW1',
      'GW3',
      'IMX686'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '16mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '114掳 FOV',
      'Autofocus',
      'Stills',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.45',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'video',
      'PDAF'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'Leica film style'
    ],
    imageFeatures: [
    'AI Photo Edit'
    ],
  },

  {
    id: 'motorola-thinkphone-6',
    name: 'Motorola ThinkPhone 6',
    brand: 'Motorola',
    releaseDate: '2020-12',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.6',
      focalLength: '24mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP9',
      'LYT-818',
      'OV50H',
      'ISOCELL HP5',
      'IMX989'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/2.4"',
      stabilization: '-',
      features: [
      'Macro',
      'Freeform',
      '150掳 FOV',
      'Micro'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '65mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'Dual PD',
      features: [
      'HDR',
      'Dual PD'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'AI Cinema'
    ],
    imageFeatures: [
    'AI Enhance'
    ],
  },

  {
    id: 'lenovo-legionphone-11-1',
    name: 'Lenovo Legion Phone 11',
    brand: 'Lenovo',
    releaseDate: '2025-03',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP5',
      'ISOCELL HP9',
      'LYT-900'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '16mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Stills',
      '114掳 FOV',
      'Autofocus',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.8',
      focalLength: '135mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'continuous optical zoom',
      '4x',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'EIS',
      'OIS'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Night Sight Video'
    ],
    imageFeatures: [
    'Photo Unblur'
    ],
  },

  {
    id: 'google-pixelpro-5pro',
    name: 'Google Pixel Pro 5 Pro',
    brand: 'Google',
    releaseDate: '2020-06',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.35"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP5',
      'OV50H',
      'LYT-808',
      'OV50K'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'AI',
      'M',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '81mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      '3x',
      'periscope',
      'telephoto',
      'p',
      'p'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '67mm',
      sensorSize: '1/3.5"',
      stabilization: 'OIS',
      features: [
      '2x',
      'Tetraprism'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/2.8"',
      stabilization: 'AF',
      features: [
      'face ID',
      'Dual Capture'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'HDR10'
    ],
    imageFeatures: [
    'Dual Capture'
    ],
  },

  {
    id: 'vivo-x-10',
    name: 'vivo X 10',
    brand: 'vivo',
    releaseDate: '2024-06',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '24mm',
      sensorSize: '1/1.31"',
      stabilization: 'OIS',
      features: [
      'IMX789',
      'Sony Fusion',
      'IMX586',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/1.8"',
      stabilization: '-',
      features: [
      'Macro',
      'AI',
      '1',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/3.0',
      focalLength: '85mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'HP5',
      'HP3',
      'telephoto macro',
      '5x',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'OIS',
      'AF',
      'Dual Pixel PDAF',
      '4K 60fps',
      'Auto focus'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Cine'
    ],
    imageFeatures: [
    'AI Photo Edit'
    ],
  },

  {
    id: 'sony-xperia10-11',
    name: 'Sony Xperia 10 11',
    brand: 'Sony',
    releaseDate: '2025-07',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX789',
      'IMX586'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.3',
      focalLength: '16mm',
      sensorSize: '1/5"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '106掳 FOV',
      '112掳 FOV',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '113mm',
      sensorSize: '1/2.55"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      'periscope',
      'PDAF',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'face unlock',
      'AF'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'AI Color Correction'
    ],
    imageFeatures: [
    'XD Fusion'
    ],
  },

  {
    id: 'huawei-maters-9',
    name: 'Huawei Mate RS 9',
    brand: 'Huawei',
    releaseDate: '2023-07',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM6',
      'ISOCELL HM2',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/2.7"',
      stabilization: '-',
      features: [
      'RYYB',
      'Cine',
      '120掳 FOV',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3.06"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.45',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Dual Pixel PDAF',
      'AF'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Super Steady'
    ],
    imageFeatures: [
    'Zeiss Cinematic'
    ],
  },

  {
    id: 'sony-xperiapro-8-1',
    name: 'Sony Xperia Pro 8',
    brand: 'Sony',
    releaseDate: '2022-03',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '23mm',
      sensorSize: '1/1.31"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'Sony Fusion',
      'IMX586',
      'IMX789',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.3',
      focalLength: '15mm',
      sensorSize: '1/4.4"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '120掳 FOV',
      '106掳 FOV',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/2.51"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'portrait',
      '3x',
      '10x'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.4',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      '4K video',
      'Autofocus',
      'face unlock',
      'A'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Cinematic mode'
    ],
    imageFeatures: [
    'Leica Authentic'
    ],
  },

  {
    id: 'zte-axonultra-6-1',
    name: 'ZTE Axon Ultra 6',
    brand: 'ZTE',
    releaseDate: '2020-05',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP3',
      'ISOCELL HP9',
      'LYT-901',
      'IMX989'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/2.35"',
      stabilization: '-',
      features: [
      'Autofocus',
      '123掳 FOV',
      '120掳 FOV',
      'Macro Focus'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '81mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'telephoto',
      'portrait',
      '3x',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      'Autofocus',
      'HDR',
      'Cinematic mode'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'AI Video'
    ],
    imageFeatures: [
    'Leica Vibrant'
    ],
  },

  {
    id: 'samsung-galaxyf-6',
    name: 'Samsung Galaxy F 6',
    brand: 'Samsung',
    releaseDate: '2020-07',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'GW2',
      'IMX682',
      'GW3',
      'G'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/4"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '106掳 FOV',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/3.0',
      focalLength: '85mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      'telephoto macro'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.2',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      '4K video',
      'AF',
      'Autofocus',
      'f'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Log'
    ],
    imageFeatures: [
    'AI Enhance'
    ],
  },

  {
    id: 'vivo-iqoopro-12',
    name: 'vivo iQOO Pro 12',
    brand: 'vivo',
    releaseDate: '2026-05',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX789',
      'IMX689'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/4"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '118掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '70mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF',
      'portrait',
      '2',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.2',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'AF',
      'face unlock',
      'Autofocus'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'AI Motion'
    ],
    imageFeatures: [
    'Professional Mode'
    ],
  },

  {
    id: 'motorola-edge-12',
    name: 'Motorola Edge+ 12+',
    brand: 'Motorola',
    releaseDate: '2026-08',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'GW3'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '16mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Macro',
      '123掳 FOV',
      'HDR',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.4',
      focalLength: '111mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'HP9',
      'continuous optical zoom',
      'periscope',
      '5x',
      '4x'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '77mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      '3x',
      'optical zoom',
      'portrait',
      'Tetraprism',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.2',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'HDR',
      '4K video',
      'AF'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Portrait Video'
    ],
    imageFeatures: [
    'XD Fusion'
    ],
  },

  {
    id: 'sony-xperiapro-8-2',
    name: 'Sony Xperia Pro 8',
    brand: 'Sony',
    releaseDate: '2022-09',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP5',
      'IMX989'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      'Macro',
      'HDR',
      '123掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '73mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      '3x',
      'periscope',
      'telephoto',
      'p',
      'p'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/2.4',
      focalLength: '135mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'telephoto macro'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.8',
      focalLength: '22mm',
      sensorSize: '1/3.6"',
      stabilization: 'Dual pixel PDAF',
      features: [
      'Center Stage',
      'Bokeh Mode'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'AI Cinema'
    ],
    imageFeatures: [
    'Zeiss optics'
    ],
  },

  {
    id: 'oneplus-oneplusnord-7',
    name: 'OnePlus OnePlus Nord 7',
    brand: 'OnePlus',
    releaseDate: '2024-07',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'GW3',
      'IMX686',
      'IMX682',
      'GW2'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/3.14"',
      stabilization: '-',
      features: [
      'Macro',
      'AI',
      'HDR'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/3.0',
      focalLength: '111mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      '4x',
      '3x'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '67mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      '2x',
      'Tetraprism',
      'PDAF',
      'portrait',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'Autofocus'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Log'
    ],
    imageFeatures: [
    'AI Enhance'
    ],
  },

  {
    id: 'nothing-nothingphone-10-1',
    name: 'Nothing Nothing Phone 10',
    brand: 'Nothing',
    releaseDate: '2024-07',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'LYT-900',
      'LYT-901',
      'LYT-808'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '16mm',
      sensorSize: '1/4.4"',
      stabilization: '-',
      features: [
      '118掳 FOV',
      '112掳 FOV',
      '120掳 FOV',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '52mm',
      sensorSize: '1/3.5"',
      stabilization: 'OIS',
      features: [
      '3x',
      'Tetraprism',
      'PDAF',
      '2x',
      'portrait'
      ],
    },
    telephoto2:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '65mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'telephoto',
      'portrait',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      '4K video',
      'Autofocus',
      'HDR',
      'AF',
      'f'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Vivo V3 chip'
    ],
    imageFeatures: [
    'Macro mode'
    ],
  },

  {
    id: 'realme-gt-8',
    name: 'Realme GT 8',
    brand: 'Realme',
    releaseDate: '2022-01',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM3',
      'ISOCELL HM1'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      '126掳 FOV',
      'Macro Focus',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.4',
      focalLength: '100mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      'HP3',
      'telephoto macro',
      'HP9',
      'continuous optical zoom'
      ],
    },
    telephoto2:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '85mm',
      sensorSize: '1/1.95"',
      stabilization: 'OIS',
      features: [
      '10x',
      'telephoto macro'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'Dual PD',
      features: [
      'HDR',
      'Autofocus'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Leica film style'
    ],
    imageFeatures: [
    'Macro mode'
    ],
  },

  {
    id: 'lg-lgwing-12-1',
    name: 'LG LG Wing 12',
    brand: 'LG',
    releaseDate: '2026-06',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'IMX689',
      'Sony Fusion'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'HDR',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '67mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '3x',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Dual Pixel',
      'face unlock'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'AI Video'
    ],
    imageFeatures: [
    'Pixel Shift'
    ],
  },

  {
    id: 'apple-iphonepromax-2020promax',
    name: 'Apple iPhone Pro Max 2020 Pro Max',
    brand: 'Apple',
    releaseDate: '2022-02',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.3"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX789',
      'IMX689',
      'Sony Fusion',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.3',
      focalLength: '14mm',
      sensorSize: '1/4.4"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '118掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '77mm',
      sensorSize: '1/4"',
      stabilization: 'OIS',
      features: [
      '3x',
      '2x',
      'PDAF',
      'o'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      '4K',
      'Autofocus',
      'OIS',
      'EIS',
      'AF'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'AI Cinema'
    ],
    imageFeatures: [
    'Live Photo'
    ],
  },

  {
    id: 'nokia-nokiaxr-11',
    name: 'Nokia Nokia XR 11',
    brand: 'Nokia',
    releaseDate: '2025-01',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'LYT-818',
      'OV50A'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '12mm',
      sensorSize: '1/2.35"',
      stabilization: '-',
      features: [
      'Macro Focus',
      '123掳 FOV',
      'Autofocus',
      '126掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '50mm',
      sensorSize: '1/4"',
      stabilization: 'OIS',
      features: [
      '3x',
      'PDAF',
      'optical zoom',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.5',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'Dynamic photo',
      'HDR',
      'AF',
      'f'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Super Steady'
    ],
    imageFeatures: [
    'ProRAW'
    ],
  },

  {
    id: 'asus-rogphone-10-2',
    name: 'ASUS ROG Phone 10',
    brand: 'ASUS',
    releaseDate: '2024-03',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.52"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM6',
      'ISOCELL HM3',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.7',
      focalLength: '13mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Autofocus',
      '126掳 FOV',
      'Macro Focus',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.2',
      focalLength: '70mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      '3x',
      'periscope',
      '3.5x',
      'HP5'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.5',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      '4K',
      'video',
      'Autofocus'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'AI Motion'
    ],
    imageFeatures: [
    'Object Eraser'
    ],
  },

  {
    id: 'samsung-galaxyzfold-6',
    name: 'Samsung Galaxy Z Fold 6',
    brand: 'Samsung',
    releaseDate: '2020-04',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.67"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM6',
      'ISOCELL HM3',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '17mm',
      sensorSize: '1/5"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '112掳 FOV',
      '118掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/3.0',
      focalLength: '100mm',
      sensorSize: '1/2.6"',
      stabilization: 'OIS',
      features: [
      'telephoto macro',
      '4x',
      '3.5x',
      'portrait',
      '5x'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '52mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      '2x',
      'PDAF',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.45',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'face unlock',
      'Autofocus',
      'PDAF',
      'EIS'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'LOG'
    ],
    imageFeatures: [
    'Astrophotography'
    ],
  },

  {
    id: 'xiaomi-redminote-9',
    name: 'Xiaomi Redmi Note 9',
    brand: 'Xiaomi',
    releaseDate: '2023-02',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP9',
      'IMX989',
      'LYT-901'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'RYYB',
      'Cine',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '77mm',
      sensorSize: '1/3.2"',
      stabilization: 'OIS',
      features: [
      '3x',
      'optical zoom',
      'portrait',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'face unlock'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    '6K 30fps'
    ],
    imageFeatures: [
    'Leica Authentic'
    ],
  },

  {
    id: 'vivo-iqoo-10',
    name: 'vivo iQOO 10',
    brand: 'vivo',
    releaseDate: '2024-03',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.4',
      focalLength: '23mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'LYT-808',
      'LYT-900',
      'ISOCELL HP9',
      'LYT-818'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Autofocus',
      '114掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '67mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '22mm',
      sensorSize: '1/3.6"',
      stabilization: '-',
      features: [
      'Dual Capture',
      'PDAF',
      'HDR',
      'Bokeh Mode'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'LOG'
    ],
    imageFeatures: [
    'Live Photo'
    ],
  },

  {
    id: 'realme-gtneo-6',
    name: 'Realme GT Neo 6',
    brand: 'Realme',
    releaseDate: '2020-07',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.7',
      focalLength: '23mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP2',
      'IMX989',
      'ISOCELL HP5',
      'ISOCELL HP3',
      'LYT-901'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '17mm',
      sensorSize: '1/4"',
      stabilization: '-',
      features: [
      '106掳 FOV',
      '118掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'telephoto',
      'periscope',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'face unlock',
      '4K video',
      'HDR',
      'AF'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Hasselblad color'
    ],
    imageFeatures: [
    'Smart HDR'
    ],
  },

  {
    id: 'oppo-findx-8',
    name: 'OPPO Find X 8',
    brand: 'OPPO',
    releaseDate: '2022-07',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.67"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM6',
      'ISOCELL HM2',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      'Freeform',
      '119掳 FOV',
      '122掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '52mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2x',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f',
      'f',
      'f'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'OIS+EIS'
    ],
    imageFeatures: [
    'XD Fusion'
    ],
  },

  {
    id: 'nothing-nothingphone-6-1',
    name: 'Nothing Nothing Phone 6',
    brand: 'Nothing',
    releaseDate: '2020-08',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'LYT-818',
      'LYT-900'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '14mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      'Macro Focus',
      '120掳 FOV',
      '126掳 FOV',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '67mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '3x',
      'Tetraprism'
      ],
    },
    telephoto2:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '85mm',
      sensorSize: '1/2.6"',
      stabilization: 'OIS',
      features: [
      '10x',
      '3.5x',
      '2x',
      'telephoto macro',
      '6x'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'wide-angle',
      'HDR'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'ProRes RAW'
    ],
    imageFeatures: [
    'AI Photo Edit'
    ],
  },

  {
    id: 'oneplus-oneplusr-11r',
    name: 'OnePlus OnePlus R 11R',
    brand: 'OnePlus',
    releaseDate: '2022-07',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.75',
      focalLength: '35mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'LYT-901',
      'IMX920'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'Macro',
      'AI',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.4',
      focalLength: '65mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '3.5x',
      '2.5x',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f',
      'f',
      'f'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'HDR10'
    ],
    imageFeatures: [
    'AI Photo Edit'
    ],
  },

  {
    id: 'nokia-nokiaxr-7',
    name: 'Nokia Nokia XR 7',
    brand: 'Nokia',
    releaseDate: '2021-07',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'IMX586',
      'IMX689',
      'IMX789',
      'S'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '13mm',
      sensorSize: '1/2.75"',
      stabilization: '-',
      features: [
      '150掳 FOV',
      '128掳 FOV',
      '122掳 FOV',
      'Micro'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.4',
      focalLength: '111mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      'telephoto macro',
      'HP3',
      '5x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'EIS',
      'AI',
      'H'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'HDR Vivid'
    ],
    imageFeatures: [
    'Dual Capture'
    ],
  },

  {
    id: 'google-pixela-10a-3',
    name: 'Google Pixel A 10 a',
    brand: 'Google',
    releaseDate: '2025-05',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '23mm',
      sensorSize: '1/1.35"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP2',
      'IMX989',
      'LYT-808',
      'ISOCELL HP9',
      'LYT-900'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/3.06"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      'HDR',
      'Macro',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      'portrait',
      'PDAF'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/3.5',
      focalLength: '113mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      'periscope',
      '5x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Night Sight Video'
    ],
    imageFeatures: [
    'AI beauty'
    ],
  },

  {
    id: 'vivo-x-12',
    name: 'vivo X 12',
    brand: 'vivo',
    releaseDate: '2026-03',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'Sony Fusion',
      'IMX689',
      'IMX789',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Autofocus',
      'Super Steady'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '73mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'periscope'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '72mm',
      sensorSize: '1/3.2"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF',
      'portrait',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.45',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'Dual Pixel PDAF',
      '4K 60fps'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'ACES'
    ],
    imageFeatures: [
    'AI Photo Edit'
    ],
  },

  {
    id: 'samsung-galaxyf-8',
    name: 'Samsung Galaxy F 8',
    brand: 'Samsung',
    releaseDate: '2022-03',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'GW3',
      'GW2',
      'GW1',
      'IMX686',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '120掳 FOV',
      '122掳 FOV',
      'Micro',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '80mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Dynamic photo',
      'HDR',
      'face unlock'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'HDR10+'
    ],
    imageFeatures: [
    'AI Scene Optimization'
    ],
  },

  {
    id: 'nokia-nokiax-10-1',
    name: 'Nokia Nokia X 10',
    brand: 'Nokia',
    releaseDate: '2024-01',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'IMX586',
      'IMX689',
      'IMX789'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '122掳 FOV',
      'Micro',
      'Macro',
      '112掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '77mm',
      sensorSize: '1/3.06"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'PDAF',
      '3x'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.4',
      focalLength: '135mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'wide-angle',
      'PDAF',
      'AI'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Zeiss Cinematic'
    ],
    imageFeatures: [
    'Live Photo'
    ],
  },

  {
    id: 'apple-iphonepromax-2023promax',
    name: 'Apple iPhone Pro Max 2023 Pro Max',
    brand: 'Apple',
    releaseDate: '2025-06',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM6',
      'ISOCELL HM3',
      'ISOCELL HM2',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      'Macro',
      '122掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '50mm',
      sensorSize: '1/3.52"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x',
      '3x',
      'portrait',
      'o'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '26mm',
      sensorSize: '1/2.94"',
      stabilization: 'Dual pixel PDAF',
      features: [
      'Center Stage',
      'Dolby Vision',
      'Autofocus'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Hybrid Log Gamma'
    ],
    imageFeatures: [
    'HDR+'
    ],
  },

  {
    id: 'lenovo-legionphone-7',
    name: 'Lenovo Legion Phone 7',
    brand: 'Lenovo',
    releaseDate: '2021-02',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM1',
      'ISOCELL HM6',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3.2"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '118掳 FOV',
      '112掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '65mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'periscope',
      '6x',
      '3x',
      'PDAF',
      '4x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.2',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'HDR10+'
    ],
    imageFeatures: [
    'Zeiss optics'
    ],
  },

  {
    id: 'sony-xperia10-9',
    name: 'Sony Xperia 10 9',
    brand: 'Sony',
    releaseDate: '2023-01',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM3',
      'ISOCELL HM6'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '17mm',
      sensorSize: '1/4"',
      stabilization: '-',
      features: [
      '106掳 FOV',
      '118掳 FOV',
      '112掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '3x',
      'telephoto',
      'periscope',
      'p',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.45',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Dual Pixel',
      'face unlock',
      'EIS',
      'AF'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'Slow Motion'
    ],
    imageFeatures: [
    'AI Enhance'
    ],
  },

  {
    id: 'nokia-nokiax-8',
    name: 'Nokia Nokia X 8',
    brand: 'Nokia',
    releaseDate: '2022-04',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM6',
      'ISOCELL HM3',
      'ISOCELL HM1',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Macro',
      'AI'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      '2x',
      'PDAF',
      '3'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.5',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'PDAF',
      'Dual Pixel',
      'Autofocus'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'LOG'
    ],
    imageFeatures: [
    'Macro mode'
    ],
  },

  {
    id: 'realme-gtpro-10',
    name: 'Realme GT Pro 10',
    brand: 'Realme',
    releaseDate: '2024-09',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM3',
      'ISOCELL HM6',
      'ISOCELL HM1'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/4"',
      stabilization: '-',
      features: [
      '118掳 FOV',
      '112掳 FOV',
      '106掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '52mm',
      sensorSize: '1/4"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.5',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'video',
      'Dual Pixel'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'AI Color Correction'
    ],
    imageFeatures: [
    'XMAGE'
    ],
  },

  {
    id: 'xiaomi-pocox-10',
    name: 'Xiaomi POCO X 10',
    brand: 'Xiaomi',
    releaseDate: '2024-11',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '23mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'LYT-818',
      'OV50H'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.3',
      focalLength: '14mm',
      sensorSize: '1/4.4"',
      stabilization: '-',
      features: [
      '106掳 FOV',
      '120掳 FOV',
      '118掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.8',
      focalLength: '135mm',
      sensorSize: '1/2.6"',
      stabilization: 'OIS',
      features: [
      '10x',
      '2x',
      '3.5x',
      '4x'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.6',
      focalLength: '67mm',
      sensorSize: '1/3.52"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'face unlock',
      'HDR',
      'AI'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Hybrid Log Gamma'
    ],
    imageFeatures: [
    'Smart HDR'
    ],
  },

  {
    id: 'sony-xperia1-12',
    name: 'Sony Xperia 1 12',
    brand: 'Sony',
    releaseDate: '2026-03',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'LYT-901',
      'ISOCELL HP9',
      'IMX989',
      'ISOCELL HP3'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/1.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'AI'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '67mm',
      sensorSize: '1/3.52"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'optical zoom',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'HDR',
      'AI'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'OIS+EIS'
    ],
    imageFeatures: [
    'HDR+'
    ],
  },

  {
    id: 'honor-v-9',
    name: 'Honor V 9',
    brand: 'Honor',
    releaseDate: '2023-10',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '23mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'OV50H',
      'LYT-900',
      'LYT-808',
      'IMX989',
      'ISOCELL HP2'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV',
      'A',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '60mm',
      sensorSize: '1/2.55"',
      stabilization: 'OIS',
      features: [
      '2x',
      '3.5x',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      '4K video',
      'HDR'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    '8K 30fps HDR'
    ],
    imageFeatures: [
    'Pixel Shift'
    ],
  },

  {
    id: 'zte-axon-8',
    name: 'ZTE Axon 8',
    brand: 'ZTE',
    releaseDate: '2022-04',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.43"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'LYT-808',
      'GNV',
      'GN1',
      'LYT-901',
      'IMX920'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/1.8"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV',
      'A',
      'A',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '52mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      '2x',
      'Tetraprism',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AF',
      'face unlock',
      'Autofocus'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Zeiss T*'
    ],
    imageFeatures: [
    'Long exposure'
    ],
  },

  {
    id: 'tcl-tcl40-6',
    name: 'TCL TCL 40 6',
    brand: 'TCL',
    releaseDate: '2020-02',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM1',
      'ISOCELL HM6'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '17mm',
      sensorSize: '1/4.4"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '120掳 FOV',
      '106掳 FOV',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '90mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'periscope',
      '5x',
      'portrait'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '5x',
      '2x',
      'portrait',
      '3.5x',
      '2.5x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.2',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H',
      'H'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Nightography'
    ],
    imageFeatures: [
    'Leica filters'
    ],
  },

  {
    id: 'sony-xperia1-7',
    name: 'Sony Xperia 1 7',
    brand: 'Sony',
    releaseDate: '2021-05',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '24mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'GW3',
      'IMX682',
      'IMX686'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '12mm',
      sensorSize: '1/2.5"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      'Autofocus',
      '126掳 FOV',
      'Macro Focus'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/3.0',
      focalLength: '90mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'HP3',
      '3x',
      '5x',
      'continuous optical zoom'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '77mm',
      sensorSize: '1/3.5"',
      stabilization: 'OIS',
      features: [
      '3x',
      'Tetraprism',
      'optical zoom',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.45',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'Dual Pixel',
      'HDR',
      'face unlock'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    '8K 30fps HDR'
    ],
    imageFeatures: [
    'Best Take'
    ],
  },

  {
    id: 'oneplus-onepluspro-9pro',
    name: 'OnePlus OnePlus Pro 9 Pro',
    brand: 'OnePlus',
    releaseDate: '2020-02',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.88',
      focalLength: '23mm',
      sensorSize: '1/1.35"',
      stabilization: 'OIS',
      features: [
      'LYT-818',
      'OV50K',
      'GN2'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'telephoto',
      'portrait',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f',
      'f'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Hasselblad color'
    ],
    imageFeatures: [
    'Time-lapse'
    ],
  },

  {
    id: 'huawei-matepro-8',
    name: 'Huawei Mate Pro 8',
    brand: 'Huawei',
    releaseDate: '2022-05',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'LYT-808',
      'LYT-900',
      'OV50K',
      'IMX906',
      'GNV'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV',
      'A',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.6',
      focalLength: '60mm',
      sensorSize: '1/2.55"',
      stabilization: 'OIS',
      features: [
      'periscope',
      '3.5x',
      'portrait',
      '2x',
      '3x'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.8',
      focalLength: '60mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      '2x',
      '3.5x',
      'PDAF',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Optical Flow'
    ],
    imageFeatures: [
    'Pixel Shift'
    ],
  },

  {
    id: 'motorola-edgepro-12',
    name: 'Motorola Edge Pro 12',
    brand: 'Motorola',
    releaseDate: '2026-07',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '23mm',
      sensorSize: '1/1.31"',
      stabilization: 'OIS',
      features: [
      'IMX789',
      'Sony Fusion',
      'IMX586',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'AI',
      'Macro',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '67mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AF',
      'PDAF',
      '4K'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'OIS+EIS'
    ],
    imageFeatures: [
    'Pro mode RAW'
    ],
  },

  {
    id: 'nothing-nothingphone-7-1',
    name: 'Nothing Nothing Phone+ 7+',
    brand: 'Nothing',
    releaseDate: '2021-01',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX789',
      'IMX586'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '16mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '120掳 FOV',
      'Autofocus',
      'Super Steady',
      '114掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '65mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      '5x',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AI',
      'HDR',
      'EIS'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'EIS'
    ],
    imageFeatures: [
    'AI Remove'
    ],
  },

  {
    id: 'nothing-nothingphone-11-1',
    name: 'Nothing Nothing Phone 11',
    brand: 'Nothing',
    releaseDate: '2025-05',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.68',
      focalLength: '24mm',
      sensorSize: '1/1.43"',
      stabilization: 'OIS',
      features: [
      'IMX906',
      'GNV',
      'IMX989',
      'LYT-818'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2.6"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      'Super Steady',
      '114掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '65mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      '3x',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.45',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'EIS',
      'wide-angle'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'ProRes RAW'
    ],
    imageFeatures: [
    'AI portrait'
    ],
  },

  {
    id: 'oneplus-oneplusace-4',
    name: 'OnePlus OnePlus Ace 4',
    brand: 'OnePlus',
    releaseDate: '2024-09',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.88',
      focalLength: '24mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'GNV',
      'IMX890'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '122掳 FOV',
      'Micro'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '70mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '2x',
      'portrait',
      'P',
      'P'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      '4K 60fps',
      'EIS',
      '4K'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    '6K 30fps'
    ],
    imageFeatures: [
    'AI Enhance'
    ],
  },

  {
    id: 'sony-xperiapro-8-3',
    name: 'Sony Xperia Pro 8',
    brand: 'Sony',
    releaseDate: '2022-04',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.67"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM3',
      'ISOCELL HM6',
      'ISOCELL HM1',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'HDR',
      '123掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '52mm',
      sensorSize: '1/4.2"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'optical zoom'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '67mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      '2x',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Optical Flow'
    ],
    imageFeatures: [
    'Watermark'
    ],
  },

  {
    id: 'lenovo-lenovo-12-2',
    name: 'Lenovo Lenovo 12',
    brand: 'Lenovo',
    releaseDate: '2026-04',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.7',
      focalLength: '24mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'LYT-901',
      'GN2',
      'IMX890'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Macro',
      'HDR'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/3.5',
      focalLength: '85mm',
      sensorSize: '1/1.95"',
      stabilization: 'OIS',
      features: [
      '3x',
      'PDAF',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'PDAF',
      '4K'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Cinematic mode'
    ],
    imageFeatures: [
    'Document mode'
    ],
  },

  {
    id: 'nothing-nothingphone-7-2',
    name: 'Nothing Nothing Phone 7',
    brand: 'Nothing',
    releaseDate: '2021-03',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.52"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM6',
      'ISOCELL HM3',
      'ISOCELL HM2'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Macro',
      'HDR',
      '123掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '230mm',
      sensorSize: '1/2.52"',
      stabilization: 'OIS',
      features: [
      '6x',
      '2.5x',
      '4x',
      '5x'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      'portrait',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H',
      'H',
      'H',
      'H'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Slow Motion'
    ],
    imageFeatures: [
    'Pro mode RAW'
    ],
  },

  {
    id: 'xiaomi-xiaomiultra-12',
    name: 'Xiaomi Xiaomi Ultra 12',
    brand: 'Xiaomi',
    releaseDate: '2026-01',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.95',
      focalLength: '24mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'IMX890',
      'LYT-900',
      'LYT-818',
      'LYT-808'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.7',
      focalLength: '12mm',
      sensorSize: '1/2.55"',
      stabilization: 'Quad PD',
      features: [
      '126掳 FOV',
      '123掳 FOV',
      'Autofocus',
      '120掳 FOV',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '70mm',
      sensorSize: '1/2.51"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      '4x',
      'telephoto macro',
      '2.5x',
      '3x'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '50mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      'PDAF',
      '2x',
      'p',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      '4K',
      'PDAF'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Super Resolution'
    ],
    imageFeatures: [
    'AI beauty'
    ],
  },

  {
    id: 'lenovo-lenovo-6-1',
    name: 'Lenovo Lenovo 6',
    brand: 'Lenovo',
    releaseDate: '2020-04',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM6'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '15mm',
      sensorSize: '1/3.06"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      'Macro',
      'HDR',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '73mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'telephoto',
      'portrait',
      '3x',
      'p'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.6',
      focalLength: '77mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      '3x',
      '2x',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'PDAF'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Apple Log'
    ],
    imageFeatures: [
    'Hasselblad Natural Color'
    ],
  },

  {
    id: 'motorola-razr-9',
    name: 'Motorola Razr 9',
    brand: 'Motorola',
    releaseDate: '2023-08',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '24mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'IMX689',
      'IMX586',
      'Sony Fusion',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '15mm',
      sensorSize: '1/5"',
      stabilization: '-',
      features: [
      '118掳 FOV',
      '120掳 FOV',
      '106掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '90mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '5x',
      '4x',
      '2x',
      '3x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.8',
      focalLength: '26mm',
      sensorSize: '1/2.8"',
      stabilization: 'Sensor-shift',
      features: [
      'Autofocus',
      'HDR',
      'Center Stage'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Hasselblad color'
    ],
    imageFeatures: [
    'Dual Capture'
    ],
  },

  {
    id: 'huawei-maters-8',
    name: 'Huawei Mate RS 8',
    brand: 'Huawei',
    releaseDate: '2022-04',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.4',
      focalLength: '35mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'OV50H',
      'IMX890',
      'IMX989',
      'OV50A',
      'LYT-901'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Super Steady',
      'Autofocus',
      'Stills',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '50mm',
      sensorSize: '1/4"',
      stabilization: 'OIS',
      features: [
      '3x',
      'PDAF'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '65mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      'PDAF',
      'portrait',
      '2',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.4',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f',
      'f'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'ACES'
    ],
    imageFeatures: [
    'Leica filters'
    ],
  },

  {
    id: 'oppo-findx-11-1',
    name: 'OPPO Find X 11',
    brand: 'OPPO',
    releaseDate: '2025-08',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.68',
      focalLength: '35mm',
      sensorSize: '1/1.22"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'LYT-901',
      'LYT-808',
      'OV50A',
      'GN2',
      'GNV'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '13mm',
      sensorSize: '1/2.5"',
      stabilization: '-',
      features: [
      'Freeform',
      '128掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '67mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '3x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.2',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'HDR'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'AI Video'
    ],
    imageFeatures: [
    'Hasselblad Natural Color'
    ],
  },

  {
    id: 'apple-iphonese-2019se-1',
    name: 'Apple iPhone SE 2019 SE',
    brand: 'Apple',
    releaseDate: '2025-06',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '23mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'GW3',
      'IMX682',
      'GW1',
      'IMX686',
      'G'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      '122掳 FOV',
      '120掳 FOV',
      'Micro'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '52mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '77mm',
      sensorSize: '1/3.06"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.4',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Cinematic mode'
    ],
    imageFeatures: [
    'Magic Eraser'
    ],
  },

  {
    id: 'oneplus-oneplus-14',
    name: 'OnePlus OnePlus 14',
    brand: 'OnePlus',
    releaseDate: '2025-10',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.7',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'LYT-808',
      'ISOCELL HP9',
      'LYT-818',
      'ISOCELL HP5'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/1.8',
      focalLength: '18mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '52mm',
      sensorSize: '1/3.06"',
      stabilization: 'OIS',
      features: [
      '3x',
      'portrait',
      'Tetraprism',
      'optical zoom',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'EIS',
      'OIS',
      '4K',
      'HDR',
      'AF'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Zeiss Cinematic'
    ],
    imageFeatures: [
    'AI beauty'
    ],
  },

  {
    id: 'meizu-meizu-8',
    name: 'Meizu Meizu 8',
    brand: 'Meizu',
    releaseDate: '2022-07',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.52"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM6'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '52mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      '3x',
      'optical zoom',
      'portrait',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'face unlock',
      'PDAF',
      'wide-angle',
      'EIS'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Leica film style'
    ],
    imageFeatures: [
    'Smart HDR'
    ],
  },

  {
    id: 'apple-iphoneplus-2023plus',
    name: 'Apple iPhone Plus 2023 Plus',
    brand: 'Apple',
    releaseDate: '2025-03',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'Sony Fusion',
      'IMX586',
      'IMX789'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      'HDR',
      '120掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '72mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'optical zoom',
      '2x',
      '3',
      '3'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.45',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      '4K video',
      'Autofocus',
      'AF',
      'HDR'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Night Sight Video'
    ],
    imageFeatures: [
    'Magic Editor'
    ],
  },

  {
    id: 'nothing-nothingphone-8-1',
    name: 'Nothing Nothing Phone+ 8+',
    brand: 'Nothing',
    releaseDate: '2022-10',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'IMX682',
      'GW1',
      'GW2',
      'IMX686',
      'G'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'RYYB',
      'Macro',
      'Cine'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '73mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'telephoto',
      '3x',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      'HDR',
      'face unlock',
      'Dual PD'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    '6K 30fps'
    ],
    imageFeatures: [
    'Magic Editor'
    ],
  },

  {
    id: 'google-pixel-10-1',
    name: 'Google Pixel 10',
    brand: 'Google',
    releaseDate: '2025-07',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM3',
      'ISOCELL HM1'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '122掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'portrait',
      '2x',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.8',
      focalLength: '22mm',
      sensorSize: '1/2.94"',
      stabilization: 'Dual pixel PDAF',
      features: [
      'Center Stage',
      'Cinematic mode',
      'Bokeh Mode'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'AI Cinema'
    ],
    imageFeatures: [
    'Document mode'
    ],
  },

  {
    id: 'vivo-x-11-2',
    name: 'vivo X 11',
    brand: 'vivo',
    releaseDate: '2025-04',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '24mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'LYT-818',
      'OV50K',
      'ISOCELL HP2',
      'LYT-901',
      'ISOCELL HP9'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'HDR',
      'AI',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '70mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'PDAF',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'PDAF',
      'face unlock',
      'EIS',
      'video'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'Cinematic mode'
    ],
    imageFeatures: [
    'AI Remove'
    ],
  },

  {
    id: 'motorola-edgepro-11-1',
    name: 'Motorola Edge Pro 11',
    brand: 'Motorola',
    releaseDate: '2025-12',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'LYT-818',
      'ISOCELL HP9',
      'ISOCELL HP3'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.3',
      focalLength: '17mm',
      sensorSize: '1/3.2"',
      stabilization: '-',
      features: [
      '106掳 FOV',
      '118掳 FOV',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      'portrait',
      '2x',
      'P',
      'P'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'OIS',
      'Autofocus',
      '4K 60fps'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'LOG'
    ],
    imageFeatures: [
    'AI Scene Optimization'
    ],
  },

  {
    id: 'google-pixela-8a',
    name: 'Google Pixel A 8 a',
    brand: 'Google',
    releaseDate: '2023-08',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.31"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX689',
      'IMX789',
      'Sony Fusion',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Macro',
      'AI',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/4.0',
      focalLength: '111mm',
      sensorSize: '1/2.51"',
      stabilization: 'OIS',
      features: [
      '10x',
      '4x'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3.52"',
      stabilization: 'OIS',
      features: [
      '3x',
      'portrait',
      'optical zoom',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'EIS',
      'AI',
      'HDR',
      'f'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Optical Flow'
    ],
    imageFeatures: [
    'HDR+'
    ],
  },

  {
    id: 'huawei-nova-9',
    name: 'Huawei Nova 9',
    brand: 'Huawei',
    releaseDate: '2023-11',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM3',
      'ISOCELL HM1',
      'ISOCELL HM6'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/4"',
      stabilization: '-',
      features: [
      '118掳 FOV',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '113mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      '3x',
      'portrait',
      '5x'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'wide-angle',
      'PDAF'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'HDR Vivid'
    ],
    imageFeatures: [
    'Photo Unblur'
    ],
  },

  {
    id: 'motorola-gpower-12',
    name: 'Motorola G Power 12',
    brand: 'Motorola',
    releaseDate: '2026-06',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'GW2',
      'GW1',
      'GW3'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      'Micro',
      'Macro',
      '122掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x',
      '2.5x'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      '4K video',
      'HDR',
      'face unlock'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Leica film style'
    ],
    imageFeatures: [
    'AI portrait'
    ],
  },

  {
    id: 'lenovo-lenovo-12-3',
    name: 'Lenovo Lenovo 12',
    brand: 'Lenovo',
    releaseDate: '2026-07',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.95',
      focalLength: '23mm',
      sensorSize: '1/1.35"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'LYT-808',
      'OV50K',
      'IMX906',
      'GN1'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '15mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Macro',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '65mm',
      sensorSize: '1/2.55"',
      stabilization: 'OIS',
      features: [
      '3x',
      'periscope',
      '3.5x',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'face ID',
      'HDR'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Optical Flow'
    ],
    imageFeatures: [
    'Leica Authentic'
    ],
  },

  {
    id: 'asus-rogphone-6',
    name: 'ASUS ROG Phone 6',
    brand: 'ASUS',
    releaseDate: '2020-11',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.52"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM6',
      'ISOCELL HM1',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      '2x',
      'portrait',
      '2.5x',
      'P',
      'P'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '113mm',
      sensorSize: '1/2.55"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Dual PD',
      'HDR',
      'face unlock',
      'A',
      'A'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'AI Cinema'
    ],
    imageFeatures: [
    'Portrait Mode'
    ],
  },

  {
    id: 'honor-honor-7-1',
    name: 'Honor HONOR 7',
    brand: 'Honor',
    releaseDate: '2021-02',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '24mm',
      sensorSize: '1/1.28"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX789',
      'IMX689',
      'Sony Fusion',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      'Super Steady',
      'Stills'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '72mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.5',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'face unlock',
      'HDR',
      'AF',
      'D'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Hasselblad color'
    ],
    imageFeatures: [
    'Leica Authentic'
    ],
  },

  {
    id: 'huawei-pura-10',
    name: 'Huawei Pura 10',
    brand: 'Huawei',
    releaseDate: '2024-01',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.68',
      focalLength: '23mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'OV50A',
      'OV50H',
      'LYT-808'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/2.5"',
      stabilization: 'Quad PD',
      features: [
      '123掳 FOV',
      '120掳 FOV',
      '126掳 FOV',
      'Macro Focus'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'periscope',
      '3.5x',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.4',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'Autofocus',
      'AF'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'HDR Vivid'
    ],
    imageFeatures: [
    'Dual Capture'
    ],
  },

  {
    id: 'honor-magic-9',
    name: 'Honor Magic 9',
    brand: 'Honor',
    releaseDate: '2023-05',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.75',
      focalLength: '24mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'LYT-900',
      'IMX906'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.7',
      focalLength: '12mm',
      sensorSize: '1/2.35"',
      stabilization: '-',
      features: [
      '126掳 FOV',
      '123掳 FOV',
      '120掳 FOV',
      'Macro Focus',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '72mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x',
      '3x',
      'optical zoom',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'EIS',
      'HDR',
      'A'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Super Steady'
    ],
    imageFeatures: [
    'Leica Authentic'
    ],
  },

  {
    id: 'nokia-nokiaxr-6-1',
    name: 'Nokia Nokia XR 6',
    brand: 'Nokia',
    releaseDate: '2020-07',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'GW2',
      'GW3',
      'IMX686',
      'IMX682'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.6',
      focalLength: '113mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '5x',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'EIS',
      'Dual Pixel PDAF',
      'AF',
      '4K 60fps'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'Hasselblad color'
    ],
    imageFeatures: [
    'AI Scene Optimization'
    ],
  },

  {
    id: 'nothing-nothingphone-6-2',
    name: 'Nothing Nothing Phone+ 6+',
    brand: 'Nothing',
    releaseDate: '2020-09',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.75',
      focalLength: '24mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'IMX890',
      'OV50H'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Micro',
      '122掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/3.0',
      focalLength: '100mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      '3x',
      '3.5x',
      '5x',
      'HP5',
      'HP3'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '65mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2x',
      'PDAF',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.9',
      focalLength: '20mm',
      sensorSize: '1/2.94"',
      stabilization: 'AF',
      features: [
      'PDAF',
      'Cinematic mode',
      'Bokeh Mode',
      'HDR'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'AI Video'
    ],
    imageFeatures: [
    'AI Remove'
    ],
  },

  {
    id: 'nokia-nokiaxr-11-1',
    name: 'Nokia Nokia XR 11',
    brand: 'Nokia',
    releaseDate: '2025-02',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'IMX682',
      'GW3'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      '126掳 FOV',
      '123掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.6',
      focalLength: '111mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      '4x',
      'HP9'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.45',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      '4K',
      'AF',
      'Autofocus',
      'EIS'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Cine'
    ],
    imageFeatures: [
    'Super Resolution'
    ],
  },

  {
    id: 'huawei-novapro-10',
    name: 'Huawei Nova Pro 10',
    brand: 'Huawei',
    releaseDate: '2024-04',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.7',
      focalLength: '23mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'LYT-808',
      'OV50H',
      'ISOCELL HP5',
      'ISOCELL HP3',
      'LYT-818'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '14mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      '115掳 FOV',
      '120掳 FOV',
      '122掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '65mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '20mm',
      sensorSize: '1/3.1"',
      stabilization: 'Dual PD',
      features: [
      'HDR',
      'Dual PD',
      'Autofocus',
      'f',
      'f'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Gyro-EIS'
    ],
    imageFeatures: [
    'XMAGE'
    ],
  },

  {
    id: 'huawei-purapro-9',
    name: 'Huawei Pura Pro 9',
    brand: 'Huawei',
    releaseDate: '2023-01',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '23mm',
      sensorSize: '1/1.31"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX789',
      'IMX689',
      'IMX586',
      'S',
      'S'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/1.8',
      focalLength: '14mm',
      sensorSize: '1/2.7"',
      stabilization: '-',
      features: [
      'Cine',
      'RYYB',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '70mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '2x',
      'PDAF',
      'p',
      'p'
      ],
    },
    telephoto2:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'telephoto',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'OIS',
      'Dual Pixel PDAF',
      'AF'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'ACES'
    ],
    imageFeatures: [
    'Astrophotography'
    ],
  },

  {
    id: 'meizu-meizupro-7',
    name: 'Meizu Meizu Pro 7',
    brand: 'Meizu',
    releaseDate: '2021-10',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.7',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'OV50K',
      'IMX989',
      'LYT-901',
      'ISOCELL HP9',
      'LYT-818'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/3.14"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro',
      'HDR',
      'A',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '81mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'periscope',
      'telephoto',
      '3',
      '3'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'AF',
      'HDR',
      'Autofocus'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    '10-bit HDR'
    ],
    imageFeatures: [
    'Magic Editor'
    ],
  },

  {
    id: 'nokia-nokiax-10-2',
    name: 'Nokia Nokia X 10',
    brand: 'Nokia',
    releaseDate: '2024-11',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '23mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'IMX682',
      'GW1',
      'GW2',
      'IMX686',
      'G'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro',
      'AI'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '70mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '3x',
      'telephoto'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3.52"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF',
      'portrait',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'EIS',
      'AI',
      'PDAF'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'AI video enhancement'
    ],
    imageFeatures: [
    'AI Remove'
    ],
  },

  {
    id: 'tcl-tcl40-12',
    name: 'TCL TCL 40 12',
    brand: 'TCL',
    releaseDate: '2026-07',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.7',
      focalLength: '23mm',
      sensorSize: '1"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX890',
      'OV50H',
      'IMX906',
      'GN1',
      'OV50A'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV',
      'A',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '72mm',
      sensorSize: '1/3.52"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'PDAF',
      '2x',
      'optical zoom',
      '3'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '52mm',
      sensorSize: '1/4.2"',
      stabilization: 'OIS',
      features: [
      '3x',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '21mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      'HDR',
      'face unlock',
      'Dual PD'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'AI Cinema'
    ],
    imageFeatures: [
    'Panorama'
    ],
  },

  {
    id: 'lg-lgwing-6',
    name: 'LG LG Wing 6',
    brand: 'LG',
    releaseDate: '2020-11',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.7',
      focalLength: '24mm',
      sensorSize: '1/1.35"',
      stabilization: 'OIS',
      features: [
      'OV50K',
      'ISOCELL HP3'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '16mm',
      sensorSize: '1/2.6"',
      stabilization: '-',
      features: [
      'Super Steady',
      'Stills',
      '114掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '65mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '2x',
      'PDAF',
      'p',
      'p'
      ],
    },
    telephoto2:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '70mm',
      sensorSize: '1/2.52"',
      stabilization: 'OIS',
      features: [
      'periscope',
      '2x',
      '4x',
      '3x',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'OIS',
      '4K 60fps',
      '4K',
      'Auto focus',
      'AF'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'OIS+EIS'
    ],
    imageFeatures: [
    'Live Photo'
    ],
  },

  {
    id: 'nothing-nothingphone-11-2',
    name: 'Nothing Nothing Phone 11',
    brand: 'Nothing',
    releaseDate: '2025-08',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX689',
      'IMX789',
      'Sony Fusion',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'AI',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '67mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      '2x',
      '3x',
      'optical zoom',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'AF',
      'face unlock',
      'Dynamic photo'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'Slow Motion'
    ],
    imageFeatures: [
    'AI Scene Optimization'
    ],
  },

  {
    id: 'samsung-galaxys-10-1',
    name: 'Samsung Galaxy S+ 10+',
    brand: 'Samsung',
    releaseDate: '2024-07',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.75',
      focalLength: '23mm',
      sensorSize: '1/1.56"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'LYT-901',
      'IMX890',
      'OV50H'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.3',
      focalLength: '17mm',
      sensorSize: '1/4"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '118掳 FOV',
      '106掳 FOV',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '67mm',
      sensorSize: '1/4.2"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'wide-angle',
      'AI',
      'EIS'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Pro mode'
    ],
    imageFeatures: [
    'Ultra HDR'
    ],
  },

  {
    id: 'realme-narzo-6',
    name: 'Realme Narzo 6',
    brand: 'Realme',
    releaseDate: '2020-07',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'IMX682',
      'GW1',
      'IMX686',
      'GW3',
      'G'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.3',
      focalLength: '16mm',
      sensorSize: '1/4.4"',
      stabilization: '-',
      features: [
      '106掳 FOV',
      '118掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'portrait',
      '3x'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      '3x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '1/3.2"',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'HDR'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Nightography'
    ],
    imageFeatures: [
    'HDR+'
    ],
  },

  {
    id: 'lenovo-lenovo-12-4',
    name: 'Lenovo Lenovo 12',
    brand: 'Lenovo',
    releaseDate: '2026-04',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '24mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'GW2',
      'IMX682',
      'GW1'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '120掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/3.0',
      focalLength: '135mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      '5x',
      '4x',
      'HP3'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '80mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      '2x',
      '2.5x',
      'portrait',
      'P'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'EIS',
      'AI',
      'face unlock'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Hybrid Log Gamma'
    ],
    imageFeatures: [
    'Object Eraser'
    ],
  },

  {
    id: 'motorola-g-9',
    name: 'Motorola G 9',
    brand: 'Motorola',
    releaseDate: '2023-09',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'GW1',
      'IMX682'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'Macro',
      'RYYB',
      '120掳 FOV',
      'C',
      'C'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '67mm',
      sensorSize: '1/3.52"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      '2x',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Dual PD',
      'Autofocus',
      'HDR'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Leica film style'
    ],
    imageFeatures: [
    'Magic Editor'
    ],
  },

  {
    id: 'sony-xperia5-10-1',
    name: 'Sony Xperia 5 10',
    brand: 'Sony',
    releaseDate: '2024-02',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.52"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM1'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/2.7"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'RYYB',
      'Cine',
      'M',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'portrait',
      '3x'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/2.67',
      focalLength: '135mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      'continuous optical zoom',
      'HP9',
      'telephoto macro'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.2',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f',
      'f'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'HDR10'
    ],
    imageFeatures: [
    'AI beauty'
    ],
  },

  {
    id: 'nokia-nokiaxr-11-2',
    name: 'Nokia Nokia XR 11',
    brand: 'Nokia',
    releaseDate: '2025-03',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'IMX682',
      'GW2'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '123掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      '2x',
      '2.5x',
      'PDAF',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'OIS',
      'AF',
      'HDR'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Pro mode'
    ],
    imageFeatures: [
    'AI portrait'
    ],
  },

  {
    id: 'sony-xperia10-11-1',
    name: 'Sony Xperia 10 11',
    brand: 'Sony',
    releaseDate: '2025-06',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'OV50H',
      'LYT-808',
      'LYT-818'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.7',
      focalLength: '14mm',
      sensorSize: '1/2.35"',
      stabilization: '-',
      features: [
      'Autofocus',
      'Macro Focus',
      '126掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '52mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.4',
      focalLength: '135mm',
      sensorSize: '1/2.55"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2.5x',
      '5x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'AI',
      'face unlock',
      'E',
      'E'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'AI Cinema'
    ],
    imageFeatures: [
    'AI Enhance'
    ],
  },

  {
    id: 'realme-realme-12-1',
    name: 'Realme Realme 12',
    brand: 'Realme',
    releaseDate: '2026-01',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.7',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'OV50A',
      'OV50H'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/3.14"',
      stabilization: '-',
      features: [
      'HDR',
      'AI',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '52mm',
      sensorSize: '1/4"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'optical zoom',
      '3x',
      '2'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.4',
      focalLength: '90mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '5x',
      '3.5x',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'Dual PD',
      'Autofocus',
      'f',
      'f'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Log'
    ],
    imageFeatures: [
    'AI Remove'
    ],
  },

  {
    id: 'lenovo-lenovo-8-2',
    name: 'Lenovo Lenovo 8',
    brand: 'Lenovo',
    releaseDate: '2022-03',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'IMX789',
      'IMX586',
      'IMX689',
      'S',
      'S'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.0',
      focalLength: '18mm',
      sensorSize: '1/2.7"',
      stabilization: '-',
      features: [
      'RYYB',
      'Cine',
      '120掳 FOV',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '72mm',
      sensorSize: '1/4"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      '3x',
      'PDAF'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '50mm',
      sensorSize: '1/4"',
      stabilization: 'OIS',
      features: [
      '3x',
      '2x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.2',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'Autofocus',
      '4K video',
      'face unlock'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'EIS'
    ],
    imageFeatures: [
    'Pro mode RAW'
    ],
  },

  {
    id: 'motorola-edgepro-6',
    name: 'Motorola Edge Pro 6',
    brand: 'Motorola',
    releaseDate: '2020-04',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/1.31"',
      stabilization: 'OIS',
      features: [
      'Sony Fusion',
      'IMX689',
      'IMX789',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '16mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Super Steady',
      '114掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '77mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'optical zoom',
      '2x',
      '3x'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '77mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'Tetraprism',
      'PDAF',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'face unlock',
      'EIS',
      'A',
      'A'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'ACES'
    ],
    imageFeatures: [
    'AI beauty'
    ],
  },

  {
    id: 'oneplus-onepluspro-14pro-1',
    name: 'OnePlus OnePlus Pro 14 Pro',
    brand: 'OnePlus',
    releaseDate: '2025-02',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '24mm',
      sensorSize: '1/1.31"',
      stabilization: 'OIS',
      features: [
      'IMX789',
      'Sony Fusion'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '16mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      'Macro',
      'HDR',
      '123掳 FOV',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.2',
      focalLength: '70mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      'HP5',
      '3.5x',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'Autofocus'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'ProRes RAW'
    ],
    imageFeatures: [
    'Hasselblad Natural Color'
    ],
  },

  {
    id: 'meizu-meizu-7',
    name: 'Meizu Meizu 7',
    brand: 'Meizu',
    releaseDate: '2021-06',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM3',
      'ISOCELL HM1',
      'ISOCELL HM2'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro',
      'AI',
      'H',
      'H'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/4.0',
      focalLength: '85mm',
      sensorSize: '1/2.75"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      '4x',
      '10x',
      '3x',
      '6x'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'EIS',
      'AI',
      'Autofocus',
      'face unlock'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    '8K 30fps HDR'
    ],
    imageFeatures: [
    'Live Photo'
    ],
  },

  {
    id: 'asus-rogphone-12',
    name: 'ASUS ROG Phone 12',
    brand: 'ASUS',
    releaseDate: '2026-02',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'IMX689',
      'Sony Fusion',
      'IMX586'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro',
      'AI',
      'H',
      'H'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.4',
      focalLength: '60mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'periscope',
      '5x',
      'portrait',
      '2.5x'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2x',
      'PDAF',
      '2',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.2',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H',
      'H',
      'H'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'AI Cinema'
    ],
    imageFeatures: [
    'Zeiss optics'
    ],
  },

  {
    id: 'apple-iphonepromax-2024promax',
    name: 'Apple iPhone Pro Max 2024 Pro Max',
    brand: 'Apple',
    releaseDate: '2026-03',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'GW2',
      'GW3',
      'GW1',
      'IMX682',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Cine',
      '120掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/3.5',
      focalLength: '65mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '26mm',
      sensorSize: '1/2.94"',
      stabilization: '-',
      features: [
      'HDR',
      'Autofocus'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'AI Motion'
    ],
    imageFeatures: [
    'Pixel Shift'
    ],
  },

  {
    id: 'tcl-tcl50-12-1',
    name: 'TCL TCL 50 12',
    brand: 'TCL',
    releaseDate: '2026-02',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'LYT-901',
      'LYT-818'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2.4"',
      stabilization: '-',
      features: [
      '119掳 FOV',
      '126掳 FOV',
      'Micro',
      'Macro',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '52mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '3x',
      'optical zoom'
      ],
    },
    telephoto2:     {
      megapixels: '50MP',
      aperture: 'f/3.5',
      focalLength: '73mm',
      sensorSize: '1/2.52"',
      stabilization: 'OIS',
      features: [
      '4x',
      'portrait',
      '5x',
      '6x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'EIS'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'HDR Vivid'
    ],
    imageFeatures: [
    'AI portrait'
    ],
  },

  {
    id: 'lenovo-legionphone-9',
    name: 'Lenovo Legion Phone 9',
    brand: 'Lenovo',
    releaseDate: '2023-03',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.67"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM6',
      'ISOCELL HM1',
      'ISOCELL HM3',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.6',
      focalLength: '50mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '3x',
      'PDAF',
      '2x',
      'o'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.4',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Action mode'
    ],
    imageFeatures: [
    'AI Enhance'
    ],
  },

  {
    id: 'samsung-galaxya-9-1',
    name: 'Samsung Galaxy A 9',
    brand: 'Samsung',
    releaseDate: '2023-08',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.67"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM6',
      'ISOCELL HM3',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '122掳 FOV',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'Tetraprism',
      'optical zoom',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '77mm',
      sensorSize: '1/3.06"',
      stabilization: 'OIS',
      features: [
      '3x',
      'portrait',
      'PDAF',
      '2x',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'Cinematic mode'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'AI Video'
    ],
    imageFeatures: [
    'Pixel Shift'
    ],
  },

  {
    id: 'sony-xperia10-12',
    name: 'Sony Xperia 10 12',
    brand: 'Sony',
    releaseDate: '2026-08',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.5',
      focalLength: '23mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'GN1',
      'IMX906'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/3.14"',
      stabilization: '-',
      features: [
      'HDR',
      '120掳 FOV',
      'Macro',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3.06"',
      stabilization: 'OIS',
      features: [
      '3x',
      'portrait',
      'PDAF',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f',
      'f',
      'f'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'HDR10'
    ],
    imageFeatures: [
    'XMAGE'
    ],
  },

  {
    id: 'huawei-pura-10-1',
    name: 'Huawei Pura 10',
    brand: 'Huawei',
    releaseDate: '2024-05',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/1.35"',
      stabilization: 'OIS',
      features: [
      'LYT-808',
      'ISOCELL HP3'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/2.5"',
      stabilization: '-',
      features: [
      '119掳 FOV',
      '122掳 FOV',
      '115掳 FOV',
      '150掳 FOV',
      'AI'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'PDAF',
      '2.5x',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'HDR',
      'face unlock',
      '4K video'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'OIS+EIS'
    ],
    imageFeatures: [
    'AI Scene Optimization'
    ],
  },

  {
    id: 'google-pixelxl-8xl-1',
    name: 'Google Pixel XL 8 XL',
    brand: 'Google',
    releaseDate: '2023-03',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM3',
      'ISOCELL HM1'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '12mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '126掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.4',
      focalLength: '135mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'telephoto macro',
      'HP9'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.5',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'HDR',
      'PDAF',
      'AI'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Super Resolution'
    ],
    imageFeatures: [
    'Leica Vibrant'
    ],
  },

  {
    id: 'vivo-xultra-10',
    name: 'vivo X Ultra 10',
    brand: 'vivo',
    releaseDate: '2024-03',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'IMX682',
      'GW3'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro',
      'A',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '72mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '50mm',
      sensorSize: '1/3.5"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'Tetraprism',
      'portrait',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      'Autofocus',
      'HDR',
      'face unlock'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'AI Cinema'
    ],
    imageFeatures: [
    'Zeiss optics'
    ],
  },

  {
    id: 'motorola-thinkphone-9',
    name: 'Motorola ThinkPhone 9',
    brand: 'Motorola',
    releaseDate: '2023-04',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'GW2',
      'IMX682'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Macro',
      '123掳 FOV',
      'HDR'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.8',
      focalLength: '111mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      '5x',
      'telephoto macro',
      'HP9',
      '3.5x'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'face unlock',
      'Autofocus'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'AI Color Correction'
    ],
    imageFeatures: [
    'Hasselblad Natural Color'
    ],
  },

  {
    id: 'sony-xperia10-10',
    name: 'Sony Xperia 10 10',
    brand: 'Sony',
    releaseDate: '2024-04',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '24mm',
      sensorSize: '1/1.31"',
      stabilization: 'OIS',
      features: [
      'Sony Fusion',
      'IMX586',
      'IMX789'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '13mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      '126掳 FOV',
      '120掳 FOV',
      'Macro Focus',
      'Autofocus'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2.5x',
      'portrait'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/2.6',
      focalLength: '135mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'HP3',
      'HP9',
      'HP5',
      'continuous optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'Dual PD',
      features: [
      'Dual PD',
      'Autofocus',
      'HDR',
      'f',
      'f'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'AI Color Correction'
    ],
    imageFeatures: [
    'AI Enhance'
    ],
  },

  {
    id: 'lenovo-legionphone-9-1',
    name: 'Lenovo Legion Phone 9',
    brand: 'Lenovo',
    releaseDate: '2023-12',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'IMX682',
      'GW1',
      'IMX686'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.3',
      focalLength: '12mm',
      sensorSize: '1/5"',
      stabilization: '-',
      features: [
      '106掳 FOV',
      '118掳 FOV',
      '112掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2x',
      'PDAF',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'Autofocus',
      'face unlock'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'AI Motion'
    ],
    imageFeatures: [
    'Leica Authentic'
    ],
  },

  {
    id: 'oppo-reno-7-2',
    name: 'OPPO Reno+ 7+',
    brand: 'OPPO',
    releaseDate: '2021-12',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.88',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'IMX906',
      'LYT-900'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.4',
      focalLength: '60mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'periscope',
      '5x',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '50mm',
      sensorSize: '1/3.5"',
      stabilization: 'OIS',
      features: [
      '3x',
      'portrait',
      'Tetraprism'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Dual Pixel PDAF',
      '4K 60fps',
      'EIS'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'HDR10'
    ],
    imageFeatures: [
    'Night Mode'
    ],
  },

  {
    id: 'samsung-galaxys-11-1',
    name: 'Samsung Galaxy S 11',
    brand: 'Samsung',
    releaseDate: '2025-01',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'GW3',
      'GW1',
      'IMX686'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '13mm',
      sensorSize: '1/2.35"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '123掳 FOV',
      '126掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/4.0',
      focalLength: '135mm',
      sensorSize: '1/2.64"',
      stabilization: 'OIS',
      features: [
      '2x',
      '6x'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '52mm',
      sensorSize: '1/3.06"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'PDAF',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'face unlock'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'ProRes RAW'
    ],
    imageFeatures: [
    'Time-lapse'
    ],
  },

  {
    id: 'apple-iphone-2020',
    name: 'Apple iPhone 2020',
    brand: 'Apple',
    releaseDate: '2022-02',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'GW1',
      'GW2',
      'IMX686',
      'IMX682'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro',
      'A',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'portrait',
      '2.5x',
      '2',
      '2'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/2.2',
      focalLength: '100mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'telephoto macro',
      'HP5',
      'HP9',
      '5x'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.5',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'EIS',
      '4K',
      'video'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'AI Video'
    ],
    imageFeatures: [
    'Best Take'
    ],
  },

  {
    id: 'vivo-xfold-12',
    name: 'vivo X Fold 12',
    brand: 'vivo',
    releaseDate: '2026-04',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.5',
      focalLength: '23mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'LYT-901',
      'OV50H'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      '122掳 FOV',
      '112掳 FOV',
      'Micro',
      '120掳 FOV',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '73mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      '6x',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '20mm',
      sensorSize: '1/3.6"',
      stabilization: 'Dual pixel PDAF',
      features: [
      'Bokeh Mode',
      'Center Stage',
      'Cinematic mode'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'HDR10+'
    ],
    imageFeatures: [
    'Super Resolution'
    ],
  },

  {
    id: 'google-pixelpro-9pro',
    name: 'Google Pixel Pro 9 Pro',
    brand: 'Google',
    releaseDate: '2024-05',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.4',
      focalLength: '24mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'LYT-818',
      'OV50H',
      'LYT-900'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '80mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '2x',
      'portrait',
      'P',
      'P'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.6',
      focalLength: '72mm',
      sensorSize: '1/3.2"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'portrait',
      '3x',
      '2x',
      'P'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'face unlock',
      'Dual PD',
      'HDR',
      'A',
      'A'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    '10-bit HDR'
    ],
    imageFeatures: [
    'Object Eraser'
    ],
  },

  {
    id: 'nothing-nothingphone-12-3',
    name: 'Nothing Nothing Phone 12',
    brand: 'Nothing',
    releaseDate: '2026-03',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'LYT-900',
      'LYT-818'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/2.7"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '52mm',
      sensorSize: '1/3.52"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      '3x',
      'PDAF',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '72mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF',
      'portrait',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    '8K 30fps HDR'
    ],
    imageFeatures: [
    'Best Take'
    ],
  },

  {
    id: 'realme-gt-12',
    name: 'Realme GT 12',
    brand: 'Realme',
    releaseDate: '2026-04',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '24mm',
      sensorSize: '1/2"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'Sony Fusion',
      'IMX586'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Macro',
      'AI',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/3.5',
      focalLength: '230mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      '6x',
      'portrait',
      '4x',
      '2.5x'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'PDAF',
      '4K'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Cine'
    ],
    imageFeatures: [
    'Leica Authentic'
    ],
  },

  {
    id: 'asus-zenfonepro-9',
    name: 'ASUS ZenFone Pro 9',
    brand: 'ASUS',
    releaseDate: '2023-03',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.6',
      focalLength: '24mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'LYT-901',
      'OV50A',
      'LYT-900',
      'GN2'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'HDR',
      'Macro',
      '120掳 FOV',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '77mm',
      sensorSize: '1/3.5"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'portrait'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '65mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2.5x',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.45',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'Dual Pixel',
      'EIS',
      'face unlock',
      '4K'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'AI Motion'
    ],
    imageFeatures: [
    'Time-lapse'
    ],
  },

  {
    id: 'motorola-edge-9',
    name: 'Motorola Edge+ 9+',
    brand: 'Motorola',
    releaseDate: '2023-08',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX789',
      'IMX689',
      'IMX586',
      'S',
      'S'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/2.35"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Autofocus',
      '126掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.8',
      focalLength: '135mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'HP3',
      '4x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f',
      'f'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Pro mode'
    ],
    imageFeatures: [
    'Pro mode RAW'
    ],
  },

  {
    id: 'xiaomi-xiaomi-6',
    name: 'Xiaomi Xiaomi 6',
    brand: 'Xiaomi',
    releaseDate: '2020-08',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.6',
      focalLength: '24mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'OV50H',
      'LYT-900'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/2.5"',
      stabilization: '-',
      features: [
      '150掳 FOV',
      '120掳 FOV',
      'AI'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '80mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x',
      'portrait',
      '2',
      '2'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3.06"',
      stabilization: 'OIS',
      features: [
      'Tetraprism',
      'portrait',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '20mm',
      sensorSize: '1/2.94"',
      stabilization: 'AF',
      features: [
      'Dolby Vision',
      'Cinematic mode',
      'HDR'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'Super Steady'
    ],
    imageFeatures: [
    'Ultra HDR'
    ],
  },

  {
    id: 'vivo-x-8',
    name: 'vivo X 8',
    brand: 'vivo',
    releaseDate: '2022-10',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.52"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM2'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/2.7"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Cine',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '50mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2.5x',
      'portrait',
      '2',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'AF',
      'Autofocus'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Cine'
    ],
    imageFeatures: [
    'XD Fusion'
    ],
  },

  {
    id: 'honor-magicpro-10',
    name: 'Honor Magic Pro 10',
    brand: 'Honor',
    releaseDate: '2024-02',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'OV50K',
      'IMX989',
      'OV50H'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'HDR',
      'Macro',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '67mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF',
      '3x',
      'o'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'OIS',
      'AF',
      '4K 60fps',
      'Autofocus',
      'EIS'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    '8K recording'
    ],
    imageFeatures: [
    'Time-lapse'
    ],
  },

  {
    id: 'motorola-edge-12-1',
    name: 'Motorola Edge+ 12+',
    brand: 'Motorola',
    releaseDate: '2026-07',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.4',
      focalLength: '24mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP3',
      'ISOCELL HP2',
      'IMX989',
      'LYT-901'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '67mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'PDAF',
      '3x',
      'optical zoom',
      '2'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '52mm',
      sensorSize: '1/4.2"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      '2x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.45',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'Dual Pixel PDAF',
      'AF'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Super Steady'
    ],
    imageFeatures: [
    'Live Photo'
    ],
  },

  {
    id: 'realme-realme-11',
    name: 'Realme Realme 11',
    brand: 'Realme',
    releaseDate: '2025-05',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'IMX682',
      'GW3',
      'GW1'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      'Micro',
      '122掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '67mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'Tetraprism'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.2',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f',
      'f',
      'f'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'AI Video'
    ],
    imageFeatures: [
    'Watermark'
    ],
  },

  {
    id: 'xiaomi-pocof-9',
    name: 'Xiaomi POCO F 9',
    brand: 'Xiaomi',
    releaseDate: '2023-01',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX586',
      'IMX689',
      'IMX789',
      'S',
      'S'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/2.5"',
      stabilization: 'Quad PD',
      features: [
      '123掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '67mm',
      sensorSize: '1/3.2"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.4',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H',
      'H'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Vivo V3 chip'
    ],
    imageFeatures: [
    'Time-lapse'
    ],
  },

  {
    id: 'sony-xperia1-7-1',
    name: 'Sony Xperia 1 7',
    brand: 'Sony',
    releaseDate: '2021-04',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.7',
      focalLength: '23mm',
      sensorSize: '1/1.35"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP5',
      'OV50K',
      'OV50H',
      'LYT-901',
      'IMX989'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '15mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      '119掳 FOV',
      '126掳 FOV',
      '122掳 FOV',
      '123掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/3.5',
      focalLength: '65mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'portrait'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '77mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'PDAF',
      'HDR',
      'face unlock',
      'AI'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Pro mode'
    ],
    imageFeatures: [
    'Ultra HDR'
    ],
  },

  {
    id: 'nothing-nothingphone-11-3',
    name: 'Nothing Nothing Phone+ 11+',
    brand: 'Nothing',
    releaseDate: '2025-10',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.4',
      focalLength: '24mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'OV50K',
      'ISOCELL HP3',
      'ISOCELL HP5',
      'LYT-818'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '13mm',
      sensorSize: '1/2.4"',
      stabilization: '-',
      features: [
      'Micro',
      '115掳 FOV',
      'AI',
      '114掳 FOV',
      '128掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF',
      '3x',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.6',
      focalLength: '72mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'portrait',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'EIS'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Log'
    ],
    imageFeatures: [
    'Astrophotography'
    ],
  },

  {
    id: 'samsung-galaxyzfold-10',
    name: 'Samsung Galaxy Z Fold 10',
    brand: 'Samsung',
    releaseDate: '2024-11',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.31"',
      stabilization: 'OIS',
      features: [
      'IMX586',
      'IMX789'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '16mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Stills'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.67',
      focalLength: '73mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'HP9',
      '5x',
      'HP3'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Dual Pixel PDAF',
      'EIS'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    '8K 30fps HDR'
    ],
    imageFeatures: [
    'XD Fusion'
    ],
  },

  {
    id: 'lg-lgvelvet-10',
    name: 'LG LG Velvet 10',
    brand: 'LG',
    releaseDate: '2024-04',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '24mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'IMX682',
      'GW3',
      'GW1',
      'G'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/2.75"',
      stabilization: '-',
      features: [
      'Freeform',
      '126掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.8',
      focalLength: '135mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      '3x',
      '3.5x'
      ],
    },
    telephoto2:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'telephoto',
      'portrait',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'Dual PD',
      features: [
      'face unlock',
      'Autofocus'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Gyro-EIS'
    ],
    imageFeatures: [
    'Macro mode'
    ],
  },

  {
    id: 'vivo-v-11',
    name: 'vivo V 11',
    brand: 'vivo',
    releaseDate: '2025-09',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'LYT-808',
      'ISOCELL HP3',
      'LYT-900'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '112掳 FOV',
      'Micro',
      '122掳 FOV',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '52mm',
      sensorSize: '1/3.5"',
      stabilization: 'OIS',
      features: [
      'Tetraprism',
      'optical zoom',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      '4K',
      '4K 60fps'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    '10-bit HDR'
    ],
    imageFeatures: [
    'Monochrome'
    ],
  },

  {
    id: 'motorola-razr-10',
    name: 'Motorola Razr 10',
    brand: 'Motorola',
    releaseDate: '2024-01',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'IMX890',
      'GN2',
      'IMX989'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/1.8"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV',
      'A',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '77mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '3x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'EIS',
      '4K',
      'AF',
      '4K 60fps',
      'HDR'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'HDR Vivid'
    ],
    imageFeatures: [
    'Time-lapse'
    ],
  },

  {
    id: 'honor-magicultimate-7-1',
    name: 'Honor Magic Ultimate 7',
    brand: 'Honor',
    releaseDate: '2021-08',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.4',
      focalLength: '24mm',
      sensorSize: '1/1.35"',
      stabilization: 'OIS',
      features: [
      'LYT-818',
      'LYT-901',
      'IMX989',
      'ISOCELL HP5'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      '126掳 FOV',
      '123掳 FOV',
      'Autofocus'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '50mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'PDAF',
      'AI',
      'Autofocus',
      'face unlock',
      'HDR'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'LOG'
    ],
    imageFeatures: [
    'HDR+'
    ],
  },

  {
    id: 'asus-zenfonepro-6',
    name: 'ASUS ZenFone Pro 6',
    brand: 'ASUS',
    releaseDate: '2020-05',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '24mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'IMX689',
      'IMX586',
      'Sony Fusion',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/1.8',
      focalLength: '13mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Macro',
      'Cine'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'telephoto',
      'periscope',
      '3x',
      'p',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'AI',
      'wide-angle'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Dolby Vision'
    ],
    imageFeatures: [
    'Leica Authentic'
    ],
  },

  {
    id: 'meizu-meizu-11-2',
    name: 'Meizu Meizu 11',
    brand: 'Meizu',
    releaseDate: '2025-04',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX586',
      'Sony Fusion'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '122掳 FOV',
      '112掳 FOV',
      '120掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '50mm',
      sensorSize: '1/4.2"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      '3x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.2',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H',
      'H',
      'H'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Vivo V3 chip'
    ],
    imageFeatures: [
    'XMAGE'
    ],
  },

  {
    id: 'vivo-xultra-6',
    name: 'vivo X Ultra 6',
    brand: 'vivo',
    releaseDate: '2020-01',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '24mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'LYT-901',
      'LYT-818'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'HDR',
      'Macro',
      'AI',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/3.5',
      focalLength: '70mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '5x',
      '2x',
      '2.5x',
      'portrait'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '80mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.4',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Dolby Vision'
    ],
    imageFeatures: [
    'Zeiss optics'
    ],
  },

  {
    id: 'huawei-pocket-7',
    name: 'Huawei Pocket 7',
    brand: 'Huawei',
    releaseDate: '2021-11',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.68',
      focalLength: '24mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'GN2',
      'OV50A',
      'IMX890',
      'GNV'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/4.4"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '118掳 FOV',
      '120掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/3.0',
      focalLength: '111mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      'telephoto macro'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '22mm',
      sensorSize: '1/3.1"',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'HDR',
      'Dual PD',
      'f',
      'f'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'ProRes RAW'
    ],
    imageFeatures: [
    'Dual Capture'
    ],
  },

  {
    id: 'google-pixela-11a-1',
    name: 'Google Pixel A 11 a',
    brand: 'Google',
    releaseDate: '2026-05',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.4',
      focalLength: '23mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'OV50K',
      'LYT-900',
      'OV50A'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Macro',
      '112掳 FOV',
      '122掳 FOV',
      '120掳 FOV',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/3.5',
      focalLength: '70mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '5x'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'video',
      'EIS',
      'Dual Pixel'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'ProRes'
    ],
    imageFeatures: [
    'AI Remove'
    ],
  },

  {
    id: 'google-pixela-11a-2',
    name: 'Google Pixel A 11 a',
    brand: 'Google',
    releaseDate: '2026-06',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.5',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'OV50H',
      'LYT-818',
      'OV50A',
      'LYT-900',
      'IMX906'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '12mm',
      sensorSize: '1/2.75"',
      stabilization: '-',
      features: [
      '114掳 FOV',
      '119掳 FOV',
      '115掳 FOV',
      '150掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.8',
      focalLength: '70mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'periscope',
      '3x',
      '2x',
      'PDAF',
      '3.5x'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/2.6',
      focalLength: '100mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      'HP9',
      'HP3',
      '3x',
      '5x',
      '4x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'HDR Vivid'
    ],
    imageFeatures: [
    'Super Resolution'
    ],
  },

  {
    id: 'apple-iphoneplus-2022plus',
    name: 'Apple iPhone Plus 2022 Plus',
    brand: 'Apple',
    releaseDate: '2024-06',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.95',
      focalLength: '24mm',
      sensorSize: '1/1.22"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'LYT-818',
      'GN1',
      'IMX906',
      'LYT-808',
      'IMX989'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '16mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Micro',
      '112掳 FOV',
      '120掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '113mm',
      sensorSize: '1/2.4"',
      stabilization: 'OIS',
      features: [
      '5x',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.4',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f',
      'f'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'OIS+EIS'
    ],
    imageFeatures: [
    'Portrait Mode'
    ],
  },

  {
    id: 'realme-gt-10',
    name: 'Realme GT 10',
    brand: 'Realme',
    releaseDate: '2024-04',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '24mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'LYT-818',
      'IMX989',
      'OV50H',
      'ISOCELL HP2',
      'OV50K'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '15mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'HDR',
      'AI'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.6',
      focalLength: '85mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      'telephoto macro',
      '4x',
      'periscope',
      '3.5x'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '67mm',
      sensorSize: '1/4"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF',
      '2x',
      '3',
      '3'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'OIS',
      'AF',
      '4K',
      '4K 60fps'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'HDR10'
    ],
    imageFeatures: [
    'AI beauty'
    ],
  },

  {
    id: 'samsung-galaxyf-8-1',
    name: 'Samsung Galaxy F 8',
    brand: 'Samsung',
    releaseDate: '2022-11',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'GW1',
      'GW3',
      'IMX682'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/3.14"',
      stabilization: '-',
      features: [
      'HDR',
      'AI',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '73mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.4',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'Autofocus',
      '4K video',
      'face unlock'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'Action mode'
    ],
    imageFeatures: [
    'Hasselblad Natural Color'
    ],
  },

  {
    id: 'lg-lgv-10-1',
    name: 'LG LG V 10',
    brand: 'LG',
    releaseDate: '2024-07',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM6',
      'ISOCELL HM1',
      'ISOCELL HM3'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      'Super Steady',
      'Stills',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '52mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '77mm',
      sensorSize: '1/3.2"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'portrait',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'Dual PD',
      'Autofocus',
      'H',
      'H'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'AI Cinema'
    ],
    imageFeatures: [
    'Pixel Shift'
    ],
  },

  {
    id: 'oneplus-oneplusnord-5',
    name: 'OnePlus OnePlus Nord 5',
    brand: 'OnePlus',
    releaseDate: '2022-09',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM1',
      'ISOCELL HM3',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Macro',
      'HDR',
      '120掳 FOV',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.2',
      focalLength: '111mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'continuous optical zoom'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2x',
      'portrait',
      'PDAF',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.0',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'AF',
      'Autofocus',
      'HDR',
      'Dynamic photo',
      'f'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'AI Motion'
    ],
    imageFeatures: [
    'Long exposure'
    ],
  },

  {
    id: 'motorola-thinkphone-10',
    name: 'Motorola ThinkPhone 10',
    brand: 'Motorola',
    releaseDate: '2024-08',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX789',
      'Sony Fusion',
      'IMX586',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '13mm',
      sensorSize: '1/2.35"',
      stabilization: '-',
      features: [
      'Autofocus',
      '126掳 FOV',
      '123掳 FOV',
      'Macro Focus',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2.5x'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.45',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Dual Pixel PDAF',
      'AF',
      'OIS',
      'Auto focus'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    '6K 30fps'
    ],
    imageFeatures: [
    'Macro mode'
    ],
  },

  {
    id: 'lg-lgv-7',
    name: 'LG LG V 7',
    brand: 'LG',
    releaseDate: '2021-10',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.88',
      focalLength: '24mm',
      sensorSize: '1/1.22"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX920',
      'IMX890',
      'LYT-818',
      'IMX989'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '16mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      'Macro',
      '112掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '81mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'telephoto',
      '3x',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AI',
      'EIS'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    '6K 30fps'
    ],
    imageFeatures: [
    'AI portrait'
    ],
  },

  {
    id: 'tcl-tcl50-10-1',
    name: 'TCL TCL 50 10',
    brand: 'TCL',
    releaseDate: '2024-12',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'IMX682',
      'GW2',
      'GW1'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/2.7"',
      stabilization: '-',
      features: [
      'Macro',
      'RYYB',
      '120掳 FOV',
      'C'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.6',
      focalLength: '50mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '50MP',
      aperture: 'f/4.3',
      focalLength: '135mm',
      sensorSize: '1/2.6"',
      stabilization: 'OIS',
      features: [
      'periscope',
      '5x',
      'PDAF',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'wide-angle',
      'AI',
      'EIS',
      'Autofocus',
      'face unlock'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Optical Flow'
    ],
    imageFeatures: [
    'AI portrait'
    ],
  },

  {
    id: 'oneplus-oneplus-15-1',
    name: 'OnePlus OnePlus 15',
    brand: 'OnePlus',
    releaseDate: '2026-01',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM3',
      'ISOCELL HM1'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.2',
      focalLength: '18mm',
      sensorSize: '1/2.7"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'RYYB',
      'Cine',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.6',
      focalLength: '70mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '3x',
      'PDAF',
      'periscope',
      '3.5x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '20mm',
      sensorSize: '1/3.1"',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'HDR',
      'Dual PD',
      'f'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'AI Color Correction'
    ],
    imageFeatures: [
    'AI Photo Edit'
    ],
  },

  {
    id: 'samsung-galaxyzflip-7',
    name: 'Samsung Galaxy Z Flip 7',
    brand: 'Samsung',
    releaseDate: '2021-04',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'IMX682',
      'GW3'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2.7"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'RYYB',
      'Cine',
      'M',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '80mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2.5x',
      'portrait',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H',
      'H',
      'H'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Hybrid Log Gamma'
    ],
    imageFeatures: [
    'ProRAW'
    ],
  },

  {
    id: 'google-pixel-10-2',
    name: 'Google Pixel 10',
    brand: 'Google',
    releaseDate: '2025-11',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'GW2',
      'GW1',
      'IMX686',
      'IMX682',
      'G'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/2.4"',
      stabilization: '-',
      features: [
      '126掳 FOV',
      'Freeform',
      '150掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2x',
      'portrait',
      'optical zoom',
      'PDAF',
      '3'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'Dynamic photo'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'OIS+EIS'
    ],
    imageFeatures: [
    'ProRAW'
    ],
  },

  {
    id: 'oneplus-onepluspro-14pro-2',
    name: 'OnePlus OnePlus Pro 14 Pro',
    brand: 'OnePlus',
    releaseDate: '2025-06',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.67"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM3',
      'ISOCELL HM1',
      'ISOCELL HM2'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Stills',
      '112掳 FOV',
      'Super Steady',
      'Autofocus'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '70mm',
      sensorSize: '1/1.95"',
      stabilization: 'OIS',
      features: [
      '6x',
      'PDAF',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x',
      'optical zoom',
      '3',
      '3'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'face unlock',
      'HDR',
      'AF'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Optical Flow'
    ],
    imageFeatures: [
    'Leica filters'
    ],
  },

  {
    id: 'sony-xperia5-11',
    name: 'Sony Xperia 5 11',
    brand: 'Sony',
    releaseDate: '2025-05',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '24mm',
      sensorSize: '1/1.4"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'Sony Fusion',
      'IMX789',
      'IMX586',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '16mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Super Steady',
      '120掳 FOV',
      'Stills'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '67mm',
      sensorSize: '1/3.52"',
      stabilization: 'OIS',
      features: [
      '2x',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      '4K',
      'Dual Pixel PDAF'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Super Resolution'
    ],
    imageFeatures: [
    'Zeiss Cinematic'
    ],
  },

  {
    id: 'tcl-tcl20-6-2',
    name: 'TCL TCL 20 6',
    brand: 'TCL',
    releaseDate: '2020-04',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'OV50K',
      'OV50H'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/4"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '118掳 FOV',
      '106掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '3x',
      'telephoto'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '80mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      '2x',
      '2.5x',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.4',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Cine'
    ],
    imageFeatures: [
    'Photo Unblur'
    ],
  },

  {
    id: 'xiaomi-redminote-12',
    name: 'Xiaomi Redmi Note 12',
    brand: 'Xiaomi',
    releaseDate: '2026-01',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.4',
      focalLength: '24mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'LYT-900',
      'LYT-808'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'AI',
      'Macro',
      '120掳 FOV',
      'H'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/3.5',
      focalLength: '111mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '4x',
      '10x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'EIS',
      'HDR'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Pro mode'
    ],
    imageFeatures: [
    'AI beauty'
    ],
  },

  {
    id: 'lg-lgvelvet-9-1',
    name: 'LG LG Velvet 9',
    brand: 'LG',
    releaseDate: '2023-09',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'IMX586',
      'Sony Fusion'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.7',
      focalLength: '14mm',
      sensorSize: '1/2.5"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      'Macro Focus',
      '126掳 FOV',
      'Autofocus',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.6',
      focalLength: '67mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x',
      '3x',
      'portrait',
      'o'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '67mm',
      sensorSize: '1/3.2"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'optical zoom',
      '2x',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'AI Color Correction'
    ],
    imageFeatures: [
    'Magic Eraser'
    ],
  },

  {
    id: 'xiaomi-redmik-11',
    name: 'Xiaomi Redmi K 11',
    brand: 'Xiaomi',
    releaseDate: '2025-10',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM3',
      'ISOCELL HM1',
      'ISOCELL HM6',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'HDR',
      '123掳 FOV',
      '120掳 FOV',
      'M',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/3.0',
      focalLength: '90mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'HP5',
      'periscope',
      'HP9'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.5',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AF',
      'Dual Pixel',
      'PDAF',
      '4K',
      'HDR'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'AI Video'
    ],
    imageFeatures: [
    'Time-lapse'
    ],
  },

  {
    id: 'nothing-nothingphone-12-4',
    name: 'Nothing Nothing Phone 12',
    brand: 'Nothing',
    releaseDate: '2026-08',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP9',
      'IMX989',
      'OV50K'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '16mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Macro',
      '112掳 FOV',
      'Micro',
      '120掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '77mm',
      sensorSize: '1/3.06"',
      stabilization: 'OIS',
      features: [
      '2x',
      'Tetraprism'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'EIS',
      '4K 60fps'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    '10-bit HDR'
    ],
    imageFeatures: [
    'Pixel Shift'
    ],
  },

  {
    id: 'vivo-xultra-11',
    name: 'vivo X Ultra 11',
    brand: 'vivo',
    releaseDate: '2025-01',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.67"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM3',
      'ISOCELL HM1',
      'ISOCELL HM2',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'AI',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '73mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '6x',
      '2.5x'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '21mm',
      sensorSize: '1/3.2"',
      stabilization: 'Sensor-shift',
      features: [
      'Cinematic mode',
      'Center Stage',
      'Bokeh Mode',
      'face ID',
      'HDR'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'AI video enhancement'
    ],
    imageFeatures: [
    'Pixel Shift'
    ],
  },

  {
    id: 'google-pixelxl-11xl',
    name: 'Google Pixel XL 11 XL',
    brand: 'Google',
    releaseDate: '2026-06',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'IMX689',
      'IMX586'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'HDR',
      'AI',
      '120掳 FOV',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '77mm',
      sensorSize: '1/4.2"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF',
      'optical zoom',
      '3'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      '4K 60fps',
      'Dual Pixel PDAF',
      'AF',
      '4K',
      'EIS'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Portrait Video'
    ],
    imageFeatures: [
    'ProRAW'
    ],
  },

  {
    id: 'samsung-galaxys-12-1',
    name: 'Samsung Galaxy S+ 12+',
    brand: 'Samsung',
    releaseDate: '2026-08',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'LYT-900',
      'ISOCELL HP9',
      'OV50K'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Micro',
      '122掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '67mm',
      sensorSize: '1/4.2"',
      stabilization: 'OIS',
      features: [
      '2x',
      'optical zoom',
      '3x',
      'P',
      'P'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '26mm',
      sensorSize: '1/3.06"',
      stabilization: 'Sensor-shift',
      features: [
      'Dolby Vision',
      'Cinematic mode',
      'PDAF'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Pro mode'
    ],
    imageFeatures: [
    'Magic Editor'
    ],
  },

  {
    id: 'tcl-tcl20-6-3',
    name: 'TCL TCL 20 6',
    brand: 'TCL',
    releaseDate: '2020-06',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP5',
      'LYT-818',
      'OV50H'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/3.06"',
      stabilization: '-',
      features: [
      'Macro',
      '123掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '77mm',
      sensorSize: '1/4.2"',
      stabilization: 'OIS',
      features: [
      '3x',
      'PDAF',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.4',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AF',
      'face unlock',
      'Autofocus',
      'HDR',
      '4'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Zeiss T*'
    ],
    imageFeatures: [
    'Document mode'
    ],
  },

  {
    id: 'tcl-tcl30-12',
    name: 'TCL TCL 30 12',
    brand: 'TCL',
    releaseDate: '2026-04',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '24mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'IMX689',
      'Sony Fusion'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro',
      'A',
      'A',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '72mm',
      sensorSize: '1/3.2"',
      stabilization: 'OIS',
      features: [
      '3x',
      '2x',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H',
      'H'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'AI Video'
    ],
    imageFeatures: [
    'Object Eraser'
    ],
  },

  {
    id: 'apple-iphone-2024',
    name: 'Apple iPhone 2024',
    brand: 'Apple',
    releaseDate: '2026-09',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.68',
      focalLength: '24mm',
      sensorSize: '1/1.43"',
      stabilization: 'OIS',
      features: [
      'LYT-818',
      'OV50A',
      'IMX890',
      'GN1',
      'OV50K'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/2.35"',
      stabilization: 'Quad PD',
      features: [
      '126掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '81mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'portrait',
      'telephoto',
      '3'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.2',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H',
      'H'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'HDR Vivid'
    ],
    imageFeatures: [
    'Magic Editor'
    ],
  },

  {
    id: 'nothing-nothingphone-6-3',
    name: 'Nothing Nothing Phone+ 6+',
    brand: 'Nothing',
    releaseDate: '2020-08',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.95',
      focalLength: '23mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'IMX890',
      'IMX920',
      'OV50K',
      'LYT-808'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      '122掳 FOV',
      'Macro',
      'Micro',
      '112掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '81mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'portrait',
      '3x',
      't'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/3.2"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'optical zoom',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.4',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'AF',
      'face unlock',
      'Autofocus',
      '4'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Dolby Vision'
    ],
    imageFeatures: [
    'Portrait Mode'
    ],
  },

  {
    id: 'meizu-meizunote-10',
    name: 'Meizu Meizu Note 10',
    brand: 'Meizu',
    releaseDate: '2024-05',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '24mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP3',
      'IMX989'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/2.5"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      'Autofocus',
      'Macro Focus',
      '126掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.6',
      focalLength: '70mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      '5x',
      'HP9'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '21mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      'face unlock',
      'Autofocus'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Action mode'
    ],
    imageFeatures: [
    'Object Eraser'
    ],
  },

  {
    id: 'realme-realme-6',
    name: 'Realme Realme 6',
    brand: 'Realme',
    releaseDate: '2020-07',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM2'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Super Steady',
      '114掳 FOV',
      'Stills',
      'Autofocus'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.4',
      focalLength: '73mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'telephoto macro',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.4',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f',
      'f',
      'f'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Super Steady'
    ],
    imageFeatures: [
    'AI beauty'
    ],
  },

  {
    id: 'asus-zenfonepro-10',
    name: 'ASUS ZenFone Pro 10',
    brand: 'ASUS',
    releaseDate: '2024-07',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '24mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'GW3',
      'IMX682',
      'GW1',
      'IMX686',
      'G'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '15mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV',
      '123掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '52mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      '3x',
      'optical zoom',
      '2x',
      'P',
      'P'
      ],
    },
    telephoto2:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '65mm',
      sensorSize: '1/1.95"',
      stabilization: 'OIS',
      features: [
      '4x',
      '2x',
      '5x',
      'periscope',
      '6x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'Dual PD',
      features: [
      'HDR',
      'face unlock',
      'Dual PD'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Cinematic mode'
    ],
    imageFeatures: [
    'Magic Eraser'
    ],
  },

  {
    id: 'nokia-nokiaxr-6-2',
    name: 'Nokia Nokia XR 6',
    brand: 'Nokia',
    releaseDate: '2020-08',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '24mm',
      sensorSize: '1/1.31"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX789',
      'IMX689',
      'IMX586',
      'S',
      'S'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '114掳 FOV',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '67mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '3x',
      '2x',
      'portrait',
      'o'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'face unlock',
      'Dual PD'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Super Resolution'
    ],
    imageFeatures: [
    'Photo Unblur'
    ],
  },

  {
    id: 'sony-xperia10-7',
    name: 'Sony Xperia 10 7',
    brand: 'Sony',
    releaseDate: '2021-10',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/1.31"',
      stabilization: 'OIS',
      features: [
      'Sony Fusion',
      'IMX689',
      'IMX586',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'AI',
      'HDR',
      'M',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.8',
      focalLength: '90mm',
      sensorSize: '1/2.55"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'PDAF'
      ],
    },
    telephoto2:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '65mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      'portrait',
      '4x',
      '2.5x',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '21mm',
      sensorSize: '1/3.1"',
      stabilization: 'Dual PD',
      features: [
      'face unlock',
      'Dual PD',
      'Autofocus'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'LOG'
    ],
    imageFeatures: [
    'Super Resolution'
    ],
  },

  {
    id: 'nothing-nothingphone-10-2',
    name: 'Nothing Nothing Phone+ 10+',
    brand: 'Nothing',
    releaseDate: '2024-10',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '23mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'GW2',
      'GW1',
      'IMX686'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'AI',
      'Macro',
      '1',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '2x',
      'portrait',
      'P',
      'P'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Dual Pixel PDAF',
      'EIS',
      'AF',
      'Autofocus',
      'OIS'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Gyro-EIS'
    ],
    imageFeatures: [
    'Magic Eraser'
    ],
  },

  {
    id: 'samsung-galaxya-6',
    name: 'Samsung Galaxy A 6',
    brand: 'Samsung',
    releaseDate: '2020-08',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'GW1',
      'GW2',
      'GW3'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro',
      'HDR'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2.5x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'video',
      'Dual Pixel'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    '10-bit HDR'
    ],
    imageFeatures: [
    'Time-lapse'
    ],
  },

  {
    id: 'nokia-nokiag-12-2',
    name: 'Nokia Nokia G 12',
    brand: 'Nokia',
    releaseDate: '2026-05',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'IMX789',
      'Sony Fusion'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/1.95"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      'AI',
      '115掳 FOV',
      '126掳 FOV',
      '128掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.67',
      focalLength: '135mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'HP9',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: 'Dual PD',
      features: [
      'Autofocus',
      'HDR',
      'Dual PD',
      'f'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    '10-bit HDR'
    ],
    imageFeatures: [
    'Smart HDR'
    ],
  },

  {
    id: 'meizu-meizu-11-3',
    name: 'Meizu Meizu 11',
    brand: 'Meizu',
    releaseDate: '2025-12',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.7',
      focalLength: '24mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'LYT-900',
      'LYT-808'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'AI',
      'M',
      'M',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '72mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      '3x',
      'PDAF',
      '2x',
      'o'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      '4K 60fps',
      '4K'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'AI Cinema'
    ],
    imageFeatures: [
    'Time-lapse'
    ],
  },

  {
    id: 'sony-xperiapro-9',
    name: 'Sony Xperia Pro 9',
    brand: 'Sony',
    releaseDate: '2023-04',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.7',
      focalLength: '24mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'LYT-808',
      'IMX906',
      'GNV',
      'IMX890'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/2.6"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      'Autofocus',
      '114掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '50mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/2.8',
      focalLength: '135mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'HP5',
      'telephoto macro'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'PDAF'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Dolby Vision'
    ],
    imageFeatures: [
    'Smart HDR'
    ],
  },

  {
    id: 'apple-iphone-2019',
    name: 'Apple iPhone 2019',
    brand: 'Apple',
    releaseDate: '2021-07',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.7',
      focalLength: '24mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP3',
      'ISOCELL HP5'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/2.55"',
      stabilization: 'Quad PD',
      features: [
      '123掳 FOV',
      'Macro Focus',
      '120掳 FOV',
      '126掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '65mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      '6x',
      '2x',
      '5x',
      '2.5x',
      '3x'
      ],
    },
    telephoto2:     {
      megapixels: '10MP',
      aperture: 'f/2.6',
      focalLength: '67mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF',
      'portrait',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.45',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AF',
      'Auto focus'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Zeiss Cinematic'
    ],
    imageFeatures: [
    'Pixel Shift'
    ],
  },

  {
    id: 'meizu-meizu-8-1',
    name: 'Meizu Meizu 8',
    brand: 'Meizu',
    releaseDate: '2022-11',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.6',
      focalLength: '24mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'OV50K',
      'ISOCELL HP5',
      'OV50H',
      'LYT-808',
      'IMX989'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '52mm',
      sensorSize: '1/4.2"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'face unlock',
      'Dynamic photo',
      'Autofocus'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    '8K 30fps HDR'
    ],
    imageFeatures: [
    'Food mode'
    ],
  },

  {
    id: 'lg-lgv-8',
    name: 'LG LG V 8',
    brand: 'LG',
    releaseDate: '2022-09',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'LYT-901',
      'LYT-818',
      'OV50H',
      'LYT-900'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'AI',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '65mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2x',
      '2.5x',
      'P',
      'P'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'HDR',
      'AF',
      'face unlock',
      '4'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Nightography'
    ],
    imageFeatures: [
    'Hasselblad Natural Color'
    ],
  },

  {
    id: 'xiaomi-redmi-12',
    name: 'Xiaomi Redmi 12',
    brand: 'Xiaomi',
    releaseDate: '2026-06',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '24mm',
      sensorSize: '1/1.31"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX789',
      'IMX689',
      'Sony Fusion',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '14mm',
      sensorSize: '1/2.5"',
      stabilization: '-',
      features: [
      '126掳 FOV',
      'Macro Focus',
      '123掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.6',
      focalLength: '100mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'continuous optical zoom',
      'HP3'
      ],
    },
    telephoto2:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'periscope',
      '3x',
      't',
      't'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'EIS',
      'HDR',
      'wide-angle',
      'Autofocus'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Cinematic mode'
    ],
    imageFeatures: [
    'Panorama'
    ],
  },

  {
    id: 'google-pixel-7',
    name: 'Google Pixel 7',
    brand: 'Google',
    releaseDate: '2022-02',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '23mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'IMX682',
      'GW3',
      'GW1',
      'IMX686'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.7',
      focalLength: '12mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      '126掳 FOV',
      '120掳 FOV',
      '123掳 FOV',
      'Autofocus',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '77mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.9',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'Sensor-shift',
      features: [
      'Cinematic mode',
      'face ID'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Super Resolution'
    ],
    imageFeatures: [
    'Portrait Mode'
    ],
  },

  {
    id: 'vivo-xfold-9',
    name: 'vivo X Fold 9',
    brand: 'vivo',
    releaseDate: '2023-04',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.31"',
      stabilization: 'OIS',
      features: [
      'IMX586',
      'IMX689',
      'IMX789',
      'S',
      'S'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Macro',
      'Micro',
      '122掳 FOV',
      '120掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.4',
      focalLength: '111mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'HP3',
      '5x',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.2',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'AF',
      '4K video',
      'face unlock',
      'H'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'ProRes'
    ],
    imageFeatures: [
    'AI Scene Optimization'
    ],
  },

  {
    id: 'realme-gt-8-1',
    name: 'Realme GT 8',
    brand: 'Realme',
    releaseDate: '2022-09',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM6',
      'ISOCELL HM1',
      'ISOCELL HM2',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '16mm',
      sensorSize: '1/3.06"',
      stabilization: '-',
      features: [
      'HDR',
      '120掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '81mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'telephoto',
      '3x',
      'p'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '67mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2x',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'EIS',
      'HDR',
      'face unlock',
      'Autofocus',
      'PDAF'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Director mode'
    ],
    imageFeatures: [
    'Photo Unblur'
    ],
  },

  {
    id: 'lg-lgg-7-1',
    name: 'LG LG G 7',
    brand: 'LG',
    releaseDate: '2021-01',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM6',
      'ISOCELL HM2'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Micro',
      '122掳 FOV',
      '112掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '52mm',
      sensorSize: '1/3.5"',
      stabilization: 'OIS',
      features: [
      '3x',
      'PDAF',
      'optical zoom',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'Auto focus',
      'EIS',
      'Dual Pixel PDAF'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Zeiss T*'
    ],
    imageFeatures: [
    'Professional Mode'
    ],
  },

  {
    id: 'zte-blade-10',
    name: 'ZTE Blade 10',
    brand: 'ZTE',
    releaseDate: '2024-08',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.63',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'LYT-900',
      'IMX989',
      'IMX890'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      'Macro',
      '112掳 FOV',
      '122掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '70mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '3x',
      'periscope',
      'telephoto'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'EIS',
      'AI',
      'f'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Log'
    ],
    imageFeatures: [
    'AI Enhance'
    ],
  },

  {
    id: 'sony-xperia1-8-1',
    name: 'Sony Xperia 1 8',
    brand: 'Sony',
    releaseDate: '2022-06',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM3',
      'ISOCELL HM1',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2.35"',
      stabilization: '-',
      features: [
      '126掳 FOV',
      'Macro Focus'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '73mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'telephoto',
      '3x'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'PDAF',
      'Dual Pixel',
      'HDR',
      'AF'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Nightography'
    ],
    imageFeatures: [
    'Leica Authentic'
    ],
  },

  {
    id: 'oneplus-oneplus-11-2',
    name: 'OnePlus OnePlus 11',
    brand: 'OnePlus',
    releaseDate: '2022-12',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '24mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'IMX586',
      'Sony Fusion',
      'IMX689',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.3',
      focalLength: '14mm',
      sensorSize: '1/4.4"',
      stabilization: '-',
      features: [
      '118掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '65mm',
      sensorSize: '1/2.51"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2.5x',
      '6x'
      ],
    },
    telephoto2:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '77mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      '3x',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Auto focus',
      '4K',
      '4K 60fps',
      'EIS',
      'OIS'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Log'
    ],
    imageFeatures: [
    'Live Photo'
    ],
  },

  {
    id: 'oneplus-oneplus-11-3',
    name: 'OnePlus OnePlus 11',
    brand: 'OnePlus',
    releaseDate: '2022-12',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'LYT-901',
      'IMX989',
      'LYT-900'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/3.14"',
      stabilization: '-',
      features: [
      'Macro',
      'HDR',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.8',
      focalLength: '135mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'HP9'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.0',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'face unlock',
      'Dynamic photo'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Portrait Video'
    ],
    imageFeatures: [
    'Monochrome'
    ],
  },

  {
    id: 'oneplus-oneplus-12',
    name: 'OnePlus OnePlus 12',
    brand: 'OnePlus',
    releaseDate: '2023-08',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM3',
      'ISOCELL HM2',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'RYYB',
      'Cine',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '80mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2.5x',
      'portrait',
      '2',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Dual Pixel',
      'HDR',
      'AF'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'HDR10'
    ],
    imageFeatures: [
    'Object Eraser'
    ],
  },

  {
    id: 'meizu-meizunote-7-1',
    name: 'Meizu Meizu Note 7',
    brand: 'Meizu',
    releaseDate: '2021-02',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.6',
      focalLength: '24mm',
      sensorSize: '1/1.3"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'LYT-900',
      'IMX906',
      'GNV',
      'OV50K',
      'LYT-901'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/3.06"',
      stabilization: '-',
      features: [
      'Macro',
      '123掳 FOV',
      '120掳 FOV',
      'H'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.6',
      focalLength: '100mm',
      sensorSize: '1/2.6"',
      stabilization: 'OIS',
      features: [
      '2x',
      'telephoto macro',
      '3x',
      '4x',
      '6x'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/3.06"',
      stabilization: 'Sensor-shift',
      features: [
      'HDR',
      'Bokeh Mode',
      'face ID',
      'Dual Capture',
      'Center Stage'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'AI Cinema'
    ],
    imageFeatures: [
    'Leica Vibrant'
    ],
  },

  {
    id: 'nokia-nokiaxr-11-3',
    name: 'Nokia Nokia XR 11',
    brand: 'Nokia',
    releaseDate: '2025-07',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '23mm',
      sensorSize: '1/1.35"',
      stabilization: 'OIS',
      features: [
      'OV50H',
      'ISOCELL HP2',
      'LYT-818',
      'IMX989'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Macro',
      '112掳 FOV',
      '120掳 FOV',
      '122掳 FOV',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.4',
      focalLength: '111mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      '4x',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      '4K',
      'EIS'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Log'
    ],
    imageFeatures: [
    'Object Eraser'
    ],
  },

  {
    id: 'honor-magicultimate-12-1',
    name: 'Honor Magic Ultimate 12',
    brand: 'Honor',
    releaseDate: '2026-07',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.88',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'IMX906',
      'GNV',
      'GN1'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '13mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Macro Focus',
      'Autofocus',
      '126掳 FOV',
      '123掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '81mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'telephoto',
      'portrait',
      '3',
      '3'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Auto focus',
      'Autofocus',
      'HDR',
      '4K 60fps',
      'EIS'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'HDR10'
    ],
    imageFeatures: [
    'Time-lapse'
    ],
  },

  {
    id: 'asus-zenfonepro-9-1',
    name: 'ASUS ZenFone Pro 9',
    brand: 'ASUS',
    releaseDate: '2023-04',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX789',
      'IMX689',
      'Sony Fusion',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/3.06"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.8',
      focalLength: '90mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      '5x',
      'PDAF',
      'periscope',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.0',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Dynamic photo',
      'face unlock',
      'HDR',
      'AF',
      'A'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Leica film style'
    ],
    imageFeatures: [
    'Magic Editor'
    ],
  },

  {
    id: 'nothing-nothingphone-12-5',
    name: 'Nothing Nothing Phone+ 12+',
    brand: 'Nothing',
    releaseDate: '2026-06',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'GW3',
      'GW1'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/1.95"',
      stabilization: '-',
      features: [
      'AI',
      '150掳 FOV',
      'Freeform',
      '126掳 FOV',
      '122掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.6',
      focalLength: '111mm',
      sensorSize: '1/2.51"',
      stabilization: 'OIS',
      features: [
      '3x',
      'PDAF',
      '3.5x',
      'periscope',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'face unlock',
      'HDR',
      'AI'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Hasselblad color'
    ],
    imageFeatures: [
    'Photo Unblur'
    ],
  },

  {
    id: 'honor-v-8',
    name: 'Honor V 8',
    brand: 'Honor',
    releaseDate: '2022-06',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'IMX682',
      'GW2'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '16mm',
      sensorSize: '1/3.06"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV',
      'HDR',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '65mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2.5x',
      '2x',
      'P',
      'P'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.5',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'AF',
      'HDR'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'AI video enhancement'
    ],
    imageFeatures: [
    'Magic Eraser'
    ],
  },

  {
    id: 'vivo-x-7',
    name: 'vivo X 7',
    brand: 'vivo',
    releaseDate: '2021-04',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM3'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'AI',
      'Macro',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/4.0',
      focalLength: '70mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '6x',
      'periscope',
      '4x',
      '10x',
      'PDAF'
      ],
    },
    telephoto2:     {
      megapixels: '50MP',
      aperture: 'f/2.6',
      focalLength: '90mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      '2x',
      'telephoto macro',
      '3.5x',
      '4x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'EIS',
      'AI',
      'face unlock'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'AI Color Correction'
    ],
    imageFeatures: [
    'AI Enhance'
    ],
  },

  {
    id: 'nothing-nothingphone-7-3',
    name: 'Nothing Nothing Phone 7',
    brand: 'Nothing',
    releaseDate: '2021-09',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'GW2',
      'GW1',
      'GW3',
      'IMX682',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/3.14"',
      stabilization: '-',
      features: [
      'AI',
      'Macro',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/3.5',
      focalLength: '70mm',
      sensorSize: '1/2.75"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '3x',
      '4x',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '73mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'telephoto',
      'portrait',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AF',
      '4K',
      'face unlock',
      'video',
      'PDAF'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'AI video enhancement'
    ],
    imageFeatures: [
    'ProRAW'
    ],
  },

  {
    id: 'lg-lgvelvet-6-1',
    name: 'LG LG Velvet 6',
    brand: 'LG',
    releaseDate: '2020-12',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'OV50K',
      'OV50H'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      'Super Steady',
      'Autofocus'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '90mm',
      sensorSize: '1/2.51"',
      stabilization: 'OIS',
      features: [
      '5x',
      '4x',
      'portrait',
      '6x',
      '3.5x'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/2.2',
      focalLength: '70mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'HP9',
      'periscope',
      '5x',
      'HP5',
      'HP3'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Dual PD',
      'face unlock',
      'HDR',
      'A',
      'A'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'LOG'
    ],
    imageFeatures: [
    'Smart HDR'
    ],
  },

  {
    id: 'lg-lgv-12',
    name: 'LG LG V 12',
    brand: 'LG',
    releaseDate: '2026-05',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM2',
      'ISOCELL HM3',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '15mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Macro',
      'AI',
      '120掳 FOV',
      'H',
      'H'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'telephoto',
      '3x',
      'p',
      'p'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '50mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2.5x'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.4',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      '4K video',
      'AF'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Night Sight Video'
    ],
    imageFeatures: [
    'AI Enhance'
    ],
  },

  {
    id: 'nothing-nothingphone-6-4',
    name: 'Nothing Nothing Phone+ 6+',
    brand: 'Nothing',
    releaseDate: '2020-11',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.67"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM6',
      'ISOCELL HM1',
      'ISOCELL HM2'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/2.75"',
      stabilization: '-',
      features: [
      'Micro',
      '114掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/3.5',
      focalLength: '230mm',
      sensorSize: '1/2.51"',
      stabilization: 'OIS',
      features: [
      '5x',
      '10x',
      'periscope',
      'telephoto macro',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.2',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      '4K video',
      'HDR',
      'Autofocus',
      'face unlock',
      'A'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Pro mode'
    ],
    imageFeatures: [
    'Panorama'
    ],
  },

  {
    id: 'lenovo-legionphone-9-2',
    name: 'Lenovo Legion Phone 9',
    brand: 'Lenovo',
    releaseDate: '2023-05',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM6',
      'ISOCELL HM1',
      'ISOCELL HM2'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '15mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'HDR',
      'AI',
      'Macro',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3.5"',
      stabilization: 'OIS',
      features: [
      '2x',
      'portrait',
      'optical zoom',
      'Tetraprism',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.45',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'face unlock',
      'Autofocus',
      'HDR',
      'AF',
      '4'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Action mode'
    ],
    imageFeatures: [
    'Magic Eraser'
    ],
  },

  {
    id: 'motorola-gpower-7',
    name: 'Motorola G Power 7',
    brand: 'Motorola',
    releaseDate: '2021-02',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.7',
      focalLength: '24mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP2',
      'IMX989',
      'OV50K',
      'OV50H',
      'LYT-808'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'AI',
      'Macro',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '52mm',
      sensorSize: '1/3.5"',
      stabilization: 'OIS',
      features: [
      'Tetraprism',
      'portrait',
      'optical zoom',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'HDR',
      'AI',
      'E',
      'E'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'LOG'
    ],
    imageFeatures: [
    'Professional Mode'
    ],
  },

  {
    id: 'oneplus-oneplusnord-5-1',
    name: 'OnePlus OnePlus Nord 5',
    brand: 'OnePlus',
    releaseDate: '2022-07',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'IMX789',
      'IMX689',
      'IMX586',
      'S',
      'S'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/3.14"',
      stabilization: '-',
      features: [
      'AI',
      'HDR',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '67mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'Tetraprism',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'AI',
      'face unlock',
      'HDR',
      'E'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'Director mode'
    ],
    imageFeatures: [
    'Food mode'
    ],
  },

  {
    id: 'google-pixelxl-5xl',
    name: 'Google Pixel XL 5 XL',
    brand: 'Google',
    releaseDate: '2020-03',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.68',
      focalLength: '23mm',
      sensorSize: '1"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'GNV',
      'OV50A',
      'IMX920',
      'GN1',
      'LYT-901'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '12mm',
      sensorSize: '1/2.4"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '126掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '111mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '6x',
      'periscope',
      '3.5x',
      '4x',
      '5x'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/2.2',
      focalLength: '90mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      '4x',
      'HP5'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.45',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'video',
      'PDAF'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'ProRes'
    ],
    imageFeatures: [
    'Watermark'
    ],
  },

  {
    id: 'meizu-meizupro-11-1',
    name: 'Meizu Meizu Pro 11',
    brand: 'Meizu',
    releaseDate: '2025-11',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '24mm',
      sensorSize: '1/1.28"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX586',
      'IMX789',
      'Sony Fusion'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/1.95"',
      stabilization: '-',
      features: [
      'Micro',
      '114掳 FOV',
      '122掳 FOV',
      'AI'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '81mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'periscope',
      '3x',
      'telephoto',
      'p',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AI',
      'HDR',
      'EIS',
      'f',
      'f'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Director mode'
    ],
    imageFeatures: [
    'XMAGE'
    ],
  },

  {
    id: 'huawei-novapro-7',
    name: 'Huawei Nova Pro 7',
    brand: 'Huawei',
    releaseDate: '2021-09',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP5',
      'IMX989',
      'ISOCELL HP2',
      'LYT-808'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      '128掳 FOV',
      '119掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'HP9',
      'periscope',
      '3.5x',
      'HP3',
      '5x'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.9',
      focalLength: '21mm',
      sensorSize: '1/3.2"',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'HDR',
      'Center Stage',
      'PDAF',
      'Cinematic mode'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'AI Cinema'
    ],
    imageFeatures: [
    'Magic Eraser'
    ],
  },

  {
    id: 'realme-gt-11',
    name: 'Realme GT 11',
    brand: 'Realme',
    releaseDate: '2025-09',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'Sony Fusion',
      'IMX586',
      'IMX789',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '16mm',
      sensorSize: '1/5"',
      stabilization: '-',
      features: [
      '118掳 FOV',
      '120掳 FOV',
      '106掳 FOV',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '65mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'PDAF',
      '5x',
      '3.5x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'face unlock',
      'Autofocus'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Slow Motion'
    ],
    imageFeatures: [
    'Ultra HDR'
    ],
  },

  {
    id: 'realme-narzo-12',
    name: 'Realme Narzo 12',
    brand: 'Realme',
    releaseDate: '2026-07',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'LYT-818',
      'ISOCELL HP3'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/1.8"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro',
      'A',
      'A',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '72mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      '2x',
      'optical zoom',
      '3x',
      'P',
      'P'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '80mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'EIS',
      'HDR'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'OIS+EIS'
    ],
    imageFeatures: [
    'Leica Authentic'
    ],
  },

  {
    id: 'apple-iphone-2018',
    name: 'Apple iPhone 2018',
    brand: 'Apple',
    releaseDate: '2020-10',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.35"',
      stabilization: 'OIS',
      features: [
      'OV50K',
      'IMX906',
      'GNV',
      'LYT-808',
      'GN1'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.7',
      focalLength: '14mm',
      sensorSize: '1/2.35"',
      stabilization: 'Quad PD',
      features: [
      '126掳 FOV',
      'Macro Focus'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3.5"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'Tetraprism'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/2.4"',
      stabilization: 'OIS',
      features: [
      '5x',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.45',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Dual Pixel',
      'PDAF',
      '4K',
      'video',
      'face unlock'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'AI video enhancement'
    ],
    imageFeatures: [
    'HDR+'
    ],
  },

  {
    id: 'meizu-meizu-8-2',
    name: 'Meizu Meizu 8',
    brand: 'Meizu',
    releaseDate: '2022-11',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.78',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'IMX890',
      'LYT-900'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '12mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      '126掳 FOV',
      '120掳 FOV',
      'Micro'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '85mm',
      sensorSize: '1/2.6"',
      stabilization: 'OIS',
      features: [
      'periscope',
      '4x'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'face unlock',
      'wide-angle'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'ACES'
    ],
    imageFeatures: [
    'AI beauty'
    ],
  },

  {
    id: 'asus-rogphone-11',
    name: 'ASUS ROG Phone 11',
    brand: 'ASUS',
    releaseDate: '2025-01',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.67"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM2'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'Cine',
      'Macro',
      'RYYB'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '70mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2.5x',
      '2x',
      'P',
      'P'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '52mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      '2x',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.45',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'face unlock',
      'AF',
      'HDR'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'OIS+EIS'
    ],
    imageFeatures: [
    'Leica filters'
    ],
  },

  {
    id: 'apple-iphoneplus-2022plus-1',
    name: 'Apple iPhone Plus 2022 Plus',
    brand: 'Apple',
    releaseDate: '2024-01',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.4',
      focalLength: '24mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'IMX906',
      'GN1',
      'IMX920',
      'LYT-818',
      'OV50A'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '13mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      'Autofocus',
      '126掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.8',
      focalLength: '60mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '5x',
      'PDAF',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'EIS',
      'HDR'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'HDR10+'
    ],
    imageFeatures: [
    'AI Enhance'
    ],
  },

  {
    id: 'honor-honor-11',
    name: 'Honor HONOR 11',
    brand: 'Honor',
    releaseDate: '2025-08',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '23mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'GW2',
      'IMX682'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'HDR',
      'AI',
      '120掳 FOV',
      'M',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '60mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '3x',
      'portrait',
      '3.5x'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/2.2',
      focalLength: '135mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'HP9',
      'HP5'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.5',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Dynamic photo',
      'HDR'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'EIS'
    ],
    imageFeatures: [
    'Watermark'
    ],
  },

  {
    id: 'asus-rogphone-10-3',
    name: 'ASUS ROG Phone 10',
    brand: 'ASUS',
    releaseDate: '2024-06',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.67"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM2',
      'ISOCELL HM3'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/2.6"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.8',
      focalLength: '77mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'PDAF',
      '3x',
      '2x',
      'optical zoom'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/2.6',
      focalLength: '90mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      'HP9'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.2',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f',
      'f'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'EIS'
    ],
    imageFeatures: [
    'Portrait Mode'
    ],
  },

  {
    id: 'sony-xperiapro-11-1',
    name: 'Sony Xperia Pro 11',
    brand: 'Sony',
    releaseDate: '2025-11',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.52"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM6'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/2.5"',
      stabilization: '-',
      features: [
      '114掳 FOV',
      '123掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.2',
      focalLength: '90mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      'continuous optical zoom',
      'HP5',
      'telephoto macro'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.6',
      focalLength: '60mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      '3x',
      'portrait',
      '3.5x',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.4',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H',
      'H'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Zeiss Cinematic'
    ],
    imageFeatures: [
    'Long exposure'
    ],
  },

  {
    id: 'sony-xperia5-10-2',
    name: 'Sony Xperia 5 10',
    brand: 'Sony',
    releaseDate: '2024-03',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '24mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'IMX689',
      'IMX789',
      'IMX586',
      'S'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '123掳 FOV',
      'Autofocus'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      '5x',
      'HP5',
      '3.5x',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'face unlock',
      'AI'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'AI Video'
    ],
    imageFeatures: [
    'Zeiss optics'
    ],
  },

  {
    id: 'huawei-puraultra-6-1',
    name: 'Huawei Pura Ultra 6',
    brand: 'Huawei',
    releaseDate: '2020-02',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/1.35"',
      stabilization: 'OIS',
      features: [
      'LYT-901',
      'LYT-900',
      'OV50H'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'RYYB',
      '120掳 FOV',
      'Cine',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '80mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      'portrait',
      '2x',
      'P',
      'P'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AI',
      'EIS',
      'face unlock',
      'H'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Zeiss Cinematic'
    ],
    imageFeatures: [
    'Macro mode'
    ],
  },

  {
    id: 'oppo-renopro-8-1',
    name: 'OPPO Reno Pro 8',
    brand: 'OPPO',
    releaseDate: '2022-08',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'GN2',
      'LYT-901',
      'OV50K',
      'OV50H',
      'IMX989'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/2.35"',
      stabilization: '-',
      features: [
      '126掳 FOV',
      '123掳 FOV',
      '120掳 FOV',
      'Autofocus'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.8',
      focalLength: '111mm',
      sensorSize: '1/2.64"',
      stabilization: 'OIS',
      features: [
      '3x',
      '4x',
      'telephoto macro',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '21mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      'Autofocus',
      'HDR'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Dolby Vision'
    ],
    imageFeatures: [
    'Pixel Shift'
    ],
  },

  {
    id: 'nothing-nothingphone-7-4',
    name: 'Nothing Nothing Phone+ 7+',
    brand: 'Nothing',
    releaseDate: '2021-02',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.4',
      focalLength: '24mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'LYT-900',
      'LYT-818'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.7',
      focalLength: '12mm',
      sensorSize: '1/2"',
      stabilization: 'Quad PD',
      features: [
      'Macro Focus',
      '123掳 FOV',
      '126掳 FOV',
      'Autofocus',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.67',
      focalLength: '90mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      'continuous optical zoom',
      'periscope',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'AI',
      'Autofocus',
      'face unlock',
      'PDAF'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Cinematic mode'
    ],
    imageFeatures: [
    'Smart HDR'
    ],
  },

  {
    id: 'huawei-puraultra-9',
    name: 'Huawei Pura Ultra 9',
    brand: 'Huawei',
    releaseDate: '2023-04',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '23mm',
      sensorSize: '1/2"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX789',
      'IMX689',
      'Sony Fusion',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '16mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '122掳 FOV',
      '120掳 FOV',
      'Macro',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      '2x',
      'optical zoom',
      '3x',
      'P',
      'P'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.5',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'face unlock',
      'AF',
      'Autofocus',
      'D'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'HDR10+'
    ],
    imageFeatures: [
    'Object Eraser'
    ],
  },

  {
    id: 'zte-axon-9',
    name: 'ZTE Axon 9',
    brand: 'ZTE',
    releaseDate: '2023-07',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'GW1'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '13mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Macro Focus',
      'Autofocus',
      '126掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '3x',
      'optical zoom',
      'PDAF'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/3.5',
      focalLength: '60mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF',
      'periscope',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '21mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      'face unlock',
      'Dual PD',
      'Autofocus',
      'H',
      'H'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'AI Color Correction'
    ],
    imageFeatures: [
    'AI Remove'
    ],
  },

  {
    id: 'nokia-nokiaxr-8-3',
    name: 'Nokia Nokia XR 8',
    brand: 'Nokia',
    releaseDate: '2022-12',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.63',
      focalLength: '23mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'OV50H',
      'IMX989',
      'GNV',
      'GN1'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV',
      'HDR',
      'A',
      'A'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'telephoto',
      'periscope',
      'portrait',
      '3'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '70mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      'portrait',
      '2x',
      'P',
      'P'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '26mm',
      sensorSize: '1/3.6"',
      stabilization: 'Sensor-shift',
      features: [
      'Center Stage',
      'Cinematic mode',
      'HDR'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Apple Log'
    ],
    imageFeatures: [
    'Ultra HDR'
    ],
  },

  {
    id: 'google-pixela-11a-3',
    name: 'Google Pixel A 11 a',
    brand: 'Google',
    releaseDate: '2026-04',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '24mm',
      sensorSize: '1/1.31"',
      stabilization: 'OIS',
      features: [
      'IMX586',
      'Sony Fusion',
      'IMX789'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      'Macro',
      '112掳 FOV',
      '120掳 FOV',
      'Micro'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '65mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2.5x'
      ],
    },
    telephoto2:     {
      megapixels: '50MP',
      aperture: 'f/2.8',
      focalLength: '70mm',
      sensorSize: '1/2.64"',
      stabilization: 'OIS',
      features: [
      'periscope',
      '2x',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.45',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AI',
      'face unlock',
      'EIS',
      'PDAF',
      'Autofocus'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Super Steady'
    ],
    imageFeatures: [
    'AI beauty'
    ],
  },

  {
    id: 'samsung-galaxyzfold-7',
    name: 'Samsung Galaxy Z Fold 7',
    brand: 'Samsung',
    releaseDate: '2021-12',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '23mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'IMX689',
      'Sony Fusion'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/1.8',
      focalLength: '12mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Macro',
      'Cine'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.67',
      focalLength: '85mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      'HP3',
      'telephoto macro',
      '4x'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '1/3.06"',
      stabilization: 'OIS',
      features: [
      'Center Stage',
      'Dual Capture',
      'face ID',
      'HDR'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Super Resolution'
    ],
    imageFeatures: [
    'XD Fusion'
    ],
  },

  {
    id: 'sony-xperia5-6-1',
    name: 'Sony Xperia 5 6',
    brand: 'Sony',
    releaseDate: '2020-01',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX789',
      'IMX586',
      'IMX689',
      'S',
      'S'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '15mm',
      sensorSize: '1/1.95"',
      stabilization: '-',
      features: [
      'AI',
      '119掳 FOV',
      '150掳 FOV',
      '120掳 FOV',
      '126掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '70mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      'periscope',
      '3x',
      '2.5x'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '1/3.6"',
      stabilization: 'AF',
      features: [
      'face ID',
      'PDAF',
      'Autofocus',
      'Cinematic mode',
      'HDR'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'LOG'
    ],
    imageFeatures: [
    'Photo Unblur'
    ],
  },

  {
    id: 'nokia-nokiag-8-1',
    name: 'Nokia Nokia G 8',
    brand: 'Nokia',
    releaseDate: '2022-01',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'GW3',
      'GW2',
      'GW1',
      'IMX682',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      'HDR',
      '123掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x',
      'portrait',
      '2'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '77mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF',
      'optical zoom',
      '3'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: 'Sensor-shift',
      features: [
      'Center Stage',
      'Cinematic mode'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    '6K 30fps'
    ],
    imageFeatures: [
    'Hasselblad Natural Color'
    ],
  },

  {
    id: 'oneplus-onepluspro-14pro-3',
    name: 'OnePlus OnePlus Pro 14 Pro',
    brand: 'OnePlus',
    releaseDate: '2025-04',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '24mm',
      sensorSize: '1/1.35"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'LYT-900'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'AI',
      '120掳 FOV',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '73mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'telephoto',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'EIS',
      'HDR'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    '8K recording'
    ],
    imageFeatures: [
    'Astrophotography'
    ],
  },

  {
    id: 'vivo-xpro-11-1',
    name: 'vivo X Pro 11',
    brand: 'vivo',
    releaseDate: '2025-08',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.52"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM6'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.3',
      focalLength: '17mm',
      sensorSize: '1/3.2"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '112掳 FOV',
      '118掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '81mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      '3x',
      'portrait'
      ],
    },
    telephoto2:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '111mm',
      sensorSize: '1/2.52"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'periscope',
      'portrait',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'Dynamic photo'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'AI Cinema'
    ],
    imageFeatures: [
    'AI Enhance'
    ],
  },

  {
    id: 'honor-magicpro-6',
    name: 'Honor Magic Pro 6',
    brand: 'Honor',
    releaseDate: '2020-05',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.6',
      focalLength: '24mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'LYT-901',
      'IMX989',
      'LYT-818',
      'ISOCELL HP2',
      'OV50H'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '14mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      'Macro Focus',
      '126掳 FOV',
      '123掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '52mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'Tetraprism',
      'optical zoom',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '1/3.1"',
      stabilization: 'Dual PD',
      features: [
      'Dual PD',
      'Autofocus',
      'HDR',
      'f',
      'f'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'ACES'
    ],
    imageFeatures: [
    'Dual Capture'
    ],
  },

  {
    id: 'apple-iphonepro-2024pro-1',
    name: 'Apple iPhone Pro 2024 Pro',
    brand: 'Apple',
    releaseDate: '2026-01',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'GW2',
      'IMX686',
      'GW3',
      'IMX682',
      'G'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '12mm',
      sensorSize: '1/1.95"',
      stabilization: '-',
      features: [
      'Macro',
      '122掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2.5x'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      '4K video',
      'HDR'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'ProRes RAW'
    ],
    imageFeatures: [
    'Portrait Mode'
    ],
  },

  {
    id: 'honor-magic-8-1',
    name: 'Honor Magic 8',
    brand: 'Honor',
    releaseDate: '2022-09',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'IMX682',
      'GW1'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      'Macro Focus',
      '126掳 FOV',
      'Autofocus'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.6',
      focalLength: '77mm',
      sensorSize: '1/3.2"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '52mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      '2x',
      'optical zoom',
      '3x',
      'P',
      'P'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.5',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'Autofocus',
      'PDAF',
      'face unlock',
      'wide-angle'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'HDR10'
    ],
    imageFeatures: [
    'Astrophotography'
    ],
  },

  {
    id: 'nothing-nothingphone-9',
    name: 'Nothing Nothing Phone+ 9+',
    brand: 'Nothing',
    releaseDate: '2023-04',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.5',
      focalLength: '24mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'LYT-808',
      'IMX920',
      'LYT-818',
      'GNV',
      'IMX890'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '122掳 FOV',
      'Macro',
      'Micro',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.6',
      focalLength: '52mm',
      sensorSize: '1/3.2"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      '3x',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/3.5',
      focalLength: '60mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '5x',
      'PDAF',
      '2x',
      'periscope',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'EIS',
      'AI',
      'HDR',
      'f'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    '6K 30fps'
    ],
    imageFeatures: [
    'Food mode'
    ],
  },

  {
    id: 'zte-blade-12-1',
    name: 'ZTE Blade 12',
    brand: 'ZTE',
    releaseDate: '2026-08',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'GW2',
      'GW1',
      'GW3'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '122掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '3x',
      'telephoto',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.2',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'LOG'
    ],
    imageFeatures: [
    'HDR+'
    ],
  },

  {
    id: 'oppo-a-6',
    name: 'OPPO A 6',
    brand: 'OPPO',
    releaseDate: '2020-06',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '24mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'IMX689',
      'Sony Fusion'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/1.8"',
      stabilization: '-',
      features: [
      'AI',
      '120掳 FOV',
      'M',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '77mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      '3x',
      '2x',
      'optical zoom',
      'PDAF',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'EIS'
    ],
    imageFeatures: [
    'Best Take'
    ],
  },

  {
    id: 'xiaomi-pocox-9',
    name: 'Xiaomi POCO X 9',
    brand: 'Xiaomi',
    releaseDate: '2023-04',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.89',
      focalLength: '24mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'IMX682'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.3',
      focalLength: '14mm',
      sensorSize: '1/3.2"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '120掳 FOV',
      '106掳 FOV',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '70mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2.5x',
      'PDAF',
      '2'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      '2x',
      'optical zoom',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'Dolby Vision'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    '10-bit HDR'
    ],
    imageFeatures: [
    'Macro mode'
    ],
  },

  {
    id: 'meizu-meizupro-12',
    name: 'Meizu Meizu Pro 12',
    brand: 'Meizu',
    releaseDate: '2026-06',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'GW2',
      'IMX686'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '15mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      '122掳 FOV',
      '112掳 FOV',
      '120掳 FOV',
      'Micro',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '67mm',
      sensorSize: '1/3.5"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'Tetraprism'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/2.6',
      focalLength: '70mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      '3x',
      'HP5',
      'HP3'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.45',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AF',
      'face unlock',
      'HDR',
      '4K video',
      'A'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'HDR10+'
    ],
    imageFeatures: [
    'Pixel Shift'
    ],
  },

  {
    id: 'honor-honor-10',
    name: 'Honor HONOR 10',
    brand: 'Honor',
    releaseDate: '2024-01',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.78',
      focalLength: '24mm',
      sensorSize: '1/1.3"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX789',
      'Sony Fusion'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'Macro',
      'Cine'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '72mm',
      sensorSize: '1/4"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'optical zoom',
      '3x',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.45',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'PDAF',
      'HDR',
      'face unlock',
      'Autofocus'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    '8K recording'
    ],
    imageFeatures: [
    'Zeiss Cinematic'
    ],
  },

  {
    id: 'honor-honorpro-11',
    name: 'Honor HONOR Pro 11',
    brand: 'Honor',
    releaseDate: '2025-02',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.31"',
      stabilization: 'OIS',
      features: [
      'IMX789',
      'IMX689',
      'Sony Fusion',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Macro Focus',
      '126掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.8',
      focalLength: '135mm',
      sensorSize: '1/2.4"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'portrait',
      '3x'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '52mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      '2x',
      'optical zoom',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'HDR',
      'wide-angle',
      'PDAF'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Hasselblad color'
    ],
    imageFeatures: [
    'Leica Vibrant'
    ],
  },

  {
    id: 'sony-xperiapro-11-2',
    name: 'Sony Xperia Pro 11',
    brand: 'Sony',
    releaseDate: '2025-02',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP9',
      'LYT-900',
      'LYT-818'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Macro Focus',
      '123掳 FOV',
      '126掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '50mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '50mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'PDAF',
      '2.5x',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.4',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f',
      'f',
      'f'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'Nightography'
    ],
    imageFeatures: [
    'Magic Editor'
    ],
  },

  {
    id: 'motorola-thinkphone-12-1',
    name: 'Motorola ThinkPhone 12',
    brand: 'Motorola',
    releaseDate: '2026-09',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM6',
      'ISOCELL HM3',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV',
      '112掳 FOV',
      '122掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '67mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      '3x',
      'portrait',
      'PDAF',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '70mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      '2x',
      '2.5x',
      'portrait',
      'P',
      'P'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.0',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'Autofocus',
      'face unlock',
      'AF',
      'D'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'ProRes RAW'
    ],
    imageFeatures: [
    'Time-lapse'
    ],
  },

  {
    id: 'vivo-iqooneo-8',
    name: 'vivo iQOO Neo 8',
    brand: 'vivo',
    releaseDate: '2022-09',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'OV50K',
      'LYT-818'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Macro',
      'AI',
      '120掳 FOV',
      'H'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.67',
      focalLength: '85mm',
      sensorSize: '1/1.22"',
      stabilization: 'OIS',
      features: [
      'telephoto macro',
      '3x',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'Sensor-shift',
      features: [
      'Dual Capture',
      'Center Stage'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'ACES'
    ],
    imageFeatures: [
    'Document mode'
    ],
  },

  {
    id: 'asus-zenfonepro-8',
    name: 'ASUS ZenFone Pro 8',
    brand: 'ASUS',
    releaseDate: '2022-07',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'GW1',
      'GW3',
      'IMX686'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/2.75"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      '126掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/3.5',
      focalLength: '70mm',
      sensorSize: '1/2.52"',
      stabilization: 'OIS',
      features: [
      'periscope',
      '2x'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/2.6',
      focalLength: '135mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'continuous optical zoom',
      '3.5x'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '25mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'EIS',
      'HDR',
      'AI',
      'f',
      'f'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'AI Color Correction'
    ],
    imageFeatures: [
    'Astrophotography'
    ],
  },

  {
    id: 'lenovo-legionphone-12-2',
    name: 'Lenovo Legion Phone 12',
    brand: 'Lenovo',
    releaseDate: '2026-03',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM2'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      'Autofocus',
      '114掳 FOV',
      'Stills',
      '112掳 FOV',
      'Super Steady'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/3.0',
      focalLength: '70mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      '3x',
      'continuous optical zoom',
      'periscope',
      '3.5x'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'HDR',
      'Dynamic photo',
      'Autofocus',
      'face unlock'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    'LOG'
    ],
    imageFeatures: [
    'Watermark'
    ],
  },

  {
    id: 'vivo-y-6-1',
    name: 'vivo Y 6',
    brand: 'vivo',
    releaseDate: '2020-04',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.28"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX586',
      'IMX689',
      'IMX789',
      'S'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/2.35"',
      stabilization: '-',
      features: [
      '126掳 FOV',
      '123掳 FOV',
      '120掳 FOV',
      'Macro Focus'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '65mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      '3x',
      'periscope',
      'portrait',
      't',
      't'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'PDAF',
      'Autofocus',
      'EIS',
      'HDR'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'AI Motion'
    ],
    imageFeatures: [
    'Best Take'
    ],
  },

  {
    id: 'oneplus-oneplusr-12r-1',
    name: 'OnePlus OnePlus R 12R',
    brand: 'OnePlus',
    releaseDate: '2023-04',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '23mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP5',
      'ISOCELL HP3',
      'LYT-808',
      'ISOCELL HP9'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/2.75"',
      stabilization: '-',
      features: [
      'AI',
      '115掳 FOV',
      '114掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '32MP',
      aperture: 'f/2.6',
      focalLength: '50mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      'PDAF',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'wide-angle',
      'HDR',
      'face unlock',
      'EIS'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'AI Cinema'
    ],
    imageFeatures: [
    'Magic Eraser'
    ],
  },

  {
    id: 'lg-lgvelvet-6-2',
    name: 'LG LG Velvet 6',
    brand: 'LG',
    releaseDate: '2020-01',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'IMX686',
      'GW1',
      'GW3',
      'GW2'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.3',
      focalLength: '12mm',
      sensorSize: '1/5"',
      stabilization: '-',
      features: [
      '112掳 FOV',
      '106掳 FOV',
      '120掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '52mm',
      sensorSize: '1/3.2"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF',
      'portrait',
      '3x'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '3x',
      '2x',
      'o',
      'o'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Dual PD',
      'HDR',
      'Autofocus',
      'f',
      'f'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'Pro mode'
    ],
    imageFeatures: [
    'Watermark'
    ],
  },

  {
    id: 'honor-magicpro-9',
    name: 'Honor Magic Pro 9',
    brand: 'Honor',
    releaseDate: '2023-06',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.78',
      focalLength: '24mm',
      sensorSize: '1/1.28"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'LYT-808',
      'GN2',
      'IMX890',
      'OV50H',
      'OV50K'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2.35"',
      stabilization: '-',
      features: [
      '126掳 FOV',
      'Macro Focus'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '50mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'Tetraprism',
      'optical zoom'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.0',
      focalLength: '65mm',
      sensorSize: '1/2.7"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      'PDAF',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.2',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'face unlock',
      'Autofocus',
      '4K video',
      'HDR',
      'A'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Pro mode'
    ],
    imageFeatures: [
    'Pro mode RAW'
    ],
  },

  {
    id: 'apple-iphonepromax-2023promax-1',
    name: 'Apple iPhone Pro Max 2023 Pro Max',
    brand: 'Apple',
    releaseDate: '2025-10',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.5',
      focalLength: '23mm',
      sensorSize: '1/1.43"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX989',
      'OV50K'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '15mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Macro',
      'HDR',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '52mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'portrait'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.5',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'Autofocus',
      'Dynamic photo',
      'HDR'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Leica film style'
    ],
    imageFeatures: [
    'Food mode'
    ],
  },

  {
    id: 'apple-iphonese-2017se-1',
    name: 'Apple iPhone SE 2017 SE',
    brand: 'Apple',
    releaseDate: '2023-04',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM6',
      'ISOCELL HM2',
      'ISOCELL HM3',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Macro',
      'AI',
      '1',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.6',
      focalLength: '50mm',
      sensorSize: '1/3.2"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'EIS',
      '4K 60fps',
      'OIS',
      'AF'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Vivo V3 chip'
    ],
    imageFeatures: [
    'Monochrome'
    ],
  },

  {
    id: 'apple-iphoneplus-2024plus',
    name: 'Apple iPhone Plus 2024 Plus',
    brand: 'Apple',
    releaseDate: '2026-06',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1/1.7"',
      stabilization: 'OIS',
      features: [
      'GW3',
      'GW1',
      'IMX686',
      'GW2',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      'Micro',
      '122掳 FOV',
      '120掳 FOV',
      '112掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '77mm',
      sensorSize: '1/3.94"',
      stabilization: 'OIS',
      features: [
      '2x',
      'optical zoom',
      'portrait',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.4',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H',
      'H',
      'H',
      'H'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'HDR10'
    ],
    imageFeatures: [
    'AI Enhance'
    ],
  },

  {
    id: 'sony-xperia1-10-1',
    name: 'Sony Xperia 1 10',
    brand: 'Sony',
    releaseDate: '2024-07',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.88',
      focalLength: '23mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'GNV',
      'IMX890',
      'LYT-901',
      'GN2'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/2.75"',
      stabilization: '-',
      features: [
      'AI',
      '119掳 FOV',
      'Micro',
      '115掳 FOV',
      '150掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '72mm',
      sensorSize: '1/3.2"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2x',
      'PDAF',
      '3x',
      'o'
      ],
    },
    frontCamera:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'AI'
      ],
    },
    videoMax: '8K 24fps',
    videoFeatures: [
    '10-bit HDR'
    ],
    imageFeatures: [
    'Pro mode RAW'
    ],
  },

  {
    id: 'huawei-mate-9',
    name: 'Huawei Mate 9',
    brand: 'Huawei',
    releaseDate: '2023-01',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM2'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '13mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'AI',
      '120掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'telephoto',
      '3x',
      'portrait',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.2',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'HDR',
      'Autofocus',
      'AF'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Dolby Vision'
    ],
    imageFeatures: [
    'Time-lapse'
    ],
  },

  {
    id: 'honor-magicultimate-6',
    name: 'Honor Magic Ultimate 6',
    brand: 'Honor',
    releaseDate: '2020-06',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.88',
      focalLength: '24mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'GNV',
      'IMX920'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '16mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Super Steady',
      '114掳 FOV',
      'Autofocus',
      '112掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.6',
      focalLength: '50mm',
      sensorSize: '1/3.2"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'face unlock',
      'AF'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'ProRes'
    ],
    imageFeatures: [
    'Zeiss optics'
    ],
  },

  {
    id: 'oneplus-oneplusultra-10ultra',
    name: 'OnePlus OnePlus Ultra 10 Ultra',
    brand: 'OnePlus',
    releaseDate: '2021-07',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/1.5',
      focalLength: '24mm',
      sensorSize: '1/1.12"',
      stabilization: 'OIS',
      features: [
      'LYT-900',
      'IMX989',
      'ISOCELL HP3',
      'ISOCELL HP2'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '12mm',
      sensorSize: '1/1.8"',
      stabilization: '-',
      features: [
      'AI',
      '120掳 FOV',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.8',
      focalLength: '135mm',
      sensorSize: '1/1.5"',
      stabilization: 'OIS',
      features: [
      '4x',
      'HP3'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '80mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'portrait',
      'PDAF',
      '2x',
      '2',
      '2'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.2',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Slow Motion'
    ],
    imageFeatures: [
    'Portrait Mode'
    ],
  },

  {
    id: 'honor-magicpro-12',
    name: 'Honor Magic Pro 12',
    brand: 'Honor',
    releaseDate: '2026-08',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.52"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM3',
      'ISOCELL HM1',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.3',
      focalLength: '13mm',
      sensorSize: '1/4"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '106掳 FOV',
      '118掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '72mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF',
      '2x',
      '3'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.9',
      focalLength: '26mm',
      sensorSize: '1/3.6"',
      stabilization: '-',
      features: [
      'Center Stage',
      'HDR',
      'Cinematic mode',
      'Bokeh Mode'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Zeiss Cinematic'
    ],
    imageFeatures: [
    'XD Fusion'
    ],
  },

  {
    id: 'realme-gtmaster-9',
    name: 'Realme GT Master 9',
    brand: 'Realme',
    releaseDate: '2023-01',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.3"',
      stabilization: 'OIS',
      features: [
      'IMX789',
      'IMX689',
      'IMX586'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '13mm',
      sensorSize: '1/2.4"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      '126掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '50mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      'portrait',
      'optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.0',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'Dual PD',
      features: [
      'Autofocus',
      'Dual PD',
      'face unlock'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'AI Video'
    ],
    imageFeatures: [
    'AI Scene Optimization'
    ],
  },

  {
    id: 'vivo-x-11-3',
    name: 'vivo X 11',
    brand: 'vivo',
    releaseDate: '2025-12',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM3',
      'ISOCELL HM1',
      'ISOCELL HM6',
      'I',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      'HDR'
      ],
    },
    telephoto1:     {
      megapixels: '50MP',
      aperture: 'f/2.0',
      focalLength: '111mm',
      sensorSize: '1/2.75"',
      stabilization: 'OIS',
      features: [
      '10x',
      '3x',
      '5x',
      'PDAF',
      'telephoto macro'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '24mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'PDAF'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Pro mode'
    ],
    imageFeatures: [
    'AI Photo Edit'
    ],
  },

  {
    id: 'meizu-meizunote-12',
    name: 'Meizu Meizu Note 12',
    brand: 'Meizu',
    releaseDate: '2026-08',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP2',
      'LYT-900',
      'ISOCELL HP5',
      'OV50K',
      'ISOCELL HP9'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/2.7"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV',
      'Cine',
      'R',
      'R'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.2',
      focalLength: '77mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      '2x',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '22mm',
      sensorSize: '1/3.1"',
      stabilization: '-',
      features: [
      'Dual PD',
      'HDR'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Optical Flow'
    ],
    imageFeatures: [
    'Macro mode'
    ],
  },

  {
    id: 'lenovo-legionphone-12-3',
    name: 'Lenovo Legion Phone 12',
    brand: 'Lenovo',
    releaseDate: '2026-03',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'IMX689',
      'IMX586',
      'IMX789',
      'S'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/2.8"',
      stabilization: '-',
      features: [
      'Super Steady',
      '120掳 FOV',
      '114掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '72mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      '2x',
      'optical zoom',
      'PDAF'
      ],
    },
    telephoto2:     {
      megapixels: '200MP',
      aperture: 'f/2.8',
      focalLength: '111mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'HP9',
      '5x',
      'telephoto macro',
      'HP5',
      'continuous optical zoom'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/2.0',
      focalLength: '26mm',
      sensorSize: '1/3.6"',
      stabilization: 'AF',
      features: [
      'face ID',
      'HDR'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Apple Log'
    ],
    imageFeatures: [
    'Watermark'
    ],
  },

  {
    id: 'nokia-nokiag-11',
    name: 'Nokia Nokia G 11',
    brand: 'Nokia',
    releaseDate: '2025-02',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'IMX586',
      'IMX789'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'AI',
      '120掳 FOV',
      'M',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '65mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'telephoto',
      '3x'
      ],
    },
    telephoto2:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '81mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'periscope',
      '3x',
      'portrait',
      't',
      't'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AI',
      'face unlock'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Apple Log'
    ],
    imageFeatures: [
    'Macro mode'
    ],
  },

  {
    id: 'xiaomi-redminote-9-1',
    name: 'Xiaomi Redmi Note 9',
    brand: 'Xiaomi',
    releaseDate: '2023-03',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.4',
      focalLength: '23mm',
      sensorSize: '1/1.43"',
      stabilization: 'OIS',
      features: [
      'OV50K',
      'GNV'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.0',
      focalLength: '14mm',
      sensorSize: '1/2.7"',
      stabilization: '-',
      features: [
      'Macro',
      'Cine',
      'RYYB',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '72mm',
      sensorSize: '1/3.52"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '2x',
      'PDAF',
      '3x',
      'o'
      ],
    },
    frontCamera:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '21mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'HDR',
      'AI',
      'E'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Portrait Video'
    ],
    imageFeatures: [
    'Dual Capture'
    ],
  },

  {
    id: 'honor-magicultimate-6-1',
    name: 'Honor Magic Ultimate 6',
    brand: 'Honor',
    releaseDate: '2020-01',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.9',
      focalLength: '24mm',
      sensorSize: '1/2"',
      stabilization: 'Sensor-shift OIS',
      features: [
      'IMX586',
      'IMX689',
      'IMX789',
      'S',
      'S'
      ],
    },
    ultrawide:     {
      megapixels: '8MP',
      aperture: 'f/2.3',
      focalLength: '16mm',
      sensorSize: '1/4"',
      stabilization: '-',
      features: [
      '118掳 FOV',
      '120掳 FOV',
      '106掳 FOV',
      '1'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.6',
      focalLength: '65mm',
      sensorSize: '1/2.4"',
      stabilization: 'OIS',
      features: [
      '3.5x',
      'PDAF',
      '3x',
      'periscope',
      '2.5x'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Autofocus',
      'Dual Capture'
      ],
    },
    videoMax: '8K 60fps',
    videoFeatures: [
    'Zeiss Cinematic'
    ],
    imageFeatures: [
    'Best Take'
    ],
  },

  {
    id: 'realme-gtpro-11',
    name: 'Realme GT Pro 11',
    brand: 'Realme',
    releaseDate: '2025-04',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HP5',
      'ISOCELL HP3',
      'LYT-900'
      ],
    },
    ultrawide:     {
      megapixels: '50MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/2.75"',
      stabilization: '-',
      features: [
      'Macro',
      '114掳 FOV',
      '115掳 FOV',
      '128掳 FOV',
      '150掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/2.4',
      focalLength: '70mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'periscope',
      '3x',
      '5x',
      'portrait'
      ],
    },
    telephoto2:     {
      megapixels: '50MP',
      aperture: 'f/4.0',
      focalLength: '111mm',
      sensorSize: '1/2.5"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      'portrait',
      '3x',
      'PDAF',
      '3.5x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'HDR',
      'f'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Apple Log'
    ],
    imageFeatures: [
    'Panorama'
    ],
  },

  {
    id: 'asus-zenfone-10-1',
    name: 'ASUS ZenFone 10',
    brand: 'ASUS',
    releaseDate: '2024-11',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/2.0',
      focalLength: '24mm',
      sensorSize: '1/1.52"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM6',
      'ISOCELL HM3',
      'I'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.0',
      focalLength: '15mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      'HDR',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.67',
      focalLength: '100mm',
      sensorSize: '1/1.56"',
      stabilization: 'OIS',
      features: [
      'HP5',
      'HP9'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.2',
      focalLength: '135mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      '5x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.4',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H'
      ],
    },
    videoMax: '8K 30fps',
    videoFeatures: [
    'Zeiss T*'
    ],
    imageFeatures: [
    'HDR+'
    ],
  },

  {
    id: 'apple-iphone-2021',
    name: 'Apple iPhone 2021',
    brand: 'Apple',
    releaseDate: '2023-01',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/1.31"',
      stabilization: 'OIS',
      features: [
      'Sony Fusion',
      'IMX586',
      'IMX689'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/1.8',
      focalLength: '12mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'RYYB',
      'Macro',
      'C'
      ],
    },
    telephoto1:     {
      megapixels: '48MP',
      aperture: 'f/3.5',
      focalLength: '70mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      '5x',
      'portrait',
      'periscope',
      '2.5x',
      '3x'
      ],
    },
    frontCamera:     {
      megapixels: '5MP',
      aperture: 'f/2.0',
      focalLength: '-',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'H',
      'H'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Super Resolution'
    ],
    imageFeatures: [
    'Pro mode RAW'
    ],
  },

  {
    id: 'realme-narzo-12-1',
    name: 'Realme Narzo 12',
    brand: 'Realme',
    releaseDate: '2026-08',
    mainCamera:     {
      megapixels: '200MP',
      aperture: 'f/2.0',
      focalLength: '23mm',
      sensorSize: '1"',
      stabilization: 'OIS',
      features: [
      'IMX989',
      'LYT-808'
      ],
    },
    ultrawide:     {
      megapixels: '40MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/1.7"',
      stabilization: '-',
      features: [
      'Cine',
      '120掳 FOV',
      'RYYB',
      'M'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.2',
      focalLength: '77mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '3x',
      'optical zoom',
      'PDAF',
      '2'
      ],
    },
    telephoto2:     {
      megapixels: '48MP',
      aperture: 'f/2.4',
      focalLength: '135mm',
      sensorSize: '1/2.25"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '3.5x'
      ],
    },
    frontCamera:     {
      megapixels: '12MP',
      aperture: 'f/1.9',
      focalLength: '22mm',
      sensorSize: '1/3.06"',
      stabilization: 'Sensor-shift',
      features: [
      'Dual Capture',
      'Dolby Vision',
      'PDAF',
      'Cinematic mode'
      ],
    },
    videoMax: '4K 30fps',
    videoFeatures: [
    'Zeiss Cinematic'
    ],
    imageFeatures: [
    'AI portrait'
    ],
  },

  {
    id: 'lenovo-lenovo-6-2',
    name: 'Lenovo Lenovo 6',
    brand: 'Lenovo',
    releaseDate: '2020-08',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.9',
      focalLength: '23mm',
      sensorSize: '1/1.14"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM1',
      'ISOCELL HM3',
      'ISOCELL HM2'
      ],
    },
    ultrawide:     {
      megapixels: '16MP',
      aperture: 'f/2.2',
      focalLength: '14mm',
      sensorSize: '1/3.06"',
      stabilization: '-',
      features: [
      '123掳 FOV',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '200MP',
      aperture: 'f/2.6',
      focalLength: '90mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'HP9',
      'periscope'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.4',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AF',
      '4K video',
      'face unlock'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'Hasselblad color'
    ],
    imageFeatures: [
    'Document mode'
    ],
  },

  {
    id: 'xiaomi-pocox-12',
    name: 'Xiaomi POCO X 12',
    brand: 'Xiaomi',
    releaseDate: '2026-09',
    mainCamera:     {
      megapixels: '48MP',
      aperture: 'f/1.6',
      focalLength: '23mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'Sony Fusion',
      'IMX689'
      ],
    },
    ultrawide:     {
      megapixels: '12MP',
      aperture: 'f/2.4',
      focalLength: '12mm',
      sensorSize: '1/2.6"',
      stabilization: '-',
      features: [
      '120掳 FOV',
      'Super Steady',
      'Autofocus'
      ],
    },
    telephoto1:     {
      megapixels: '10MP',
      aperture: 'f/2.4',
      focalLength: '72mm',
      sensorSize: '1/3"',
      stabilization: 'OIS',
      features: [
      'portrait',
      '3x',
      'optical zoom',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.4',
      focalLength: '23mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'AF',
      'face unlock'
      ],
    },
    videoMax: '4K 200fps',
    videoFeatures: [
    'Action mode'
    ],
    imageFeatures: [
    'AI Photo Edit'
    ],
  },

  {
    id: 'tcl-tcl40-10',
    name: 'TCL TCL 40 10',
    brand: 'TCL',
    releaseDate: '2024-11',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.72"',
      stabilization: 'OIS',
      features: [
      'GW3',
      'GW2'
      ],
    },
    ultrawide:     {
      megapixels: '64MP',
      aperture: 'f/2.0',
      focalLength: '13mm',
      sensorSize: '1/2"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV'
      ],
    },
    telephoto1:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '50mm',
      sensorSize: '1/3.6"',
      stabilization: 'OIS',
      features: [
      'PDAF',
      '2x',
      'optical zoom',
      '3'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.2',
      focalLength: '20mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'face unlock',
      'PDAF',
      '4K'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'Hasselblad color'
    ],
    imageFeatures: [
    'AI Scene Optimization'
    ],
  },

  {
    id: 'xiaomi-xiaomi-11',
    name: 'Xiaomi Xiaomi 11',
    brand: 'Xiaomi',
    releaseDate: '2025-04',
    mainCamera:     {
      megapixels: '50MP',
      aperture: 'f/1.9',
      focalLength: '35mm',
      sensorSize: '1/1.4"',
      stabilization: 'OIS',
      features: [
      'GN2',
      'LYT-900',
      'OV50H'
      ],
    },
    ultrawide:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '12mm',
      sensorSize: '1/3.4"',
      stabilization: '-',
      features: [
      '122掳 FOV',
      '120掳 FOV',
      'Macro'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '81mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'periscope',
      'telephoto',
      '3x',
      'p'
      ],
    },
    frontCamera:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: '-',
      features: [
      'Dual Pixel',
      'AF',
      'Autofocus',
      'video',
      'HDR'
      ],
    },
    videoMax: '1080p 240fps',
    videoFeatures: [
    'Cine'
    ],
    imageFeatures: [
    'Zeiss optics'
    ],
  },

  {
    id: 'nothing-nothingphone-10-3',
    name: 'Nothing Nothing Phone 10',
    brand: 'Nothing',
    releaseDate: '2024-06',
    mainCamera:     {
      megapixels: '108MP',
      aperture: 'f/1.8',
      focalLength: '23mm',
      sensorSize: '1/1.33"',
      stabilization: 'OIS',
      features: [
      'ISOCELL HM2',
      'ISOCELL HM3'
      ],
    },
    ultrawide:     {
      megapixels: '48MP',
      aperture: 'f/1.8',
      focalLength: '12mm',
      sensorSize: '1/2.55"',
      stabilization: '-',
      features: [
      'Autofocus',
      '120掳 FOV',
      'Macro Focus'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.4',
      focalLength: '73mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'telephoto',
      '3x',
      'periscope',
      'p',
      'p'
      ],
    },
    telephoto2:     {
      megapixels: '32MP',
      aperture: 'f/2.8',
      focalLength: '65mm',
      sensorSize: '1/2.8"',
      stabilization: 'OIS',
      features: [
      '2.5x',
      'portrait',
      '2x'
      ],
    },
    frontCamera:     {
      megapixels: '20MP',
      aperture: 'f/2.4',
      focalLength: '22mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      '4K video',
      'AF',
      'HDR',
      'Autofocus'
      ],
    },
    videoMax: '4K 120fps',
    videoFeatures: [
    'Pro mode'
    ],
    imageFeatures: [
    'Leica Vibrant'
    ],
  },

  {
    id: 'lg-lgg-10-2',
    name: 'LG LG G 10',
    brand: 'LG',
    releaseDate: '2024-04',
    mainCamera:     {
      megapixels: '64MP',
      aperture: 'f/1.8',
      focalLength: '24mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'GW2',
      'IMX686',
      'GW1'
      ],
    },
    ultrawide:     {
      megapixels: '32MP',
      aperture: 'f/2.4',
      focalLength: '14mm',
      sensorSize: '1/3"',
      stabilization: '-',
      features: [
      'Macro',
      '120掳 FOV',
      'AI',
      'H',
      'H'
      ],
    },
    telephoto1:     {
      megapixels: '64MP',
      aperture: 'f/2.8',
      focalLength: '65mm',
      sensorSize: '1/2"',
      stabilization: 'OIS',
      features: [
      'telephoto',
      'periscope',
      'portrait',
      '3'
      ],
    },
    telephoto2:     {
      megapixels: '8MP',
      aperture: 'f/2.4',
      focalLength: '77mm',
      sensorSize: '1/4.4"',
      stabilization: 'OIS',
      features: [
      'optical zoom',
      'PDAF'
      ],
    },
    frontCamera:     {
      megapixels: '13MP',
      aperture: 'f/2.2',
      focalLength: '26mm',
      sensorSize: '-',
      stabilization: 'AF',
      features: [
      'face unlock',
      'Dynamic photo',
      'HDR'
      ],
    },
    videoMax: '4K 60fps',
    videoFeatures: [
    'AI video enhancement'
    ],
    imageFeatures: [
    'Monochrome'
    ],
  },
];

export const brands = [...new Set(phonesData.map(p => p.brand))];

export function getPhoneById(id: string): PhoneCamera | undefined {
  return phonesData.find(p => p.id === id);
}

export function getPhonesByBrand(brand: string): PhoneCamera[] {
  return phonesData.filter(p => p.brand === brand);
}

