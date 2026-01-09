import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 mb-4">
      {/* Left */}
      <Link href="/" className=" flex items-center">
        <Image
          src="/logo.png"
          alt="TrendLama"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="font-medium text-md tracking-wider">TRENDLAMA</p>
      </Link>
      {/* Right */}
    </nav>
  );
};

export default Navbar;
