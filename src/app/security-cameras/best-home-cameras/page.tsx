import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2024年最佳家用监控摄像头推荐 - 相机评测网',
  description: '室内户外国产精选，智能安防产品对比，帮您选择最适合的家用监控摄像头。',
};

export default function BestHomeCamerasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-purple-600 to-indigo-500">
        <img 
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600" 
          alt="监控摄像头" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-4 inline-block">监控相机</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">2024年最佳家用监控摄像头推荐</h1>
            <p className="text-lg text-purple-100">室内户外国产精选，智能安防产品对比</p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/security-cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回监控相机</Link>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月12日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>家用监控摄像头已经成为很多家庭的必备安防设备。本文将为您推荐2024年最值得购买的家用监控摄像头，涵盖不同预算和使用场景。</p>

          <h2>室内监控推荐</h2>
          
          <h3>1. 萤石 C6CN</h3>
          <p>性价比极高的室内云台摄像机：</p>
          <ul>
            <li>1080P 高清画质</li>
            <li>360度云台旋转</li>
            <li>AI 人形检测</li>
            <li>双向语音通话</li>
          </ul>

          <h3>2. 小米 智能摄像机云台版</h3>
          <p>小米生态链产品，智能联动方便：</p>
          <ul>
            <li>2K 超清画质</li>
            <li>红外夜视</li>
            <li>AI 人脸识别</li>
            <li>支持米家APP</li>
          </ul>

          <h2>室外监控推荐</h2>

          <h3>1. 萤石 C3W</h3>
          <p>室外防水摄像头，适合门口和庭院：</p>
          <ul>
            <li>IP67 防水等级</li>
            <li>全彩夜视</li>
            <li>声光报警</li>
            <li>双向对讲</li>
          </ul>

          <h3>2. 360 户外版</h3>
          <p>功能全面的室外监控选择：</p>
          <ul>
            <li>2K 超清画质</li>
            <li>PIR 人体感应</li>
            <li>云存储支持</li>
            <li>IP66 防水</li>
          </ul>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>选购要点</h2>
          <ol>
            <li><strong>画质</strong>：至少1080P，有条件选择2K或4K</li>
            <li><strong>夜视</strong>：红外夜视是标配，有条件选全彩夜视</li>
            <li><strong>存储</strong>：本地SD卡和云存储各有优缺点</li>
            <li><strong>智能功能</strong>：AI人形检测、声音检测等功能很实用</li>
            <li><strong>安装位置</strong>：室内和室外选择不同的防护等级</li>
          </ol>

          <h2>总结</h2>
          <p>选择家用监控摄像头时，建议根据实际需求和预算进行选择。室内使用可以选择性价比高的产品，室外使用则需要注重防水等级和夜视功能。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}