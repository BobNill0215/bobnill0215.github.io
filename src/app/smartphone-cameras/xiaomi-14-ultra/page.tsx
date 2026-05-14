import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '小米 14 Ultra 徕卡影像深度评测 - 相机评测网',
  description: '一英寸大底，徕卡光学，Summilux镜头人像模式，详细评测。',
};

export default function Xiaomi14UltraPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-green-600 to-emerald-500">
        <img loading="lazy" 
          src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1600" 
          alt="小米 14 Ultra" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-4 inline-block">深度评测</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">小米 14 Ultra 徕卡影像深度评测</h1>
            <p className="text-lg text-green-100">一英寸大底，徕卡光学，Summilux镜头人像模式</p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/smartphone-cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回手机相机</Link>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月11日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>小米14 Ultra是小米与徕卡深度合作的旗舰影像手机，搭载一英寸超大传感器和Summilux镜头。本文将为您带来详细的深度评测。</p>

          <h2>相机配置</h2>
          <ul>
            <li><strong>主摄</strong>：一英寸索尼IMX989，5000万像素，f/1.63-f/4.0可变光圈</li>
            <li><strong>超广角</strong>：5000万像素，122°视角</li>
            <li><strong>长焦</strong>：5000万像素，5倍光学变焦</li>
            <li><strong>超长焦</strong>：5000万像素，10倍光学变焦</li>
          </ul>

          <h2>徕卡色彩</h2>
          <p>小米14 Ultra提供了两种徕卡色彩模式：徕卡生动和徕卡经典。徕卡经典模式下的照片具有独特的色调和质感，阴影部分更加深沉，高光更加柔和。</p>

          <h2>可变光圈</h2>
          <p>主摄支持f/1.63到f/4.0的可变光圈，在不同光线条件下自动调整，兼顾虚化和景深效果。大光圈适合暗光环境和背景虚化，小光圈适合风光摄影。</p>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>人像模式</h2>
          <p>Summilux镜头在人像拍摄中表现出色，边缘清晰，肤色自然。配合小米的人像算法，可以实现专业级的背景虚化效果。</p>

          <h2>结论</h2>
          <p>小米14 Ultra是目前拍照能力最强的手机之一，与徕卡的深度合作带来了独特的影像风格。如果您追求极致的手机摄影体验，小米14 Ultra值得考虑。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}