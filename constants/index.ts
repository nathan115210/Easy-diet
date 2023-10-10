type NavLinkType = { href: string; key: string; text: string };
export const navLinks: NavLinkType[] = [
  { href: "/", key: "Chef Recipes", text: "Chef Recipes" },
  { href: "/", key: "Inspiration", text: "Inspiration" },
  { href: "/", key: "Learn Cooking", text: "Learn Cooking" },
  { href: "/", key: "Tools", text: "Tools" },
  { href: "/", key: "Cook-It-Yourself Kits", text: "Cook-It-Yourself Kits" },
];
type LinkProps = {
  url: string;
  linkLabel: string;
};

export type FooterLinkType = { title: string; links: LinkProps[] };
export const footerLinks: FooterLinkType[] = [
  {
    title: "For developers",
    links: [
      { url: "Go Pro!", linkLabel: "Go Pro!" },
      {
        url: "Explore development work",
        linkLabel: "Explore development work",
      },
      { url: "Development blog", linkLabel: "Development blog" },
      { url: "Code podcast", linkLabel: "Code podcast" },
      { url: "Open-source projects", linkLabel: "Open-source projects" },
      { url: "Refer a Friend", linkLabel: "Refer a Friend" },
      { url: "Code of conduct", linkLabel: "Code of conduct" },
    ],
  },
  {
    title: "Hire developers",
    links: [
      { url: "Go Pro!", linkLabel: "Go Pro!" },
      {
        url: "Explore development work",
        linkLabel: "Explore development work",
      },
      { url: "Development blog", linkLabel: "Development blog" },
      { url: "Code podcast", linkLabel: "Code podcast" },
      { url: "Open-source projects", linkLabel: "Open-source projects" },
      { url: "Refer a Friend", linkLabel: "Refer a Friend" },
      { url: "Code of conduct", linkLabel: "Code of conduct" },
    ],
  },
];
