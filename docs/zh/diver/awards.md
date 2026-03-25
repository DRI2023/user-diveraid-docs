# 潜水员：我的荣誉卡

“荣誉卡 / Awards”通常包括认可卡（Recognition cards）以及对应的订购流程。

## 在哪里找到

菜单：**潜水员 -> 我的荣誉卡**

## 荣誉卡列表

典型操作：

1. 打开荣誉卡列表。
2. 选择一张卡片/荣誉项。
3. 开始订购流程。

![荣誉卡列表](../../assets/screenshots/diver/en/awards.png)

## 订购

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

