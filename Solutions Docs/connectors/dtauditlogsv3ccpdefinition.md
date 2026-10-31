# Dynatrace Audit Logs V3

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/dynatrace.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `DTAuditLogsV3CCPDefinition` |
| **Publisher** | Dynatrace |
| **Used in Solutions** | [Dynatrace](../solutions/dynatrace.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [Connector_Dynatrace_AuditLogs_Definition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dynatrace/Data%20Connectors/DynatraceAuditLogsV3/Connector_Dynatrace_AuditLogs_Definition.json) |
| **DCR Definition Files** | [Connector_Dynatrace_AuditLogs_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dynatrace/Data%20Connectors/DynatraceAuditLogsV3/Connector_Dynatrace_AuditLogs_DCR.json) |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#dynatrace-audit-logs-v3) |

This connector uses the [Dynatrace DQL Storage Query API](https://docs.dynatrace.com/docs/platform/grail/dynatrace-query-language) to ingest tenant audit log events into Microsoft Sentinel Log Analytics.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DynatraceAuditLogsV3_CL`](../tables/dynatraceauditlogsv3-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Dynatrace SaaS environment (ex. xyz.apps.dynatrace.com)**: You need a Dynatrace SaaS environment (xxx.apps.dynatrace.com). Classic Dynatrace environments (xxx.live.dynatrace.com) are not supported.
- **Dynatrace Platform Token**: You need a Dynatrace platform token with the ***storage:buckets:read*** and ***storage:system:read*** scopes. See [Dynatrace platform tokens](https://docs.dynatrace.com/docs/manage/identity-access-management/access-tokens-and-oauth-clients/platform-tokens) for instructions.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Dynatrace Audit Log Events to Microsoft Sentinel**

Enable Dynatrace Audit [Logging](https://docs.dynatrace.com/docs/shortlink/audit-logs#enable-audit-logging). 
 1. Create a platform token with the ***storage:buckets:read*** and ***storage:system:read*** scopes following [these instructions](https://docs.dynatrace.com/docs/manage/identity-access-management/access-tokens-and-oauth-clients/platform-tokens). 
 2. Use your Dynatrace SaaS environment URL in the format ***xyz.apps.dynatrace.com***. Classic Dynatrace environments (***xxx.live.dynatrace.com***) are not supported.
- **Dynatrace environment (ex. xyz.apps.dynatrace.com)**: {{dynatraceEnvironmentUrl}}
- **Dynatrace Platform Token**: (password field)
- Click 'connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

