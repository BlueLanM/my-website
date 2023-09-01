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
      items: ["Study/IQ/IQ-CSS", "Study/IQ/IQ-JavaScript"],
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
    {
      label: "生活",
      type: "category",
      items: [
        "Life/introduction",
        {
          label: "日常",
          type: "category",
          items: ["Life/Daily/workPlace", "Life/Daily/daybyday"],
        },
        {
          label: "思考",
          type: "category",
          items: ["Life/Think/lonely", "Life/Think/ordinary"],
        },
        {
          label: "攻略",
          type: "category",
          items: ["Life/Guide/house", "Life/Guide/dream", "Life/Guide/network"],
        },
      ],
    },
    {
      label: "回忆",
      type: "category",
      items: ["Memory/introduction"],
    },
    {
      label: "娱乐",
      type: "category",
      items: [
        "Game/introduction",
        "Game/gameRecommend",
        "Game/csgo",
        "Game/kingdom",
      ],
    },
    {
      label: "LanMの厨房",
      type: "category",
      items: [
        "LanMKitchen/cook1",
        "LanMKitchen/cook2",
        "LanMKitchen/cook3",
        "LanMKitchen/cook4",
      ],
    },
  ],
};

module.exports = sidebars;
