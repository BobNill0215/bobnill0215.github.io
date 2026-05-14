import Link from 'next/link';
import { MessageSquare, ThumbsUp, ExternalLink } from 'lucide-react';

export default function CommentSection({ articleTitle }: { articleTitle?: string }) {
  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScjyHa2VgyamhnrPdeaz7WA5CZmg-2_aDMwwoF3ZNMguFB-FA/viewform?usp=pp_url';

  return (
    <div className="mt-12">
      <div className="bg-white rounded-xl border p-6">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-blue-600" />
          文章讨论
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          欢迎在下方提交您的看法和问题。我们会认真阅读每一条反馈。
        </p>

        <div className="flex flex-wrap gap-3">
          <a href={formUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm">
            <ExternalLink className="w-4 h-4" />
            提交评论/反馈
          </a>
          <Link href="/feedback"
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm">
            反馈中心
          </Link>
        </div>
      </div>
    </div>
  );
}
