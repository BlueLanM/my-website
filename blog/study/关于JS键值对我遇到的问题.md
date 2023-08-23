---
slug: js-key-value
title: JavaScript中的键值对
date: 2023-04-03
authors: LanM
weather: 晴
tags: [Study]
keywords: [Study]
---

### 关于对象中的键值对，我一直都是云里雾里，在此记录一下今天遇到的问题。

<!-- truncate -->

键值对一般都是由一个 key 一个 value 组成

在下例数组对象中，根据键值获取对应的 value

```jsx
const obj = {
  eg: "19901017",
  fieldId: "0026ac81c73d44bc8f5ed653dcad2e22",
  logicName: "工号",
  modelId: "2096638254294056960",
  name: "gonghao",
  symbol: "GT",
};

console.log(obj["name"]); //gonghao
console.log(obj["gonghao"]); //undefined
```

貌似只能根据键来获取值，那如何根据值获取键呢？

```jsx
const obj = {
  eg: "19901017",
  fieldId: "0026ac81c73d44bc8f5ed653dcad2e22",
  logicName: "工号",
  modelId: "2096638254294056960",
  name: "gonghao",
  symbol: "GT",
};

let result = Object.keys(obj).find((key) => obj[key].indexOf("gonghao") !== -1);

console.log(result); //name
```

什么是 Object.keys()？可以理解为和 for in 返回结果一致，返回的是个字符串数组

```jsx
console.log(Object.keys(obj)); //['eg', 'fieldId', 'logicName', 'modelId', 'name', 'symbol']
```

而对于数组对象来说，我们能不能使 key 变成动态的？不写死。

```jsx
const obj = [
  {
    eg: "wang",
    fieldId: "000",
    logicName: "工号",
    modelId: "123",
    name: "gonghao",
    symbol: "GT",
  },
  {
    eg: "xiao",
    fieldId: "111",
    logicName: "年龄",
    modelId: "456",
    name: "age",
    symbol: "CUSTOM",
  },
];
let newObj = {};
obj.map((item) => {
  newObj[item.name] = { [item.symbol]: item.fieldId };
});

console.log(newObj); //{gonghao: {GT:"000"}, age: {CUSTOM:"111"}}
```

## for in 和 for of 的区别是什么呢?

### 区别一：for in 和 for of 都可以循环数组，for in 输出的是数组的 index 下标，而 for of 输出的是数组的每一项的值。

```jsx
const arr = [1, 2, 3, 4];

// for ... in
for (const key in arr) {
  console.log(key); // 输出 0,1,2,3
}

// for ... of
for (const key of arr) {
  console.log(key); // 输出 1,2,3,4
}
```

### 区别二：for in 可以遍历对象，for of 不能遍历对象，只能遍历带有 iterator 接口的，例如 Set,Map,String,Array

```jsx title='循环对象'
const object = { name: "lx", age: 23 };
// for ... in
for (const key in object) {
  console.log(key); // 输出 name,age
  console.log(object[key]); // 输出 lx,23
}

// for ... of
for (const key of object) {
  console.log(key); // 报错 Uncaught TypeError: object is not iterable
}
```

```jsx title='数组对象'
const list = [{ name: "lx" }, { age: 23 }];
for (const val of list) {
  console.log(val); // 输出{ name: 'lx' }, { age: 23 }
  for (const key in val) {
    console.log(val[key]); // 输出 lx,23
  }
}
```

### 总结：for in 适合遍历对象，for of 适合遍历数组。for in 遍历的是数组的索引，对象的属性，以及原型链上的属性。
