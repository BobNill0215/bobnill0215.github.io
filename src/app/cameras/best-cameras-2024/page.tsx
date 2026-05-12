import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';
import { camerasData } from '@/data/cameras';

export const metadata: Metadata = {
  title: '2026年最佳数码相机推荐排行榜 - 相机评测网',
  description: '2020-2026年数码相机推荐，涵盖Canon、Sony、Nikon、Fuji全画幅及APS-C微单，含详细参数对比。',
};

const cameraBrands = ['Canon', 'Sony', 'Nikon', 'Fujifilm', 'Panasonic', 'Leica', 'OM System', 'Blackmagic'];

export default function BestCameras2024Page() {
  const sortedCameras = [...camerasData].sort((a, b) => {
    const yearA = parseInt(a.releaseDate.split('-')[0]);
    const yearB = parseInt(b.releaseDate.split('-')[0]);
    if (yearB !== yearA) return yearB - yearA;
    return b.releaseDate.localeCompare(a.releaseDate);
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-600 to-blue-800">
        <img 
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1600" 
          alt="数码相机" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">🔥 2026年新品</span>
              <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm">数码相机</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">2026年最佳数码相机推荐排行榜</h1>
            <p className="text-lg text-blue-100">收录2020-2026年{camerasData.length}款数码相机详细参数对比</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔍</span>
              <input 
                type="text" 
                placeholder="搜索相机品牌或型号..." 
                className="flex-1 outline-none text-sm"
              />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {cameraBrands.map(brand => (
              <Link 
                key={brand}
                href={`#${brand.toLowerCase().replace(' ', '-')}`}
                className="px-3 py-2 bg-white rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors shadow-sm"
              >
                {brand}
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 text-white mb-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">📷 数码相机数据库已更新</h3>
              <p className="text-white/90 text-sm">收录{camerasData.length}款2020-2026年数码相机，支持搜索对比</p>
            </div>
            <Link href="/camera-database" className="bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50">
              查看数据库 →
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="bg-white rounded-xl shadow-sm p-8">
          <header className="mb-8">
            <Link href="/cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回数码相机</Link>
            <div className="text-sm text-gray-500 mt-2">最后更新：2026年5月 | 阅读时间 10 分钟</div>
          </header>

          <AdPlaceholder slot="article-top" className="mb-8" />

          <div className="prose max-w-none">
            <h2>前言</h2>
            <p>数码相机市场在2025-2026年迎来重大升级。AI对焦、部分堆叠传感器成为中高端机型标配，视频规格持续提升。本文为您推荐2026年最值得购买的数码相机。</p>

            <h2>2026年数码相机市场概览</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🤖</div>
                <h4 className="font-semibold">AI对焦普及</h4>
                <p className="text-sm text-gray-600">索尼A7V、尼康Z6III等搭载先进AI主体识别</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-semibold">部分堆叠传感器</h4>
                <p className="text-sm text-gray-600">高速读出减少果冻效应，提升连拍</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🎬</div>
                <h4 className="font-semibold">8K视频下放</h4>
                <p className="text-sm text-gray-600">专业机型向中端市场延伸</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">💰</div>
                <h4 className="font-semibold">性价比提升</h4>
                <p className="text-sm text-gray-600">尼康Z6III等机型价格更加亲民</p>
              </div>
            </div>

            <h2>按预算推荐 (2026年)</h2>

            <h3>¥5000-¥10000 入门级推荐</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
              {sortedCameras.filter(c => {
                const price = parseInt(c.price.replace(/[^0-9]/g, ''));
                return price <= 10000;
              }).slice(0, 6).map(camera => (
                <div key={camera.id} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold">{camera.name}</h4>
                  <p className="text-sm text-gray-500">{camera.price}</p>
                  <p className="text-sm mt-1">{camera.sensor.megapixels} {camera.sensor.sensorType}</p>
                </div>
              ))}
            </div>

            <h3>¥10000-¥20000 中端推荐</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
              {sortedCameras.filter(c => {
                const price = parseInt(c.price.replace(/[^0-9]/g, ''));
                return price > 10000 && price <= 20000;
              }).slice(0, 6).map(camera => (
                <div key={camera.id} className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold">{camera.name}</h4>
                  <p className="text-sm text-gray-500">{camera.price}</p>
                  <p className="text-sm mt-1">{camera.sensor.megapixels} {camera.sensor.sensorType}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {camera.sensor.features.slice(0, 2).map((f, i) => (
                      <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h3>¥20000+ 专业级推荐</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
              {sortedCameras.filter(c => {
                const price = parseInt(c.price.replace(/[^0-9]/g, ''));
                return price > 20000;
              }).slice(0, 9).map(camera => (
                <div key={camera.id} className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-bold">{camera.name}</h4>
                  <p className="text-sm text-gray-500">{camera.price}</p>
                  <p className="text-sm mt-1">{camera.sensor.megapixels} {camera.sensor.sensorType}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {camera.sensor.features.slice(0, 2).map((f, i) => (
                      <span key={i} className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <AdPlaceholder slot="article-middle" className="my-8" />

            <h2>按品牌分类</h2>
            
            <section id="canon" className="my-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                📷 Canon EOS R 系列
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {sortedCameras.filter(c => c.brand === 'Canon').map(camera => (
                  <div key={camera.id} className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-lg">{camera.name}</h4>
                    <p className="text-sm text-gray-500 mb-3">{camera.releaseDate}</p>
                    <div className="space-y-1 text-sm">
                      <div><span className="text-gray-500">传感器:</span> {camera.sensor.megapixels} {camera.sensor.sensorType}</div>
                      <div><span className="text-gray-500">视频:</span> {camera.video.maxResolution}</div>
                      <div><span className="text-gray-500">防抖:</span> {camera.sensor.stabilization}</div>
                      <div><span className="text-gray-500">连拍:</span> {camera.burst}</div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {camera.sensor.features.slice(0, 2).map((f, i) => (
                        <span key={i} className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">{f}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="sony" className="my-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                📷 Sony Alpha 系列
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {sortedCameras.filter(c => c.brand === 'Sony').map(camera => (
                  <div key={camera.id} className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-lg">{camera.name}</h4>
                    <p className="text-sm text-gray-500 mb-3">{camera.releaseDate}</p>
                    <div className="space-y-1 text-sm">
                      <div><span className="text-gray-500">传感器:</span> {camera.sensor.megapixels} {camera.sensor.sensorType}</div>
                      <div><span className="text-gray-500">视频:</span> {camera.video.maxResolution}</div>
                      <div><span className="text-gray-500">防抖:</span> {camera.sensor.stabilization}</div>
                      <div><span className="text-gray-500">连拍:</span> {camera.burst}</div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {camera.sensor.features.slice(0, 2).map((f, i) => (
                        <span key={i} className="text-xs bg-black text-white px-2 py-0.5 rounded">{f}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="nikon" className="my-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                📷 Nikon Z 系列
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {sortedCameras.filter(c => c.brand === 'Nikon').map(camera => (
                  <div key={camera.id} className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-lg">{camera.name}</h4>
                    <p className="text-sm text-gray-500 mb-3">{camera.releaseDate}</p>
                    <div className="space-y-1 text-sm">
                      <div><span className="text-gray-500">传感器:</span> {camera.sensor.megapixels} {camera.sensor.sensorType}</div>
                      <div><span className="text-gray-500">视频:</span> {camera.video.maxResolution}</div>
                      <div><span className="text-gray-500">防抖:</span> {camera.sensor.stabilization}</div>
                      <div><span className="text-gray-500">连拍:</span> {camera.burst}</div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {camera.sensor.features.slice(0, 2).map((f, i) => (
                        <span key={i} className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">{f}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="fujifilm" className="my-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                📷 Fujifilm X/GFX 系列
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {sortedCameras.filter(c => c.brand === 'Fujifilm').map(camera => (
                  <div key={camera.id} className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-lg">{camera.name}</h4>
                    <p className="text-sm text-gray-500 mb-3">{camera.releaseDate}</p>
                    <div className="space-y-1 text-sm">
                      <div><span className="text-gray-500">传感器:</span> {camera.sensor.megapixels} {camera.sensor.sensorType}</div>
                      <div><span className="text-gray-500">视频:</span> {camera.video.maxResolution}</div>
                      <div><span className="text-gray-500">防抖:</span> {camera.sensor.stabilization}</div>
                      <div><span className="text-gray-500">连拍:</span> {camera.burst}</div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {camera.sensor.features.slice(0, 2).map((f, i) => (
                        <span key={i} className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">{f}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <h2>购买建议</h2>
            <p>选择相机时，建议考虑以下因素：</p>
            <ol>
              <li><strong>使用场景</strong>：旅行摄影优先考虑轻便，室内人像关注画质</li>
              <li><strong>镜头生态</strong>：选择镜头群丰富的品牌，后期升级更方便</li>
              <li><strong>预算分配</strong>：机身重要，但镜头和配件同样不可忽视</li>
              <li><strong>操作体验</strong>：建议到实体店试用后再决定</li>
            </ol>

            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">📊 2026年数码相机趋势</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-blue-900 mb-2">AI对焦</h4>
                  <p className="text-sm text-gray-600">759点+AI主体识别成为旗舰标配，支持人体/动物/鸟类/车辆识别</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-900 mb-2">部分堆叠传感器</h4>
                  <p className="text-sm text-gray-600">高速读出，显著减少果冻效应，提升连拍性能</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-900 mb-2">视频规格提升</h4>
                  <p className="text-sm text-gray-600">7K/8K RAW录制、4K 120fps成为中高端机型标准</p>
                </div>
              </div>
            </div>

            <h2>关联配件推荐</h2>
            <p>购买相机后，这些配件也值得考虑：</p>
            <ul>
              <li><strong>存储卡</strong>：建议选择V30以上级别，支持4K视频录制</li>
              <li><strong>备用电池</strong>：原厂或品牌电池均可，注意辨别真伪</li>
              <li><strong>相机包</strong>：根据机身大小选择，保护设备安全</li>
              <li><strong>三脚架</strong>：旅行摄影建议选择轻便的碳纤维脚架</li>
            </ul>

            <h2>总结</h2>
            <p>2026年的数码相机市场提供了丰富的选择。无论您是摄影新手还是专业用户，都能找到适合自己的机型。建议在购买前明确自己的需求和预算，有条件的话可以实际体验后再做决定。</p>

            <div className="mt-8 bg-gray-100 rounded-lg p-6">
              <h3 className="font-bold mb-2">免责声明</h3>
              <p className="text-sm text-gray-600">本文包含的购买链接为联盟链接，我们可能会从中获得少量佣金，这不会影响您的购买价格。这是支持我们继续提供免费评测内容的方式之一，感谢您的理解。</p>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
}