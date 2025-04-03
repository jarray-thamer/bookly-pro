import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";

const LeftSectionHeader = () => {
  return (
    <div className="flex items-center gap-8">
      <Link href="/">
        <Image
          src="/assets/probook-logo.png"
          alt="probook logo"
          width={124}
          height={1080}
          loading="lazy"
        />
      </Link>
      <NavItems />
    </div>
  );
};

export default LeftSectionHeader;
