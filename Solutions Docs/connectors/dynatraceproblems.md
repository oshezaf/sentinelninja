# Dynatrace Problems

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/dynatrace.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `DynatraceProblems` |
| **Publisher** | Dynatrace |
| **Used in Solutions** | [Dynatrace](../solutions/dynatrace.md) |
| **Collection Method** | [CCF (Legacy)](../methods/ccf-legacy.md) |
| **Connector Definition Files** | [Connector_Dynatrace_Problems.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dynatrace/Data%20Connectors/Connector_Dynatrace_Problems.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |

This connector uses the [Dynatrace Problem REST API](https://docs.dynatrace.com/docs/dynatrace-api/environment-api/problems-v2) to ingest problem events into Microsoft Sentinel Log Analytics

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DynatraceProblems_CL`](../tables/dynatraceproblems-cl.md) | ✗ | ✓ | ✗ |

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
> 📋 **Additional Configuration Step**: This connector includes a configuration step of type `APIKey`. Please refer to the Microsoft Sentinel portal for detailed configuration options for this step.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Connectors Index](../connectors-index.md)

