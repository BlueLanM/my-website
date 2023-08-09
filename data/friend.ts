export const Friends: Friend[] = [
  {
    title: "Kurococ Liu",
    description: "被子外面很危险！",
    website: "https://blog.lkurococ.top/",
    avatar: "https://cdn.jsdelivr.net/gh/6isixi/imgcloud/avatar.jpg",
  },
];

export type Friend = {
  title: string;
  description: string;
  website: string;
  avatar?: any;
};
