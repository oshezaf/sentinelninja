# Infoblox Import Emails Weekly

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Leverages the Infoblox TIDE API to automatically import threat indicators into the ThreatIntelligenceIndicator table. This playbook imports newly detected emails on a scheduled weekly basis.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Infoblox Cloud Data Connector](../solutions/infoblox-cloud-data-connector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20Cloud%20Data%20Connector/Playbooks/Infoblox-Import-Emails-Weekly/azuredeploy.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 6 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_Emails_to_Sentinel | POST | `https://graph.microsoft.com/beta/security/tiIndicators` | — |
| Send_Hashes_to_Sentinel | POST | `https://graph.microsoft.com/beta/security/tiIndicators` | — |
| Send_Hosts_to_Sentinel | POST | `https://graph.microsoft.com/beta/security/tiIndicators` | — |
| Send_IPs_to_Sentinel | POST | `https://graph.microsoft.com/beta/security/tiIndicators` | — |
| Send_URLs_to_Sentinel | POST | `https://graph.microsoft.com/beta/security/tiIndicators` | — |
| Get_TIDE_Data | GET | `https://csp.infoblox.com/tide/api/data/threats/email/` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Infoblox Cloud Data Connector](../solutions/infoblox-cloud-data-connector.md)

