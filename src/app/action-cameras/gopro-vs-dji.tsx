import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import ProductRating from '@/components/ProductRating';
import ComparisonTable from '@/components/ComparisonTable';
import { Star, Camera, Battery, Wifi, Waterproof } from 'lucide-react';

export const metadata: Metadata = {
  title: 'GoPro Hero 12 vs 大疆 Action 4 对比评测 | 相机评测网',
  description: '运动相机旗舰对决：GoPro Hero 12与大疆Action 4全面对比，防抖测试、画质对比、续航对比，帮你选择最适合的运动相机。',
  keywords: 'GoPro Hero 12, 大疆Action 4, 运动相机对比, 防抖测试',
};

const specs = {
  header: ['规格', 'GoPro Hero 12', '大疆 Action 4'],
  rows: [
    ['传感器', '1/1.9" CMOS', '1/1.3" CMOS'],
    ['视频分辨率', '5.3K/60fps, 4K/120fps', '4K/120fps'],
    ['稳定系统', 'HyperSmooth 6.0', 'RockSteady 3.0'],
    ['防水深度', '11米', '18米'],
    ['电池续航', '约70分钟(4K/60fps)', '约160分钟'],
    ['重量', '154g', '145g'],
    ['售价', '¥3,298', '¥2,298'],
  ],
};

const scenarios = [
  { name: '潜水/水下拍摄', winner: '大疆 Action 4', reason: '18米防水深度，1/1.3"大底传感器水下表现更好' },
  { name: '骑行/Vlog拍摄', winner: 'GoPro Hero 12', reason: 'HyperSmooth 6.0防抖更稳，5.3K分辨率更适合后期裁切' },
  { name: '滑雪/极限运动', winner: '持平', reason: '两者都支持HDR模式，低光表现都很好' },
  { name: '日常记录', winner: '大疆 Action 4', reason: '性价比更高，续航更持久' },
];

const accessories = [
  { name: '自拍杆/三脚架', gopro: 'Shorty 2.0', dji: 'DJI Action 扩展边框' },
  { name: '防水壳', gopro: 'SuperSuit', dji: '防水壳(60米)' },
  { name: '胸前固定带', gopro: 'Chest Harness', dji: '胸前固定座' },
  { name: '头带', gopro: 'Head Strap', dji: '头戴式固定组件' },
];

export default function GoproVsDjiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center gap-2 text-sm text-orange-600 mb-3">
            <span className="bg-orange-100 px-2 py-1 rounded">对比评测</span>
            <span>2024年1月12日</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">GoPro Hero 12 vs 大疆 Action 4</h1>
          <p className="text-lg text-gray-600 mb-4">运动相机旗舰对决，谁才是2024年最佳选择？</p>
          <ProductRating rating={4.7} reviewCount={328} />
        </div>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">产品概述</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              GoPro Hero 12和大疆 Action 4是当前运动相机市场的两大旗舰产品。GoPro作为运动相机的开创者，
              继续在软件优化和视频质量方面保持领先；而大疆Action 4则凭借更大的传感器和更亲民的价格，
              成为性价比之选。本文将从多个维度进行详细对比。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">规格对比表</h2>
            <ComparisonTable headers={specs.header} rows={specs.rows} />
          </section>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">使用场景推荐</h2>
            <div className="space-y-4">
              {scenarios.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-600">{item.winner}</p>
                      <p className="text-sm text-gray-600">{item.reason}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">配件推荐</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2 text-left">配件类型</th>
                    <th className="border px-4 py-2 text-left">GoPro Hero 12</th>
                    <th className="border px-4 py-2 text-left">大疆 Action 4</th>
                  </tr>
                </thead>
                <tbody>
                  {accessories.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border px-4 py-2 font-medium">{item.name}</td>
                      <td className="border px-4 py-2">{item.gopro}</td>
                      <td className="border px-4 py-2">{item.dji}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">优缺点总结</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-bold text-blue-800 mb-3">GoPro Hero 12 优势</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>5.3K/60fps更高分辨率</li>
                  <li>HyperSmooth 6.0业界领先防抖</li>
                  <li>TimeCode同步功能专业</li>
                  <li>HDR视频支持</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-3">大疆 Action 4 优势</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>1/1.3"更大传感器</li>
                  <li>续航时间更长</li>
                  <li>防水深度更深</li>
                  <li>性价比更高</li>
                </ul>
              </div>
            </div>
          </section>

          <AdPlaceholder slot="article-bottom" className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">购买建议</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>选择GoPro Hero 12</strong>：如果你追求最高画质，经常需要后期裁切，或者需要专业的TimeCode同步功能，
                GoPro Hero 12是更好的选择。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>选择大疆 Action 4</strong>：如果你注重性价比主要用于水下拍摄，或者需要更长的续航时间，
                大疆 Action 4是更明智的选择。
              </p>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
}