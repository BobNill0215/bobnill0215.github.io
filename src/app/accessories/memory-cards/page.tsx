import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SD卡 vs CFexpress 存储卡选购指南 - 相机评测网',
  description: '速度对比，V90评级，品牌推荐',
};

export default function MemoryCardsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-teal-600 to-cyan-500">
        <img 
          src="https://images.unsplash.com/photo-1617872534223-98d56e25b6c2?w=1600" 
          alt="存储卡" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-4 inline-block">知识科普</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">SD卡 vs CFexpress 存储卡选购指南</h1>
            <p className="text-lg text-teal-100">速度对比，V90评级，品牌推荐</p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/accessories" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回配件推荐</Link>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月12日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>存储卡是相机最重要的配件之一，但面对市场上琳琅满目的产品，很多用户不知道如何选择。本文将为您详细讲解存储卡的选购要点。</p>

          <h2>SD卡 vs CFexpress</h2>
          <p>目前主流的存储卡类型有SD卡和CFexpress两种：</p>
          <ul>
            <li><strong>SD卡</strong>：通用性强，兼容性好，价格亲民</li>
            <li><strong>CFexpress</strong>：速度更快，容量更大，价格较高</li>
          </ul>

          <h2>速度等级解读</h2>
          <table className="min-w-full border-collapse border border-gray-300 my-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">等级</th>
                <th className="border border-gray-300 px-4 py-2">最低写入速度</th>
                <th className="border border-gray-300 px-4 py-2">适用场景</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">V30</td>
                <td className="border border-gray-300 px-4 py-2">30MB/s</td>
                <td className="border border-gray-300 px-4 py-2">日常拍摄</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">V60</td>
                <td className="border border-gray-300 px-4 py-2">60MB/s</td>
                <td className="border border-gray-300 px-4 py-2">4K视频</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">V90</td>
                <td className="border border-gray-300 px-4 py-2">90MB/s</td>
                <td className="border border-gray-300 px-4 py-2">8K视频</td>
              </tr>
            </tbody>
          </table>

          <h2>品牌推荐</h2>
          <ul>
            <li>闪迪（SanDisk）</li>
            <li>金士顿（Kingston）</li>
            <li>三星（Samsung）</li>
            <li>索尼（Sony）</li>
            <li>雷克沙（Lexar）</li>
          </ul>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>选购建议</h2>
          <ol>
            <li>根据相机支持的卡类型选择</li>
            <li>根据拍摄需求选择速度等级</li>
            <li>建议购买两到三张存储卡备份使用</li>
            <li>选择正规渠道购买，避免买到假货</li>
          </ol>

          <h2>总结</h2>
          <p>选择存储卡时，除了考虑速度和容量，品牌的可靠性也很重要。建议选择主流品牌的产品，确保数据安全。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}