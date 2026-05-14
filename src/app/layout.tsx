import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import FeedbackModal from "@/components/FeedbackModal";
import JsonLd from "@/components/JsonLd";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bobnill0215.github.io"),
  title: {
    default: "CamReview - 专业相机产品评测平台 | 2026年最新相机评测",
    template: "%s | CamReview 相机评测网",
  },
  description: "专业相机评测网站，提供2026年最新数码相机、运动相机、手机相机和监控摄像头的详细评测报告、参数对比及选购指南，涵盖Canon R6 V、索尼 A7V、DJI Avata 360等热门机型。",
  keywords: [
    "相机评测",
    "数码相机",
    "微单相机",
    "运动相机",
    "手机相机",
    "Canon R6 V",
    "索尼 A7V",
    "尼康 Z6 III",
    "DJI Avata 360",
    "GoPro",
    "Insta360",
    "2026年相机推荐",
    "相机对比",
    "相机数据库",
    "摄像机评测",
  ],
  authors: [{ name: "CamReview", url: "https://bobnill0215.github.io" }],
  creator: "CamReview",
  publisher: "CamReview",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bobnill0215.github.io",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://bobnill0215.github.io",
    siteName: "CamReview 相机评测网",
    title: "CamReview - 专业相机产品评测平台 | 2026年最新相机评测",
    description: "专业相机评测网站，提供2026年最新数码相机、运动相机、手机相机和监控摄像头的详细评测报告及选购指南。",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200",
        width: 1200,
        height: 630,
        alt: "CamReview 相机评测网",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CamReview - 专业相机产品评测平台",
    description: "专业相机评测网站，提供2026年最新数码相机、运动相机、手机相机的详细评测报告及选购指南。",
    images: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200"],
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="google-adsense-account" content="ca-pub-6406389310465549" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CamReview" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6406389310465549"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XXXXXXXXXX');`}
        </Script>
        {children}
        <FeedbackModal />
      </body>
    </html>
  );
}