import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import ProductComparison from '@/components/ProductComparison';

export const metadata: Metadata = {
  title: '华为P70 Pro+ 影像旗舰深度评测 - 拍照手机评测网',
  description: '华为P70 Pro+ XMAGE影像系统全面评测，可变光圈、计算摄影技术详解，华为最强拍照手机详细分析。',
  keywords: '华为P70 Pro+, XMAGE影像, 拍照评测, 华为手机, 可变光圈',
};

const comparisonProducts = [
  {
    name: '华为P70 Pro+',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300',
    price: '¥8,999',
    specs: {
      '主摄': '5000万像素 1/1.3英寸',
      '超广角': '4000万像素',
      '长焦': '4800万像素 3.5倍',
      '前摄': '1300万像素',
      '光圈': 'f/1.4-f/4.0',
      '防抖': '5轴光学防抖',
    },
  },
  {
    name: '华为P60 Pro',
    image: 'https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?w=300',
    price: '¥7,988',
    specs: {
      '主摄': '4800万像素 1/1.4英寸',
      '超广角': '1300万像素',
      '长焦': '4800万像素 3.5倍',
      '前摄': '1300万像素',
      '光圈': 'f/1.4-f/4.0',
      '防抖': 'OIS光学防抖',
    },
  },
];

const features = ['主摄', '超广角', '长焦', '前摄', '光圈', '防抖'];

