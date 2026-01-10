# Vectra AI Detect

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/AIVectraDetect.svg" alt="Vectra AI Detect Logo" width="75" height="75">

The [Vectra AI Detect](https://www.vectra.ai/products/platform%22%20/t%20%22_blank) solution for Microsoft Sentinel enables you to ingest Vectra AI logs into Microsoft Sentinel, using the Common Event Format (CEF) for Security Monitoring.

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation. 

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors were deprecated on **Aug 31, 2024.**

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Vectra AI |
| **Support Tier** | Partner |
| **Support Link** | [https://www.vectra.ai/support](https://www.vectra.ai/support) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Vectra AI |
| **First Published** | 2022-05-24 |
| **Last Updated** | 2023-04-17 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20AI%20Detect](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20AI%20Detect) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution has **2 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Vectra AI Detect via Legacy Agent](../connectors/aivectradetect.md) ⚠️
- [[Deprecated] Vectra AI Detect via AMA](../connectors/aivectradetectama.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Vectra AI Detect via AMA](../connectors/aivectradetectama.md), [[Deprecated] Vectra AI Detect via Legacy Agent](../connectors/aivectradetect.md) | Analytics, Workbooks |

## Content Items

This solution includes **8 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 7 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Vectra AI Detect - Detections with High Severity](../content/vectra-ai-detect-vectra-ai-detect-detections-with-high-severity-39e48890-2c02-487e-aa9e-3ba494061798-5f2d3995.md) | High | CredentialAccess, Discovery, LateralMovement, Collection, CommandAndControl, Exfiltration, Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Vectra AI Detect - New Campaign Detected](../content/vectra-ai-detect-vectra-ai-detect-new-campaign-detected-a34d0338-eda0-42b5-8b93-32aae0d7a501-d435ce1c.md) | Medium | LateralMovement, CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Vectra AI Detect - Suspected Compromised Account](../content/vectra-ai-detect-vectra-ai-detect-suspected-compromised-account-321f9dbd-64b7-4541-81dc-08cf7732ccb0-540085a2.md) | Informational | CredentialAccess, Discovery, LateralMovement, Collection, CommandAndControl, Exfiltration, Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Vectra AI Detect - Suspected Compromised Host](../content/vectra-ai-detect-vectra-ai-detect-suspected-compromised-host-60eb6cf0-3fa1-44c1-b1fe-220fbee23d63-39ca3d55.md) | Informational | CredentialAccess, Discovery, LateralMovement, Collection, CommandAndControl, Exfiltration, Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Vectra AI Detect - Suspicious Behaviors by Category](../content/vectra-ai-detect-vectra-ai-detect-suspicious-behaviors-by-category-6cb75f65-231f-46c4-a0b3-50ff21ee6ed3-81fb48ba.md) | Informational | CredentialAccess, Discovery, LateralMovement, Collection, CommandAndControl, Exfiltration, Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Vectra Account's Behaviors](../content/vectra-ai-detect-vectra-account's-behaviors-ce54b5d3-4c31-4eaf-a73e-31412270b6ab-45fe2d23.md) | Informational | CredentialAccess, Discovery, LateralMovement, Collection, CommandAndControl, Exfiltration, Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Vectra Host's Behaviors](../content/vectra-ai-detect-vectra-host's-behaviors-33e3b6da-2660-4cd7-9032-11be76db88d2-080b319b.md) | Informational | CredentialAccess, Discovery, LateralMovement, Collection, CommandAndControl, Exfiltration, Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AIVectraDetectWorkbook](../content/vectra-ai-detect-aivectradetectworkbook-74fce2d7.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                          |
|-------------|--------------------------------|-------------------------------------------------------------|
| 3.0.2       | 02-12-2024                     | Removed Deprecated **Data Connectors**                      |
| 3.0.1       | 27-06-2024                     | Deprecating **Data Connectors**                             |
| 3.0.0       | 16-02-2024                     | Addition of new  Vectra AI Detect AMA **Data Connector**    |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

