# Enrich file hash entities - Intezer Analyze

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will enrich a Sentinel Incident with hash information from Intezer Analyze.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Enrich-Intezer-Analyze/Playbook/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 5 |
| `keyvault` | Managed | 1 | 1 |
| `Intezer-Analyze-Community` | Custom | 1 | 1 |
| `http` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Update_incident_2*: method=`put`, path=`/Incidents`
- *Update_incident*: method=`put`, path=`/Incidents`
- *Entities_-_Get_FileHashes*: method=`post`, path=`/entities/filehash`
- *Update_incident_-_quota_limit*: method=`put`, path=`/Incidents`

**`keyvault`** (managedApi):
- *Get_secret_intezer_api_key*: method=`get`, path=`/secrets/@{encodeURIComponent('malware-intezer-api-key')}/value`

**`Intezer-Analyze-Community`** (customApi):
- *Get_access_token*: method=`post`, path=`/api/v2-0/get-access-token`

**`http`** (builtin):
- *HTTP_-_get_latest_analysis*: method=`GET`, uri=`https://analyze.intezer.com/api/v2-0/files/@{body('Parse_JSON_FileHash')?['hashValue']}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

