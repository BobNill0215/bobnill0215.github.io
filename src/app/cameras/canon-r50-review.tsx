import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import ProductComparison from '@/components/ProductComparison';

export const metadata: Metadata = {
  title: '佳能EOS R50评测：高性价比入门微单首选',
  description: '佳能R50完整评测，轻便入门微单，2420万像素，适合Vlog和日常拍摄的高性价比之选',
  keywords: '佳能R50, EOS R50评测, 佳能微单, 入门相机推荐, Vlog相机',
};

const comparisonProducts = [
  {
    name: '佳能 EOS R50',
    image: 'https://images.unsplash.com/photo-1604168648028-2f1ed4a4b4e8?w=300',
    price: '$679',
    specs: {
      '传感器': 'APS-C 2420万',
      '视频': '4K 30fps',
      '对焦': '651区',
      '防抖': '电子防抖',
      '重量': '375g',
      '续航': '440张',
    },
  },
  {
    name: '索尼 ZV-E10',
    image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=300',
    price: '$598',
    specs: {
      '传感器': 'APS-C 2420万',
      '视频': '4K 30fps',
      '对焦': '425点',
      '防抖': '电子防抖',
      '重量': '343g',
      '续航': '440张',
    },
  },
  {
    name: '尼康 Z30',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300',
    price: '$706',
    specs: {
      '传感器': 'APS-C 2088万',
      '视频': '4K 30fps',
      '对焦': '209点',
      '防抖': '电子防抖',
      '重量': '405g',
      '续航': '330张',
    },
  },
];

const features = ['传感器', '视频', '对焦', '防抖', '重量', '续航'];

const relatedProducts = [
  { name: '佳能 RF 50mm f/1.8', price: '$125', link: '#' },
  { name: '佳能 RF-S 18-45mm', price: '$149', link: '#' },
  { name: '佳能 EOS R50 白色版', price: '$729', link: '#' },
];

