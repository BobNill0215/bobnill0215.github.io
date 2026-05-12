import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '运动相机配件套装推荐 - 相机评测网',
  description: '自拍杆、防水壳、胸前固定带等配件',
};

export default function ActionCameraAccessoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-orange-500 to-red-500">
        <img 
          src="https://images.unsplash.com/photo-1574236170879-bd28f52d97c4?w=1600" 
          alt="运动相机配件" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-4 inline-block">配件推荐</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">运动相机配件套装推荐</h1>
            <p className="text-lg text-orange-100">自拍杆、防水壳、胸前固定带等配件</p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/action-cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回运动相机</Link>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月4日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>好的配件可以让运动相机的使用体验大大提升。本文将为您推荐最实用的运动相机配件套装。</p>

          <h2>必备配件</h2>
          <h3>1. 自拍杆</h3>
          <p>推荐GoPro Volta或大疆灵眸自拍杆，支持蓝牙控制，方便自拍和团体拍摄。</p>

          <h3>2. 防水壳</h3>
          <p>虽然运动相机本身防水，但防水壳可以在更深的水下使用，适合潜水爱好者。</p>

          <h3>3. 固定配件</h3>
          <ul>
            <li>胸前固定带：适合骑行、滑雪等运动</li>
            <li>头带：适合第一人称视角</li>
            <li>车载吸盘：适合行车记录</li>
          </ul>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>推荐套装</h2>
          <p>对于入门用户，建议购买官方推出的配件套装，包含最常用的几种配件，性价比最高。</p>

          <h2>总结</h2>
          <p>根据您的使用场景选择合适的配件，不需要一次购买全部，可以逐步添加。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}