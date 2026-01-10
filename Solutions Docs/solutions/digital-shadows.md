# Digital Shadows

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/DigitalShadowsLogo.svg" alt="Digital Shadows Logo" width="75" height="75">

The [Digital Shadows](https://www.digitalshadows.com/) Solution provides ingestion of the incidents and alerts from Digital Shadows Searchlight into the Microsoft Sentinel using the REST API. 

  **Underlying Microsoft Technologies used:** 
 
 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

  a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api) 

 b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Digital Shadows |
| **Support Tier** | Partner |
| **Support Link** | [https://www.digitalshadows.com/](https://www.digitalshadows.com/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Digital Shadows - support@digitalshadows.com |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Digital%20Shadows](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Digital%20Shadows) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Digital Shadows Searchlight](../connectors/digitalshadowssearchlightazurefunctions.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`DigitalShadows_CL`](../tables/digitalshadows-cl.md) | [Digital Shadows Searchlight](../connectors/digitalshadowssearchlightazurefunctions.md) | Workbooks |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Workbooks | 1 |
| Playbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Digital Shadows Incident Creation for exclude-app](../content/digital-shadows-digital-shadows-incident-creation-for-exclude-app-f7abe9c1-1e6c-4317-b907-25769e7764c5-54e3b41d.md) | Medium | - | - |
| [Digital Shadows Incident Creation for include-app](../content/digital-shadows-digital-shadows-incident-creation-for-include-app-ede3071d-9317-45f9-b36c-6a6effee5294-078d7289.md) | Medium | - | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [DigitalShadows](../content/digital-shadows-digitalshadows-3362ae13.md) | [`DigitalShadows_CL`](../tables/digitalshadows-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Digital Shadows Playbook to Update Incident Status](../content/digital-shadows-digital-shadows-playbook-to-update-incident-status-76d543e0.md) | This playbook will update the status of Microsoft Sentinel incidents to match the status of the aler... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.0       | 30-11-2023                     |  Added new Entity Mapping to **Analytic Rules**                    |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

