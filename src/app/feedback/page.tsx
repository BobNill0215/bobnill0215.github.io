'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Breadcrumb from '@/components/Breadcrumb';
import { MessageSquare, ExternalLink, Bug, Lightbulb, HelpCircle, Mail } from 'lucide-react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScjyHa2VgyamhnrPdeaz7WA5CZmg-2_aDMwwoF3ZNMguFB-FA/viewform?usp=pp_url';

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8" />
            </div>
            <Breadcrumb items={[{ label: '反馈中心' }]} />
            <h1 className="text-3xl md:text-4xl font-bold mb-2">反馈中心</h1>
            <p className="text-lg text-blue-100">帮助我们改进，为您提供更好的服务</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-12 h-12 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">提交反馈</h2>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                我们使用 Google 表单收集反馈。您的反馈会直接发送到我们的邮箱，我们会在1-3个工作日内处理。
              </p>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                <ExternalLink className="w-5 h-5" />
                打开反馈表单
              </a>

              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="font-medium text-gray-900 mb-4">表单包含以下内容：</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <Bug className="w-6 h-6 text-red-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">问题反馈</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <Lightbulb className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">功能建议</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <HelpCircle className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">其他咨询</p>
                  </div>
                </div>
              </div>
            </div>

            <AdPlaceholder slot="article-bottom" className="mt-8" />
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-sm p-6 text-white">
              <h3 className="font-bold mb-3">其他联系方式</h3>
              <p className="text-sm text-blue-100 mb-4">
                如果表单无法使用，您也可以通过以下方式联系我们：
              </p>
              <a 
                href="mailto:bobnill@163.com" 
                className="flex items-center gap-3 bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>bobnill@163.com</span>
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-3">常见问题</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <p className="font-medium text-gray-900">反馈多久能得到回复？</p>
                  <p>一般问题1-3个工作日处理，紧急问题会优先处理。</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">我的反馈会被公开吗？</p>
                  <p>不会。您的反馈仅用于改善网站，不会公开。</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">如何知道问题被修复了？</p>
                  <p>留下邮箱后，我们会通过邮件通知您。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
