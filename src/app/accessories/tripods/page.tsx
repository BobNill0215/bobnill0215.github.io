import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '三脚架选购指南 - 相机评测网',
  description: '旅行脚架 vs 专业脚架，碳纤维 vs 铝合金',
};

export default function TripodsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-teal-600 to-cyan-500">
        <img 
          src="https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=1600" 
          alt="三脚架" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-4 inline-block">选购指南</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">三脚架选购指南</h1>
            <p className="text-lg text-teal-100">旅行脚架 vs 专业脚架，碳纤维 vs 铝合金</p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/accessories" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回配件推荐</Link>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月4日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>三脚架是摄影的重要配件，但面对各种材质和类型，很多用户不知道如何选择。本文将为您详细讲解三脚架的选购要点。</p>

          <h2>材质对比</h2>
          <table className="min-w-full border-collapse border border-gray-300 my-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">材质</th>
                <th className="border border-gray-300 px-4 py-2">优点</th>
                <th className="border border-gray-300 px-4 py-2">缺点</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">铝合金</td>
                <td className="border border-gray-300 px-4 py-2">价格实惠，耐用</td>
                <td className="border border-gray-300 px-4 py-2">重量较重</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">碳纤维</td>
                <td className="border border-gray-300 px-4 py-2">轻便，减震好</td>
                <td className="border border-gray-300 px-4 py-2">价格较高</td>
              </tr>
            </tbody>
          </table>

          <h2>类型选择</h2>
          <h3>旅行脚架</h3>
          <p>轻便小巧，可折叠，适合旅行携带。推荐富图宝、曼富图Traveller系列。</p>
          
          <h3>专业脚架</h3>
          <p>承重能力强，稳定性好，适合影棚和风光摄影。</p>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>选购要点</h2>
          <ul>
            <li><strong>承重</strong>：确保脚架承重大于相机+镜头总重</li>
            <li><strong>收纳高度</strong>：方便放入背包</li>
            <li><strong>球台</strong>：阻尼适中，锁定牢固</li>
            <li><strong>中轴</strong>：可升起中轴增加高度</li>
          </ul>

          <h2>总结</h2>
          <p>根据使用场景选择合适的脚架，旅行用户选择轻便款，专业用户选择稳定性更强的款式。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}