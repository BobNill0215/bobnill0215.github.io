import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import ProductComparison from '@/components/ProductComparison';

export const metadata: Metadata = {
  title: 'iPhone 15 Pro Max vs 三星S24 Ultra 相机对比评测 - 拍照手机评测网',
  description: '苹果iPhone 15 Pro Max与三星Galaxy S24 Ultra相机对比，深度评测两款旗舰手机的拍照性能、视频能力、夜景表现等详细对比。',
  keywords: 'iPhone 15 Pro Max, 三星S24 Ultra, 相机对比, 拍照手机, 旗舰手机评测',
};

const comparisonProducts = [
  {
    name: 'iPhone 15 Pro Max',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300',
    price: '$1,199',
    specs: {
      '主摄': '4800万像素 f/1.78',
      '超广角': '1200万像素 f/2.2',
      '长焦': '1200万像素 5倍光学',
      '前摄': '1200万像素 f/1.9',
      '视频': '4K 60fps Dolby Vision',
      '防抖': '传感器位移防抖',
    },
  },
  {
    name: '三星S24 Ultra',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300',
    price: '$1,299',
    specs: {
      '主摄': '2亿像素 f/1.7',
      '超广角': '1200万像素 f/2.2',
      '长焦1': '1000万像素 3倍',
      '长焦2': '5000万像素 5倍',
      '前摄': '1200万像素 f/2.2',
      '视频': '4K 120fps 8K 30fps',
    },
  },
];

const features = ['主摄', '超广角', '长焦', '前摄', '视频', '防抖'];