export default function CanonR50ReviewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <nav className="text-sm text-gray-500 mb-2">
            <Link href="/cameras" className="hover:text-blue-600">相机评测</Link> &gt;{' '}
            <Link href="/cameras/canon" className="hover:text-blue-600">佳能</Link>
          </nav>
          <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">入门评测</span>
          <h1 className="text-3xl font-bold mt-4 mb-2">佳能EOS R50评测：高性价比入门微单首选</h1>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center">
              <span className="text-yellow-500">★★★★☆</span>
              <span className="ml-2 font-semibold">8.5/10</span>
            </div>
            <span className="text-gray-500">|</span>
            <span className="text-sm text-gray-500">发布于 2024年1月25日</span>
            <span className="text-gray-500">|</span>
            <span className="text-sm text-gray-500">阅读时间 8 分钟</span>
          </div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
            <p className="text-orange-800"><strong>评测摘要：</strong>佳能EOS R50是一款面向入门用户的高性价比微单相机，轻便的机身、直观的操作和出色的对焦性能使其成为新手用户的理想选择。虽然是入门级产品，但它的性能表现远超预期。</p>
          </div>

          <h2>前言</h2>
          <p>佳能EOS R50于2023年2月发布，是佳能RF卡口系统中最入门级的机型。它采用了APS-C画幅传感器，轻巧的机身设计非常适合旅行、日常拍摄和Vlog创作。作为佳能最轻最小的RF卡口相机，R50以亲民的价格和出色的易用性吸引了众多摄影新手。</p>

          <h2>外观设计：小巧精致</h2>
          <p>R50的设计理念是"轻量化"和"易用性"。机身尺寸为116.3 x 85.5 x 68.8mm，重量仅375g（包含电池和存储卡），是目前最小巧的APS-C微单之一。</p>
          <ul>
            <li><strong>紧凑机身</strong>：单手即可轻松握持，便于随身携带</li>
            <li><strong>现代化设计</strong>：简约的线条，有黑色和白色两种配色</li>
            <li><strong>侧翻触控屏</strong>：3英寸104万点侧翻屏，支持180度翻转用于自拍</li>
            <li><strong>简洁按键</strong>：保留核心按键，新手也能快速上手</li>
            <li><strong>电子取景器</strong>：236万点EVF，方便强光下取景</li>
          </ul>

          <h2>核心规格</h2>
          <p>虽然定位入门级，但R50的硬件配置并不敷衍：</p>
          <ul>
            <li><strong>传感器</strong>：APS-C CMOS，2420万有效像素</li>
            <li><strong>处理器</strong>：DIGIC X</li>
            <li><strong>ISO范围</strong>：100-32000（可扩展至51200）</li>
            <li><strong>对焦系统</strong>：全像素双核CMOS AF II，651区</li>
            <li><strong>连拍速度</strong>：最高15张/秒（电子快门）</li>
            <li><strong>视频规格</strong>：4K 30fps，Full HD 120fps</li>
            <li><strong>重量</strong>：375g（含电池存储卡）</li>
          </ul>

          <h2>对焦系统</h2>
          <p>R50采用了与中高端机型相同的全像素双核CMOS AF II对焦系统，这是一个显著的升级点。这套对焦系统的性能远超同价位的竞品：</p>
          <ul>
            <li><strong>主体检测</strong>：支持人物、动物（猫狗）、鸟类、车辆识别</li>
            <li><strong>覆盖范围</strong>：几乎100%画面覆盖</li>
            <li><strong>暗光对焦</strong>：支持-4EV低光对焦</li>
            <li><strong>追踪性能</strong>：出色的被摄体追踪能力</li>
          </ul>
          <p>实际使用中，R50的对焦表现令人惊喜。无论是拍摄人像还是宠物，都能准确识别并追踪主体，几乎不会失焦。</p>

          <h2>画质表现</h2>
          <p>2420万像素的APS-C传感器配合DIGIC X处理器，提供了令人满意的画质表现：</p>
          <p><strong>日间表现：</strong>锐利、细节丰富，色彩还原准确，佳能的肤色表现一如既往地讨喜。</p>
          <p><strong>高感表现：</strong></p>
          <ul>
            <li><strong>ISO 100-1600</strong>：纯净细腻</li>
            <li><strong>ISO 3200-6400</strong>：出现可见噪点，但仍可接受</li>
            <li><strong>ISO 12800+</strong>：噪点明显，建议谨慎使用</li>
          </ul>
          <p>对于日常拍摄和社交媒体分享来说，R50的画质完全够用。</p>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>视频功能</h2>
          <p>R50的视频能力对于入门用户来说非常实用：</p>
          <ul>
            <li><strong>4K 30fps</strong>：无裁切录制，画质清晰</li>
            <li><strong>Full HD 120fps</strong>：支持4倍慢动作</li>
            <li><strong>垂直视频</strong>：原生支持社交媒体竖版格式</li>
            <li><strong>短片数码防抖</strong>：结合镜头防抖，手持也能稳定拍摄</li>
            <li><strong>HDR PQ</strong>：支持HDR视频录制</li>
          </ul>
          <p>侧翻屏设计让R50非常适合Vlog拍摄，自拍取景更加方便。配合佳能的RF-S镜头（如RF-S 18-45mm），可以轻松开始视频创作。</p>

          <h2>操作体验</h2>
          <p>佳能的人机交互设计一直备受好评，R50的操作逻辑清晰直观：</p>
          <ul>
            <li><strong>触控操作</strong>：支持触屏对焦、触屏拍摄，拖拽对焦</li>
            <li><strong>场景模式</strong>：适合新手的A+场景智能自动模式</li>
            <li><strong>创意辅助</strong>：内置多种滤镜和创意效果</li>
            <li><strong>引导界面</strong>：初次使用时有详细的操作引导</li>
          </ul>

          <h2>与其他机型对比</h2>
          <ProductComparison products={comparisonProducts} features={features} />

          <h2>优缺点分析</h2>
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-bold text-green-800 mb-2">优点</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>轻巧便携的机身</li>
                <li>出色的对焦系统</li>
                <li>操作简单易上手</li>
                <li>4K无裁切视频</li>
                <li>侧翻屏方便自拍</li>
                <li>价格亲民</li>
                <li>佳能优秀的色彩科学</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-bold text-red-800 mb-2">缺点</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>没有机身防抖</li>
                <li>只有一个拨轮</li>
                <li>RF-S镜头选择有限</li>
                <li>没有耳机监听接口</li>
                <li>电子取景器较小</li>
                <li>没有麦克风接口（使用手柄才有）</li>
              </ul>
            </div>
          </div>

          <h2>镜头推荐</h2>
          <p>R50使用RF卡口，支持RF和RF-S镜头。以下是几个适合R50的镜头选择：</p>
          <ul>
            <li><strong>RF-S 18-45mm f/4.5-6.3 IS STM</strong>：套机镜头，轻便实用</li>
            <li><strong>RF-S 55-210mm f/5-7.1 IS STM</strong>：长焦变焦，远摄利器</li>
            <li><strong>RF 50mm f/1.8 STM</strong>：大光圈定焦，人像和暗光首选</li>
            <li><strong>RF 85mm f/2 Macro IS STM</strong>：人像特写，虚化柔美</li>
          </ul>
          <p>需要注意的是，RF卡口的APS-C镜头（RF-S）数量目前还比较有限，但可以使用全画幅RF镜头（会有1.6倍焦距转换）。</p>

          <AdPlaceholder slot="article-middle-2" className="my-8" />

          <h2>适用人群</h2>
          <p>R50非常适合以下用户群体：</p>
          <ul>
            <li><strong>摄影新手</strong>：想要学习摄影的第一台相机</li>
            <li><strong>Vlog博主</strong>：需要轻便的拍摄设备</li>
            <li><strong>旅行爱好者</strong>：追求轻便旅行装备</li>
            <li><strong>家庭用户</strong>：记录生活，拍摄孩子和宠物</li>
            <li><strong>内容创作者</strong>：需要简单高效的视频拍摄</li>
          </ul>

          <h2>购买建议</h2>
          <p><strong>推荐购买场景：</strong></p>
          <ul>
            <li>预算有限但想体验微单的用户</li>
            <li>从手机摄影升级到相机的用户</li>
            <li>需要轻便备用机的专业摄影师</li>
            <li>Vlog和短视频创作者</li>
          </ul>
          <p><strong>可能需要考虑其他选择的情况：</strong></p>
          <ul>
            <li>对视频画质有更高要求（考虑索尼ZV-E10或富士X-S10）</li>
            <li>需要更多专业控制（考虑佳能R10或R7）</li>
            <li>已有佳能EF镜头（可以考虑转接环方案）</li>
          </ul>

          <h2>总结</h2>
          <p>佳能EOS R50是一款极具诚意的入门级微单相机。它没有因为定位入门而在核心功能上妥协，出色的对焦系统、实用的视频功能和佳能的色彩优势使其在同价位产品中脱颖而出。</p>
          <p>虽然缺少一些专业功能（如机身防抖、更多拨轮），但对于目标用户群体来说，这些并非必需品。如果您正在寻找一款简单易用、画质出色、适合视频创作的入门微单，佳能R50是一个值得考虑的选择。</p>

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
            <p className="text-gray-600">您正在使用佳能EOS R50吗？欢迎分享您的使用体验和作品！</p>
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
            <li><a href="#对焦系统" className="text-blue-600 hover:underline">对焦系统</a></li>
            <li><a href="#画质表现" className="text-blue-600 hover:underline">画质表现</a></li>
            <li><a href="#视频功能" className="text-blue-600 hover:underline">视频功能</a></li>
            <li><a href="#操作体验" className="text-blue-600 hover:underline">操作体验</a></li>
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
