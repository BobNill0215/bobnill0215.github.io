import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';
import { articles } from '@/data/articles';

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="relative h-48 md:h-56 bg-gradient-to-r from-blue-700 to-indigo-700">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-2 inline-block">{article.category}</span>
            <h1 className="text-2xl md:text-3xl font-bold max-w-3xl">{article.title}</h1>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="bg-white rounded-xl shadow-sm p-8">
          <div className="mb-6 pb-6 border-b">
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span className="text-gray-400">{article.date}</span>
              <span>·</span>
              <span>{article.category}</span>
            </div>
          </div>
          <AdPlaceholder slot="article-top" className="mb-8" />
          <div className="prose max-w-none">
            {article.sections.map((section, i) => (
              <div key={i}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </div>
            ))}
            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">相关推荐</h3>
              <p className="text-sm text-gray-600">查看更多相机评测和选购指南：</p>
              <div className="flex gap-3 mt-3 flex-wrap">
                <Link href="/cameras" className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">数码相机评测</Link>
                <Link href="/guides" className="text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">选购指南</Link>
                <Link href="/camera-database" className="text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">相机数据库</Link>
              </div>
            </div>
          </div>
          <AdPlaceholder slot="article-bottom" className="mt-8" />
          <div className="mt-8 bg-gray-100 rounded-lg p-6">
            <h3 className="font-bold mb-2">免责声明</h3>
            <p className="text-sm text-gray-600">本文为联盟链接，我们可能会从中获得少量佣金，不影响您的购买价格。</p>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}
