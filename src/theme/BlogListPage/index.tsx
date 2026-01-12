import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Link from "@docusaurus/Link";
import Image from "@theme/IdealImage";
import {
	HtmlClassNameProvider,
	PageMetadata,
	ThemeClassNames
} from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BackToTopButton from "@theme/BackToTopButton";
import type { Props } from "@theme/BlogListPage";
import BlogListPaginator from "@theme/BlogListPaginator";
import type { Props as BlogPostItemsProps } from "@theme/BlogPostItems";
import BlogPostItems from "@theme/BlogPostItems";
import Layout from "@theme/Layout";
import SearchMetadata from "@theme/SearchMetadata";
import CodeBlock from "@theme/CodeBlock";
import { motion } from "framer-motion";
import useGlobalData from "@docusaurus/useGlobalData";
import BlogInfo from "../../../src/components/BlogInfo";
import Hero from "../../../src/components/Hero";
import { type BlogPost } from "../../../src/plugin/plugin-content-blog/src/types";
import { useViewType } from "./useViewType";
import Translate from "@docusaurus/Translate";
import { Icon } from "@iconify/react";
import { Fade } from "react-awesome-reveal";
import styles from "./index.module.scss";

function SiteInfo() {
	return (
		<div className={styles.siteInfo}>
			<CodeBlock language="jsx">
				<div className="bloghome__posts-card margin-bottom--md">
					<div className="row bloginfo__card">
						<div>
              本站总访问量 <span id="busuanzi_value_site_pv"></span> 次
						</div>
						<div>
              已有 <span id="busuanzi_value_site_uv"></span> 人在此留下脚印
						</div>
					</div>
				</div>
			</CodeBlock>
		</div>
	);
}

function BlogListPageMetadata(props: Props): JSX.Element {
	const { metadata } = props;
	const {
		siteConfig: { title: siteTitle }
	} = useDocusaurusContext();
	const { blogDescription, blogTitle, permalink } = metadata;
	const isBlogOnlyMode = !permalink.includes("page");
	const title = isBlogOnlyMode ? "" : blogTitle;

	return (
		<>
			<PageMetadata title={title} description={blogDescription} />
			<SearchMetadata tag="blog_posts_list" />
		</>
	);
}

function ViewTypeSwitch({ viewType, toggleViewType }: any): JSX.Element {
	return (
		<div className="bloghome__swith-view">
			<Icon
				icon="ph:list-fill"
				width="24"
				height="24"
				onClick={() => toggleViewType("list")}
				color={viewType === "list" ? "var(--ifm-color-primary)" : "#ccc"}
			/>
			<Icon
				icon="ph:grid-four"
				width="24"
				height="24"
				onClick={() => toggleViewType("grid")}
				color={viewType === "grid" ? "var(--ifm-color-primary)" : "#ccc"}
			/>
			<Icon
				icon="ph:columns"
				width="24"
				height="24"
				onClick={() => toggleViewType("card")}
				color={viewType === "card" ? "var(--ifm-color-primary)" : "#ccc"}
			/>
		</div>
	);
}

function BlogPostGridItems({ items }: BlogPostItemsProps): JSX.Element {
	return (
		<>
			{items.map(({ content: BlogPostContent }, index) => {
				const { metadata: blogMetaData, frontMatter } = BlogPostContent;

				const { title } = frontMatter;
				const { permalink, date, tags } = blogMetaData;
				const dateObj = new Date(date);
				const dateString = `${dateObj.getFullYear()}-${(
					"0"
          + (dateObj.getMonth() + 1)
				).slice(-2)}-${("0" + dateObj.getDate()).slice(-2)}`;
				console.log(blogMetaData);

				return (
					<div className="post__list-item" key={blogMetaData.permalink}>
						<Link to={permalink} className="post__list-title">
							{title}
						</Link>
						<div className="post__list-tags">
							{tags.length > 0
                && tags
                	.slice(0, 2)
                	.map(({ label, permalink: tagPermalink }, index) => (
                		<Link
                			key={tagPermalink}
                			className={`post__tags ${
                				index < tags.length ? "margin-right--sm" : ""
                			}`}
                			to={tagPermalink}
                			style={{ fontSize: "0.75em", fontWeight: 500 }}
                		>
                			{label}
                		</Link>
                	))}
						</div>
						<div className="post__list-date">{dateString}</div>
					</div>
				);
			})}
		</>
	);
}

