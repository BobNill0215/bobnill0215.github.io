import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '原厂 vs 副厂电池对比 - 相机评测网',
  description: '相机电池续航测试，充电器推荐',
};

export default function BatteriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-teal-600 to-cyan-500">
        <img loading="lazy" 
          src="https://images.unsplash.com/photo-1610334069251-326c90c00d0a?w=1600" 
          alt="相机电池" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-4 inline-block">对比评测</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">原厂 vs 副厂电池对比</h1>
            <p className="text-lg text-teal-100">相机电池续航测试，充电器推荐</p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/accessories" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回配件推荐</Link>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月8日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>相机电池是拍摄的重要保障，原厂电池价格较高，副厂电池则价格实惠但质量参差不齐。本文将为您详细对比原厂和副厂电池的差异。</p>

          <h2>原厂电池优势</h2>
          <ul>
            <li>续航稳定，与标称容量相符</li>
            <li>与相机完美兼容，无兼容性问题</li>
            <li>使用寿命长，衰减慢</li>
            <li>有完善的保修和售后服务</li>
          </ul>

          <h2>副厂电池优势</h2>
          <ul>
            <li>价格仅为原厂的1/3到1/2</li>
            <li>可购买多块，确保持续拍摄</li>
            <li>部分品牌质量可靠</li>
          </ul>

          <h2>续航测试</h2>
          <p>我们测试了多款副厂电池与原厂电池的续航表现：</p>
          <ul>
            <li>原厂电池：实际续航与标称值误差在5%以内</li>
            <li>优质副厂电池：实际续航约为原厂的90-95%</li>
            <li>劣质副厂电池：实际续航可能仅为原厂的60-70%</li>
          </ul>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>品牌推荐</h2>
          <h3>副厂电池品牌</h3>
          <ul>
            <li>绿联（UGREEN）</li>
            <li>绿巨能</li>
            <li>FBston</li>
            <li>斯泰克（STKCASE）</li>
          </ul>

          <h2>购买建议</h2>
          <ol>
            <li>第一块电池建议购买原厂，确保最佳体验</li>
            <li>后续备用电池可以选择知名副厂品牌</li>
            <li>避免购买价格过低的电池，可能存在虚标容量</li>
            <li>选择有FCC和CE认证的产品</li>
          </ol>

          <h2>总结</h2>
          <p>原厂电池和副厂电池各有优劣，建议根据预算和使用场景选择。重要拍摄时建议使用原厂电池，日常使用可以选择性价比更高的副厂电池。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}