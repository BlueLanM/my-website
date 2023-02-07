// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const path = require("path");

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
          path: "docs",
          sidebarPath: "sidebars.js",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        sitemap: {
          changefreq: "daily",
          priority: 0.5,
        },
        gtag: {
          trackingID: "G-S4SD5NXWXF",
          anonymizeIP: true,
        },
      }),
    ],
  ],
  plugins: [
    "docusaurus-plugin-sass",
    [
      path.resolve(__dirname, "./src/plugin/plugin-content-blog"),
      {
        path: "blog",
        routeBasePath: "/",
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/BlueLanM/my-website/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogSidebarCount: 10,
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: "all",
          title: "蓝莓",
        },
      },
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
          src: "img/logo.ico",
        },
        hideOnScroll: true,
        items: [
          {
            label: "记录",
            position: "right",
            items: [
              {
                label: "标签",
                to: "tags",
              },
              {
                label: "归档",
                to: "archive",
              },
              {
                label: "笔记",
                to: "docs/record",
              },
            ],
          },
          // {
          //   to: "/docs/record",
          //   position: "right",
          //   label: "笔记",
          // },

          // { to: "/blog", label: "博客", position: "right" },

          {
            label: "导航",
            position: "right",
            to: "website",
          },
          // {
          //   type: "docsVersionDropdown",
          //   position: "right",
          // },
          {
            type: "localeDropdown",
            position: "right",
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
      giscus: {
        repo: "BlueLanM/my-website",
        repoId: "R_kgDOI4VNdQ",
        category: "Comments",
        categoryId: "DIC_kwDOI4VNdc4CUC_9",
        mapping: "title",
        lang: "zh-CN",
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
