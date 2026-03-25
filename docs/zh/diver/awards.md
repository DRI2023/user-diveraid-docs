# 潜水员：我的荣誉卡

“荣誉卡 / Awards”页面包含你的认可卡（Recognition cards）以及对应的订购流程（如果你的账号可用）。

## 在哪里找到

菜单：**潜水员 -> 我的荣誉卡**

![我的荣誉卡](../../assets/screenshots/diver/en/awards.png)

## 荣誉卡类型

主要有两类：

**潜水员（记录的潜水次数）**

- 100 logged dives
- 500 logged dives
- 1000 logged dives
- 5000 logged dives

**专业（签发的认证数量）**

- Bronze: 100 certifications issued
- Silver: 500 certifications issued
- Gold: 1000 certifications issued
- Platinum: 5000 certifications issued

## 荣誉卡列表

典型操作：

1. 打开荣誉卡列表。
2. 选择一张卡片/荣誉项。
3. 开始订购流程。

## 如何获得荣誉卡

当你达到新的里程碑（潜水次数或签发认证数量）时，系统通常会在 Dashboard 上提示你，
并允许你订购对应的荣誉卡。

典型操作：

1. （可选）使用搜索找到某张荣誉卡。
2. 从列表中选择一张卡片/荣誉项。
3. 开始订购流程（如果你的账号支持）。

订购成功后，卡片会被签发，你可以在 **我的荣誉卡** 中看到它。

## 常见问题

- 结果为 `fail`：重试订购，或检查支付方式（如果该流程包含支付）。
- 看不到可订购项：该荣誉卡可能不适用于你的资料或国家/地区。

<details>
<summary>技术支持（技术细节）</summary>

```text
GET https://user.diveraid.com/zh/diver/awards
GET https://user.diveraid.com/zh/diver/awards/{card}/order
GET https://user.diveraid.com/zh/diver/awards/order/success
GET https://user.diveraid.com/zh/diver/awards/order/fail
```

</details>

下一步：[我的潜水日志](dive-logs.md)
