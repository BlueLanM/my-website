---
id: markdown-code
slug: /markdown-code
title: Markdown-代码块
date: 2023-02-07
authors: LanM
tags: [Markdown]
keywords: [Markdown]
sidebar_position: 5
---

:::tip
预格式化代码块主要用于在 Markdown 文档中显示源代码风格的内容。<br/>
相比普通的文本段落，代码块可以保留文字内容的多行换行、缩进等格式。
:::

## 代码块

> <font color='red'>你可以在语言后添加 title（记得在语言和 title 之间加一个空格）来设置标题。</font>

````
```jsx title='HelloCodeTitle.js'
function HelloCodeTitle(props) {
  return <h1>你好，{props.name}</h1>;
}
```
````

```jsx title='HelloCodeTitle.js'
function HelloCodeTitle(props) {
  return <h1>你好，{props.name}</h1>;
}
```

> <font color='red'>在这种方式下，我们还可以声明代码的高亮样式，方法是在首行的「```」 后面加入不同源代码语言的标记</font>

```c++
pubic static void main(String[] args) {
  System.out.println("Hello world");
}
```
