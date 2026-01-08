# Aruba ClearPass

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ArubaClearPass.svg" alt="Aruba ClearPass Logo" width="75" height="75">

The [Aruba ClearPass](https://www.arubanetworks.com/products/security/network-access-control/secure-access/) solution allows you to easily connect your Aruba ClearPass with Microsoft Sentinel. 

This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors are about to be deprecated by **Aug 31, 2024**.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Aruba Networks |
| **First Published** | 2022-05-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Aruba%20ClearPass](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Aruba%20ClearPass) |
| **Dependencies** | azuresentinel.azure-sentinel-solution-commoneventformat |

## Data Connectors

This solution has **2 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Aruba ClearPass via Legacy Agent](../connectors/arubaclearpass.md) ⚠️
- [[Deprecated] Aruba ClearPass via AMA](../connectors/arubaclearpassama.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Aruba ClearPass via AMA](../connectors/arubaclearpassama.md), [[Deprecated] Aruba ClearPass via Legacy Agent](../connectors/arubaclearpass.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ArubaClearPass](../content/aruba-clearpass-arubaclearpass-7dabe04d-66c5-4d47-8e3c-7580e807be88-f108a393.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.3       |   13-11-2024                   |    Removed Deprecated **Data Connectors**                          |
| 3.0.2       |   08-07-2024                   |	Deprecating **Data Connector**          						|
| 3.0.1       |   26-09-2023                   |	Parser link update          						            |
| 3.0.0       |   21-09-2023                   |	Addition of new Aruba ClearPass AMA **Data Connector**          |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
