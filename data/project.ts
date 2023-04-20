export const projects: Project[] = [
  {
    title: "蓝莓的小站",
    description: "基于Docusaurus v2 静态网站生成器实现个人博客",
    preview: "/img/project/blog2.0.png",
    website: "https://lanm.love",
    source: "https://github.com/BlueLanM/my-website",
    tags: ["opensource", "design", "favorite", "personal"],
    type: "web",
  },
  {
    title: "蓝莓的组件库",
    description: "基于storyBook开发的个人组件库",
    preview: "/img/project/component.png",
    website: "https://component.lanm.love/",
    source: "https://github.com/BlueLanM/lanm-component",
    tags: ["opensource", "design", "favorite", "personal"],
    type: "web",
  },
  {
    title: "蓝莓的CSS玩具库",
    description: "个人CSS收集库,基于Vite",
    preview: "/img/project/toy2.0.png",
    website: "https://tools.lanm.love",
    source: "https://github.com/BlueLanM/lanm-toy-library",
    tags: ["opensource", "design", "favorite", "personal"],
    type: "web",
  },
  {
    title: "Nodejs",
    description: "实现基于Nodejs增删改查接口",
    preview: "/img/project/nodejs.png",
    website: "https://github.com/BlueLanM/NodeJs",
    source: "https://github.com/BlueLanM/NodeJs",
    tags: ["opensource", "design", "personal"],
    type: "other",
  },
  {
    title: "数据填报平台",
    description: "实现对数据里的模型管理",
    preview: "/img/project/dataModal.png",
    website: "",
    tags: ["design", "large"],
    type: "personal",
  },
  {
    title: "数据填报前台",
    description: "前台页面展示",
    preview: "/img/project/home.png",
    website: "",
    tags: ["design", "large"],
    type: "personal",
  },
];

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | "favorite"
  | "opensource"
  | "product"
  | "design"
  | "large"
  | "personal";

export type ProjectType = "personal" | "web" | "app" | "toy" | "other";

export type Project = {
  title: string;
  description: string;
  preview?: any;
  website?: string;
  source?: string | null;
  tags: TagType[];
  type: ProjectType;
};

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: "喜爱",
    description: "我最喜欢的网站，一定要去看看!",
    color: "#e9669e",
  },
  opensource: {
    label: "开源",
    description: "开源项目可以提供灵感!",
    color: "#39ca30",
  },
  product: {
    label: "产品",
    description: "与产品相关的项目!",
    color: "#dfd545",
  },
  design: {
    label: "设计",
    description: "设计漂亮的网站!",
    color: "#a44fb7",
  },
  large: {
    label: "大型",
    description: "大型项目，原多于平均数的页面",
    color: "#8c2f00",
  },
  personal: {
    label: "个人",
    description: "个人项目",
    color: "#12affa",
  },
};

export const TagList = Object.keys(Tags) as TagType[];

export const groupByProjects = projects.reduce((group, project) => {
  const { type } = project;
  group[type] = group[type] ?? [];
  group[type].push(project);
  return group;
}, {} as Record<ProjectType, Project[]>);
