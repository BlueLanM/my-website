import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "使用方便",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>Docusaurus 是从头开始设计的，易于安装并用于让您的网站快速启动和运行。</>
    ),
  },
  {
    title: "专注于重要的事情",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>Docusaurus 让您专注于文档的编写。</>,
  },
  {
    title: "由React驱动",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        通过重用 React 扩展或自定义您的网站布局。Docusaurus
        可以在复用相同的页眉和页脚的同时进行扩展。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
