# Abnormal Security - Add Incident Comment

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook is triggered when a Microsoft Sentinel incident is created. It adds a comment to the incident summarizing the Abnormal Security alert (provider, severity, alert product names, and a link to the incident) so analysts have Abnormal context inline. It uses only the Microsoft Sentinel connector and requires no third-party credentials.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [AbnormalSecurity](../solutions/abnormalsecurity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbnormalSecurity/Playbooks/AbnormalSecurity-AddIncidentComment/azuredeploy.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |

</details>

## Additional Documentation

> 📄 *Source: [AbnormalSecurity-AddIncidentComment/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbnormalSecurity/Playbooks/AbnormalSecurity-AddIncidentComment/readme.md)*

This playbook is triggered when a Microsoft Sentinel incident is created. It adds a comment to the
incident summarizing the Abnormal Security alert (provider, severity, title) so analysts have Abnormal
context inline.

It uses only the Microsoft Sentinel connector with a system-assigned managed identity and requires no
third-party credentials.

## Quick Deployment

After deployment:

1. Assign the **Microsoft Sentinel Responder** role to the playbook's managed identity on the resource
   group or workspace.
2. Create an **Automation Rule** that runs this playbook on incidents created by the Abnormal Security
   analytic rules.

## Prerequisites

None beyond a Microsoft Sentinel-enabled Log Analytics workspace and the role assignment above.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to AbnormalSecurity](../solutions/abnormalsecurity.md)

