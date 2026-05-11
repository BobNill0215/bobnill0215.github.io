import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import ProductComparison from '@/components/ProductComparison';

export const metadata: Metadata = {
  title: '2024年最佳拍照手机排行榜 - 拍照手机评测网',
  description: '2024年最值得购买的拍照手机推荐，涵盖iPhone、三星、小米、华为等品牌旗舰机型详细对比与购买指南。',
  keywords: '2024拍照手机推荐, 最佳拍照手机, 旗舰手机对比, 拍照手机排行榜',
};

const comparisonProducts = [
  {
    name: '三星S24 Ultra',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300',
    price: '$1,299',
    specs: {
      '主摄': '2亿像素',
      '长焦': '3倍+5倍双长焦',
      'DxO评分': '154分',
      '视频': '8K 30fps',
      '特点': 'AI摄影增强',
    },
  },
  {
    name: 'iPhone 15 Pro Max',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300',
    price: '$1,199',
    specs: {
      '主摄': '4800万像素',
      '长焦': '5倍光学',
      'DxO评分': '153分',
      '视频': '4K 60fps',
      '特点': 'Dolby Vision',
    },
  },
  {
    name: '小米14 Ultra',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300',
    price: '¥6,499',
    specs: {
      '主摄': '5000万一英寸',
      '长焦': '3.2倍+5倍',
      'DxO评分': '149分',
      '视频': '8K 30fps',
      '特点': '徕卡Summilux',
    },
  },
  {
    name: '华为P70 Pro+',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300',
    price: '¥8,999',
    specs: {
      '主摄': '5000万像素',
      '长焦': '3.5倍',
      'DxO评分': '147分',
      '视频': '4K 60fps',
      '特点': 'XMAGE 2.0',
    },
  },
];

const features = ['主摄', '长焦', 'DxO评分', '视频', '特点'];

