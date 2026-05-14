import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '谷歌 Pixel 9 Pro AI摄影功能解析 - 相机评测网',
  description: 'Tensor G4芯片，计算摄影，AI增强拍摄',
};

export default function Pixel9ProPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-green-600 to-emerald-500">
        <img loading="lazy" 
          src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=1600" 
          alt="Pixel 9 Pro" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-4 inline-block">新品资讯</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">谷歌 Pixel 9 Pro AI摄影功能解析</h1>
            <p className="text-lg text-green-100">Tensor G4芯片，计算摄影，AI增强拍摄</p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/smartphone-cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回手机相机</Link>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月5日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>谷歌Pixel系列一直以计算摄影著称，Pixel 9 Pro更是将AI与摄影深度结合，带来了多项创新功能。</p>

          <h2>核心硬件</h2>
          <ul>
            <li><strong>Tensor G4芯片</strong>：专为AI计算优化</li>
            <li><strong>主摄</strong>：5000万像素，f/1.68光圈</li>
            <li><strong>超广角</strong>：4800万像素，125.5度视角</li>
            <li><strong>长焦</strong>：4800万像素，5倍光学变焦</li>
          </ul>

          <h2>AI摄影功能</h2>
          <h3>Magic Eraser</h3>
          <p>智能移除照片中的不需要的元素，一键完成背景清理。</p>

          <h3>Photo Unblur</h3>
          <p>AI驱动的照片去模糊功能，让老照片和运动模糊的照片变得清晰。</p>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>Best Take</h2>
          <p>从连拍中选择最佳表情，合成一张完美的合影。</p>

          <h2>总结</h2>
          <p>Pixel 9 Pro的AI摄影功能非常强大，特别是对于喜欢后期处理的用户来说，这些AI工具可以大大提升出片效率。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}