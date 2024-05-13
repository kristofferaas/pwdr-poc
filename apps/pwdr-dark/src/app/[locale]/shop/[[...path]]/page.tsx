import { ProductCard } from "@/components/product-card";
import { ProductDetails } from "@/components/product-details";
import { ProductList } from "@/components/product-list";
import { Locale } from "@/lib/i18n";
import { getContent } from "@/server/content/get-content";
import { getProduct } from "@/server/products/get-product";
import { getProductList } from "@/server/products/get-product-list";

export default async function DynamicShopPage({
  params,
}: {
  params: { path?: string[]; locale: Locale };
}) {
  const path = params.path?.length ? `/shop/${params.path.join("/")}` : `/shop`;
  const content = await getContent(path, { locale: params.locale });

  switch (content.type) {
    case "product": {
      const product = await getProduct(path, { locale: params.locale });
      return <ProductDetails product={product} />;
    }
    case "folder": {
      const products = await getProductList(path, { locale: params.locale });

      return (
        <ProductList locale={params.locale}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              locale={params.locale}
            />
          ))}
        </ProductList>
      );
    }
    default: {
      throw new Error(`Unknown content type: ${content.type}`);
    }
  }
}
