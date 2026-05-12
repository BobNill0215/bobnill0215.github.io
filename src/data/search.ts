export interface SearchItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  href: string;
  tags: string[];
}

export const searchIndex: SearchItem[] = [
  // 数码相机
  {
    id: 'cameras-main',
    title: '数码相机评测',
    excerpt: '专业微单、单反、全画幅相机详细评测报告',
    content: '数码相机 微单 单反 全画幅 索尼 佳能 尼康 富士 评测 购买',
    category: '数码相机',
    href: '/cameras',
    tags: ['数码相机', '微单', '单反', '全画幅'],
  },
  {
    id: 'best-cameras-2024',
    title: '2026年最佳数码相机推荐排行榜',
    excerpt: '入门级到专业级相机推荐，热门品牌对比',
    content: '最佳相机推荐 2026 索尼A7V 佳能R6V 尼康Z6III 富士X-T5 入门级 专业级 购买指南',
    category: '选购指南',
    href: '/cameras/best-cameras-2024',
    tags: ['最佳', '推荐', '排行榜', '2026'],
  },
  {
    id: 'sony-a7v-review',
    title: '索尼 A7 V 全画幅微单深度评测',
    excerpt: '33MP部分堆叠传感器，AI对焦，Pre-burst预拍',
    content: '索尼A7V 全画幅 33MP 部分堆叠 AI对焦 759点 30fps 人体姿态识别 车辆识别 飞机识别',
    category: '深度评测',
    href: '/cameras/sony-a7v-review',
    tags: ['索尼', 'Sony', 'A7V', '全画幅'],
  },
  {
    id: 'canon-r6v-review',
    title: 'Canon EOS R6 V 深度评测',
    excerpt: '32.5MP，7K RAW，40fps连拍，2026年影像旗舰',
    content: '佳能R6V 32.5MP 7K RAW 40fps 连拍 预拍 动作优先对焦 眼控对焦',
    category: '深度评测',
    href: '/cameras/canon-r6v-review',
    tags: ['佳能', 'Canon', 'R6V', '全画幅'],
  },
  {
    id: 'nikon-z6iii-review',
    title: '尼康 Z6 III 性价比之王',
    excerpt: '部分堆叠传感器，8级防抖，专业级对焦',
    content: '尼康Z6III 24.5MP 部分堆叠 8级防抖 -10EV对焦 9种主体识别 6K视频',
    category: '专业评测',
    href: '/cameras/nikon-z6iii-review',
    tags: ['尼康', 'Nikon', 'Z6III', '性价比'],
  },
  {
    id: 'fuji-xt5-review',
    title: '富士 X-T5 复古旗舰APS-C相机',
    excerpt: '40.2MP像素，40种胶片模拟，经典复古设计',
    content: '富士X-T5 40.2MP APS-C 胶片模拟 复古 7级防抖 19种滤镜',
    category: '深度评测',
    href: '/cameras/fuji-xt5-review',
    tags: ['富士', 'Fujifilm', 'X-T5', 'APS-C'],
  },
  {
    id: 'nikon-z8-review',
    title: '尼康 Z8 专业级全画幅微单',
    excerpt: '旗舰级性能，8K视频，专业摄影师首选',
    content: '尼康Z8 45.7MP 8K 60fps 20fps 旗舰 专业',
    category: '专业评测',
    href: '/cameras/nikon-z8-review',
    tags: ['尼康', 'Z8', '旗舰', '8K'],
  },
  {
    id: 'sony-vs-canon-vs-nikon',
    title: '索尼 vs 佳能 vs 尼康 全画幅对比',
    excerpt: '三大品牌旗舰微单横向对比评测',
    content: '索尼 佳能 尼康 对比 全画幅 微单 评测',
    category: '对比评测',
    href: '/cameras/sony-vs-canon-vs-nikon',
    tags: ['对比', '横评', '索尼', '佳能', '尼康'],
  },
  {
    id: 'canon-r50-review',
    title: '佳能 EOS R50 入门级微单',
    excerpt: '高性价比，触摸操作，适合新手摄影爱好者',
    content: '佳能R50 入门级 高性价比 触摸屏 新手',
    category: '入门评测',
    href: '/cameras/canon-r50-review',
    tags: ['佳能', 'R50', '入门'],
  },
  {
    id: 'camera-database',
    title: '数码相机数据库',
    excerpt: '收录20款2025-2026热门数码相机详细参数',
    content: '相机数据库 参数对比 索尼 佳能 尼康 富士 传感器 视频 防抖',
    category: '数据库',
    href: '/camera-database',
    tags: ['数据库', '参数', '对比'],
  },
  {
    id: 'camera-compare',
    title: '数码相机参数对比',
    excerpt: '选择最多4部相机进行详细对比',
    content: '相机对比 参数比较 传感器 视频 防抖 对焦',
    category: '工具',
    href: '/camera-compare',
    tags: ['对比', '参数', '工具'],
  },

  // 手机相机
  {
    id: 'smartphone-cameras-main',
    title: '手机相机评测',
    excerpt: '旗舰手机拍照能力全面对比',
    content: '手机相机 拍照 旗舰 iPhone 三星 小米 华为',
    category: '手机相机',
    href: '/smartphone-cameras',
    tags: ['手机', '拍照', '相机'],
  },
  {
    id: 'iphone-vs-samsung',
    title: 'iPhone vs 三星 拍照对比',
    excerpt: '苹果vs三星，拍照哪个好，旗舰手机相机对比',
    content: 'iPhone 三星 Galaxy 苹果 三星 拍照对比 旗舰',
    category: '对比评测',
    href: '/smartphone-cameras/iphone-vs-samsung',
    tags: ['iPhone', '三星', '对比'],
  },
  {
    id: 'best-camera-phones-2024',
    title: '2024年最佳拍照手机推荐',
    excerpt: '旗舰手机拍照能力全面对比',
    content: '最佳拍照手机 iPhone 三星 小米 华为 vivo OPPO',
    category: '选购指南',
    href: '/smartphone-cameras/best-camera-phones-2024',
    tags: ['最佳', '拍照手机', '推荐'],
  },
  {
    id: 'xiaomi-14-ultra',
    title: '小米14 Ultra 评测',
    excerpt: '徕卡合作，1英寸传感器，强劲拍照能力',
    content: '小米14 Ultra 徕卡 1英寸 200MP',
    category: '深度评测',
    href: '/smartphone-cameras/xiaomi-14-ultra',
    tags: ['小米', 'Xiaomi', 'Ultra'],
  },
  {
    id: 'huawei-p70-pro',
    title: '华为 P70 Pro 评测',
    excerpt: 'XMAGE影像，可变光圈',
    content: '华为 P70 P70 Pro XMAGE 可变光圈 RYYB',
    category: '深度评测',
    href: '/smartphone-cameras/huawei-p70-pro',
    tags: ['华为', 'Huawei', 'P70'],
  },
  {
    id: 'pixel-9-pro',
    title: 'Google Pixel 9 Pro 评测',
    excerpt: 'AI摄影，计算摄影，超强夜拍',
    content: 'Pixel 9 Pro Google AI 夜拍 计算摄影',
    category: '深度评测',
    href: '/smartphone-cameras/pixel-9-pro',
    tags: ['Google', 'Pixel', 'AI'],
  },
  {
    id: 'vivo-x100-pro',
    title: 'vivo X100 Pro 评测',
    excerpt: '蔡司光学，T*镀膜，专业人像',
    content: 'vivo X100 Pro 蔡司 T*镀膜 人像',
    category: '深度评测',
    href: '/smartphone-cameras/vivo-x100-pro',
    tags: ['vivo', '蔡司', '人像'],
  },
  {
    id: 'phone-database',
    title: '手机相机数据库',
    excerpt: '收录12款2026年旗舰手机拍照参数',
    content: '手机数据库 iPhone Samsung Xiaomi Vivo OPPO 传感器 像素 变焦',
    category: '数据库',
    href: '/phone-database',
    tags: ['数据库', '手机', '参数'],
  },

  // 运动相机
  {
    id: 'action-cameras-main',
    title: '运动相机评测',
    excerpt: 'Vlog、极限运动拍摄利器评测',
    content: '运动相机 GoPro 大疆 Insta360 Vlog 极限',
    category: '运动相机',
    href: '/action-cameras',
    tags: ['运动相机', 'Vlog', '极限'],
  },
  {
    id: 'gopro-vs-dji',
    title: 'GoPro vs 大疆 Action 对比',
    excerpt: '运动相机旗舰对决，防抖测试，画质对比',
    content: 'GoPro 大疆 DJI Action 对比 防抖 画质',
    category: '对比评测',
    href: '/action-cameras/gopro-vs-dji',
    tags: ['GoPro', '大疆', 'DJI', '对比'],
  },
  {
    id: 'best-action-cameras-2024',
    title: '2024年最佳运动相机推荐',
    excerpt: 'Vlog神器，户外拍摄利器',
    content: '最佳运动相机 GoPro 大疆 Insta360 Vlog',
    category: '选购指南',
    href: '/action-cameras/best-action-cameras-2024',
    tags: ['最佳', '运动相机', '推荐'],
  },
  {
    id: 'dji-pocket-3',
    title: '大疆 Pocket 3 评测',
    excerpt: '1英寸传感器，4K 120fps，智能跟随',
    content: '大疆 DJI Pocket 3 Osmo 1英寸 4K 120fps 智能跟随 云台',
    category: '深度评测',
    href: '/action-cameras/dji-pocket-3',
    tags: ['大疆', 'DJI', 'Pocket', '云台'],
  },
  {
    id: 'gopro-hero-13',
    title: 'GoPro Hero 13 Black 评测',
    excerpt: '5.3K 60fps，HyperSmooth 6.0',
    content: 'GoPro Hero 13 Black 5.3K 60fps HyperSmooth HDR',
    category: '深度评测',
    href: '/action-cameras/gopro-hero-13',
    tags: ['GoPro', 'Hero', '13'],
  },
  {
    id: 'insta360-x4',
    title: 'Insta360 X4 评测',
    excerpt: '8K 360°全景，隐形自拍杆',
    content: 'Insta360 X4 360° 全景 8K 隐形自拍杆',
    category: '深度评测',
    href: '/action-cameras/insta360-x4',
    tags: ['Insta360', '360°', '全景'],
  },
  {
    id: 'action-camera-database',
    title: '运动相机数据库',
    excerpt: '收录13款热门运动相机详细参数',
    content: '运动相机数据库 GoPro 大疆 Insta360 参数',
    category: '数据库',
    href: '/action-camera-database',
    tags: ['数据库', '运动相机', '参数'],
  },
  {
    id: 'action-camera-compare',
    title: '运动相机参数对比',
    excerpt: '选择最多4部运动相机进行详细对比',
    content: '运动相机对比 参数比较 视频 防抖 防水',
    category: '工具',
    href: '/action-camera-compare',
    tags: ['对比', '参数', '工具'],
  },

  // 监控相机
  {
    id: 'security-cameras-main',
    title: '监控相机',
    excerpt: '家用安防智能摄像头推荐',
    content: '监控摄像头 家用安防 萤石 小米 360',
    category: '监控相机',
    href: '/security-cameras',
    tags: ['监控', '安防', '摄像头'],
  },
  {
    id: 'best-home-cameras',
    title: '最佳家用监控摄像头推荐',
    excerpt: '室内户外国产精选，智能安防产品对比',
    content: '家用监控摄像头 室内 户外 萤石 EZVIZ 小米 360',
    category: '选购指南',
    href: '/security-cameras/best-home-cameras',
    tags: ['最佳', '监控', '安防'],
  },

  // 配件
  {
    id: 'accessories-main',
    title: '配件推荐',
    excerpt: '存储卡、镜头、相机包等配件',
    content: '相机配件 存储卡 电池 相机包 三脚架 滤镜',
    category: '配件',
    href: '/accessories',
    tags: ['配件', '存储卡', '电池', '三脚架'],
  },
  {
    id: 'memory-cards',
    title: '存储卡推荐',
    excerpt: '适合4K/8K视频录制的高速存储卡',
    content: '存储卡 SD卡 UHS-II V30 V60 4K 8K',
    category: '配件',
    href: '/accessories/memory-cards',
    tags: ['存储卡', 'SD卡', '视频'],
  },
  {
    id: 'batteries',
    title: '相机电池推荐',
    excerpt: '原装和第三方电池选购指南',
    content: '相机电池 原装 第三方 续航',
    category: '配件',
    href: '/accessories/batteries',
    tags: ['电池', '续航'],
  },
  {
    id: 'camera-bags',
    title: '相机包推荐',
    excerpt: '保护设备安全的相机包选购指南',
    content: '相机包 双肩 单肩 防护',
    category: '配件',
    href: '/accessories/camera-bags',
    tags: ['相机包', '收纳'],
  },
  {
    id: 'tripods',
    title: '三脚架推荐',
    excerpt: '旅行和室内使用的三脚架推荐',
    content: '三脚架 碳纤维 铝合金 旅行 稳定',
    category: '配件',
    href: '/accessories/tripods',
    tags: ['三脚架', '脚架', '稳定'],
  },
  {
    id: 'vlog-kit',
    title: 'Vlog设备套装推荐',
    excerpt: '适合Vlog拍摄的设备套装',
    content: 'Vlog 套装 麦克风 补光灯 稳定器',
    category: '配件',
    href: '/accessories/vlog-kit',
    tags: ['Vlog', '麦克风', '补光灯'],
  },
  {
    id: 'must-have-2024',
    title: '2024年摄影配件必买清单',
    excerpt: '摄影师必备配件推荐',
    content: '摄影配件 必买 清单 存储卡 电池 滤镜',
    category: '配件',
    href: '/accessories/must-have-2024',
    tags: ['必买', '清单', '配件'],
  },

  // 选购指南
  {
    id: 'guides-main',
    title: '选购指南',
    excerpt: '数码相机、运动相机、手机的选购指南',
    content: '选购指南 购买 攻略 如何选择',
    category: '选购指南',
    href: '/guides',
    tags: ['选购', '指南', '购买'],
  },

  // 2026新品资讯
  {
    id: 'canon-r6-v-specs',
    title: 'Canon EOS R6 V 参数配置',
    excerpt: '32.5MP / 7K RAW / 40fps / 2026年5月发布',
    content: 'Canon EOS R6 V 32.5MP 7K RAW 40fps 40fps连拍 预拍摄 动作优先对焦 眼控对焦 6K Open Gate',
    category: '新品速递',
    href: '/cameras/canon-r6v-review',
    tags: ['Canon', 'R6V', '2026', '新品', '7K', '40fps'],
  },
  {
    id: 'samsung-s26-ultra-camera',
    title: 'Samsung Galaxy S26 Ultra 相机评测',
    excerpt: '200MP主摄 f/1.4光圈 AI ISP 2026年旗舰',
    content: 'Samsung Galaxy S26 Ultra 200MP f/1.4光圈 AI ISP Nightography 50MP长焦 10x光学变焦',
    category: '新品速递',
    href: '/smartphone-cameras/best-camera-phones-2024',
    tags: ['Samsung', 'S26', 'Ultra', '200MP', '2026'],
  },
  {
    id: 'xiaomi-17-ultra-camera',
    title: 'Xiaomi 17 Ultra 相机评测',
    excerpt: '1英寸主摄 连续光学变焦4.2x 徕卡合作',
    content: 'Xiaomi 17 Ultra 1英寸 50MP LYT-900 200MP长焦 4.2x连续光学变焦 徕卡 Summilux Photography Kit',
    category: '新品速递',
    href: '/smartphone-cameras/best-camera-phones-2024',
    tags: ['Xiaomi', '17 Ultra', '徕卡', '1英寸'],
  },
  {
    id: 'dji-avata-360-camera',
    title: 'DJI Avata 360 无人机评测',
    excerpt: '8K 60fps HDR 1英寸传感器 20km图传',
    content: 'DJI Avata 360 8K 60fps HDR 1英寸传感器 O4+图传 20km 360°+单镜头 全向避障 Spotlight Free',
    category: '新品速递',
    href: '/action-cameras/best-action-cameras-2024',
    tags: ['DJI', 'Avata', '360', '无人机', '8K'],
  },
  {
    id: 'nikon-70200-vr-s-ii',
    title: '尼康 Z 70-200mm f/2.8 VR S II 评测',
    excerpt: '998g同类最轻 3.5倍快速对焦',
    content: 'Nikon Z 70-200mm f/2.8 VR S II 998g 最轻 3.5倍对焦 SSVCM 6种镜片 防尘防滴',
    category: '镜头评测',
    href: '/cameras/nikon-70200-ii-review',
    tags: ['尼康', 'Nikon', '镜头', '70-200mm'],
  },
  {
    id: 'sigma-35mm-art',
    title: 'Sigma 35mm f/1.4 DG II Art 评测',
    excerpt: '比上代轻20% 双HLA对焦 2026年4月发布',
    content: 'Sigma 35mm f/1.4 DG II Art 比上代轻20% 双HLA 530g 67mm滤镜 最佳光学性能',
    category: '镜头评测',
    href: '/cameras/sony-vs-canon-vs-nikon',
    tags: ['Sigma', '镜头', '35mm', 'Art'],
  },
  {
    id: 'leica-noctilux-35',
    title: 'Leica Noctilux-M 35 f/1.2 ASPH 评测',
    excerpt: '首款35mm Noctilux f/1.2超大光圈',
    content: 'Leica Noctilux-M 35 f/1.2 ASPH 首款35mm Noctilux f/1.2 最近对焦50cm 416g',
    category: '镜头评测',
    href: '/cameras/sony-vs-canon-vs-nikon',
    tags: ['Leica', '徕卡', 'Noctilux', '35mm'],
  },
  {
    id: 'ricoh-gr-iv-mono',
    title: 'Ricoh GR IV Monochrome 评测',
    excerpt: '专用黑白传感器 APS-C 25.7MP',
    content: 'Ricoh GR IV Monochrome 专用黑白 APS-C 25.74MP 无彩色滤波 内置红滤镜',
    category: '深度评测',
    href: '/cameras/nikon-z8-review',
    tags: ['Ricoh', 'GR', '黑白', 'Monochrome'],
  },
];

export function search(query: string): SearchItem[] {
  if (!query.trim()) return [];
  
  const keywords = query.toLowerCase().split(/\s+/);
  
  return searchIndex
    .map(item => {
      const titleLower = item.title.toLowerCase();
      const contentLower = item.content.toLowerCase();
      const tagsLower = item.tags.map(t => t.toLowerCase());
      const excerptLower = item.excerpt.toLowerCase();
      
      let score = 0;
      
      for (const keyword of keywords) {
        // 标题匹配得分最高
        if (titleLower.includes(keyword)) {
          score += 10;
        }
        // 标签匹配
        if (tagsLower.some(tag => tag.includes(keyword))) {
          score += 6;
        }
        // 内容匹配
        if (contentLower.includes(keyword)) {
          score += 4;
        }
        // 摘要匹配
        if (excerptLower.includes(keyword)) {
          score += 2;
        }
      }
      
      return { item, score };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    .map(result => result.item);
}