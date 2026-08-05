# Orca Security Alerts

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/OrcaSecurityLogo.svg" alt="Orca Security Alerts Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Orca Security |
| **Support Tier** | Partner |
| **Support Link** | [https://orca.security/about/contact/](https://orca.security/about/contact/) |
| **Categories** | Security - Threat Protection,Security - Cloud Security |
| **Version** | 3.0.0 |
| **Author** | Orca Security |
| **First Published** | 2022-05-10 |
| **Solution Folder** | [Orca Security Alerts](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Orca%20Security%20Alerts) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/orcasecurityinc1621870991703.orca_security_alerts_mss) · Popularity: 🔵 Medium (58%) |

The [Orca Security Alerts](https://orca.security/) solution for Microsoft Sentinel enables you to ingest Orca Security Alerts into Microsoft Sentinel. Orca Security enables the detection and prioritization of cloud security risks through their agentless cloud security and compliance solution for AWS, Azure, Google Cloud, and Kubernetes.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor Logs Ingestion API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) with [Data Collection Rules (DCR) and Endpoints (DCE)](https://learn.microsoft.com/azure/azure-monitor/essentials/data-collection-rule-overview) - used by the recommended Microsoft Entra ID based connector.

b. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api) - used by the legacy Shared Key based connector (deprecated by Microsoft; retained for backward compatibility).

Both connectors ingest alerts into the same OrcaAlerts_CL table. New deployments should use the Microsoft Entra ID based connector.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **2 data connector(s)**:

- [Orca Security Alerts](../connectors/orcasecurityalerts.md)
- [Orca Security Alerts (via Microsoft Entra ID)](../connectors/orcasecurityalertsccf.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`OrcaAlerts_CL`](../tables/orcaalerts-cl.md) | [Orca Security Alerts](../connectors/orcasecurityalerts.md), [Orca Security Alerts (via Microsoft Entra ID)](../connectors/orcasecurityalertsccf.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [OrcaAlerts](../content/orca-security-alerts-orcaalerts-8a812d22.md) | [`OrcaAlerts_CL`](../tables/orcaalerts-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.0       | 23-06-2026                     | Added Orca Security Alerts data connector using Microsoft Entra ID authentication (Push CCF connector with DCR/DCE and the Azure Monitor Logs Ingestion API). Updated the connector logo. The legacy Shared Key based connector is retained for backward compatibility and both connectors ingest into the same **OrcaAlerts_CL** table. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

