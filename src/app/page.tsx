import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
  title: '相机评测网 - 专业相机产品评测',
  description: '专业相机产品评测网站，提供数码相机、运动相机、手机相机和监控相机的详细评测报告和选购指南。',
};

const featuredArticles = [
  {
    title: '2024年最佳数码相机推荐排行榜',
    excerpt: '入门级到专业级相机推荐，热门品牌对比，Amazon精选',
    category: '数码相机',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800',
    href: '/cameras/best-cameras-2024',
  },
  {
    title: 'GoPro Hero 12 vs 大疆 Action 4 对比评测',
    excerpt: '运动相机旗舰对决，防抖测试，画质对比',
    category: '运动相机',
    date: '2024-01-14',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800',
    href: '/action-cameras/gopro-vs-dji',
  },
  {
    title: 'iPhone 15 Pro Max vs 三星 S24 Ultra 拍照对比',
    excerpt: '苹果vs三星，拍照哪个好，旗舰手机相机对比',
    category: '手机相机',
    date: '2024-01-13',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800',
    href: '/smartphone-cameras/iphone-vs-samsung',
  },
  {
    title: '2024年最佳家用监控摄像头推荐',
    excerpt: '室内户外国产精选，智能安防产品对比',
    category: '监控相机',
    date: '2024-01-12',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    href: '/security-cameras/best-home-cameras',
  },
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">专业相机产品评测平台</h1>
          <p className="text-xl text-blue-100 mb-8">
            为您提供最权威的数码相机、运动相机、手机相机和监控相机评测报告
          </p>
          <div className="flex gap-4">
            <Link href="/cameras" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
              浏览评测
            </Link>
            <Link href="/guides" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
              选购指南
            </Link>
          </div>
        </div>
      </section>

      <AdPlaceholder slot="homepage-banner" className="my-8 mx-4" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-8">热门评测文章</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArticles.map((article, index) => (
            <Link key={index} href={article.href} className="group">
              <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {article.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
                  <div className="text-xs text-gray-500">{article.date}</div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <AdPlaceholder slot="homepage-middle" className="my-8 mx-4" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-8">产品分类</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, index) => (
            <Link key={index} href={cat.href} className="group">
              <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-32 overflow-hidden">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600">{cat.name}</h3>
                  <p className="text-xs text-gray-500">{cat.count} 篇评测</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">为什么选择我们</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold mb-2">专业评测</h3>
              <p className="text-sm text-gray-600">基于实际使用体验，客观公正的产品评测报告</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold mb-2">精选推荐</h3>
              <p className="text-sm text-gray-600">精选Amazon等平台优质产品，真实购买链接</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-semibold mb-2">选购指南</h3>
              <p className="text-sm text-gray-600">帮助您找到最适合自己需求的相机产品</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}