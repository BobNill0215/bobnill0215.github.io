import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '索尼 A7C II 全画幅微单深度评测 - 相机评测网',
  description: '轻便全画幅，对焦快速，适合旅行摄影',
};

export default function SonyA7CIITPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回数码相机</Link>
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">深度评测</span>
          <h1 className="text-3xl font-bold mt-4 mb-2">索尼 A7C II 全画幅微单深度评测</h1>
          <p className="text-gray-600">轻便全画幅，对焦快速，适合旅行摄影</p>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月10日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>索尼A7C II是A7C系列的第二代产品，继承了一代的小巧便携设计，同时在性能上有了大幅提升。本文将为您带来详细的深度评测。</p>

          <h2>外观设计</h2>
          <p>A7C II采用了与A7C类似的紧凑机身设计，重量仅514克，是目前最小的全画幅微单相机之一。机身采用镁合金材质，握持感舒适。</p>

          <h2>核心性能</h2>
          <ul>
            <li><strong>3300万像素全画幅传感器</strong>：高分辨率，出色的画质表现</li>
            <li><strong>BIONZ X处理器</strong>：高速处理，支持AI对焦</li>
            <li><strong>759点相位对焦</strong>：覆盖画面大部分区域</li>
            <li><strong>5级机身防抖</strong>：手持拍摄更稳定</li>
            <li><strong>10fps连拍</strong>：适合运动抓拍</li>
          </ul>

          <h2>视频能力</h2>
          <p>A7C II支持4K 60fps视频录制，支持10-bit 4:2:2采样。相机还支持S-Log3和S-Cinetone，方便专业后期调色。</p>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>使用体验</h2>
          <p>在实际使用中，A7C II的对焦速度非常快，人眼识别和主体追踪功能表现出色。机身虽然小巧，但续航能力依然出色，可拍摄约560张照片。</p>

          <h2>优缺点总结</h2>
          <h3>优点</h3>
          <ul>
            <li>轻便小巧，便于携带</li>
            <li>优秀的对焦性能</li>
            <li>出色的画质表现</li>
            <li>支持完整的视频功能</li>
          </ul>
          <h3>缺点</h3>
          <ul>
            <li>只有一个卡槽</li>
            <li>电子取景器较小</li>
            <li>连拍速度一般</li>
          </ul>

          <h2>结论</h2>
          <p>索尼A7C II是一款非常适合旅行摄影的全画幅微单相机，小巧的机身配合出色的性能，是旅行摄影师和日常拍摄爱好者的理想选择。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}