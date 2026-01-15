// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const path = require("path");

/** @type {import('@docusaurus/types').Config} */
const config = {
	baseUrl: "/my-website/",
	deploymentBranch: "gh-pages",
	favicon: "img/favicon.ico",
	i18n: {
		defaultLocale: "zh",
		localeConfigs: {
			en: {
				htmlLang: "en-GB"
			}
		},
		locales: ["en", "zh"]
	},
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	organizationName: "BlueLanM",
	plugins: [
		"docusaurus-plugin-sass",
		path.resolve(__dirname, "./src/plugin/plugin-busuanzi"),
		path.resolve(__dirname, "./src/plugin/plugin-baidu-tongji"),
		path.resolve(__dirname, "./src/plugin/plugin-google"),
		path.resolve(__dirname, "./src/plugin/plugin-baidu-push"),

		[
			path.resolve(__dirname, "./src/plugin/plugin-content-blog"),

			{
				blogSidebarCount: 10,
				editLocalizedFiles: false,
				editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
					`https://github.com/BlueLanM/my-website/edit/master/${blogDirPath}/${blogPath}`,
				feedOptions: {
					title: "蓝莓",
					type: "all"
				},
				path: "blog",
				postsPerPage: 10,
				readingTime: ({ content, frontMatter, defaultReadingTime }) =>
					defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
				routeBasePath: "/",
				showReadingTime: true
			}
		],

		[
			"@docusaurus/plugin-ideal-image",
			{
				disableInDev: false
			}
		]
	],
	// themes: ["@docusaurus/theme-search-algolia"],
	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				// blog: {
				//   showReadingTime: true,
				//   // Please change this to your repo.
				//   // Remove this to remove the "edit this page" links.
				//   editUrl:
				//     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				// },
				blog: false,

				docs: {
					path: "docs",
					routeBasePath: "/docs",
					showLastUpdateTime: true,
					sidebarPath: "sidebars.ts"
				},
				gtag: {
					anonymizeIP: true,
					trackingID: "G-58V3HGPSD1"
				},
				sitemap: {
					changefreq: "daily",
					priority: 0.5
				},

				theme: {
					customCss: require.resolve("./src/css/custom.scss")
				}
			})
		]
	],

	projectName: "my-website",

	tagline: "蓝莓",

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			algolia: {
				apiKey: "2527b8673db145613ad39c1e5416b4cf",
				appId: "KFB5UP84UF",
				indexName: "lanm"
			},

			docs: {
				sidebar: {
					hideable: true
				}
			},
			footer: {

				copyright: "<span style='font-size:24px'>@LanM. All rights reserved.🚀</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"https://docusaurus.io/\"></a>",

				// copyright: `@${new Date().getFullYear()} LanM. All rights reserved.`,
				links: [
					// {
					//   title: "学习",
					//   items: [
					//     {
					//       label: "标签",
					//       to: "tags",
					//     },
					//     {
					//       label: "归档",
					//       to: "archive",
					//     },
					//     {
					//       label: "笔记",
					//       to: "docs/record/",
					//     },
					//   ],
					// },
					// {
					//   title: "社区",
					//   items: [
					//     {
					//       label: "关于我",
					//       href: "/about",
					//     },
					//     {
					//       label: "GitHub",
					//       href: "https://github.com/BlueLanM/my-website",
					//     },
					//     {
					//       label: "CSDN",
					//       href: "https://blog.csdn.net/BLUESKYwang66",
					//     },
					//     {
					//       label: "Twitter",
					//       href: "https://twitter.com/Jason__Wang_",
					//     },
					//   ],
					// },
					{
						// title: "Build with Docusaurus",
						items: [
							// {
							//   label: "项目",
							//   to: "project",
							// },
							// {
							//   label: "导航",
							//   to: "website",
							// },
							{
								html: "<span>Build with </span><img alt='brightgreen' src='https://img.shields.io/badge/-Docusaurus-38a737?style=flat&logo=docusaurus' style='vertical-align:sub'>"
							}
						]
					}
				],
				style: "light"
			},

			giscus: {
				category: "Comments",
				categoryId: "DIC_kwDOI4VNdc4CUC_9",
				crossorigin: "anonymous",
				emitMetadata: "0",
				inputPosition: "bottom",
				lang: "zh-CN",
				mapping: "pathname",
				reactionsEnabled: "1",
				repo: "BlueLanM/my-website",
				repoId: "R_kgDOI4VNdQ",
				strict: "0",
				theme: "preferred_color_scheme"
			},
			image: "img/docusaurus-social-card.jpg",
			navbar: {
				hideOnScroll: true,
				items: [
					{
						items: [
							{
								label: "标签",
								to: "tags"
							},
							{
								label: "归档",
								to: "archive"
							},
							{
								label: "笔记",
								to: "docs/record/"
							}
						],
						label: "学习",
						position: "right"
					},
					{
						label: "生活",
						position: "right",
						to: "docs/life/"
					},

					// { to: "/blog", label: "博客", position: "right" },
					{
						label: "项目",
						position: "right",
						to: "project"
					},
					{
						label: "留言板",
						position: "right",
						to: "notebook"
					},
					{
						label: "友链",
						position: "right",
						to: "friend"
					},
					{
						items: [
							{
								label: "赞助",
								to: "thanks"
							},
							{
								label: "组件库",
								to: "https://bluelanm.github.io/lanm-component/"
							},
							{
								label: "玩具库",
								to: "https://bluelanm.github.io/lanm-toy-library/"
							}
						],
						label: "更多",
						position: "right"
					},
					// {
					// 	label: "导航",
					// 	position: "right",
					// 	to: "website"
					// },
					{
						position: "left",
						type: "localeDropdown"
					},
					{
						"aria-label": "Bilibili",
						className: "header-bilibili-link",
						href: "https://space.bilibili.com/347207525",
						position: "right"
					},
					{
						// label: "⭐GitHub",
						"aria-label": "GitHub repository",

						className: "header-github-link",

						href: "https://github.com/BlueLanM/my-website",
						position: "right"
					},
					{
						"aria-label": "Steam",
						className: "header-steam-link",
						position: "right",
						to: "https://steamcommunity.com/profiles/76561198892079974/"
					},
					{
						className: "header-traval",
						html: "<img style='width:6rem;vertical-align: bottom;' alt='开往-友链接力' src='https://www.travellings.cn/assets/logo.gif'/>",
						position: "right",
						to: "https://www.travellings.cn/go.html"
						// html:`<img style='width:1.7rem;vertical-align: bottom;' src='https://www.travellings.cn/assets/travelling-light.png'/>`
					},
					{
						html: "<img src=\"https://foreverblog.cn/assets/logo/logo_en_default.png\" alt=\"\" style=\"width:auto;height:16px;vertical-align: middle;\" title=\"穿梭虫洞-随机访问十年之约友链博客\">",
						position: "right",
						to: "https://www.foreverblog.cn/go.html"
					}
				],
				logo: {
					alt: "蓝莓",
					src: "img/3.ico"
				},
				title: "LanM"
			},
			prism: {
				darkTheme: darkCodeTheme,
				theme: lightCodeTheme
			},

			// colorMode: {
			//   disableSwitch: true,
			//   defaultMode: "dark",
			// },
			socials: {
				cloudmusic: "https://music.163.com/#/user/home?id=428851176",
				csdn: "https://blog.csdn.net/BLUESKYwang66",
				github: "https://github.com/BlueLanM",
				qq: "https://wpa.qq.com/msgrd?v=3&amp;uin=2351406802&amp;site=qq",
				steam: "https://steamcommunity.com/profiles/76561198892079974/",
				twitter: "https://twitter.com/Jason__Wang_",
				zhihu: "https://www.zhihu.com/people/lanm-82-86"
			}
		}),
	title: "蓝莓のBlog",

	url: "https://bluelanm.github.io"
};

module.exports = config;