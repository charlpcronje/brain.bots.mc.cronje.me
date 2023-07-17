// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mall Chat Second Brain 🧠",
  tagline: "all Chat Second Brain",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://brain.bots.mc.cronje.info/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "CharlPCronje", // Usually your GitHub org/user name.
  projectName: "Mall Chat 2nd Brain", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/charlpcronje/brain.bots.mc.cronje.me/tree/main/docs/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/charlpcroje/brain.bots.mc.cronje.me",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo.png",
      navbar: {
        title: "Mall Chat 2nd Brain",
        logo: {
          alt: "Mall Chat Logo",
          src: "img/logo.png",
        },
        items: [
          {
            href: "/docs/roadmap",
            label: "Roadmap",
            position: "left",
          },
          {
            href: "https://brain.bots.mc.cronje.info/",
            position: "right",
            label: "Try me now",
          },
          {
            href: "https://github.com/charlpcronje/brain.bots.mc.cronje.me",
            label: "Star us on GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Get Started",
                to: "/docs/get_started/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/TUPSzTtaYz",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/CPCharlCronje",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Website",
                to: "https://mallchat.cronje.me",
              },
              {
                label: "GitHub",
                href: "https://github.com/charlpcronje/brain.bots.mc.cronje.me",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mall Chat`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
