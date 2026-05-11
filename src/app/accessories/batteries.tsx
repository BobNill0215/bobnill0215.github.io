import { Metadata } from 'next';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
  title: '原厂vs副厂电池对比 - 相机电池选购完全指南',
  description: '原厂电池与副厂电池全面对比分析，从容量、寿命、安全性、价格等维度为您解答相机电池该如何选择。',
  keywords: '相机电池, 原厂电池, 副厂电池, 电池对比, 摄影配件',
};

export default function BatteriesPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">原厂vs副厂电池对比</h1>
        <div className="text-gray-600">
          <time>2024-02-15</time>
          <span className="mx-2">•</span>
          <span>阅读时长：7分钟</span>
        </div>
      </header>

      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          相机电池是摄影师的必需品，但原厂电池价格高昂，副厂电池质量参差不齐。本文将深入对比分析，帮助您做出明智选择。
        </p>

        <AdPlaceholder className="my-8" />

        <h2>原厂vs副厂电池对比表</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">对比项目</th>
                <th className="border border-gray-300 px-4 py-2">原厂电池</th>
                <th className="border border-gray-300 px-4 py-2">副厂电池</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">价格</td>
                <td className="border border-gray-300 px-4 py-2">¥400-800</td>
                <td className="border border-gray-300 px-4 py-2">¥80-200</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">标称容量</td>
                <td className="border border-gray-300 px-4 py-2">真实标注</td>
                <td className="border border-gray-300 px-4 py-2">虚标较普遍</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">实际续航</td>
                <td className="border border-gray-300 px-4 py-2">与标称一致</td>
                <td className="border border-gray-300 px-4 py-2">约为原厂70-90%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">循环寿命</td>
                <td className="border border-gray-300 px-4 py-2">500-800次</td>
                <td className="border border-gray-300 px-4 py-2">200-500次</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">安全性</td>
                <td className="border border-gray-300 px-4 py-2">过充/过放保护完善</td>
                <td className="border border-gray-300 px-4 py-2">质量参差不齐</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">兼容性</td>
                <td className="border border-gray-300 px-4 py-2">100%兼容</td>
                <td className="border border-gray-300 px-4 py-2">可能报错或无法充电</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">保修服务</td>
                <td className="border border-gray-300 px-4 py-2">官方保修</td>
                <td className="border border-gray-300 px-4 py-2">店铺保修</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">虚电风险</td>
                <td className="border border-gray-300 px-4 py-2">极低</td>
                <td className="border border-gray-300 px-4 py-2">存在</td>
              </tr>
            </tbody>
          </table>
        </div>

        <AdPlaceholder className="my-8" />

        <h2>热门品牌副厂电池对比</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">品牌</th>
                <th className="border border-gray-300 px-4 py-2">代表型号</th>
                <th className="border border-gray-300 px-4 py-2">价格</th>
                <th className="border border-gray-300 px-4 py-2">续航表现</th>
                <th className="border border-gray-300 px-4 py-2">兼容性</th>
                <th className="border border-gray-300 px-4 py-2">推荐度</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">绿联</td>
                <td className="border border-gray-300 px-4 py-2">NP-FZ100</td>
                <td className="border border-gray-300 px-4 py-2">¥158/颗</td>
                <td className="border border-gray-300 px-4 py-2">原厂85%</td>
                <td className="border border-gray-300 px-4 py-2">★★★★</td>
                <td className="border border-gray-300 px-4 py-2">★★★★</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">绿巨能</td>
                <td className="border border-gray-300 px-4 py-2">LP-E6NH</td>
                <td className="border border-gray-300 px-4 py-2">¥138/颗</td>
                <td className="border border-gray-300 px-4 py-2">原厂80%</td>
                <td className="border border-gray-300 px-4 py-2">★★★★</td>
                <td className="border border-gray-300 px-4 py-2">★★★★</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">品胜</td>
                <td className="border border-gray-300 px-4 py-2">LP-E8</td>
                <td className="border border-gray-300 px-4 py-2">¥89/颗</td>
                <td className="border border-gray-300 px-4 py-2">原厂75%</td>
                <td className="border border-gray-300 px-4 py-2">★★★</td>
                <td className="border border-gray-300 px-4 py-2">★★★</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">JJC</td>
                <td className="border border-gray-300 px-4 py-2">EN-EL15</td>
                <td className="border border-gray-300 px-4 py-2">¥120/颗</td>
                <td className="border border-gray-300 px-4 py-2">原厂90%</td>
                <td className="border border-gray-300 px-4 py-2">★★★★★</td>
                <td className="border border-gray-300 px-4 py-2">★★★★★</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">沣标</td>
                <td className="border border-gray-300 px-4 py-2">BP-51</td>
                <td className="border border-gray-300 px-4 py-2">¥180/颗</td>
                <td className="border border-gray-300 px-4 py-2">原厂88%</td>
                <td className="border border-gray-300 px-4 py-2">★★★★</td>
                <td className="border border-gray-300 px-4 py-2">★★★★</td>
              </tr>
            </tbody>
          </table>
        </div>

        <AdPlaceholder className="my-8" />

        <h2>如何识别优质副厂电池</h2>

        <h3>1. 选择大品牌</h3>
        <p>
          绿联、绿巨能、JJC、沣标等都是经过市场验证的可靠品牌。避免购买无名品牌或来路不明的超低价电池。
        </p>

        <h3>2. 查看用户评价</h3>
        <p>
          在购买前查看电商平台的用户评价，重点关注：是否出现相机报错、续航是否达标、使用一段时间后是否鼓包等。
        </p>

        <h3>3. 检查外观做工</h3>
        <p>
          优质电池外壳光滑、标签印刷清晰、触点无明显划痕。劣质电池往往做工粗糙，标签容易脱落。
        </p>

        <h3>4. 注意容量标注</h3>
        <p>
          如果某款副厂电池标注容量比原厂还高，那很可能是虚标。正规副厂电池容量通常为原厂的80-90%。
        </p>

        <h2>使用与保养建议</h2>

        <h3>充电注意事项</h3>
        <ul>
          <li>首次使用建议充满电激活</li>
          <li>避免过度放电，电量低于20%时及时充电</li>
          <li>使用原装充电器或品牌充电器</li>
          <li>充电时注意散热，不要覆盖电池</li>
        </ul>

        <h3>存放建议</h3>
        <ul>
          <li>长期不使用时，保持50%左右电量存放</li>
          <li>避免高温、潮湿环境</li>
          <li>不要与金属物品接触存放</li>
          <li>每3个月进行一次充放电循环</li>
        </ul>

        <AdPlaceholder className="my-8" />

        <h2>选购建议</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">使用场景</th>
                <th className="border border-gray-300 px-4 py-2">推荐方案</th>
                <th className="border border-gray-300 px-4 py-2">理由</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">专业摄影/商业拍摄</td>
                <td className="border border-gray-300 px-4 py-2">原厂电池+2-3块副厂</td>
                <td className="border border-gray-300 px-4 py-2">可靠性第一，副厂作为备用</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">日常爱好者</td>
                <td className="border border-gray-300 px-4 py-2">1原厂+2副厂</td>
                <td className="border border-gray-300 px-4 py-2">性价比与可靠性平衡</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">旅行/户外</td>
                <td className="border border-gray-300 px-4 py-2">原厂1块+副厂3块</td>
                <td className="border border-gray-300 px-4 py-2">需要多块电池，副厂成本更低</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">备用应急</td>
                <td className="border border-gray-300 px-4 py-2">纯副厂</td>
                <td className="border border-gray-300 px-4 py-2">价格优先，作为补充电池</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>总结</h2>
        <p>
          原厂电池在可靠性和兼容性方面有明显优势，适合专业用户；副厂电池在价格方面有优势，优质副厂电池性价比突出，适合普通用户。
        </p>
        <p>
          建议采用"1原厂+N副厂"的组合策略：原厂电池作为主力，副厂电池作为备用和补充。这样既能保证可靠性，又能控制成本。
        </p>

        <AdPlaceholder className="my-8" />
      </div>
    </article>
  );
}