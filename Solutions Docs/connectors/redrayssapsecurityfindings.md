# RedRays SAP Security Findings

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/RedRays.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `RedRaysSAPSecurityFindings` |
| **Publisher** | RedRays, Inc. |
| **Used in Solutions** | [RedRays SAP Security Findings](../solutions/redrays-sap-security-findings.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [RedRaysSAPSecurityFindings_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RedRays%20SAP%20Security%20Findings/Data%20Connectors/RedRaysSAPSecurityFindings_PUSH_CCP/RedRaysSAPSecurityFindings_connectorDefinition.json) |
| **DCR Definition Files** | [RedRaysSAPSecurityFindings_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RedRays%20SAP%20Security%20Findings/Data%20Connectors/RedRaysSAPSecurityFindings_PUSH_CCP/RedRaysSAPSecurityFindings_DCR.json) |
| **CCF Configuration** | [RedRaysSAPSecurityFindings_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RedRays%20SAP%20Security%20Findings/Data%20Connectors/RedRaysSAPSecurityFindings_PUSH_CCP/RedRaysSAPSecurityFindings_PollerConfig.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |

Bring RedRays SAP security findings into Microsoft Sentinel. Review vulnerability assessments, ABAP code findings, BTP security, segregation of duties, profile parameter checks and password security in one workbook, with analytics rules for findings that need attention. RedRays pushes data on a schedule you choose through the Azure Monitor Logs Ingestion API and stays in your existing on-premises or cloud environment. This connector does not collect SAP Security Audit Log events or populate ABAPAuditLog. You need a RedRays license with Microsoft Sentinel integration. Azure ingestion and retention charges apply.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`RedRaysAbapFindings_CL`](../tables/redraysabapfindings-cl.md) | ? | ✓ | ? |
| [`RedRaysCloudFindings_CL`](../tables/redrayscloudfindings-cl.md) | ? | ✓ | ? |
| [`RedRaysExportHealth_CL`](../tables/redraysexporthealth-cl.md) | ? | ✓ | ? |
| [`RedRaysPasswordFindings_CL`](../tables/redrayspasswordfindings-cl.md) | ? | ✓ | ? |
| [`RedRaysProfileChecks_CL`](../tables/redraysprofilechecks-cl.md) | ? | ✓ | ? |
| [`RedRaysScanRuns_CL`](../tables/redraysscanruns-cl.md) | ? | ✓ | ? |
| [`RedRaysSoDFindings_CL`](../tables/redrayssodfindings-cl.md) | ? | ✓ | ? |
| [`RedRaysVulnerabilities_CL`](../tables/redraysvulnerabilities-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Microsoft Entra**: Permission to create an app registration in Microsoft Entra ID. Typically requires the Application Developer role or higher.
- **Microsoft Azure**: Permission to assign the Monitoring Metrics Publisher role on data collection rules. Typically requires the Owner or User Access Administrator role.
- **RedRays settings access**: Permission to configure the Microsoft Sentinel integration in RedRays.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Deploy the push connector resources**

Select **Deploy** to create a data collection endpoint (DCE), a data collection rule (DCR) and the eight RedRays tables in this workspace. Microsoft Sentinel also creates a Microsoft Entra app registration with a client secret and grants it the Monitoring Metrics Publisher role on the DCR, so RedRays can send data with OAuth 2.0 client credentials. Workspace shared keys are not used.

ℹ️ The client secret is shown only once, right after deployment. Copy it immediately. If you miss it, open Microsoft Entra ID > App registrations, select **RedRays SAP Security Findings**, and create a new client secret under Certificates & secrets.
Deploy

**2. Configure RedRays**

In RedRays, open **Platform Settings > Microsoft Sentinel** and enter the values below. Choose the modules to export and how often to send data. Keep baseline alerting disabled for the first import, then save and enable the integration. RedRays needs outbound HTTPS access to Microsoft Entra and the data collection endpoint. No inbound connection is required.
- **Tenant ID**: `TenantId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Application (client) ID**: `ApplicationId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Client secret**: `ApplicationSecret`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Ingestion endpoint (DCE URI)**: `DataCollectionEndpoint`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **DCR immutable ID**: `DataCollectionRuleId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

**3. Verify delivery**

Send a test event from RedRays, then wait for a scheduled export. Query RedRaysExportHealth_CL for RecordKind == 'HEARTBEAT'. A successful test means Azure accepted the request; the record may take a few minutes to appear in queries. RedRays sends each module to its own stream (Custom-RedRaysExportHealth_CL, Custom-RedRaysScanRuns_CL, Custom-RedRaysVulnerabilities_CL, Custom-RedRaysAbapFindings_CL, Custom-RedRaysCloudFindings_CL, Custom-RedRaysSoDFindings_CL, Custom-RedRaysProfileChecks_CL and Custom-RedRaysPasswordFindings_CL) on the same DCR.

**4. Enable security content**

Open Manage solution to create the workbook and selected analytics rules from templates. Review the initial findings before enabling rules. Most finding rules alert on actionable High or Critical candidates. The profile rule raises Medium severity alerts for VULNERABLE checks. The workbook flags heartbeats older than 60 minutes; adjust the threshold above your export interval and expected ingestion delay. Disable equivalent rules from earlier RedRays deployments to avoid duplicate alerts. For help, contact support@redrays.io.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

