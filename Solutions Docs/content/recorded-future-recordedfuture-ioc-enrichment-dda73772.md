# RecordedFuture-IOC_Enrichment

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook leverages the Recorded Future API to enrich IP, Domain, Url & Hash indicators, found in Microsoft Sentinel incidents, with the following context: Risk Score, Risk Rules and Link to Intelligence Card. The enrichment content will be posted as a comment in the Microsoft Sentinel incident <img alt="Microsoft Sentinel incident comment" src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Recorded%20Future/Playbooks/Enrichment/RecordedFuture-IOC_Enrichment/images/

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Recorded Future](../solutions/recorded-future.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/Playbooks/Enrichment/RecordedFuture-IOC_Enrichment/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 4 |
| `recordedfuture` | Managed | 0 | 4 |
| `recordedfuturev2` | Managed | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)_-_Domain*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_(V3)_-_Hash*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_(V3)_-_Link*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_(V3)_-_IP*: method=`post`, path=`/Incidents/Comment`

**`recordedfuture`** (managedApi):
- *Domain_Enrichment*: method=`get`, path=`/lookup/domain/@{encodeURIComponent(body('Parse_JSON_-_DNS_Resolution')?['domainName'])}`
- *Hash_Enrichment*: method=`get`, path=`/lookup/hash/@{encodeURIComponent(body('Parse_JSON_-_File_Hash')?['hashValue'])}`
- *URL_Enrichment*: method=`get`, path=`/lookup/url/@{encodeURIComponent(if(or(startsWith(body('Parse_JSON_-_Url')?['url'], 'http://'), startsWith(body('Parse_JSON_-_Url')?['url'], 'https://')), body('Parse_JSON_-_Url')?['url'], concat('https://', body('Parse_JSON_-_Url')?['url'])))}`
- *IP_Enrichment*: method=`get`, path=`/lookup/ip/@{encodeURIComponent(body('Parse_JSON_-_Ip')?['address'])}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Recorded Future](../solutions/recorded-future.md)

