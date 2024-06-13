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
      items: ["Study/Markdown笔记/introduction"],
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
          items: [
            "Life/Daily/workPlace",
            "Life/Daily/daybyday",
            "Life/Daily/aftervacation",
            "Life/Daily/anyang",
            "Life/Daily/cat",
          ],
        },
        {
          label: "思考",
          type: "category",
          items: [
            "Life/Think/lonely",
            "Life/Think/ordinary",
            "Life/Think/work",
          ],
        },
        {
          label: "攻略",
          type: "category",
          items: [
            "Life/Guide/house",
            "Life/Guide/dream",
            "Life/Guide/network",
            "Life/Guide/switch",
          ],
        },
      ],
    },
    {
      label: "记忆",
      type: "category",
      items: ["Memory/introduction", "Memory/memory1", "Memory/memory2"],
    },
    {
      label: "娱乐",
      type: "category",
      items: [
        "Game/introduction",
        "Game/gameRecommend",
        {
          label: "测评＆经历",
          type: "category",
          items: [
            "Game/Experience/csgo",
            "Game/Experience/apex",
            "Game/Experience/kingdom",
          ],
        },
      ],
    },
    {
      label: "LanMの画室",
      type: "category",
      items: [
        "LanMStudio/draw-1",
        "LanMStudio/draw-2",
        "LanMStudio/draw-3",
        "LanMStudio/draw-4",
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
        "LanMKitchen/cook5",
        "LanMKitchen/cook6",
        "LanMKitchen/cook7",
      ],
    },
  ],
};

module.exports = sidebars;
