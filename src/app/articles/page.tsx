import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';
import { articles } from '@/data/articles';

export const metadata: Metadata = {
  title: '所有文章 - 相机评测与选购指南 | CamReview',
  description: '浏览CamReview全部文章：相机评测、手机拍照、运动相机、监控安防、配件推荐与摄影技巧。',
  keywords: '相机文章,相机评测,选购指南,摄影技巧,全部文章',
};

const categoryColors: Record<string, string> = {
  '数码相机': 'bg-blue-100 text-blue-700',
  '手机相机': 'bg-green-100 text-green-700',
  '运动相机': 'bg-orange-100 text-orange-700',
  '监控相机': 'bg-red-100 text-red-700',
  '配件': 'bg-purple-100 text-purple-700',
  '选购指南': 'bg-cyan-100 text-cyan-700',
};

export default function ArticlesPage() {
  const categories = [...new Set(articles.map((a) => a.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="relative h-48 md:h-56 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">全部文章</h1>
            <p className="text-lg text-blue-100">共收录 {articles.length} 篇文章</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <a key={cat} href={`#${cat}`} className="px-3 py-1.5 bg-white rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-600 shadow-sm">
              {cat} ({articles.filter((a) => a.category === cat).length})
            </a>
          ))}
        </div>

        {categories.map((cat) => (
          <section key={cat} id={cat} className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">{cat}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {articles.filter((a) => a.category === cat).map((article) => (
                <Link key={article.slug} href={`/articles/${article.slug}`} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[cat] || 'bg-gray-100 text-gray-700'}`}>{cat}</span>
                  <h3 className="font-medium text-gray-900 mt-2 mb-1 line-clamp-2 hover:text-blue-600">{article.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{article.description}</p>
                  <p className="text-xs text-gray-400 mt-2">{article.date}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
      <AdPlaceholder slot="article-bottom" className="my-8" />
      <Footer />
    </div>
  );
}
