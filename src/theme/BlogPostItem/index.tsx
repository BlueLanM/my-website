import React, { useRef, useState } from "react";
import clsx from "clsx";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  Variants,
} from "framer-motion";
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
  const [num, setNum] = useState<any>("👇");
  const [desc, setDesc] = useState<any>();
  const { scrollYProgress } = useScroll({
    container: ref,
    // offset: ["end end", "start start"],
  });
  const time = useSpring(scrollYProgress, {
    stiffness: 700,
    damping: 50,
  });

  const variants: Variants = {
    from: { opacity: 0.01, y: 50 },
    to: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    }),
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    latest != 0 ? setNum(Math.floor(100 * latest) + "%") : setNum("👇");
    if (Math.floor(100 * latest) == 100) {
      setDesc("到底啦~");
    } else {
      setDesc("");
    }
  });
  console.log(window.location.pathname.includes("/tags"));

  const containerClassName = useContainerClassName();
  return (
    <BlogPostItemContainer
      ref={ref}
      className={clsx(containerClassName, className)}
    >
      <BlogPostItemHeader />

      {window.location.pathname == "/" ||
      window.location.pathname.includes("/tags") ? (
        <></>
      ) : (
        <>
          <figure className={styles.progress}>
            <span
              className={num == "👇" ? styles.num0 : styles.number}
              style={{ left: num == "100%" ? "-55px" : "" }}
            >
              {num}
            </span>

            {desc && (
              <motion.div variants={variants} initial="from" animate="to">
                <span className={desc ? styles.desc : ""}>{desc}</span>
              </motion.div>
            )}

            <svg
              id={styles.progress}
              width="150"
              height="150"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className={styles.bg}
              />
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className={styles.indicator}
                style={{ pathLength: time }}
              />
            </svg>
          </figure>
        </>
      )}
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  );
}
