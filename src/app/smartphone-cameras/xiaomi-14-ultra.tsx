import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import ProductComparison from '@/components/ProductComparison';

export const metadata: Metadata = {
  title: '小米14 Ultra 相机深度评测 - 拍照手机评测网',
  description: '小米14 Ultra徕卡Summilux镜头专业评测，一英寸传感器拍照效果分析，全面解读小米最强拍照旗舰的影像实力。',
  keywords: '小米14 Ultra, 徕卡镜头, 拍照评测, 一英寸传感器, 小米手机',
};

const comparisonProducts = [
  {
    name: '小米14 Ultra',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300',
    price: '¥6,499',
    specs: {
      '主摄': '5000万像素 一英寸',
      '超广角': '5000万像素 122°',
      '中长焦': '5000万像素 3.2倍',
      '长焦': '5000万像素 5倍',
      '前摄': '3200万像素',
      '光圈': 'f/1.63-f/4.0',
    },
  },
  {
    name: '小米13 Ultra',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300',
    price: '¥5,999',
    specs: {
      '主摄': '5000万像素 一英寸',
      '超广角': '5000万像素 122°',
      '中长焦': '5000万像素 3.2倍',
      '长焦': '5000万像素 5倍',
      '前摄': '3200万像素',
      '光圈': 'f/1.9-f/4.0',
    },
  },
];

const features = ['主摄', '超广角', '中长焦', '长焦', '前摄', '光圈'];

