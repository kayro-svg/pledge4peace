// Este archivo actúa como Server Component
import { ProductDetailContent } from "./product-detail-content";

export default function Page({ params }: { params: { slug: string } }) {
  // Accedemos a params.slug en el Server Component, donde es seguro
  const { slug } = params;

  // Pasamos el slug como prop al Client Component
  return <ProductDetailContent slug={slug} />;
}
