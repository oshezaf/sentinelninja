# Pulse Connect Secure

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Pulse Connect Secure Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Pulse Connect Secure](https://www.ivanti.com/products/connect-secure-vpn?psredirect) solution for Microsoft Sentinel enables you to ingest Pulse Connect Secure logs into Microsoft Sentinel.

This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog  solution will be installed as part of this solution installation. 

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.4 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [Pulse Connect Secure](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Pulse%20Connect%20Secure) |
| **Dependencies** | [Syslog](syslog.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Pulse Connect Secure](../connectors/pulseconnectsecure.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [[Deprecated] Pulse Connect Secure](../connectors/pulseconnectsecure.md) | Analytics, Workbooks |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [PulseConnectSecure - Large Number of Distinct Failed User Logins](../content/pulse-connect-secure-pulseconnectsecure-large-number-of-distinct-failed-user-logins-1fa1528e-f746-4794-8a41-14827f4cb798-146dc800.md) | Medium | CredentialAccess | [`Syslog`](../tables/syslog.md) |
| [PulseConnectSecure - Potential Brute Force Attempts](../content/pulse-connect-secure-pulseconnectsecure-potential-brute-force-attempts-34663177-8abf-4db1-b0a4-5683ab273f44-3cb9ad66.md) | Low | CredentialAccess | [`Syslog`](../tables/syslog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [PulseConnectSecure](../content/pulse-connect-secure-pulseconnectsecure-56477077.md) | [`Syslog`](../tables/syslog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [PulseConnectSecure](../content/pulse-connect-secure-pulseconnectsecure-7a608d43-10b5-4113-8d74-6478f05f2595-233f88ba.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                  |
|-------------|--------------------------------|-----------------------------------------------------|
| 3.0.4       | 07-01-2025                     | Removed Custom Entity mappings from **Analytic Rule**     |
| 3.0.3       | 16-12-2024                     | Removed Deprecated **Data Connector**               |
| 3.0.2       | 01-08-2024                     | Update **Parser** as part of Syslog migration       |
|             |                                | Deprecating data connectors                         |
| 3.0.1       | 13-12-2023                     | Updated  broken link in **Data Connector**          |
| 3.0.0       | 20-07-2023                     | Corrected the links in the solution.                |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

