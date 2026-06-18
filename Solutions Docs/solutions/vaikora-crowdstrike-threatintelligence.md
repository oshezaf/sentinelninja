# ⚠️ Vaikora-CrowdStrike-ThreatIntelligence

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/vaikora_logo.svg" alt="Vaikora-CrowdStrike-ThreatIntelligence Logo" width="75" height="75">

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
| **Solution Folder** | [Vaikora-CrowdStrike-ThreatIntelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vaikora-CrowdStrike-ThreatIntelligence) |

The Vaikora CrowdStrike AI Agent Security solution polls Vaikora AI agent signals (actions with high/critical risk levels or anomaly detections) and pushes them as Custom IOCs to CrowdStrike Falcon for detection and prevention.

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
| [Vaikora AI Agent Signals to CrowdStrike](../content/vaikora-crowdstrike-threatintelligence-vaikora-ai-agent-signals-to-crowdstrike-1c0c6d82.md) | This playbook polls Vaikora for AI agent behavioral signals (high or critical risk actions and anoma... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.1       | 28-05-2026                     | Fixed Get_Vaikora_Actions URI to omit the agent_id query parameter when VaikoraAgentId is empty. Without the fix the request includes agent_id= and the Vaikora API rejects it with HTTP 422. |
| 3.0.0       | 28-04-2026                     | Initial release. Vaikora AI to CrowdStrike IOC integration with automated severity mapping and deduplication.|

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

