import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '运动相机 - 相机评测网',
  description: 'GoPro、大疆、Insta360等运动相机和Vlog相机详细评测，选购指南。',
};

const actionCameras = [
  {
    title: '2024年最佳运动相机推荐',
    excerpt: 'Vlog与极限运动拍摄利器，GoPro vs 大疆',
    category: '选购指南',
    date: '2024-01-14',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800',
    href: '/action-cameras/best-action-cameras-2024',
  },
  {
    title: 'GoPro Hero 12 vs 大疆 Action 4 对比评测',
    excerpt: '运动相机旗舰对决，防抖测试，画质对比',
    category: '对比评测',
    date: '2024-01-12',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1574236170879-bd28f52d97c4?w=800',
    href: '/action-cameras/gopro-vs-dji',
  },
  {
    title: '大疆 Pocket 3 vlog神器评测',
    excerpt: '一英寸传感器，旋转屏，云台防抖，智能跟随',
    category: '深度评测',
    date: '2024-01-10',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1601262876412-3d8b2cd5a96f?w=800',
    href: '/action-cameras/dji-pocket-3',
  },
  {
    title: 'Insta360 X4 8K全景运动相机',
    excerpt: '8K全景录制，隐形自拍杆，360度拍摄',
    category: '深度评测',
    date: '2024-01-08',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1564463836146-4e30522c298c?w=800',
    href: '/action-cameras/insta360-x4',
  },
  {
    title: 'GoPro Hero 13 Black 新品发布',
    excerpt: '5.3K/60fps，HB系列镜头，续航升级',
    category: '新品资讯',
    date: '2024-01-06',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=800',
    href: '/action-cameras/gopro-hero-13',
  },
  {
    title: '运动相机配件套装推荐',
    excerpt: '自拍杆、防水壳、胸前固定带等配件',
    category: '配件推荐',
    date: '2024-01-04',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1574236170879-bd28f52d97c4?w=800',
    href: '/action-cameras/accessories',
  },
];

export default function ActionCamerasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">运动相机</h1>
          <p className="text-gray-300">GoPro、大疆、Insta360等运动相机和Vlog相机评测</p>
        </div>
      </div>

      <AdPlaceholder slot="action-top" className="my-8 mx-4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actionCameras.map((camera, index) => (
            <Link key={index} href={camera.href} className="group">
              <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img loading="lazy" src={camera.image} alt={camera.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <span className="absolute top-2 left-2 bg-orange-600 text-white text-xs px-2 py-1 rounded">
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

      <AdPlaceholder slot="action-bottom" className="my-8 mx-4" />

      <Footer />
    </div>
  );
}