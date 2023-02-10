// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const path = require("path");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "蓝莓のBlog",
  tagline: "摆烂",
  favicon: "img/favicon.ico",
  url: "https://lanm.netlify.app/",
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
    [
      "@docusaurus/plugin-ideal-image",
      {
        disableInDev: false,
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
          src: "img/3.ico",
        },
        hideOnScroll: true,
        items: [
          {
            label: "📘 学习",
            position: "right",
            items: [
              {
                label: "🏷️ 标签",
                to: "tags",
              },
              {
                label: "📜 归档",
                to: "archive",
              },
              {
                label: "📓 笔记",
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
            label: "📌 项目",
            position: "right",
            to: "project",
          },
          {
            label: "🚀 导航",
            position: "right",
            to: "website",
          },

          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/BlueLanM/my-website",
            className: "header-github-link",
            // label: "⭐GitHub",
            "aria-label": "GitHub repository",
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
                label: "标签",
                to: "tags",
              },
              {
                label: "归档",
                to: "archive",
              },
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
                label: "关于我",
                href: "/about",
              },
              {
                label: "GitHub",
                href: "https://github.com/BlueLanM/my-website",
              },
              {
                label: "CSDN",
                href: "https://blog.csdn.net/BLUESKYwang66",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Jason__Wang_",
              },
            ],
          },
          {
            title: "更多",
            items: [
              {
                label: "项目",
                href: "project",
              },
              // {
              //   label: "导航",
              //   href: "website",
              // },
              {
                html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`,
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
      socials: {
        github: "https://github.com/BlueLanM",
        twitter: "https://twitter.com/Jason__Wang_",
        csdn: "https://blog.csdn.net/BLUESKYwang66",
        qq: "https://wpa.qq.com/msgrd?v=3&amp;uin=2351406802&amp;site=qq",
        zhihu: "https://www.zhihu.com/people/lanm-82-86",
        cloudmusic: "https://music.163.com/#/user/home?id=428851176",
        steam: "https://steamcommunity.com/profiles/76561198892079974/",
      },
    }),
};

module.exports = config;
