import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2026年相机镜头选购指南 - 新手镜头推荐',
  description: '相机镜头怎么选？本文详解镜头焦段、光圈、卡口等基础知识，推荐2026年最值得买的镜头。涵盖标准变焦、定焦、长焦、广角等类型。',
  keywords: '相机镜头推荐, 镜头选购指南, 镜头焦段, 新手镜头, 定焦镜头, 变焦镜头, 微单镜头',
};

export default function CameraLensGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-amber-700 to-orange-600">
        <img loading="lazy" src="https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=1600" alt="相机镜头" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-3 inline-block">配件指南</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">2026年相机镜头选购指南</h1>
            <p className="text-lg text-amber-100">新手必读：从零了解镜头参数，找到适合自己的镜头</p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="bg-white rounded-xl shadow-sm p-8">
          <div className="mb-6 pb-6 border-b">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded">配件指南</span>
              <span>阅读时间 9 分钟</span>
              <span>最后更新 2026年5月</span>
            </div>
          </div>
          <AdPlaceholder slot="article-top" className="mb-8" />
          <div className="prose max-w-none">
            <h2>前言</h2>
            <p>新手买了相机后，第一个问题往往是：接下来该买什么镜头？镜头是相机系统中影响画质最大的因素，甚至比机身更重要。本文从零开始，帮你理解镜头的核心参数。</p>

            <h2>镜头核心参数解读</h2>

            <h3>1. 焦段</h3>
            <p>焦段决定镜头的视角范围，单位是mm（毫米）。数字越小越广，越大越远。</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4">
              <table className="w-full text-sm">
                <thead><tr className="border-b"><th className="text-left p-2">焦段</th><th className="text-left p-2">类型</th><th className="text-left p-2">适合场景</th></tr></thead>
                <tbody>
                  <tr className="border-b"><td className="p-2">14-24mm</td><td className="p-2">超广角</td><td className="p-2">风光、星空、建筑</td></tr>
                  <tr className="border-b"><td className="p-2">24-35mm</td><td className="p-2">广角</td><td className="p-2">街拍、环境人像、旅行</td></tr>
                  <tr className="border-b"><td className="p-2">35-70mm</td><td className="p-2">标准</td><td className="p-2">日常、人像、纪实</td></tr>
                  <tr className="border-b"><td className="p-2">70-135mm</td><td className="p-2">中长焦</td><td className="p-2">人像、特写</td></tr>
                  <tr><td className="p-2">135mm+</td><td className="p-2">长焦</td><td className="p-2">体育、野生动物、演唱会</td></tr>
                </tbody>
              </table>
            </div>

            <h3>2. 光圈</h3>
            <p>光圈用f/表示，数字越小光圈越大。例如f/1.4比f/4大。</p>
            <ul>
              <li><strong>大光圈（f/1.2-f/1.8）</strong>：进光量多，虚化效果好，价格高</li>
              <li><strong>中等光圈（f/2.8-f/4）</strong>：均衡选择，常见于变焦镜头</li>
              <li><strong>小光圈（f/5.6-f/11）</strong>：风景摄影常用，景深大</li>
            </ul>

            <h3>3. 卡口</h3>
            <p>卡口决定了镜头能否安装在机身上。不同品牌的卡口不通用。</p>
            <ul>
              <li><strong>Canon</strong>：RF卡口（微单）、EF卡口（单反）</li>
              <li><strong>Sony</strong>：E卡口（微单，通用性最强）</li>
              <li><strong>Nikon</strong>：Z卡口（微单）、F卡口（单反）</li>
              <li><strong>Fujifilm</strong>：X卡口（APS-C）、GFX卡口（中画幅）</li>
            </ul>

            <AdPlaceholder slot="article-middle" className="my-8" />

            <h2>新手第一支镜头推荐</h2>

            <div className="bg-blue-50 rounded-xl p-6 my-6">
              <h3 className="font-bold text-lg mb-4">标准变焦镜头（第一支必买）</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold">Sony FE 24-70mm f/2.8 GM II</h4>
                  <p className="text-sm text-gray-600">索尼G大师二代，画质顶级，全能镜头</p>
                  <p className="text-sm font-medium text-blue-600">约 ¥15,000</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold">Canon RF 24-105mm f/4 L IS USM</h4>
                  <p className="text-sm text-gray-600">佳能红圈入门，焦段实用，防抖出色</p>
                  <p className="text-sm font-medium text-blue-600">约 ¥8,000</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold">Nikon Z 24-70mm f/4 S</h4>
                  <p className="text-sm text-gray-600">尼康Z卡口套机镜头，性价比高</p>
                  <p className="text-sm font-medium text-blue-600">约 ¥4,000</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 my-6">
              <h3 className="font-bold text-lg mb-4">定焦镜头（追求画质和虚化）</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold">Sony FE 50mm f/1.4 GM</h4>
                  <p className="text-sm text-gray-600">标准焦段，大光圈虚化，人像利器</p>
                  <p className="text-sm font-medium text-green-600">约 ¥10,000</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold">Canon RF 50mm f/1.8 STM</h4>
                  <p className="text-sm text-gray-600">小痰盂，最便宜的RF定焦，性价比之王</p>
                  <p className="text-sm font-medium text-green-600">约 ¥1,500</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold">Nikon Z 85mm f/1.8 S</h4>
                  <p className="text-sm text-gray-600">人像黄金焦段，画质出色</p>
                  <p className="text-sm font-medium text-green-600">约 ¥5,000</p>
                </div>
              </div>
            </div>

            <AdPlaceholder slot="article-middle-2" className="my-8" />

            <h2>常见问题</h2>

            <h3>Q: 套机镜头够用吗？</h3>
            <p>套机镜头（如24-70mm f/4或18-55mm）对于新手日常使用完全够用。建议先用套机镜头拍一段时间，了解自己的拍摄习惯后，再决定添置什么镜头。</p>

            <h3>Q: 定焦和变焦哪个好？</h3>
            <p>定焦画质更好、光圈更大、价格更低；变焦更方便、不用换镜头。建议：一支变焦 + 一支定焦是最佳组合。</p>

            <h3>Q: 腾龙和适马的副厂镜头可以买吗？</h3>
            <p>可以。腾龙和适马现在的镜头素质已经非常出色，性价比远超原厂。特别是索尼E卡口，副厂选择非常丰富。</p>

            <h3>Q: APS-C画幅和全画幅镜头通用吗？</h3>
            <p>有些品牌通用（如Sony E卡口全画幅镜头可用于APS-C机身），但APS-C镜头不能用于全画幅机身（会有暗角）。建议买全画幅镜头，未来升级机身时还能用。</p>

            <h2>预算分配建议</h2>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white my-6">
              <h3 className="font-bold text-lg mb-4">推荐镜头配置方案</h3>
              <div className="space-y-3">
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="font-medium">入门方案（¥3,000-¥5,000）</p>
                  <p className="text-sm text-blue-100">套机镜头（18-55mm或24-70mm f/4）+ 50mm f/1.8 定焦</p>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="font-medium">进阶方案（¥8,000-¥15,000）</p>
                  <p className="text-sm text-blue-100">24-70mm f/2.8 标准变焦 + 85mm f/1.8 人像定焦</p>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="font-medium">专业方案（¥20,000+）</p>
                  <p className="text-sm text-blue-100">大三元（16-35 + 24-70 + 70-200 f/2.8）+ 50mm f/1.2 定焦</p>
                </div>
              </div>
            </div>

            <h2>总结</h2>
            <p>镜头是投资，好的镜头可以用很多年。建议新手先买一支标准变焦，随着技术提升再逐步添置。记住：买你能买得起的最好的镜头。</p>

            <div className="mt-8 flex gap-4">
              <Link href="/accessories" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">查看全部配件推荐 →</Link>
              <Link href="/guides/how-to-choose-camera" className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200">回到相机选购指南 →</Link>
            </div>
          </div>
          <AdPlaceholder slot="article-bottom" className="mt-8" />
          <div className="mt-8 bg-gray-100 rounded-lg p-6">
            <h3 className="font-bold mb-2">免责声明</h3>
            <p className="text-sm text-gray-600">本文为联盟链接，我们可能会从中获得少量佣金，不影响您的购买价格。</p>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}
