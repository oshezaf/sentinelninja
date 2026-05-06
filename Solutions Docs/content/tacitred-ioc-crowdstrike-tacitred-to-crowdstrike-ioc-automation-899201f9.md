# TacitRed to CrowdStrike IOC Automation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook fetches compromised credential findings from TacitRed threat intelligence and creates corresponding IOC indicators in CrowdStrike Falcon for automated threat response.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [TacitRed-IOC-CrowdStrike](../solutions/tacitred-ioc-crowdstrike.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TacitRed-IOC-CrowdStrike/Playbooks/TacitRedToCrowdStrike_Playbook.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `http` | Built-in | 0 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`http`** (builtin):
- *Get_TacitRed_Findings*: method=`GET`, uri=`@{parameters('TacitRed_ApiUrl')}?types[]=compromised_credentials&page=1&page_size=50`
- *Get_CrowdStrike_Token*: method=`POST`, uri=`@{parameters('CrowdStrike_BaseUrl')}@{parameters('CrowdStrike_TokenPath')}`
- *Post_IOC_to_CrowdStrike*: method=`POST`, uri=`@{parameters('CrowdStrike_BaseUrl')}@{parameters('CrowdStrike_IocPath')}?ignore_warnings=true`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to TacitRed-IOC-CrowdStrike](../solutions/tacitred-ioc-crowdstrike.md)

