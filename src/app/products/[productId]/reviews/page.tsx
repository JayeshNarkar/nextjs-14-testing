export default function Reviews({ params }: { params: { productId: number } }) {
  return <h1>Reviews for {params.productId}</h1>;
}
