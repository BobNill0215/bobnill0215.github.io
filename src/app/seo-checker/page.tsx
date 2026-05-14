'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Search, ExternalLink, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const SITE_URL = 'https://bobnill0215.github.io';

export default function SeoCheckerPage() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<{ status: number; message: string } | null>(null);
  const [checking, setChecking] = useState(false);

  const checkUrl = async () => {
    if (!url.trim()) return;
    setChecking(true);
    setResult(null);
    const target = url.startsWith('http') ? url : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
    try {
      const res = await fetch(target, { method: 'HEAD' });
      if (res.ok) {
        setResult({ status: res.status, message: `✅ 可正常访问 (HTTP ${res.status})` });
      } else {
        setResult({ status: res.status, message: `❌ 返回异常 (HTTP ${res.status})` });
      }
    } catch {
      setResult({ status: 0, message: '❌ 无法访问该网址，请检查URL是否正确' });
    }
    setChecking(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'SEO检测工具' }]} />
          <h1 className="text-3xl font-bold mb-2">SEO收录检测工具</h1>
          <p className="text-blue-100">检测网站页面是否可正常访问，辅助Google收录排查</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex gap-3 mb-6">
            <div className="flex-1">
              <input type="text" value={url} onChange={(e) => setUrl(e.target.value)}
                placeholder={`输入路径，如 /articles/sony-a7v-review-2026/`}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyDown={(e) => e.key === 'Enter' && checkUrl()} />
            </div>
            <button onClick={checkUrl} disabled={checking || !url.trim()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2">
              <Search className="w-4 h-4" />
              {checking ? '检测中...' : '检测'}
            </button>
          </div>

          {result && (
            <div className={`p-4 rounded-lg flex items-start gap-3 ${result.status === 200 ? 'bg-green-50' : 'bg-red-50'}`}>
              {result.status === 200 ? <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /> : <XCircle className="w-5 h-5 text-red-600 mt-0.5" />}
              <div>
                <p className="font-medium">{result.message}</p>
              </div>
            </div>
          )}

          <div className="mt-8">
            <h2 className="font-bold mb-4">快速检测链接</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['/', '/cameras/', '/phone-database/', '/action-cameras/', '/guides/', '/articles/', '/feedback/', '/sitemap.xml'].map(p => (
                <button key={p} onClick={() => { setUrl(p); setResult(null); }}
                  className="text-sm bg-gray-100 hover:bg-blue-50 px-3 py-2 rounded-lg text-left transition-colors">{p}</button>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-6">
            <h3 className="font-bold flex items-center gap-2 mb-3"><AlertCircle className="w-5 h-5" /> 收录提升建议</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /> 所有页面均有独立title和description</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /> sitemap.xml 包含532个URL</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /> robots.txt 正确配置</li>
              <li className="flex items-start gap-2"><span className="text-yellow-500">•</span> 建议在 Google Search Console 定期提交sitemap</li>
              <li className="flex items-start gap-2"><span className="text-yellow-500">•</span> 新内容发布后主动ping Google</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
