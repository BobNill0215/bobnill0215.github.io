'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import { actionCamerasData, actionBrands, type ActionCamera } from '@/data/action-cameras';

interface ActionCameraComparisonProps {
  cameras: ActionCamera[];
}

function ActionCameraCard({ camera }: { camera: ActionCamera }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-bold text-lg">{camera.name}</h3>
          <span className="text-sm text-gray-500">{camera.brand} · {camera.releaseDate}</span>
        </div>
        <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full">
          {camera.price}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-xs text-gray-500 mb-1">最大视频</div>
          <div className="font-semibold text-blue-600">{camera.videoMax}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-xs text-gray-500 mb-1">主摄像素</div>
          <div className="font-semibold">{camera.mainCamera.megapixels}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-xs text-gray-500 mb-1">防抖</div>
          <div className="font-semibold text-sm">{camera.mainCamera.stabilization}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-xs text-gray-500 mb-1">防水深度</div>
          <div className="font-semibold">{camera.waterproof}</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {camera.videoFeatures.slice(0, 3).map((f, i) => (
          <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
            {f}
          </span>
        ))}
      </div>

      <Link
        href="/action-camera-compare"
        className="block text-center text-blue-600 hover:underline text-sm"
      >
        加入对比 →
      </Link>
    </div>
  );
}

function ActionCameraDetailModal({ camera, onClose }: { camera: ActionCamera; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b sticky top-0 bg-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">{camera.name}</h2>
              <span className="text-gray-500">{camera.brand} · {camera.releaseDate} · {camera.price}</span>
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
          {/* 主摄 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4">
            <h3 className="font-bold text-lg mb-4">📷 主摄像头</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500">像素</div>
                <div className="font-bold text-xl">{camera.mainCamera.megapixels}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">光圈</div>
                <div className="font-bold text-xl">{camera.mainCamera.aperture}</div>
              </div>
              {camera.mainCamera.focalLength && (
                <div>
                  <div className="text-sm text-gray-500">焦距</div>
                  <div className="font-bold text-xl">{camera.mainCamera.focalLength}</div>
                </div>
              )}
              {camera.mainCamera.sensorSize && (
                <div>
                  <div className="text-sm text-gray-500">传感器</div>
                  <div className="font-bold text-xl">{camera.mainCamera.sensorSize}</div>
                </div>
              )}
              <div className="col-span-2">
                <div className="text-sm text-gray-500">防抖</div>
                <div className="font-bold">{camera.mainCamera.stabilization}</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm text-gray-500 mb-2">特性</div>
              <div className="flex flex-wrap gap-2">
                {camera.mainCamera.features.map((f, i) => (
                  <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">{f}</span>
                ))}
              </div>
            </div>
          </div>

          {/* 视频规格 */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4">
            <h3 className="font-bold text-lg mb-4">📹 视频规格</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg">
                <div className="text-sm">最大分辨率</div>
                <div className="font-bold text-xl">{camera.videoMax}</div>
              </div>
            </div>
            <div className="mb-4">
              <div className="text-sm text-gray-500 mb-2">支持的格式</div>
              <div className="flex flex-wrap gap-2">
                {camera.videoFormats.map((f, i) => (
                  <span key={i} className="bg-white px-3 py-1 rounded text-sm">{f}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-2">特色功能</div>
              <div className="flex flex-wrap gap-2">
                {camera.videoFeatures.map((f, i) => (
                  <span key={i} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">{f}</span>
                ))}
              </div>
            </div>
          </div>

          {/* 硬件规格 */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-bold text-lg mb-4">⚙️ 硬件规格</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500">续航</div>
                <div className="font-semibold">{camera.battery}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">防水</div>
                <div className="font-semibold">{camera.waterproof}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">重量</div>
                <div className="font-semibold">{camera.weight}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">尺寸</div>
                <div className="font-semibold text-sm">{camera.dimensions}</div>
              </div>
              <div className="col-span-2">
                <div className="text-sm text-gray-500">屏幕</div>
                <div className="font-semibold">{camera.screen}</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm text-gray-500 mb-2">连接方式</div>
              <div className="flex flex-wrap gap-2">
                {camera.connectivity.map((c, i) => (
                  <span key={i} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{c}</span>
                ))}
              </div>
            </div>
          </div>

          {/* 拍照功能 */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-bold text-lg mb-4">🖼️ 拍照功能</h3>
            <div className="flex flex-wrap gap-2">
              {camera.imageFeatures.map((f, i) => (
                <span key={i} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{f}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t bg-gray-50">
          <Link
            href="/action-camera-compare"
            className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            与其他运动相机对比
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ActionCameraDatabasePage() {
  const [selectedCamera, setSelectedCamera] = useState<ActionCamera | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'date' | 'price'>('date');

  const filteredCameras = actionCamerasData
    .filter(camera => {
      const matchesSearch = camera.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        camera.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrand === 'all' || camera.brand === selectedBrand;
      return matchesSearch && matchesBrand;
    })
    .sort((a, b) => {
      if (sortBy === 'date') return b.releaseDate.localeCompare(a.releaseDate);
      if (sortBy === 'price') {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
        return priceA - priceB;
      }
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">手持/运动相机数据库</h1>
          <p className="text-orange-100">收录GoPro、大疆、Insta360等运动相机规格</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 搜索和筛选 */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="搜索相机名称或品牌..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="all">所有品牌</option>
                {actionBrands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'date' | 'price')}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="date">按发布时间</option>
                <option value="name">按名称排序</option>
                <option value="price">按价格排序</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-6 text-gray-600">
          共找到 <span className="font-bold text-orange-600">{filteredCameras.length}</span> 部运动相机
        </div>

        {/* 相机列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCameras.map(camera => (
            <div key={camera.id} onClick={() => setSelectedCamera(camera)}>
              <ActionCameraCard camera={camera} />
            </div>
          ))}
        </div>
      </div>

      <AdPlaceholder slot="action-camera-database" className="my-8 mx-4" />

      {selectedCamera && (
        <ActionCameraDetailModal camera={selectedCamera} onClose={() => setSelectedCamera(null)} />
      )}

      <Footer />
    </div>
  );
}