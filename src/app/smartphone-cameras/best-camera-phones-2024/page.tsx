import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';
import { phonesData } from '@/data/phones';
import SearchModal from '@/components/SearchModal';

export const metadata: Metadata = {
  title: '2026年最佳拍照手机排行榜 - 相机评测网',
  description: '2020-2026年旗舰拍照手机对比，iPhone 17 Pro Max、Samsung S26 Ultra、小米17 Ultra、OPPO Find X9 Ultra等热门机型详细评测。',
};

const phoneBrands = ['Apple', 'Samsung', 'Xiaomi', 'vivo', 'OPPO', 'OnePlus', 'Honor', 'Huawei', 'Google', 'Realme', 'Meizu'];

export default function BestCameraPhones2024Page() {
  const sortedPhones = [...phonesData].sort((a, b) => {
    const yearA = parseInt(a.releaseDate.split('-')[0]);
    const yearB = parseInt(b.releaseDate.split('-')[0]);
    if (yearB !== yearA) return yearB - yearA;
    return b.releaseDate.localeCompare(a.releaseDate);
  });

  const getTier = (index: number) => {
    if (index < 5) return 'tier1';
    if (index < 10) return 'tier2';
    return 'tier3';
  };

  const getBrandIcon = (brand: string) => {
    const icons: Record<string, string> = {
      Apple: '🍎',
      Samsung: '📱',
      Xiaomi: '📱',
      vivo: '📱',
      OPPO: '📱',
      OnePlus: '📱',
      Honor: '📱',
      Huawei: '📱',
      Google: '🔵',
      Realme: '📱',
      Meizu: '📱',
    };
    return icons[brand] || '📱';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-green-600 to-emerald-500">
        <img loading="lazy" 
          src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1600" 
          alt="拍照手机" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">🔥 2026年新品</span>
              <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm">手机相机</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">2026年最佳拍照手机排行榜</h1>
            <p className="text-lg text-green-100">收录2020-2026年{phonesData.length}款旗舰手机详细参数对比</p>
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
                placeholder="搜索手机品牌或型号..." 
                className="flex-1 outline-none text-sm"
              />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {phoneBrands.map(brand => (
              <Link 
                key={brand}
                href={`/smartphone-cameras/best-camera-phones-2024#${brand.toLowerCase()}`}
                className="px-3 py-2 bg-white rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors shadow-sm"
              >
                {getBrandIcon(brand)} {brand}
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-4 text-white mb-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">📱 手机数据库已更新</h3>
              <p className="text-white/90 text-sm">收录{phonesData.length}款2020-2026年旗舰手机，支持搜索对比</p>
            </div>
            <Link href="/phone-database" className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50">
              查看数据库 →
            </Link>
          </div>
        </div>
      </div>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Link href="/smartphone-cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回手机相机</Link>
          <div className="text-sm text-gray-500 mt-2">最后更新：2026年5月</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-sm">🏆</span>
              T0级别：2026年影像旗舰
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sortedPhones.filter(p => parseInt(p.releaseDate.split('-')[0]) >= 2025).slice(0, 6).map((phone, index) => (
                <div key={phone.id} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-shadow border-l-4 border-yellow-400">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{getBrandIcon(phone.brand)}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg text-gray-900">{phone.name}</h3>
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">NEW</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{phone.brand} · {phone.releaseDate}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-500">主摄:</span>
                          <span className="font-medium ml-1">{phone.mainCamera.megapixels} {phone.mainCamera.aperture}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">变焦:</span>
                          <span className="font-medium ml-1">{phone.telephoto1.focalLength}</span>
                        </div>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {phone.mainCamera.features.slice(0, 2).map((f, i) => (
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

          <section id="apple">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              🍎 Apple iPhone 系列
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sortedPhones.filter(p => p.brand === 'Apple').map(phone => (
                <div key={phone.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2">{phone.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{phone.releaseDate}</p>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-gray-500">主摄:</span> {phone.mainCamera.megapixels} {phone.mainCamera.aperture}</div>
                    <div><span className="text-gray-500">长焦:</span> {phone.telephoto1.megapixels} {phone.telephoto1.focalLength}</div>
                    <div><span className="text-gray-500">视频:</span> {phone.videoMax}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {phone.imageFeatures.slice(0, 3).map((f, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="samsung">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              📱 Samsung Galaxy S 系列
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sortedPhones.filter(p => p.brand === 'Samsung').map(phone => (
                <div key={phone.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2">{phone.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{phone.releaseDate}</p>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-gray-500">主摄:</span> {phone.mainCamera.megapixels} {phone.mainCamera.aperture}</div>
                    <div><span className="text-gray-500">长焦:</span> {phone.telephoto2?.megapixels || phone.telephoto1.megapixels} {phone.telephoto2?.focalLength || phone.telephoto1.focalLength}</div>
                    <div><span className="text-gray-500">视频:</span> {phone.videoMax}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {phone.imageFeatures.slice(0, 3).map((f, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="xiaomi">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              📱 Xiaomi 旗舰系列
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sortedPhones.filter(p => p.brand === 'Xiaomi').map(phone => (
                <div key={phone.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2">{phone.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{phone.releaseDate}</p>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-gray-500">主摄:</span> {phone.mainCamera.megapixels} {phone.mainCamera.aperture}</div>
                    <div><span className="text-gray-500">长焦:</span> {phone.telephoto1.megapixels} {phone.telephoto1.focalLength}</div>
                    <div><span className="text-gray-500">视频:</span> {phone.videoMax}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {phone.mainCamera.features.filter(f => f.includes('Leica') || f.includes('LYT')).slice(0, 2).map((f, i) => (
                      <span key={i} className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="vivo">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              📱 Vivo X 系列
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sortedPhones.filter(p => p.brand === 'vivo').map(phone => (
                <div key={phone.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2">{phone.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{phone.releaseDate}</p>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-gray-500">主摄:</span> {phone.mainCamera.megapixels} {phone.mainCamera.aperture}</div>
                    <div><span className="text-gray-500">长焦:</span> {phone.telephoto1.megapixels} {phone.telephoto1.focalLength}</div>
                    <div><span className="text-gray-500">视频:</span> {phone.videoMax}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {phone.imageFeatures.filter(f => f.includes('蔡司') || f.includes('Vivo')).slice(0, 2).map((f, i) => (
                      <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="oppo">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              📱 OPPO Find 系列
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sortedPhones.filter(p => p.brand === 'OPPO').map(phone => (
                <div key={phone.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2">{phone.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{phone.releaseDate}</p>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-gray-500">主摄:</span> {phone.mainCamera.megapixels} {phone.mainCamera.aperture}</div>
                    <div><span className="text-gray-500">长焦:</span> {phone.telephoto1?.megapixels || '-'} {phone.telephoto1?.focalLength || ''}</div>
                    <div><span className="text-gray-500">视频:</span> {phone.videoMax}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {phone.imageFeatures.filter(f => f.includes('哈苏') || f.includes('Hasselblad')).slice(0, 2).map((f, i) => (
                      <span key={i} className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="huawei">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              📱 Huawei Pura/Mate 系列
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sortedPhones.filter(p => p.brand === 'Huawei').map(phone => (
                <div key={phone.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2">{phone.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{phone.releaseDate}</p>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-gray-500">主摄:</span> {phone.mainCamera.megapixels} {phone.mainCamera.aperture}</div>
                    <div><span className="text-gray-500">长焦:</span> {phone.telephoto1.megapixels} {phone.telephoto1.focalLength}</div>
                    <div><span className="text-gray-500">视频:</span> {phone.videoMax}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {phone.imageFeatures.filter(f => f.includes('XMAGE') || f.includes('RYYB')).slice(0, 2).map((f, i) => (
                      <span key={i} className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="honor">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              📱 Honor Magic 系列
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sortedPhones.filter(p => p.brand === 'Honor').map(phone => (
                <div key={phone.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2">{phone.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{phone.releaseDate}</p>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-gray-500">主摄:</span> {phone.mainCamera.megapixels} {phone.mainCamera.aperture}</div>
                    <div><span className="text-gray-500">长焦:</span> {phone.telephoto1.megapixels} {phone.telephoto1.focalLength}</div>
                    <div><span className="text-gray-500">视频:</span> {phone.videoMax}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {phone.imageFeatures.slice(0, 2).map((f, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="oneplus">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              📱 OnePlus 旗舰系列
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sortedPhones.filter(p => p.brand === 'OnePlus').map(phone => (
                <div key={phone.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2">{phone.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{phone.releaseDate}</p>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-gray-500">主摄:</span> {phone.mainCamera.megapixels} {phone.mainCamera.aperture}</div>
                    <div><span className="text-gray-500">长焦:</span> {phone.telephoto1.megapixels} {phone.telephoto1.focalLength}</div>
                    <div><span className="text-gray-500">视频:</span> {phone.videoMax}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {phone.imageFeatures.filter(f => f.includes('Hasselblad')).map((f, i) => (
                      <span key={i} className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="google">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              🔵 Google Pixel 系列
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sortedPhones.filter(p => p.brand === 'Google').map(phone => (
                <div key={phone.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2">{phone.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{phone.releaseDate}</p>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-gray-500">主摄:</span> {phone.mainCamera.megapixels} {phone.mainCamera.aperture}</div>
                    <div><span className="text-gray-500">长焦:</span> {phone.telephoto1.megapixels} {phone.telephoto1.focalLength}</div>
                    <div><span className="text-gray-500">视频:</span> {phone.videoMax}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {phone.imageFeatures.filter(f => f.includes('Magic') || f.includes('AI')).slice(0, 2).map((f, i) => (
                      <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />

        <div className="mt-12 bg-blue-50 rounded-xl p-6">
          <h3 className="font-bold text-lg mb-4">📊 2026年手机相机趋势分析</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-blue-900 mb-2">传感器尺寸</h4>
              <p className="text-sm text-gray-600">1英寸传感器成为旗舰标配，索尼LYT系列主导市场</p>
            </div>
            <div>
              <h4 className="font-medium text-blue-900 mb-2">长焦升级</h4>
              <p className="text-sm text-gray-600">200MP长焦成为趋势，10x以上光学变焦普及</p>
            </div>
            <div>
              <h4 className="font-medium text-blue-900 mb-2">AI计算摄影</h4>
              <p className="text-sm text-gray-600">AI ISP芯片成为标配，实时降噪、HDR合成智能化</p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}