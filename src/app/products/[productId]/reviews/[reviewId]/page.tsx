export default function ReviewId({
  params,
}: {
  params: { reviewId: number; productId: number };
}) {
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
