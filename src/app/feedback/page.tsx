'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import { MessageSquare, Send, CheckCircle, AlertCircle, Bug, Lightbulb, HelpCircle, Mail } from 'lucide-react';

type FeedbackType = 'bug' | 'feature' | 'other';
type FeedbackPriority = 'low' | 'medium' | 'high';

export default function FeedbackPage() {
  const [type, setType] = useState<FeedbackType>('bug');
  const [priority, setPriority] = useState<FeedbackPriority>('medium');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError('请填写问题标题');
      return;
    }
    if (!description.trim()) {
      setError('请详细描述您的问题或建议');
      return;
    }

    setIsSubmitting(true);
    setError('');

    const feedbackData = {
      type,
      priority,
      title,
      description,
      email: email || '未提供',
      timestamp: new Date().toISOString(),
    };

    try {
      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });
      setIsSubmitted(true);
    } catch {
      setError('提交失败，请稍后重试或发送邮件至 bobnill@163.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const feedbackTypes = [
    { value: 'bug' as FeedbackType, label: '问题反馈', icon: Bug, color: 'red' },
    { value: 'feature' as FeedbackType, label: '功能建议', icon: Lightbulb, color: 'green' },
    { value: 'other' as FeedbackType, label: '其他咨询', icon: HelpCircle, color: 'blue' },
  ];

  const priorities = [
    { value: 'low' as FeedbackPriority, label: '低 - 不紧急', color: 'gray' },
    { value: 'medium' as FeedbackPriority, label: '中 - 一般', color: 'yellow' },
    { value: 'high' as FeedbackPriority, label: '紧急 - 影响使用', color: 'red' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">反馈中心</h1>
            <p className="text-lg text-blue-100">帮助我们改进，为您提供更好的服务</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">感谢您的反馈！</h2>
                  <p className="text-gray-600 mb-6">我们已收到您的反馈，会尽快评估处理。</p>
                  <p className="text-sm text-gray-500">如果没有留下邮箱，我们可能无法单独回复您，但您的每一条反馈都会被认真考虑。</p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">提交反馈</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        反馈类型 *
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {feedbackTypes.map((item) => (
                          <button
                            key={item.value}
                            type="button"
                            onClick={() => setType(item.value)}
                            className={`py-4 px-4 rounded-xl text-center transition-all ${
                              type === item.value
                                ? item.color === 'red' ? 'bg-red-600 text-white shadow-lg' :
                                  item.color === 'green' ? 'bg-green-600 text-white shadow-lg' :
                                  'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            <item.icon className="w-6 h-6 mx-auto mb-2" />
                            <span className="text-sm font-medium">{item.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        问题等级
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {priorities.map((item) => (
                          <button
                            key={item.value}
                            type="button"
                            onClick={() => setPriority(item.value)}
                            className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                              priority === item.value
                                ? item.color === 'red' ? 'bg-red-100 text-red-700 ring-2 ring-red-300' :
                                  item.color === 'yellow' ? 'bg-yellow-100 text-yellow-700 ring-2 ring-yellow-300' :
                                  'bg-gray-200 text-gray-700 ring-2 ring-gray-300'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        问题标题 *
                      </label>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="简要描述您的问题或建议"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        详细描述 *
                      </label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="请详细描述：
• 遇到的问题或期望的功能
• 具体操作步骤（如果是Bug）
• 您的设备/浏览器信息"
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        您的邮箱（选填）
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="方便我们联系您（选填）"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      />
                      <p className="text-xs text-gray-500 mt-1">提供邮箱后，我们处理您的反馈时会通知您</p>
                    </div>

                    {error && (
                      <div className="flex items-center gap-3 text-red-600 text-sm bg-red-50 p-4 rounded-lg">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          提交中...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          提交反馈
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

            <AdPlaceholder slot="article-bottom" className="mt-8" />
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">反馈类型说明</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bug className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">问题反馈</h4>
                    <p className="text-sm text-gray-500">网站功能异常、内容错误等问题</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">功能建议</h4>
                    <p className="text-sm text-gray-500">新功能、改进建议等</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">其他咨询</h4>
                    <p className="text-sm text-gray-500">其他问题或合作咨询</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-sm p-6 text-white">
              <h3 className="font-bold mb-3">其他联系方式</h3>
              <p className="text-sm text-blue-100 mb-4">
                如果表单提交失败，您也可以通过以下方式联系我们：
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
