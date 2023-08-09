export const Friends: Friend[] = [
  {
    title: "Kurococ Liu",
    description: "被子外面很危险！",
    website: "https://blog.lkurococ.top/",
    avatar: "https://cdn.jsdelivr.net/gh/6isixi/imgcloud/avatar.jpg",
  },
  {
    title: "matto",
    description: "天天摸鱼身体棒~",
    website: "https://www.matto.top",
    avatar: "https://avatars.githubusercontent.com/u/54560462?v=4",
  },
];

export type Friend = {
  title: string;
  description: string;
  website: string;
  avatar?: any;
};
