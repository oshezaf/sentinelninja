# AS-Checkmarx-SAST-Ingestion

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook ingests Checkmarx SAST scan findings into a custom Microsoft Sentinel table on a daily schedule.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/AS-Checkmarx-SAST-Ingestion/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `keyvault` | Managed | 0 | 1 |
| `http` | Built-in | 0 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`keyvault`** (managedApi):
- *Get_secret*: method=`get`, path=`[concat('/secrets/@{encodeURIComponent(''', parameters('KeyVaultSecretName'), ''')}/value')]`

**`http`** (builtin):
- *HTTP_-_Get_Token*: method=`POST`, uri=`[concat(parameters('CheckmarxIAMBaseUrl'), '/auth/realms/', parameters('CheckmarxTenant'), '/protocol/openid-connect/token')]`
- *HTTP_-_Get_Scans*: method=`GET`, uri=`[concat(parameters('CheckmarxASTBaseUrl'), '/api/scans?statuses=Completed&from-date=@{addDays(utcNow(), -1, ''yyyy-MM-ddTHH:mm:ssZ'')}')]`
- *HTTP_-_Get_SAST_Results_Page*: method=`GET`, uri=`[concat(parameters('CheckmarxASTBaseUrl'), '/api/sast-results/?scan-id=@{items(''For_Each_Scan'')?[''id'']}')]`
- *HTTP_-_Send_SAST_Batch_to_DCR*: method=`POST`, uri=`[concat(parameters('DCELogsIngestionEndpoint'), '/dataCollectionRules/', parameters('DCRSASTImmutableId'), '/streams/Custom-CheckmarxSASTFindings_CL?api-version=2023-01-01')]`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

