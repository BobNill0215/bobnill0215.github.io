import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2024年最佳运动相机推荐 - 相机评测网',
  description: 'Vlog与极限运动拍摄利器，GoPro、大疆、Insta360等品牌运动相机对比推荐。',
};

export default function BestActionCameras2024Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-orange-500 to-red-500">
        <img 
          src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1600" 
          alt="运动相机" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-4 inline-block">运动相机</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">2024年最佳运动相机推荐</h1>
            <p className="text-lg text-orange-100">Vlog与极限运动拍摄利器，热门品牌对比</p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/action-cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回运动相机</Link>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月14日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>2024年运动相机市场概览</h2>
          <p>运动相机市场在2024年继续蓬勃发展，各品牌纷纷推出旗舰产品。GoPro、大疆、Insta360等品牌竞争激烈，为用户提供了丰富的选择。</p>

          <h2>最佳运动相机推荐</h2>
          
          <h3>1. GoPro Hero 12 Black</h3>
          <p>作为运动相机领域的领导者，GoPro Hero 12继续保持着出色的表现：</p>
          <ul>
            <li>5.3K/60fps 超高清视频</li>
            <li>HyperSmooth 6.0 超级防抖</li>
            <li>HDR 照片和视频</li>
            <li>续航时间长达2.5小时</li>
          </ul>

          <h3>2. 大疆 Action 4</h3>
          <p>大疆 Action 4 以其出色的画质和性价比赢得了众多用户：</p>
          <ul>
            <li>1/1.3英寸传感器，低光表现出色</li>
            <li>4K/120fps 高帧率录制</li>
            <li>155° 超广角镜头</li>
            <li>裸机防水18米</li>
          </ul>

          <h3>3. Insta360 X4</h3>
          <p>全景运动相机的标杆产品：</p>
          <ul>
            <li>8K 全景视频录制</li>
            <li>隐形自拍杆功能</li>
            <li>360度全景拍摄</li>
            <li>AI 智能剪辑</li>
          </ul>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>如何选择运动相机</h2>
          <p>选择运动相机时需要考虑以下因素：</p>
          <ol>
            <li><strong>使用场景</strong>：潜水、跳伞、骑行等不同场景需要不同的防水和防震性能</li>
            <li><strong>画质需求</strong>：4K已成为标配，8K正在普及</li>
            <li><strong>防抖性能</strong>：电子防抖和云台防抖各有优势</li>
            <li><strong>续航能力</strong>：户外运动需要考虑电池续航</li>
            <li><strong>配件生态</strong>：丰富的配件支持很重要</li>
          </ol>

          <h2>总结</h2>
          <p>2024年的运动相机市场提供了丰富的选择，无论您是专业摄影师还是普通用户，都能找到适合自己的产品。建议根据自身需求和预算做出选择。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}