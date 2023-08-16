import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import Comment from "@site/src/components/Comment";
import styles from "./index.module.scss";

import NoteHeader from "./component/NoteHeader";

function NoteBook() {
  return (
    <Layout>
      <main className="margin-vert--lg">
        <div className={styles.container}>
          <NoteHeader />
          <Comment />
        </div>
      </main>
    </Layout>
  );
}

export default NoteBook;
