---
slug: node-start-with-project
title: 一键启动node项目和前端项目
data: 2023-02-09
authors: LanM
tags: [react, node，随笔]
---

关于如何一键启动 node 项目和前端项目的方法

<!-- truncate -->

### 一键启动 node 项目和前端项目

关键在于 concurrently

```jsx
npm i concurrently
```

在 package.json 里直接加入：
注意此处 nodemon 执行的是你存放 node 代码的地址

```jsx
"dev": "concurrently \"nodemon ./src/node/node.js\" \"npm run start\""
```

![image-20220316204205165](./img/node.png)
