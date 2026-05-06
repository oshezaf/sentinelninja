# AS-Checkmarx-Audit-Ingestion

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

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
| [`keyvault`](../logic-apps/managed-keyvault.md) | Managed | 0 | 1 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`keyvault`](../logic-apps/managed-keyvault.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_secret | get | `[concat('/secrets/@{encodeURIComponent(''', parameters('KeyVaultSecretName'), ''')}/value')]` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP_-_Get_Token | POST | `[concat(parameters('CheckmarxIAMBaseUrl'), '/auth/realms/', parameters('CheckmarxTenant'), '/protocol/openid-connect/token')]` | — |
| HTTP_-_Get_Audit_Logs_Page | GET | `[concat(parameters('CheckmarxASTBaseUrl'), '/api/audit?limit=100&offset=@{variables(''AuditOffset'')}&from-date=@{formatDateTime(addDays(utcNow(), -1), ''yyyy-MM-ddTHH:mm:ssZ'')}&to-date=@{formatDateTime(utcNow(), ''yyyy-MM-ddTHH:mm:ssZ'')}')]` | — |
| HTTP_-_Send_Audit_Events_to_DCR | POST | `[concat(parameters('DCELogsIngestionEndpoint'), '/dataCollectionRules/', parameters('DCRImmutableId'), '/streams/Custom-CheckmarxAuditEvents_CL?api-version=2023-01-01')]` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

