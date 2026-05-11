import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import ProductComparison from '@/components/ProductComparison';

export const metadata: Metadata = {
  title: '索尼A7C II深度评测：全画幅轻量化的完美平衡',
  description: '索尼A7C II完整评测，3300万像素全画幅传感器，759点对焦系统，深度体验报告',
  keywords: '索尼A7C II, A7C II评测, 索尼微单, 全画幅相机, vlog相机推荐',
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
    name: '索尼 A7C',
    image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=300',
    price: '$1,799',
    specs: {
      '传感器': '全画幅 2420万',
      '视频': '4K 30fps',
      '对焦': '693点',
      '防抖': '5级',
      '重量': '509g',
      '续航': '740张',
    },
  },
  {
    name: '索尼 A7 IV',
    image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=300',
    price: '$2,499',
    specs: {
      '传感器': '全画幅 3300万',
      '视频': '4K 60fps',
      '对焦': '759点',
      '防抖': '5.5级',
      '重量': '658g',
      '续航': '520张',
    },
  },
];

const features = ['传感器', '视频', '对焦', '防抖', '重量', '续航'];

const relatedProducts = [
  { name: '索尼 A7 IV', price: '$2,499', link: '#' },
  { name: '索尼 A7C', price: '$1,799', link: '#' },
  { name: '索尼 FE 24-70mm f/2.8 GM', price: '$2,298', link: '#' },
];

