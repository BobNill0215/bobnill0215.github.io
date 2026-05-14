'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Breadcrumb from '@/components/Breadcrumb';
import { phonesData, brands, type PhoneCamera } from '@/data/phones';

const PAGE_SIZE = 24;

function PhoneCard({ phone }: { phone: PhoneCamera }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-bold text-lg">{phone.name}</h3>
            <span className="text-sm text-gray-500">{phone.brand} · {phone.releaseDate}</span>
          </div>
          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
            主摄 {phone.mainCamera.megapixels}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-xs text-gray-500 mb-1">主摄</div>
            <div className="font-semibold text-sm">{phone.mainCamera.megapixels}</div>
            <div className="text-xs text-gray-600">{phone.mainCamera.aperture} · {phone.mainCamera.focalLength}</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-xs text-gray-500 mb-1">超广角</div>
            <div className="font-semibold text-sm">{phone.ultrawide.megapixels}</div>
            <div className="text-xs text-gray-600">{phone.ultrawide.aperture}</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-xs text-gray-500 mb-1">长焦</div>
            <div className="font-semibold text-sm">{phone.telephoto1.megapixels}</div>
            <div className="text-xs text-gray-600">{phone.telephoto1.aperture} · {phone.telephoto1.focalLength}</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-xs text-gray-500 mb-1">前置</div>
            <div className="font-semibold text-sm">{phone.frontCamera.megapixels}</div>
            <div className="text-xs text-gray-600">{phone.frontCamera.aperture}</div>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-blue-600 font-medium">最大 {phone.videoMax}</span>
          <Link href="/camera-compare" className="text-blue-600 hover:underline">加入对比 →</Link>
        </div>
      </div>
    </div>
  );
}

function PhoneDetailModal({ phone, onClose }: { phone: PhoneCamera; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 border-b sticky top-0 bg-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">{phone.name}</h2>
              <span className="text-gray-500">{phone.brand} · {phone.releaseDate}</span>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">✕</button>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <CameraSection title="主摄像头" color="blue" data={phone.mainCamera} icon="1" />
          <CameraSection title="超广角摄像头" color="green" data={phone.ultrawide} icon="2" />
          <CameraSection title="长焦摄像头" color="orange" data={phone.telephoto1} icon="3" />
          {phone.telephoto2 && <CameraSection title="超长焦摄像头" color="red" data={phone.telephoto2} icon="4" />}
          <FrontCameraSection data={phone.frontCamera} />
          <VideoSection max={phone.videoMax} features={phone.videoFeatures} />
          <ImageFeaturesSection features={phone.imageFeatures} />
        </div>
        <div className="p-6 border-t bg-gray-50">
          <Link href="/camera-compare" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">与其他手机对比</Link>
        </div>
      </div>
    </div>
  );
}

function CameraSection({ title, color, data, icon }: { title: string; color: string; data: PhoneCamera['mainCamera']; icon: string }) {
  const colors: Record<string, string> = { blue: 'bg-blue-50 to-indigo-50', green: 'bg-green-50 to-emerald-50', orange: 'bg-orange-50 to-amber-50', red: 'bg-red-50 to-rose-50' };
  const badge: Record<string, string> = { blue: 'bg-blue-600', green: 'bg-green-600', orange: 'bg-orange-600', red: 'bg-red-600' };
  const tag: Record<string, string> = { blue: 'bg-blue-100 text-blue-700', green: 'bg-green-100 text-green-700', orange: 'bg-orange-100 text-orange-700', red: 'bg-red-100 text-red-700' };
  return (
    <div className={`bg-gradient-to-br ${colors[color]} rounded-xl p-4`}>
      <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
        <span className={`w-8 h-8 ${badge[color]} text-white rounded-full flex items-center justify-center text-sm`}>{icon}</span>
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div><div className="text-sm text-gray-500">像素</div><div className="font-bold text-xl">{data.megapixels}</div></div>
        <div><div className="text-sm text-gray-500">光圈</div><div className="font-bold text-xl">{data.aperture}</div></div>
        <div><div className="text-sm text-gray-500">焦距</div><div className="font-bold text-xl">{data.focalLength}</div></div>
        <div><div className="text-sm text-gray-500">传感器</div><div className="font-bold text-xl">{data.sensorSize}</div></div>
      </div>
      {data.stabilization && <div className="mt-4"><div className="text-sm text-gray-500 mb-2">防抖</div><div className="text-sm">{data.stabilization}</div></div>}
      <div className="mt-4">
        <div className="text-sm text-gray-500 mb-2">特性</div>
        <div className="flex flex-wrap gap-2">{data.features.map((f, i) => <span key={i} className={`${tag[color]} px-3 py-1 rounded-full text-sm`}>{f}</span>)}</div>
      </div>
    </div>
  );
}

