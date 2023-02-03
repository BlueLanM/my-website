// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "蓝莓のBlog",
  tagline: "记录人生",
  favicon: "img/favicon.ico",
  url: "https://lanm-blog.vercel.app/",
  baseUrl: "/",
  organizationName: "BlueLanM",
  projectName: "my-website",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "zh",
    locales: ["en", "zh"],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
      },
    },
  },
  // themes: ["@docusaurus/theme-search-algolia"],
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
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "LanM",
        logo: {
          alt: "蓝莓",
          src: "img/logo.svg",
        },
        hideOnScroll: true,
        items: [
          {
            type: "doc",
            docId: "record",
            position: "left",
            label: "笔记",
          },

          { to: "/blog", label: "博客", position: "left" },

          // {
          //   type: "docsVersionDropdown",
          //   position: "right",
          // },
          {
            type: "localeDropdown",
            position: "left",
          },
          {
            href: "https://github.com/BlueLanM/my-website",
            label: "GitHub",
            position: "right",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "学习",
            items: [
              {
                label: "笔记",
                to: "/docs/record",
              },
            ],
          },
          {
            title: "社区",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "CSDN",
                href: "https://blog.csdn.net/BLUESKYwang66",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "更多",
            items: [
              {
                label: "博客",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/BlueLanM/my-website",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
