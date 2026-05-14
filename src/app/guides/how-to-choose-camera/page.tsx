import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2026年相机选购指南 - 如何选择适合自己的相机',
  description: '新手相机选购指南，详解微单、单反、卡片机的区别，传感器尺寸、对焦系统、视频功能等核心参数，帮助您选择最适合自己的相机。',
  keywords: '相机选购, 新手相机, 微单推荐, 单反推荐, 入门相机, 如何选择相机, 2026相机推荐',
};

export default function HowToChooseCameraPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-green-600 to-teal-600">
        <img loading="lazy" 
          src="https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=1600" 
          alt="相机选购" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-3 inline-block">选购指南</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">2026年相机选购指南</h1>
            <p className="text-lg text-green-100">新手必看：从零了解如何选择适合自己的相机</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="bg-white rounded-xl shadow-sm p-8">
          <div className="mb-6 pb-6 border-b">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded">新手必读</span>
              <span>阅读时间 8 分钟</span>
              <span>最后更新 2026年5月</span>
            </div>
          </div>

          <AdPlaceholder slot="article-top" className="mb-8" />

          <div className="prose max-w-none">
            <h2>前言</h2>
            <p>相机市场产品众多，从几百元的卡片机到数万元的专业旗舰，让人眼花缭乱。本文将帮助您理清思路，了解不同类型相机的特点，掌握核心参数的意义，从而做出最适合自己的选择。</p>

            <h2>第一步：了解相机类型</h2>
            
            <h3>1. 卡片机（紧凑型相机）</h3>
            <p>体积小巧，携带方便，适合日常记录和旅行。</p>
            <ul>
              <li><strong>优点</strong>：轻便、开机快、无需更换镜头</li>
              <li><strong>缺点</strong>：传感器较小，画质有限，镜头不可更换</li>
              <li><strong>适合人群</strong>：旅行爱好者、日常记录、追求便携</li>
              <li><strong>价位</strong>：¥1,000 - ¥5,000</li>
            </ul>

            <h3>2. 微单相机（无反相机）</h3>
            <p>目前最主流的相机类型，兼顾画质与便携。</p>
            <ul>
              <li><strong>优点</strong>：画质优秀、体积相对轻便、镜头可更换、电子取景器</li>
              <li><strong>缺点</strong>：续航通常不如单反、价格较高</li>
              <li><strong>适合人群</strong>：进阶摄影爱好者、Vlogger、内容创作者</li>
              <li><strong>价位</strong>：¥3,000 - ¥30,000+</li>
            </ul>

            <h3>3. 单反相机（数码单反）</h3>
            <p>传统专业相机，拥有人像市场和丰富的镜头群。</p>
            <ul>
              <li><strong>优点</strong>：续航长、镜头群丰富、机械操控感</li>
              <li><strong>缺点</strong>：体积大、重量重、视频功能相对弱</li>
              <li><strong>适合人群</strong>：专业摄影师、追求性价比</li>
              <li><strong>价位</strong>：¥3,000 - ¥50,000+</li>
            </ul>

            <AdPlaceholder slot="article-middle" className="my-8" />

            <h2>第二步：理解核心参数</h2>

            <h3>传感器尺寸</h3>
            <p>传感器是相机的"心脏"，尺寸越大画质越好。</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">类型</th>
                    <th className="text-left py-2">尺寸</th>
                    <th className="text-left py-2">代表机型</th>
                    <th className="text-left py-2">画质</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">全画幅</td>
                    <td className="py-2">36×24mm</td>
                    <td className="py-2">Sony A7 IV、Canon R6 III</td>
                    <td className="py-2">★★★★★</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">APS-C</td>
                    <td className="py-2">23×15mm</td>
                    <td className="py-2">Fuji X-T5、Sony A6700</td>
                    <td className="py-2">★★★★☆</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">M43</td>
                    <td className="py-2">17×13mm</td>
                    <td className="py-2">Olympus OM-5</td>
                    <td className="py-2">★★★☆☆</td>
                  </tr>
                  <tr>
                    <td className="py-2">1英寸</td>
                    <td className="py-2">13×9mm</td>
                    <td className="py-2">Sony ZV-1</td>
                    <td className="py-2">★★☆☆☆</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>像素（Megapixels）</h3>
            <p>像素越高，照片分辨率越大，适合后期裁切和大幅打印。但高像素不等于高画质，传感器尺寸和处理器同样重要。</p>
            <ul>
              <li><strong>2400万像素</strong>：足够日常使用，画质与高感平衡</li>
              <li><strong>3200-4500万像素</strong>：适合风光、商业摄影</li>
              <li><strong>6000万像素+</strong>：专业旗舰机型，如Sony A1、Canon R5 II</li>
            </ul>

            <h3>对焦系统</h3>
            <p>对焦速度直接影响拍摄体验。2026年，AI对焦已成为高端机型标配。</p>
            <ul>
              <li><strong>相位对焦</strong>：速度快，适合抓拍</li>
              <li><strong>对比度对焦</strong>：精度高，但速度慢</li>
              <li><strong>混合对焦</strong>：结合两者优点，主流配置</li>
              <li><strong>AI对焦</strong>：可识别人眼、动物、鸟类、车辆等主体</li>
            </ul>

            <AdPlaceholder slot="article-middle-2" className="my-8" />

            <h3>视频功能</h3>
            <p>如果您有视频创作需求，关注以下参数：</p>
            <ul>
              <li><strong>4K/60fps</strong>：流畅画面，入门标准</li>
              <li><strong>4K/120fps</strong>：慢动作拍摄，高端配置</li>
              <li><strong>8K视频</strong>：专业级规格，部分旗舰支持</li>
              <li><strong>Log曲线</strong>：便于后期调色，如S-Log、HLG</li>
            </ul>

            <h3>防抖系统</h3>
            <ul>
              <li><strong>光学防抖（OIS）</strong>：镜头或传感器位移</li>
              <li><strong>电子防抖（EIS）</strong>：裁切画面实现，损失视角</li>
              <li><strong>机身防抖</strong>：高端机型配置，可达7-8档补偿</li>
            </ul>

            <h2>第三步：按预算推荐</h2>

            <div className="bg-blue-50 rounded-xl p-6 my-6">
              <h3 className="font-bold text-lg mb-4">💰 ¥3000-¥6000 入门推荐</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold">Sony ZV-E10 II</h4>
                  <p className="text-sm text-gray-600">APS-C画幅，专门为Vlog设计，侧翻屏、优秀对焦</p>
                  <p className="text-sm font-medium text-blue-600">约 ¥5,000</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold">Canon EOS R50</h4>
                  <p className="text-sm text-gray-600">入门级微单，简易操作，适合新手</p>
                  <p className="text-sm font-medium text-blue-600">约 ¥4,500</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 my-6">
              <h3 className="font-bold text-lg mb-4">💰 ¥8000-¥15000 中端推荐</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold">Fujifilm X-T5</h4>
                  <p className="text-sm text-gray-600">4000万像素，经典复古设计，优秀色彩科学</p>
                  <p className="text-sm font-medium text-blue-600">约 ¥12,000</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold">Sony A7C II</h4>
                  <p className="text-sm text-gray-600">全画幅紧凑设计，AI对焦，适合旅行</p>
                  <p className="text-sm font-medium text-blue-600">约 ¥14,000</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 my-6">
              <h3 className="font-bold text-lg mb-4">💰 ¥20000+ 专业推荐</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold">Sony A7 V</h4>
                  <p className="text-sm text-gray-600">3300万像素，顶级AI对焦，专业视频能力</p>
                  <p className="text-sm font-medium text-blue-600">约 ¥22,000</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold">Canon EOS R6 III</h4>
                  <p className="text-sm text-gray-600">部分堆叠传感器，顶级连拍和视频</p>
                  <p className="text-sm font-medium text-blue-600">约 ¥25,000</p>
                </div>
              </div>
            </div>

            <h2>第四步：常见问题</h2>

            <h3>Q: 手机拍照已经很强了，还需要买相机吗？</h3>
            <p>手机算法强大，日常记录足够。但相机在光学虚化、高感画质、长焦能力、后期空间等方面仍有明显优势。如果您追求更高画质或专业创作，相机仍是必要选择。</p>

            <h3>Q: 微单和单反哪个好？</h3>
            <p>目前微单是市场主流，体积更轻、功能更先进。新购机建议选择微单系统。买单反主要是考虑二手镜头价格实惠。</p>

            <h3>Q: 全画幅和APS-C画幅如何选择？</h3>
            <p>全画幅画质更好、虚化更强，但机身和镜头更贵。APS-C性价比较高，镜头焦段有1.5倍优势，适合旅行和日常使用。</p>

            <h3>Q: 买相机需要一次配齐镜头吗？</h3>
            <p>建议先买一支标准变焦镜头（如24-70mm或18-55mm），熟悉后再根据需求添置长焦、广角或定焦镜头。</p>

            <h2>总结</h2>
            <p>选择相机没有标准答案，关键在于了解自己的需求和预算。建议到实体店实际体验后再做决定。记住：最好的相机是您愿意带出去的那一台。</p>
            <p>如果您想了解具体机型的对比，可以查看我们的相机数据库或对比工具。</p>

            <div className="mt-8 flex gap-4">
              <Link href="/camera-database" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
                查看相机数据库 →
              </Link>
              <Link href="/camera-compare" className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200">
                使用对比工具 →
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
