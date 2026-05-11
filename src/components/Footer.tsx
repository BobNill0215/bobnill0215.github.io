import Link from 'next/link';

const footerLinks = {
  products: [
    { name: '数码相机评测', href: '/cameras' },
    { name: '手机相机对比', href: '/smartphone-cameras' },
    { name: '运动相机', href: '/action-cameras' },
    { name: '监控相机', href: '/security-cameras' },
    { name: '配件推荐', href: '/accessories' },
  ],
  resources: [
    { name: '相机选购指南', href: '/guides' },
    { name: '镜头知识', href: '/lens-guide' },
    { name: '摄影技巧', href: '/tips' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-white mb-4">相机评测网</h3>
            <p className="text-sm text-gray-400 mb-4">
              专业相机产品评测网站，为您提供最权威的数码相机、运动相机、手机相机和监控相机的详细评测报告。
            </p>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} 相机评测网. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              产品分类
            </h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              资源中心
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}