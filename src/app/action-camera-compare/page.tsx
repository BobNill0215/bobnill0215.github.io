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

function ActionCameraComparison({ cameras }: ActionCameraComparisonProps) {
  const [compareMode, setCompareMode] = useState<'side-by-side' | 'specs'>('side-by-side');

  if (cameras.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>请从左侧选择要对比的运动相机（最多4部）</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">对比结果 ({cameras.length}部运动相机)</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setCompareMode('side-by-side')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              compareMode === 'side-by-side'
                ? 'bg-orange-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            并排对比
          </button>
          <button
            onClick={() => setCompareMode('specs')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              compareMode === 'specs'
                ? 'bg-orange-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            规格表对比
          </button>
        </div>
      </div>

      {compareMode === 'side-by-side' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cameras.map((camera) => (
            <div key={camera.id} className="bg-white rounded-xl shadow-sm border p-4">
              <div className="text-center mb-4">
                <h3 className="font-bold text-lg">{camera.name}</h3>
                <span className="text-sm text-gray-500">{camera.brand}</span>
                <span className="block text-orange-600 font-semibold mt-1">{camera.price}</span>
              </div>

              <div className="space-y-3">
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-xs text-blue-600 mb-1">最大视频</div>
                  <div className="font-bold text-blue-600">{camera.videoMax}</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1">主摄像素</div>
                  <div className="font-semibold">{camera.mainCamera.mp}</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1">防抖</div>
                  <div className="text-sm font-medium">{camera.mainCamera.stabilization}</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1">光圈</div>
                  <div className="font-semibold">{camera.mainCamera.aperture}</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1">防水深度</div>
                  <div className="font-semibold">{camera.waterproof}</div>
                </div>

                <div className="border-t pt-3">
                  <div className="text-xs text-gray-500 mb-1">续航</div>
                  <div className="text-sm font-medium">{camera.battery}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm p-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <th className="p-3 text-left font-semibold w-32">参数</th>
                {cameras.map(c => (
                  <th key={c.id} className="p-3 text-center font-semibold min-w-44">{c.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-medium text-gray-600">品牌</td>
                {cameras.map(c => (
                  <td key={c.id} className="p-3 text-center">{c.brand}</td>
                ))}
              </tr>
              <tr className="border-b bg-gray-50/50">
                <td className="p-3 font-medium text-gray-600">价格</td>
                {cameras.map(c => (
                  <td key={c.id} className="p-3 text-center font-semibold text-orange-600">{c.price}</td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium text-gray-600">最大视频</td>
                {cameras.map(c => (
                  <td key={c.id} className="p-3 text-center font-semibold text-blue-600">{c.videoMax}</td>
                ))}
              </tr>
              <tr className="border-b bg-gray-50/50">
                <td className="p-3 font-medium text-gray-600">主摄像素</td>
                {cameras.map(c => (
                  <td key={c.id} className="p-3 text-center">{c.mainCamera.mp}</td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium text-gray-600">光圈</td>
                {cameras.map(c => (
                  <td key={c.id} className="p-3 text-center">{c.mainCamera.aperture}</td>
                ))}
              </tr>
              <tr className="border-b bg-gray-50/50">
                <td className="p-3 font-medium text-gray-600">防抖</td>
                {cameras.map(c => (
                  <td key={c.id} className="p-3 text-center text-sm">{c.mainCamera.stabilization}</td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium text-gray-600">传感器</td>
                {cameras.map(c => (
                  <td key={c.id} className="p-3 text-center">{c.mainCamera.sensorSize || '-'}</td>
                ))}
              </tr>
              <tr className="border-b bg-gray-50/50">
                <td className="p-3 font-medium text-gray-600">防水深度</td>
                {cameras.map(c => (
                  <td key={c.id} className="p-3 text-center">{c.waterproof}</td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium text-gray-600">续航</td>
                {cameras.map(c => (
                  <td key={c.id} className="p-3 text-center">{c.battery}</td>
                ))}
              </tr>
              <tr className="border-b bg-gray-50/50">
                <td className="p-3 font-medium text-gray-600">重量</td>
                {cameras.map(c => (
                  <td key={c.id} className="p-3 text-center">{c.weight}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-gray-600">特色功能</td>
                <td colSpan={cameras.length} className="p-3">
                  <div className="flex flex-wrap gap-1">
                    {cameras[0].videoFeatures.slice(0, 4).map((f, i) => (
                      <span key={i} className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">{f}</span>
                    ))}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default function ActionCameraComparePage() {
  const [selectedCameras, setSelectedCameras] = useState<ActionCamera[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');

  const filteredCameras = actionCamerasData.filter(camera => {
    const matchesSearch = camera.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      camera.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || camera.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  const toggleCamera = (camera: ActionCamera) => {
    const isSelected = selectedCameras.some(c => c.id === camera.id);
    if (isSelected) {
      setSelectedCameras(selectedCameras.filter(c => c.id !== camera.id));
    } else if (selectedCameras.length < 4) {
      setSelectedCameras([...selectedCameras, camera]);
    }
  };

  const removeCamera = (id: string) => {
    setSelectedCameras(selectedCameras.filter(c => c.id !== id));
  };

  const clearAll = () => setSelectedCameras([]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">运动相机参数对比</h1>
          <p className="text-orange-100">选择最多4部运动相机进行详细对比</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧：相机选择列表 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-4 sticky top-20">
              <h2 className="font-bold text-lg mb-4">选择运动相机</h2>

              {selectedCameras.length > 0 && (
                <div className="mb-4 p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-orange-700">
                      已选择 {selectedCameras.length}/4 部
                    </span>
                    <button onClick={clearAll} className="text-xs text-orange-600 hover:text-orange-800">
                      清除全部
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedCameras.map(camera => (
                      <div key={camera.id} className="flex items-center gap-2 bg-white px-2 py-1 rounded-full text-sm">
                        <span>{camera.name}</span>
                        <button onClick={() => removeCamera(camera.id)} className="text-gray-400 hover:text-red-500">×</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-4">
                <input
                  type="text"
                  placeholder="搜索运动相机..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="mb-4">
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

              <div className="space-y-2 max-h-[500px] overflow-y-auto">
                {filteredCameras.map(camera => {
                  const isSelected = selectedCameras.some(c => c.id === camera.id);
                  return (
                    <div
                      key={camera.id}
                      onClick={() => toggleCamera(camera)}
                      className={`p-3 rounded-lg cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{camera.name}</div>
                          <div className={`text-sm ${isSelected ? 'text-orange-200' : 'text-gray-500'}`}>
                            {camera.brand} · {camera.videoMax}
                          </div>
                        </div>
                        <span className="text-xs text-gray-400">{camera.price}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 右侧：对比结果 */}
          <div className="lg:col-span-2">
            {selectedCameras.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <div className="text-6xl mb-4">🎥</div>
                <h3 className="text-xl font-bold mb-2">请选择运动相机进行对比</h3>
                <p className="text-gray-500">从左侧列表选择至少1部运动相机，最多4部</p>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <ActionCameraComparison cameras={selectedCameras} />

                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-bold mb-4">推荐阅读</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link href="/action-cameras/gopro-vs-dji" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <div className="text-sm text-gray-500">对比评测</div>
                      <div className="font-medium">GoPro vs 大疆 对比</div>
                    </Link>
                    <Link href="/action-cameras/best-action-cameras-2024" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <div className="text-sm text-gray-500">选购指南</div>
                      <div className="font-medium">2024最佳运动相机</div>
                    </Link>
                    <Link href="/action-cameras/dji-pocket-3" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <div className="text-sm text-gray-500">深度评测</div>
                      <div className="font-medium">大疆Pocket 3 评测</div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <AdPlaceholder slot="action-camera-compare-page" className="my-8 mx-4" />

      <Footer />
    </div>
  );
}