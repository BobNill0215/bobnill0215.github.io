import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';
import { actionCamerasData } from '@/data/action-cameras';

export const metadata: Metadata = {
  title: '2026年最佳运动相机推荐 - 相机评测网',
  description: '2020-2026年运动相机对比，DJI Avata 360、GoPro Hero 13、Insta360 X5等热门机型详细评测。',
};

const actionBrands = ['DJI', 'GoPro', 'Insta360', 'AKASO', 'SJCAM', 'Ricoh'];

export default function BestActionCameras2024Page() {
  const sortedCameras = [...actionCamerasData].sort((a, b) => {
    const yearA = parseInt(a.releaseDate.split('-')[0]);
    const yearB = parseInt(b.releaseDate.split('-')[0]);
    if (yearB !== yearA) return yearB - yearA;
    return b.releaseDate.localeCompare(a.releaseDate);
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-orange-500 to-red-500">
        <img loading="lazy" 
          src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1600" 
          alt="运动相机" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">🔥 2026年新品</span>
              <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm">运动相机</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">2026年最佳运动相机推荐</h1>
            <p className="text-lg text-orange-100">收录2020-2026年{actionCamerasData.length}款运动相机详细参数对比</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 text-white mb-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">🎥 运动相机数据库已更新</h3>
              <p className="text-white/90 text-sm">收录{actionCamerasData.length}款2020-2026年运动相机，支持搜索对比</p>
            </div>
            <Link href="/action-camera-database" className="bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50">
              查看数据库 →
            </Link>
          </div>
        </div>
      </div>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/action-cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回运动相机</Link>
          <div className="text-sm text-gray-500 mt-2">最后更新：2026年5月</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-sm">🏆</span>
              2026年旗舰运动相机
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sortedCameras.filter(c => parseInt(c.releaseDate.split('-')[0]) >= 2024).slice(0, 9).map(camera => (
                <div key={camera.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border-t-4 border-orange-500">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">🎥</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg">{camera.name}</h3>
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">NEW</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{camera.brand} · {camera.releaseDate}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-500">视频:</span>
                          <span className="font-medium ml-1">{camera.videoMax}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">防水:</span>
                          <span className="font-medium ml-1">{camera.waterproof}</span>
                        </div>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {camera.mainCamera.features.slice(0, 2).map((f, i) => (
                          <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">{f}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <section id="dji">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              🎥 DJI 大疆运动相机
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sortedCameras.filter(c => c.brand === 'DJI').map(camera => (
                <div key={camera.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2">{camera.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{camera.releaseDate}</p>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-gray-500">视频:</span> {camera.videoMax}</div>
                    <div><span className="text-gray-500">防水:</span> {camera.waterproof}</div>
                    <div><span className="text-gray-500">续航:</span> {camera.battery}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {camera.mainCamera.features.slice(0, 2).map((f, i) => (
                      <span key={i} className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="gopro">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              🎥 GoPro 运动相机
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sortedCameras.filter(c => c.brand === 'GoPro').map(camera => (
                <div key={camera.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2">{camera.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{camera.releaseDate}</p>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-gray-500">视频:</span> {camera.videoMax}</div>
                    <div><span className="text-gray-500">防水:</span> {camera.waterproof}</div>
                    <div><span className="text-gray-500">重量:</span> {camera.weight}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {camera.mainCamera.features.slice(0, 2).map((f, i) => (
                      <span key={i} className="text-xs bg-black text-white px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="insta360">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              🎥 Insta360 全景运动相机
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sortedCameras.filter(c => c.brand === 'Insta360').map(camera => (
                <div key={camera.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2">{camera.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{camera.releaseDate}</p>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-gray-500">视频:</span> {camera.videoMax}</div>
                    <div><span className="text-gray-500">防水:</span> {camera.waterproof}</div>
                    <div><span className="text-gray-500">屏幕:</span> {camera.screen}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {camera.mainCamera.features.slice(0, 2).map((f, i) => (
                      <span key={i} className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="akaso">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              🎥 AKASO 运动相机
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sortedCameras.filter(c => c.brand === 'AKASO').map(camera => (
                <div key={camera.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2">{camera.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{camera.releaseDate}</p>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-gray-500">视频:</span> {camera.videoMax}</div>
                    <div><span className="text-gray-500">防水:</span> {camera.waterproof}</div>
                    <div><span className="text-gray-500">价格:</span> {camera.price}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {camera.mainCamera.features.slice(0, 2).map((f, i) => (
                      <span key={i} className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="theta">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              🎥 Ricoh Theta 全景相机
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sortedCameras.filter(c => c.brand === 'Ricoh').map(camera => (
                <div key={camera.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2">{camera.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{camera.releaseDate}</p>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-gray-500">视频:</span> {camera.videoMax}</div>
                    <div><span className="text-gray-500">防水:</span> {camera.waterproof}</div>
                    <div><span className="text-gray-500">重量:</span> {camera.weight}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {camera.mainCamera.features.slice(0, 2).map((f, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-8 bg-blue-50 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4">📊 2026年运动相机趋势</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-blue-900 mb-2">8K全景成为标配</h4>
                <p className="text-sm text-gray-600">Insta360 X5、DJI Avata 360等旗舰均支持8K 360°录制</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-900 mb-2">AI追踪普及</h4>
                <p className="text-sm text-gray-600">AI主体识别、智能跟随成为运动相机新趋势</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-900 mb-2">长续航+防水</h4>
                <p className="text-sm text-gray-600">20m裸机防水、200分钟以上续航成为主流</p>
              </div>
            </div>
          </div>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />
      </article>

      <Footer />
    </div>
  );
}