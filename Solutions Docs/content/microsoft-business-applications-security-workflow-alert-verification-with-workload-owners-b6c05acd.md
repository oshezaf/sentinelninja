# Security workflow: alert verification with workload owners

This playbook can reduce burden on the SOC by offloading alert verification to IT admins for specific analytics rules. It is triggered when a Microsoft Sentinel alert is generated, creates a message (and associated notification email) in the workload owner's Microsoft Teams channel containing details of the alert. If the workload owner responds that the activity is not authorized, the alert will be converted to an incident in Microsoft Sentinel for the SOC to handle.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Playbooks/MSBizApps-Incident-From-Alert-Teams/azuredeploy.json) |

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

