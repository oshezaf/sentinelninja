# Vaikora to Microsoft Defender for Cloud

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook polls the Vaikora AI signal exchange API every 6 hours, filters actions with high/critical severity, anomaly flags, or threat detections, and writes them to the Vaikora_SecurityAlerts_CL custom Log Analytics table. Sentinel analytic rules then surface these signals in Defender for Cloud.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [VaikoraSecurityCenter](../solutions/vaikorasecuritycenter.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vaikora-AzureSecurityCenter/Playbooks/VaikoraToAzureSecurityCenter/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Vaikora_SecurityAlerts_CL`](../tables/vaikora-securityalerts-cl.md) 🔶 | ? | ✓ | ? |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azureloganalyticsdatacollector` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azureloganalyticsdatacollector`** (managedApi):
- *Send_to_Log_Analytics*: method=`post`, path=`/api/logs`

**`http`** (builtin):
- *Poll_Vaikora_Actions*: method=`GET`, uri=`https://api.vaikora.com/api/v1/actions`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to VaikoraSecurityCenter](../solutions/vaikorasecuritycenter.md)

