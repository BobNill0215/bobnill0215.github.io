'use client';

import Link from 'next/link';
import { useState } from 'react';

const navCategories = [
  {
    name: '数码相机评测',
    href: '/cameras',
    submenu: [
      { name: '索尼 Sony', href: '/cameras' },
      { name: '佳能 Canon', href: '/cameras' },
      { name: '尼康 Nikon', href: '/cameras' },
      { name: '富士 Fujifilm', href: '/cameras' },
      { name: '全部相机', href: '/cameras' },
    ],
  },
  {
    name: '手机相机',
    href: '/smartphone-cameras',
    submenu: [
      { name: 'iPhone', href: '/smartphone-cameras' },
      { name: '三星 Samsung', href: '/smartphone-cameras' },
      { name: '小米 Xiaomi', href: '/smartphone-cameras' },
      { name: '华为 Huawei', href: '/smartphone-cameras' },
      { name: '全部手机', href: '/smartphone-cameras' },
    ],
  },
  {
    name: '运动相机',
    href: '/action-cameras',
    submenu: [
      { name: 'GoPro', href: '/action-cameras' },
      { name: '大疆 DJI', href: '/action-cameras' },
      { name: 'Insta360', href: '/action-cameras' },
      { name: '全部运动相机', href: '/action-cameras' },
    ],
  },
  {
    name: '监控相机',
    href: '/security-cameras',
    submenu: [
      { name: '萤石 EZVIZ', href: '/security-cameras' },
      { name: '小米 Xiaomi', href: '/security-cameras' },
      { name: '360', href: '/security-cameras' },
      { name: '全部监控', href: '/security-cameras' },
    ],
  },
  {
    name: '配件推荐',
    href: '/accessories',
    submenu: [
      { name: '存储卡', href: '/accessories/memory-cards' },
      { name: '相机包', href: '/accessories/camera-bags' },
      { name: '电池', href: '/accessories/batteries' },
      { name: '全部配件', href: '/accessories' },
    ],
  },
  {
    name: '选购指南',
    href: '/guides',
    submenu: [
      { name: '最佳微单', href: '/cameras/best-cameras-2024' },
      { name: '最佳运动相机', href: '/action-cameras/best-action-cameras-2024' },
      { name: '最佳拍照手机', href: '/smartphone-cameras/best-camera-phones-2024' },
      { name: '预算指南', href: '/cameras' },
    ],
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="text-2xl">📷</span>
              <span>相机评测网</span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navCategories.map((category) => (
              <div
                key={category.name}
                className="relative"
                onMouseEnter={() => setActiveMenu(category.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={category.href}
                  className="px-4 py-6 text-sm font-medium text-gray-700 hover:text-blue-600 flex items-center gap-1"
                >
                  {category.name}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {activeMenu === category.name && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg border border-gray-100 rounded-b-lg">
                    <div className="py-2">
                      {category.submenu.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索产品..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            <Link href="/camera-compare" className="text-sm font-medium text-blue-600 hover:text-blue-700">
              相机对比
            </Link>
            <Link href="/phone-database" className="text-sm font-medium text-blue-600 hover:text-blue-700">
              数据库
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="py-2 px-4">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="搜索产品..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              {navCategories.map((category) => (
                <div key={category.name} className="py-2">
                  <Link href={category.href} className="font-medium text-gray-900">
                    {category.name}
                  </Link>
                  <div className="mt-2 ml-4 space-y-1">
                    {category.submenu.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-blue-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t mt-4 flex gap-4">
                <Link href="/camera-compare" className="text-sm text-blue-600">相机对比</Link>
                <Link href="/phone-database" className="text-sm text-blue-600">数据库</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}