'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import { phonesData, brands, type PhoneCamera } from '@/data/phones';

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
          <Link
            href="/camera-compare"
            className="text-blue-600 hover:underline"
          >
            加入对比 →
          </Link>
        </div>
      </div>
    </div>
  );
}

function PhoneDetailModal({ phone, onClose }: { phone: PhoneCamera; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b sticky top-0 bg-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">{phone.name}</h2>
              <span className="text-gray-500">{phone.brand} · {phone.releaseDate}</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* 主摄像头 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
              主摄像头
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500">像素</div>
                <div className="font-bold text-xl">{phone.mainCamera.megapixels}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">光圈</div>
                <div className="font-bold text-xl">{phone.mainCamera.aperture}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">焦距</div>
                <div className="font-bold text-xl">{phone.mainCamera.focalLength}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">传感器</div>
                <div className="font-bold text-xl">{phone.mainCamera.sensorSize}</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm text-gray-500 mb-2">防抖</div>
              <div className="text-sm">{phone.mainCamera.stabilization}</div>
            </div>
            <div className="mt-4">
              <div className="text-sm text-gray-500 mb-2">特性</div>
              <div className="flex flex-wrap gap-2">
                {phone.mainCamera.features.map((f, i) => (
                  <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">{f}</span>
                ))}
              </div>
            </div>
          </div>

          {/* 超广角 */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
              超广角摄像头
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500">像素</div>
                <div className="font-bold text-xl">{phone.ultrawide.megapixels}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">光圈</div>
                <div className="font-bold text-xl">{phone.ultrawide.aperture}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">焦距</div>
                <div className="font-bold text-xl">{phone.ultrawide.focalLength}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">传感器</div>
                <div className="font-bold text-xl">{phone.ultrawide.sensorSize}</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm text-gray-500 mb-2">特性</div>
              <div className="flex flex-wrap gap-2">
                {phone.ultrawide.features.map((f, i) => (
                  <span key={i} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">{f}</span>
                ))}
              </div>
            </div>
          </div>

          {/* 长焦 */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
              长焦摄像头
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500">像素</div>
                <div className="font-bold text-xl">{phone.telephoto1.megapixels}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">光圈</div>
                <div className="font-bold text-xl">{phone.telephoto1.aperture}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">焦距</div>
                <div className="font-bold text-xl">{phone.telephoto1.focalLength}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">传感器</div>
                <div className="font-bold text-xl">{phone.telephoto1.sensorSize}</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm text-gray-500 mb-2">特性</div>
              <div className="flex flex-wrap gap-2">
                {phone.telephoto1.features.map((f, i) => (
                  <span key={i} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">{f}</span>
                ))}
              </div>
            </div>
          </div>

          {/* 第二长焦（如果有） */}
          {phone.telephoto2 && (
            <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-4">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">4</span>
                超长焦摄像头
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500">像素</div>
                  <div className="font-bold text-xl">{phone.telephoto2.megapixels}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">光圈</div>
                  <div className="font-bold text-xl">{phone.telephoto2.aperture}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">焦距</div>
                  <div className="font-bold text-xl">{phone.telephoto2.focalLength}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">传感器</div>
                  <div className="font-bold text-xl">{phone.telephoto2.sensorSize}</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-sm text-gray-500 mb-2">特性</div>
                <div className="flex flex-wrap gap-2">
                  {phone.telephoto2.features.map((f, i) => (
                    <span key={i} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 前置摄像头 */}
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">F</span>
              前置摄像头
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500">像素</div>
                <div className="font-bold text-xl">{phone.frontCamera.megapixels}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">光圈</div>
                <div className="font-bold text-xl">{phone.frontCamera.aperture}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">焦距</div>
                <div className="font-bold text-xl">{phone.frontCamera.focalLength}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">防抖</div>
                <div className="font-bold text-xl">{phone.frontCamera.stabilization}</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm text-gray-500 mb-2">特性</div>
              <div className="flex flex-wrap gap-2">
                {phone.frontCamera.features.map((f, i) => (
                  <span key={i} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">{f}</span>
                ))}
              </div>
            </div>
          </div>

          {/* 视频规格 */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-bold text-lg mb-4">📹 视频规格</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                <div className="text-sm">最大分辨率</div>
                <div className="font-bold text-xl">{phone.videoMax}</div>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-2">特色功能</div>
              <div className="flex flex-wrap gap-2">
                {phone.videoFeatures.map((f, i) => (
                  <span key={i} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{f}</span>
                ))}
              </div>
            </div>
          </div>

          {/* 图像特性 */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-bold text-lg mb-4">🖼️ 拍照特色功能</h3>
            <div className="flex flex-wrap gap-2">
              {phone.imageFeatures.map((f, i) => (
                <span key={i} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{f}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t bg-gray-50">
          <Link
            href="/camera-compare"
            className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            与其他手机对比
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PhoneDatabasePage() {
  const [selectedPhone, setSelectedPhone] = useState<PhoneCamera | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'date'>('date');

  const filteredPhones = phonesData
    .filter(phone => {
      const matchesSearch = phone.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        phone.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrand === 'all' || phone.brand === selectedBrand;
      return matchesSearch && matchesBrand;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return b.releaseDate.localeCompare(a.releaseDate);
      }
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">手机相机数据库</h1>
          <p className="text-blue-100">收录主流手机相机规格，支持搜索和筛选</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 搜索和筛选 */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="搜索手机名称或品牌..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">所有品牌</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'date')}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="date">按发布时间</option>
                <option value="name">按名称排序</option>
              </select>
            </div>
          </div>
        </div>

        {/* 结果统计 */}
        <div className="mb-6 text-gray-600">
          共找到 <span className="font-bold text-blue-600">{filteredPhones.length}</span> 部手机
        </div>

        {/* 手机列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhones.map(phone => (
            <div key={phone.id} onClick={() => setSelectedPhone(phone)}>
              <PhoneCard phone={phone} />
            </div>
          ))}
        </div>

        {filteredPhones.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p className="text-4xl mb-4">🔍</p>
            <p>未找到匹配的手机，请尝试其他搜索条件</p>
          </div>
        )}
      </div>

      <AdPlaceholder slot="phone-database" className="my-8 mx-4" />

      {/* 详情弹窗 */}
      {selectedPhone && (
        <PhoneDetailModal phone={selectedPhone} onClose={() => setSelectedPhone(null)} />
      )}

      <Footer />
    </div>
  );
}