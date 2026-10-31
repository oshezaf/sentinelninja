# RedRays SAP Security Platform for Microsoft Sentinel

*Solution: RedRays SAP Security Findings*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/RedRays.svg" alt="RedRays SAP Security Findings Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | RedRays, Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://redrays.io/](https://redrays.io/) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.0 |
| **Author** | RedRays, Inc. - support@redrays.io |
| **First Published** | 2026-10-06 |
| **Last Updated** | 2026-10-28 |
| **Solution Folder** | [RedRays SAP Security Findings](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RedRays%20SAP%20Security%20Findings) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/redrays1688649150557.azure-sentinel-solution-redrays) · Popularity: ⚪ Very Low (0%) |

The [RedRays](https://redrays.io/) preview solution brings SAP vulnerability, ABAP code, BTP, segregation of duties, profile parameter and password security findings into Microsoft Sentinel with analytics rules and a workbook. RedRays exports on a configurable schedule from your existing environment. It does not collect SAP Security Audit Log events or populate ABAPAuditLog. A RedRays license with Microsoft Sentinel integration is required.

**Underlying Microsoft Technologies used:**

[Log Analytics](https://learn.microsoft.com/azure/azure-monitor/logs/log-analytics-workspace-overview), [Logs Ingestion API and DCRs](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), and [Microsoft Entra applications and service principals](https://learn.microsoft.com/entra/identity-platform/app-objects-and-service-principals). Azure ingestion and retention charges apply.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [RedRays SAP Security Findings](../connectors/redrayssapsecurityfindings.md)

## Tables Used

This solution uses **8 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`RedRaysAbapFindings_CL`](../tables/redraysabapfindings-cl.md) | [RedRays SAP Security Findings](../connectors/redrayssapsecurityfindings.md) | Analytics, Workbooks |
| [`RedRaysCloudFindings_CL`](../tables/redrayscloudfindings-cl.md) | [RedRays SAP Security Findings](../connectors/redrayssapsecurityfindings.md) | Analytics, Workbooks |
| [`RedRaysExportHealth_CL`](../tables/redraysexporthealth-cl.md) | [RedRays SAP Security Findings](../connectors/redrayssapsecurityfindings.md) | Workbooks |
| [`RedRaysPasswordFindings_CL`](../tables/redrayspasswordfindings-cl.md) | [RedRays SAP Security Findings](../connectors/redrayssapsecurityfindings.md) | Analytics, Workbooks |
| [`RedRaysProfileChecks_CL`](../tables/redraysprofilechecks-cl.md) | [RedRays SAP Security Findings](../connectors/redrayssapsecurityfindings.md) | Analytics, Workbooks |
| [`RedRaysScanRuns_CL`](../tables/redraysscanruns-cl.md) | [RedRays SAP Security Findings](../connectors/redrayssapsecurityfindings.md) | Workbooks |
| [`RedRaysSoDFindings_CL`](../tables/redrayssodfindings-cl.md) | [RedRays SAP Security Findings](../connectors/redrayssapsecurityfindings.md) | Analytics, Workbooks |
| [`RedRaysVulnerabilities_CL`](../tables/redraysvulnerabilities-cl.md) | [RedRays SAP Security Findings](../connectors/redrayssapsecurityfindings.md) | Analytics, Workbooks |

## Content Items

This solution includes **7 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 6 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [RedRays - ABAP Code Security](../content/redrays-sap-security-findings-redrays-abap-code-security-c9ed9a25-ad18-5cbb-8b43-b6399a802913-f1b8ee76.md) | High | InitialAccess, PrivilegeEscalation | [`RedRaysAbapFindings_CL`](../tables/redraysabapfindings-cl.md) |
| [RedRays - Cloud Security](../content/redrays-sap-security-findings-redrays-cloud-security-31669aab-4fe7-51e2-9f66-9813c16a1a27-30780bad.md) | High | InitialAccess, PrivilegeEscalation | [`RedRaysCloudFindings_CL`](../tables/redrayscloudfindings-cl.md) |
| [RedRays - Password Security](../content/redrays-sap-security-findings-redrays-password-security-ebd95a4d-cc56-5f01-a1de-36aa67e66794-783e1a51.md) | High | CredentialAccess | [`RedRaysPasswordFindings_CL`](../tables/redrayspasswordfindings-cl.md) |
| [RedRays - Profile Parameters](../content/redrays-sap-security-findings-redrays-profile-parameters-708b461c-40b0-571a-8ec5-a3791dce23a4-6c41e34e.md) | Medium | DefenseEvasion, CredentialAccess | [`RedRaysProfileChecks_CL`](../tables/redraysprofilechecks-cl.md) |
| [RedRays - SoD](../content/redrays-sap-security-findings-redrays-sod-699d4ec8-6c5c-5440-8664-df92012636ad-1cc68306.md) | High | PrivilegeEscalation, Persistence | [`RedRaysSoDFindings_CL`](../tables/redrayssodfindings-cl.md) |
| [RedRays - Vulnerability Assessment](../content/redrays-sap-security-findings-redrays-vulnerability-assessment-2b92972c-29d5-58f8-9452-b0a723672183-5b026c91.md) | High | InitialAccess, PrivilegeEscalation | [`RedRaysVulnerabilities_CL`](../tables/redraysvulnerabilities-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [RedRaysSAPSecurityFindings](../content/redrays-sap-security-findings-redrayssapsecurityfindings-23093b9e.md) | [`RedRaysAbapFindings_CL`](../tables/redraysabapfindings-cl.md)<br>[`RedRaysCloudFindings_CL`](../tables/redrayscloudfindings-cl.md)<br>[`RedRaysExportHealth_CL`](../tables/redraysexporthealth-cl.md)<br>[`RedRaysPasswordFindings_CL`](../tables/redrayspasswordfindings-cl.md)<br>[`RedRaysProfileChecks_CL`](../tables/redraysprofilechecks-cl.md)<br>[`RedRaysScanRuns_CL`](../tables/redraysscanruns-cl.md)<br>[`RedRaysSoDFindings_CL`](../tables/redrayssodfindings-cl.md)<br>[`RedRaysVulnerabilities_CL`](../tables/redraysvulnerabilities-cl.md) |

## Additional Documentation

> 📄 *Source: [RedRays SAP Security Findings/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RedRays%20SAP%20Security%20Findings/README.md)*

Bring RedRays SAP security findings into Microsoft Sentinel to review them alongside your
other security data. This preview includes findings from Vulnerability Assessment, ABAP Code
Security, BTP Security, Segregation of Duties, SAP Profile Parameters and Password Security.
Threat Modelling is not included.

RedRays stays in your existing Docker, on-premises or cloud environment and sends findings
through the Azure Monitor Logs Ingestion API on a schedule you choose. The solution supports
Azure public cloud. You need a RedRays license with Microsoft Sentinel integration; Azure
ingestion and retention charges are separate.

This solution covers security assessments. It does not collect SAP Security Audit Log events,
populate `ABAPAuditLog` or activate Microsoft's built-in SAP audit detections.

## Set up the integration

The Content Hub package installs a Codeless Connector Framework (CCF) push connector, six
analytics rule templates and a workbook template. You deploy the ingestion resources from the
connector page and enable the rules after installation. RedRays sends the data. The package does
not deploy a RedRays server, Azure Function, VM or polling agent.

1. **Deploy the push connector resources.** In Microsoft Sentinel, open **Data connectors >
   RedRays SAP Security Findings** and select **Deploy**. Sentinel creates a data collection
   endpoint (DCE), a data collection rule (DCR) and the eight RedRays tables, then registers a
   Microsoft Entra application with a client secret and grants it the Monitoring Metrics
   Publisher role on the DCR. You need permission to create app registrations and to assign
   roles on the DCR. Copy the client secret immediately; it is shown only once.
2. **Configure RedRays.** In RedRays > Platform Settings > Microsoft Sentinel, enter the tenant
   ID, application (client) ID, client secret, DCE URI and DCR immutable ID shown on the
   connector page. Choose the modules and export interval, then save and enable the integration.
   Keep `alertOnBaseline` disabled for the first import so you can review the initial findings
   before creating alerts.
3. **Check delivery.** Send a test event, then wait for a scheduled export. Query
   `RedRaysExportHealth_CL` for `RecordKind == 'HEARTBEAT'`. A successful test means Azure
   accepted the request; the data may take time to appear in queries.
4. **Enable the content you need.** In Manage solution, create the workbook and your chosen
   analytics rules. Review the initial findings first. Set the workbook export health threshold above
   your export interval, allowing time for ingestion.

Allow outbound HTTPS from RedRays to Microsoft Entra and the data collection endpoint.
No inbound connection to RedRays is required. Rotate the application credential in Entra and
update it in RedRays before it expires. Keep credentials out of the solution package.

## Tables

| Table | Content |
|---|---|
| RedRaysVulnerabilities_CL | SAP vulnerability assessment findings |

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|---|---|---|
| 3.0.0 | 27-10-2026 | Initial preview: Codeless Connector Framework (CCF) push connector for the Logs Ingestion API, eight table schemas, six assessment analytics templates with entity mappings, and a time-filtered workbook with export health. Includes descriptive rule filenames, SVG branding and light/dark previews; every rule carries MITRE ATT&CK tactics and techniques (password recovery maps to CredentialAccess / T1110), and operational heartbeat monitoring remains in the workbook. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

