# Get-AlienVault_OTX_V2

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

author: Andrew Blumhardt

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | GitHub Only |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Get-AlienVault_OTX/azuredeploy.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `http` | Built-in | 0 | 10 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`http`** (builtin):
- *Count_Indicators_for_Paging_if_over_1000*: method=`GET`, uri=`https://otx.alienvault.com/api/v1/indicators/export`
- *Get_Domain_from_AV-OTX*: method=`GET`, uri=`https://otx.alienvault.com/api/v1/indicators/export`
- *POST_Domains_to_Sentinel*: method=`POST`, uri=`https://graph.microsoft.com/beta/security/tiIndicators`
- *POST_Email_to_Sentinel*: method=`POST`, uri=`https://graph.microsoft.com/beta/security/tiIndicators`
- *POST_FileHash-MD5_to_Sentinel*: method=`POST`, uri=`https://graph.microsoft.com/beta/security/tiIndicators`
- *POST_FileHash-SHA1_to_Sentinel*: method=`POST`, uri=`https://graph.microsoft.com/beta/security/tiIndicators`
- *POST_FileHash-SHA256_to_Sentinel*: method=`POST`, uri=`https://graph.microsoft.com/beta/security/tiIndicators`
- *POST_IPv4_to_Sentinel*: method=`POST`, uri=`https://graph.microsoft.com/beta/security/tiIndicators`
- *POST_URI_to_Sentinel*: method=`POST`, uri=`https://graph.microsoft.com/beta/security/tiIndicators`
- *POST_URL_to_Sentinel*: method=`POST`, uri=`https://graph.microsoft.com/beta/security/tiIndicators`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

