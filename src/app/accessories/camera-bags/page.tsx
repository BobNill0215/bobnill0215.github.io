import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '最佳相机包推荐 - 相机评测网',
  description: '单反/微单通用，通勤与旅行包，品牌推荐',
};

export default function CameraBagsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-teal-600 to-cyan-500">
        <img 
          src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1600" 
          alt="相机包" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-4 inline-block">配件推荐</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">最佳相机包推荐</h1>
            <p className="text-lg text-teal-100">单反/微单通用，通勤与旅行包，品牌推荐</p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/accessories" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回配件推荐</Link>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月10日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>一个好的相机包不仅能保护您的设备，还能让拍摄更加便捷。本文将为您推荐不同场景下最值得购买的相机包。</p>

          <h2>通勤包推荐</h2>
          <h3>1. 乐摄宝羚羊系列</h3>
          <p>专为城市通勤设计，外观低调，内部空间分区合理，可容纳一机两镜。</p>
          
          <h3>2. 巅峰设计Threaded系列</h3>
          <p>简约设计，多层防护，适合日常通勤使用。</p>

          <h2>旅行包推荐</h2>
          <h3>1. 曼富图Pro Light系列</h3>
          <p>专业级旅行摄影包，可容纳多机多镜，还配有笔记本电脑仓位。</p>
          
          <h3>2. 国家地理NG系列</h3>
          <p>经典设计，帆布面料，时尚与实用兼具。</p>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>选购要点</h2>
          <ul>
            <li><strong>容量</strong>：根据携带设备数量选择</li>
            <li><strong>防护性</strong>：内胆柔软度，背部防撞设计</li>
            <li><strong>背负系统</strong>：肩带宽厚，背部透气</li>
            <li><strong>取放便利</strong>：侧开设计，方便快速取机</li>
          </ul>

          <h2>总结</h2>
          <p>选择相机包时，建议到实体店实际试背，感受舒适度和空间布局是否满足自己的需求。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}