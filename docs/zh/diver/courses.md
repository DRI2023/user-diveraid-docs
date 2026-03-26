# 潜水员：我的课程

## 截图

![课程列表](../../assets/screenshots/diver/en/courses-list.png)

![已过期课程](../../assets/screenshots/diver/en/courses-expired.png)

## 在哪里找到

菜单：**潜水员 -> 我的课程**

## 你可以做什么

- 查看进行中的课程和已过期的课程。
- 打开课程进度。
- 继续模块/测验、考试和技能（取决于课程是否支持）。

## 课程列表

典型操作：

1. 打开课程列表。
2. 选择一个课程进入进度页。
3. 如果找不到课程，也可以查看“已过期课程”（如果有）。

在课程内的典型操作：

1. 找到下一步要完成的内容（模块、测验、考试、技能）。
2. 完成后回到进度总览查看推进情况。

## 尝试（测验/考试/技能）

提示：

- 如果你打开模块时看到空白页或错误，可能该模块不适用于你的课程，或者你已完成。

## 常见问题

- 被重定向到登录页：登录已过期。
- 无权限：邮箱未验证。
- 找不到课程：旧链接或该课程未关联到你的账号。

<details>
<summary>技术支持（技术细节）</summary>

课程列表：

```text
GET https://user.diveraid.com/zh/diver/courses
GET https://user.diveraid.com/zh/diver/courses/expired
```

进度与尝试：

```text
GET https://user.diveraid.com/zh/diver/courses/progress/{log_code}
GET https://user.diveraid.com/zh/diver/courses/progress/{log_code}/module/{module}
GET https://user.diveraid.com/zh/diver/courses/progress/{log_code}/exam
GET https://user.diveraid.com/zh/diver/courses/progress/{log_code}/skills
GET https://user.diveraid.com/zh/diver/courses/progress/{log_code}/quiz/{quiz}
GET https://user.diveraid.com/zh/diver/courses/progress/{log_code}/exam/{exam}
GET https://user.diveraid.com/zh/diver/courses/progress/{log_code}/skill
GET https://user.diveraid.com/zh/diver/courses/progress/{log_code}/skill/sign
```

</details>

下一步：[免费阅读（FREE-Learning）](free-learnings.md)
