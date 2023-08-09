import React from "react";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";

const TITLE = translate({
  id: "theme.friend.title",
  message: "左邻右舍",
});
const DESCRIPTION = translate({
  id: "theme.friend.description",
  message: "海内存知己，天涯若比邻",
});

function NoteBook() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg"></main>
    </Layout>
  );
}

export default NoteBook;
