import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '微单相机 vs 单反相机 哪个好？2026年全面对比',
  description: '微单和单反的区别是什么？选哪个更好？本文详细对比微单相机和单反相机的优缺点，帮您做出选择。包括体积、画质、对焦、视频、续航、价格等全方位对比。',
  keywords: '微单和单反的区别, 微单推荐, 单反推荐, 无反相机, 微单相机, 单反相机, 相机选购',
};

export default function MirrorlessVsDSLRPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-purple-600 to-indigo-600">
        <img loading="lazy" 
          src="https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=1600" 
          alt="微单vs单反" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-3 inline-block">对比评测</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">微单 vs 单反：哪个更适合您？</h1>
            <p className="text-lg text-purple-100">2026年选购指南：全面对比两大相机类型</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="bg-white rounded-xl shadow-sm p-8">
          <div className="mb-6 pb-6 border-b">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded">对比评测</span>
              <span>阅读时间 6 分钟</span>
              <span>最后更新 2026年5月</span>
            </div>
          </div>

          <AdPlaceholder slot="article-top" className="mb-8" />

          <div className="prose max-w-none">
            <h2>前言</h2>
            <p>关于"微单和单反哪个好"的争论从未停止。2026年，微单（无反相机）已经成为市场主流，佳能、尼康、索尼等厂商都把研发重点放在微单系统上。本文将从多个维度全面对比这两种相机类型，帮助您做出明智的选择。</p>

            <h2>什么是微单？什么是单反？</h2>
            
            <h3>单反相机（DSLR）</h3>
            <p>单镜头反光式取景相机，通过反光板和五棱镜将光线反射到光学取景器。您看到的画面是直接从镜头传来的真实场景。</p>

            <h3>微单相机（无反/Mirrorless）</h3>
            <p>无反光镜可换镜头相机，没有反光板结构，光线直接传递到图像传感器，通过电子取景器（EVF）或屏幕显示画面。</p>

            <AdPlaceholder slot="article-middle" className="my-8" />

            <h2>全方位对比</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3">对比项</th>
                    <th className="text-left p-3">微单相机</th>
                    <th className="text-left p-3">单反相机</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">体积重量</td>
                    <td className="p-3 text-green-600">✓ 更轻便</td>
                    <td className="p-3">较重较大</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">对焦速度</td>
                    <td className="p-3 text-green-600">✓ AI对焦领先</td>
                    <td className="p-3">相位对焦成熟稳定</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">连拍速度</td>
                    <td className="p-3 text-green-600">✓ 电子快门更快</td>
                    <td className="p-3">机械快门可靠</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">视频功能</td>
                    <td className="p-3 text-green-600">✓ 原生优势明显</td>
                    <td className="p-3">相对较弱</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">续航能力</td>
                    <td className="p-3">相对较短</td>
                    <td className="p-3 text-green-600">✓ 光学取景省电</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">镜头群丰富度</td>
                    <td className="p-3">持续发展中</td>
                    <td className="p-3 text-green-600">✓ 二手市场丰富</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">机身价格</td>
                    <td className="p-3">中高端性价比高</td>
                    <td className="p-3 text-green-600">✓ 入门级便宜</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">可靠性</td>
                    <td className="p-3">技术成熟</td>
                    <td className="p-3 text-green-600">✓ 机械结构耐用</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>微单相机的优势</h2>

            <h3>1. 体积小巧，携带方便</h3>
            <p>没有反光板和五棱镜，微单可以做得更小更轻。例如Sony A7C II机身重量仅514克，而同规格单反普遍在700克以上。这对于旅行摄影和日常携带来说非常重要。</p>

            <h3>2. 对焦性能领先</h3>
            <p>微单的对焦系统直接作用于传感器，可以实现：</p>
            <ul>
              <li>面部和眼部追踪对焦</li>
              <li>AI主体识别（人、动物、鸟类、车辆）</li>
              <li>全域对焦点覆盖</li>
              <li>视频拍摄时的平滑对焦</li>
            </ul>

            <h3>3. 视频能力强大</h3>
            <p>微单在视频方面具有天然优势：</p>
            <ul>
              <li>无反光板结构，录制视频时无噪音</li>
              <li>相位对焦在视频中表现更稳定</li>
              <li>机身防抖通常更出色</li>
              <li>支持更高规格的视频格式</li>
            </ul>

            <h3>4. 实时预览所见即所得</h3>
            <p>电子取景器可以实时显示曝光、白平衡、景深等效果，拍摄前就能看到最终效果，减少废片率。</p>

            <AdPlaceholder slot="article-middle-2" className="my-8" />

            <h2>单反相机的优势</h2>

            <h3>1. 续航能力</h3>
            <p>单反使用光学取景器时几乎不耗电，一块电池可以拍摄1000-2000张照片，而微单通常在300-600张左右。对于长时间外出拍摄，单反的续航优势明显。</p>

            <h3>2. 镜头生态成熟</h3>
            <p>单反系统发展了几十年，二手镜头市场非常丰富：</p>
            <ul>
              <li>副厂镜头选择多，价格便宜</li>
              <li>老镜头性价比高</li>
              <li>相同焦段，单反镜头比微单便宜</li>
            </ul>

            <h3>3. 机械可靠性</h3>
            <p>单反的机械快门寿命长，在极端环境下（如高温、磁场）表现更稳定。部分专业摄影师仍偏好单反的操控手感。</p>

            <h3>4. 入门成本低</h3>
            <p>入门级单反机身价格已经很低，搭配套机镜头性价比极高，适合预算有限的新手。</p>

            <h2>2026年市场现状</h2>

            <div className="bg-blue-50 rounded-xl p-6 my-6">
              <h3 className="font-bold text-lg mb-4">📊 市场趋势</h3>
              <ul className="space-y-2">
                <li>• <strong>佳能</strong>：已停止开发新的单反镜头，专注RF卡口微单</li>
                <li>• <strong>尼康</strong>：Z卡口微单成为主力，D系列单反逐步停产</li>
                <li>• <strong>索尼</strong>：A卡口单反已边缘化，全面转向E卡口微单</li>
                <li>• <strong>宾得</strong>：仍在坚持单反，但市场份额很小</li>
              </ul>
            </div>

            <h2>如何选择？</h2>

            <h3>选择微单如果您：</h3>
            <ul>
              <li>主要拍摄视频或Vlog</li>
              <li>追求轻便，想要随身携带</li>
              <li>喜欢新功能和AI对焦</li>
              <li>购买新镜头（微单系统）</li>
              <li>追求最新技术</li>
            </ul>

            <h3>选择单反如果您：</h3>
            <ul>
              <li>预算有限，追求性价比</li>
              <li>喜欢光学取景器的体验</li>
              <li>有大量二手单反镜头可用</li>
              <li>需要长续航拍摄</li>
              <li>追求机械可靠性</li>
            </ul>

            <AdPlaceholder slot="article-middle-3" className="my-8" />

            <h2>2026年推荐机型</h2>

            <h3>入门微单推荐</h3>
            <ul>
              <li><strong>Canon EOS R50</strong> - 简单易用，适合新手</li>
              <li><strong>Sony ZV-E10 II</strong> - Vlog神器，侧翻屏</li>
              <li><strong>Nikon Z30</strong> - 轻便小巧，续航不错</li>
            </ul>

            <h3>入门单反推荐</h3>
            <ul>
              <li><strong>Canon EOS 200D II</strong> - 最小单反，操作友好</li>
              <li><strong>Nikon D5600</strong> - 性价比高，操控专业</li>
            </ul>

            <h3>进阶微单推荐</h3>
            <ul>
              <li><strong>Sony A7C II</strong> - 全画幅便携标杆</li>
              <li><strong>Fujifilm X-T5</strong> - 复古设计，画质出色</li>
              <li><strong>Canon EOS R6 III</strong> - 专业级视频能力</li>
            </ul>

            <h2>总结</h2>
            <p>2026年，微单已经是绝对的主流选择。新购机用户建议直接选择微单系统，享受更先进的技术和更好的未来兼容性。</p>
            <p>选择单反主要适合预算有限或已有大量单反镜头的用户。在二手市场上，单反系统的性价比仍然很高。</p>
            <p>记住：相机只是工具，最重要的是拿起相机去拍摄。</p>

            <div className="mt-8 flex gap-4">
              <Link href="/guides/how-to-choose-camera" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
                查看选购指南 →
              </Link>
              <Link href="/camera-database" className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200">
                浏览相机数据库 →
              </Link>
            </div>
          </div>

          <AdPlaceholder slot="article-bottom" className="mt-8" />

          <div className="mt-8 bg-gray-100 rounded-lg p-6">
            <h3 className="font-bold mb-2">免责声明</h3>
            <p className="text-sm text-gray-600">本文包含的购买链接为联盟链接，我们可能会从中获得少量佣金，这不会影响您的购买价格。这是支持我们继续提供免费评测内容的方式之一，感谢您的理解。</p>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
}
