# ⚠️ Microsoft 365 Audit General and DLP

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/office365_logo.svg" alt="Microsoft 365 Audit General and DLP Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Marko Lauren |
| **Support Tier** | Partner |
| **Support Link** | [https://markolauren.github.io/M365AuditGeneralAndDLPSolution/](https://markolauren.github.io/M365AuditGeneralAndDLPSolution/) |
| **Categories** | Cloud Provider |
| **Source Vendor** | Marko Lauren *(basis: publisher)* |
| **Version** | 3.0.0 |
| **Author** | Marko Lauren - M365AuditGeneralAndDLPSolution@outlook.com |
| **First Published** | 2026-01-08 |
| **Solution Folder** | [Microsoft 365 Audit General and DLP](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20365%20Audit%20General%20and%20DLP) |

The Microsoft 365 Audit General & DLP solution provides capability to ingest M365 Audit.General and Audit.DLP logs into Microsoft Sentinel using the Codeless Connector Platform. This solution enables comprehensive auditing and DLP monitoring for Microsoft 365 environments covering 29 specialty workloads including Copilot, Power BI, Viva suite, Security & Compliance, eDiscovery, and Sentinel platform operations.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

• [Microsoft Sentinel Codeless Connector Framework](https://aka.ms/Sentinel-CCP_Platform)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **2 data connector(s)**:

- [Microsoft 365 Audit.DLP](../connectors/m365auditdlpccpdefinition.md)
- [Microsoft 365 Audit.General](../connectors/m365auditgeneralccpdefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`M365AuditGeneral_CL`](../tables/m365auditgeneral-cl.md) | [Microsoft 365 Audit.DLP](../connectors/m365auditdlpccpdefinition.md), [Microsoft 365 Audit.General](../connectors/m365auditgeneralccpdefinition.md) | - |

## Additional Documentation

> 📄 *Source: [Microsoft 365 Audit General and DLP/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20365%20Audit%20General%20and%20DLP/README.md)*

**Author**: Marko Lauren

This solution provides **two codeless connectors (CCF)** for ingesting Microsoft 365 audit logs from the Office 365 Management Activity API into Microsoft Sentinel:
- **Microsoft 365 Audit.General** - General audit logs (29 specialty workloads)
- **Microsoft 365 Audit.DLP** - Data Loss Prevention events

## Overview

These connectors use the **Office 365 Management Activity API** to retrieve Microsoft 365 audit logs into a shared **321-column schema** covering **30 specialty workload types**:

- **Audit.General connector**: 29 specialty workloads (Copilot, Power BI, Viva suite, Security & Compliance, eDiscovery, Sentinel platform, etc.)
- **Audit.DLP connector**: Data loss prevention (DLP) events in Microsoft Purview available for Exchange Online, Endpoint(devices), and SharePoint and OneDrive.

**Schema Design:** This connector follows the official [Office 365 Management Activity API Schema](https://learn.microsoft.com/en-us/office/office-365-management-api/office-365-management-activity-api-schema) as documented by Microsoft. All field names, types, and structures are mapped directly from the API schema to ensure compatibility and accuracy.

## Content Types Coverage

The Office 365 Management Activity API organizes audit data into different content types:
- **Audit.AzureActiveDirectory** - Azure AD/Entra ID events (sign-ins, directory changes)
- **Audit.Exchange** - Exchange Online events (email, mailbox access)
- **Audit.SharePoint** - SharePoint/OneDrive events (file operations)
- **Audit.General** ✅ - All other Microsoft 365 workloads not in the above (covered by this solution)
- **DLP.All** ✅ - DLP events only for all workloads (covered by this solution)

### Audit.General Connector Scope

**✅ Included (29 specialty workload schemas):**
- **Copilot & AI**: Microsoft 365 Copilot interactions, AI Agent operations, Copilot scheduled prompts
- **Power Platform**: Power BI (dashboards, datasets, reports), Microsoft Forms
- **Collaboration**: Viva Engage (Yammer), Project for the web
- **Viva Suite**: Viva Insights, Viva Goals, Viva Glint, Viva Pulse
- **Security & Compliance**: Microsoft Defender for Office 365, Attack Simulation & Training, User Submissions, Automated Investigation & Response (AIR), Hygiene Events, Quarantine, Security & Compliance Alerts, Security & Compliance Center operations
- **Information Protection**: MIP Label, Encrypted Message Portal
- **eDiscovery**: eDiscovery case management, search, export, and hold operations
- **Cloud Management**: Backup/Restore operations (Policy, Task, Item schemas)
- **Security Tools**: Microsoft Edge WebContentFiltering
- **Microsoft Sentinel**: Sentinel Data Lake operations (Notebooks, Jobs, KQL queries, Lake onboarding, AI Tools, Graph operations)
- **Infrastructure**: Places Directory, Data Center Security (Base & Cmdlet schemas)

**❌ Excluded (have dedicated Microsoft Sentinel connectors or filtered):**

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.0       | 20-04-2026                     | Initial release with Microsoft 365 Audit.General and Audit.DLP data connectors using Codeless Connector Framework. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

