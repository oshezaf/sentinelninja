# Microsoft Copilot

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Copilot_logo.svg" alt="Microsoft Copilot Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Microsoft |
| **First Published** | 2025-10-01 |
| **Last Updated** | 2026-04-03 |
| **Solution Folder** | [Microsoft Copilot](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Copilot) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-microsoftcopilot) · Popularity: ⚪ Very Low (0%) |

The [Microsoft Copilot](https://www.microsoft.com/en-us/microsoft-365/copilot) solution allows you to stream your Microsoft Copilot audit logs from M365 Copilot and Security Copilot into Microsoft Sentinel in order to track Copilot activities across your organization.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

- [Office Management API](https://docs.microsoft.com/office/office-365-management-api/office-365-management-apis-overview)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Microsoft Copilot](../connectors/microsoftcopilot.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CopilotActivity`](../tables/copilotactivity.md) | [Microsoft Copilot](../connectors/microsoftcopilot.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **7 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 4 |
| Hunting Queries | 2 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Copilot - File Uploads Disabled](../content/microsoft-copilot-copilot-file-uploads-disabled-c3d4e5f6-a7b8-49c0-d1e2-f3a4b5c6d7e8-2b49efb6.md) | High | DefenseEvasion | [`CopilotActivity`](../tables/copilotactivity.md) |
| [Copilot - Jailbreak Attempt Detected](../content/microsoft-copilot-copilot-jailbreak-attempt-detected-e5f6a7b8-c9d0-41e2-f3a4-b5c6d7e8f9a0-37101c05.md) | High | InitialAccess, CredentialAccess, Impact | [`CopilotActivity`](../tables/copilotactivity.md) |
| [Copilot - Plugin Created by Non-Admin User](../content/microsoft-copilot-copilot-plugin-created-by-non-admin-user-a1b2c3d4-e5f6-47a8-b9c0-d1e2f3a4b5c6-534a022a.md) | High | Persistence, PrivilegeEscalation | [`CopilotActivity`](../tables/copilotactivity.md) |
| [Copilot - Plugin Tampering (Enable and Disable Within 5 Minutes)](../content/microsoft-copilot-copilot-plugin-tampering-enable-and-disable-within-5-minutes-d4e5f6a7-b8c9-40d1-e2f3-a4b5c6d7e8f9-e650fbfe.md) | Medium | Discovery, DefenseEvasion | [`CopilotActivity`](../tables/copilotactivity.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Copilot - Access From External IP Address](../content/microsoft-copilot-copilot-access-from-external-ip-address-f6a7b8c9-d0e1-42f3-a4b5-c6d7e8f9a0b1-76209661.md) | InitialAccess | [`CopilotActivity`](../tables/copilotactivity.md) |
| [Copilot - Plugin Enabled After Being Disabled](../content/microsoft-copilot-copilot-plugin-enabled-after-being-disabled-b2c3d4e5-f6a7-48b9-c0d1-e2f3a4b5c6d7-7fec45a8.md) | DefenseEvasion | [`CopilotActivity`](../tables/copilotactivity.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [MicrosoftCopilotActivityMonitoring](../content/microsoft-copilot-microsoftcopilotactivitymonitoring-4219cdf5.md) | [`CopilotActivity`](../tables/copilotactivity.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                                |
|-------------|--------------------------------|---------------------------------------------------------------------------------------------------|
| 3.0.2       | 02-04-2026                     | Update Solution and Connector Descriptions. <br> Added a **Analytic rules**, **Hunting Queries** and **Workbook** for Microsoft Copilot Activity Monitoring and detection. <br> Solution push to GA. |
| 3.0.1       | 12-12-2025                     | Update copilot table name from LLMActivity to CopilotActivity.                                    |
| 3.0.0       | 10-09-2025                     | Releasing a new Microsoft Copilot connector solution in Content Hub and **Data Connector** gallery.   |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

