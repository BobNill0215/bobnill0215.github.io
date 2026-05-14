import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2026年全画幅微单相机推荐 - Sony vs Canon vs Nikon',
  description: '2026年全画幅微单推荐，Sony A7 V vs Canon EOS R6 III vs Nikon Z6 III 全面对比。价格、画质、视频、对焦全方位评测，帮你选最值得买的全幅微单。',
  keywords: '全画幅微单推荐, 全幅微单对比, Sony A7V, Canon R6 III, Nikon Z6 III, 全画幅相机, 2026微单推荐',
};

export default function FullFrameMirrorlessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-indigo-700 to-violet-600">
        <img src="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=1600" alt="全画幅微单" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-3 inline-block">对比评测</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">2026年全画幅微单推荐</h1>
            <p className="text-lg text-indigo-100">Sony A7 V vs Canon R6 III vs Nikon Z6 III 全面对比</p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="bg-white rounded-xl shadow-sm p-8">
          <div className="mb-6 pb-6 border-b">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded">对比评测</span>
              <span>阅读时间 8 分钟</span>
              <span>最后更新 2026年5月</span>
            </div>
          </div>
          <AdPlaceholder slot="article-top" className="mb-8" />
          <div className="prose max-w-none">
            <h2>前言</h2>
            <p>2025-2026年是全画幅微单集体升级的一年。索尼、佳能、尼康三大品牌都推出了各自的重磅产品。本文将从画质、对焦、视频、价格等维度深度对比三大旗舰机型。</p>

            <h2>三大旗舰参数对比</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3">参数</th>
                    <th className="text-left p-3">Sony A7 V</th>
                    <th className="text-left p-3">Canon R6 III</th>
                    <th className="text-left p-3">Nikon Z6 III</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-3 font-medium">传感器</td><td className="p-3">3300万像素</td><td className="p-3">2450万像素</td><td className="p-3">2450万像素</td></tr>
                  <tr className="border-b"><td className="p-3 font-medium">处理器</td><td className="p-3">BIONZ XR</td><td className="p-3">DIGIC X</td><td className="p-3">EXPEED 7</td></tr>
                  <tr className="border-b"><td className="p-3 font-medium">机身防抖</td><td className="p-3">8档</td><td className="p-3">8档</td><td className="p-3">8档</td></tr>
                  <tr className="border-b"><td className="p-3 font-medium">视频最高</td><td className="p-3">8K 30p</td><td className="p-3">4K 120p</td><td className="p-3">6K 60p</td></tr>
                  <tr className="border-b"><td className="p-3 font-medium">连拍</td><td className="p-3">30fps (电子)</td><td className="p-3">40fps (电子)</td><td className="p-3">30fps (电子)</td></tr>
                  <tr className="border-b"><td className="p-3 font-medium">重量</td><td className="p-3">650g</td><td className="p-3">670g</td><td className="p-3">650g</td></tr>
                  <tr><td className="p-3 font-medium">价格</td><td className="p-3">约 ¥22,000</td><td className="p-3">约 ¥25,000</td><td className="p-3">约 ¥18,000</td></tr>
                </tbody>
              </table>
            </div>

            <AdPlaceholder slot="article-middle" className="my-8" />

            <h2>Sony A7 V — 全能均衡之选</h2>
            <p>索尼A7系列一直是全画幅微单的标杆。A7 V搭载了全新的3300万像素传感器，配合AI对焦系统，支持人和动物的眼部追踪。</p>
            <ul>
              <li><strong>画质</strong>：3300万像素兼顾高像素和高感，动态范围出色</li>
              <li><strong>对焦</strong>：AI对焦系统是目前最可靠的，支持多种主体识别</li>
              <li><strong>视频</strong>：8K 30p过采样，S-Log3曲线优秀</li>
              <li><strong>性价比</strong>：功能全面，价格适中</li>
            </ul>

            <h2>Canon EOS R6 III — 速度与视频之王</h2>
            <p>R6 III采用了部分堆叠传感器，读出速度大幅提升。电子快门连拍可达40fps，视频支持4K 120p。</p>
            <ul>
              <li><strong>速度</strong>：40fps电子快门，捕捉瞬间无压力</li>
              <li><strong>视频</strong>：4K 120p慢动作，视频对焦平滑</li>
              <li><strong>防抖</strong>：佳能机身防抖有口皆碑</li>
              <li><strong>价格</strong>：三大旗舰中最贵</li>
            </ul>

            <h2>Nikon Z6 III — 性价比之王</h2>
            <p>尼康Z6 III是最晚发布的，但价格最有竞争力。部分堆叠传感器带来了出色的读出速度，EXPEED 7处理器性能强劲。</p>
            <ul>
              <li><strong>价格</strong>：约¥18,000，三家中最便宜</li>
              <li><strong>EVF</strong>：576万点取景器，三家中最好</li>
              <li><strong>画质</strong>：尼康色彩科学自然，动态范围优秀</li>
              <li><strong>镜头</strong>：Z卡口镜头素质极好，但选择较少</li>
            </ul>

            <AdPlaceholder slot="article-middle-2" className="my-8" />

            <h2>如何选择？</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-blue-50 rounded-xl p-5">
                <h3 className="font-bold text-blue-800">选 Sony A7 V</h3>
                <p className="text-sm text-gray-600 mt-2">需要高像素、最全面功能、最丰富镜头群</p>
              </div>
              <div className="bg-red-50 rounded-xl p-5">
                <h3 className="font-bold text-red-800">选 Canon R6 III</h3>
                <p className="text-sm text-gray-600 mt-2">追求连拍速度、视频为主、喜欢佳能色彩</p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-5">
                <h3 className="font-bold text-yellow-800">选 Nikon Z6 III</h3>
                <p className="text-sm text-gray-600 mt-2">预算有限、追求性价比、看重取景器体验</p>
              </div>
            </div>

            <h2>镜头生态对比</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3">品牌</th>
                    <th className="text-left p-3">原生镜头数量</th>
                    <th className="text-left p-3">副厂支持</th>
                    <th className="text-left p-3">二手市场</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-3">Sony E卡口</td><td className="p-3">70+</td><td className="p-3">Tamron/Sigma 丰富</td><td className="p-3">非常丰富</td></tr>
                  <tr className="border-b"><td className="p-3">Canon RF卡口</td><td className="p-3">40+</td><td className="p-3">副厂有限</td><td className="p-3">一般</td></tr>
                  <tr><td className="p-3">Nikon Z卡口</td><td className="p-3">35+</td><td className="p-3">逐步增加</td><td className="p-3">较少</td></tr>
                </tbody>
              </table>
            </div>

            <h2>总结</h2>
            <p>2026年全画幅微单市场，三家各有千秋。Sony A7 V是最全面的选择，适合大多数用户。Canon R6 III适合视频创作者和体育摄影师。Nikon Z6 III则是预算有限但想体验顶级性能的好选择。</p>
            <p>无论选哪家，全画幅微单都能带来出色的画质和拍摄体验。</p>

            <div className="mt-8 flex gap-4">
              <Link href="/cameras/sony-vs-canon-vs-nikon" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">查看三大品牌详细对比 →</Link>
              <Link href="/camera-compare" className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200">使用对比工具 →</Link>
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
