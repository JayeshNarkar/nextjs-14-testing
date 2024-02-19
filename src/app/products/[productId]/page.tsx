import { Metadata } from "next";

type props = {
  params: { productId: number };
};

export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  const title: string = await new Promise((resolve) => {
    setTimeout(() => resolve(`Product: ${params.productId}`), 100);
  });
  const description: string = await new Promise((resolve) => {
    setTimeout(
      () => resolve(`This is description for product ${params.productId}`),
      100
    );
  });
  return {
    title: title,
    description: description,
  };
};

export default function ProductDetails({ params }: props) {
  return <h1>Product Details {params.productId}</h1>;
}
