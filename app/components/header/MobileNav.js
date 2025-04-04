import { MenuIcon, XIcon } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import BadgeLink from "../ui/BadgeLink";
import { useState } from "react";

const MobileNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <>
      <Button
        className="ml-2 xl:hidden"
        variant="icon"
        size="icon"
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
      >
        {isMobileNavOpen ? <XIcon /> : <MenuIcon />}
      </Button>
      <div
        className={cn(
          "absolute top-[89px] left-0 bg-white w-full h-[calc(100dvh_-_89px)] p-4 xl:hidden z-10 transition-all origin-top pointer-events-none  ",
          isMobileNavOpen ? "opacity-100 scale-y-95" : "opacity-0"
        )}
      >
        <div className="gap-6 font-semibold flex flex-col">
          <Link href="/">Home page</Link>
          <Link href="/">Pricing</Link>
          <BadgeLink badgeText="New" href="#">
            Order book
          </BadgeLink>
          <div className="space-y-6">
            <p className="text-grey">Categories</p>
            <Link href="#" className="pl-4 flex items-center gap-2">
              Advanture
            </Link>
            <Link href="#" className="pl-4 flex items-center gap-2">
              Science Fiction
            </Link>
            <Link href="#" className="pl-4 flex items-center gap-2">
              Fantasy
            </Link>
          </div>
          <div className="space-y-6">
            <p className="text-grey">Support</p>
            <Link href="#" className="pl-4 flex items-center gap-2">
              Contact
            </Link>
            <Link href="#" className="pl-4 flex items-center gap-2">
              FAQ
            </Link>
            <Link href="#" className="pl-4 flex items-center gap-2">
              Terms of service
            </Link>
            <Link href="#" className="pl-4 flex items-center gap-2">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
