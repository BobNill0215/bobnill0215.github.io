import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vlog拍摄配件套装推荐 - 相机评测网',
  description: '手机与相机通用稳定设备，补光灯，三脚架',
};

export default function VlogKitPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-teal-600 to-cyan-500">
        <img 
          src="https://images.unsplash.com/photo-1598387846419-c0afb8cb6bcd?w=1600" 
          alt="Vlog配件" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-4 inline-block">配件推荐</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Vlog拍摄配件套装推荐</h1>
            <p className="text-lg text-teal-100">手机与相机通用稳定设备，补光灯，三脚架</p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/accessories" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回配件推荐</Link>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月6日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>Vlog已经成为越来越多人记录生活的方式。本文将为您推荐一套完整的Vlog拍摄配件方案，适合入门和进阶用户。</p>

          <h2>稳定设备</h2>
          <h3>1. 手机稳定器</h3>
          <p>大疆 OM 6 / 浩瀚卓越 V2 是目前最受欢迎的手机稳定器，支持折叠收纳，续航时间长。</p>
          
          <h3>2. 相机稳定器</h3>
          <p>大疆 RS 3 / 智云 Weebill S 适合微单用户，轻便易用。</p>

          <h2>补光设备</h2>
          <ul>
            <li><strong>LED补光灯</strong>：南光魔光棒、小天补光灯</li>
            <li><strong>环形灯</strong>：适合美妆和人物特写</li>
            <li><strong>反光板</strong>：户外拍摄必备</li>
          </ul>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>收音设备</h2>
          <ul>
            <li><strong>无线麦克风</strong>：大疆 DJI Mic、罗德Wireless GO</li>
            <li><strong>枪式麦克风</strong>：适合相机外接</li>
          </ul>

          <h2>总结</h2>
          <p>根据预算选择合适的设备，不需要一次性购买所有配件，可以逐步升级。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}