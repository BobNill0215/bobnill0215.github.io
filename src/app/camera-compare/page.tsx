'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import PhoneCameraComparison from '@/components/PhoneCameraComparison';
import { phonesData, brands, type PhoneCamera } from '@/data/phones';

export default function CameraComparePage() {
  const [selectedPhones, setSelectedPhones] = useState<PhoneCamera[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');

  const filteredPhones = phonesData.filter(phone => {
    const matchesSearch = phone.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      phone.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || phone.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  const togglePhone = (phone: PhoneCamera) => {
    const isSelected = selectedPhones.some(p => p.id === phone.id);
    if (isSelected) {
      setSelectedPhones(selectedPhones.filter(p => p.id !== phone.id));
    } else if (selectedPhones.length < 4) {
      setSelectedPhones([...selectedPhones, phone]);
    }
  };

  const removePhone = (id: string) => {
    setSelectedPhones(selectedPhones.filter(p => p.id !== id));
  };

  const clearAll = () => setSelectedPhones([]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">手机相机参数对比</h1>
          <p className="text-blue-100">选择最多4部手机进行详细对比</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧：手机选择列表 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-4 sticky top-20">
              <h2 className="font-bold text-lg mb-4">选择手机</h2>

              {/* 已选择的手机 */}
              {selectedPhones.length > 0 && (
                <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-700">
                      已选择 {selectedPhones.length}/4 部
                    </span>
                    <button
                      onClick={clearAll}
                      className="text-xs text-blue-600 hover:text-blue-800"
                    >
                      清除全部
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedPhones.map(phone => (
                      <div
                        key={phone.id}
                        className="flex items-center gap-2 bg-white px-2 py-1 rounded-full text-sm"
                      >
                        <span>{phone.name}</span>
                        <button
                          onClick={() => removePhone(phone.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 搜索框 */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="搜索手机..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* 品牌筛选 */}
              <div className="mb-4">
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

              {/* 手机列表 */}
              <div className="space-y-2 max-h-[500px] overflow-y-auto">
                {filteredPhones.map(phone => {
                  const isSelected = selectedPhones.some(p => p.id === phone.id);
                  return (
                    <div
                      key={phone.id}
                      onClick={() => togglePhone(phone)}
                      className={`p-3 rounded-lg cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{phone.name}</div>
                          <div className={`text-sm ${isSelected ? 'text-blue-200' : 'text-gray-500'}`}>
                            {phone.brand} · {phone.releaseDate}
                          </div>
                        </div>
                        <div className="text-xs text-gray-400">
                          {phone.mainCamera.mp}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 右侧：对比结果 */}
          <div className="lg:col-span-2">
            {selectedPhones.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-xl font-bold mb-2">请选择手机进行对比</h3>
                <p className="text-gray-500">从左侧列表选择至少1部手机，最多4部</p>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <PhoneCameraComparison phones={selectedPhones} />

                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-bold mb-4">推荐阅读</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link href="/smartphone-cameras/iphone-vs-samsung" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <div className="text-sm text-gray-500">对比评测</div>
                      <div className="font-medium">iPhone vs 三星 拍照对比</div>
                    </Link>
                    <Link href="/smartphone-cameras/best-camera-phones-2024" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <div className="text-sm text-gray-500">选购指南</div>
                      <div className="font-medium">2024最佳拍照手机</div>
                    </Link>
                    <Link href="/smartphone-cameras/xiaomi-14-ultra" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <div className="text-sm text-gray-500">深度评测</div>
                      <div className="font-medium">小米14 Ultra 评测</div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <AdPlaceholder slot="compare-page" className="my-8 mx-4" />

      <Footer />
    </div>
  );
}