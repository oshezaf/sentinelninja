# Google Directory - Suspend User

Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Gets users from the incident. 2. Sends an adaptive card to the Teams channel where the analyst can choose users to suspend. 3. Suspends users. 4. Adds comment to the incident about suspended users.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [GoogleDirectory](../solutions/googledirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleDirectory/Playbooks/Playbooks/Google-SuspendUser/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to GoogleDirectory](../solutions/googledirectory.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
