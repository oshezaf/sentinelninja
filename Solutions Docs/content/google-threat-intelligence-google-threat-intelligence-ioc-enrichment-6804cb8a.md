# Google Threat Intelligence - IOC Enrichment

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will enrich IP, Hash, URL & Domain entities found in alerts.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Google Threat Intelligence](../solutions/google-threat-intelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Playbooks/GTIEnrichment/GTI-EnrichAlert/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 6 |
| `googlethreatintelligence` | Managed | 0 | 4 |
| `GoogleThreatIntelligence-CustomConnector` | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Alert_-_Get_incident*: method=`get`, path=`/Incidents/subscriptions/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/resourceGroups/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/workspaces/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/alerts/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}`
- *Entities_-_Get_IPs*: method=`post`, path=`/entities/ip`
- *Entities_-_Get_FileHashes*: method=`post`, path=`/entities/filehash`
- *Entities_-_Get_URLs*: method=`post`, path=`/entities/url`
- *Entities_-_Get_DNS*: method=`post`, path=`/entities/dnsresolution`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`

**`googlethreatintelligence`** (managedApi):
- *Get_IP_Report*: method=`get`, path=`/ip_addresses/@{encodeURIComponent(item()?['Address'])}`
- *Get_File_Report*: method=`get`, path=`/files/@{encodeURIComponent(item()?['Value'])}`
- *Get_URL_Report*: method=`get`, path=`/urls/@{encodeURIComponent(replace(base64(item()?['Url']),'=',''))}`
- *Get_Domain_Report*: method=`get`, path=`/domains/@{encodeURIComponent(item()?['DomainName'])}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Google Threat Intelligence](../solutions/google-threat-intelligence.md)

