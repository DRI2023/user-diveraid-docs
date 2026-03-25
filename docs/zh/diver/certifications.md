# 潜水员：我已获得的潜水员级认证

## 在哪里找到

菜单：**潜水员 -> 我已获得的潜水员级认证**

## 认证列表

典型操作：

1. 打开认证列表。
2. 选择一个认证查看详情。
3. 如果有“历史记录”，打开它查看进度与结果。

![认证列表](../../assets/screenshots/diver/en/certifications.png)

## 认证历史

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

