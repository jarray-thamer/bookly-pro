import Link from "next/link";
import { IconlyArrowRight } from "../icons/ArrowRight";

const TopHeader = () => {
  return (
    <div className="bg-[#CFF724] p-3">
      <div className="max-w-screen-2xl mx-auto flex items-end justify-start md:justify-center md:items-center gap-2 text-base font-semibold">
        <div className="flex space-x-2">
          <span>Mockuply Pro</span>
          <p className="font-normal md:font-medium tracking-wide">
            We have released a new product related to 4K mockups.
          </p>
        </div>
        <Link href="/" className="flex items-center space-x-2">
          <span>Explore</span>
          <IconlyArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
