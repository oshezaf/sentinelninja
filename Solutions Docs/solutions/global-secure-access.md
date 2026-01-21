# Global Secure Access

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/gsa.svg" alt="Global Secure Access Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

[Global Secure Access](https://aka.ms/GlobalSecureAccess) is a [domain solution](https://learn.microsoft.com/en-us/azure/sentinel/sentinel-solutions-catalog#domain-solutions) and does not include any data connectors. The content in this solution requires one of the product solutions below.

**Prerequisite:**

Install one or more of the listed solutions to unlock the value provided by this solution.
1. Microsoft Entra ID 

**Underlying Microsoft Technologies used:**

This solution depends on the following technologies, and some of these dependencies may either be in Preview state or might result in additional ingestion or operational costs:
1. Product solutions as described above


## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://learn.microsoft.com/en-us/entra/global-secure-access/overview-what-is-global-secure-access](https://learn.microsoft.com/en-us/entra/global-secure-access/overview-what-is-global-secure-access) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2024-04-08 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Global%20Secure%20Access](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Global%20Secure%20Access) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **5 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`EnrichedMicrosoft365AuditLogs`](../tables/enrichedmicrosoft365auditlogs.md) | Workbooks |
| [`NetworkAccessTraffic`](../tables/networkaccesstraffic.md) | Analytics, Workbooks |
| [`OfficeActivity`](../tables/officeactivity.md) | Workbooks |
| [`Operation`](../tables/operation.md) | Workbooks |
| [`SigninLogs`](../tables/signinlogs.md) | Workbooks |

## Content Items

This solution includes **6 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 4 |
| Workbooks | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [GSA - Detect Abnormal Deny Rate for Source to Destination IP](../content/global-secure-access-gsa-detect-abnormal-deny-rate-for-source-to-destination-ip-e3b6a9e7-4c3a-45e6-8baf-1d3bfa8e0c2b-aebab9fd.md) | Medium | InitialAccess, Exfiltration, CommandAndControl | [`NetworkAccessTraffic`](../tables/networkaccesstraffic.md) |
| [GSA - Detect Connections Outside Operational Hours](../content/global-secure-access-gsa-detect-connections-outside-operational-hours-4c9f0a9e-44d7-4c9b-b7f0-f6a6e0d8f8fa-4e59bfee.md) | High | InitialAccess | [`NetworkAccessTraffic`](../tables/networkaccesstraffic.md) |
| [GSA - Detect Protocol Changes for Destination Ports](../content/global-secure-access-gsa-detect-protocol-changes-for-destination-ports-f6a8d6a5-3e9f-47c8-a8d5-1b2b9d3b7d6a-c17b64bc.md) | Medium | DefenseEvasion, Exfiltration, CommandAndControl | [`NetworkAccessTraffic`](../tables/networkaccesstraffic.md) |
| [GSA - Detect Source IP Scanning Multiple Open Ports](../content/global-secure-access-gsa-detect-source-ip-scanning-multiple-open-ports-82cfa6b9-5f7e-4b8b-8b2f-a63f21b7a7d1-5a266ab8.md) | Medium | Discovery | [`NetworkAccessTraffic`](../tables/networkaccesstraffic.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [GSAM365EnrichedEvents](../content/global-secure-access-gsam365enrichedevents-b8162378.md) | [`EnrichedMicrosoft365AuditLogs`](../tables/enrichedmicrosoft365auditlogs.md)<br>[`NetworkAccessTraffic`](../tables/networkaccesstraffic.md)<br>[`OfficeActivity`](../tables/officeactivity.md)<br>[`Operation`](../tables/operation.md) |
| [GSANetworkTraffic](../content/global-secure-access-gsanetworktraffic-b1c45294.md) | [`NetworkAccessTraffic`](../tables/networkaccesstraffic.md)<br>[`SigninLogs`](../tables/signinlogs.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                       |
|-------------|--------------------------------|------------------------------------------------------------------------------------------|
| 3.0.1       | 16-09-2025                     | Made an update to the logic of the Abnormal Port-to-Protocol **Analytic Rule** |
| 3.0.0       | 01-08-2025                     | Updates to the workbook to improve the clarity and consistency of titles for visualizations |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

