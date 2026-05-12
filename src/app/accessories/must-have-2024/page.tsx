import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2024年相机配件必Buy清单 - 相机评测网',
  description: '摄影新手必备装备，存储卡、电池、三脚架',
};

export default function MustHave2024Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/accessories" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回配件推荐</Link>
          <span className="bg-teal-600 text-white text-xs px-2 py-1 rounded">选购指南</span>
          <h1 className="text-3xl font-bold mt-4 mb-2">2024年相机配件必Buy清单</h1>
          <p className="text-gray-600">摄影新手必备装备，存储卡、电池、三脚架</p>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月14日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>买了新相机后，该如何选择配件？本文为您整理了2024年最值得购买的相机配件清单，帮助新手用户做出明智的选择。</p>

          <h2>存储设备</h2>
          <h3>1. 存储卡</h3>
          <p>建议选择V30以上级别的SD卡，容量32GB起，有条件的可以上64GB或128GB。品牌推荐闪迪、金士顿、三星。</p>
          
          <h3>2. 读卡器</h3>
          <p>一个可靠的读卡器很重要，建议选择USB 3.0以上接口，传输速度更快。</p>

          <h2>电池与充电</h2>
          <h3>1. 备用电池</h3>
          <p>至少购买一块原装或品牌备用电池，确保长时间拍摄不断电。</p>
          
          <h3>2. 充电器</h3>
          <p>多节电池充电器可以同时为多块电池充电，非常方便。</p>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>稳定设备</h2>
          <h3>1. 三脚架</h3>
          <p>入门用户建议选择铝合金脚架，性价比高。旅行用户可以考虑碳纤维脚架，更轻便。</p>
          
          <h3>2. 相机包</h3>
          <p>一个好的相机包可以保护您的设备，建议选择内胆柔软、分区合理的款式。</p>

          <h2>清洁设备</h2>
          <ul>
            <li>气吹：清理镜头和传感器灰尘</li>
            <li>镜头纸：擦拭镜头镜片</li>
            <li>镜头笔：去除油污和指纹</li>
          </ul>

          <h2>总结</h2>
          <p>以上配件清单覆盖了摄影的基本需求，根据自己的预算和使用场景选择合适的配件，可以大大提升拍摄体验。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}