export default function Xiaomi14UltraPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">手机评测</span>
          <h1 className="text-3xl font-bold mt-4 mb-2">小米14 Ultra 徕卡影像旗舰深度评测</h1>
          <p className="text-gray-600">一英寸传感器+Summilux镜头，移动摄影的新标杆</p>
          <div className="flex items-center gap-4 mt-3">
            <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded">旗舰推荐</span>
            <span className="text-yellow-500 text-lg">★ 4.9</span>
            <span className="text-sm text-gray-500">发布于 2024年2月28日 | 阅读时间 15 分钟</span>
          </div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>小米14 Ultra是小米有史以来影像实力最强的旗舰手机。与徕卡深度合作，配备一英寸索尼LYT-900传感器和Summilux镜头，让这款手机在发布之初就备受关注。本文将深入评测其相机表现，看看它是否能成为移动摄影的新标杆。</p>

          <h2>相机规格详解</h2>
          <ProductComparison products={comparisonProducts} features={features} />

          <h2>主摄表现：一英寸传感器的实力</h2>
          <p>小米14 Ultra的主摄采用索尼最新的一英寸传感器LYT-900，相比小米13 Ultra使用的IMX989，新传感器在动态范围和功耗方面都有显著提升。f/1.63的大光圈让进光量大幅增加。</p>
          <p><strong>样张描述</strong>：在阳光明媚的户外，主摄拍摄的照片细节丰富，锐度适中。建筑物的纹理清晰可见，天空过渡自然。开启徕卡生动模式时，色彩更加鲜艳但不失真。</p>
          <p>可变光圈是小米14 Ultra的一大亮点，支持f/1.63到f/4.0之间自由调节。大光圈适合暗光环境和浅景深效果，而小光圈则适合拍摄风景需要更大景深的场景。</p>

          <h2>徕卡Summilux镜头：大师级光学品质</h2>
          <p>Summilux在徕卡体系中代表着最大光圈f/1.4-1.7的高性能镜头。小米14 Ultra是首次在手机上使用Summilux镜头，这意味着更高的光学素质。</p>
          <p>实际拍摄中，这颗镜头表现出色：</p>
          <ul>
            <li>边缘画质优秀，畸变控制良好</li>
            <li>逆光拍摄时眩光和鬼影控制得当</li>
            <li>最近对焦距离近，拍摄微距效果出色</li>
          </ul>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>四摄系统：全焦段覆盖</h2>
          <h3>超广角镜头</h3>
          <p>5000万像素超广角镜头提供122°超大视角，适合拍摄风景和建筑。边缘畸变校正自然，适合旅行拍摄。</p>
          <p><strong>样张描述</strong>：拍摄宽阔的山水风景时，超广角展现出宏大的场景感，边缘没有明显的拉伸变形，色彩与主摄保持一致。</p>

          <h3>3.2倍中长焦</h3>
          <p>中长焦镜头适合人像和日常抓拍，75mm焦段接近人眼视角，拍摄人像时不会产生面部变形。</p>
          <p><strong>样张描述</strong>：人像模式下，皮肤细节保留良好，虚化效果自然。徕卡人像模式提供了真实和虚化两种风格选择。</p>

          <h3>5倍长焦镜头</h3>
          <p>5倍潜望式长焦是拍摄远处物体的利器，等效焦距120mm，适合野生动物和体育赛事拍摄。</p>
          <p><strong>样张描述</strong>：在10倍混合变焦下，远处建筑上的文字仍然清晰可见，AI超分辨率算法有效提升了数码变焦的可用性。</p>

          <h2>夜景表现：暗光也清晰</h2>
          <p>一英寸大底配合大光圈，让小米14 Ultra的夜景表现异常出色。</p>
          <p><strong>样张描述</strong>：在几乎没有光的夜晚，开启夜景模式后，照片呈现出丰富的暗部细节。天空纯净，没有明显的噪点。高光压制到位，路灯没有出现光晕。</p>
          <p>新增的「大师人像」模式在夜景人像拍摄中表现出色，背景虚化自然，皮肤还原真实。</p>

          <h2>视频拍摄：电影级体验</h2>
          <p>小米14 Ultra支持8K视频录制和4K 120fps慢动作。主摄支持4K 60fps连续录制，发热量控制良好。</p>
          <ul>
            <li>8K视频：适合专业创作，后期裁切空间大</li>
            <li>4K 120fps：慢动作效果流畅，适合运动场景</li>
            <li>电影模式：支持电影级景深效果</li>
            <li>导演模式：支持多镜头同时录制</li>
          </ul>

          <AdPlaceholder slot="article-middle-2" className="my-8" />

          <h2>拍照体验与功能</h2>
          <p>小米14 Ultra提供了丰富的拍照功能：</p>
          <ul>
            <li><strong>徕卡双画质</strong>：徕卡生动和徕卡真实两种风格可选</li>
            <li><strong>大师镜头包</strong>：模拟35mm、50mm、75mm等经典焦段</li>
            <li><strong>专业模式</strong>：支持RAW格式，手动控制各项参数</li>
            <li><strong>街拍模式</strong>：快速启动，快速拍摄，适合抓拍</li>
          </ul>

          <h2>与竞品对比</h2>
          <p>相比iPhone 15 Pro Max和三星S24 Ultra，小米14 Ultra的优势在于：</p>
          <ul>
            <li>一英寸传感器带来的更高画质</li>
            <li>四摄系统实现全焦段覆盖</li>
            <li>徕卡色彩科学带来的独特风格</li>
            <li>更高的性价比</li>
          </ul>
          <p>不足之处在于视频拍摄稳定性略逊于iPhone，系统流畅度有待提升。</p>

          <h2>购买建议</h2>
          <h3>适合购买小米14 Ultra的用户</h3>
          <ul>
            <li>追求极致拍照效果的摄影爱好者</li>
            <li>喜欢徕卡色彩风格的用户</li>
            <li>需要全焦段覆盖的拍摄场景</li>
            <li>预算有限但想要旗舰体验的用户</li>
          </ul>

          <h3>不适合购买的用户</h3>
          <ul>
            <li>对视频拍摄有专业需求的用户</li>
            <li>注重系统流畅度和长期使用的用户</li>
            <li>对品牌有特殊偏好的用户</li>
          </ul>

          <h2>总结</h2>
          <p>小米14 Ultra是目前拍照能力最强的安卓手机之一。一英寸传感器配合徕卡Summilux镜头，在各种场景下都能提供出色的画质表现。四摄系统实现了全焦段覆盖，满足了不同拍摄需求。</p>
          <p>虽然视频拍摄方面与iPhone还有差距，但拍照方面的提升是有目共睹的。对于热爱摄影的用户来说，小米14 Ultra是一个非常值得考虑的选择。</p>
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