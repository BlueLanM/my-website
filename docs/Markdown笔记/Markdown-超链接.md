---
sidebar_position: 4
---

:::tip
Markdown 支持两种超链接的定义方式：行内定义和全局声明。不管哪种方式，其都是由 「中括号 []」来声明。<br/>
如果需要创建行内链接的创建方式，用一对紧跟「中括号 []」的「小括号 ()」描述目标链接，小括号内不仅可以包含链接的地址，也可以用「引号 ""」设定链接的标题。
:::

## 1. 行内方式定义超链接细节

> <font color="red">当我们需要为超链接设置目标地址和标题时，可在中括号后增加小括号的形式实现 [text](url title)</font>

示例: [Docusaurus 官网](https://docusaurus.io/zh-CN/)

```jsx
[Docusaurus 官网](https://docusaurus.io/zh-CN/)
```

## 2. 超链接细节的全局声明

> <font color="red">当一个超链接在文章中反复出现时，可以使用全局声明的形式，减少文章编写的工作量。</font>

示例: 点击此处链接[Docusaurus 官网][lanm]就可以到达[Docusaurus 官网][lanm]啦 [🥳][lanm]

[lanm]: https://docusaurus.io/zh-CN/

```jsx
点击此处链接[Docusaurus 官网][lanm]就可以到达[Docusaurus 官网][lanm]啦 [🥳][lanm]

[lanm]: https://docusaurus.io/zh-CN/
```