export default function HuaweiP70ProPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">手机评测</span>
          <h1 className="text-3xl font-bold mt-4 mb-2">华为P70 Pro+ XMAGE影像旗舰深度评测</h1>
          <p className="text-gray-600">全新XMAGE 2.0系统，可变光圈+计算摄影的完美融合</p>
          <div className="flex items-center gap-4 mt-3">
            <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded">影像机皇</span>
            <span className="text-yellow-500 text-lg">★ 4.7</span>
            <span className="text-sm text-gray-500">发布于 2024年4月15日 | 阅读时间 14 分钟</span>
          </div>
        </header>

        <AdPlaceholder slot="article-top" className="mb-8" />

        <div className="prose max-w-none">
          <h2>前言</h2>
          <p>华为P70 Pro+是华为在受到制裁后推出的最强影像旗舰。搭载全新的XMAGE 2.0影像系统，配合可变光圈和业界领先的计算摄影技术，这款手机代表了华为在移动摄影领域的最高水平。本文将深入评测其相机表现，看看它是否能延续华为在拍照领域的辉煌。</p>

          <h2>相机规格详解</h2>
          <ProductComparison products={comparisonProducts} features={features} />

          <h2>XMAGE 2.0影像系统：华为的自我超越</h2>
          <p>华为P70 Pro+首发了XMAGE 2.0影像系统，这是华为在放弃与徕卡合作后自主研发的全新品牌。相比第一代XMAGE，2.0版本在算法和硬件配合方面更加成熟。</p>
          <p>XMAGE 2.0的核心技术包括：</p>
          <ul>
            <li><strong>XD Fusion Pro计算摄影</strong>：整合多帧合成，智能降噪，细节增强</li>
            <li><strong>XD Optics计算光学</strong>：利用算法修正镜头光学缺陷</li>
            <li><strong>真实感成像引擎</strong>：还原人眼所见的真实世界</li>
          </ul>

          <h2>主摄表现：可变光圈的魅力</h2>
          <p>华为P70 Pro+的主摄采用5000万像素传感器，尺寸为1/1.3英寸，配合f/1.4-f/4.0可变光圈，这是业界最大的可变光圈之一。</p>
          <p><strong>样张描述</strong>：在光线充足的环境下，主摄拍摄的照片质感出色。建筑物的立体感强，阴影部分层次丰富。开启f/1.4大光圈时，浅景深效果明显，主体突出。</p>
          <p>可变光圈在日常拍摄中非常实用：</p>
          <ul>
            <li>f/1.4：适合暗光环境和创造浅景深</li>
            <li>f/2.0：平衡画质和景深</li>
            <li>f/4.0：适合风景摄影，确保全景深</li>
          </ul>

          <AdPlaceholder slot="article-middle" className="my-8" />

          <h2>超广角镜头：Mate系列同款</h2>
          <p>华为P70 Pro+的超广角镜头升级到4000万像素，是目前规格最高的超广角镜头之一。等效焦距13mm，视野非常宽阔。</p>
          <p><strong>样张描述</strong>：拍摄宏大场景时，超广角展现出极强的透视感。边缘画质相比上代有明显提升，畸变校正自然。</p>

          <h2>长焦镜头：夜视仪般的能力</h2>
          <p>3.5倍潜望式长焦镜头是华为的经典配置，P70 Pro+升级到4800万像素，在暗光环境下的表现更加出色。</p>
          <p><strong>样张描述</strong>：在10倍混合变焦下，拍摄远处的高层建筑，建筑轮廓依然清晰。夜晚开启长焦模式，画面亮度超出预期，噪点控制良好。</p>
          <p>华为的长焦夜景模式是业界领先的，这在P70 Pro+上得到了延续。</p>

          <h2>计算摄影：华为的核心竞争力</h2>
          <p>华为在计算摄影领域深耕多年，P70 Pro+上的算法更加成熟：</p>
          <ul>
            <li><strong>超分算法</strong>：提升数码变焦的可用性</li>
            <li><strong>夜景算法</strong>：多帧合成，智能降噪</li>
            <li><strong>人像算法</strong>：精准的边缘检测和虚化</li>
            <li><strong>运动抓拍</strong>：AI识别运动物体，零延时快门</li>
          </ul>

          <AdPlaceholder slot="article-middle-2" className="my-8" />

          <h2>样张分析：各种场景的表现</h2>
          <h3>白天户外</h3>
          <p><strong>样张描述</strong>：晴天的户外照片色彩准确，动态范围优秀。天空的蓝色过渡自然，没有过度饱和。建筑细节清晰锐利。</p>

          <h3>逆光拍摄</h3>
          <p><strong>样张描述</strong>：面对强光源时，华为的HDR算法表现出色，高光和暗部都有良好的细节保留，没有明显的光晕。</p>

          <h3>人像模式</h3>
          <p><strong>样张描述</strong>：人像模式下，皮肤质感还原自然，美颜效果适度。发丝边缘处理精准，背景虚化有层次感。</p>

          <h3>夜景拍摄</h3>
          <p><strong>样张描述</strong>：夜景模式下，照片细节丰富，高光压制到位。天空纯净，呈现出自然的深蓝色。暗部细节清晰可见。</p>

          <h2>视频拍摄：稳步提升</h2>
          <p>华为P70 Pro+支持4K 60fps视频录制，新增电影模式：</p>
          <ul>
            <li>4K 60fps：日常视频创作足够</li>
            <li>4K 30fps电影模式：支持可变景深效果</li>
            <li>超级防抖：手持拍摄更加稳定</li>
            <li>前后双录：满足多场景拍摄需求</li>
          </ul>
          <p>虽然视频能力相比苹果还有差距，但在安卓阵营已是顶尖水平。</p>

          <h2>购买建议</h2>
          <h3>适合购买华为P70 Pro+的用户</h3>
          <ul>
            <li>华为老用户，期望升级体验</li>
            <li>注重夜景和长焦拍摄效果</li>
            <li>喜欢真实风格的照片</li>
            <li>需要可靠的系统稳定性</li>
          </ul>

          <h3>不适合购买的用户</h3>
          <ul>
            <li>需要Google服务生态的用户</li>
            <li>对5G网络有强需求的用户</li>
            <li>预算有限的用户</li>
          </ul>

          <h2>总结</h2>
          <p>华为P70 Pro+是一款令人印象深刻的影像旗舰。XMAGE 2.0系统配合可变光圈和强大的计算摄影能力，在各种拍摄场景下都能提供出色的表现。</p>
          <p>虽然受到制裁影响，华为无法使用最新的传感器和5G芯片，但在影像方面的创新和投入从未停止。对于热爱摄影的用户来说，华为P70 Pro+仍然是一个值得关注的选择。</p>
          <p>当然，购买前需要考虑Google服务缺失和4G网络的问题。如果您能够接受这些限制，P70 Pro+绝对值得拥有。</p>
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