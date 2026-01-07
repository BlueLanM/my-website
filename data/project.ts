export const projects: Project[] = [
	{
		description: "基于Docusaurus v2 静态网站生成器实现个人博客",
		preview: "/my-website/img/project/blog2.0.png",
		source: "https://github.com/BlueLanM/my-website",
		tags: ["opensource", "design", "favorite", "personal"],
		title: "蓝莓的小站",
		type: "web",
		website: "https://bluelanm.github.io/my-website/"
	},
	{
		description: "基于storyBook开发的个人组件库",
		preview: "/my-website/img/project/component.png",
		source: "https://github.com/BlueLanM/lanm-component",
		tags: ["opensource", "design", "favorite", "personal"],
		title: "蓝莓的组件库",
		type: "web",
		website: "https://bluelanm.github.io/lanm-component"
	},
	{
		description: "个人CSS收集库,基于Vite",
		preview: "/my-website/img/project/toy2.0.png",
		source: "https://github.com/BlueLanM/lanm-toy-library",
		tags: ["opensource", "design", "favorite", "personal"],
		title: "蓝莓的CSS玩具库",
		type: "web",
		website: "https://bluelanm.github.io/lanm-toy-library/"
	},
	{
		description: "实现基于Nodejs增删改查接口",
		preview: "/my-website/img/project/nodejs.png",
		source: "https://github.com/BlueLanM/NodeJs",
		tags: ["opensource", "design", "personal"],
		title: "Nodejs",
		type: "other",
		website: "https://github.com/BlueLanM/NodeJs"
	},
	{
		description: "实现对数据里的模型管理",
		preview: "/my-website/img/project/dataModal.png",
		tags: ["design", "large"],
		title: "数据填报平台",
		type: "personal",
		website: ""
	},
	{
		description: "前台页面展示",
		preview: "/my-website/img/project/home.png",
		tags: ["design", "large"],
		title: "数据填报前台",
		type: "personal",
		website: ""
	},
	{
		description: "一带一路文献库",
		preview: "/my-website/img/project/bazhuayu.png",
		tags: ["design", "large"],
		title: "八爪鱼数据中台",
		type: "personal",
		website: ""
	}
];

export interface Tag {
	label: string
	description: string
	color: string
}

export type TagType =
  | "favorite"
  | "opensource"
  | "product"
  | "design"
  | "large"
  | "personal";

export type ProjectType = "personal" | "web" | "app" | "toy" | "other";

export interface Project {
	title: string
	description: string
	preview?: any
	website?: string
	source?: string | null
	tags: TagType[]
	type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
	design: {
		color: "#a44fb7",
		description: "设计漂亮的网站!",
		label: "设计"
	},
	favorite: {
		color: "#e9669e",
		description: "我最喜欢的网站，一定要去看看!",
		label: "喜爱"
	},
	large: {
		color: "#8c2f00",
		description: "大型项目，原多于平均数的页面",
		label: "大型"
	},
	opensource: {
		color: "#39ca30",
		description: "开源项目可以提供灵感!",
		label: "开源"
	},
	personal: {
		color: "#12affa",
		description: "个人项目",
		label: "个人"
	},
	product: {
		color: "#dfd545",
		description: "与产品相关的项目!",
		label: "产品"
	}
};

export const TagList = Object.keys(Tags) as TagType[];

export const groupByProjects = projects.reduce<Record<ProjectType, Project[]>>((group, project) => {
	const { type } = project;
	group[type] = group[type] ?? [];
	group[type].push(project);
	return group;
}, {});