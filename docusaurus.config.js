// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const path = require("path");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "蓝莓のBlog",
  tagline: "轻舟已过万重山",
  favicon: "img/favicon.ico",
  url: "https://lanm.love/",
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
          showLastUpdateTime: true,
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
        googleAnalytics: {
          trackingID: "G-58V3HGPSD1",
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
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

    path.resolve(__dirname, "./src/plugin/plugin-baidu-tongji"),
    path.resolve(__dirname, "./src/plugin/plugin-baidu-push"),

    [
      path.resolve(__dirname, "./src/plugin/plugin-content-blog"),

      {
        path: "blog",
        routeBasePath: "/",
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/BlueLanM/my-website/edit/master/${blogDirPath}/${blogPath}`,
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
    // [
    //   "@docusaurus/plugin-pwa",
    //   {
    //     debug: true,
    //     offlineModeActivationStrategies: [
    //       "appInstalled",
    //       "standalone",
    //       "queryString",
    //     ],
    //     pwaHead: [
    //       {
    //         tagName: "link",
    //         rel: "icon",
    //         href: "/img/logo.png",
    //       },
    //       {
    //         tagName: "link",
    //         rel: "manifest",
    //         href: "/manifest.json",
    //       },
    //       {
    //         tagName: "meta",
    //         name: "theme-color",
    //         content: "rgb(51 139 255)",
    //       },
    //     ],
    //   },
    // ],
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
                to: "docs/record/",
              },
            ],
          },
          {
            to: "docs/life/",
            position: "right",
            label: "🎯 生活",
          },

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
            position: "left",
          },
          {
            href: "https://space.bilibili.com/347207525",
            position: "right",
            className: "header-bilibili-link",
            "aria-label": "Bilibili",
          },
          {
            href: "https://github.com/BlueLanM/my-website",
            className: "header-github-link",
            // label: "⭐GitHub",
            "aria-label": "GitHub repository",
            position: "right",
          },
          {
            position: "right",
            to: "https://steamcommunity.com/profiles/76561198892079974/",
            className: "header-steam-link",
            "aria-label": "Steam",
          },
        ],
      },

      algolia: {
        appId: "KFB5UP84UF",
        apiKey: "2527b8673db145613ad39c1e5416b4cf",
        indexName: "lanm",
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
                to: "docs/record/",
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
                to: "project",
              },
              {
                label: "导航",
                to: "website",
              },
              {
                html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} - PRESENT LanM Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // colorMode: {
      //   disableSwitch: true,
      //   defaultMode: "dark",
      // },
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
