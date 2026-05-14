import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import SearchModal from '@/components/SearchModal';
import { Camera, Smartphone, Zap, Shield, Package, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CamReview - 专业相机产品评测平台 | 2026年最新相机评测',
  description: '专业相机评测网站，提供2026年最新数码相机、运动相机、手机相机的详细评测报告、参数对比及选购指南，涵盖Canon R6 V、索尼 A7V、DJI Avata 360等热门机型。',
  keywords: '相机评测, 数码相机, 微单相机, 运动相机, Canon R6 V, 索尼 A7V, DJI Avata 360, 2026年相机推荐',
  openGraph: {
    title: 'CamReview - 专业相机产品评测平台',
    description: '2026年最新数码相机、运动相机、手机相机详细评测报告及选购指南',
    type: 'website',
  },
};

const featuredReview = {
  title: '2026年最佳数码相机推荐排行榜',
  excerpt: 'Canon EOS R6 V、索尼 A7V V、尼康 Z6 III 等最新机型全面对比，帮您找到最适合的相机。',
  category: '数码相机',
  date: '2026年1月5日',
  image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200',
  href: '/cameras/best-cameras-2024',
};

const latestReviews = [
  {
    title: 'Canon EOS R6 V 评测',
    excerpt: '2420万像素全画幅，支持8K录制，五轴防抖',
    category: '数码相机',
    date: '2026年1月10日',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600',
    href: '/cameras/canon-r50-review',
    rating: 4.9,
  },
  {
    title: 'DJI Avata 360 评测',
    excerpt: '360度全景运动相机，4K 60fps，超级防抖',
    category: '运动相机',
    date: '2026年1月8日',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600',
    href: '/action-cameras/best-action-cameras-2024',
    rating: 4.8,
  },
  {
    title: 'Samsung S26 Ultra 相机评测',
    excerpt: '2亿像素主摄，1英寸传感器，AI计算摄影',
    category: '手机相机',
    date: '2026年1月6日',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600',
    href: '/smartphone-cameras/best-camera-phones-2024',
    rating: 4.9,
  },
];

const buyerGuides = [
  { 
    title: '2026最佳微单', 
    count: 25, 
    href: '/cameras/best-cameras-2024', 
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400',
    badge: 'Canon R6 V / Sony A7V V',
  },
  { 
    title: '2026最佳运动相机', 
    count: 15, 
    href: '/action-cameras/best-action-cameras-2024', 
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400',
    badge: 'DJI Avata 360 / GoPro Fluid',
  },
  { 
    title: '2026最佳拍照手机', 
    count: 18, 
    href: '/smartphone-cameras/best-camera-phones-2024', 
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400',
    badge: 'iPhone 17 Pro / S26 Ultra',
  },
  { 
    title: '2026监控摄像头', 
    count: 12, 
    href: '/security-cameras/best-home-cameras', 
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    badge: '海康/萤石/小米',
  },
];

const categories = [
  {
    name: '数码相机评测',
    description: 'Canon/索尼/尼康旗舰全画幅微单',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600',
    href: '/cameras',
    count: 20,
    badge: '2026新品',
  },
  {
    name: '手机相机对比',
    description: 'iPhone 17/S26 Ultra/Xiaomi 17 Ultra',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600',
    href: '/smartphone-cameras',
    count: 12,
    badge: '2026新品',
  },
  {
    name: '运动相机',
    description: 'DJI/GoPro/Insta360最新旗舰',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600',
    href: '/action-cameras',
    count: 13,
    badge: '2026新品',
  },
  {
    name: '监控相机',
    description: '家用安防智能摄像头推荐',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
    href: '/security-cameras',
    count: 12,
    badge: null,
  },
  {
    name: '配件推荐',
    description: '存储卡/镜头/相机包等配件',
    image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=600',
    href: '/accessories',
    count: 20,
    badge: null,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          <SearchModal />
          <div className="text-sm text-gray-500">
            共收录 <span className="font-bold text-blue-600">45+</span> 个产品数据库
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Link href={featuredReview.href} className="group block relative overflow-hidden rounded-xl">
              <div className="relative h-96 md:h-[500px]">
                <img loading="lazy" 
                  src={featuredReview.image} 
                  alt={featuredReview.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {featuredReview.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {featuredReview.title}
                  </h2>
                  <p className="text-gray-200 text-sm md:text-base mb-2 line-clamp-2">{featuredReview.excerpt}</p>
                  <span className="text-gray-400 text-sm">{featuredReview.date}</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-900 border-b-2 border-blue-600 pb-2">最新评测</h2>
            {latestReviews.map((review, index) => (
              <Link key={index} href={review.href} className="group flex gap-4 p-3 rounded-lg hover:bg-gray-50">
                <div className="relative w-24 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                  <img loading="lazy" src={review.image} alt={review.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2 group-hover:text-blue-600">{review.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="text-blue-600">{review.category}</span>
                    <span>•</span>
                    <span>{review.date}</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-sm ${i < Math.floor(review.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">{review.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AdPlaceholder slot="homepage-banner" className="my-8 mx-4 max-w-7xl mx-auto" />

      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">选购指南</h2>
            <Link href="/guides" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {buyerGuides.map((guide, index) => (
              <Link key={index} href={guide.href} className="group">
                <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative h-40 overflow-hidden">
                    <img loading="lazy" 
                      src={guide.image} 
                      alt={guide.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <h3 className="absolute bottom-3 left-4 font-semibold text-white text-lg">{guide.title}</h3>
                  </div>
                  <div className="p-3">
                    <p className="text-xs bg-blue-100 text-blue-700 font-medium px-2 py-0.5 rounded mb-1">{guide.badge}</p>
                    <p className="text-xs text-gray-500">{guide.count} 篇指南</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">产品分类</h2>
          <Link href="/cameras" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
            查看全部 →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {categories.map((cat, index) => (
            <Link key={index} href={cat.href} className="group">
              <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-32 overflow-hidden">
                  <img loading="lazy" src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {cat.badge && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                      {cat.badge}
                    </span>
                  )}
                  <h3 className="absolute bottom-3 left-4 font-semibold text-white text-sm">{cat.name}</h3>
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1 line-clamp-2">{cat.description}</p>
                  <p className="text-xs text-blue-600 font-medium">{cat.count} 篇评测</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">准备好找到您的理想相机了吗？</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">我们提供专业、客观的评测报告，帮助您在众多相机产品中做出明智的选择。</p>
          <div className="flex gap-4 justify-center">
            <Link href="/cameras" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
              浏览评测
            </Link>
            <Link href="/camera-compare" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 border border-blue-500">
              对比相机
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-xl p-6 text-white shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-white text-red-500 text-xs font-bold px-2 py-1 rounded-full animate-pulse">🔥 2026年新品</span>
              </div>
              <h3 className="font-bold text-xl mb-1">最新相机数据库上线</h3>
              <p className="text-white/90 text-sm">收录20款2025-2026热门数码相机参数，Canon R6 V / Sony A7V V / Nikon Z6 III 支持对比分析</p>
            </div>
            <div className="flex gap-3">
              <Link href="/camera-database" className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 flex items-center gap-1">
                相机数据库
              </Link>
              <Link href="/phone-database" className="bg-white/20 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30 flex items-center gap-1">
                手机数据库
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}