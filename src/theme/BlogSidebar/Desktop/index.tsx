import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import type { Props } from "@theme/BlogSidebar/Desktop";
import { motion, Variants } from "framer-motion";
import styles from "./styles.module.css";

export default function BlogSidebarDesktop({ sidebar }: Props): JSX.Element {
  const variants: Variants = {
    from: { opacity: 0.01, y: 50 },
    to: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200,
        bounce: 1,

        delay: i * 0.1,
      },
    }),
  };
  const title = translate({
    id: "theme.blog.sidebar.navAriaLabel",
    message: "Blog recent posts navigation",
    description: "The ARIA label for recent posts in the blog sidebar",
  });
  return (
    <aside className="col col--2">
      <nav className={clsx(styles.sidebar, "thin-scrollbar")}>
        <div className={clsx(styles.sidebarItemTitle, "margin-bottom--md")}>
          {title}
        </div>
        <ul className={clsx(styles.sidebarItemList, "clean-list")}>
          {sidebar.items.map((item, i) => (
            <motion.li
              key={item.permalink}
              className={styles.sidebarItem}
              custom={i}
              initial="from"
              animate="to"
              variants={variants}
              viewport={{ once: true, amount: 0.8 }}
            >
              <Link
                isNavLink
                to={item.permalink}
                className={styles.sidebarItemLink}
                activeClassName={styles.sidebarItemLinkActive}
              >
                {item.title}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
