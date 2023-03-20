/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  record: [
    "Study/introduction",
    {
      label: "IQ",
      type: "category",
      link: {
        type: "generated-index",
      },
      items: ["Study/IQ/IQ"],
    },
    {
      label: "Git",
      type: "category",
      link: {
        type: "generated-index",
      },
      items: ["Study/Git/git-record"],
    },
    {
      label: "Topic",
      type: "category",
      link: {
        type: "generated-index",
      },
      items: [
        "Study/Topic/http",
        "Study/Topic/window_onload",
        "Study/Topic/事件委托",
      ],
    },
    {
      label: "React",
      type: "category",
      link: {
        type: "generated-index",
      },
      items: ["Study/React/create-react-app"],
    },
    {
      label: "Collect_questions",
      type: "category",
      link: {
        type: "generated-index",
      },
      items: ["Study/Collect_questions/console"],
    },
    {
      label: "TypeScript",
      type: "category",
      link: {
        type: "generated-index",
      },
      items: ["Study/TypeScript/typescript-type"],
    },

    {
      label: "Markdown",
      type: "category",
      link: {
        type: "generated-index",
      },
      items: [
        "Study/Markdown笔记/markdown-title",
        "Study/Markdown笔记/markdown-list",
        "Study/Markdown笔记/markdown-note",
        "Study/Markdown笔记/markdown-Hyperlink",
        "Study/Markdown笔记/markdown-code",
      ],
    },
  ],
  life: [
    "Life/introduction",
    {
      label: "享受孤独",
      type: "category",
      items: ["Life/lonely"],
    },
  ],
};

module.exports = sidebars;
