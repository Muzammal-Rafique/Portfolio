import { navLinks } from "@/constants/navLinks";
import Image from "next/image";
import React from "react";
import NavLink from "./navbar/NavLink";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image src="/logo-dark.png" alt="logo" width={150} height={140} />
        <ul className="flex gap-10">
        {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
        </ul>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
