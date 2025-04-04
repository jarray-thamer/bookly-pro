import Link from "next/link";
import { User2Icon } from "lucide-react";
import Image from "next/image";

import { buttonVariants } from "../ui/Button";
import AnimatedButtonLink from "../ui/AnimatedButton";

const HeroSection = () => {
  const AVATARS = [
    "/assets/hero-avatar-1.jpg",
    "/assets/hero-avatar-2.jpg",
    "/assets/hero-avatar-3.jpg",
    "/assets/hero-avatar-4.jpg",
  ];
  return (
    <div className="flex-col lg:flex-row flex items-end justify-between ">
      <div className="space-y-4 lg:space-y-8">
        <h3 className="text-left text-4xl lg:text-7xl font-semibold">
          Need Books to read?
          <br />
          just explore with us
        </h3>
        <p className="text-left text font-medium-lg lg:text-xl">
          Let us bring stories to life with amazing books and genres.
          <br className="hidden lg:block" />
          Dive into your next great read — all available online!
        </p>
        <div className="flex items-center gap-2 justify-start  w-full">
          <Link href="/" className={buttonVariants({ variant: "outline" })}>
            Categories
          </Link>
          <AnimatedButtonLink href="/">Start for free</AnimatedButtonLink>
        </div>
      </div>
      <div className="flex items-end lg:items-center lg:block w-full mt-6 lg:mt-0 lg:w-52 hero-right">
        <div className="flex flex-wrap items-center gap-2 lg:gap-0 lg:block">
          <User2Icon size={20} />
          <p className="mt-2 font-medium">Empowering +243K people</p>
          <p className="text-grey">Thousands of readers are enjoying books.</p>
        </div>
        {/*  */}
        <div className="flex items-center flex-1 mr-6 lg:mr-0 lg:flex-initial justify-between mt-0 lg:mt-4">
          <div className="flex items-center -space-x-2">
            {AVATARS.map((avatar, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full overflow-hidden border border-gray-300"
              >
                <Image
                  src={avatar}
                  width={32}
                  height={32}
                  loading="lazy"
                  alt="avatar"
                  decoding="async"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/assets/heart.svg"
              alt="heart"
              width={24}
              height={24}
              decoding="async"
              loading="lazy"
            />
            <strong>2.7K</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
