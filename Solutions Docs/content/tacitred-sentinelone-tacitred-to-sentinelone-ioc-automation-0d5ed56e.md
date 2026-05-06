# TacitRed to SentinelOne IOC Automation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook fetches compromised credential findings from TacitRed threat intelligence and creates corresponding IOC indicators in SentinelOne for automated threat response.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [TacitRed-SentinelOne](../solutions/tacitred-sentinelone.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TacitRed-SentinelOne/Playbooks/TacitRedToSentinelOne_Playbook.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `http` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`http`** (builtin):
- *Get_TacitRed_Findings*: method=`GET`, uri=`@{parameters('TacitRed_ApiUrl')}?types[]=compromised_credentials&date_from=@{formatDateTime(addDays(utcNow(), -7), 'yyyy-MM-dd')}&page=1&page_size=100`
- *Post_IOC_to_SentinelOne*: method=`POST`, uri=`@{parameters('SentinelOne_BaseUrl')}/web/api/v2.1/threat-intelligence/iocs`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to TacitRed-SentinelOne](../solutions/tacitred-sentinelone.md)

