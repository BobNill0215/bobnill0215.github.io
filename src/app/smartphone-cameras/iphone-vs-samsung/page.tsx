import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'iPhone 15 Pro Max vs 三星 S24 Ultra 拍照对比 - 相机评测网',
  description: '苹果vs三星，拍照哪个好，旗舰手机相机对比评测。',
};

export default function IphoneVsSamsungPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-green-600 to-emerald-500">
        <img 
          src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1600" 
          alt="iPhone vs 三星" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-4 inline-block">对比评测</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">iPhone 15 Pro Max vs 三星 S24 Ultra 拍照对比</h1>
            <p className="text-lg text-green-100">苹果vs三星，拍照哪个好，旗舰手机相机对比</p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/smartphone-cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回手机相机</Link>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月13日</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>iPhone 15 Pro Max和三星Galaxy S24 Ultra是目前最受关注的两款旗舰手机。本文将从多个维度对比两款手机的相机表现，帮助您了解它们各自的优劣势。</p>

          <h2>硬件规格对比</h2>
          <table className="min-w-full border-collapse border border-gray-300 my-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">规格</th>
                <th className="border border-gray-300 px-4 py-2">iPhone 15 Pro Max</th>
                <th className="border border-gray-300 px-4 py-2">三星 S24 Ultra</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">主摄像头</td>
                <td className="border border-gray-300 px-4 py-2">48MP f/1.78</td>
                <td className="border border-gray-300 px-4 py-2">200MP f/1.7</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">超广角</td>
                <td className="border border-gray-300 px-4 py-2">12MP f/2.2</td>
                <td className="border border-gray-300 px-4 py-2">12MP f/2.2</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">长焦</td>
                <td className="border border-gray-300 px-4 py-2">12MP 5倍光学</td>
                <td className="border border-gray-300 px-4 py-2">50MP 5倍光学</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">传感器尺寸</td>
                <td className="border border-gray-300 px-4 py-2">1/1.28英寸</td>
                <td className="border border-gray-300 px-4 py-2">1/1.3英寸</td>
              </tr>
            </tbody>
          </table>

          <h2>日间拍照对比</h2>
          <p>在光线充足的条件下，两款手机都能拍摄出优秀的照片。iPhone 15 Pro Max的色彩更加自然真实，而三星S24 Ultra的画面更加锐利，色彩饱和度稍高。</p>

          <h2>夜景表现</h2>
          <p>三星S24 Ultra凭借200MP传感器和更大的光圈，在夜景拍摄时能获得更明亮的画面和更多细节。iPhone 15 Pro Max的夜景模式同样出色，噪点控制更好。</p>

          <h2>人像模式</h2>
          <p>iPhone 15 Pro Max的人像模式一直备受好评，肤色调校自然，虚化效果逼真。三星S24 Ultra的人像模式也在不断进步，功能更加丰富。</p>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>视频拍摄</h2>
          <p>iPhone 15 Pro Max在视频拍摄方面依然领先，ProRes格式提供了专业级的后期空间。光学防抖让手持拍摄更加稳定。</p>

          <h2>结论</h2>
          <p>两款手机都是目前的拍照旗舰，各有特色：</p>
          <ul>
            <li>如果您注重色彩真实和视频拍摄，选择 iPhone 15 Pro Max</li>
            <li>如果您需要更高的分辨率和丰富的拍摄功能，选择三星 S24 Ultra</li>
          </ul>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}