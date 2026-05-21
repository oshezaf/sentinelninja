# Cyren to CrowdStrike IOC Automation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook fetches IP reputation and/or malware URL threat intelligence indicators from the Cyren CCF API feed and creates corresponding IOC indicators in CrowdStrike Falcon for automated threat detection and response. Customers can provide one or both Cyren feed tokens.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Cyren-CrowdStrike-ThreatIntelligence](../solutions/cyren-crowdstrike-threatintelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyren-CrowdStrike-ThreatIntelligence/Playbooks/CyrenToCrowdStrike_Playbook.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 5 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_CrowdStrike_Token | POST | `@{parameters('CrowdStrike_BaseUrl')}/oauth2/token` | — |
| Get_IpRep_Indicators | GET | `@{outputs('Build_IpRep_Cyren_Url')}` | — |
| Post_IpRep_IOC_to_CrowdStrike | POST | `@{parameters('CrowdStrike_BaseUrl')}/iocs/entities/indicators/v1?ignore_warnings=true` | — |
| Get_MalwareUrl_Indicators | GET | `@{outputs('Build_MalwareUrl_Cyren_Url')}` | — |
| Post_MalwareUrl_IOC_to_CrowdStrike | POST | `@{parameters('CrowdStrike_BaseUrl')}/iocs/entities/indicators/v1?ignore_warnings=true` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Cyren-CrowdStrike-ThreatIntelligence](../solutions/cyren-crowdstrike-threatintelligence.md)

