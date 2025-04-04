import Link from "next/link";

const { cn } = require("@/lib/utils");

const BadgeLink = ({
  href = "/",
  children,
  badgeText,
  className,
  badgeClassName,
}) => {
  return (
    <Link href={href} className={cn("flex items-center gap-2", className)}>
      {children}
      {badgeText && (
        <span
          className={cn(
            "h-6 flex items-center new-badge justify-center  rounded px-2 text-sm bg-[#374bff] text-[#fff]",
            badgeClassName
          )}
        >
          <span>{badgeText}</span>
        </span>
      )}
    </Link>
  );
};

export default BadgeLink;
