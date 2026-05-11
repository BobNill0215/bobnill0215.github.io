import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '手机相机对比 - 相机评测网',
  description: '旗舰手机拍照能力对比评测，iPhone、三星、华为、小米等品牌手机相机详细对比。',
};

const phones = [
  {
    title: 'iPhone 15 Pro Max vs 三星 S24 Ultra 拍照对比',
    excerpt: '苹果vs三星，拍照哪个好，旗舰手机相机对比',
    category: '对比评测',
    date: '2024-01-13',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800',
    href: '/smartphone-cameras/iphone-vs-samsung',
  },
  {
    title: '小米 14 Ultra 徕卡影像深度评测',
    excerpt: '一英寸大底，徕卡光学，Summilux镜头人像模式',
    category: '深度评测',
    date: '2024-01-11',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800',
    href: '/smartphone-cameras/xiaomi-14-ultra',
  },
  {
    title: '华为 P70 Pro+ XMAGE影像系统评测',
    excerpt: '国产旗舰手机摄影，潜望式长焦，夜景表现出色',
    category: '深度评测',
    date: '2024-01-09',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
    href: '/smartphone-cameras/huawei-p70-pro',
  },
  {
    title: '2024年最佳拍照手机排行榜',
    excerpt: '摄影爱好者手机推荐，拍照最好的手机对比',
    category: '选购指南',
    date: '2024-01-07',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1601784551447-6e5a8f6552c2?w=800',
    href: '/smartphone-cameras/best-camera-phones-2024',
  },
  {
    title: '谷歌 Pixel 9 Pro AI摄影功能解析',
    excerpt: 'Tensor G4芯片，计算摄影，AI增强拍摄',
    category: '新品资讯',
    date: '2024-01-05',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800',
    href: '/smartphone-cameras/pixel-9-pro',
  },
  {
    title: 'vivo X100 Pro 蔡司光学评测',
    excerpt: '蔡司T*镀膜，一英寸传感器，人像模式出色',
    category: '深度评测',
    date: '2024-01-03',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800',
    href: '/smartphone-cameras/vivo-x100-pro',
  },
];

export default function SmartphoneCamerasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">手机相机对比</h1>
          <p className="text-gray-300">旗舰手机拍照能力全面对比评测</p>
        </div>
      </div>

      <AdPlaceholder slot="smartphone-top" className="my-8 mx-4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phones.map((phone, index) => (
            <Link key={index} href={phone.href} className="group">
              <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img src={phone.image} alt={phone.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                    {phone.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600">
                    {phone.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{phone.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{phone.date}</span>
                    <span className="text-yellow-500">★ {phone.rating}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <AdPlaceholder slot="smartphone-bottom" className="my-8 mx-4" />

      <Footer />
    </div>
  );
}