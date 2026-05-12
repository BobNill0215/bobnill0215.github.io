import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '华为 P70 Pro+ XMAGE影像系统评测 - 相机评测网',
  description: '国产旗舰手机摄影，潜望式长焦，夜景表现出色',
};

export default function HuaweiP70ProPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-green-600 to-emerald-500">
        <img 
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1600" 
          alt="华为 P70 Pro+" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-4 inline-block">深度评测</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">华为 P70 Pro+ XMAGE影像系统评测</h1>
            <p className="text-lg text-green-100">国产旗舰手机摄影，潜望式长焦，夜景表现出色</p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/smartphone-cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回手机相机</Link>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月9日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>华为P70 Pro+是华为最新的旗舰手机，搭载了XMAGE影像系统，在手机摄影领域继续保持着领先地位。</p>

          <h2>相机配置</h2>
          <ul>
            <li><strong>主摄</strong>：5000万像素，1英寸传感器，f/1.4-f/4.0可变光圈</li>
            <li><strong>超广角</strong>：4000万像素，f/2.2光圈</li>
            <li><strong>长焦</strong>：5000万像素，5倍光学变焦，潜望式设计</li>
          </ul>

          <h2>XMAGE影像系统</h2>
          <p>华为XMAGE是华为自主研发的影像技术，带来独特的色彩风格和优秀的成像质量。</p>

          <h2>夜景表现</h2>
          <p>P70 Pro+的夜景模式表现出色，得益于大光圈和RYYB传感器，在暗光环境下依然能拍摄出清晰明亮的照片。</p>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>长焦能力</h2>
          <p>5倍光学变焦配合华为的数字变焦算法，可以实现10倍混合变焦和100倍数字变焦，满足各种远摄需求。</p>

          <h2>总结</h2>
          <p>华为P70 Pro+是一款拍照能力出色的旗舰手机，特别是长焦和夜景表现令人印象深刻，是国产手机摄影的标杆产品。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}