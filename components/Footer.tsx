import React from "react";
import { footerLinks } from "@/constants";
import type { FooterLinkType } from "@/constants";
import Link from "next/link";

const FooterColumn = ({ title, links }: FooterLinkType) => {
  return (
    <div className={"flex-1 flex flex-col gap-3 text-sm min-w-max"}>
      <h4 className={"font-semibold"}>{title}</h4>
      {links && (
        <ul className={"flex flex-col gap-2 font-normal"}>
          {links.map((link, i) => {
            const { url, linkLabel } = link;

            return (
              <Link href={url} key={i}>
                {linkLabel}
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
};
const Footer = () => {
  return (
    <footer
      className={
        "flex items-center justify-start flex-col  gap-20 bg-light-white"
      }
    >
      <div className={"flex flex-col gap-12 w-full"}>
        <div className={"flex items-start flex-col"}>
          {/*<Image src={"/logo.svg"} alt={"Easy Diet"} width={150} height={150} />*/}
          <p className={"text-start text-sm font-normal mt-5 max-w-xs"}>
            Welcome to <b className={"font-bold"}>Easy Diet</b>! Discover a
            world of recipes suitable for everyone, from around the globe. Enjoy
            affordable Cook-It-Yourself Kits crafted by professional chefs to
            make your kitchen time more efficient. Join us for a delightful
            cooking experience!
          </p>
        </div>
        <div className={"flex flex-wrap gap-4"}>
          {footerLinks.map((footerLink, index) => {
            const { title, links } = footerLink;
            return <FooterColumn key={index} title={title} links={links} />;
          })}
        </div>
      </div>
      <div
        className={
          "flex justify-between items-center max-sm:flex-col w-full text-sm font-normal"
        }
      >
        <p>@ 2023 Easy Diet. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
