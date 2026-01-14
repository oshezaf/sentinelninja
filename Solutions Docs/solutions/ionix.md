# IONIX

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ionix-logo.svg" alt="IONIX Logo" width="75" height="75">

The [IONIX](https://ionix.io/) solution for Microsoft Sentinel enables you to ingest vulnerability logs from the IONIX platform into Microsoft Sentinel.

**Underlying Microsoft Technologies used:**

This solution is dependent on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Codeless Connector Platform/Native Sentinel Polling](https://docs.microsoft.com/azure/sentinel/create-codeless-connector?tabs=deploy-via-arm-template%2Cconnect-via-the-azure-portal)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | IONIX |
| **Support Tier** | Partner |
| **Support Link** | [https://www.ionix.io/contact-us/](https://www.ionix.io/contact-us/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | IONIX |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IONIX](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IONIX) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [IONIX Security Logs](../connectors/cyberpionsecuritylogs.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CyberpionActionItems_CL`](../tables/cyberpionactionitems-cl.md) | [IONIX Security Logs](../connectors/cyberpionsecuritylogs.md) | Analytics, Workbooks |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [High Urgency IONIX Action Items](../content/ionix-high-urgency-ionix-action-items-8e0403b1-07f8-4865-b2e9-74d1e83200a4-39544ba2.md) | High | InitialAccess | [`CyberpionActionItems_CL`](../tables/cyberpionactionitems-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [IONIXOverviewWorkbook](../content/ionix-ionixoverviewworkbook-5e96257f.md) | [`CyberpionActionItems_CL`](../tables/cyberpionactionitems-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------------------------------------------------------|
| 3.0.0       | 20-09-2023                     | 	A UI-only update as part of a re-branding from "Cyberpion" to "IONIX" (no change to core functionality) \| v1.0.1 |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

