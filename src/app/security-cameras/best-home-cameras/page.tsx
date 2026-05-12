import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';
import { securityCamerasData } from '@/data/security-cameras';

export const metadata: Metadata = {
  title: '2026年最佳家用监控摄像头推荐 - 相机评测网',
  description: '2020-2026年家用监控摄像头对比，萤石、小米、360、TP-Link等品牌室内室外监控推荐。',
};

export default function BestHomeCamerasPage() {
  const sortedCameras = [...securityCamerasData].sort((a, b) => {
    const yearA = parseInt(a.releaseDate.split('-')[0]);
    const yearB = parseInt(b.releaseDate.split('-')[0]);
    if (yearB !== yearA) return yearB - yearA;
    return b.releaseDate.localeCompare(a.releaseDate);
  });

  const indoorCameras = sortedCameras.filter(c => c.type === 'indoor');
  const outdoorCameras = sortedCameras.filter(c => c.type === 'outdoor');
  const doorbellCameras = sortedCameras.filter(c => c.type === 'doorbell');
  const solarCameras = sortedCameras.filter(c => c.type === 'solar');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-purple-600 to-indigo-500">
        <img 
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600" 
          alt="监控摄像头" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm">监控相机</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">2026年最佳家用监控摄像头推荐</h1>
            <p className="text-lg text-purple-100">收录{securityCamerasData.length}款室内室外监控摄像头详细参数</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl p-4 text-white mb-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">🔒 监控摄像头数据库已更新</h3>
              <p className="text-white/90 text-sm">收录{securityCamerasData.length}款2020-2026年监控摄像头</p>
            </div>
            <Link href="/security-cameras" className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50">
              查看全部 →
            </Link>
          </div>
        </div>
      </div>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/security-cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回监控相机</Link>
          <div className="text-sm text-gray-500 mt-2">最后更新：2026年5月</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              🏠 室内监控摄像头
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {indoorCameras.map(camera => (
                <div key={camera.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-500">
                  <h3 className="font-bold text-lg mb-2">{camera.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{camera.brand} · {camera.releaseDate}</p>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-gray-500">分辨率:</span> {camera.specs.resolution}</div>
                    <div><span className="text-gray-500">夜视:</span> {camera.specs.nightVision}</div>
                    <div><span className="text-gray-500">存储:</span> {camera.specs.storage}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {camera.specs.features.slice(0, 2).map((f, i) => (
                      <span key={i} className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              🌤️ 室外监控摄像头
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {outdoorCameras.map(camera => (
                <div key={camera.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-500">
                  <h3 className="font-bold text-lg mb-2">{camera.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{camera.brand} · {camera.releaseDate}</p>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-gray-500">分辨率:</span> {camera.specs.resolution}</div>
                    <div><span className="text-gray-500">夜视:</span> {camera.specs.nightVision}</div>
                    <div><span className="text-gray-500">防水:</span> {camera.waterproof}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {camera.specs.features.slice(0, 2).map((f, i) => (
                      <span key={i} className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              🚪 智能门铃摄像头
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {doorbellCameras.map(camera => (
                <div key={camera.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border-l-4 border-orange-500">
                  <h3 className="font-bold text-lg mb-2">{camera.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{camera.brand} · {camera.releaseDate}</p>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-gray-500">分辨率:</span> {camera.specs.resolution}</div>
                    <div><span className="text-gray-500">夜视:</span> {camera.specs.nightVision}</div>
                    <div><span className="text-gray-500">防水:</span> {camera.waterproof}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {camera.specs.features.slice(0, 2).map((f, i) => (
                      <span key={i} className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              ☀️ 太阳能监控摄像头
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {solarCameras.map(camera => (
                <div key={camera.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border-l-4 border-yellow-500">
                  <h3 className="font-bold text-lg mb-2">{camera.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{camera.brand} · {camera.releaseDate}</p>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-gray-500">分辨率:</span> {camera.specs.resolution}</div>
                    <div><span className="text-gray-500">夜视:</span> {camera.specs.nightVision}</div>
                    <div><span className="text-gray-500">防水:</span> {camera.waterproof}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {camera.specs.features.slice(0, 2).map((f, i) => (
                      <span key={i} className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <div className="mt-8 bg-purple-50 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4">📊 2026年监控摄像头趋势</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-purple-900 mb-2">AI智能检测</h4>
                <p className="text-sm text-gray-600">AI人形检测、人脸识别、宠物检测成为标配</p>
              </div>
              <div>
                <h4 className="font-medium text-purple-900 mb-2">4K分辨率普及</h4>
                <p className="text-sm text-gray-600">2K/4K超清画质成为主流，全彩夜视升级</p>
              </div>
              <div>
                <h4 className="font-medium text-purple-900 mb-2">4G+太阳能</h4>
                <p className="text-sm text-gray-600">无网线环境下4G和太阳能供电方案兴起</p>
              </div>
            </div>
          </div>

          <h2>选购要点</h2>
          <ol>
            <li><strong>画质</strong>：至少1080P，有条件选择2K或4K</li>
            <li><strong>夜视</strong>：红外夜视是标配，有条件选全彩夜视</li>
            <li><strong>存储</strong>：本地SD卡和云存储各有优缺点</li>
            <li><strong>智能功能</strong>：AI人形检测、声音检测等功能很实用</li>
            <li><strong>安装位置</strong>：室内和室外选择不同的防护等级</li>
          </ol>

          <h2>总结</h2>
          <p>选择家用监控摄像头时，建议根据实际需求和预算进行选择。室内使用可以选择性价比高的产品，室外使用则需要注重防水等级和夜视功能。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}