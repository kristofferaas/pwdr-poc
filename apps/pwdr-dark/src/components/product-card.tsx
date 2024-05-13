import { Locale } from "@/lib/i18n";
import { Product } from "@/server/products/product-schema";
import Link from "next/link";

export function ProductCard({
  product,
  locale,
}: {
  product: Product;
  locale: Locale;
}) {
  const image = product.images[0];

  return (
    <div className="relative group text-start overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <Link
        className="absolute inset-0 z-10"
        href={`/${locale}${product.path}`}
      >
        <span className="sr-only">View</span>
      </Link>
      {image && (
        <img
          alt="Product 4"
          className="object-cover w-full h-60"
          height="300"
          src={image}
          style={{
            aspectRatio: "300/300",
            objectFit: "cover",
          }}
          width="300"
        />
      )}
      <div className="bg-white p-4 dark:bg-gray-950 space-y-2">
        <h3 className="font-bold text-xl">{product.name}</h3>
        {product.description && (
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
            {product.description}
          </p>
        )}
        {product.price && (
          <h4 className="font-semibold text-lg md:text-xl">{product.price}</h4>
        )}
      </div>
    </div>
  );
}
