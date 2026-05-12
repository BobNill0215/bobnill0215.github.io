import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import ProductComparison from '@/components/ProductComparison';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2024年最佳数码相机推荐排行榜 - 相机评测网',
  description: '入门级到专业级相机推荐，热门品牌对比，Amazon精选',
};

const comparisonProducts = [
  {
    name: '索尼 A7C II',
    image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=300',
    price: '$1,999',
    specs: {
      '传感器': '全画幅 3300万',
      '视频': '4K 60fps',
      '对焦': '759点',
      '防抖': '5级',
      '重量': '514g',
      '续航': '560张',
    },
  },
  {
    name: '富士 X-T5',
    image: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=300',
    price: '$1,699',
    specs: {
      '传感器': 'APS-C 4020万',
      '视频': '6.2K 30fps',
      '对焦': '425点',
      '防抖': '7级',
      '重量': '557g',
      '续航': '580张',
    },
  },
  {
    name: '佳能 R6 II',
    image: 'https://images.unsplash.com/photo-1604168648028-2f1ed4a4b4e8?w=300',
    price: '$2,499',
    specs: {
      '传感器': '全画幅 2420万',
      '视频': '4K 60fps',
      '对焦': '1053点',
      '防抖': '8级',
      '重量': '670g',
      '续航': '450张',
    },
  },
];

const features = ['传感器', '视频', '对焦', '防抖', '重量', '续航'];

export default function BestCameras2024Page() {
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
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-4 inline-block">数码相机</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">2024年最佳数码相机推荐排行榜</h1>
            <p className="text-lg text-blue-100">入门级到专业级相机推荐，热门品牌对比</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">数码相机数据库</h3>
              <p className="text-gray-600 text-sm">收录18款热门相机详细参数</p>
            </div>
            <Link href="/camera-database" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              查看全部 →
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Link href="/camera-database" className="bg-white rounded-xl shadow-sm p-4 hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-lg">📷</div>
              <div>
                <h4 className="font-semibold">运动相机数据库</h4>
                <p className="text-sm text-gray-500">9款运动相机对比</p>
              </div>
            </div>
          </Link>
          <Link href="/action-camera-compare" className="bg-white rounded-xl shadow-sm p-4 hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">📱</div>
              <div>
                <h4 className="font-semibold">手机相机对比</h4>
                <p className="text-sm text-gray-500">10款旗舰手机拍照对比</p>
              </div>
            </div>
          </Link>
        </div>

        <article className="bg-white rounded-xl shadow-sm p-8">
          <header className="mb-8">
            <Link href="/cameras" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">← 返回数码相机</Link>
            <div className="text-sm text-gray-500 mt-2">发布于 2026年1月15日 | 阅读时间 10 分钟</div>
          </header>

          <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>数码相机市场在2024年继续保持激烈竞争，无论是入门级用户还是专业摄影师，都能找到适合自己的机型。本文将为您推荐2024年最值得购买的数码相机，涵盖不同预算和使用场景。</p>

          <h2>2026年数码相机市场概览</h2>
          <p>数码相机市场在2025-2026年迎来重大升级，AI对焦、部分堆叠传感器成为中高端机型标配，视频规格持续提升。</p>
          <ul>
            <li><strong>AI对焦普及</strong>：索尼A7V、尼康Z6III等机型搭载先进AI主体识别</li>
            <li><strong>部分堆叠传感器</strong>：高速读出减少果冻效应，提升连拍性能</li>
            <li><strong>8K视频下放</strong>：专业机型向中端市场延伸</li>
            <li><strong>性价比提升</strong>：尼康Z6III等机型价格更加亲民</li>
          </ul>

          <h2>按预算推荐 (2026年)</h2>

          <h3>$500-$1500 入门级推荐</h3>
          <p>对于预算有限但想要学习摄影的用户，以下几款相机是不错的选择：</p>
          <ul>
            <li><strong>尼康 Z50 II</strong> - 21MP APS-C，9种主体识别，C30连拍，¥6,999</li>
            <li><strong>佳能 EOS R7</strong> - 32.5MP，8级防抖，无裁切4K，¥7,999</li>
            <li><strong>索尼 A7C II</strong> - 全画幅轻量化，AI对焦，¥11,999</li>
          </ul>

          <h3>$1500-$2500 中端推荐</h3>
          <p>这个价位段可以买到性能出色的中端机型：</p>
          <ul>
            <li><strong>尼康 Z6 III</strong> - 24.5MP部分堆叠，8级防抖，-10EV对焦，¥13,999</li>
            <li><strong>索尼 A7 V</strong> - 33MP部分堆叠，AI对焦，30fps连拍，¥15,999</li>
            <li><strong>富士 X-T5</strong> - 40.2MP，19种胶片模拟，¥10,499</li>
          </ul>

          <h3>$2500+ 专业级推荐</h3>
          <p>专业用户或进阶摄影师的选择：</p>
          <ul>
            <li><strong>佳能 R6 III</strong> - 32.5MP，40fps RAW，6K RAW录制，¥19,999</li>
            <li><strong>尼康 Z8</strong> - 45.7MP，8K 60fps，旗舰级性能，¥26,999</li>
            <li><strong>佳能 R5 II</strong> - 45MP stacked，60fps RAW，8K RAW，¥27,999</li>
            <li><strong>索尼 A1 II</strong> - 50MP，30fps，旗舰级，¥48,999</li>
          </ul>

          <h2>热门机型对比</h2>
          <ProductComparison products={comparisonProducts} features={features} />

          <h2>购买建议</h2>
          <p>选择相机时，建议考虑以下因素：</p>
          <ol>
            <li><strong>使用场景</strong>：旅行摄影优先考虑轻便，室内人像关注画质</li>
            <li><strong>镜头生态</strong>：选择镜头群丰富的品牌，后期升级更方便</li>
            <li><strong>预算分配</strong>：机身重要，但镜头和配件同样不可忽视</li>
            <li><strong>操作体验</strong>：建议到实体店试用后再决定</li>
          </ol>

          <h2>关联配件推荐</h2>
          <p>购买相机后，这些配件也值得考虑：</p>
          <ul>
            <li><strong>存储卡</strong>：建议选择V30以上级别，支持4K视频录制</li>
            <li><strong>备用电池</strong>：原厂或品牌电池均可，注意辨别真伪</li>
            <li><strong>相机包</strong>：根据机身大小选择，保护设备安全</li>
            <li><strong>三脚架</strong>：旅行摄影建议选择轻便的碳纤维脚架</li>
          </ul>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>总结</h2>
          <p>2024年的数码相机市场提供了丰富的选择。无论您是摄影新手还是专业用户，都能找到适合自己的机型。建议在购买前明确自己的需求和预算，有条件的话可以实际体验后再做决定。</p>

          <p>如果您有任何问题，欢迎在评论区留言，我们会尽快回复。</p>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />

          <div className="mt-12 bg-gray-100 rounded-lg p-6">
            <h3 className="font-bold mb-2">免责声明</h3>
            <p className="text-sm text-gray-600">本文包含的购买链接为联盟链接，我们可能会从中获得少量佣金，这不会影响您的购买价格。这是支持我们继续提供免费评测内容的方式之一，感谢您的理解。</p>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
}