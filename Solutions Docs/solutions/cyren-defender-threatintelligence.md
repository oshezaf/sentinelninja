# Cyren Defender Threat Intelligence

*Solution: Cyren-Defender-ThreatIntelligence*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/cyren_logo.svg" alt="Cyren-Defender-ThreatIntelligence Logo" width="75" height="75">

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
| **Solution Folder** | [Cyren-Defender-ThreatIntelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyren-Defender-ThreatIntelligence) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/data443riskmitigationinc1761580347231.azure-sentinel-solution-cyren-defender-ti) · Popularity: ⚪ Very Low (0%) |

The Cyren Defender Threat Intelligence solution polls the Cyren CCF (Common Connector Framework) threat intelligence feed and pushes STIX-formatted indicators to Microsoft Sentinel's ThreatIntelligenceIndicator table. It uses a Logic App with managed identity, PersistentToken pagination, and enforces strict cost safety parameters (count=1000, queryWindowInMin=360, 6-hour recurrence).

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
| [Cyren to Defender TI - Playbook](../content/cyren-defender-threatintelligence-cyren-to-defender-ti-playbook-476f8f5d.md) | Polls the Cyren CCF threat intelligence feed and pushes STIX indicators to Microsoft Sentinel via th... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.0       | 28-04-2026                     | Initial release. Logic App workflow with NDJSON payload parsing (payload.identifier, payload.detection), managed identity authentication for Sentinel createIndicator API, null identifier guard, confidence mapping from Cyren risk score.|

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