export default function SonyA7CIIReviewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <nav className="text-sm text-gray-500 mb-2">
            <Link href="/cameras" className="hover:text-blue-600">相机评测</Link> &gt;{' '}
            <Link href="/cameras/sony" className="hover:text-blue-600">索尼</Link>
          </nav>
          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">深度评测</span>
          <h1 className="text-3xl font-bold mt-4 mb-2">索尼A7C II深度评测：全画幅轻量化的完美平衡</h1>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center">
              <span className="text-yellow-500">★★★★★</span>
              <span className="ml-2 font-semibold">9.2/10</span>
            </div>
            <span className="text-gray-500">|</span>
            <span className="text-sm text-gray-500">发布于 2024年3月10日</span>
            <span className="text-gray-500">|</span>
            <span className="text-sm text-gray-500">阅读时间 10 分钟</span>
          </div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-blue-800"><strong>评测摘要：</strong>索尼A7C II是一款革命性的全画幅微单相机，在保持专业画质的同时实现了令人印象深刻的轻量化设计。作为A7C的升级版，它在传感器、对焦系统、视频功能等方面都有显著提升。</p>
          </div>

          <h2>前言</h2>
          <p>索尼A7C II是索尼公司在2023年8月发布的全画幅微单相机，作为A7C的升级版本，它继承了一代产品的紧凑设计，同时大幅提升了画质和性能。这款相机定位于追求便携性的摄影爱好者和专业用户，是旅行摄影和日常拍摄的理想选择。</p>

          <h2>外观设计</h2>
          <p>A7C II采用了紧凑型设计理念，机身尺寸仅为124 x 71.1 x 63.4mm，重量仅514g（含电池和存储卡）。这使得它成为目前最小巧的全画幅微单相机之一。</p>
          <ul>
            <li><strong>镁合金机身</strong>：坚固耐用同时保持轻量化</li>
            <li><strong>翻转屏设计</strong>：3英寸104万点触控屏，支持多角度翻转</li>
            <li><strong>改进的握柄</strong>：比一代更深的握柄设计，握持感更舒适</li>
            <li><strong>新增前拨轮</strong>：弥补了一代操控性的不足</li>
          </ul>

          <h2>核心参数</h2>
          <p>A7C II搭载了一块3300万像素的全画幅Exmor R CMOS传感器，配合BIONZ XR处理器，性能大幅提升。</p>
          <ul>
            <li><strong>有效像素</strong>：3300万</li>
            <li><strong>ISO范围</strong>：100-51200（可扩展至50-204800）</li>
            <li><strong>对焦系统</strong>：759点相位检测对焦</li>
            <li><strong>连拍速度</strong>：最高10张/秒</li>
            <li><strong>视频规格</strong>：4K 60fps，7K超采样</li>
            <li><strong>防抖系统</strong>：5轴5级机身防抖</li>
          </ul>

          <h2>对焦性能</h2>
          <p>索尼A7C II的对焦系统是其最大亮点之一。759个相位检测对焦点覆盖了约94%的画面范围，配合先进的AI识别技术，可以精准识别并追踪以下主体：</p>
          <ul>
            <li>人眼/动物眼/鸟类眼部对焦</li>
            <li>人像主体识别</li>
            <li>车辆识别（汽车、火车、飞机）</li>
            <li>昆虫识别</li>
          </ul>
          <p>在实际测试中，A7C II的对焦速度极快，几乎可以在瞬间锁定被摄物体。即使在弱光环境下（-4EV），对焦依然准确可靠。</p>

          <h2>画质表现</h2>
          <p>3300万像素的传感器提供了出色的分辨率和动态范围。在ISO 100-3200范围内，画面细节丰富，噪点控制优秀。即使在ISO 6400-12800的高感光度下，通过后期降噪处理依然可以获得可用的照片。</p>
          <p>色彩还原方面，A7C II保持了索尼一贯的精准风格，直出色彩自然。机身内置的创意风格模式提供了多种色彩预设，方便用户快速选择喜欢的风格。</p>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>视频功能</h2>
          <p>作为一款面向内容创作者的相机，A7C II的视频性能同样出色：</p>
          <ul>
            <li><strong>4K 60fps</strong>：支持全画幅4K 60fps录制，采用7K超采样技术</li>
            <li><strong>10-bit 4:2:2</strong>：支持S-Log3/S-Cinetone，提供更大的后期空间</li>
            <li><strong>主动防抖</strong>：结合电子防抖，实现更平稳的手持拍摄</li>
            <li><strong>散热设计</strong>：支持连续录制约2小时4K视频</li>
            <li><strong>视频美肤</strong>：内置美肤效果，适合人像视频</li>
          </ul>

          <h2>与其他机型对比</h2>
          <ProductComparison products={comparisonProducts} features={features} />

          <h2>优缺点分析</h2>
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-bold text-green-800 mb-2">优点</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>出色的画质表现</li>
                <li>强大的AI对焦系统</li>
                <li>紧凑轻便的机身</li>
                <li>优秀的视频功能</li>
                <li>丰富的E卡口镜头选择</li>
                <li>侧翻屏设计便于vlog拍摄</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-bold text-red-800 mb-2">缺点</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>只有一个卡槽</li>
                <li>电子取景器较小</li>
                <li>最高快门速度1/4000s</li>
                <li>没有全尺寸HDMI接口</li>
                <li>价格相对较高</li>
              </ul>
            </div>
          </div>

          <h2>适用人群</h2>
          <p>索尼A7C II适合以下用户群体：</p>
          <ul>
            <li><strong>旅行摄影师</strong>：轻便机身适合长时间携带</li>
            <li><strong>Vlog创作者</strong>：翻转屏和视频功能出色</li>
            <li><strong>摄影爱好者</strong>：专业功能与易用性兼顾</li>
            <li><strong>全画幅入门用户</strong>：想体验全画幅但不想背负沉重设备的用户</li>
          </ul>

          <h2>镜头搭配建议</h2>
          <p>搭配A7C II，以下镜头是很好的选择：</p>
          <ul>
            <li><strong>索尼 FE 24-70mm f/2.8 GM II</strong>：万金油镜头，画质顶级</li>
            <li><strong>索尼 FE 35mm f/1.4 GM</strong>：人文纪实首选，大光圈虚化</li>
            <li><strong>索尼 FE 85mm f/1.4 GM</strong>：人像摄影利器</li>
            <li><strong>腾龙 28-75mm f/2.8 Di III VXD G2</strong>：高性价比标准变焦</li>
          </ul>

          <AdPlaceholder slot="article-middle-2" className="my-8" />

          <h2>总结</h2>
          <p>索尼A7C II是一款极具竞争力的全画幅微单相机。它在保持紧凑机身的同时，提供了专业级的画质和对焦性能。对于追求便携性又不愿妥协画质的用户来说，A7C II几乎是目前最佳的选择。</p>
          <p>虽然它并非完美无缺（单卡槽、小EVF等），但这些妥协在它带来的便携性优势面前显得微不足道。如果您正在寻找一款可以随身携带的全画幅相机，索尼A7C II绝对值得考虑。</p>

          <h2>相关产品推荐</h2>
          <div className="grid md:grid-cols-3 gap-4 my-6">
            {relatedProducts.map((product, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <div className="h-32 bg-gray-200 rounded mb-3"></div>
                <h4 className="font-medium">{product.name}</h4>
                <p className="text-blue-600 font-bold">{product.price}</p>
                <Link href={product.link} className="text-sm text-blue-600 hover:underline mt-2 inline-block">
                  查看详情
                </Link>
              </div>
            ))}
          </div>

          <h2>评论区</h2>
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <p className="text-gray-600">如果您有任何关于索尼A7C II的问题或使用体验，欢迎在评论区留言与我们分享！</p>
            <p className="text-sm text-gray-500 mt-2">评论功能即将上线，敬请期待。</p>
          </div>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />

        <div className="mt-8 border-t pt-6">
          <h3 className="font-bold mb-4">文章目录</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#前言" className="text-blue-600 hover:underline">前言</a></li>
            <li><a href="#外观设计" className="text-blue-600 hover:underline">外观设计</a></li>
            <li><a href="#核心参数" className="text-blue-600 hover:underline">核心参数</a></li>
            <li><a href="#对焦性能" className="text-blue-600 hover:underline">对焦性能</a></li>
            <li><a href="#画质表现" className="text-blue-600 hover:underline">画质表现</a></li>
            <li><a href="#视频功能" className="text-blue-600 hover:underline">视频功能</a></li>
            <li><a href="#优缺点分析" className="text-blue-600 hover:underline">优缺点分析</a></li>
            <li><a href="#总结" className="text-blue-600 hover:underline">总结</a></li>
          </ul>
        </div>

        <div className="mt-12 bg-gray-100 rounded-lg p-6">
          <h3 className="font-bold mb-2">免责声明</h3>
          <p className="text-sm text-gray-600">本文包含的购买链接为联盟链接，我们可能会从中获得少量佣金，这不会影响您的购买价格。这是支持我们继续提供免费评测内容的方式之一，感谢您的理解。</p>
        </div>
      </article>

      <Footer />
    </div>
  );
}
