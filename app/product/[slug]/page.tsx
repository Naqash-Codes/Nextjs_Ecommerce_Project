import { exploreProductList, productList } from "@/data/products";
import { notFound } from "next/navigation";
import ProductDetail from "./ProductDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const product =
    productList.find((p) => p.slug === slug) ||
    exploreProductList.find((p) => p.slug === slug);

  if (!product) notFound();

  return <ProductDetail product={product} />;
}