function BlogRecommend({
	isPaginated,
	isCardView
}: {
	isPaginated: boolean
	isCardView: boolean
}): JSX.Element {
	const globalData = useGlobalData();
	const blogPluginData = globalData?.["docusaurus-plugin-content-blog"]?.default as any;

	const blogData = blogPluginData?.blogs as BlogPost[];
	const recommendedPosts = blogData
		.filter((b) => (b.metadata.frontMatter.sticky as number) > 0)
		.map((b) => b.metadata)
		.sort(
			(a, b) =>
				(a.frontMatter.sticky as number) - (b.frontMatter.sticky as number)
		)
		.slice(0, 8);

	if (recommendedPosts.length === 0) {
		return <></>;
	}

	return (
		<>
			<div className="container-wrapper">
				<div
					className="container padding-vert--sm transition"
					style={!isCardView ? { maxWidth: 1200 } : {}}
				>
					{!isPaginated && (
						<h2 className="blog__section-title">
							<Translate id="theme.blog.title.recommend">推荐阅读</Translate>
						</h2>
					)}
					<div className="row">
						<div className="col col--12">
							<div className="bloghome__posts">
								<ul className="blog__recommend">
									<Fade direction="up" duration={800} triggerOnce={true}>
										<Swiper
											spaceBetween={30}
											slidesPerGroup={1}
											slidesPerView={1}
											loop={true}
											speed={5000}
											autoplay={{
												delay: 0,
												disableOnInteraction: false,
												reverseDirection: true
											}}
											freeMode={true}
											modules={[Autoplay, Navigation, FreeMode]}
											breakpoints={{
												768: {
													slidesPerView: 2,
													spaceBetween: 50
												}
											}}
										>
											{recommendedPosts.map((post) => {
												return (
													<SwiperSlide key={post.permalink}>
														<div className={clsx("card")}>
															{post.frontMatter.image && (
																<div className={clsx("card__image")}>
																	<Image
																		src={post.frontMatter.image}
																		alt={post.title}
																		img={""}
																	/>
																</div>
															)}
															<div className="card__body">
																<h4>
																	<Link href={post.permalink}>
																		{post.title}
																	</Link>
																</h4>
																<p>{post.description}</p>
															</div>
														</div>
													</SwiperSlide>
												);
											})}
										</Swiper>
									</Fade>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

function BlogListPageContent(props: Props) {
	const { metadata, items } = props;

	const ref = React.useRef<HTMLDivElement>(null);
	const isBlogOnlyMode = !metadata.permalink.includes("page");
	const isPaginated = metadata.page > 1;

	const { viewType, toggleViewType } = useViewType();
	const [loading, setLoading] = useState(true);

	const isCardView = viewType === "card";
	const isListView = viewType === "list";
	const isGridView = viewType === "grid";

	useEffect(() => {
		if (loading) {
			setTimeout(() => {
				setLoading(false);
			}, 2000);
		}
	}, [loading]);

	return loading
		? <div className={styles.blog_list}>
			<div className={styles.blog_list_content}>
				{/* 旋转环动画 */}
				<div className={styles.blog_list_spinner}>
					<div className={styles.blog_list_spinner_ring}></div>
					<div className={styles.blog_list_spinner_ring}></div>
					<div className={styles.blog_list_spinner_ring}></div>
				</div>

				{/* Loading文字 */}
				<div className={styles.blog_list_text}>LOADING</div>

				{/* 进度条 */}
				<div className={styles.blog_list_progress}>
					<div className={styles.blog_list_progress_bar}></div>
				</div>
			</div>
		</div>
		: (
			<Layout wrapperClassName="blog=-list__page">
				{!isPaginated && isBlogOnlyMode && <Hero />}
				<BackToTopButton />

				{/* 推荐阅读 */}
				{!isPaginated && isBlogOnlyMode && (
					<BlogRecommend isPaginated={isPaginated} isCardView={isCardView} />
				)}

				{/* 最新博客 */}
				<div className="container-wrapper">
					<div
						className="container padding-vert--sm"
						style={!isCardView ? { maxWidth: 1200 } : {}}
					>
						<motion.main ref={ref} className="margin-vert--md">
							{!isPaginated && (
								<h2 className="blog__section-title">
									<Translate id="theme.blog.title.new">最新博客</Translate>
								</h2>
							)}
							<div className="row">
								<div className={"col col--12"}>
									<ViewTypeSwitch
										viewType={viewType}
										toggleViewType={toggleViewType}
									/>
								</div>
							</div>
							<div className="row">
								{/* {isCardView && (
                <motion.div
                  drag
                  dragConstraints={ref}
                  className={styles.dragBox}
                >
                  <SiteInfo />
                </motion.div>
              )} */}

								<div
									className={isCardView ? "col col--9" : "col col--12"}
									style={{ transition: "all 0.3s ease" }}
								>
									<div className="bloghome__posts">
										{(isListView || isCardView) && (
											<div className="bloghome__posts-list">
												<BlogPostItems items={items} />
											</div>
										)}
										{isGridView && (
											<div className="bloghome__posts-grid">
												<BlogPostGridItems items={items} />
											</div>
										)}
										<BlogListPaginator metadata={metadata} />
									</div>
									{/* <div className="bloghome__posts-grid">
                  <BlogPostGridItems items={items} />
                </div> */}
								</div>

								{isCardView && <BlogInfo />}
							</div>
						</motion.main>
					</div>
				</div>
			</Layout>
		);
}

export default function BlogListPage(props: Props): JSX.Element {
	return (
		<HtmlClassNameProvider
			className={clsx(
				ThemeClassNames.wrapper.blogPages,
				ThemeClassNames.page.blogListPage
			)}
		>
			<BlogListPageMetadata {...props} />

			<BlogListPageContent {...props} />
		</HtmlClassNameProvider>
	);
}