import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'vivo X100 Pro 蔡司光学评测 - 相机评测网',
  description: '蔡司T*镀膜，一英寸传感器，人像模式出色',
};

export default function VivoX100ProPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-green-600 to-emerald-500">
        <img 
          src="https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=1600" 
          alt="vivo X100 Pro" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-4 inline-block">深度评测</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">vivo X100 Pro 蔡司光学评测</h1>
            <p className="text-lg text-green-100">蔡司T*镀膜，一英寸传感器，人像模式出色</p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/smartphone-cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回手机相机</Link>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月3日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>vivo X100 Pro与蔡司深度合作，搭载了蔡司光学镜头和T*镀膜技术，是目前拍照最强的旗舰手机之一。</p>

          <h2>相机配置</h2>
          <ul>
            <li><strong>主摄</strong>：5000万像素，1英寸传感器，f/1.75光圈，蔡司镜头</li>
            <li><strong>超广角</strong>：5000万像素，f/2.0光圈</li>
            <li><strong>长焦</strong>：5000万像素，4.3倍光学变焦，蔡司APO设计</li>
          </ul>

          <h2>蔡司色彩</h2>
          <p>X100 Pro提供了蔡司自然色彩模式，色彩还原准确，风格自然。同时还有多种蔡司经典镜头虚化效果可选。</p>

          <h2>人像模式</h2>
          <p>蔡司Biotar、Planar、Sonnar等多种经典虚化效果，让手机人像摄影更加专业。</p>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>视频能力</h2>
          <p>支持4K 60fps视频录制，配合优秀的防抖算法，手持拍摄也能获得稳定画面。</p>

          <h2>总结</h2>
          <p>vivo X100 Pro的拍照能力非常出色，蔡司色彩的加持让照片具有独特的风格，是喜欢摄影的用户的好选择。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}