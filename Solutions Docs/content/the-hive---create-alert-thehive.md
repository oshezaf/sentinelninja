# The Hive - Create alert

Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Parses alert extended properties. 2. Parses alert custom details. 3. Creates alert in TheHive with description, source, sourceRef, title and type passed.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [TheHive](../solutions/thehive.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TheHive/Playbooks/TheHive-CreateAlert/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to TheHive](../solutions/thehive.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
