---
id: window_onload
slug: /window_onload
title: window.onload和$(document).ready
date: 2023-03-03
authors: LanM
tags: [JavaScript, Jquery]
keywords: [JavaScript, Jquery]
sidebar_position: 2
---

## 相同

首先两者都是在页面加载执行的函数

## 区别

### 执行时间

> window.onload 必须等到页面内包括图片的所有元素加载完毕后才能执行。<br/>
> $(document).ready()是 DOM 结构绘制完毕后就执行，不必等到加载完毕。

### 编写个数不同

> window.onload 不能同时编写多个，如果有多个 window.onload 方法，只会执行一个。<br/>
> $(document).ready()可以同时编写多个，并且都可以得到执行

### 简化写法

> window.onload 没有简化写法。<br/> > $(document).ready(function(){})可以简写成$(function(){});
