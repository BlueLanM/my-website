import React from "react";

import Translate, { translate } from "@docusaurus/Translate";

function NoteHeader() {
  const TITLE = translate({
    id: "theme.note.title",
    message: "留言板",
  });
  const DESCRIPTION = translate({
    id: "theme.note.description",
    message: "好耶",
  });

  return (
    <div>
      <section className="margin-top--lg margin-bottom--lg text--center">
        <h1>{TITLE}</h1>
        <p>{DESCRIPTION}</p>
      </section>
      <div>
        <p>
          <strong>在申请友链之前请先将本站加入贵站的友链中</strong>
        </p>
        <p>
          <strong>在下方留言后，待通过申请后会直接发送邮件</strong>
        </p>
      </div>
      <h3>本站信息</h3>
      <pre>
        <p>
          <strong>网站名称：LanM蓝莓Blog</strong>
        </p>
        <p>
          <strong>网站地址：https://lanm.love</strong>
        </p>
        <p>
          <strong>网站头像：https://lanm.love/img/3.ico</strong>
        </p>
        <div>
          <strong>网站描述：据说最高级的快乐有三种：自律，爱，创造。</strong>
        </div>
      </pre>
    </div>
  );
}

export default NoteHeader;
