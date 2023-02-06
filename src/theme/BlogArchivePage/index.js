import React from "react";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import { PageMetadata } from "@docusaurus/theme-common";
import styles from "./styles.module.css";
import Layout from "@theme/Layout";
import dayjs from "dayjs";
function Year({ posts }) {
  return (
    <>
      <ul className={styles.archiveList}>
        {posts.map((post) => (
          <li key={post.metadata.permalink} className={styles.archiveItem}>
            <Link to={post.metadata.permalink}>
              <time className={styles.archiveTime}>
                {dayjs(post.metadata.date).format("MM-DD")}
              </time>
              <span>{post.metadata.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
function YearsSection({ years }) {
  return (
    <section className="margin-vert--lg">
      <div className="container">
        <div className="row">
          {years.map((_props, idx) => (
            <div key={idx} className="col col--4 margin-vert--lg">
              <Year {..._props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function listPostsByYears(blogPosts) {
  const postsByYear = blogPosts.reduceRight((posts, post) => {
    const year = post.metadata.date.split("-")[0];
    const yearPosts = posts.get(year) ?? [];
    return posts.set(year, [post, ...yearPosts]);
  }, new Map());
  return Array.from(postsByYear, ([year, posts]) => ({
    year,
    posts,
  }));
}
export default function BlogArchive({ archive }) {
  const title = translate({
    id: "theme.blog.archive.title",
    message: "Archive",
    description: "The page & hero title of the blog archive page",
  });
  const description = translate({
    id: "theme.blog.archive.description",
    message: "Archive",
    description: "The page & hero description of the blog archive page",
  });
  // const years = listPostsByYears(archive.blogPosts);
  return (
    <>
      <PageMetadata title={title} description={description} />
      <Layout>
        <header className="hero hero--primary">
          <div className="container">
            <h1 className="hero__title">{title}</h1>
            <p className="hero__subtitle">{description}</p>
          </div>
        </header>
        {/* <main>{years.length > 0 && <YearsSection years={years} />}</main> */}
      </Layout>
    </>
  );
}