export default function BestCameraPhones2024Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">拍照手机排行榜</span>
          <h1 className="text-3xl font-bold mt-4 mb-2">2024年最佳拍照手机排行榜</h1>
          <p className="text-gray-600">从旗舰到性价比，全方位推荐年度最佳拍照手机</p>
          <div className="flex items-center gap-4 mt-3">
            <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded">年度推荐</span>
            <span className="text-sm text-gray-500">更新于 2024年5月1日 | 阅读时间 18 分钟</span>
          </div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>2024年的拍照手机市场竞争激烈，各大厂商都推出了影像实力超群的旗舰产品。从苹果的iPhone 15 Pro Max到三星的Galaxy S24 Ultra，从小米14 Ultra到华为P70 Pro+，每一款都代表着移动摄影的最高水平。本文将为您详细分析这些顶级拍照手机，帮助您找到最适合自己的那一款。</p>

          <h2>2024年拍照手机市场概览</h2>
          <p>今年的拍照手机市场呈现以下几个趋势：</p>
          <ul>
            <li><strong>一英寸传感器普及</strong>：更多机型开始采用一英寸大底</li>
            <li><strong>多焦段覆盖</strong>：从超广角到长焦，实现全焦段覆盖</li>
            <li><strong>AI摄影增强</strong>：计算摄影技术持续进化</li>
            <li><strong>视频能力提升</strong>：8K视频和Log格式成为新标杆</li>
          </ul>

          <h2>旗舰级拍照手机对比</h2>
          <ProductComparison products={comparisonProducts} features={features} />

          <h2>Tier 1：专业影像旗舰</h2>

          <h3>🥇 三星Galaxy S24 Ultra</h3>
          <p><strong>参考价格</strong>：$1,299 | <strong>推荐指数</strong>：★★★★★</p>
          <p>三星S24 Ultra凭借2亿像素主摄和双长焦镜头组合，成为2024年拍照手机的新标杆。AI摄影增强功能让日常拍摄更加智能便捷。</p>
          <ul>
            <li><strong>优势</strong>：10倍变焦能力出众，AI功能丰富，8K视频录制</li>
            <li><strong>劣势</strong>：价格较高，体积较大</li>
            <li><strong>适合人群</strong>：追求全面拍照体验的用户</li>
          </ul>

          <h3>🥈 iPhone 15 Pro Max</h3>
          <p><strong>参考价格</strong>：$1,199 | <strong>推荐指数</strong>：★★★★★</p>
          <p>iPhone 15 Pro Max首次引入5倍潜望式长焦，弥补了之前的短板。视频拍摄能力依然是业界最强。</p>
          <ul>
            <li><strong>优势</strong>：视频能力顶尖，色彩一致性好，系统流畅</li>
            <li><strong>劣势</strong>：长焦端只有5倍，灵活性不足</li>
            <li><strong>适合人群</strong>：视频创作者和苹果生态用户</li>
          </ul>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>Tier 2：影像实力派</h2>

          <h3>小米14 Ultra</h3>
          <p><strong>参考价格</strong>：¥6,499 | <strong>推荐指数</strong>：★★★★☆</p>
          <p>小米14 Ultra配备一英寸传感器和徕卡Summilux镜头，是目前安卓阵营拍照实力的巅峰之作。性价比极高。</p>
          <ul>
            <li><strong>优势</strong>：一英寸大底，四摄全焦段，徕卡色彩</li>
            <li><strong>劣势</strong>：视频拍摄略有差距</li>
            <li><strong>适合人群</strong>：追求极致拍照效果的性价比用户</li>
          </ul>

          <h3>华为P70 Pro+</h3>
          <p><strong>参考价格</strong>：¥8,999 | <strong>推荐指数</strong>：★★★★☆</p>
          <p>华为P70 Pro+搭载XMAGE 2.0影像系统，可变光圈设计和计算摄影能力依然是业界领先水平。</p>
          <ul>
            <li><strong>优势</strong>：可变光圈，优秀的夜景和长焦表现</li>
            <li><strong>劣势</strong>：不支持5G，缺少Google服务</li>
            <li><strong>适合人群</strong>：华为老用户和摄影爱好者</li>
          </ul>

          <h2>Tier 3：次旗舰选择</h2>

          <h3>OPPO Find X7 Ultra</h3>
          <p><strong>参考价格</strong>：¥5,999 | <strong>推荐指数</strong>：★★★★☆</p>
          <p>同样采用一英寸传感器，配合哈苏影像系统，拍照表现可圈可点。</p>

          <h3>vivo X100 Pro</h3>
          <p><strong>参考价格</strong>：¥4,999 | <strong>推荐指数</strong>：★★★★☆</p>
          <p>搭载蔡司光学镜头，人像拍摄效果出色，是人像摄影的绝佳选择。</p>

          <h3>荣耀Magic6 Pro</h3>
          <p><strong>参考价格</strong>：¥5,699 | <strong>推荐指数</strong>：★★★★☆</p>
          <p>鹰眼相机系统让运动抓拍更加得心应手，整体拍照表现均衡。</p>

          <AdPlaceholder slot="article-middle-2" className="my-8" />

          <h2>各场景最佳选择</h2>
          <table className="w-full border-collapse my-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">场景</th>
                <th className="border p-3 text-left">推荐机型</th>
                <th className="border p-3 text-left">理由</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">夜景拍摄</td>
                <td className="border p-3">华为P70 Pro+</td>
                <td className="border p-3">可变光圈+计算摄影，暗光表现出色</td>
              </tr>
              <tr>
                <td className="border p-3">长焦拍摄</td>
                <td className="border p-3">三星S24 Ultra</td>
                <td className="border p-3">3倍+5倍双长焦，覆盖更广</td>
              </tr>
              <tr>
                <td className="border p-3">视频拍摄</td>
                <td className="border p-3">iPhone 15 Pro Max</td>
                <td className="border p-3">Dolby Vision HDR，色彩一致</td>
              </tr>
              <tr>
                <td className="border p-3">人像摄影</td>
                <td className="border p-3">vivo X100 Pro</td>
                <td className="border p-3">蔡司镜头，肤色还原自然</td>
              </tr>
              <tr>
                <td className="border p-3">性价比之选</td>
                <td className="border p-3">小米14 Ultra</td>
                <td className="border p-3">旗舰配置，价格相对实惠</td>
              </tr>
            </tbody>
          </table>

          <h2>购买建议</h2>
          <h3>根据预算选择</h3>
          <ul>
            <li><strong>预算充足（$1000+）</strong>：三星S24 Ultra或iPhone 15 Pro Max，体验最全面的拍照功能</li>
            <li><strong>预算中等（¥5000-7000）</strong>：小米14 Ultra或OPPO Find X7 Ultra，性价比最优</li>
            <li><strong>预算有限（¥3000-5000）</strong>：关注上代旗舰或中端机型，如小米13 Ultra</li>
          </ul>

          <h3>根据需求选择</h3>
          <ul>
            <li><strong>视频创作</strong>：首选iPhone 15 Pro Max</li>
            <li><strong>长焦爱好者</strong>：首选三星S24 Ultra</li>
            <li><strong>人像拍摄</strong>：首选vivo X100 Pro</li>
            <li><strong>夜景拍摄</strong>：首选华为P70 Pro+</li>
          </ul>

          <AdPlaceholder slot="article-bottom" className="mt-8" />

          <h2>总结</h2>
          <p>2024年的拍照手机市场精彩纷呈，无论是追求极致体验的旗舰用户，还是注重性价比的普通消费者，都能找到适合自己的产品。</p>
          <p>如果您追求最全面的拍照体验，建议选择三星S24 Ultra或iPhone 15 Pro Max；如果您更注重拍照性能而预算有限，小米14 Ultra是最佳选择；如果您对某个特定场景有特殊需求，可以参考上文的场景推荐表。</p>
          <p>希望本文能够帮助您做出明智的选择，找到最适合自己的拍照手机。</p>
        </div>

        <AdPlaceholder slot="article-bottom-2" className="mt-8" />

        <div className="mt-12 bg-gray-100 rounded-lg p-6">
          <h3 className="font-bold mb-2">免责声明</h3>
          <p className="text-sm text-gray-600">本文包含的购买链接为联盟链接，我们可能会从中获得少量佣金，这不会影响您的购买价格。这是支持我们继续提供免费评测内容的方式之一，感谢您的理解。</p>
        </div>
      </article>

      <Footer />
    </div>
  );
}