# Cyren CrowdStrike IOC Automation

*Solution: Cyren-CrowdStrike-ThreatIntelligence*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/cyren_logo.svg" alt="Cyren-CrowdStrike-ThreatIntelligence Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Data443 Risk Mitigation, Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://www.data443.com](https://www.data443.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Data443 Risk Mitigation, Inc. - support@data443.com |
| **First Published** | 2026-02-17 |
| **Last Updated** | 2026-05-29 |
| **Solution Folder** | [Cyren-CrowdStrike-ThreatIntelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyren-CrowdStrike-ThreatIntelligence) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/data443riskmitigationinc1761580347231.azure-sentinel-solution-cyren-cs-ioc-automation) · Popularity: ⚪ Very Low (0%) |

The Cyren CrowdStrike Threat Intelligence solution polls Cyren CCF threat intelligence feeds (IP reputation, malware URLs) and pushes IOCs to CrowdStrike Falcon's Custom IOC API for detection and response.

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
| [Cyren to CrowdStrike IOC Automation](../content/cyren-crowdstrike-threatintelligence-cyren-to-crowdstrike-ioc-automation-635f4db9.md) | This playbook fetches IP reputation and/or malware URL threat intelligence indicators from the Cyren... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.0       | 25-03-2026                     | Initial release — Cyren CCF feed polling with NDJSON parsing, CrowdStrike Falcon Custom IOC push via /iocs/entities/indicators/v1 endpoint with OAuth2 Bearer token, PersistentToken pagination, 6-hour recurrence, cost safety parameters enforced. Hidden Sentinel tags applied for Content Hub visibility. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

