# ⚠️ Microsoft Sentinel for SAP

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `MicrosoftSentinelSAP` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [SAP](../solutions/sap.md) |
| **Collection Method** | [Unknown](../methods/unknown.md) |

The Microsoft Sentinel solution for SAP allows you to monitor SAP systems and detect sophisticated threats throughout the business logic and application layers. The solution includes the Microsoft Sentinel for SAP data connector which collects logs from across the entire SAP system landscape using a containerized agent.

## Additional Information

- 📖 **Deployment Guide:** [SAP solution deployment overview](https://learn.microsoft.com/azure/sentinel/sap/deployment-overview) - Step-by-step guide for deploying the agentless or containerized data connector
- 📖 **Log Reference:** [SAP log and table reference](https://learn.microsoft.com/azure/sentinel/sap/sap-solution-log-reference) - Logs collected by the data connector including ABAPAuditLog and ABAPChangeDocsLog
- 📖 **Security Content:** [SAP security content reference](https://learn.microsoft.com/azure/sentinel/sap/sap-solution-security-content) - Built-in analytics rules and watchlists for SAP threat detection

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ABAPAuditLog_CL`](../tables/abapauditlog-cl.md) | ? | ✓ | ? |
| [`ABAPChangeDocsLog_CL`](../tables/abapchangedocslog-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Connectors Index](../connectors-index.md)

