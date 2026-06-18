# Microsoft Sentinel for SAP applications - agentless

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `SAPCC` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [SAP](../solutions/sap.md) |
| **Collection Method** | [Unknown](../methods/unknown.md) |

Modern agentless ingestion of SAP NetWeaver/ABAP/HANA telemetry into Microsoft Sentinel via the Codeless Connector Framework (CCF). Streams ABAPAuditLog, ABAPChangeDocsLog, ABAPUserDetails, ABAPAuthorizationDetails, and SentinelHealth as defined in Solutions/SAP/Tools/IntegrationSuite/SAPCC_DCR.json. Recommended modern path alongside the agent-based MicrosoftSentinelSAP connector.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ABAPAuditLog_CL`](../tables/abapauditlog-cl.md) | ? | ✓ | ? |
| [`ABAPAuthorizationDetails_CL`](../tables/abapauthorizationdetails-cl.md) | ? | ✓ | ? |
| [`ABAPChangeDocsLog_CL`](../tables/abapchangedocslog-cl.md) | ? | ✓ | ? |
| [`ABAPUserDetails_CL`](../tables/abapuserdetails-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

