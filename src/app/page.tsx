import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import { Camera, Smartphone, Zap, Shield, Package, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CamReview - 专业相机产品评测平台',
  description: '专业相机产品评测网站，提供数码相机、运动相机、手机相机和监控相机的详细评测报告和选购指南。',
};

const featuredReview = {
  title: '2024年最佳数码相机推荐排行榜',
  excerpt: '从入门级到专业级，全面对比索尼、佳能、尼康、富士等品牌热门机型，帮您找到最适合的相机。',
  category: '数码相机',
  date: '2024年1月15日',
  image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200',
  href: '/cameras/best-cameras-2024',
};

const latestReviews = [
  {
    title: 'GoPro Hero 12 vs 大疆 Action 4',
    excerpt: '运动相机旗舰对决，防抖测试，画质对比',
    category: '运动相机',
    date: '2024年1月14日',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600',
    href: '/action-cameras/gopro-vs-dji',
    rating: 4.5,
  },
  {
    title: 'iPhone 15 Pro Max vs 三星 S24 Ultra',
    excerpt: '苹果vs三星，拍照哪个好，旗舰手机相机对比',
    category: '手机相机',
    date: '2024年1月13日',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600',
    href: '/smartphone-cameras/iphone-vs-samsung',
    rating: 4.8,
  },
  {
    title: '2024年最佳家用监控摄像头推荐',
    excerpt: '室内户外国产精选，智能安防产品对比',
    category: '监控相机',
    date: '2024年1月12日',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
    href: '/security-cameras/best-home-cameras',
    rating: 4.2,
  },
];

const buyerGuides = [
  { title: '最佳微单相机推荐', count: 25, href: '/guides?type=mirrorless', icon: Camera },
  { title: '最佳运动相机推荐', count: 15, href: '/guides?type=action', icon: Zap },
  { title: '最佳拍照手机推荐', count: 18, href: '/guides?type=phone', icon: Smartphone },
  { title: '最佳监控摄像头', count: 12, href: '/guides?type=security', icon: Shield },
  { title: '相机配件推荐', count: 20, href: '/guides?type=accessories', icon: Package },
  { title: '预算选购指南', count: 10, href: '/guides?type=budget', icon: BookOpen },
];

const categories = [
  {
    name: '数码相机评测',
    description: '微单、单反、全画幅相机专业评测',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600',
    href: '/cameras',
    count: 25,
  },
  {
    name: '手机相机对比',
    description: '旗舰手机拍照能力全面对比',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600',
    href: '/smartphone-cameras',
    count: 18,
  },
  {
    name: '运动相机',
    description: 'Vlog、极限运动拍摄利器评测',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600',
    href: '/action-cameras',
    count: 15,
  },
  {
    name: '监控相机',
    description: '家用安防智能摄像头推荐',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
    href: '/security-cameras',
    count: 12,
  },
  {
    name: '配件推荐',
    description: '存储卡、镜头、相机包等配件',
    image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=600',
    href: '/accessories',
    count: 20,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Link href={featuredReview.href} className="group block relative overflow-hidden rounded-xl">
              <div className="relative h-96 md:h-128">
                <img 
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
                  <img src={review.image} alt={review.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
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

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">选购指南</h2>
            <Link href="/guides" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {buyerGuides.map((guide, index) => (
              <Link key={index} href={guide.href} className="group bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 transition-colors">
                  <guide.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-blue-600">{guide.title}</h3>
                <p className="text-xs text-gray-500">{guide.count} 篇指南</p>
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, index) => (
            <Link key={index} href={cat.href} className="group">
              <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-32 overflow-hidden">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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

      <Footer />
    </div>
  );
}