export default function IPhoneVsSamsungPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">拍照手机对比</span>
          <h1 className="text-3xl font-bold mt-4 mb-2">iPhone 15 Pro Max vs 三星S24 Ultra 相机巅峰对决</h1>
          <p className="text-gray-600">两大旗舰手机相机系统全方位对比评测</p>
          <div className="flex items-center gap-4 mt-3">
            <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded">编辑推荐</span>
            <span className="text-yellow-500 text-lg">★ 4.8</span>
            <span className="text-sm text-gray-500">发布于 2024年3月20日 | 阅读时间 12 分钟</span>
          </div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>当谈到智能手机摄影，iPhone和三星Galaxy系列始终是业界标杆。2024年，iPhone 15 Pro Max带来了全新的5倍潜望式长焦镜头，而三星S24 Ultra则延续了其2亿像素主摄的传奇。本文将从多个维度深入对比这两款旗舰手机的相机表现，帮助您找到最适合的那一款。</p>

          <h2>相机规格对比</h2>
          <ProductComparison products={comparisonProducts} features={features} />

          <h2>日间拍摄表现</h2>
          <h3>iPhone 15 Pro Max</h3>
          <p>iPhone 15 Pro Max在日间拍摄中表现出色，4800万像素主摄能够捕捉丰富的细节。智能HDR 5技术让照片拥有出色的动态范围，色彩还原自然准确。新的5倍长焦镜头在拍摄远处物体时表现出色，但偶尔会出现过度锐化的情况。</p>
          <p><strong>样张描述</strong>：在阳光充足的户外，iPhone拍摄的建筑照片呈现出细腻的纹理，阴影部分保留了丰富的细节，天空过渡自然，没有明显的噪点。</p>

          <h3>三星S24 Ultra</h3>
          <p>三星S24 Ultra的2亿像素主摄在日间表现同样惊艳。默认模式下，照片通过像素合并技术输出1200万像素，既保证了画质又控制了文件大小。AI场景优化功能可以自动识别拍摄场景并优化参数。</p>
          <p><strong>样张描述</strong>：拍摄花卉时，S24 Ultra展现出优秀的微距能力和色彩饱和度，花瓣纹理清晰可见，背景虚化自然，但某些场景下色彩偏鲜艳。</p>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>夜景模式对比</h2>
          <p>夜景拍摄是检验手机相机实力的关键场景。</p>

          <h3>iPhone 15 Pro Max</h3>
          <p>夜景模式下，iPhone 15 Pro Max表现出色。传感器位移防抖技术让手持拍摄更加稳定。夜景照片噪点控制良好，高光部分不会过度溢出。超广角镜头同样支持夜景模式，实用性大增。</p>
          <p><strong>样张描述</strong>：在暗光环境下拍摄的城市夜景，iPhone能够准确还原霓虹灯的色彩，暗部细节保留较好，天空呈现出自然的深蓝色。</p>

          <h3>三星S24 Ultra</h3>
          <p>三星S24 Ultra的夜景表现同样令人印象深刻。2亿像素主摄在夜景模式下通过多帧合成技术输出清晰的照片。新的AI算法在降噪方面有显著提升，但有时会出现过度提亮的情况。</p>
          <p><strong>样张描述</strong>：夜景照片整体亮度较高，暗处细节清晰可见，但部分场景可能出现轻微的光晕现象，这是由于高像素传感器在复杂光线下的固有挑战。</p>

          <h2>人像模式对比</h2>
          <p>人像拍摄是两款手机的强项。iPhone 15 Pro Max的智能HDR 5和全新的人像算法让皮肤细节更加自然，虚化效果精准。三星S24 Ultra则提供了更多美颜选项，适合不同用户的需求。</p>
          <p>iPhone在复杂背景下的人物边缘处理更加准确，而三星在室内人像中表现出更好的肤色还原。</p>

          <h2>视频拍摄能力</h2>
          <p>视频拍摄方面，两款手机都达到了业界顶尖水平。</p>
          <ul>
            <li><strong>iPhone 15 Pro Max</strong>：支持4K 60fps Dolby Vision HDR录制，电影模式支持4K 30fps，前后镜头均支持ProRes专业视频格式</li>
            <li><strong>三星S24 Ultra</strong>：支持4K 120fps慢动作视频，8K 30fps视频录制，新增AI后期编辑功能</li>
          </ul>
          <p>实际测试中，iPhone在视频色彩一致性和防抖方面略有优势，而三星在8K视频和高帧率慢动作方面更具可玩性。</p>

          <h2>长焦镜头对比</h2>
          <p>长焦是两款手机差异最大的地方。</p>
          <p>iPhone 15 Pro Max首次配备5倍潜望式长焦镜头，等效焦距120mm，在拍摄远处物体时表现出色。而三星S24 Ultra采用了双长焦方案，包括3倍和5倍光学变焦，适用范围更广。</p>
          <p>在10倍以上的数码变焦场景下，三星凭借其AI超分辨率算法能够保持更好的细节，而iPhone的数码变焦画质下降较为明显。</p>

          <AdPlaceholder slot="article-middle-2" className="my-8" />

          <h2>购买建议</h2>
          <h3>适合选择iPhone 15 Pro Max的用户</h3>
          <ul>
            <li>已经是苹果生态用户，期望设备间无缝衔接</li>
            <li>注重视频拍摄质量，特别是HDR内容创作</li>
            <li>偏好自然真实的照片风格</li>
            <li>需要出色的系统流畅度和长期软件支持</li>
          </ul>

          <h3>适合选择三星S24 Ultra的用户</h3>
          <ul>
            <li>重视长焦拍摄灵活性，需要更多的焦段选择</li>
            <li>喜欢AI功能带来的便利性</li>
            <li>偏好色彩鲜艳的照片风格</li>
            <li>需要S Pen手写笔进行创意工作</li>
          </ul>

          <h2>总结</h2>
          <p>iPhone 15 Pro Max和三星S24 Ultra都是目前拍照能力最强的旗舰手机。iPhone在视频拍摄和系统生态方面具有优势，而三星在长焦灵活性和AI功能方面更胜一筹。选择哪一款最终取决于您的个人偏好和使用习惯。</p>
          <p>两款手机的相机表现都代表了智能手机摄影的最高水平，无论选择哪一款，都能获得出色的拍摄体验。</p>
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