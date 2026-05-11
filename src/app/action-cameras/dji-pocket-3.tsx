import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import ProductRating from '@/components/ProductRating';
import { Camera, Battery, Star, Wifi, Aperture } from 'lucide-react';

export const metadata: Metadata = {
  title: '大疆 Pocket 3 深度评测 | 相机评测网',
  description: '大疆Pocket 3详细评测：一英寸传感器、旋转屏、云台防抖、智能跟随。2024年最值得购买的Vlog相机。',
  keywords: '大疆Pocket 3, DJI Pocket 3, Vlog相机, 手持云台',
};

const specs = [
  { icon: Camera, label: '传感器', value: '1英寸 CMOS' },
  { icon: Aperture, label: '光圈', value: 'f/1.8' },
  { icon: Camera, label: '分辨率', value: '4K/120fps' },
  { icon: Battery, label: '续航', value: '约166分钟' },
  { icon: Wifi, label: '图传', value: 'O4图传，最远20km' },
];

const features = [
  {
    title: '一英寸大底传感器',
    description: '相比前代大幅升级的传感器尺寸，带来更好的暗光表现和动态范围',
    rating: 5,
  },
  {
    title: '旋转触摸屏',
    description: '全新2英寸旋转屏设计，开机方式更直观，操控更便捷',
    rating: 5,
  },
  {
    title: '三轴云台防抖',
    description: '机械云台加持，拍摄画面如丝般顺滑，优于电子防抖',
    rating: 5,
  },
  {
    title: '智能跟随6.0',
    description: 'AI智能跟焦，可精准识别并跟踪人物、宠物等目标',
    rating: 4,
  },
  {
    title: '立体声收音',
    description: '内置三麦克风阵列，支持Audio DJ功能，收音效果出色',
    rating: 4,
  },
];

const scenarios = [
  { name: '日常Vlog', rating: 5, desc: '轻巧便携，自带云台防抖，非常适合日常记录' },
  { name: '旅行拍摄', rating: 5, desc: '一英寸传感器风景表现出色，续航持久' },
  { name: '美食探店', rating: 5, desc: '智能跟焦功能让美食拍摄更轻松' },
  { name: '运动拍摄', rating: 3, desc: '适合轻度运动，不适合极限运动场景' },
  { name: '水下拍摄', rating: 2, desc: '需额外购买防水壳，不推荐水下使用' },
];

const accessories = [
  { name: 'DJI Mic 2', price: '¥1,499', desc: '无线麦克风，音质出色' },
  { name: 'DJI Pocket 3保护壳', price: '¥199', desc: '专用收纳盒，便携安全' },
  { name: '增广镜', price: '¥299', desc: '110°超广角视野' },
  { name: '防水壳', price: '¥499', desc: '60米防水深度' },
  { name: '续航手柄', price: '¥399', desc: '延长续航至约260分钟' },
];

const prosCons = {
  pros: [
    '一英寸传感器，画质出色',
    '旋转屏设计，操作直观',
    '云台防抖效果顶级',
    '智能跟随功能实用',
    '续航时间长',
  ],
  cons: [
    '价格较高',
    '不耐摔，需要小心保护',
    '极限运动场景不适用',
    '没有内置存储',
  ],
};

export default function DjiPocket3Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center gap-2 text-sm text-orange-600 mb-3">
            <span className="bg-orange-100 px-2 py-1 rounded">深度评测</span>
            <span>2024年1月10日</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">大疆 Pocket 3 评测</h1>
          <p className="text-lg text-gray-600 mb-4">重新定义Vlog相机，一英寸大底+旋转屏+云台防抖的完美结合</p>
          <ProductRating rating={4.9} reviewCount={856} />
        </div>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">产品亮点</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              大疆Pocket 3是一台重新定义的云台相机。它将一英寸传感器、旋转触摸屏、
              强大的AI智能跟随功能完美融合，成为2024年最受关注的Vlog神器。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {specs.map((spec, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                  <spec.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-500 mb-1">{spec.label}</p>
                  <p className="font-semibold text-gray-900">{spec.value}</p>
                </div>
              ))}
            </div>
          </section>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">功能体验</h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < feature.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">使用场景推荐</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {scenarios.map((scenario, index) => (
                <div key={index} className="bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-gray-900">{scenario.name}</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < scenario.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{scenario.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <AdPlaceholder slot="article-bottom" className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">配件推荐</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {accessories.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                  <span className="text-blue-600 font-semibold">{item.price}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">优缺点总结</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-3">优点</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {prosCons.pros.map((pro, index) => (
                    <li key={index}>{pro}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-bold text-red-800 mb-3">缺点</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {prosCons.cons.map((con, index) => (
                    <li key={index}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">总结</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                大疆Pocket 3是2024年最值得购买的Vlog相机之一。它的一英寸传感器带来出色的画质表现，
                旋转屏设计和智能跟随功能让拍摄更加便捷，云台防抖更是业界顶级水平。
                虽然价格较高，但对于追求高品质Vlog的用户来说，Pocket 3绝对是物超所值的选择。
              </p>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
}