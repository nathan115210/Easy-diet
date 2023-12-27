"use client";

import type { FC } from "react";
import styles from "@/components/styles/header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavLinkType = { url: string; text: string };

export interface NavLinksProps {
  navItems: NavLinkType[];
}

const NavLinks: FC<NavLinksProps> = ({ navItems }) => {
  const pagePath = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        {navItems.map((item, index) => {
          const { url, text } = item;
          return (
            <li
              key={index}
              className={pagePath.startsWith(url) ? styles.active : undefined}
            >
              <Link href={url}>{text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
