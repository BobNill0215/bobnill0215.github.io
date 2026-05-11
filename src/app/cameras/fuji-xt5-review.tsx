import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import ProductComparison from '@/components/ProductComparison';

export const metadata: Metadata = {
  title: '富士X-T5深度评测：APS-C画幅的画质巅峰',
  description: '富士X-T5完整评测，4020万像素APS-C传感器，经典复古设计，胶片模拟色彩深度解析',
  keywords: '富士X-T5, X-T5评测, 富士相机, APS-C相机, 复古相机推荐',
};

const comparisonProducts = [
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
    name: '富士 X-H2',
    image: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=300',
    price: '$1,999',
    specs: {
      '传感器': 'APS-C 4020万',
      '视频': '8K 30fps',
      '对焦': '425点',
      '防抖': '7级',
      '重量': '660g',
      '续航': '540张',
    },
  },
  {
    name: '富士 X-T30 II',
    image: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=300',
    price: '$899',
    specs: {
      '传感器': 'APS-C 2610万',
      '视频': '4K 30fps',
      '对焦': '425点',
      '防抖': '无',
      '重量': '378g',
      '续航': '380张',
    },
  },
];

const features = ['传感器', '视频', '对焦', '防抖', '重量', '续航'];

const relatedProducts = [
  { name: '富士 XF 16-55mm f/2.8', price: '$1,049', link: '#' },
  { name: '富士 XF 56mm f/1.2 R', price: '$926', link: '#' },
  { name: '富士 X-T5 银色版', price: '$1,699', link: '#' },
];

