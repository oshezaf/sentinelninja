# Cyren to SentinelOne IOC Automation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook fetches IP reputation and/or malware URL threat intelligence indicators from the Cyren CCF API feed and creates corresponding IOC indicators in SentinelOne for automated threat detection and response. Customers can provide one or both Cyren feed tokens.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Cyren-SentinelOne-ThreatIntelligence](../solutions/cyren-sentinelone-threatintelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyren-SentinelOne-ThreatIntelligence/Playbooks/CyrenToSentinelOne_Playbook.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `http` | Built-in | 0 | 6 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`http`** (builtin):
- *List_STAR_Rules*: method=`GET`, uri=`@{parameters('SentinelOne_BaseUrl')}/web/api/v2.1/cloud-detection/rules?accountIds=@{parameters('SentinelOne_AccountId')}`
- *Create_STAR_Rule*: method=`POST`, uri=`@{parameters('SentinelOne_BaseUrl')}/web/api/v2.1/cloud-detection/rules`
- *Get_IpRep_Feed_Page*: method=`GET`, uri=`@{outputs('Build_IpRep_Api_Url')}`
- *Post_IpRep_IOC_to_SentinelOne*: method=`POST`, uri=`@{parameters('SentinelOne_BaseUrl')}/web/api/v2.1/threat-intelligence/iocs`
- *Get_MalwareUrl_Feed_Page*: method=`GET`, uri=`@{outputs('Build_MalwareUrl_Api_Url')}`
- *Post_MalwareUrl_IOC_to_SentinelOne*: method=`POST`, uri=`@{parameters('SentinelOne_BaseUrl')}/web/api/v2.1/threat-intelligence/iocs`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Cyren-SentinelOne-ThreatIntelligence](../solutions/cyren-sentinelone-threatintelligence.md)

