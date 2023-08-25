/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
import Heading from "@theme/Heading";
import MDXContent from "@theme/MDXContent";
import styles from "./index.module.scss";
import { Icon } from "@iconify/react";
import dayjs from "dayjs";
/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
function useSyntheticTitle() {
  const { metadata, frontMatter, contentTitle } = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === "undefined";
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}

function Spacer() {
  return <>{" | "}</>;
}

export default function DocItemContent({ children }) {
  const syntheticTitle = useSyntheticTitle();
  const { metadata } = useDoc();
  const frontData = metadata.frontMatter;
  console.log(metadata);
  const createDate = dayjs(frontData.date).format("YYYY/MM/DD");
  const weekDay = dayjs(frontData.date).day();

  const week = [
    { time: "星期日" },
    { time: "星期一" },
    { time: "星期二" },
    { time: "星期三" },
    { time: "星期四" },
    { time: "星期五" },
    { time: "星期六" },
  ];

  const weather = [
    {
      name: "雨",
      status: "mdi:weather-rainy",
    },
    {
      name: "阴",
      status: "mdi:weather-partly-cloudy",
    },
    {
      name: "晴",
      status: "mdi:weather-sunny",
    },
    {
      name: "雪",
      status: "mdi:weather-snowy",
    },
  ];

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, "markdown")}>
      {syntheticTitle && (
        <header className={styles.container}>
          <Heading as="h1">{syntheticTitle}</Heading>
          <div className={styles.info}>
            <div>{createDate}</div>
            <div className={styles.week}> {week[weekDay].time} </div>
            <Spacer />
            {frontData.weather ? (
              weather.map((item) => {
                if (item.name === frontData.weather)
                  return (
                    <div className={styles.weather}>
                      <Icon icon={item.status} color="#6F67FF" />
                      <span>{item.name}</span>
                    </div>
                  );
              })
            ) : (
              <Icon icon="mdi:emoticon-dead-outline" />
            )}
            <Spacer />
            <Icon icon="mdi:eye" />
            <span id="busuanzi_container_page_pv">
              <span id="busuanzi_value_page_pv"></span>
            </span>
          </div>
          <div>
            <hr />
          </div>
        </header>
      )}
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
