# Veeam-PerformConfigurationBackupOnIncident

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

A Microsoft Sentinel playbook that automatically runs configuration backup session when triggered by an incident. The playbook gets Veeam Backup & Replication settings from incident custom fields, runs the configuration backup session, and collects the session result.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Veeam](../solutions/veeam.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam/Playbooks/Veeam-PerformConfigurationBackupOnIncident/Veeam-PerformConfigurationBackupOnIncident.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 3 |
| `function` | Built-in | 0 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_backup_started_comment*: method=`post`, path=`/Incidents/Comment`
- *Add_backup_completed_comment*: method=`post`, path=`/Incidents/Comment`
- *Add_no_hostname_comment*: method=`post`, path=`/Incidents/Comment`

**`function`** (builtin):
- *StartConfigurationBackupAsync*: functionId=`[concat(variables('functionAppId'), '/functions/StartConfigurationBackupAsync')]`
- *GetSession*: functionId=`[concat(variables('functionAppId'), '/functions/GetSessionAsync')]`
- *IngestSessionDataBySessionIdAsync*: functionId=`[concat(variables('functionAppId'), '/functions/IngestSessionDataBySessionIdAsync')]`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Veeam](../solutions/veeam.md)

