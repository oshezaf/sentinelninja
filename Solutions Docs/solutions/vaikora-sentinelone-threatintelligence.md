# Vaikora AI Agent Signals for SentinelOne

*Solution: Vaikora-SentinelOne-ThreatIntelligence*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/vaikora_logo.svg" alt="Vaikora-SentinelOne-ThreatIntelligence Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Data443 Risk Mitigation, Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://www.data443.com](https://www.data443.com) |
| **Categories** | Security - Threat Intelligence |
| **Version** | 3.0.1 |
| **Author** | Data443 Risk Mitigation, Inc. - support@data443.com |
| **First Published** | 2026-04-02 |
| **Last Updated** | 2026-05-28 |
| **Solution Folder** | [Vaikora-SentinelOne-ThreatIntelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vaikora-SentinelOne-ThreatIntelligence) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/data443riskmitigationinc1761580347231.azure-sentinel-solution-vaikora-sentinelone) · Popularity: ⚪ Very Low (0%) |

The Vaikora SentinelOne Threat Intelligence solution polls the Vaikora AI Agent Security API for high-severity and anomaly actions and pushes indicators of compromise (IOCs) to SentinelOne's Threat Intelligence API for automated detection and response.

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
| [Vaikora AI Agent Signals to SentinelOne](../content/vaikora-sentinelone-threatintelligence-vaikora-ai-agent-signals-to-sentinelone-f649433d.md) | This playbook polls Vaikora for AI agent behavioral signals (high or critical severity actions and a... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|---|---|---|
| 3.0.1 | 28-05-2026 | Fixed Get_Vaikora_Actions URI to omit the agent_id query parameter when VaikoraAgentId is empty. Without the fix the request includes agent_id= and the Vaikora API rejects it with HTTP 422. |
| 3.0.0 | 28-04-2026 | Initial release. Polls Vaikora AI Agent Security API every 6 hours for high-severity and anomaly actions, pushes IOCs to SentinelOne Threat Intelligence API. SHA256 IOC type from log_hash, risk score severity mapping (0-100 to SentinelOne 2-7), STAR rule auto-creation, Content Hub ready. Added top-level metadata block to standalone playbook, renamed logicAppName parameter to PlaybookName, set playbookVersion1 to "1.0.0" to match hidden-SentinelTemplateVersion tag, per Cyren-SentinelOne reference pattern. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

