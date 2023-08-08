import React, { useRef } from "react";
import clsx from "clsx";
import { motion, useScroll, useSpring } from "framer-motion";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import BlogPostItemContainer from "@theme/BlogPostItem/Container";
import BlogPostItemHeader from "@theme/BlogPostItem/Header";
import BlogPostItemContent from "@theme/BlogPostItem/Content";
import BlogPostItemFooter from "@theme/BlogPostItem/Footer";
import type { Props } from "@theme/BlogPostItem";
import styles from "./index.module.scss";

// apply a bottom margin in list view
function useContainerClassName() {
  const { isBlogPostPage } = useBlogPost();
  return !isBlogPostPage ? "blogPost-container margin-bottom--lg" : undefined;
}

export default function BlogPostItem({
  children,
  className,
}: Props): JSX.Element {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const containerClassName = useContainerClassName();
  return (
    <BlogPostItemContainer
      ref={ref}
      className={clsx(containerClassName, className)}
    >
      <BlogPostItemHeader />
      <figure className="progress">
        <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="indicator"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
      </figure>
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  );
}
