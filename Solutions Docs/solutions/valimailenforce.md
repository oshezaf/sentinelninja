# ⚠️ ValimailEnforce

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/valimail.svg" alt="ValimailEnforce Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Valimail |
| **Support Tier** | Partner |
| **Support Link** | [https://support.valimail.com](https://support.valimail.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Valimail - support@valimail.com |
| **First Published** | 2026-03-31 |
| **Solution Folder** | [ValimailEnforce](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ValimailEnforce) |

The [Valimail API](https://support.valimail.com/en/articles/10911206-api-overview) solution provides ability to bring the Valimail Configuration events to your Microsoft Sentinel Workspace to inform and to examine potential security risks, analyze your team's use of collaboration, diagnose configuration problems and more. 

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor Logs: DCR-based Custom Logs](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview)

b. [Codeless Connector Framework (CCF)](https://learn.microsoft.com/azure/sentinel/create-codeless-connector)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Valimail Enforce Configuration Events](../connectors/valimailenforceeventsconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ValimailEnforceEvents_CL`](../tables/valimailenforceevents-cl.md) | [Valimail Enforce Configuration Events](../connectors/valimailenforceeventsconnector.md) | Analytics, Hunting |

## Content Items

This solution includes **8 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 4 |
| Hunting Queries | 4 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Valimail Enforce - DMARC Policy Weakened to None](../content/valimailenforce-valimail-enforce-dmarc-policy-weakened-to-none-44ec1fa4-a502-41ae-879a-3aad3557edce-ba6726ed.md) | High | DefenseEvasion, InitialAccess | [`ValimailEnforceEvents_CL`](../tables/valimailenforceevents-cl.md) |
| [Valimail Enforce - Email Authentication Key Deleted](../content/valimailenforce-valimail-enforce-email-authentication-key-deleted-483078c6-d029-40f3-931a-30af0032008b-737952e9.md) | Medium | DefenseEvasion | [`ValimailEnforceEvents_CL`](../tables/valimailenforceevents-cl.md) |
| [Valimail Enforce - High-Value User Management Event](../content/valimailenforce-valimail-enforce-high-value-user-management-event-e960f5b0-cd80-474a-996a-013ff3989772-199686de.md) | High | Impact, PrivilegeEscalation | [`ValimailEnforceEvents_CL`](../tables/valimailenforceevents-cl.md) |
| [Valimail Enforce - Unusual Rate of Configuration Changes or User Additions](../content/valimailenforce-valimail-enforce-unusual-rate-of-configuration-changes-or-user-additions-3cbb78d9-81ac-42c9-b3cd-7e6baea7d9ff-19771ced.md) | Medium | Impact, DefenseEvasion, PrivilegeEscalation | [`ValimailEnforceEvents_CL`](../tables/valimailenforceevents-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Valimail Enforce - Bulk Domain Changes by Single User](../content/valimailenforce-valimail-enforce-bulk-domain-changes-by-single-user-85db7cdc-378e-48b9-b6cf-77fd622aa617-4970dc01.md) | Impact, DefenseEvasion | [`ValimailEnforceEvents_CL`](../tables/valimailenforceevents-cl.md) |
| [Valimail Enforce - Configuration Change Rate Trend](../content/valimailenforce-valimail-enforce-configuration-change-rate-trend-ce30ce49-2eaf-483c-85cd-c27a645d5355-83699391.md) | Impact, DefenseEvasion, PrivilegeEscalation | [`ValimailEnforceEvents_CL`](../tables/valimailenforceevents-cl.md) |
| [Valimail Enforce - DMARC Policy Change History](../content/valimailenforce-valimail-enforce-dmarc-policy-change-history-ad6df9bc-5c1d-4dcd-8df9-516bc35f4dfe-df562b72.md) | DefenseEvasion | [`ValimailEnforceEvents_CL`](../tables/valimailenforceevents-cl.md) |
| [Valimail Enforce - High Value Event Summary](../content/valimailenforce-valimail-enforce-high-value-event-summary-a2be34b7-e841-471a-aaac-142be8a74cab-8dcb669f.md) | DefenseEvasion, Impact | [`ValimailEnforceEvents_CL`](../tables/valimailenforceevents-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 22-04-2026                     | Initial Solution Release                    |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

