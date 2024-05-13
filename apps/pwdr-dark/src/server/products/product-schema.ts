import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  path: z.string(),
  name: z.string(),
  description: z.string().optional(),
  images: z.array(z.string().url()),
  price: z.number().optional(),
});

export type Product = z.infer<typeof productSchema>;

export const productListSchema = z.array(productSchema);

export type ProductList = z.infer<typeof productListSchema>;
