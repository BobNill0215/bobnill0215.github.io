import { Metadata } from 'next';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
  title: '萤石vs小米vs360智能监控对比 - 三大品牌家用摄像头深度对比',
  description: '萤石、小米、360三大品牌家用智能摄像头全面对比，从画质、功能、价格、生态等维度为您分析哪个品牌最值得购买。',
  keywords: '萤石摄像头, 小米摄像头, 360摄像头, 智能监控对比, 家用摄像头品牌',
};

export default function BrandsComparisonPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">萤石vs小米vs360智能监控对比</h1>
        <div className="text-gray-600">
          <time>2024-02-20</time>
          <span className="mx-2">•</span>
          <span>阅读时长：10分钟</span>
        </div>
      </header>

      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          家用智能摄像头市场三足鼎立，萤石、小米、360三大品牌各具特色。本文将从多个维度进行深度对比，助您做出明智选择。
        </p>

        <AdPlaceholder className="my-8" />

        <h2>品牌概述</h2>
        
        <h3>萤石（Ezviz）</h3>
        <p>
          海康威视旗下品牌，专业安防背景，画质和稳定性出色。定位中高端市场，产品线丰富。
        </p>

        <h3>小米（Xiaomi）</h3>
        <p>
          依托米家智能生态，产品性价比高，易用性强。适合已使用小米智能家居的用户。
        </p>

        <h3>360</h3>
        <p>
          安全领域老牌厂商，算法技术积累深厚。产品功能丰富，价格亲民，用户群体广泛。
        </p>

        <AdPlaceholder className="my-8" />

        <h2>产品参数对比表</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">对比项目</th>
                <th className="border border-gray-300 px-4 py-2">萤石 C6CN</th>
                <th className="border border-gray-300 px-4 py-2">小米 云台2K</th>
                <th className="border border-gray-300 px-4 py-2">360 7C</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">分辨率</td>
                <td className="border border-gray-300 px-4 py-2">1080P</td>
                <td className="border border-gray-300 px-4 py-2">2K</td>
                <td className="border border-gray-300 px-4 py-2">2K</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">夜视距离</td>
                <td className="border border-gray-300 px-4 py-2">10米</td>
                <td className="border border-gray-300 px-4 py-2">8米</td>
                <td className="border border-gray-300 px-4 py-2">10米</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">云台角度</td>
                <td className="border border-gray-300 px-4 py-2">340°水平</td>
                <td className="border border-gray-300 px-4 py-2">360°水平</td>
                <td className="border border-gray-300 px-4 py-2">360°水平</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">AI功能</td>
                <td className="border border-gray-300 px-4 py-2">人形检测</td>
                <td className="border border-gray-300 px-4 py-2">人形/人脸检测</td>
                <td className="border border-gray-300 px-4 py-2">人形/宠物检测</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">存储方式</td>
                <td className="border border-gray-300 px-4 py-2">云存+内存卡</td>
                <td className="border border-gray-300 px-4 py-2">云存+内存卡</td>
                <td className="border border-gray-300 px-4 py-2">云存+内存卡</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">生态兼容</td>
                <td className="border border-gray-300 px-4 py-2">独立APP</td>
                <td className="border border-gray-300 px-4 py-2">米家</td>
                <td className="border border-gray-300 px-4 py-2">360APP</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">价格</td>
                <td className="border border-gray-300 px-4 py-2">¥299</td>
                <td className="border border-gray-300 px-4 py-2">¥199</td>
                <td className="border border-gray-300 px-4 py-2">¥229</td>
              </tr>
            </tbody>
          </table>
        </div>

        <AdPlaceholder className="my-8" />

        <h2>画质对比</h2>
        <p>
          在画质方面，三款产品各有优势。萤石得益于专业安防背景，在低光环境下表现更稳定；小米和360虽然分辨率更高，但暗光下噪点稍多。实际使用中，白天画质三者差异不大，夜间萤石略胜一筹。
        </p>

        <h2>AI智能功能对比</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">功能</th>
                <th className="border border-gray-300 px-4 py-2">萤石</th>
                <th className="border border-gray-300 px-4 py-2">小米</th>
                <th className="border border-gray-300 px-4 py-2">360</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">人形检测</td>
                <td className="border border-gray-300 px-4 py-2">✓</td>
                <td className="border border-gray-300 px-4 py-2">✓</td>
                <td className="border border-gray-300 px-4 py-2">✓</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">人脸识别</td>
                <td className="border border-gray-300 px-4 py-2">✓</td>
                <td className="border border-gray-300 px-4 py-2">✓</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">哭声检测</td>
                <td className="border border-gray-300 px-4 py-2">✓</td>
                <td className="border border-gray-300 px-4 py-2">✓</td>
                <td className="border border-gray-300 px-4 py-2">✓</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">宠物检测</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">✓</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">移动追踪</td>
                <td className="border border-gray-300 px-4 py-2">✓</td>
                <td className="border border-gray-300 px-4 py-2">✓</td>
                <td className="border border-gray-300 px-4 py-2">✓</td>
              </tr>
            </tbody>
          </table>
        </div>

        <AdPlaceholder className="my-8" />

        <h2>云存储价格对比</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">套餐类型</th>
                <th className="border border-gray-300 px-4 py-2">萤石</th>
                <th className="border border-gray-300 px-4 py-2">小米</th>
                <th className="border border-gray-300 px-4 py-2">360</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">7天循环</td>
                <td className="border border-gray-300 px-4 py-2">¥9.9/月</td>
                <td className="border border-gray-300 px-4 py-2">¥7.9/月</td>
                <td className="border border-gray-300 px-4 py-2">¥6.9/月</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">30天循环</td>
                <td className="border border-gray-300 px-4 py-2">¥26.9/月</td>
                <td className="border border-gray-300 px-4 py-2">¥19.9/月</td>
                <td className="border border-gray-300 px-4 py-2">¥16.9/月</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>选购建议</h2>
        
        <h3>选择萤石如果您：</h3>
        <ul>
          <li>注重画质和稳定性</li>
          <li>已有萤石或海康威视设备</li>
          <li>愿意为专业安防买单</li>
        </ul>

        <h3>选择小米如果您：</h3>
        <ul>
          <li>已使用米家智能家居</li>
          <li>追求性价比</li>
          <li>喜欢简洁的操作界面</li>
        </ul>

        <h3>选择360如果您：</h3>
        <ul>
          <li>需要丰富的AI功能</li>
          <li>有宠物需要监控</li>
          <li>预算有限但想要功能全面</li>
        </ul>

        <AdPlaceholder className="my-8" />

        <h2>总结</h2>
        <p>
          三大品牌各有特色：萤石专业稳定、小米生态完整、360功能丰富。最终选择应基于您的实际需求、设备生态和预算。无论选择哪个品牌，都能获得可靠的家用监控体验。
        </p>
      </div>
    </article>
  );
}