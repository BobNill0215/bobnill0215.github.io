import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Insta360 X4 8K全景运动相机 - 相机评测网',
  description: '8K全景录制，隐形自拍杆，360度拍摄，详细评测。',
};

export default function Insta360X4Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-orange-500 to-red-500">
        <img 
          src="https://images.unsplash.com/photo-1564463836146-4e30522c298c?w=1600" 
          alt="Insta360 X4" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-4 inline-block">深度评测</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Insta360 X4 8K全景运动相机</h1>
            <p className="text-lg text-orange-100">8K全景录制，隐形自拍杆，360度拍摄</p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/action-cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回运动相机</Link>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月8日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>Insta360 X4 是Insta360最新一代全景运动相机，首次支持8K全景视频录制。本文将为您带来详细的深度评测。</p>

          <h2>核心升级</h2>
          <ul>
            <li><strong>8K全景录制</strong>：业界首款8K全景运动相机</li>
            <li><strong>5.7K/120fps</strong>：高帧率慢动作更流畅</li>
            <li><strong>1350mAh大电池</strong>：续航提升约30%</li>
            <li><strong>2.5英寸触摸屏</strong>：更大的取景和操作界面</li>
            <li><strong>语音控制2.0</strong>：更准确的语音指令识别</li>
          </ul>

          <h2>画质表现</h2>
          <p>X4 的画质相比前代有了质的飞跃。8K分辨率可以捕捉更多细节，即使在后期裁切也能保持高清晰度。新的AI降噪算法让弱光表现大幅提升。</p>

          <h2>隐形自拍杆</h2>
          <p>这是Insta360的标志性功能。在全景模式下，自拍杆会自动从画面中消失，让一个人也能完成专业的自拍镜头。</p>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>AI剪辑</h2>
          <p>Insta360的AI剪辑功能非常强大，可以自动识别精彩片段，生成有趣的转场效果。对于非专业用户来说，这个功能大大降低了剪辑门槛。</p>

          <h2>结论</h2>
          <p>Insta360 X4 是目前最强大的全景运动相机，8K录制、AI剪辑、隐形自拍杆等功能都非常实用。如果您对全景视频创作有需求，X4 是目前最佳的选择。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}