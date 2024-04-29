import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { ProductCard } from "./product-card";
import { Product } from "@/server/products/product-schema";

export function ProductDetails({ product }: { product: Product }) {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-4">
            <img
              alt="Product Image"
              className="aspect-square rounded-lg object-cover"
              height="600"
              src={product.images[0] || "/placeholder.svg"}
              width="600"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {product.name}
            </h1>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              {product.description}
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Add to Cart</Button>
              <Button size="lg" variant="outline">
                <HeartIcon className="w-4 h-4 mr-2" />
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Designed for the Elements
            </h2>
            <div className="grid gap-4">
              <div>
                <h3 className="text-xl font-bold">Materials</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Crafted with a durable, water-resistant outer shell and a
                  premium insulation lining, the Everest Parka is built to
                  withstand the harshest conditions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Features</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Featuring a detachable hood, adjustable cuffs, and a
                  reinforced zipper, this jacket provides unparalleled
                  protection and versatility.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Care</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  To maintain the quality and performance of your Everest Parka,
                  we recommend machine washing on a gentle cycle and hanging to
                  dry.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <img
              alt="Product Details"
              className="aspect-video rounded-lg object-cover"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* <ProductCard
                href="/products/1"
                title="Mountain Jacket"
                description="A versatile jacket for all your outdoor adventures."
                price="$89.99"
              />
              <ProductCard
                href="/products/2"
                title="Hiking Boots"
                description="Durable and comfortable boots for your next adventure."
                price="$129.99"
              />
              <ProductCard
                href="/products/3"
                title="Backpack"
                description="A rugged and spacious backpack for all your gear."
                price="$49.99"
              />
              <ProductCard
                href="/products/4"
                title="Camping Gear"
                description="Essential equipment for your next outdoor adventure."
                price="$199.99"
              /> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
