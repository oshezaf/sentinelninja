# QualysVM

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/qualys_logo.svg" alt="QualysVM Logo" width="75" height="75">

The [Qualys Vulnerability Management](https://www.qualys.com/apps/vulnerability-management-detection-response/) solution for Microsoft Sentinel enables you to ingest host vulnerability detection data into Microsoft Sentinel.

  **Underlying Microsoft Technologies used:** 

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

• [Microsoft Sentinel Codeless Connector Framework](https://aka.ms/Sentinel-CCP_Platform)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.7 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2020-12-14 |
| **Last Updated** | 2025-11-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/QualysVM](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/QualysVM) |

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [Qualys Vulnerability Management (via Codeless Connector Framework)](../connectors/qualysvmlogsccpdefinition.md)
- [[DEPRECATED] Qualys Vulnerability Management](../connectors/qualysvulnerabilitymanagement.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Reference

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`QualysHostDetectionV2_CL`](../tables/qualyshostdetectionv2-cl.md) | [[DEPRECATED] Qualys Vulnerability Management](../connectors/qualysvulnerabilitymanagement.md) | - |
| [`QualysHostDetectionV3_CL`](../tables/qualyshostdetectionv3-cl.md) | [Qualys Vulnerability Management (via Codeless Connector Framework)](../connectors/qualysvmlogsccpdefinition.md) | - |
| [`QualysHostDetection_CL`](../tables/qualyshostdetection-cl.md) | [[DEPRECATED] Qualys Vulnerability Management](../connectors/qualysvulnerabilitymanagement.md) | - |

## Content Items

This solution includes **8 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 4 |
| Analytic Rules | 2 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [High Number of Urgent Vulnerabilities Detected](../content/qualysvm-high-number-of-urgent-vulnerabilities-detected-3edb7215-250b-40c0-8b46-79093949242d-7adbb1bc.md) | Medium | InitialAccess | - |
| [New High Severity Vulnerability Detected Across Multiple Hosts](../content/qualysvm-new-high-severity-vulnerability-detected-across-multiple-hosts-6116dc19-475a-4148-84b2-efe89c073e27-fbfde951.md) | Medium | InitialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [QualysVMv2](../content/qualysvm-qualysvmv2-0981091b.md) | - |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [QualysVM-GetAssetDetails](../content/qualysvm-qualysvm-getassetdetails-0f1ab8e4.md) | When a new sentinel incident is created, this playbook gets triggered and performs the following act... | - |
| [QualysVM-GetAssets-ByCVEID](../content/qualysvm-qualysvm-getassets-bycveid-c760c473.md) | When a new sentinel incident is created, this playbook gets triggered and performs the following act... | - |
| [QualysVM-GetAssets-ByOpenPort](../content/qualysvm-qualysvm-getassets-byopenport-f3f9bb94.md) | When a new sentinel incident is created, this playbook gets triggered and performs the following act... | - |
| [QualysVM-LaunchVMScan-GenerateReport](../content/qualysvm-qualysvm-launchvmscan-generatereport-a0439575.md) | When a new sentinel incident is created, this playbook gets triggered and performs the following act... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [QualysHostDetection](../content/qualysvm-qualyshostdetection-7162903e-e07f-426b-9b07-63b8c7eb77b1-391bdc43.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                            	|
|-------------|--------------------------------|----------------------------------------------------------------|
| 3.0.7       | 18-11-2025                     | Adding adjustable API partition limit & rate limit protection. |
| 3.0.6       | 18-09-2025                     | Updated Analytic rules, Parsers, and Workbooks in Sentinel solution content for **CCF connector** compatibility.     |
| 3.0.5       | 29-07-2025                     | Removed Deprecated **Data Connector**.							|  
| 3.0.4 	  | 30-06-2025 					   | QualysVM **CCF Data Connector** moving to GA 					|
| 3.0.3       | 27-05-2025                     | New **CCP Connector** added to the Solution.                   |
| 3.0.2       | 08-04-2025                     | Add HostTags to **Data Connector** and **Parsers**.            |
| 3.0.1       | 07-01-2025                     | Removed Custom Entity mappings from **Analytic Rule**.         |
| 3.0.0       | 16-04-2024                     | Added Deploy to Azure Goverment button for Government portal in **Dataconnector**.   |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
