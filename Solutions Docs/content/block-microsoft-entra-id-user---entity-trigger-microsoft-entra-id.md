# Block Microsoft Entra ID user - Entity trigger

This playbook disables the selected user (account entity) in Microsoft Entra ID. If this playbook triggered from an incident context, it will add a comment to the incident. This playbook will notify the disabled user manager if available. Note: This playbook will not disable admin user!

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID/Playbooks/Block-AADUser/entity-trigger/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to Microsoft Entra ID](../solutions/microsoft-entra-id.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
