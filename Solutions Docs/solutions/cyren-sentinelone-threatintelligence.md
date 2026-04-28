# Cyren SentinelOne IOC Automation

*Solution: Cyren-SentinelOne-ThreatIntelligence*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/cyren_logo.svg" alt="Cyren-SentinelOne-ThreatIntelligence Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Data443 Risk Mitigation, Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://www.data443.com](https://www.data443.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Data443 Risk Mitigation, Inc. - support@data443.com |
| **First Published** | 2026-02-17 |
| **Last Updated** | 2026-04-08 |
| **Solution Folder** | [Cyren-SentinelOne-ThreatIntelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyren-SentinelOne-ThreatIntelligence) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/data443riskmitigationinc1761580347231.azure-sentinel-solution-cyren-s1-ioc-automation) · Popularity: ⚪ Very Low (0%) |

The Cyren SentinelOne Threat Intelligence solution polls the Cyren CCF (IP reputation, malware URLs) threat intelligence feed and pushes indicators of compromise (IOCs) to SentinelOne's Threat Intelligence API for automated detection and response.

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 1 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Cyren to SentinelOne IOC Automation](../content/cyren-sentinelone-threatintelligence-cyren-to-sentinelone-ioc-automation-aeb65ff5.md) | This playbook fetches IP reputation and/or malware URL threat intelligence indicators from the Cyren... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.1       | 06-04-2026                     | Fix ARM deployment failure from Content Hub — inner Logic App template was evaluating `workspaceResourceId` incorrectly at deployment scope, causing `InvalidTemplate` error at position 61. Fixed by referencing `variables('workspace-name')` (which equals `parameters('workspace')`) consistent with the outer ARM evaluation scope. |
| 3.0.0       | 20-03-2026                     | Initial release — Cyren CCF feed polling with NDJSON parsing, SentinelOne IOC push via Threat Intelligence API, PersistentToken pagination, 6-hour recurrence, cost safety parameters enforced. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