function FrontCameraSection({ data }: { data: PhoneCamera['frontCamera'] }) {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4">
      <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">F</span>前置摄像头</h3>
      <div className="grid grid-cols-2 gap-4">
        <div><div className="text-sm text-gray-500">像素</div><div className="font-bold text-xl">{data.megapixels}</div></div>
        <div><div className="text-sm text-gray-500">光圈</div><div className="font-bold text-xl">{data.aperture}</div></div>
        <div><div className="text-sm text-gray-500">焦距</div><div className="font-bold text-xl">{data.focalLength}</div></div>
        <div><div className="text-sm text-gray-500">防抖</div><div className="font-bold text-xl">{data.stabilization}</div></div>
      </div>
      <div className="mt-4">
        <div className="text-sm text-gray-500 mb-2">特性</div>
        <div className="flex flex-wrap gap-2">{data.features.map((f, i) => <span key={i} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">{f}</span>)}</div>
      </div>
    </div>
  );
}

function VideoSection({ max, features }: { max: string; features: string[] }) {
  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <h3 className="font-bold text-lg mb-4">📹 视频规格</h3>
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          <div className="text-sm">最大分辨率</div>
          <div className="font-bold text-xl">{max}</div>
        </div>
      </div>
      <div><div className="text-sm text-gray-500 mb-2">特色功能</div><div className="flex flex-wrap gap-2">{features.map((f, i) => <span key={i} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{f}</span>)}</div></div>
    </div>
  );
}

function ImageFeaturesSection({ features }: { features: string[] }) {
  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <h3 className="font-bold text-lg mb-4">🖼️ 拍照特色功能</h3>
      <div className="flex flex-wrap gap-2">{features.map((f, i) => <span key={i} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{f}</span>)}</div>
    </div>
  );
}

export default function PhoneDatabasePage() {
  const [selectedPhone, setSelectedPhone] = useState<PhoneCamera | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'date'>('date');
  const [page, setPage] = useState(1);

  const filteredPhones = phonesData
    .filter(phone => {
      const matchesSearch = phone.name.toLowerCase().includes(searchTerm.toLowerCase()) || phone.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrand === 'all' || phone.brand === selectedBrand;
      return matchesSearch && matchesBrand;
    })
    .sort((a, b) => sortBy === 'date' ? b.releaseDate.localeCompare(a.releaseDate) : a.name.localeCompare(b.name));

  const totalPages = Math.ceil(filteredPhones.length / PAGE_SIZE);
  const paginatedPhones = filteredPhones.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleSearch = (val: string) => { setSearchTerm(val); setPage(1); };
  const handleBrand = (val: string) => { setSelectedBrand(val); setPage(1); };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: '手机相机数据库' }]} />
          <h1 className="text-3xl font-bold mb-2">手机相机数据库</h1>
          <p className="text-blue-100">收录 {phonesData.length} 款主流手机相机规格，支持搜索和筛选</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <input type="text" placeholder="搜索手机名称或品牌..." value={searchTerm} onChange={(e) => handleSearch(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <select value={selectedBrand} onChange={(e) => handleBrand(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="all">所有品牌</option>
                {brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
              </select>
            </div>
            <div>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'name' | 'date')}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="date">按发布时间</option>
                <option value="name">按名称排序</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div className="text-gray-600">共找到 <span className="font-bold text-blue-600">{filteredPhones.length}</span> 部手机</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedPhones.map(phone => (
            <div key={phone.id} onClick={() => setSelectedPhone(phone)}><PhoneCard phone={phone} /></div>
          ))}
        </div>

        {filteredPhones.length === 0 && (
          <div className="text-center py-12 text-gray-500"><p className="text-4xl mb-4">🔍</p><p>未找到匹配的手机，请尝试其他搜索条件</p></div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button disabled={page <= 1} onClick={() => setPage(page - 1)}
              className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">上一页</button>
            {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
              let pageNum: number;
              if (totalPages <= 7) pageNum = i + 1;
              else if (page <= 4) pageNum = i + 1;
              else if (page >= totalPages - 3) pageNum = totalPages - 6 + i;
              else pageNum = page - 3 + i;
              return (
                <button key={pageNum} onClick={() => setPage(pageNum)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium ${pageNum === page ? 'bg-blue-600 text-white' : 'bg-white border hover:bg-gray-50'}`}>
                  {pageNum}
                </button>
              );
            })}
            <button disabled={page >= totalPages} onClick={() => setPage(page + 1)}
              className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">下一页</button>
          </div>
        )}
      </div>
      <AdPlaceholder slot="phone-database" className="my-8 mx-4" />
      {selectedPhone && <PhoneDetailModal phone={selectedPhone} onClose={() => setSelectedPhone(null)} />}
      <Footer />
    </div>
  );
}
