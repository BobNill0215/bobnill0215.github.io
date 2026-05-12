'use client';

interface AdPlaceholderProps {
  slot?: string;
  className?: string;
}

export default function AdPlaceholder({
  slot = 'default',
  className = '',
}: AdPlaceholderProps) {
  return (
    <div className={`my-6 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6406389310465549"
        data-ad-slot={getAdSlot(slot)}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

function getAdSlot(slot: string): string {
  const slots: Record<string, string> = {
    'homepage-banner': '1234567890',
    'article-top': '2345678901',
    'article-middle': '3456789012',
    'article-bottom': '4567890123',
    'sidebar': '5678901234',
    'default': '6789012345',
  };
  return slots[slot] || slots['default'];
}