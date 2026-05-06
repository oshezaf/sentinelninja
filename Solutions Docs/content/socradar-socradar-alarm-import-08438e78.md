# SOCRadar-Alarm-Import

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Imports alarms from SOCRadar with optional audit logging and custom table storage. Supports all statuses or OPEN only.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SOCRadar](../solutions/socradar.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOCRadar/Playbooks/SOCRadar-Alarm-Import/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 0 | 1 |
| `http` | Built-in | 0 | 6 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Create_New_Incident*: method=`put`, path=`[concat('/Incidents/subscriptions/', subscription().subscriptionId, '/resourceGroups/', parameters('WorkspaceResourceGroup'), '/workspaces/', parameters('WorkspaceName'))]`

**`http`** (builtin):
- *Query_Existing_SOCRadar_Incidents*: method=`GET`, uri=`[concat(variables('_managementBaseUrl'), 'subscriptions/', subscription().subscriptionId, '/resourceGroups/', parameters('WorkspaceResourceGroup'), '/providers/Microsoft.OperationalInsights/workspaces/', parameters('WorkspaceName'), '/providers/Microsoft.SecurityInsights/incidents?api-version=2023-11-01&$top=1&$filter=startswith(properties/title, ''[SOCRadar]'')')]`
- *Get_SOCRadar_Page*: method=`GET`, uri=`https://platform.socradar.com/api/company/@{parameters('CompanyId')}/incidents/v4`
- *Query_Incidents_Page*: method=`GET`, uri=`@variables('incidents_next_link')`
- *Create_Closed_Incident*: method=`PUT`, uri=`@{concat(parameters('ManagementBaseUrl'), '/subscriptions/', parameters('SubscriptionId'), '/resourceGroups/', parameters('ResourceGroupName'), '/providers/Microsoft.OperationalInsights/workspaces/', parameters('WorkspaceName'), '/providers/Microsoft.SecurityInsights/incidents/', guid(), '?api-version=2023-11-01')}`
- *Log_Audit_Event*: method=`POST`, uri=`@{concat(parameters('AuditDcrEndpoint'), '/dataCollectionRules/', parameters('AuditDcrImmutableId'), '/streams/', parameters('AuditStreamName'), '?api-version=2023-01-01')}`
- *Ingest_To_Custom_Table*: method=`POST`, uri=`@{concat(parameters('DceEndpoint'), '/dataCollectionRules/', parameters('AlarmsDcrImmutableId'), '/streams/', parameters('AlarmsStreamName'), '?api-version=2023-01-01')}`

</details>

## Additional Documentation

> 📄 *Source: [SOCRadar-Alarm-Import/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOCRadar/Playbooks/SOCRadar-Alarm-Import/readme.md)*

# SOCRadar Alarm Import

Imports SOCRadar XTI platform alarms into Microsoft Sentinel as incidents.

Deploying this playbook also provisions the Data Collection Endpoint, the `SOCRadar_Alarms_CL` and `SOCRadarAuditLog_CL` custom log tables, the associated Data Collection Rules, and the role assignments required by the Logic App's managed identity. No separate infrastructure deployment is needed.

## Features

- Paginated alarm fetching (100 per page)
- Duplicate detection via Microsoft Sentinel API
- Severity and status mapping
- Optional closed alarm import with classification
- Automatic tagging (SOCRadar, alarm type, sub type)
- Field truncation for large alarms
- Optional audit logging

## Prerequisites

- SOCRadar XTI Platform API Key
- Microsoft Sentinel workspace
- Managed Identity with Microsoft Sentinel Responder role (default, Contributor optional)

## Deployment

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSOCRadar%2FPlaybooks%2FSOCRadar-Alarm-Import%2Fazuredeploy.json)

You can also install this playbook via **Microsoft Sentinel Content Hub**.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to SOCRadar](../solutions/socradar.md)

