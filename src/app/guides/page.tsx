import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
  title: '选购指南 - 相机评测网',
  description: '数码相机选购指南，帮助您找到最适合自己需求的相机产品。',
};

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">选购指南</h1>
          <p className="text-gray-300">帮助您找到最适合自己需求的相机产品</p>
        </div>
      </div>

      <AdPlaceholder slot="guides-top" className="my-8 mx-4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-3xl mb-4">📷</div>
            <h3 className="text-xl font-bold mb-2">数码相机选购</h3>
            <p className="text-gray-600 mb-4">了解不同类型相机的优缺点，找到最适合您的机型</p>
            <a href="/cameras" className="text-blue-600 hover:underline">查看指南 →</a>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-2">拍照手机选购</h3>
            <p className="text-gray-600 mb-4">从入门到旗舰，找到拍照能力最强的手机</p>
            <a href="/smartphone-cameras" className="text-blue-600 hover:underline">查看指南 →</a>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-3xl mb-4">🎬</div>
            <h3 className="text-xl font-bold mb-2">运动相机选购</h3>
            <p className="text-gray-600 mb-4">Vlog和极限运动拍摄利器选购建议</p>
            <a href="/action-cameras" className="text-blue-600 hover:underline">查看指南 →</a>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-3xl mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-2">监控摄像头选购</h3>
            <p className="text-gray-600 mb-4">家用安防摄像头选购要点和品牌对比</p>
            <a href="/security-cameras" className="text-blue-600 hover:underline">查看指南 →</a>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-3xl mb-4">🎒</div>
            <h3 className="text-xl font-bold mb-2">相机配件选购</h3>
            <p className="text-gray-600 mb-4">存储卡、电池、三脚架等配件选购建议</p>
            <a href="/accessories" className="text-blue-600 hover:underline">查看指南 →</a>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-2">预算指南</h3>
            <p className="text-gray-600 mb-4">不同预算下的最佳相机推荐</p>
            <a href="/cameras/best-cameras-2024" className="text-blue-600 hover:underline">查看指南 →</a>
          </div>
        </div>
      </div>

      <AdPlaceholder slot="guides-bottom" className="my-8 mx-4" />

      <Footer />
    </div>
  );
}