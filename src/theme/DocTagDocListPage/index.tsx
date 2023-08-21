/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  usePluralForm,
} from "@docusaurus/theme-common";
import Translate, { translate } from "@docusaurus/Translate";
import { motion, Variants } from "framer-motion";
import Layout from "@theme/Layout";
import SearchMetadata from "@theme/SearchMetadata";
import type { Props } from "@theme/DocTagDocListPage";

import styles from "./index.module.scss";

// Very simple pluralization: probably good enough for now
function useNDocsTaggedPlural() {
  const { selectMessage } = usePluralForm();
  return (count: number) =>
    selectMessage(
      count,
      translate(
        {
          id: "theme.docs.tagDocListPageTitle.nDocsTagged",
          description:
            'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: "One doc tagged|{count} docs tagged",
        },
        { count }
      )
    );
}

function DocSideBar({ tag }) {
  const variants: Variants = {
    from: { opacity: 0.01, y: 50 },
    to: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
        bounce: 0.2,
        duration: 0.3,
        delay: i * 0.1,
      },
    }),
  };
  return (
    <ul className={styles.tagUl}>
      {tag.map((item: any, i: any) => (
        <motion.li
          key={item.id}
          custom={i}
          initial="from"
          animate="to"
          variants={variants}
          viewport={{ once: true, amount: 0.8 }}
        >
          <Link to={item.permalink} className={styles.tagList}>
            {item.title}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}

function DocItem({ doc }: { doc: Props["tag"]["items"][number] }): JSX.Element {
  return (
    <article className="blogPost-container margin-bottom--lg">
      <header>
        <Link to={doc.permalink}>
          <h2>{doc.title}</h2>
        </Link>
      </header>
      <div className="markdown">
        {doc.description && <p>{doc.description}</p>}
      </div>
    </article>
  );
}

export default function DocTagDocListPage({ tag }: Props): JSX.Element {
  const nDocsTaggedPlural = useNDocsTaggedPlural();

  const title = translate(
    {
      id: "theme.docs.tagDocListPageTitle",
      description: "The title of the page for a docs tag",
      message: '{nDocsTagged} with "{tagName}"',
    },
    { nDocsTagged: nDocsTaggedPlural(tag.count), tagName: tag.label }
  );

  const variants: Variants = {
    from: { opacity: 0.01, y: 50 },
    to: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
        bounce: 0.2,
        duration: 0.3,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.docsPages,
        ThemeClassNames.page.docsTagDocListPage
      )}
    >
      <PageMetadata title={title} />
      <SearchMetadata tag="doc_tag_doc_list" />

      <Layout>
        <div className="container margin-vert--lg">
          <div className={styles.row}>
            {/* <div className="row"> */}
            <DocSideBar tag={tag.items} />

            <main className="col col--8 ">
              <header className="margin-bottom--xl">
                <h1>{title}</h1>
                <Link href={tag.allTagsPath}>
                  <Translate
                    id="theme.tags.tagsPageLink"
                    description="The label of the link targeting the tag list page"
                  >
                    View All Tags
                  </Translate>
                </Link>
              </header>

              <section className="margin-vert--lg">
                {tag.items.map((doc, i) => (
                  <motion.li
                    key={doc.id}
                    custom={i}
                    initial="from"
                    animate="to"
                    variants={variants}
                    viewport={{ once: true, amount: 0.8 }}
                  >
                    <DocItem doc={doc} />
                  </motion.li>
                ))}
              </section>
            </main>
          </div>
        </div>
      </Layout>
    </HtmlClassNameProvider>
  );
}
