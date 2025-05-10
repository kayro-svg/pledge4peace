// Este archivo actúa como Server Component
import { ProductDetailContent } from "./product-detail-content";

export default async function Page({ params }: { params: { slug: string } }) {
  // En un componente async podemos acceder a params.slug de forma segura
  const { slug } = params;

  // Pasamos el slug como prop al Client Component
  return <ProductDetailContent slug={slug} />;
}
