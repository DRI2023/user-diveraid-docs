# 潜水员：汇总信息

## 截图

![潜水员汇总信息](../../assets/screenshots/diver/en/dashboard.png)

![资料库](../../assets/screenshots/diver/en/library.png)

![个人菜单（点击头像）](../../assets/screenshots/diver/en/profile-menu.png)

## 用途

“汇总信息”是潜水员区域的入口页面，通常汇总了主要入口（课程、认证、文件等）。

## 在哪里找到

菜单：**潜水员 -> 汇总信息**

## 你可以做什么（典型操作）

1. 查看被高亮的内容（进行中的课程、通知、到期提醒，以及 **下载证书 (Download Certification)** 下载你的所有认证证书、**我的潜店 (My Diving Center)** 查看/更换潜店、**医疗表格 (Medical Form)** 填写医疗表格等快捷操作）。
2. 进入 [我的课程](courses.md) 继续学习流程（打开课程列表，选择课程进入进度页，继续下一步：模块/测验/考试/技能；如果找不到课程，也可以查看 *已过期课程*（如果有））。
3. 进入 **我已获得的潜水员级认证** 查看卡片和历史记录。
4. 进入 **我的潜水日志** 新建或更新日志。

## 顶部栏（时间/日期旁的图标）

右上角（日期和时间旁）有一些快捷入口：

- **区域图标（潜水员 / PRO / 潜店 / 经销商）：** 用于切换不同的用户区域。
  只有当你的账号具备对应资格/角色时才会显示（例如你只有潜水员资格时，只会看到潜水员图标）。
- **点击后会发生什么：** 会跳转到所选区域的汇总信息（Dashboard）。
- **语言（EN/IT/DE/FR/ES/ZH/AR/NL/KO/TR/PT/PL/RU）：** 切换界面语言。
- **全屏：** 切换全屏模式（平板或演示时很有用）。
- **主题/对比度：** 改变界面外观（例如浅色/深色，取决于配置）。
- **头像（账号）：** 打开个人账号菜单。

### 点击头像会发生什么？

会打开账号菜单（如截图所示），包含：

- **我的资料 (My Profile)：** 个人资料。
- **我的任务 (My Task)：** 你的分配/邀请（若账号启用）。
- **我的病史 (My Medical History)：** 医疗相关信息/表单（如果你的账号启用）。
- **我的安全 (My Security)：** 安全相关设置/同意项（如果可用）。
- **我的隐私 (My Privacy)：** 隐私设置。
- **退出登录 (Sign out)：** 退出登录。

在 **我的任务 (My Task)** 中，通常你可以：

- 查看待处理邀请和已激活的协作关系（例如 Dive Center staff、Distributor staff、collaborations、translator）。
- 对邀请执行 **Confirm** 或 **Dismiss**。
- 需要时执行 **Stop collaborating**（撤销/终止协作）（通常需要输入确认短语；部分撤销还可能提供删除你名下 classroom 的选项）。
- 对 collaborations 列表进行搜索、排序和分页（若可用）。

## 常见问题

- 被重定向到登录页：登录已过期或未登录。
- 被限制/报错：邮箱未验证。

## 备注

应用根路径（`/`）会跳转到登录页。

<details>
<summary>技术支持（技术细节）</summary>

```text
GET https://user.diveraid.com/zh/diver/dashboard
```

</details>

下一步：[已上传的文件](uploaded-documents.md)
