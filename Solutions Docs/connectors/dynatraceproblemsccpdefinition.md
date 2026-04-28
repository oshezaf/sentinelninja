# Dynatrace Problems V2

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/dynatrace.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `DynatraceProblemsCCPDefinition` |
| **Publisher** | Dynatrace |
| **Used in Solutions** | [Dynatrace](../solutions/dynatrace.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [Connector_Dynatrace_Problems_Definition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dynatrace/Data%20Connectors/DynatraceProblemsV2/Connector_Dynatrace_Problems_Definition.json) |

This connector uses the [Dynatrace Problem REST API](https://docs.dynatrace.com/docs/dynatrace-api/environment-api/problems-v2) to ingest problem events into Microsoft Sentinel Log Analytics

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DynatraceProblemsV2_CL`](../tables/dynatraceproblemsv2-cl.md) | ? | ✓ | ? |
| [`DynatraceProblems_CL`](../tables/dynatraceproblems-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Dynatrace tenant (ex. xyz.dynatrace.com)**: You need a valid Dynatrace Tenant, to learn more about the Dynatrace platform [Start your free trial](https://www.dynatrace.com/trial).
- **Dynatrace Access Token**: You need a Dynatrace Access Token, the token should have ***Read problems*** (problems.read) scope.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Dynatrace Problem Events to Microsoft Sentinel**

Follow [these instructions](https://docs.dynatrace.com/docs/shortlink/token#create-api-token) to generate an access token.
- **Dynatrace tenant (ex. xyz.dynatrace.com)**: {{dynatraceEnvironmentUrl}}
- **Dynatrace Access Token**: (password field)
- Click 'connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

