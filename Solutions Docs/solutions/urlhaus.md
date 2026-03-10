# URLhaus

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="URLhaus Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 2.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-09-29 |
| **Solution Folder** | [URLhaus](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/URLhaus) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-urlhaus) |

The URLhaus solution for Microsoft  Sentinel allows enriching incidents with additional information about file hashes, Hostname and URL using feeds and lists from URLhaus.Beside the APIs documented on URLhaus that serves various feeds and lists, abuse.ch also offers a dedicated API that allows to gather information on a specific URL, file hash or host from URLhaus through an automated way. It is also possible to retrieve a payload (malware sample) URLhaus has collected from malware URLs it tracks.

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 3 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [URLhaus-CheckHashAndEnrichIncident](../content/urlhaus-urlhaus-checkhashandenrichincident-a6191f77.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |
| [URLhaus-CheckHostAndEnrichIncident](../content/urlhaus-urlhaus-checkhostandenrichincident-20c27ae9.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |
| [URLhaus-CheckURLAndEnrichIncident](../content/urlhaus-urlhaus-checkurlandenrichincident-be303913.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

