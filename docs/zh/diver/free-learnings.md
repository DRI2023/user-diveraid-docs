# 潜水员：免费阅读（FREE-Learning）

## 这是什么

“免费阅读（FREE-Learning）”是一个更简化的学习流程（通常不需要购买即可访问）。

## 在哪里找到

菜单：**潜水员 -> 免费阅读（FREE-Learning）**

![FREE-Learning shop](../../assets/screenshots/diver/en/free-learnings-store.png)

## 申请/开通

典型操作：

1. 打开开通页面。
2. 选择要激活的内容（如果需要）。
3. 开通后回到列表开始学习。

## 列表

典型操作：

1. 打开列表。
2. 选择一个内容进入进度页。

![免费阅读列表](../../assets/screenshots/diver/en/free-learnings-list.png)

## 进度

打开某个内容可以查看进度，并从上次的位置继续。

## 常见问题

- 没有内容：可能尚未开通（先去开通页面）。
- 被重定向到登录页：登录已过期。

<details>
<summary>技术支持（技术细节）</summary>

```text
GET https://user.diveraid.com/zh/diver/free-learnings/enroll
GET https://user.diveraid.com/zh/diver/free-learnings
GET https://user.diveraid.com/zh/diver/free-learnings/progress/{log_code}/
GET https://user.diveraid.com/zh/diver/free-learnings/progress/{log_code}/module/{module}
GET https://user.diveraid.com/zh/diver/free-learnings/progress/{log_code}/quiz/{quiz}
```

</details>

下一步：[我已获得的潜水员级认证](certifications.md)
