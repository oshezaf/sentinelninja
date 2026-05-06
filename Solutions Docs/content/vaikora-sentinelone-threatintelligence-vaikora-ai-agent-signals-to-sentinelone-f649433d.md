# Vaikora AI Agent Signals to SentinelOne

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook polls Vaikora for AI agent behavioral signals (high or critical severity actions and anomaly detections) and pushes them as threat intelligence IOCs to SentinelOne for detection and response.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Vaikora-SentinelOne-ThreatIntelligence](../solutions/vaikora-sentinelone-threatintelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vaikora-SentinelOne-ThreatIntelligence/Playbooks/VaikoraToSentinelOne_Playbook.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_Vaikora_Actions | GET | `@{concat(parameters('Vaikora_ApiBaseUrl'), '/actions?agent_id=', encodeUriComponent(parameters('VaikoraAgentId')), '&per_page=100')}` | — |
| List_STAR_Rules | GET | `@{parameters('SentinelOne_BaseUrl')}/web/api/v2.1/cloud-detection/rules?accountIds=@{parameters('SentinelOne_AccountId')}` | — |
| Create_STAR_Rule | POST | `@{parameters('SentinelOne_BaseUrl')}/web/api/v2.1/cloud-detection/rules` | — |
| Post_IOC_to_SentinelOne | POST | `@{parameters('SentinelOne_BaseUrl')}/web/api/v2.1/threat-intelligence/iocs` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Vaikora-SentinelOne-ThreatIntelligence](../solutions/vaikora-sentinelone-threatintelligence.md)

