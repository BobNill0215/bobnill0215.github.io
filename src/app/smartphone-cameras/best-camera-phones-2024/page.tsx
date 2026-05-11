import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2024年最佳拍照手机排行榜 - 相机评测网',
  description: '摄影爱好者手机推荐，拍照最好的手机对比，帮您选择最适合的拍照手机。',
};

export default function BestCameraPhones2024Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/smartphone-cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回手机相机</Link>
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">选购指南</span>
          <h1 className="text-3xl font-bold mt-4 mb-2">2024年最佳拍照手机排行榜</h1>
          <p className="text-gray-600">摄影爱好者手机推荐，拍照最好的手机对比</p>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月7日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>手机摄影已经成为越来越多人的日常习惯。本文将根据实际评测体验，为您推荐2024年拍照能力最强的手机。</p>

          <h2>T0级别：专业摄影旗舰</h2>
          
          <h3>1. 小米14 Ultra</h3>
          <p>与徕卡深度合作，一英寸大底，可变光圈，是目前拍照能力最强的手机之一。</p>

          <h3>2. 三星Galaxy S24 Ultra</h3>
          <p>200MP主摄，5倍光学长焦，支持8K视频录制，综合表现优秀。</p>

          <h3>3. iPhone 15 Pro Max</h3>
          <p>苹果一贯出色的色彩还原，ProRes视频，专业级摄影体验。</p>

          <h2>T1级别：高性价比选择</h2>
          
          <h3>1. 华为P70 Pro+</h3>
          <p>XMAGE影像系统，潜望式长焦，夜景表现出色。</p>

          <h3>2. vivo X100 Pro</h3>
          <p>蔡司T*镀膜，一英寸传感器，人像模式出色。</p>

          <h3>3. OPPO Find X7 Ultra</h3>
          <p>哈苏色彩，双潜望长焦，风格独特。</p>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>选购建议</h2>
          <ul>
            <li><strong>追求极致画质</strong>：选择小米14 Ultra或三星S24 Ultra</li>
            <li><strong>注重视频能力</strong>：选择iPhone 15 Pro Max</li>
            <li><strong>喜欢独特风格</strong>：根据喜好选择华为或vivo</li>
            <li><strong>预算有限</strong>：可以考虑上一代旗舰，通常会有较大优惠</li>
          </ul>

          <h2>总结</h2>
          <p>2024年的手机摄影竞争激烈，各品牌都有出色的产品。建议根据个人需求和预算进行选择，有条件的话可以到实体店实际体验后再做决定。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}