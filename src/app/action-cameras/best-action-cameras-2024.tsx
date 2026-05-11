import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import ProductRating from '@/components/ProductRating';
import Link from 'next/link';
import { Camera, Star, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '2024年最佳运动相机推荐 | 相机评测网',
  description: '2024年最值得购买的运动相机推荐：GoPro、大疆、Insta360等品牌对比，帮助你选择最适合的运动相机。',
  keywords: '运动相机推荐, 2024运动相机, GoPro推荐, 大疆运动相机, 最佳运动相机',
};

const recommendations = [
  {
    name: 'GoPro Hero 12 Black',
    price: '¥3,298',
    rating: 4.8,
    pros: ['5.3K/60fps最高画质', 'HyperSmooth 6.0防抖顶级', 'HDR视频支持', 'TimeCode同步专业'],
    cons: ['价格较高', '续航一般'],
    bestFor: '追求最高画质和专业功能用户',
    image: 'https://images.unsplash.com/photo-1574236170879-bd28f52d97c4?w=400',
  },
  {
    name: '大疆 Action 4',
    price: '¥2,298',
    rating: 4.7,
    pros: ['1/1.3英寸大底传感器', '18米防水深度', '续航160分钟', '性价比极高'],
    cons: ['最高4K/120fps', '没有TimeCode功能'],
    bestFor: '追求性价比和水下拍摄用户',
    image: 'https://images.unsplash.com/photo-1601262876412-3d8b2cd5a96f?w=400',
  },
  {
    name: 'Insta360 X4',
    price: '¥3,999',
    rating: 4.6,
    pros: ['8K全景录制', '隐形自拍杆', 'FlowState防抖', 'AI智能剪辑'],
    cons: ['机身发热', '价格较高', '需配合App使用'],
    bestFor: '极限运动爱好者和全景拍摄需求用户',
    image: 'https://images.unsplash.com/photo-1564463836146-4e30522c298c?w=400',
  },
  {
    name: '大疆 Pocket 3',
    price: '¥3,499',
    rating: 4.9,
    pros: ['一英寸传感器', '旋转触摸屏', '三轴云台防抖', '智能跟随6.0'],
    cons: ['不适合极限运动', '不耐摔'],
    bestFor: 'Vlog创作者和日常记录用户',
    image: 'https://images.unsplash.com/photo-1601262876412-3d8b2cd5a96f?w=400',
  },
];

const budgetPicks = [
  { name: '大疆 Action 4 畅拍套装', price: '¥2,598', reason: '包含多种配件，性价比极高' },
  { name: 'GoPro Hero 11 Mini', price: '¥2,298', reason: '小巧轻便，性能足够' },
  { name: '大疆 Osmo Action 3', price: '¥1,999', reason: '前置彩屏，vlog更方便' },
];

const useCases = [
  {
    title: '潜水/水下拍摄',
    recommendation: '大疆 Action 4',
    reason: '18米裸机防水，更大的传感器水下表现更好',
    rating: 5,
  },
  {
    title: '骑行/Vlog拍摄',
    recommendation: 'GoPro Hero 12',
    reason: 'HyperSmooth 6.0防抖更稳，5.3K分辨率后期空间大',
    rating: 5,
  },
  {
    title: '滑雪/极限运动',
    recommendation: 'Insta360 X4',
    reason: '360度全景拍摄，不怕错过精彩角度',
    rating: 5,
  },
  {
    title: '日常Vlog',
    recommendation: '大疆 Pocket 3',
    reason: '云台防抖+智能跟随，拍摄更轻松',
    rating: 5,
  },
  {
    title: '旅行记录',
    recommendation: 'Insta360 X4',
    reason: '先拍摄后取景，后期自由度高',
    rating: 4,
  },
];

const buyingTips = [
  { title: '确定预算', desc: '运动相机价格从千元到四千元不等，根据预算选择合适的产品' },
  { title: '明确用途', desc: '极限运动、vlog、旅行拍摄需要不同类型的相机' },
  { title: '配件预算', desc: '不要忘记配件预算，防水壳、自拍杆等是必须的' },
  { title: '试拍体验', desc: '建议到实体店试拍，感受操控体验' },
];

export default function BestActionCamerasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center gap-2 text-sm text-orange-600 mb-3">
            <span className="bg-orange-100 px-2 py-1 rounded">选购指南</span>
            <span>2024年1月14日</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">2024年最佳运动相机推荐</h1>
          <p className="text-lg text-gray-600 mb-4">GoPro、大疆、Insta360全面对比，帮您选择最适合的运动相机</p>
          <ProductRating rating={4.8} reviewCount={1256} />
        </div>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">编辑推荐</h2>
            <div className="grid gap-6">
              {recommendations.map((camera, index) => (
                <div key={index} className="bg-white border rounded-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img src={camera.image} alt={camera.name} className="w-full h-48 object-cover" />
                    </div>
                    <div className="md:w-2/3 p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{camera.name}</h3>
                          <p className="text-2xl font-bold text-blue-600">{camera.price}</p>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-5 h-5 text-yellow-500 mr-1" />
                          <span className="font-bold text-lg">{camera.rating}</span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <p className="text-sm text-gray-500 mb-1">适用场景：{camera.bestFor}</p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-green-700 mb-1">优点：</p>
                          <ul className="text-sm text-gray-600 list-disc list-inside">
                            {camera.pros.map((pro, i) => (
                              <li key={i}>{pro}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-red-700 mb-1">缺点：</p>
                          <ul className="text-sm text-gray-600 list-disc list-inside">
                            {camera.cons.map((con, i) => (
                              <li key={i}>{con}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">高性价比之选</h2>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="space-y-3">
                {budgetPicks.map((item, index) => (
                  <div key={index} className="flex justify-between items-center bg-white rounded-lg p-3">
                    <div>
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.reason}</p>
                    </div>
                    <span className="font-bold text-blue-600">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">使用场景推荐</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {useCases.map((item, index) => (
                <div key={index} className="bg-white border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < item.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="font-medium text-blue-600 mb-1">推荐：{item.recommendation}</p>
                  <p className="text-sm text-gray-600">{item.reason}</p>
                </div>
              ))}
            </div>
          </section>

          <AdPlaceholder slot="article-bottom" className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">购买建议</h2>
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {buyingTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{tip.title}</h3>
                      <p className="text-sm text-gray-600">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">相关评测</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/action-cameras/gopro-vs-dji" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-medium text-blue-600 mb-1">GoPro Hero 12 vs 大疆 Action 4</h3>
                <p className="text-sm text-gray-600">两大旗舰对比评测</p>
              </Link>
              <Link href="/action-cameras/dji-pocket-3" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-medium text-blue-600 mb-1">大疆 Pocket 3 深度评测</h3>
                <p className="text-sm text-gray-600">Vlog神器详细体验</p>
              </Link>
              <Link href="/action-cameras/insta360-x4" className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-medium text-blue-600 mb-1">Insta360 X4 评测</h3>
                <p className="text-sm text-gray-600">8K全景运动相机</p>
              </Link>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
}