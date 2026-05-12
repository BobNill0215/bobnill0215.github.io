import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '索尼 vs 佳能 vs 尼康 全画幅对比评测 - 相机评测网',
  description: '三大品牌旗舰微单横向对比评测',
};

export default function SonyVsCanonVsNikonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回数码相机</Link>
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">对比评测</span>
          <h1 className="text-3xl font-bold mt-4 mb-2">索尼 vs 佳能 vs 尼康 全画幅对比评测</h1>
          <p className="text-gray-600">三大品牌旗舰微单横向对比评测</p>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月1日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>索尼、佳能、尼康是全画幅微单市场的三大巨头。本文将对三大品牌的旗舰机型进行全面的横向对比，帮助您做出明智的选择。</p>

          <h2>参测机型</h2>
          <ul>
            <li>索尼 A7 IV / A7R V</li>
            <li>佳能 EOS R6 II / EOS R5 II</li>
            <li>尼康 Z6 III / Z8</li>
          </ul>

          <h2>画质对比</h2>
          <p>在画质方面，三家厂商各有特色：</p>
          <ul>
            <li><strong>索尼</strong>：高像素机型表现出色，宽容度优秀</li>
            <li><strong>佳能</strong>：直出色彩讨喜，皮肤色调自然</li>
            <li><strong>尼康</strong>：细节丰富，动态范围出色</li>
          </ul>

          <h2>对焦系统</h2>
          <p>三家厂商的对焦系统都已相当成熟，索尼的AI主体识别、佳能的全像素双核对焦、尼康的3D追踪都有出色的表现。</p>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>视频能力</h2>
          <table className="min-w-full border-collapse border border-gray-300 my-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">品牌</th>
                <th className="border border-gray-300 px-4 py-2">最高规格</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">索尼</td>
                <td className="border border-gray-300 px-4 py-2">8K 30fps / 4K 120fps</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">佳能</td>
                <td className="border border-gray-300 px-4 py-2">8K 30fps / 4K 120fps</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">尼康</td>
                <td className="border border-gray-300 px-4 py-2">8K 60fps / 4K 120fps</td>
              </tr>
            </tbody>
          </table>

          <h2>镜头生态</h2>
          <p>索尼E卡口拥有最丰富的副厂镜头选择，佳能RF卡口原生镜头素质最高，尼康Z卡口镜头性价比出色。</p>

          <h2>结论</h2>
          <p>三个品牌都是优秀的选择，具体选择取决于您的预算和使用场景。建议到实体店实际体验后再做决定。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}