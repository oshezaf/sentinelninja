# Cyble-IOC_Enrichment-Playbook

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook leverages the Cyble API to enrich IP, Domain, Url & Hash indicators, found in Microsoft Sentinel incidents, with the following context: Risk Score, Confidence, etc. The enrichment content will be posted as a comment in the Microsoft Sentinel incident

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Cyble Vision](../solutions/cyble-vision.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyble%20Vision/Playbooks/IoC-Enrichment/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`

**`http`** (builtin):
- *HTTP_Get_IOC_Data*: method=`GET`, uri=`@concat('https://api.cyble.ai/engine/api/v2/y/iocs?ioc=', coalesce(if(equals(toLower(item()?['kind']),'filehash'), item()?['properties']?['hashValue'], null), if(equals(toLower(item()?['kind']),'ip'), item()?['properties']?['address'], null), if(equals(toLower(item()?['kind']),'url'), item()?['properties']?['url'], null), if(equals(toLower(item()?['kind']),'host'), item()?['properties']?['hostName'], null), if(equals(toLower(item()?['kind']),'mailbox'), item()?['properties']?['mailboxPrimaryAddress'], null), ''))`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Cyble Vision](../solutions/cyble-vision.md)

