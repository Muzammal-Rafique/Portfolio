import React from "react";
import NavLink from "./NavLink";
import { navLink } from "./Navbar";

interface props {
  links: navLink[];
}

const MobileNav = ({ links }: props) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MobileNav;
