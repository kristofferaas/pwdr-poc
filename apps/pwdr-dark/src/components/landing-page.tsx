import Link from "next/link";
import placeholderSVG from "./placeholder.svg";

export function LandingPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <img
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            height="550"
            src={placeholderSVG.src}
            width="550"
          />
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Outdoor Clothing
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
              Explore the Great Outdoors
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Discover our high-quality outdoor clothing designed to keep you
              comfortable and protected in any environment.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Product Line
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our high-quality outdoor clothing designed to keep you
              comfortable and protected in any environment.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* <ProductCard
              description="Durable and flexible pants for your next outdoor adventure."
              href="/products/2"
              price="$59.99"
              title="Hiking Pants"
            />
            <ProductCard
              description="Durable and comfortable boots for your next outdoor adventure."
              href="/products/4"
              price="$129.99"
              title="Hiking Boots"
            />
            <ProductCard
              description="Durable and comfortable backpack for your next outdoor adventure."
              href="/products/6"
              price="$49.99"
              title="Hiking Backpack"
            />
            <ProductCard
              description="Essential equipment for your next outdoor adventure."
              href="/products/8"
              price="$199.99"
              title="Camping Gear"
            /> */}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hear from our satisfied customers about their experiences with our
              outdoor clothing.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-start gap-4 rounded-md bg-white p-4 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
              <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal">
                “The quality of the clothing is exceptional, and it has held up
                incredibly well to the rigors of my outdoor adventures.”
              </blockquote>
              <div>
                <div className="font-semibold">Jane Doe</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Avid Hiker
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-md bg-white p-4 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
              <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal">
                “I've been a loyal customer for years, and the customer service
                has always been top-notch. They truly care about their
                customers.”
              </blockquote>
              <div>
                <div className="font-semibold">John Smith</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Outdoor Enthusiast
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-md bg-white p-4 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
              <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal">
                “I love how the clothing is not only functional but also
                stylish. It's the perfect balance for my outdoor adventures.”
              </blockquote>
              <div>
                <div className="font-semibold">Sarah Lee</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Nature Lover
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Sustainability
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Committed to the Environment
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              At Outdoor Clothing Co., we are dedicated to sustainable practices
              and reducing our environmental impact. From using recycled
              materials to implementing eco-friendly production methods, we are
              committed to protecting the planet.
            </p>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Learn More
            </Link>
          </div>
          <img
            alt="Sustainability"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="310"
            src={placeholderSVG.src}
            width="550"
          />
        </div>
      </section>
    </main>
  );
}
