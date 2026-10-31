# Pulumi Cloud Audit Logs

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Pulumi.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `PulumiAuditLogsDefinition` |
| **Publisher** | Pulumi |
| **Used in Solutions** | [PulumiCloudAuditLogs](../solutions/pulumicloudauditlogs.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [PulumiAuditLogs_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PulumiCloudAuditLogs/Data%20Connectors/PulumiAuditLogs_CCF/PulumiAuditLogs_ConnectorDefinition.json) |
| **DCR Definition Files** | [PulumiAuditLogs_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PulumiCloudAuditLogs/Data%20Connectors/PulumiAuditLogs_CCF/PulumiAuditLogs_DCR.json) |
| **CCF Configuration** | [PulumiAuditLogs_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PulumiCloudAuditLogs/Data%20Connectors/PulumiAuditLogs_CCF/PulumiAuditLogs_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#pulumi-cloud-audit-logs) |

The Pulumi Cloud Audit Logs connector provides the capability to ingest [Pulumi Cloud audit log events](https://www.pulumi.com/docs/pulumi-cloud/audit-logs/) into Microsoft Sentinel. By connecting Pulumi Cloud audit logs to Microsoft Sentinel, you can monitor infrastructure-as-code operations, detect unauthorized access attempts, track organization membership changes, and investigate security incidents.



This connector polls the Pulumi Cloud REST API to retrieve audit log events for your organization.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PulumiAuditLogs_CL`](../tables/pulumiauditlogs-cl.md) 🔶 | ✗ | ✓ | ✗ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Pulumi Cloud access token**: A Pulumi Cloud [personal access token](https://www.pulumi.com/docs/pulumi-cloud/access-management/access-tokens/) with permissions to read audit logs is required. The organization must be on a Pulumi Cloud edition that includes audit log export (Pro or above).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Pulumi Cloud Audit Logs to Microsoft Sentinel**

Provide your Pulumi Cloud organization name and access token to start ingesting audit log events.

1. Create a [Pulumi access token](https://app.pulumi.com/account/tokens) with audit log read permissions.
2. Enter your Pulumi organization name and access token below.
3. Enter the Pulumi API URL: `https://api.pulumi.com` for managed Pulumi Cloud, or the API endpoint of your self-hosted Pulumi Cloud instance.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Pulumi Organization**
- **API URL**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Connect Pulumi Cloud Organization**

*Add a Pulumi Cloud organization to ingest its audit log events*

When you click the "Add Organization" button in the portal, a configuration form will open. You'll need to provide:

- **Pulumi Organization Name** (required): my-org
- **Pulumi Access Token** (required): pul-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- **Pulumi API URL** (required): https://api.pulumi.com

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

