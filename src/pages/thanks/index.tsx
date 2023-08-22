import React from "react";
import styles from "./index.module.scss";
import Translate, { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";

const TITLE = translate({
  id: "theme.thanks.title",
  message: "赞助",
});
const DESCRIPTION = translate({
  id: "theme.thanks.description",
  message: "赠人玫瑰，手有余香 🌹",
});
const CODE = translate({
  id: "theme.thanks.code",
  message:
    "如果我写的文章和所做的开源贡献对你有帮助，欢迎赞助。你的一点心意就是对我最大的肯定和鼓励。",
});
const info = translate({
  id: "theme.thanks.info",
  message: "所获赞助费用将用于域名续费",
});

function ThanksHeader() {
  return (
    <div>
      <section className="margin-top--lg margin-bottom--lg text--center">
        <h1>{TITLE}</h1>
        <p>{DESCRIPTION}</p>
        <p>{info}</p>
        <p>{CODE}</p>
      </section>
    </div>
  );
}

function ThanksRadio() {
  return <div></div>;
}

function Thanks() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <div className={styles.container}>
          <ThanksHeader />
        </div>
      </main>
    </Layout>
  );
}

export default Thanks;
