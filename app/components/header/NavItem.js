import Link from "next/link";
import { IconlyArrowUp2 } from "../icons/CheveronUp";

const NavItem = ({ title, href, subtitles }) => {
  return (
    <div className="relative group h-[100px] flex items-center">
      <Link href={href} className="flex items-center gap-2">
        <p className="flex cursor-pointer  items-center gap-2 text-black">
          {title}
          {!subtitles && (
            <span className="w-[24px] h-[24px] inline-block"></span>
          )}
          {subtitles && <IconlyArrowUp2 className="rotate-180" />}
        </p>
      </Link>
      {subtitles && (
        <div className="absolute top-full pt-2 left-0 z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none group-hover:pointer-events-auto">
          <ul className=" rounded-lg p-4 bg-white  list-none w-[200px]  box-shadow-default border border-[#EDEDED] flex flex-col gap-4 z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-1.5 transition-all pointer-events-none group-hover:pointer-events-auto">
            {subtitles.map((subtitle) => (
              <li className="flex items-center gap-2">
                <Link href={subtitle.href} className="flex items-center gap-2">
                  {subtitle.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavItem;
