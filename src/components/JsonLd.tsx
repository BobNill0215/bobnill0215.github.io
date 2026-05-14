export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CamReview 相机评测网',
    url: 'https://bobnill0215.github.io',
    logo: 'https://bobnill0215.github.io/favicon.ico',
    description: '专业相机产品评测网站，提供数码相机、运动相机、手机相机的详细评测报告及选购指南。',
    sameAs: [
      'https://bobnill0215.github.io',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
