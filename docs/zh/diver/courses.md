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

## 课程进度（总览）

打开课程后，你会进入**进度**页面。这是课程的中心页面，显示你已完成的内容和下一步要做什么。

<!-- TODO(screenshot): docs/assets/screenshots/diver/zh/courses-progress.png -->
![课程进度（总览）](../../assets/screenshots/diver/en/courses-progress.png)

典型操作：

1. 找到下一步要完成的内容（模块、测验、考试、技能）。
2. 完成后回到进度总览查看推进情况。

## 尝试（测验/考试/技能）

“尝试”是你**实际完成**活动的页面（答题、提交、确认）。

### 测验尝试（模块）

<!-- TODO(screenshot): docs/assets/screenshots/diver/zh/courses-quiz-attempt.png -->
![测验尝试](../../assets/screenshots/diver/en/courses-quiz-attempt.png)

典型操作：

1. 在课程进度页打开下一个模块/测验步骤。
2. 回答问题。
3. 提交。
4. （如可用）打开结果页查看答案。

### 考试尝试

<!-- TODO(screenshot): docs/assets/screenshots/diver/zh/courses-exam-attempt.png -->
![考试尝试](../../assets/screenshots/diver/en/courses-exam-attempt.png)

说明：考试只有在你完成必需的测验/模块后，并且教练启用后才可进行。

典型操作：

1. 在课程进度页打开 **Exam**。
2. 完成考试。
3. 提交并等待结果页。

### 技能（Skills）

技能是实践步骤，是否需要确认取决于课程配置。

<!-- TODO(screenshot): docs/assets/screenshots/diver/zh/courses-skills.png -->
![技能签名](../../assets/screenshots/diver/en/courses-skills.png)

说明：只有在教练将技能标记为已完成后，你才能确认。

提示：如果课程要求，请在确认技能前完成相关的 Dive Log/Logbook 记录。

## 进度详情（测验/考试/技能）

进度详情是你查看**结果**的页面（例如测验答案或考试结果）。

<!-- TODO(screenshot): docs/assets/screenshots/diver/zh/courses-results.png -->
![进度详情（结果）](../../assets/screenshots/diver/en/courses-results.png)

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

