'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { search, type SearchItem } from '@/data/search';
import { Search, Filter } from 'lucide-react';

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const highlightText = (text: string, q: string) => {
    if (!q.trim()) return text;
    const parts = text.split(new RegExp(`(${q})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === q.toLowerCase() 
        ? <mark key={i} className="bg-yellow-200 font-medium">{part}</mark>
        : part
    );
  };

  useEffect(() => {
    if (query.trim()) {
      const searchResults = search(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);

  const categories = ['all', '数码相机', '手机相机', '运动相机', '监控相机', '配件', '选购指南', '新品速递', '镜头评测'];

  const filteredResults = selectedCategory === 'all' 
    ? results 
    : results.filter(r => r.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case '数码相机': return '📷';
      case '手机相机': return '📱';
      case '运动相机': return '🎥';
      case '监控相机': return '🔒';
      case '配件': return '🎒';
      case '选购指南': return '📋';
      case '数据库': return '📊';
      case '工具': return '🔧';
      case '新品速递': return '✨';
      case '镜头评测': return '🔭';
      default: return '📄';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">搜索</h1>
          <p className="text-blue-100">搜索相机、手机、配件等所有内容</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="输入关键词搜索..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 text-lg outline-none placeholder:text-gray-400"
              autoFocus
            />
          </div>
        </div>

        {query && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-500">筛选分类:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat === 'all' ? '全部' : cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-sm text-gray-500">
              找到 <span className="font-bold text-blue-600">{filteredResults.length}</span> 个结果
            </div>
          </div>
        )}

        {!query && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">搜索相机评测网站</h2>
            <p className="text-gray-500 mb-6">输入关键词搜索数码相机、手机、运动相机、配件等</p>
            
            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-sm bg-white px-4 py-2 rounded-full shadow-sm">索尼 A7V</span>
              <span className="text-sm bg-white px-4 py-2 rounded-full shadow-sm">佳能 R6 V</span>
              <span className="text-sm bg-white px-4 py-2 rounded-full shadow-sm">iPhone 17</span>
              <span className="text-sm bg-white px-4 py-2 rounded-full shadow-sm">Samsung S26 Ultra</span>
              <span className="text-sm bg-white px-4 py-2 rounded-full shadow-sm">DJI Avata</span>
              <span className="text-sm bg-white px-4 py-2 rounded-full shadow-sm">GoPro</span>
            </div>
          </div>
        )}

        {query && filteredResults.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">😕</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">未找到结果</h2>
            <p className="text-gray-500">尝试其他关键词，或浏览以下分类:</p>
            <div className="mt-4 flex justify-center gap-4">
              <Link href="/cameras" className="text-blue-600 hover:underline">数码相机</Link>
              <Link href="/smartphone-cameras" className="text-blue-600 hover:underline">手机相机</Link>
              <Link href="/action-cameras" className="text-blue-600 hover:underline">运动相机</Link>
            </div>
          </div>
        )}

        {filteredResults.length > 0 && (
          <div className="space-y-3">
            {filteredResults.map(result => (
              <Link
                key={result.id}
                href={result.href}
                className="block bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{getCategoryIcon(result.category)}</span>
                  <div className="flex-1">
<div className="flex items-center gap-2 mb-1">
                       <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                         {result.category}
                       </span>
                       <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600">
                         {highlightText(result.title, query)}
                       </h3>
                     </div>
                     <p className="text-gray-600 mb-2">{highlightText(result.excerpt, query)}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span>标签:</span>
                      {result.tags.slice(0, 5).map((tag, i) => (
                        <span key={i} className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
          <h3 className="font-bold text-lg mb-4">热门搜索</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link href="/camera-database" className="bg-white p-3 rounded-lg hover:shadow-md transition text-center">
              <div className="text-2xl mb-1">📷</div>
              <div className="text-sm font-medium">数码相机</div>
              <div className="text-xs text-gray-500">20款相机</div>
            </Link>
            <Link href="/phone-database" className="bg-white p-3 rounded-lg hover:shadow-md transition text-center">
              <div className="text-2xl mb-1">📱</div>
              <div className="text-sm font-medium">手机相机</div>
              <div className="text-xs text-gray-500">12款手机</div>
            </Link>
            <Link href="/action-camera-database" className="bg-white p-3 rounded-lg hover:shadow-md transition text-center">
              <div className="text-2xl mb-1">🎥</div>
              <div className="text-sm font-medium">运动相机</div>
              <div className="text-xs text-gray-500">13款相机</div>
            </Link>
            <Link href="/guides" className="bg-white p-3 rounded-lg hover:shadow-md transition text-center">
              <div className="text-2xl mb-1">📋</div>
              <div className="text-sm font-medium">选购指南</div>
              <div className="text-xs text-gray-500">购买攻略</div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <div className="animate-pulse text-gray-400">加载中...</div>
        </div>
        <Footer />
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}