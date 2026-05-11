import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '数码相机评测 - 相机评测网',
  description: '专业数码相机评测，包括微单、单反、全画幅相机等产品详细评测报告。',
};

const cameras = [
  {
    title: '2024年最佳数码相机推荐排行榜',
    excerpt: '入门级到专业级相机推荐，热门品牌对比',
    category: '选购指南',
    date: '2024-01-15',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800',
    href: '/cameras/best-cameras-2024',
  },
  {
    title: '索尼 A7C II 全画幅微单深度评测',
    excerpt: '轻便全画幅，对焦快速，适合旅行摄影',
    category: '深度评测',
    date: '2024-01-10',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=800',
    href: '/cameras/sony-a7c-ii-review',
  },
  {
    title: '富士 X-T5 复古旗舰APS-C相机评测',
    excerpt: '4020万像素，40种胶片模拟，经典复古设计',
    category: '深度评测',
    date: '2024-01-08',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=800',
    href: '/cameras/fuji-xt5-review',
  },
  {
    title: '佳能 EOS R50 入门级微单评测',
    excerpt: '高性价比，触摸操作，适合新手摄影爱好者',
    category: '入门评测',
    date: '2024-01-05',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1604168648028-2f1ed4a4b4e8?w=800',
    href: '/cameras/canon-r50-review',
  },
  {
    title: '尼康 Z8 专业级全画幅微单评测',
    excerpt: '旗舰级性能，8K视频，专业摄影师首选',
    category: '专业评测',
    date: '2024-01-03',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=800',
    href: '/cameras/nikon-z8-review',
  },
  {
    title: '索尼 vs 佳能 vs 尼康 全画幅对比',
    excerpt: '三大品牌旗舰微单横向对比评测',
    category: '对比评测',
    date: '2024-01-01',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800',
    href: '/cameras/sony-vs-canon-vs-nikon',
  },
];

export default function CamerasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">数码相机评测</h1>
          <p className="text-gray-300">专业微单、单反、全画幅相机详细评测报告</p>
        </div>
      </div>

      <AdPlaceholder slot="cameras-top" className="my-8 mx-4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">全部</button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">选购指南</button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">深度评测</button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">对比评测</button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">入门评测</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cameras.map((camera, index) => (
            <Link key={index} href={camera.href} className="group">
              <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img src={camera.image} alt={camera.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {camera.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600">
                    {camera.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{camera.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{camera.date}</span>
                    <span className="text-yellow-500">★ {camera.rating}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <AdPlaceholder slot="cameras-bottom" className="my-8 mx-4" />

      <Footer />
    </div>
  );
}