import React from "react";
import clsx from "clsx";
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import MDXContent from "@theme/MDXContent";
import TOC from "@theme/TOC";
import Comment from "@site/src/components/Comment";
import type { Props } from "@theme/MDXPage";

import styles from "./styles.module.css";

export default function MDXPage(props: Props): JSX.Element {
  const { content: MDXPageContent } = props;
  const {
    metadata: { title, description, frontMatter },
  } = MDXPageContent;
  const { wrapperClassName, hide_table_of_contents: hideTableOfContents } =
    frontMatter;

  return (
    <HtmlClassNameProvider
      className={clsx(
        wrapperClassName ?? ThemeClassNames.wrapper.mdxPages,
        ThemeClassNames.page.mdxPage
      )}
    >
      <PageMetadata title={title} description={description} />
      <Layout>
        <main className="container container--fluid margin-vert--lg">
          <div className={clsx("row", styles.mdxPageWrapper)}>
            <div className={clsx("col", "col--6", styles.mdxContainer)}>
              <MDXContent>
                <MDXPageContent />
              </MDXContent>
            </div>

            {!hideTableOfContents && MDXPageContent.toc && (
              <div className="col col--2">
                <TOC
                  toc={MDXPageContent.toc}
                  minHeadingLevel={frontMatter.toc_min_heading_level}
                  maxHeadingLevel={frontMatter.toc_max_heading_level}
                />
              </div>
            )}
          </div>
          <div style={{ marginTop: "2rem", padding: "0 10rem" }}>
            <Comment />
          </div>
        </main>
      </Layout>
    </HtmlClassNameProvider>
  );
}
