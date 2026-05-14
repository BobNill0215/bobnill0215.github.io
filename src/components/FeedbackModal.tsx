'use client';

import { useState, useEffect } from 'react';
import { MessageSquare, X, ExternalLink } from 'lucide-react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScjyHa2VgyamhnrPdeaz7WA5CZmg-2_aDMwwoF3ZNMguFB-FA/viewform?usp=pp_url';

export default function FeedbackModal() {
  const [isOpen, setIsOpen] = useState(false);

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
            className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden"
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

            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-blue-600" />
              </div>
              <p className="text-gray-600 mb-6">
                点击下方按钮，在 Google 表单中提交您的反馈。反馈内容会直接发送到我们的邮箱。
              </p>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <ExternalLink className="w-5 h-5" />
                打开反馈表单
              </a>
            </div>

            <div className="px-6 py-4 bg-gray-50 border-t text-xs text-gray-500">
              您也可以直接发邮件至 bobnill@163.com
            </div>
          </div>
        </div>
      )}
    </>
  );
}
