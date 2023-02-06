---
siderbar_position: 1
---

### git 提交到 github 报 OpenSSL SSL_read: Connection was reset, errno 10054

```jsx title="解决办法"
git config --global http.sslVerify “false”
```

### git 提交代码报错 husky>pre-commit

```jsx title='解决办法'
找到.git文件下的hooks，进入hooks文件夹，找到pre-commit文件，删除，之后再进行commit，发现就能成功提交了。
该文件所起到的作用是：
pre-commit(客户端)钩子，它会在Git键入提交信息前运行做代码风格检查。
如果代码不符合相应规则，则报错。
```
