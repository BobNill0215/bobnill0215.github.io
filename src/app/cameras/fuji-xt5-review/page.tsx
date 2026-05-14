import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '富士 X-T5 复古旗舰APS-C相机评测 - 相机评测网',
  description: '4020万像素，40种胶片模拟，经典复古设计',
};

export default function FujiXT5Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-600 to-indigo-500">
        <img loading="lazy" 
          src="https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=1600" 
          alt="富士 X-T5" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-4 inline-block">深度评测</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">富士 X-T5 复古旗舰APS-C相机评测</h1>
            <p className="text-lg text-blue-100">4020万像素，40种胶片模拟，经典复古设计</p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回数码相机</Link>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月8日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>富士X-T5是X-T系列的第五代旗舰机型，采用了复古设计语言，同时在性能上达到了APS-C画幅的顶尖水平。</p>

          <h2>外观设计</h2>
          <p>X-T5延续了X-T系列的经典复古设计，机身采用镁合金材质，质感出色。整机重量仅557克，是目前最轻便的旗舰APS-C相机之一。</p>

          <h2>核心升级</h2>
          <ul>
            <li><strong>4020万像素X-Trans CMOS 5 HR传感器</strong>：高分辨率，出色的画质</li>
            <li><strong>X-Processor 5处理器</strong>：高速处理，低功耗</li>
            <li><strong>7级机身防抖</strong>：业界领先的防抖性能</li>
            <li><strong>AI主体检测对焦</strong>：可识别多种主体</li>
            <li><strong>6.2K 30fps视频</strong>：支持ProRes编码</li>
          </ul>

          <h2>胶片模拟</h2>
          <p>X-T5提供了19种胶片模拟模式，包括经典的Velvia、Provia、Astia等，以及新加入的Reala Ace。用户可以根据场景选择合适的色彩风格。</p>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>使用体验</h2>
          <p>在实际使用中，X-T5的操控非常出色，经典的三拨盘设计让用户可以快速调整参数。425点对焦系统覆盖画面广阔区域，对焦速度快且准确。</p>

          <h2>结论</h2>
          <p>富士X-T5是一款非常出色的APS-C画幅旗舰相机，复古的设计、出色的画质、丰富的胶片模拟模式，使其成为摄影爱好者和专业摄影师的理想选择。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}