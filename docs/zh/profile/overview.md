# 我的常规信息：概览

**我的常规信息**在任何区域（Diver/Professional/Dive Center/Distributor）都可通过头像菜单访问。

## 在哪里

右上角：点击你的**头像** -> **我的常规信息**（以及相关菜单项）。

## 主要页面

- 概览（本页）
- 我的常规信息
- 我的职责 (assignments)
- 我过往提交的《医疗健康声明和问卷》
- 我的安全设置
- 我的个人隐私

## 说明

- 部分菜单项仅在你的账号启用时显示（例如 **我的职责**）。

<details>
<summary>支持（技术细节）</summary>

资料页使用语言前缀和固定路径：

```text
GET https://user.diveraid.com/zh/user/profile
GET https://user.diveraid.com/zh/user/profile/assignments
GET https://user.diveraid.com/zh/user/profile/medical
GET https://user.diveraid.com/zh/user/profile/security
GET https://user.diveraid.com/zh/user/profile/privacy
```

退出登录：

```text
POST https://user.diveraid.com/zh/logout
```

</details>

下一步： [我的常规信息](my-profile.md)
