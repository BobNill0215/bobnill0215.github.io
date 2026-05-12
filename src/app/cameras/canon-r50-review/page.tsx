import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '佳能 EOS R50 入门级微单评测 - 相机评测网',
  description: '高性价比，触摸操作，适合新手摄影爱好者',
};

export default function CanonR50Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回数码相机</Link>
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">入门评测</span>
          <h1 className="text-3xl font-bold mt-4 mb-2">佳能 EOS R50 入门级微单评测</h1>
          <p className="text-gray-600">高性价比，触摸操作，适合新手摄影爱好者</p>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月5日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>佳能EOS R50是佳能RF卡口入门级微单相机，主打轻便和高性价比，非常适合摄影新手和日常用户使用。</p>

          <h2>外观设计</h2>
          <p>R50采用了紧凑的机身设计，重量仅375克，是目前最小巧的RF卡口相机。机身提供黑、白两种配色可选，满足不同用户的审美需求。</p>

          <h2>核心规格</h2>
          <ul>
            <li><strong>2420万像素APS-C传感器</strong>：出色的画质表现</li>
            <li><strong>DIGIC X处理器</strong>：高速处理能力</li>
            <li><strong>全像素双核对焦</strong>：支持眼睛检测</li>
            <li><strong>12fps连拍</strong>：适合抓拍瞬间</li>
            <li><strong>6K超采样4K 30fps</strong>：高质量视频录制</li>
          </ul>

          <h2>适合人群</h2>
          <p>EOS R50非常适合以下用户：</p>
          <ul>
            <li>摄影新手，第一台可换镜头相机</li>
            <li>需要轻便备机的摄影师</li>
            <li>Vlog博主，需要高画质视频</li>
            <li>家庭用户，记录生活点滴</li>
          </ul>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>结论</h2>
          <p>佳能EOS R50是一款非常适合新手的入门级微单相机，简单易用的操作、出色的画质、实惠的价格，是入门用户的第一选择。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}