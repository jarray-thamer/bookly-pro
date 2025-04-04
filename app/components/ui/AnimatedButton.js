import Link from "next/link";

const AnimatedButton = ({ children, href = "#" }) => {
  return (
    <Link
      href={href}
      className="bg-black hover:bg-[linear-gradient(94deg,#000_3.05%,#666_115.07%)] duration-300 shadow-none hover:shadow-[0px_26.5px_35px_0px_rgba(0,0,0,0.24)] transition-all text-white group px-4 py-2 rounded-lg font-semibold overflow-hidden hover:scale-110 origin-center [-webkit-transform:translateZ(0px)] [-webkit-backface-visibility:hidden] inline-flex"
    >
      <div className="relative group-hover:-translate-y-[150%] transition-all duration-300">
        {renderTextSpan(children)}
        {renderTextSpan(children, "absolute top-[150%]")}
      </div>
    </Link>
  );
};

const renderTextSpan = (children, className = "relative") => (
  <span
    className={`${className} z-10 block [-webkit-transform:translateZ(0px)]`}
  >
    {children}
  </span>
);

export default AnimatedButton;
