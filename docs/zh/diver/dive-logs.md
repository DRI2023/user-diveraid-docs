# 潜水员：我的潜水日志

## 在哪里找到

菜单：**潜水员 -> 我的潜水日志**

## 列表

![潜水日志列表](../../assets/screenshots/diver/en/dive-logs.png)

## 新建

典型操作：

1. 点击 **New** 新建潜水日志。
2. 填写必填字段并保存。
3. 如果你从特定流程进入（例如技能/课程），可能会看到预填充的创建流程。

## 查看与更新

## 常见问题

- 找不到日志：可能已删除或未关联到你的资料。
- 更新失败：数据无效或权限不足。

<details>
<summary>技术支持（技术细节）</summary>

```text
GET https://user.diveraid.com/zh/diver/dive_log
GET https://user.diveraid.com/zh/diver/dive_log/new
GET https://user.diveraid.com/zh/diver/dive_log/new_log/{skillLog?}/{skill?}
GET https://user.diveraid.com/zh/diver/dive_log/view/{diveLog}
GET https://user.diveraid.com/zh/diver/dive_log/update/{diveLog}
```

</details>

下一步：[线上商店](store.md)

