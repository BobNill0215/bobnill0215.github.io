interface ProductRatingProps {
  rating: number;
  reviewCount: number;
}

export default function ProductRating({ rating, reviewCount }: ProductRatingProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-lg ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
            ★
          </span>
        ))}
      </div>
      <span className="font-semibold">{rating.toFixed(1)}</span>
      <span className="text-gray-500">({reviewCount} 条评论)</span>
    </div>
  );
}