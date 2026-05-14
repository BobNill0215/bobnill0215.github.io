import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '配件推荐 - 相机评测网',
  description: '相机存储卡、电池、三脚架、相机包等配件推荐与选购指南。',
};

const accessories = [
  {
    title: '2024年相机配件必Buy清单',
    excerpt: '摄影新手必备装备，存储卡、电池、三脚架',
    category: '选购指南',
    date: '2024-01-14',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=800',
    href: '/accessories/must-have-2024',
  },
  {
    title: 'SD卡 vs CFexpress 存储卡选购指南',
    excerpt: '速度对比，V90评级，品牌推荐',
    category: '知识科普',
    date: '2024-01-12',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1617872534223-98d56e25b6c2?w=800',
    href: '/accessories/memory-cards',
  },
  {
    title: '最佳相机包推荐',
    excerpt: '单反/微单通用，通勤与旅行包，品牌推荐',
    category: '配件推荐',
    date: '2024-01-10',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
    href: '/accessories/camera-bags',
  },
  {
    title: '原厂 vs 副厂电池对比',
    excerpt: '相机电池续航测试，充电器推荐',
    category: '对比评测',
    date: '2024-01-08',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1610334069251-326c90c00d0a?w=800',
    href: '/accessories/batteries',
  },
  {
    title: 'Vlog拍摄配件套装推荐',
    excerpt: '手机与相机通用稳定设备，补光灯，三脚架',
    category: '配件推荐',
    date: '2024-01-06',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1598387846419-c0afb8cb6bcd?w=800',
    href: '/accessories/vlog-kit',
  },
  {
    title: '三脚架选购指南',
    excerpt: '旅行脚架 vs 专业脚架，碳纤维 vs 铝合金',
    category: '选购指南',
    date: '2024-01-04',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800',
    href: '/accessories/tripods',
  },
];

export default function AccessoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">配件推荐</h1>
          <p className="text-gray-300">相机存储卡、电池、三脚架、相机包等配件推荐</p>
        </div>
      </div>

      <AdPlaceholder slot="accessories-top" className="my-8 mx-4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accessories.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img loading="lazy" src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <span className="absolute top-2 left-2 bg-teal-600 text-white text-xs px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{item.date}</span>
                    <span className="text-yellow-500">★ {item.rating}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <AdPlaceholder slot="accessories-bottom" className="my-8 mx-4" />

      <Footer />
    </div>
  );
}