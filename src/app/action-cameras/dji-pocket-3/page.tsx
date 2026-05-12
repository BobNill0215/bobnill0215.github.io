import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '大疆 Pocket 3 vlog神器评测 - 相机评测网',
  description: '一英寸传感器，旋转屏，云台防抖，智能跟随，详细评测。',
};

export default function DJIPocket3Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-orange-500 to-red-500">
        <img 
          src="https://images.unsplash.com/photo-1601262876412-3d8b2cd5a96f?w=1600" 
          alt="大疆 Pocket 3" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-4 inline-block">深度评测</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">大疆 Pocket 3 vlog神器评测</h1>
            <p className="text-lg text-orange-100">一英寸传感器，旋转屏，云台防抖，智能跟随</p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/action-cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回运动相机</Link>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月10日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>大疆 Pocket 3 是大疆最新一代的口袋云台相机，凭借一英寸传感器和旋转屏设计，成为了vlog创作者的新宠。本文将为您带来详细的深度评测。</p>

          <h2>外观设计</h2>
          <p>Pocket 3 延续了前代小巧便携的设计，但最大的变化是加入了一块2英寸的旋转触摸屏。这个设计让操作变得更加直观，同时也方便了自拍和低角度拍摄。</p>

          <h2>核心升级</h2>
          <ul>
            <li><strong>一英寸传感器</strong>：画质大幅提升，低光表现更出色</li>
            <li><strong>4K/120fps</strong>：支持高帧率慢动作拍摄</li>
            <li><strong>三轴云台防抖</strong>：业界领先的稳定性</li>
            <li><strong>智能跟随6.0</strong>：主角始终在画面中央</li>
            <li><strong>立体声收音</strong>：三个麦克风，支持Active Track</li>
          </ul>

          <h2>实拍体验</h2>
          <p>在实际使用中，Pocket 3 的表现令人惊喜。一英寸传感器带来的画质提升非常明显，即使在室内弱光环境下，画面依然清晰纯净。</p>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>智能功能</h2>
          <p>智能跟随功能非常实用，拍摄vlog时可以让相机自动追踪主角。旋转屏设计让自拍变得更加轻松，适合各种场景的vlog拍摄。</p>

          <h2>优缺点总结</h2>
          <h3>优点</h3>
          <ul>
            <li>出色的画质表现</li>
            <li>优秀的云台防抖</li>
            <li>旋转屏设计实用</li>
            <li>智能跟随功能强大</li>
          </ul>
          <h3>缺点</h3>
          <ul>
            <li>价格较高</li>
            <li>不防水</li>
            <li>电池续航一般</li>
          </ul>

          <h2>结论</h2>
          <p>大疆 Pocket 3 是目前最优秀的口袋云台相机之一，非常适合vlog创作者。虽然价格不菲，但对于追求高画质和便携性的用户来说，绝对值得考虑。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}