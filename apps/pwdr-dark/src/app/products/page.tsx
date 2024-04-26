import { ProductCard } from "@/components/product-card";
import { ProductList } from "@/components/product-list";
import { getProductList } from "@/server/products/get-product-list";

export default async function ProductsPage() {
  const products = await getProductList("/shop/chairs");

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
