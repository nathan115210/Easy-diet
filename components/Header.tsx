import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/assets/logo.png";
import HeaderBackground from "@/components/HeaderBackground";
import styles from "../components/styles/header.module.css";

import NavLinks, { NavLinkType } from "@/components/NavLinks";

export interface HeaderProps {
  navItems: NavLinkType[];
  hasBackground?: boolean;
}

const Header: FC<HeaderProps> = ({ navItems, hasBackground = true }) => {
  return (
    <>
      {hasBackground && <HeaderBackground />}
      <header className={styles.header}>
        <Link className={styles.logo} href={"/"} aria-label={"logo"}>
          <Image src={LogoImage} alt={"logo image"} priority />
          EasyDiet
        </Link>
        {!!navItems.length && <NavLinks navItems={navItems} />}
      </header>
    </>
  );
};

export default Header;
