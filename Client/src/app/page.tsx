import ProductList from "@/components/ProductList";
import Image from "next/image";

const HomePage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const { category } = await searchParams;
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image
          src="/fb4887b27ae456d6794d01b538f29e07.jpg"
          alt="Featured Product"
          fill
        />
      </div>
      <ProductList category={category} params="homepage" />
    </div>
  );
};

export default HomePage;
