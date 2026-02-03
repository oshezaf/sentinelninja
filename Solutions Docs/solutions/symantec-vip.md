# Symantec VIP

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/symantec_logo.svg" alt="Symantec VIP Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Symantec VIP](https://vip.symantec.com/) solution for Microsoft Sentinel enables you to ingest Symantec VIP's authentication logs into Microsoft Sentinel.

This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog  solution will be installed as part of this solution installation. 

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Microsoft |
| **First Published** | 2022-05-16 |
| **Solution Folder** | [Symantec VIP](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Symantec%20VIP) |
| **Dependencies** | [Syslog](syslog.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Symantec VIP](../connectors/symantecvip.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [[Deprecated] Symantec VIP](../connectors/symantecvip.md) | Analytics, Workbooks |

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
| [ClientDeniedAccess](../content/symantec-vip-clientdeniedaccess-a9956d3a-07a9-44a6-a279-081a85020cae-b3aec064.md) | Medium | CredentialAccess | [`Syslog`](../tables/syslog.md) |
| [Excessive Failed Authentication from Invalid Inputs](../content/symantec-vip-excessive-failed-authentication-from-invalid-inputs-c775a46b-21b1-46d7-afa6-37e3e577a27b-0e6ce55d.md) | Medium | CredentialAccess | [`Syslog`](../tables/syslog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SymantecVIP](../content/symantec-vip-symantecvip-eae32760.md) | [`Syslog`](../tables/syslog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [SymantecVIP](../content/symantec-vip-symantecvip-ed8a116c-07b4-441c-b74b-395937c264a1-ded005b1.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                             |
|-------------|--------------------------------|------------------------------------------------|
| 3.0.2       | 20-01-2025                     | Removed Custom Entity mappings from **Analytic rules**          |
| 3.0.1       | 31-12-2024                     | Removed Deprecated **Data connector**          |
| 3.0.0       | 01-08-2024                     | Update **Parser** as part of Syslog migration  |
|             |                                | Deprecating data connectors                    |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

