import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import ProductComparison from '@/components/ProductComparison';

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

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">数码相机</span>
          <h1 className="text-3xl font-bold mt-4 mb-2">2024年最佳数码相机推荐排行榜</h1>
          <p className="text-gray-600">入门级到专业级相机推荐，热门品牌对比，Amazon精选</p>
          <div className="text-sm text-gray-500 mt-2">发布于 2024年1月15日 | 阅读时间 8 分钟</div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>数码相机市场在2024年继续保持激烈竞争，无论是入门级用户还是专业摄影师，都能找到适合自己的机型。本文将为您推荐2024年最值得购买的数码相机，涵盖不同预算和使用场景。</p>

          <h2>2024年数码相机市场概览</h2>
          <p>今年相机市场呈现出几个明显趋势：</p>
          <ul>
            <li><strong>全画幅微单普及</strong>：价格持续下降，更多入门级用户能够体验全画幅摄影</li>
            <li><strong>AI对焦升级</strong>：智能识别技术让对焦更加精准快速</li>
            <li><strong>视频能力增强</strong>：4K甚至8K视频成为中高端机型标配</li>
            <li><strong>轻量化设计</strong>：厂商更加注重机身的便携性</li>
          </ul>

          <h2>按预算推荐</h2>

          <h3>$500-$1000 入门级推荐</h3>
          <p>对于预算有限但想要学习摄影的用户，以下几款相机是不错的选择：</p>
          <ul>
            <li><strong>佳能 EOS R50</strong> - 高性价比入门微单，触摸操作友好</li>
            <li><strong>索尼 ZV-E10</strong> - Vlog神器，对焦快速</li>
            <li><strong>富士 X-T30 II</strong> - 复古设计，胶片模拟出色</li>
          </ul>

          <h3>$1000-$2000 中端推荐</h3>
          <p>这个价位段可以买到性能出色的中端机型：</p>
          <ul>
            <li><strong>富士 X-T5</strong> - 旗舰级APS-C，画质出色</li>
            <li><strong>索尼 A7C II</strong> - 全画幅轻量化设计</li>
            <li><strong>尼康 Z5</strong> - 入门级全画幅，性价比高</li>
          </ul>

          <h3>$2000+ 专业级推荐</h3>
          <p>专业用户或进阶摄影师的选择：</p>
          <ul>
            <li><strong>佳能 R6 II</strong> - 全能型旗舰，视频能力出色</li>
            <li><strong>索尼 A7 IV</strong> - 综合性能强，用户口碑好</li>
            <li><strong>尼康 Z8</strong> - 旗舰级性能，价格较高</li>
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

      <Footer />
    </div>
  );
}