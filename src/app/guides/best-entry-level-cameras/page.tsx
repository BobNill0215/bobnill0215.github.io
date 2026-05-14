import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2026年入门相机推荐 - 新手买什么相机好？',
  description: '2026年最适合新手的入门相机推荐，涵盖微单、单反和卡片机。从Canon R50到Sony ZV-E10，详细对比各机型优缺点及价格。',
  keywords: '入门相机推荐, 新手相机, 微单推荐, 入门微单, 便宜相机, 2026相机推荐',
};

export default function BestEntryLevelCamerasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-green-700 to-emerald-600">
        <img src="https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=1600" alt="入门相机" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-3 inline-block">新手必看</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">2026年入门相机推荐</h1>
            <p className="text-lg text-green-100">新手买什么相机？从零到一，找到最适合你的第一台相机</p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="bg-white rounded-xl shadow-sm p-8">
          <div className="mb-6 pb-6 border-b">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded">新手必读</span>
              <span>阅读时间 10 分钟</span>
              <span>最后更新 2026年5月</span>
            </div>
          </div>
          <AdPlaceholder slot="article-top" className="mb-8" />
          <div className="prose max-w-none">
            <h2>前言</h2>
            <p>第一次买相机，面对琳琅满目的品牌和型号，很容易挑花眼。本文从预算出发，精选 6 款 2026 年最值得新手入门的相机，从 2000 元到 10000 元全覆盖。</p>

            <h2>新手买相机三大原则</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-blue-50 rounded-xl p-5 text-center">
                <div className="text-3xl mb-2">🤏</div>
                <h4 className="font-semibold">愿意带出门</h4>
                <p className="text-sm text-gray-600 mt-1">再好的相机，不愿意带也是浪费</p>
              </div>
              <div className="bg-green-50 rounded-xl p-5 text-center">
                <div className="text-3xl mb-2">💰</div>
                <h4 className="font-semibold">预算留一半买镜头</h4>
                <p className="text-sm text-gray-600 mt-1">镜头比机身更影响出片效果</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-5 text-center">
                <div className="text-3xl mb-2">👆</div>
                <h4 className="font-semibold">试过再买</h4>
                <p className="text-sm text-gray-600 mt-1">建议到实体店上手感受手感</p>
              </div>
            </div>

            <h2>¥2000-¥4000 入门推荐</h2>

            <div className="bg-white border rounded-xl p-6 my-4 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-bold flex-shrink-0">最佳入门</span>
                <div>
                  <h3 className="text-xl font-bold">Canon EOS R50</h3>
                  <p className="text-gray-500 text-sm">APS-C微单 | 2420万像素 | 套机约 ¥4,500</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-green-700">优点</h4>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>✓ 操作简单，引导模式对新手友好</li>
                    <li>✓ 佳能色彩科学，人像肤色自然</li>
                    <li>✓ 侧翻屏，自拍Vlog方便</li>
                    <li>✓ 轻便小巧，仅375g</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-600">缺点</h4>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>✗ 4K视频有裁切</li>
                    <li>✗ 镜头选择不如索尼丰富</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3">适合：新手入门、日常记录、人像摄影</p>
            </div>

            <div className="bg-white border rounded-xl p-6 my-4 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-bold flex-shrink-0">Vlog首选</span>
                <div>
                  <h3 className="text-xl font-bold">Sony ZV-E10 II</h3>
                  <p className="text-gray-500 text-sm">APS-C微单 | 2600万像素 | 套机约 ¥5,000</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-green-700">优点</h4>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>✓ 专门为Vlog优化，一键散景</li>
                    <li>✓ 优秀的眼部追焦</li>
                    <li>✓ 侧翻屏+3胶囊麦克风</li>
                    <li>✓ E卡口镜头群丰富</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-600">缺点</h4>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>✗ 没有取景器</li>
                    <li>✗ 续航一般</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3">适合：Vlog创作、内容创作者、视频为主</p>
            </div>

            <AdPlaceholder slot="article-middle" className="my-8" />

            <h2>¥5000-¥8000 进阶入门</h2>

            <div className="bg-white border rounded-xl p-6 my-4 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm font-bold flex-shrink-0">画质之选</span>
                <div>
                  <h3 className="text-xl font-bold">Fujifilm X-T30 II</h3>
                  <p className="text-gray-500 text-sm">APS-C微单 | 2610万像素 | 机身约 ¥6,000</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-green-700">优点</h4>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>✓ 胶片模拟直出好看，不用后期</li>
                    <li>✓ 复古外观，颜值高</li>
                    <li>✓ 画质出色，色彩独特</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-600">缺点</h4>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>✗ 续航一般</li>
                    <li>✗ 机身防抖较弱</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3">适合：街拍、旅行、喜欢直出色彩的摄影爱好者</p>
            </div>

            <div className="bg-white border rounded-xl p-6 my-4 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-bold flex-shrink-0">全画幅入门</span>
                <div>
                  <h3 className="text-xl font-bold">Nikon Z5</h3>
                  <p className="text-gray-500 text-sm">全画幅微单 | 2430万像素 | 机身约 ¥8,000</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-green-700">优点</h4>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>✓ 全画幅入门性价比最高</li>
                    <li>✓ 机身防抖，手持夜景可用</li>
                    <li>✓ 双卡槽，专业配置</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-600">缺点</h4>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>✗ 连拍速度一般</li>
                    <li>✗ 视频规格不高</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3">适合：预算有限但想体验全画幅的用户</p>
            </div>

            <AdPlaceholder slot="article-middle-2" className="my-8" />

            <h2>卡片机推荐（最便携）</h2>

            <div className="bg-white border rounded-xl p-6 my-4 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="bg-pink-500 text-white px-2 py-1 rounded text-sm font-bold flex-shrink-0">旅行神器</span>
                <div>
                  <h3 className="text-xl font-bold">Sony ZV-1 II</h3>
                  <p className="text-gray-500 text-sm">1英寸卡片机 | 2010万像素 | 约 ¥4,500</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-green-700">优点</h4>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>✓ 口袋大小，随身携带</li>
                    <li>✓ 超广角18mm，自拍无压力</li>
                    <li>✓ 入门级Vlog卡片机首选</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-600">缺点</h4>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>✗ 传感器较小，画质有限</li>
                    <li>✗ 暗光表现一般</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3">适合：旅行记录、日常随拍、不想背重设备</p>
            </div>

            <h2>购买建议总结</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3">需求</th>
                    <th className="text-left p-3">推荐机型</th>
                    <th className="text-left p-3">预算</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-3">新手入门，操作简单</td><td className="p-3 font-medium">Canon EOS R50</td><td className="p-3">¥4,500</td></tr>
                  <tr className="border-b"><td className="p-3">拍Vlog，视频为主</td><td className="p-3 font-medium">Sony ZV-E10 II</td><td className="p-3">¥5,000</td></tr>
                  <tr className="border-b"><td className="p-3">直出好看，不爱后期</td><td className="p-3 font-medium">Fujifilm X-T30 II</td><td className="p-3">¥6,000</td></tr>
                  <tr className="border-b"><td className="p-3">最便宜全画幅</td><td className="p-3 font-medium">Nikon Z5</td><td className="p-3">¥8,000</td></tr>
                  <tr><td className="p-3">便携随身</td><td className="p-3 font-medium">Sony ZV-1 II</td><td className="p-3">¥4,500</td></tr>
                </tbody>
              </table>
            </div>

            <h2>总结</h2>
            <p>入门相机没有完美之选，只有最适合您的选择。建议先明确自己的需求：拍照片为主还是视频为主？预算多少？愿意背多重的设备？想清楚这些，选择就不难了。</p>
            <p>如果还是犹豫不决，可以先去实体店上手试试，手感很重要。</p>

            <div className="mt-8 flex gap-4">
              <Link href="/guides/how-to-choose-camera" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">查看完整选购指南 →</Link>
              <Link href="/camera-database" className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200">浏览相机数据库 →</Link>
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
