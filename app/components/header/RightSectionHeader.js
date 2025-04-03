import Link from "next/link";
import { buttonVariants } from "../ui/Button";
import { cn } from "@/lib/utils";
import AnimatedButton from "../ui/AnimatedButton";

const RightSectionHeader = () => {
  return (
    <div className="flex items-center gap-3 font-medium">
      <Link href="/#contact" className="text-[#7e8285] hidden lg:inline">
        Contact sales
      </Link>
      <Link
        href="/sign-in"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "hidden lg:inline font-medium"
        )}
      >
        Sign in
      </Link>
      <AnimatedButton href="/sign-up">Start for free</AnimatedButton>
    </div>
  );
};

export default RightSectionHeader;
