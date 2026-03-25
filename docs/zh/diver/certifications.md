# 潜水员：我已获得的潜水员级认证

## 在哪里找到

菜单：**潜水员 -> 我已获得的潜水员级认证**

![认证列表](../../assets/screenshots/diver/en/certifications-02.png)

## 认证列表

典型操作：

1. 打开认证列表。
2. 选择一个认证查看详情。
3. 点击一张卡片，在另一侧显示详情（split view）。
4. 将认证卡下载为 **PDF** 或 **PNG**。
5. 如果有 **History**，打开它查看进度与结果。

![认证详情（split view）](../../assets/screenshots/diver/en/certifications-01.png)

## 认证历史

历史页面显示某个认证的进度详情（模块/测验/考试/技能，取决于课程）。

![Certification history](../../assets/screenshots/diver/en/certifications-history.png)

## 常见问题

- 认证缺失：可能还未关联到你的资料。
- 历史记录打不开：该项不可用或链接已过期。

<details>
<summary>技术支持（技术细节）</summary>

```text
GET https://user.diveraid.com/zh/diver/certifications
GET https://user.diveraid.com/zh/diver/certifications/history/{certification}
GET https://user.diveraid.com/zh/diver/certifications/history/{certification}/quiz/{quiz}
GET https://user.diveraid.com/zh/diver/certifications/history/{certification}/exam/{exam}
GET https://user.diveraid.com/zh/diver/certifications/history/{certification}/skills
```

</details>

下一步：[我的荣誉卡](awards.md)
