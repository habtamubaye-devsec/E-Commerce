import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col gap-8 items-center md:flex-row md:justify-between md:items-start md:gap-0 bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col items-center md:items-start gap-4">
        <Link href="/" className=" flex items-center">
          <Image
            src="/logo.png"
            alt="TrendLama"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className="hidden md:block font-medium text-md  text-white tracking-wider ml-2">
            TRENDLAMA
          </p>
        </Link>
        <p className="text-sm text-gray-400">© 2024 TrendLama.</p>
        <p className="text-sm text-gray-400"> All rights reserved.</p>
      </div>

      <div className="flex flex-col items-center md:items-start gap-4 text-sm text-gray-400">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/" >Home</Link>
        <Link href="/contact" >Contact</Link>
        <Link href="/privacy" >Privacy Policy</Link>
        <Link href="/terms" >Terms of Service</Link>
      </div>

      <div className="flex flex-col items-center md:items-start gap-4 text-sm text-gray-400">
        <p className="text-sm text-amber-50">Products</p>
        <Link href="/" >All Products</Link>
        <Link href="/" >New Arrivals</Link>
        <Link href="/" >Best Sellers</Link>
        <Link href="/" >Sale</Link>
      </div>

      <div className="flex flex-col items-center md:items-start gap-4 text-sm text-gray-400">
        <p className="text-sm text-amber-50">Company</p>
        <Link href="/" >About</Link>
        <Link href="/" >Contact</Link>
        <Link href="/" >Blog</Link>
        <Link href="/" >Affililate Program</Link>
      </div>
    </div>
  );
};

export default Footer;
