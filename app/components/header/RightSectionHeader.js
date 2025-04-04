"use client";
import Link from "next/link";

import { buttonVariants } from "../ui/Button";
import { cn } from "@/lib/utils";
import AnimatedButton from "../ui/AnimatedButton";
import MobileNav from "./MobileNav";

const RightSectionHeader = () => {
  return (
    <div className="flex items-center gap-3 font-medium">
      <Link href="/#contact" className="text-[#7e8285] hidden md:inline">
        Contact sales
      </Link>
      <Link
        href="/sign-in"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "hidden xl:inline font-medium"
        )}
      >
        Sign in
      </Link>
      <AnimatedButton href="/sign-up">Start for free</AnimatedButton>
      {/* Mobile Navigation menu */}
      <MobileNav />
    </div>
  );
};

export default RightSectionHeader;
