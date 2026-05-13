'use client';

import { useState, useEffect } from 'react';
import { MessageSquare, X, Send, CheckCircle, AlertCircle } from 'lucide-react';

type FeedbackType = 'bug' | 'feature' | 'other';
type FeedbackPriority = 'low' | 'medium' | 'high';

export default function FeedbackModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<FeedbackType>('bug');
  const [priority, setPriority] = useState<FeedbackPriority>('medium');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    const handleOpenFeedback = () => {
      setIsOpen(true);
    };
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('openFeedback', handleOpenFeedback);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('openFeedback', handleOpenFeedback);
    };
  }, []);

  const resetForm = () => {
    setType('bug');
    setPriority('medium');
    setTitle('');
    setDescription('');
    setEmail('');
    setError('');
    setIsSubmitted(false);
  };

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
      url: typeof window !== 'undefined' ? window.location.href : 'unknown',
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
      setTimeout(() => {
        setIsOpen(false);
        resetForm();
      }, 2000);
    } catch {
      setError('提交失败，请稍后重试或发送邮件至 feedback@camreview.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTypeLabel = (t: FeedbackType) => {
    switch (t) {
      case 'bug': return '问题反馈';
      case 'feature': return '功能建议';
      case 'other': return '其他';
    }
  };

  const getPriorityColor = (p: FeedbackPriority) => {
    switch (p) {
      case 'low': return 'bg-gray-100 text-gray-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'high': return 'bg-red-100 text-red-700';
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-105 group"
        title="反馈问题或建议"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          反馈问题/建议
        </span>
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-6 h-6" />
                  <h2 className="text-xl font-bold">反馈问题或建议</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-blue-100 text-sm mt-2">帮助我们改进 CamReview，为您提供更好的服务</p>
            </div>

            {isSubmitted ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">感谢您的反馈！</h3>
                <p className="text-gray-600">我们已收到您的反馈，会尽快评估处理。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      反馈类型 *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['bug', 'feature', 'other'] as FeedbackType[]).map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setType(t)}
                          className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                            type === t
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {getTypeLabel(t)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      问题等级
                    </label>
                    <div className="flex gap-2">
                      {(['low', 'medium', 'high'] as FeedbackPriority[]).map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setPriority(p)}
                          className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                            priority === p
                              ? `${getPriorityColor(p)} shadow-md ring-2 ring-offset-1`
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {p === 'low' ? '低' : p === 'medium' ? '中' : '紧急'}
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      详细描述 *
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="请详细描述遇到的问题或您的建议，包括：
- 具体情况
- 预期行为
- 实际发生的情况"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                    <p className="text-xs text-gray-500 mt-1">提供邮箱后，我们处理您的反馈时会通知您</p>
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {error}
                    </div>
                  )}

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                    >
                      取消
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          提交中...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          提交反馈
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}

            <div className="px-6 py-4 bg-gray-50 border-t text-xs text-gray-500">
              提交即表示您同意我们收集此反馈信息，用于改善网站体验。我们不会将您的信息用于其他目的。
            </div>
          </div>
        </div>
      )}
    </>
  );
}
