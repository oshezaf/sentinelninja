# ⚠️ Egress Defend

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Egress-logo.svg" alt="Egress Defend Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

Egress Defend for Microsoft Sentinel provides details of processed emails, including the type of phishing attack, payload type and information to show if the user interacted with the email in a positive (clicking on banners or submitting the phish sample) or negative (clicking on an unsafe URL) manner.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | egress1589289169584 |
| **Support Tier** | Partner |
| **Support Link** | [https://support.egress.com/s/](https://support.egress.com/s/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Egress - support@egress.com |
| **First Published** | 2023-07-27 |
| **Solution Folder** | [Egress Defend](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Egress%20Defend) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Egress Defend](../connectors/egressdefendpolling.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`EgressDefend_CL`](../tables/egressdefend-cl.md) | [Egress Defend](../connectors/egressdefendpolling.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Hunting Queries | 1 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Egress Defend - Dangerous Attachment Detected](../content/egress-defend-egress-defend-dangerous-attachment-detected-a0e55dd4-8454-4396-91e6-f28fec3d2cab-f2c1e438.md) | Medium | Execution, InitialAccess, Persistence, PrivilegeEscalation | [`EgressDefend_CL`](../tables/egressdefend-cl.md) |
| [Egress Defend - Dangerous Link Click](../content/egress-defend-egress-defend-dangerous-link-click-a896123e-03a5-4a4d-a7e3-fd814846dfb2-cd7508b8.md) | Medium | Execution | [`EgressDefend_CL`](../tables/egressdefend-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Dangerous emails with links clicked](../content/egress-defend-dangerous-emails-with-links-clicked-57ada8d5-7a26-4440-97fd-32c5c3fd0421-6c714e87.md) | Collection | [`EgressDefend_CL`](../tables/egressdefend-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [DefendMetrics](../content/egress-defend-defendmetrics-35b2f8e1.md) | [`EgressDefend_CL`](../tables/egressdefend-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DefendAuditData](../content/egress-defend-defendauditdata-0d23aae5-6f59-47d8-902e-ba136b64a094-882acf80.md) ⚠️ | - | [`EgressDefend_CL`](../tables/egressdefend-cl.md) *(read)* |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 02-08-2023                     | Initial Solution Release.                   |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

