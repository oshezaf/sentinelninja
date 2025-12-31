# Block Microsoft Entra ID user - Alert

For each account entity included in the alert, this playbook will disable the user in Microsoft Entra ID, add a comment to the incident that contains this alert and notify manager if available. Note: This playbook will not disable admin user!

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID/Playbooks/Block-AADUser/alert-trigger/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to Microsoft Entra ID](../solutions/microsoft-entra-id.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
