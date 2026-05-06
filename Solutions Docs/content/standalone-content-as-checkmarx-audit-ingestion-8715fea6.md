# AS-Checkmarx-Audit-Ingestion

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook ingests Checkmarx audit log events into a custom Microsoft Sentinel table on a daily schedule.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/AS-Checkmarx-Audit-Ingestion/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `keyvault` | Managed | 0 | 1 |
| `http` | Built-in | 0 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`keyvault`** (managedApi):
- *Get_secret*: method=`get`, path=`[concat('/secrets/@{encodeURIComponent(''', parameters('KeyVaultSecretName'), ''')}/value')]`

**`http`** (builtin):
- *HTTP_-_Get_Token*: method=`POST`, uri=`[concat(parameters('CheckmarxIAMBaseUrl'), '/auth/realms/', parameters('CheckmarxTenant'), '/protocol/openid-connect/token')]`
- *HTTP_-_Get_Audit_Logs_Page*: method=`GET`, uri=`[concat(parameters('CheckmarxASTBaseUrl'), '/api/audit?limit=100&offset=@{variables(''AuditOffset'')}&from-date=@{formatDateTime(addDays(utcNow(), -1), ''yyyy-MM-ddTHH:mm:ssZ'')}&to-date=@{formatDateTime(utcNow(), ''yyyy-MM-ddTHH:mm:ssZ'')}')]`
- *HTTP_-_Send_Audit_Events_to_DCR*: method=`POST`, uri=`[concat(parameters('DCELogsIngestionEndpoint'), '/dataCollectionRules/', parameters('DCRImmutableId'), '/streams/Custom-CheckmarxAuditEvents_CL?api-version=2023-01-01')]`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

