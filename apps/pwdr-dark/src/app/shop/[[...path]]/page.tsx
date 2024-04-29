import { ProductCard } from "@/components/product-card";
import { ProductDetails } from "@/components/product-details";
import { ProductList } from "@/components/product-list";
import { getContent } from "@/server/content/get-content";
import { getProduct } from "@/server/products/get-product";
import { getProductList } from "@/server/products/get-product-list";

export default async function DynamicShopPage({
  params,
}: {
  params: { path?: string[] };
}) {
  const path = params.path?.length ? `/shop/${params.path.join("/")}` : "/shop";
  const content = await getContent(path);

  switch (content.type) {
    case "product": {
      const product = await getProduct(path);
      return <ProductDetails product={product} />;
    }
    case "folder": {
      const products = await getProductList(path);

      return (
        <ProductList>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              href={product.path}
              title={product.name}
              imgSrc={product.images[0] || "/placeholder.svg"}
              description={product.description}
              price="$123.45"
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
