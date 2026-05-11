import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import ProductComparison from '@/components/ProductComparison';

export const metadata: Metadata = {
  title: '索尼vs佳能vs尼康：2024年三大相机品牌全面对比',
  description: '索尼、佳能、尼康三大相机品牌对比分析，对焦系统、镜头群、视频能力、性价比全面评测',
  keywords: '索尼佳能尼康对比, 相机品牌对比, 微单相机推荐, 全画幅微单对比, 摄影器材选择',
};

const comparisonProducts = [
  {
    name: '索尼 A7 IV',
    image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=300',
    price: '$2,499',
    specs: {
      '传感器': '全画幅 3300万',
      '视频': '4K 60fps',
      '对焦': '759点 AI对焦',
      '防抖': '5.5级',
      '卡口': 'E卡口',
      '镜头群': '200+支',
    },
  },
  {
    name: '佳能 R6 II',
    image: 'https://images.unsplash.com/photo-1604168648028-2f1ed4a4b4e8?w=300',
    price: '$2,499',
    specs: {
      '传感器': '全画幅 2420万',
      '视频': '4K 60fps',
      '对焦': '1053区 AI对焦',
      '防抖': '8级',
      '卡口': 'RF卡口',
      '镜头群': '30+支',
    },
  },
  {
    name: '尼康 Z6 III',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300',
    price: '$2,499',
    specs: {
      '传感器': '全画幅 2450万',
      '视频': '6K 60fps',
      '对焦': '299点',
      '防抖': '8级',
      '卡口': 'Z卡口',
      '镜头群': '40+支',
    },
  },
];

const features = ['传感器', '视频', '对焦', '防抖', '卡口', '镜头群'];

const brandProducts = [
  { name: '索尼 A7 IV', price: '$2,499', brand: '索尼', link: '#' },
  { name: '佳能 R6 II', price: '$2,499', brand: '佳能', link: '#' },
  { name: '尼康 Z6 III', price: '$2,499', brand: '尼康', link: '#' },
];

export default function SonyVsCanonVsNikonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <nav className="text-sm text-gray-500 mb-2">
            <Link href="/cameras" className="hover:text-blue-600">相机评测</Link> &gt;{' '}
            <Link href="/cameras/comparison" className="hover:text-blue-600">品牌对比</Link>
          </nav>
          <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">深度对比</span>
          <h1 className="text-3xl font-bold mt-4 mb-2">索尼vs佳能vs尼康：2024年三大相机品牌全面对比</h1>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-sm text-gray-500">发布于 2024年3月1日</span>
            <span className="text-gray-500">|</span>
            <span className="text-sm text-gray-500">阅读时间 15 分钟</span>
          </div>
          <p className="text-gray-600 mt-2">索尼、佳能、尼康三大品牌全面对比，帮您找到最适合自己的相机系统</p>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
            <p className="text-purple-800"><strong>对比摘要：</strong>索尼、佳能、尼康是当前最主流的三大相机品牌，各有特色和优势。本文将从对焦系统、镜头群、视频能力、性价比等多个维度进行全面对比，帮助您做出明智的购买决策。</p>
          </div>

          <h2>前言</h2>
          <p>选购相机时，品牌选择是一个重要的决定。每个相机品牌都有其独特的技术特点、镜头生态和用户群体。在微单相机时代，索尼、佳能、尼康三大品牌占据了绝大部分市场份额，它们之间的竞争也日趋激烈。</p>
          <p>本文将从多个维度对这三大品牌进行深入对比，帮助您根据自身需求选择最合适的相机系统。</p>

          <h2>品牌概述</h2>

          <h3>索尼 (Sony)</h3>
          <p>索尼是微单相机的先驱，拥有最成熟的E卡口系统。目前全画幅微单市场份额第一，产品线从入门到专业全覆盖。近年来，索尼在对焦、视频、画质等方面持续领先，是许多专业摄影师和视频创作者的首选。</p>

          <h3>佳能 (Canon)</h3>
          <p>佳能是传统单反巨头，2018年推出EOS R系统后迅速崛起。佳能的色彩科学和用户体验一直备受好评，RF卡口拥有出色的镜头光学素质。近年来佳能在对焦系统上投入巨大，性能提升显著。</p>

          <h3>尼康 (Nikon)</h3>
          <p>尼康同样是老牌相机厂商，2018年推出Z卡口系统。尼康相机以出色的做工和人体工程学设计著称，Z卡口拥有目前最大的卡口直径（55mm），为镜头设计提供了更大的灵活性。视频能力近年来也有明显提升。</p>

          <h2>对焦系统对比</h2>
          <p>对焦系统是现代相机的核心竞争力之一，三大品牌各有特色：</p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">品牌</th>
                  <th className="border border-gray-300 px-4 py-2">对焦点数</th>
                  <th className="border border-gray-300 px-4 py-2">AI识别</th>
                  <th className="border border-gray-300 px-4 py-2">暗光对焦</th>
                  <th className="border border-gray-300 px-4 py-2">追焦性能</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">索尼</td>
                  <td className="border border-gray-300 px-4 py-2">759点</td>
                  <td className="border border-gray-300 px-4 py-2">人/动物/鸟/车</td>
                  <td className="border border-gray-300 px-4 py-2">-4EV</td>
                  <td className="border border-gray-300 px-4 py-2">★★★★★</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">佳能</td>
                  <td className="border border-gray-300 px-4 py-2">1053区</td>
                  <td className="border border-gray-300 px-4 py-2">人/动物/鸟/车</td>
                  <td className="border border-gray-300 px-4 py-2">-6.5EV</td>
                  <td className="border border-gray-300 px-4 py-2">★★★★★</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">尼康</td>
                  <td className="border border-gray-300 px-4 py-2">299点</td>
                  <td className="border border-gray-300 px-4 py-2">人/动物/鸟/车</td>
                  <td className="border border-gray-300 px-4 py-2">-4EV</td>
                  <td className="border border-gray-300 px-4 py-2">★★★★☆</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p><strong>结论：</strong>三大品牌的对焦系统都达到了顶级水平，索尼和佳能在AI识别和追焦方面略有优势，佳能的低光对焦能力最强。</p>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>镜头生态系统</h2>
          <p>镜头群是选择相机系统时最重要的考量因素之一。</p>

          <h3>索尼 E卡口</h3>
          <ul>
            <li><strong>原厂镜头</strong>：200+支选择，最丰富的全画幅微单镜头群</li>
            <li><strong>GM镜头</strong>：顶级画质，专业可靠</li>
            <li><strong>副厂支持</strong>：腾龙、适马、唯卓仕等大量副厂镜头</li>
            <li><strong>性价比</strong>：从入门到专业，选择多样</li>
          </ul>

          <h3>佳能 RF卡口</h3>
          <ul>
            <li><strong>原厂镜头</strong>：30+支，持续快速扩充中</li>
            <li><strong>RF镜头</strong>：光学素质优秀，部分镜头价格较高</li>
            <li><strong>副厂支持</strong>：适马、腾龙已开始推出RF卡口镜头</li>
            <li><strong>特殊规格</strong>：RF 28-70mm f/2等创新规格</li>
          </ul>

          <h3>尼康 Z卡口</h3>
          <ul>
            <li><strong>原厂镜头</strong>：40+支，增长迅速</li>
            <li><strong>大卡口优势</strong>：55mm卡口直径允许更出色的镜头设计</li>
            <li><strong>副厂支持</strong>：腾龙、适马、唯卓仕等已推出Z卡口镜头</li>
            <li><strong>光学素质</strong>：Z卡口镜头普遍评价很高</li>
          </ul>

          <p><strong>结论：</strong>索尼的E卡口系统拥有最成熟的镜头生态，副厂选择最多。佳能和尼康的原厂镜头光学素质出色，但数量和副厂支持正在迎头赶上。</p>

          <h2>视频能力对比</h2>
          <p>视频能力已成为选择相机的重要考量因素。</p>

          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">索尼</h4>
              <ul className="text-sm space-y-1">
                <li>• S-Log3/S-Log2</li>
                <li>• 10-bit 4:2:2录制</li>
                <li>• RAW输出支持</li>
                <li>• 优秀的自动对焦追焦</li>
                <li>• 丰富的视频功能</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">佳能</h4>
              <ul className="text-sm space-y-1">
                <li>• C-Log3</li>
                <li>• 10-bit 4:2:2录制</li>
                <li>• 优秀的肤色表现</li>
                <li>• 直出色彩讨喜</li>
                <li>• 双像素CMOS AF II</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">尼康</h4>
              <ul className="text-sm space-y-1">
                <li>• N-Log</li>
                <li>• 12-bit RAW输出</li>
                <li>• 6K超采样4K</li>
                <li>• 出色的动态范围</li>
                <li>• 高效率ProRes 422 HQ</li>
              </ul>
            </div>
          </div>

          <p><strong>结论：</strong>索尼在视频功能的专业性和对焦追焦方面领先；佳能以出色的肤色表现和直出色彩著称；尼康在动态范围和RAW输出方面有优势。</p>

          <h2>机身防抖对比</h2>
          <p>机身防抖对于手持拍摄和弱光环境非常重要。</p>
          <ul>
            <li><strong>索尼</strong>：部分机型支持5.5-8级防抖（A7R V支持8级）</li>
            <li><strong>佳能</strong>：R6 II/R5支持8级防抖，是目前最强</li>
            <li><strong>尼康</strong>：Z6 III/Z8支持8级防抖，同样出色</li>
          </ul>

          <AdPlaceholder slot="article-middle-2" className="my-8" />

          <h2>性价比分析</h2>

          <h3>入门级（$500-$1500）</h3>
          <ul>
            <li><strong>索尼</strong>：ZV-E10、A6100，适合Vlog和入门用户</li>
            <li><strong>佳能</strong>：R50、R10，高性价比入门之选</li>
            <li><strong>尼康</strong>：Z30、Z50，适合静态摄影为主的用户</li>
          </ul>

          <h3>中端级（$1500-$2500）</h3>
          <ul>
            <li><strong>索尼</strong>：A7C II、A7 IV，综合性能出色</li>
            <li><strong>佳能</strong>：R6 II、R8，优秀的高感和视频能力</li>
            <li><strong>尼康</strong>：Z6 III、Zf，出色的做工和操控</li>
          </ul>

          <h3>专业级（$2500+）</h3>
          <ul>
            <li><strong>索尼</strong>：A7R V、A9 III，高像素和速度旗舰</li>
            <li><strong>佳能</strong>：R5 II、R3，专业可靠性</li>
            <li><strong>尼康</strong>：Z8、Z9，旗舰级性能</li>
          </ul>

          <h2>热门机型对比</h2>
          <ProductComparison products={comparisonProducts} features={features} />

          <h2>各品牌优势总结</h2>
          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-800 mb-2">索尼优势</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>最成熟的镜头生态</li>
                <li>丰富的副厂镜头选择</li>
                <li>紧凑的机身设计</li>
                <li>最全面的产品线</li>
                <li>优秀的对焦追焦</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-bold text-red-800 mb-2">佳能优势</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>出色的色彩科学</li>
                <li>优秀的用户体验</li>
                <li>强大的机身防抖</li>
                <li>可靠的自动对焦</li>
                <li>优秀的直出色彩</li>
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-bold text-yellow-800 mb-2">尼康优势</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>出色的做工质量</li>
                <li>优秀的操控手感</li>
                <li>大卡口设计优势</li>
                <li>高性价比中端机型</li>
                <li>优秀的机身防抖</li>
              </ul>
            </div>
          </div>

          <h2>如何选择</h2>
          <p><strong>选择索尼，如果：</strong></p>
          <ul>
            <li>需要最丰富的镜头选择</li>
            <li>追求轻便的机身设计</li>
            <li>需要强大的视频自动对焦</li>
            <li>预算有限但想体验全画幅</li>
          </ul>

          <p><strong>选择佳能，如果：</strong></p>
          <ul>
            <li>重视直出色彩和人像肤色</li>
            <li>喜欢简洁的操作系统</li>
            <li>需要强大的机身防抖</li>
            <li>已有佳能EF镜头库存</li>
          </ul>

          <p><strong>选择尼康，如果：</strong></p>
          <ul>
            <li>重视相机的做工和手感</li>
            <li>需要出色的静态画质</li>
            <li>欣赏尼康的操控设计</li>
            <li>追求性价比的中高端机型</li>
          </ul>

          <AdPlaceholder slot="article-middle-3" className="my-8" />

          <h2>常见问题</h2>

          <h3>Q: 三大品牌哪个对焦最快？</h3>
          <p>A: 索尼和佳能的顶级机型对焦速度都非常快，实际使用中差异不大。佳能R6 II的暗光对焦能力更强（-6.5EV），索尼在对焦覆盖范围上略有优势。</p>

          <h3>Q: 哪个品牌的镜头性价比最高？</h3>
          <p>A: 索尼的E卡口拥有最丰富的副厂镜头选择，适马、腾龙等副厂镜头价格实惠且质量出色，性价比最高。</p>

          <h3>Q: 视频创作应该选择哪个品牌？</h3>
          <p>A: 如果以视频为主，索尼的自动对焦追焦系统最可靠；佳能的人像肤色表现最好；尼康的动态范围出色。</p>

          <h3>Q: 未来哪个品牌发展潜力最大？</h3>
          <p>A: 三大品牌都在积极发展，佳能和尼康的镜头群正在快速扩充，未来差距会进一步缩小。索尼的优势在于先发优势和成熟的生态。</p>

          <h2>总结</h2>
          <p>索尼、佳能、尼康三大品牌都是值得信赖的选择，每个品牌都有其独特的优势。选择哪个品牌，最终还是要根据您的具体需求和使用习惯来决定。</p>
          <p>无论您选择哪个品牌，都能获得出色的画质和可靠的性能。建议在购买前到实体店实际体验一下各品牌的相机操作手感，这往往是决定性因素。</p>
          <p>如果您想了解更多具体机型的评测，请查看我们的详细评测文章。</p>

          <h2>相关产品推荐</h2>
          <div className="grid md:grid-cols-3 gap-4 my-6">
            {brandProducts.map((product, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <div className="h-32 bg-gray-200 rounded mb-3"></div>
                <span className="text-xs text-gray-500">{product.brand}</span>
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
            <p className="text-gray-600">您使用过哪个品牌的相机？有什么使用心得想要分享？</p>
            <p className="text-sm text-gray-500 mt-2">评论功能即将上线，敬请期待。</p>
          </div>
        </div>

        <AdPlaceholder slot="article-bottom" className="mt-8" />

        <div className="mt-8 border-t pt-6">
          <h3 className="font-bold mb-4">文章目录</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#前言" className="text-blue-600 hover:underline">前言</a></li>
            <li><a href="#品牌概述" className="text-blue-600 hover:underline">品牌概述</a></li>
            <li><a href="#对焦系统对比" className="text-blue-600 hover:underline">对焦系统对比</a></li>
            <li><a href="#镜头生态系统" className="text-blue-600 hover:underline">镜头生态系统</a></li>
            <li><a href="#视频能力对比" className="text-blue-600 hover:underline">视频能力对比</a></li>
            <li><a href="#机身防抖对比" className="text-blue-600 hover:underline">机身防抖对比</a></li>
            <li><a href="#性价比分析" className="text-blue-600 hover:underline">性价比分析</a></li>
            <li><a href="#如何选择" className="text-blue-600 hover:underline">如何选择</a></li>
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
