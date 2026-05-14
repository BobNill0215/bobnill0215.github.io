'use client';

interface Product {
  name: string;
  image: string;
  price?: string;
  specs: Record<string, string | undefined>;
}

interface ProductComparisonProps {
  products: Product[];
  features: string[];
}

export default function ProductComparison({
  products,
  features,
}: ProductComparisonProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="p-4 text-left text-sm font-semibold text-gray-700 border">
              特性
            </th>
            {products.map((product, index) => (
              <th
                key={index}
                className="p-4 text-center text-sm font-semibold text-gray-700 border"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 relative mb-2">
                    <img loading="lazy"
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-base">{product.name}</span>
                  {product.price && (
                    <span className="text-blue-600 text-sm mt-1">
                      {product.price}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, featureIndex) => (
            <tr key={featureIndex} className="hover:bg-gray-50">
              <td className="p-4 text-sm text-gray-700 border font-medium">
                {feature}
              </td>
              {products.map((product, productIndex) => (
                <td
                  key={productIndex}
                  className="p-4 text-sm text-gray-600 text-center border"
                >
                  {product.specs[feature] || '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}