export default function FujiXT5ReviewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <nav className="text-sm text-gray-500 mb-2">
            <Link href="/cameras" className="hover:text-blue-600">相机评测</Link> &gt;{' '}
            <Link href="/cameras/fuji" className="hover:text-blue-600">富士</Link>
          </nav>
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">深度评测</span>
          <h1 className="text-3xl font-bold mt-4 mb-2">富士X-T5深度评测：APS-C画幅的画质巅峰</h1>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center">
              <span className="text-yellow-500">★★★★★</span>
              <span className="ml-2 font-semibold">9.5/10</span>
            </div>
            <span className="text-gray-500">|</span>
            <span className="text-sm text-gray-500">发布于 2024年2月20日</span>
            <span className="text-gray-500">|</span>
            <span className="text-sm text-gray-500">阅读时间 12 分钟</span>
          </div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <p className="text-green-800"><strong>评测摘要：</strong>富士X-T5是一款令人惊艳的APS-C画幅无反相机，4020万像素传感器创造了该画幅的分辨率新纪录，同时延续了X-T系列的经典复古设计和业界领先的胶片模拟功能。</p>
          </div>

          <h2>前言</h2>
          <p>富士X-T5于2022年11月发布，是X-T系列的第五代旗舰机型。它采用了全新设计的4020万像素X-Trans CMOS 5 HR传感器，配合X-Processor 5图像处理器，在画质、速度、视频能力等方面都有显著提升。</p>
          <p>作为一款主打静态摄影的机型，X-T5在保持专业性能的同时，还拥有令人爱不释手的复古外观设计，是摄影爱好者和专业摄影师的理想选择。</p>

          <h2>外观设计：经典传承</h2>
          <p>X-T5延续了X-T系列的经典复古设计语言，银色和黑色两种配色方案都散发着浓郁的复古气息。机身采用镁合金材质，坚固耐用且质感出众。</p>
          <ul>
            <li><strong>经典拨盘设计</strong>：快门速度、ISO、曝光补偿专用拨盘，操作直观高效</li>
            <li><strong>三向翻折屏</strong>：3英寸184万点LCD屏幕，支持三向翻转，方便多角度取景</li>
            <li><strong>优化的人体工程学</strong>：比X-T4更小巧，握柄更深，握持感更舒适</li>
            <li><strong>369万点EVF</strong>：高刷新率取景器，支持87%放大倍率</li>
          </ul>
          <p>机身重量仅557g（不含电池和存储卡），比X-T4轻了50g以上，是目前最轻的4000万像素无反相机之一。</p>

          <h2>核心规格</h2>
          <p>X-T5的核心升级在于那颗革命性的4020万像素传感器：</p>
          <ul>
            <li><strong>传感器</strong>：X-Trans CMOS 5 HR，4020万像素</li>
            <li><strong>处理器</strong>：X-Processor 5</li>
            <li><strong>ISO范围</strong>：125-12800（可扩展至64-51200）</li>
            <li><strong>对焦系统</strong>：425点相位检测，支持AI主体识别</li>
            <li><strong>连拍速度</strong>：电子快门15张/秒，机械快门13张/秒</li>
            <li><strong>防抖系统</strong>：5轴7级机身防抖</li>
            <li><strong>视频能力</strong>：6.2K 30fps，4K 60fps</li>
          </ul>

          <h2>画质表现</h2>
          <p>4020万像素是APS-C画幅相机的新纪录，这个像素量已经可以与许多全画幅相机相媲美。在实际测试中，X-T5展现出了出色的分辨率和细节表现。</p>
          <p><strong>高感光度表现：</strong></p>
          <ul>
            <li><strong>ISO 100-800</strong>：完美纯净，几乎看不到任何噪点</li>
            <li><strong>ISO 1600-3200</strong>：细节保持良好，噪点控制出色</li>
            <li><strong>ISO 6400-12800</strong>：出现可见噪点，但细节损失在可接受范围内</li>
            <li><strong>ISO 25600+</strong>：噪点明显增加，但通过后期降噪仍可使用</li>
          </ul>
          <p>动态范围方面，X-T5表现优秀，在ISO 125下可达14档以上，为后期调整提供了充足的空间。</p>

          <h2>胶片模拟：色彩的灵魂</h2>
          <p>富士相机最引以为傲的功能就是胶片模拟模式，X-T5提供了19种胶片模拟效果，包括经典的PROVIA、Velvia、Astia，以及备受欢迎的Classic Chrome、ETERNA等。</p>
          <p>新增的<strong>Reala Ace</strong>模式结合了自然的色彩再现和柔和的色调，适合多种拍摄场景。</p>
          <p>以下是几个最受欢迎的胶片模拟效果：</p>
          <ul>
            <li><strong>Classic Chrome</strong>：低饱和度、高对比度，纪实风格</li>
            <li><strong>ETERNA Bleach Bypass</strong>：漂白效果，电影感十足</li>
            <li><strong>Classic Neg.</strong>：经典负片效果，色彩浓郁</li>
            <li><strong>Velvia</strong>：高饱和度，高对比度，适合风光</li>
          </ul>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>对焦与连拍</h2>
          <p>X-T5的对焦系统虽然像素大幅提升，但追焦性能依然出色。425点相位检测对焦覆盖了整个画面范围，配合AI深度学习技术，可以准确识别和追踪：</p>
          <ul>
            <li>人脸和人眼</li>
            <li>动物（猫、狗等）</li>
            <li>鸟类</li>
            <li>汽车、摩托车</li>
            <li>飞机和直升机</li>
          </ul>
          <p>在连拍方面，X-T5支持电子快门15张/秒和机械快门13张/秒的连拍速度，配合强大的对焦系统，可以轻松捕捉运动场景。</p>

          <h2>视频能力</h2>
          <p>虽然X-T5定位更偏向静态摄影，但其视频功能同样不容小觑：</p>
          <ul>
            <li><strong>6.2K 30fps</strong>：高分辨率录制，细节丰富</li>
            <li><strong>4K 60fps</strong>：流畅的升格画面</li>
            <li><strong>F-Log2</strong>：13+档动态范围，为后期调色提供空间</li>
            <li><strong>ProRes编码</strong>：通过固件更新支持（需固件2.0及以上）</li>
          </ul>
          <p>需要注意的是，X-T5没有X-H2的散热风扇，长时间录制4K或6K视频时可能出现机身发热的情况。</p>

          <h2>与其他机型对比</h2>
          <ProductComparison products={comparisonProducts} features={features} />

          <h2>优缺点总结</h2>
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-bold text-green-800 mb-2">优点</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>4020万像素APS-C最高分辨率</li>
                <li>出色的画质和高感表现</li>
                <li>19种胶片模拟模式</li>
                <li>7级防抖效果显著</li>
                <li>经典复古设计，手感出色</li>
                <li>轻巧便携的机身</li>
                <li>丰富的富士龙镜头群</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-bold text-red-800 mb-2">缺点</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>视频录制时可能发热</li>
                <li>没有翻转屏（侧翻屏更实用）</li>
                <li>单卡槽设计</li>
                <li>没有耳机监听接口</li>
                <li>售价相对较高</li>
              </ul>
            </div>
          </div>

          <h2>镜头搭配推荐</h2>
          <p>搭配X-T5的高像素，以下镜头能够充分发挥机身性能：</p>
          <ul>
            <li><strong>XF 16-55mm f/2.8 R LM WR</strong>：标准变焦，覆盖常用焦段</li>
            <li><strong>XF 23mm f/1.4 R LM WR</strong>：人文纪实首选</li>
            <li><strong>XF 56mm f/1.2 R WR</strong>：人像摄影利器</li>
            <li><strong>XF 90mm f/2 R LM WR</strong>：中长焦人像，虚化柔美</li>
            <li><strong>XF 8-16mm f/2.8 R LM WR</strong>：超广角风光</li>
          </ul>

          <AdPlaceholder slot="article-middle-2" className="my-8" />

          <h2>适用场景</h2>
          <p>X-T5特别适合以下拍摄场景：</p>
          <ul>
            <li><strong>风光摄影</strong>：高像素便于后期裁切和大幅输出</li>
            <li><strong>人像摄影</strong>：胶片模拟效果出色，直出色彩讨喜</li>
            <li><strong>人文纪实</strong>：紧凑机身不引人注意，经典设计有范儿</li>
            <li><strong>旅行摄影</strong>：轻便机身搭配高画质，适合随身携带</li>
            <li><strong>产品摄影</strong>：高像素和色彩优势，适合电商拍摄</li>
          </ul>

          <h2>总结</h2>
          <p>富士X-T5是一款近乎完美的APS-C画幅相机。它在紧凑的机身中塞入了4020万像素的高分辨率传感器，配合业界领先的胶片模拟功能，为用户提供了出色的画质和独特的色彩体验。</p>
          <p>虽然它不是视频最强的X系列机型，但对于以静态摄影为主的用户来说，X-T5几乎提供了所有想要的功能。如果您追求复古设计与现代性能的完美结合，X-T5绝对值得入手。</p>

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
            <p className="text-gray-600">您使用过富士X-T5吗？欢迎在评论区分享您的使用体验和样片！</p>
            <p className="text-sm text-gray-500 mt-2">评论功能即将上线，敬请期待。</p>
          </div>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />

        <div className="mt-8 border-t pt-6">
          <h3 className="font-bold mb-4">文章目录</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#前言" className="text-blue-600 hover:underline">前言</a></li>
            <li><a href="#外观设计" className="text-blue-600 hover:underline">外观设计</a></li>
            <li><a href="#核心规格" className="text-blue-600 hover:underline">核心规格</a></li>
            <li><a href="#画质表现" className="text-blue-600 hover:underline">画质表现</a></li>
            <li><a href="#胶片模拟" className="text-blue-600 hover:underline">胶片模拟</a></li>
            <li><a href="#对焦与连拍" className="text-blue-600 hover:underline">对焦与连拍</a></li>
            <li><a href="#视频能力" className="text-blue-600 hover:underline">视频能力</a></li>
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
