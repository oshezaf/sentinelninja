# Enrich multiple entities - AlienVault-OTX

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will enrich a Sentinel Incident with pulse information from AlienVault OTX. If any pulses are found the Incident will also be tagged and the severity raised to High.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Enrich-Sentinel-Incident-AlienVault-OTX/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 9 |
| `http` | Built-in | 0 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)_-_Domain_TI*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_(V3)_-_File_TI*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_(V3)_-_IP_TI*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_(V3)_-_URL_TI*: method=`post`, path=`/Incidents/Comment`
- *Entities_-_Get_FileHashes*: method=`post`, path=`/entities/filehash`
- *Entities_-_Get_IPs*: method=`post`, path=`/entities/ip`
- *Entities_-_Get_URLs*: method=`post`, path=`/entities/url`
- *Update_incident_-_Raise_Severity_and_Tag*: method=`put`, path=`/Incidents`
- *Update_incident__-_Tag*: method=`put`, path=`/Incidents`

**`http`** (builtin):
- *HTTP_-_OTX_Domain*: method=`GET`, uri=`https://otx.alienvault.com/api/v1/indicators/domain/@{items('For_each_Domain')['properties']['domainName']}/general`
- *HTTP_-_OTX_File*: method=`GET`, uri=`https://otx.alienvault.com/api/v1/indicators/file/@{items('For_each_FileHash')?['Value']}`
- *HTTP_-_OTX_IP*: method=`GET`, uri=`https://otx.alienvault.com//api/v1/indicators/IPv4/@{items('For_each_IP')?['Address']}`
- *HTTP_-_OTX_URL*: method=`GET`, uri=`https://otx.alienvault.com/api/v1/indicators/url/@{encodeUriComponent(items('For_each_URL')?['Url'])}/general`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

