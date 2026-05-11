interface AdPlaceholderProps {
  slot?: string;
  className?: string;
}

export default function AdPlaceholder({
  slot = 'default',
  className = '',
}: AdPlaceholderProps) {
  return (
    <div
      className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center min-h-[100px] ${className}`}
      data-ad-slot={slot}
    >
      <div className="text-center p-4">
        <p className="text-gray-400 text-sm">广告位 {slot}</p>
        <p className="text-gray-300 text-xs mt-1">请在此处投放广告代码</p>
      </div>
    </div>
  );
}