import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '尼康 Z8 专业级全画幅微单评测 - 相机评测网',
  description: '旗舰级性能，8K视频，专业摄影师首选',
};

export default function NikonZ8Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-600 to-indigo-500">
        <img 
          src="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=1600" 
          alt="尼康 Z8" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-4 inline-block">专业评测</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">尼康 Z8 专业级全画幅微单评测</h1>
            <p className="text-lg text-blue-100">旗舰级性能，8K视频，专业摄影师首选</p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回数码相机</Link>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月3日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>尼康Z8是尼康Z系列微单的旗舰机型，继承了Z9的出色性能，同时采用了更紧凑的机身设计，是专业摄影师的理想选择。</p>

          <h2>核心性能</h2>
          <ul>
            <li><strong>4571万像素堆栈式全画幅传感器</strong>：超高速读取，低果冻效应</li>
            <li><strong>EXPEED 7处理器</strong>：强大的处理能力</li>
            <li><strong>493点对焦系统</strong>：覆盖画面广阔区域</li>
            <li><strong>20fps连拍</strong>：支持120fps连拍（JPEG）</li>
            <li><strong>8K 60fps RAW/30fps N-RAW</strong>：专业级视频能力</li>
            <li><strong>6级机身防抖</strong>：出色的稳定性</li>
          </ul>

          <h2>专业功能</h2>
          <p>Z8提供了丰富的专业功能：</p>
          <ul>
            <li>双CFexpress Type B卡槽</li>
            <li>支持8K RAW内录</li>
            <li>专业的时间码同步</li>
            <li>高亮显示斑马纹</li>
            <li>支持N-Log和HLG</li>
          </ul>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>适用场景</h2>
          <p>Z8非常适合以下专业场景：</p>
          <ul>
            <li>体育摄影：高速连拍和精准对焦</li>
            <li>野生动物：超远摄对焦能力</li>
            <li>婚礼摄影：双卡槽保障数据安全</li>
            <li>视频创作：8K录制和专业视频功能</li>
          </ul>

          <h2>结论</h2>
          <p>尼康Z8是一款真正的专业级旗舰微单相机，强大的性能、丰富的功能、出色的可靠性，是专业摄影师的不二之选。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}