import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GoPro Hero 12 vs 大疆 Action 4 对比评测 - 相机评测网',
  description: '运动相机旗舰对决，防抖测试，画质对比，帮您选择最适合的运动相机。',
};

export default function GoproVsDJIActionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-orange-500 to-red-500">
        <img 
          src="https://images.unsplash.com/photo-1574236170879-bd28f52d97c4?w=1600" 
          alt="GoPro vs 大疆" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-4 inline-block">对比评测</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">GoPro Hero 12 vs 大疆 Action 4 对比评测</h1>
            <p className="text-lg text-orange-100">运动相机旗舰对决，防抖测试，画质对比</p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/action-cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回运动相机</Link>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月12日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>运动相机市场中，GoPro和DJI大疆是两个最具竞争力的品牌。本文将对GoPro Hero 12和DJI Action 4进行全方位的对比评测，帮助您做出明智的选择。</p>

          <h2>规格对比</h2>
          <table className="min-w-full border-collapse border border-gray-300 my-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">规格</th>
                <th className="border border-gray-300 px-4 py-2">GoPro Hero 12</th>
                <th className="border border-gray-300 px-4 py-2">DJI Action 4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">传感器</td>
                <td className="border border-gray-300 px-4 py-2">1/1.9英寸</td>
                <td className="border border-gray-300 px-4 py-2">1/1.3英寸</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">最大视频</td>
                <td className="border border-gray-300 px-4 py-2">5.3K/60fps</td>
                <td className="border border-gray-300 px-4 py-2">4K/120fps</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">视角</td>
                <td className="border border-gray-300 px-4 py-2">156°</td>
                <td className="border border-gray-300 px-4 py-2">155°</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">防水深度</td>
                <td className="border border-gray-300 px-4 py-2">11米</td>
                <td className="border border-gray-300 px-4 py-2">18米</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">续航</td>
                <td className="border border-gray-300 px-4 py-2">约2.5小时</td>
                <td className="border border-gray-300 px-4 py-2">约2.7小时</td>
              </tr>
            </tbody>
          </table>

          <h2>画质对比</h2>
          <p><strong>GoPro Hero 12</strong> 在色彩还原和动态范围方面表现出色，5.3K分辨率提供了更多细节。</p>
          <p><strong>DJI Action 4</strong> 凭借更大的1/1.3英寸传感器，在低光环境下表现更佳。</p>

          <h2>防抖性能</h2>
          <p>两款相机都配备了优秀的电子防抖技术。GoPro的HyperSmooth 6.0和DJI的RockSteady 3.0+都能有效抵消抖动。实际测试中两者表现接近，都能在剧烈运动中保持画面稳定。</p>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>操作体验</h2>
          <p>GoPro Hero 12的触控操作流畅，菜单设计直观。而DJI Action 4的前置彩屏对于Vlog用户非常友好。</p>

          <h2>结论</h2>
          <p>两款相机都是出色的运动相机，选择取决于您的具体需求：</p>
          <ul>
            <li>如果您追求更高分辨率和成熟的配件生态，选择 GoPro Hero 12</li>
            <li>如果您更注重低光表现和更好的防水性能，选择 DJI Action 4</li>
          </ul>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}