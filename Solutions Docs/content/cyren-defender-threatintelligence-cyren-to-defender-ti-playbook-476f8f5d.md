# Cyren to Defender TI - Playbook

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Polls the Cyren CCF threat intelligence feed and pushes STIX indicators to Microsoft Sentinel via the createIndicator API.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Cyren-Defender-ThreatIntelligence](../solutions/cyren-defender-threatintelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyren-Defender-ThreatIntelligence/Playbooks/CyrenToDefenderTI_Playbook.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_Cyren_Indicators | GET | `@{outputs('Build_Cyren_Api_Url')}` | — |
| Post_Indicator_to_Sentinel | POST | `@{concat(parameters('ManagementBaseUrl'), substring(parameters('WorkspaceResourceId'), 1), '/providers/Microsoft.SecurityInsights/threatIntelligence/main/createIndicator?api-version=2024-03-01')}` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Cyren-Defender-ThreatIntelligence](../solutions/cyren-defender-threatintelligence.md)

