import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants";
import AuthProviders from "@/components/AuthProviders";

const Navbar = () => {
  const userSession = null;
  return (
    <nav className="flex justify-between items-center border-b border-nav-border gap-4">
      <Link href={"/"}>
        <Image src={"/logo.svg"} width={115} height={115} alt={"Easy Diet"} />
      </Link>
      <ul className="xl:flex hidden text-small gap-7">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.key}>
            {link.text}
          </Link>
        ))}
      </ul>
      <div className={"flex justify-center items-center gap-4 "}>
        {userSession ? (
          <>
            User photo <Link href={"/create-recipe"}>Create Your Recipe</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
