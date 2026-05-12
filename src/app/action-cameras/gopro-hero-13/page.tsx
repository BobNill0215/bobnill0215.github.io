import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GoPro Hero 13 Black 新品发布 - 相机评测网',
  description: '5.3K/60fps，HB系列镜头，续航升级',
};

export default function GoproHero13Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-orange-500 to-red-500">
        <img 
          src="https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=1600" 
          alt="GoPro Hero 13" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-4 inline-block">新品资讯</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">GoPro Hero 13 Black 新品发布</h1>
            <p className="text-lg text-orange-100">5.3K/60fps，HB系列镜头，续航升级</p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/action-cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回运动相机</Link>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月6日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>GoPro Hero 13 Black是GoPro最新一代旗舰运动相机，带来了多项重要升级。本文将为您详细介绍这款新品的各项特性。</p>

          <h2>核心升级</h2>
          <ul>
            <li><strong>5.3K/60fps</strong>：更高分辨率，更高帧率</li>
            <li><strong>HB系列镜头</strong>：可更换镜头模块，支持超广角、微距等</li>
            <li><strong>续航升级</strong>：电池容量提升，续航时间更长</li>
            <li><strong>HyperSmooth 6.0</strong>：新一代电子防抖</li>
          </ul>

          <h2>新功能</h2>
          <ul>
            <li>HBLG镜头识别：自动识别镜头类型并优化设置</li>
            <li>时间码同步：多机拍摄时同步时间码</li>
            <li>GPS性能提升：更准确的位置记录</li>
          </ul>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>总结</h2>
          <p>GoPro Hero 13 Black是一款全面的升级产品，特别是HB系列镜头的加入，让运动相机的玩法更加丰富。如果您正在考虑购买运动相机，Hero 13是一个值得考虑的选择。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}