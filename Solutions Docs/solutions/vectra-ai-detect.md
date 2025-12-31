# Vectra AI Detect

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Vectra AI |
| **Support Tier** | Partner |
| **Support Link** | [https://www.vectra.ai/support](https://www.vectra.ai/support) |
| **Categories** | domains |
| **First Published** | 2022-05-24 |
| **Last Updated** | 2023-04-17 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20AI%20Detect](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20AI%20Detect) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [[Deprecated] Vectra AI Detect via Legacy Agent](../connectors/aivectradetect.md)
- [[Deprecated] Vectra AI Detect via AMA](../connectors/aivectradetectama.md)

## Tables Reference

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
| [Vectra AI Detect - Detections with High Severity](../content/39e48890-2c02-487e-aa9e-3ba494061798.md) | High | CredentialAccess, Discovery, LateralMovement, Collection, CommandAndControl, Exfiltration, Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Vectra AI Detect - New Campaign Detected](../content/a34d0338-eda0-42b5-8b93-32aae0d7a501.md) | Medium | LateralMovement, CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Vectra AI Detect - Suspected Compromised Account](../content/321f9dbd-64b7-4541-81dc-08cf7732ccb0.md) | Informational | CredentialAccess, Discovery, LateralMovement, Collection, CommandAndControl, Exfiltration, Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Vectra AI Detect - Suspected Compromised Host](../content/60eb6cf0-3fa1-44c1-b1fe-220fbee23d63.md) | Informational | CredentialAccess, Discovery, LateralMovement, Collection, CommandAndControl, Exfiltration, Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Vectra AI Detect - Suspicious Behaviors by Category](../content/6cb75f65-231f-46c4-a0b3-50ff21ee6ed3.md) | Informational | CredentialAccess, Discovery, LateralMovement, Collection, CommandAndControl, Exfiltration, Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Vectra Account's Behaviors](../content/ce54b5d3-4c31-4eaf-a73e-31412270b6ab.md) | Informational | CredentialAccess, Discovery, LateralMovement, Collection, CommandAndControl, Exfiltration, Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Vectra Host's Behaviors](../content/33e3b6da-2660-4cd7-9032-11be76db88d2.md) | Informational | CredentialAccess, Discovery, LateralMovement, Collection, CommandAndControl, Exfiltration, Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AIVectraDetectWorkbook](../content/aivectradetectworkbook-vectra-ai-detect.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                          |
|-------------|--------------------------------|-------------------------------------------------------------|
| 3.0.2       | 02-12-2024                     | Removed Deprecated **Data Connectors**                      |
| 3.0.1       | 27-06-2024                     | Deprecating **Data Connectors**                             |
| 3.0.0       | 16-02-2024                     | Addition of new  Vectra AI Detect AMA **Data Connector**    |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
