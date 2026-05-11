import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import ProductRating from '@/components/ProductRating';
import { Camera, Battery, Star, Wifi, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insta360 X4 评测 | 8K全景运动相机 | 相机评测网',
  description: 'Insta360 X4详细评测：8K全景录制、隐形自拍杆、360度拍摄。2024年最强大的全景运动相机。',
  keywords: 'Insta360 X4, 全景相机, 8K视频, 360度拍摄, 运动相机',
};

const specs = [
  { icon: Camera, label: '传感器', value: '1/2" x2' },
  { icon: Camera, label: '最大分辨率', value: '8K/30fps' },
  { icon: Battery, label: '续航', value: '约135分钟' },
  { icon: Shield, label: '防水', value: '裸机10米' },
  { icon: Wifi, label: '存储', value: 'microSD卡槽' },
];

const features = [
  {
    title: '8K全景录制',
    description: '业界首款消费级8K全景相机，画质细腻，裁切空间大',
    rating: 5,
  },
  {
    title: '5.7K/60fps高帧率',
    description: '支持5.7K 60fps慢动作录制，捕捉更多精彩瞬间',
    rating: 5,
  },
  {
    title: '隐形自拍杆',
    description: 'AI算法自动消除自拍杆，实现第三方视角跟拍',
    rating: 5,
  },
  {
    title: 'FlowState防抖',
    description: '升级版FlowState防抖算法，剧烈运动下依然平稳',
    rating: 5,
  },
  {
    title: '手势控制',
    description: '支持手势控制拍摄，方便快捷',
    rating: 4,
  },
  {
    title: 'AI剪辑',
    description: 'AI自动识别人物主体，智能构图跟拍',
    rating: 4,
  },
];

const scenarios = [
  { name: '极限运动', rating: 5, desc: '360度全景捕捉，再也不怕错过最佳角度' },
  { name: '旅行记录', rating: 5, desc: '先拍摄后取景，后期自由度高' },
  { name: '滑雪/冲浪', rating: 5, desc: '完美记录运动过程，后期可追踪动作' },
  { name: '日常Vlog', rating: 4, desc: '适合进阶用户，新手需要时间适应' },
  { name: '水下拍摄', rating: 4, desc: '10米防水深度，配合潜水壳可深潜' },
];

const accessories = [
  { name: '隐形自拍杆', price: '标配', desc: '最长1.3米，拍摄时完全消失' },
  { name: '潜水壳', price: '¥699', desc: '60米防水深度，专为潜水设计' },
  { name: '摩托车支架', price: '¥299', desc: '车把/头盔专用，安装简便' },
  { name: '车载吸盘支架', price: '¥199', desc: '车顶/车窗固定，驾驶视角拍摄' },
  { name: '子弹时间绳盒', price: '¥399', desc: '低速环绕特效拍摄' },
];

const prosCons = {
  pros: [
    '业界首款8K全景相机',
    '画质出色，后期空间大',
    '隐形自拍杆效果惊艳',
    'FlowState防抖顶级',
    'AI剪辑功能实用',
  ],
  cons: [
    '机身发热明显',
    '电池续航一般',
    '不支持HDR 8K录制',
    '价格较高',
    '需要配合App使用才能发挥全部功能',
  ],
};

export default function Insta360X4Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center gap-2 text-sm text-orange-600 mb-3">
            <span className="bg-orange-100 px-2 py-1 rounded">深度评测</span>
            <span>2024年1月8日</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Insta360 X4 评测</h1>
          <p className="text-lg text-gray-600 mb-4">8K全景运动相机，画质与防抖的完美结合</p>
          <ProductRating rating={4.6} reviewCount={423} />
        </div>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">产品亮点</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Insta360 X4是Insta360最新发布的全景运动相机，作为业界首款消费级8K全景相机，
              它将全景拍摄带入了一个全新的高度。配合升级的FlowState防抖和AI智能功能，
              X4成为2024年极限运动和旅行拍摄的最佳选择之一。
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">核心功能</h2>
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
                Insta360 X4是2024年最值得购买的全景运动相机。它首创的8K全景录制、
                升级的FlowState防抖和AI智能功能，让用户可以轻松拍摄专业级别的全景内容。
                虽然存在发热和续航的问题，但瑕不掩瑜，X4依然是极限运动爱好者和旅行达人的最佳选择。
              </p>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
}