import Link from "next/link";

export function ProductCard({
  href,
  title,
  description,
  price,
  imgSrc,
}: {
  href: string;
  title: string;
  description: string;
  price: string;
  imgSrc: string;
}) {
  return (
    <div className="relative group text-start overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <Link className="absolute inset-0 z-10" href={href}>
        <span className="sr-only">View</span>
      </Link>
      <img
        alt="Product 4"
        className="object-cover w-full h-60"
        height="300"
        src={imgSrc}
        style={{
          aspectRatio: "300/300",
          objectFit: "cover",
        }}
        width="300"
      />
      <div className="bg-white p-4 dark:bg-gray-950 space-y-2">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
          {description}
        </p>
        <h4 className="font-semibold text-lg md:text-xl">{price}</h4>
      </div>
    </div>
  );
}
