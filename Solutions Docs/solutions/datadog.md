# ⚠️ Datadog

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Datadog Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | Application |
| **Version** | 3.1.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2026-08-06 |
| **Solution Folder** | [Datadog](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Datadog) |

The [Datadog](https://www.datadoghq.com/) solution for Microsoft Sentinel enables you to ingest Datadog audit events, indexed logs, and security signals through the [Datadog API](https://docs.datadoghq.com/api/latest/). These data types provide visibility into administrative activity, application and infrastructure telemetry, and Datadog Security Monitoring detections.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Microsoft Sentinel Codeless Connector Framework](https://aka.ms/Sentinel-CCP_Platform)

b. [Azure Monitor Logs Ingestion API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Datadog Logs (via Codeless Connector Framework)](../connectors/datadogconnector.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`DatadogAuditLogs_CL`](../tables/datadogauditlogs-cl.md) | [Datadog Logs (via Codeless Connector Framework)](../connectors/datadogconnector.md) | - |
| [`DatadogLogs_CL`](../tables/datadoglogs-cl.md) | [Datadog Logs (via Codeless Connector Framework)](../connectors/datadogconnector.md) | - |
| [`DatadogSecurityLogs_CL`](../tables/datadogsecuritylogs-cl.md) | [Datadog Logs (via Codeless Connector Framework)](../connectors/datadogconnector.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                             |
|-------------|--------------------------------|--------------------------------------------------------------------------------|
| 3.1.0       | 12-08-2026                     | Replaced the audit-only Datadog CCF **Data Connector** with the combined Datadog connector for audit events, indexed logs, and security signals. |
| 3.0.0       | 06-08-2026                     | Initial Solution Release. Added the Datadog Audit Logs CCF **Data Connector**. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

