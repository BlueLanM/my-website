import React from "react";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import { Friends } from "@site/data/friend";

import styles from "./styles.module.css";

const TITLE = translate({
  id: "theme.friend.title",
  message: "",
});
const DESCRIPTION = translate({
  id: "theme.friend.description",
  message: "以下项目均由本人开发，部分开源。",
});

function FriendHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <h1>{TITLE}</h1>
      <p>{DESCRIPTION}</p>
      <a
        className="button button--primary"
        // href={GITHUB_URL}
        target="_blank"
        rel="noreferrer"
      >
        <Translate id="showcase.header.button">前往 Github 克隆项目</Translate>
      </a>
    </section>
  );
}

function FriendCard() {}

function Friend() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <FriendHeader />
      </main>
    </Layout>
  );
}

export default Friend;
