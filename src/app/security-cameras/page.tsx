import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '监控相机 - 相机评测网',
  description: '家用监控摄像头评测，萤石、小米、360等智能安防产品推荐。',
};

const securityCameras = [
  {
    title: '2024年最佳家用监控摄像头推荐',
    excerpt: '室内户外国产精选，智能安防产品对比',
    category: '选购指南',
    date: '2024-01-12',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    href: '/security-cameras/best-home-cameras',
  },
  {
    title: '萤石 vs 小米 vs 360 智能监控对比',
    excerpt: '品牌监控摄像头横向对比，AI智能功能测试',
    category: '对比评测',
    date: '2024-01-10',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1558618047-f4e70f6f9aa0?w=800',
    href: '/security-cameras/brands-comparison',
  },
  {
    title: '4K超清监控摄像头深度评测',
    excerpt: '雷士4K监控，双摄版，AI追踪，家用安防',
    category: '深度评测',
    date: '2024-01-08',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800',
    href: '/security-cameras/4k-camera-review',
  },
  {
    title: '太阳能监控摄像头推荐',
    excerpt: '户外安防，电池版监控，防水等级解析',
    category: '选购指南',
    date: '2024-01-06',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800',
    href: '/security-cameras/solar-cameras',
  },
  {
    title: 'Eufy S350 云台相机新品评测',
    excerpt: 'Apple HomeKit兼容，智能家居安防',
    category: '新品评测',
    date: '2024-01-04',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    href: '/security-cameras/eufy-s350',
  },
  {
    title: '监控摄像头存储方案对比',
    excerpt: '云存储vs本地存储，SD卡vs NVR录像机',
    category: '知识科普',
    date: '2024-01-02',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1558618047-f4e70f6f9aa0?w=800',
    href: '/security-cameras/storage-solutions',
  },
];

export default function SecurityCamerasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">监控相机</h1>
          <p className="text-gray-300">家用智能安防摄像头评测与推荐</p>
        </div>
      </div>

      <AdPlaceholder slot="security-top" className="my-8 mx-4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityCameras.map((camera, index) => (
            <Link key={index} href={camera.href} className="group">
              <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img loading="lazy" src={camera.image} alt={camera.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
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

      <AdPlaceholder slot="security-bottom" className="my-8 mx-4" />

      <Footer />
    </div>
  );
}