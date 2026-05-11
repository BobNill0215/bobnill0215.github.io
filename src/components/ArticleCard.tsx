import Link from 'next/link';
import Image from 'next/image';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  href: string;
  rating?: number;
}

export default function ArticleCard({
  title,
  excerpt,
  image,
  category,
  date,
  href,
  rating,
}: ArticleCardProps) {
  return (
    <Link href={href} className="group">
      <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
            {category}
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{date}</span>
            {rating && (
              <span className="text-yellow-500">★ {rating.toFixed(1)}</span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}