# Dynatrace Runtime Vulnerabilities V3

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/dynatrace.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `DTRunVulnV3CCPDefinition` |
| **Publisher** | Dynatrace |
| **Used in Solutions** | [Dynatrace](../solutions/dynatrace.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [Connector_Dynatrace_RuntimeVulnerabilities_Definition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dynatrace/Data%20Connectors/DynatraceRuntimeVulnerabilitiesV3/Connector_Dynatrace_RuntimeVulnerabilities_Definition.json) |
| **DCR Definition Files** | [Connector_Dynatrace_RuntimeVulnerabilities_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dynatrace/Data%20Connectors/DynatraceRuntimeVulnerabilitiesV3/Connector_Dynatrace_RuntimeVulnerabilities_DCR.json) |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#dynatrace-runtime-vulnerabilities-v3) |

This connector uses the [Dynatrace DQL Storage Query API](https://docs.dynatrace.com/docs/platform/grail/dynatrace-query-language) to ingest detected runtime vulnerabilities into Microsoft Sentinel Log Analytics.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DynatraceSecurityProblemsV3Raw_CL`](../tables/dynatracesecurityproblemsv3raw-cl.md) | ? | ✓ | ? |
| [`DynatraceSecurityProblemsV3_CL`](../tables/dynatracesecurityproblemsv3-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Dynatrace SaaS environment (ex. xyz.apps.dynatrace.com)**: You need a Dynatrace SaaS environment (xxx.apps.dynatrace.com) with [Application Security](https://www.dynatrace.com/platform/application-security/) enabled. Classic Dynatrace environments (xxx.live.dynatrace.com) are not supported.
- **Dynatrace Platform Token**: You need a Dynatrace platform token with the ***storage:buckets:read*** and ***storage:security.events:read*** scopes. See [Dynatrace platform tokens](https://docs.dynatrace.com/docs/manage/identity-access-management/access-tokens-and-oauth-clients/platform-tokens) for instructions.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Dynatrace Vulnerabilities Events to Microsoft Sentinel**

Configure and Enable Dynatrace [Application Security](https://www.dynatrace.com/platform/application-security/). 
 1. Create a platform token with the ***storage:buckets:read*** and ***storage:security.events:read*** scopes following [these instructions](https://docs.dynatrace.com/docs/manage/identity-access-management/access-tokens-and-oauth-clients/platform-tokens). 
 2. Use your Dynatrace SaaS environment URL in the format ***xyz.apps.dynatrace.com***. 
 3. In **Microsoft Sentinel → Content Hub**, find the Dynatrace solution and enable the ***Consolidate Dynatrace Runtime Vulnerabilities*** summary rule. This is required to consolidate raw vulnerability events into the table used by analytics rules and the parser.
- **Dynatrace environment (ex. xyz.apps.dynatrace.com)**: {{dynatraceEnvironmentUrl}}
- **Dynatrace Platform Token**: (password field)
- Click 'connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

