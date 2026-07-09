# Microsoft Sentinel for SAP applications - agentless

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `SAPCC` |
| **Publisher** | Microsoft |
| **Source Vendor** | SAP *(basis: override)* |
| **Used in Solutions** | [SAP](../solutions/sap.md) |
| **Collection Method** | [REST Pull API](../methods/rest-pull-api.md) |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) |

Modern agentless ingestion of SAP NetWeaver/ABAP/HANA telemetry into Microsoft Sentinel. Streams the native ABAPAuditLog, ABAPAuthorizationDetails, ABAPChangeDocsLog, ABAPUserDetails, and SentinelHealth tables as defined in Solutions/SAP/Tools/IntegrationSuite/SAPCC_DCR.json. Recommended modern path alongside the agent-based MicrosoftSentinelSAP connector.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ABAPAuditLog`](../tables/abapauditlog.md) | ✓ | ✓ | ✓ |
| [`ABAPAuthorizationDetails`](../tables/abapauthorizationdetails.md) | ✓ | ✓ | ? |
| [`ABAPChangeDocsLog`](../tables/abapchangedocslog.md) | ✓ | ✓ | ? |
| [`ABAPUserDetails`](../tables/abapuserdetails.md) | ✓ | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

