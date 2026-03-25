# 潜水员：概览

**潜水员（Diver）** 区域是面向潜水员终端用户的功能区。

## 示例（截图）

### 汇总信息

![潜水员汇总信息](../../assets/screenshots/diver/en/dashboard.png)

### 课程列表

![课程列表](../../assets/screenshots/diver/en/courses-list.png)

## 快速开始

1. 使用你的账号登录。
2. 打开 **潜水员 -> 汇总信息**。
3. 从这里进入主要功能：我的课程、认证、文件、潜水日志、线上商店。

## 在哪里找到

菜单：**潜水员**

主要页面：

- 概览（本页）
- 汇总信息
- 常用文件
- 我的课程
- 我已获得的潜水员级认证
- 我的荣誉卡
- 我的潜水日志
- 线上商店
- 表格工具

## 常见流程

1. 跟进课程：**我的课程** -> 打开课程 -> 完成下一步。
2. 查看认证：**我已获得的潜水员级认证** -> 打开认证 -> 查看历史记录。
3. 创建潜水日志：**我的潜水日志** -> 新建 -> 填写 -> 保存 -> 回看/更新。
4. 购买课程：**线上商店** -> 选择课程 -> 结账 -> 确认 -> 查看结果。

## 如果遇到问题

- 被重定向到登录页：可能登录已过期，请重新登录。
- 无法访问/被限制：请确认邮箱已验证。

<details>
<summary>技术支持（技术细节）</summary>

潜水员页面 URL 带语言前缀：

```text
GET https://user.diveraid.com/zh/diver/...
```

示例：

```text
GET https://user.diveraid.com/zh/diver/dashboard
```

也可能存在来自邮件的签名链接（会跳转）：

```text
GET https://user.diveraid.com/actions/diver/certifications
GET https://user.diveraid.com/actions/diver/awards
GET https://user.diveraid.com/actions/diver/progress/{log_code}
```

</details>

下一步：[汇总信息](dashboard.md)

