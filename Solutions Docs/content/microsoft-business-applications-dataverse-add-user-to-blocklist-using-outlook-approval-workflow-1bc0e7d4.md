# Dataverse: Add user to blocklist using Outlook approval workflow

This playbook can be triggered when a Microsoft Sentinel incident is raised and will automatically add affected user entitites to a pre-defined Microsoft Entra group, using an Outlook based approval workflow, resulting in blocked access. The Microsoft Entra group is used with Conditional Access to block sign-in to the Dataverse.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Playbooks/Dataverse-Blocklist-Add-User-Via-Outlook/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

