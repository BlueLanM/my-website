/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  record: [
    "Study/introduction",

    {
      label: "Git",
      type: "category",
      link: {
        type: "generated-index",
      },
      items: ["Study/Git/git-record"],
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
  // life: ["Life/introduction"],
};

module.exports = sidebars;
