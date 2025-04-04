import React from "react";
import Link from "next/link";

import NavItem from "./NavItem";
import BadgeLink from "../ui/BadgeLink";

const NAV_ITEMS = [
  {
    title: "Home Page",
    href: "/#",
  },
  {
    title: "Categories",
    href: "/Categories",
    subtitles: [
      {
        title: "Adventure",
        href: "/books/adventure",
      },
      {
        title: "Science Fiction",
        href: "/books/science-fiction",
      },
      {
        title: "Fantasy",
        href: "/books/fantasy",
      },
    ],
  },
  {
    title: "Pricing",
    href: "/#pricing",
  },
  {
    title: "Support",
    href: "/#support",
    subtitles: [
      {
        title: "Contact",
        href: "/#contact",
      },
      {
        title: "FAQ",
        href: "/#faq",
      },
      {
        title: "Terms of Service",
        href: "/terms",
      },
      {
        title: "Privacy Policy",
        href: "/privacy",
      },
    ],
  },
];

const NavItems = () => {
  return (
    <div className="hidden xl:flex items-center gap-6 font-medium tracking-wide">
      {NAV_ITEMS.map((item) => (
        <NavItem
          key={item.title}
          title={item.title}
          href={item.href}
          subtitles={item.subtitles}
        />
      ))}

      <BadgeLink badgeText="New" href="#">
        Order book
      </BadgeLink>
    </div>
  );
};

export default NavItems;
