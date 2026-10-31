# Valence Security for Microsoft Sentinel

*Solution: Valence Security*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ValenceSecurityLogo.svg" alt="Valence Security Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Valence Security |
| **Support Tier** | Partner |
| **Support Link** | [https://www.valencesecurity.com/](https://www.valencesecurity.com/) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.1 |
| **Author** | Valence Security - info@valencesecurity.com |
| **First Published** | 2023-11-20 |
| **Solution Folder** | [Valence Security](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Valence%20Security) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/valencesecurityinc1673598943514.valence_sentinel_solution) · Popularity: 🟡 Low (28%) |

[Valence Security](https://valencesecurity.com/) SaaS security platform: Valence is the first SaaS security company to combine SSPM and advanced remediation with business user collaboration to find and fix SaaS security risks. SaaS applications are becoming decentrally managed and more complex, which is introducing misconfiguration, identity, data, and SaaS-to-SaaS integration risks. The Valence SaaS Security Platform provides visibility and remediation capabilities for business-critical SaaS applications such as Microsoft 365, Google Workspace, Salesforce, GitHub and Slack. With Valence, security teams can empower their business to securely adopt SaaS.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Valence Security](../connectors/valencesecurityccfpush.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ValenceAlerts_CL`](../tables/valencealerts-cl.md) | [Valence Security](../connectors/valencesecurityccfpush.md) | Analytics, Workbooks |
| [`ValenceAuditLogs_CL`](../tables/valenceauditlogs-cl.md) | [Valence Security](../connectors/valencesecurityccfpush.md) | - |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Valence Security Alerts](../content/valence-security-valence-security-alerts-d944d564-b6fa-470d-b5ab-a1a141878c5e-f39d1559.md) | High | - | [`ValenceAlerts_CL`](../tables/valencealerts-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ValenceAlertsWorkbook](../content/valence-security-valencealertsworkbook-fae392cb.md) | [`ValenceAlerts_CL`](../tables/valencealerts-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                |
|-------------|--------------------------------|-----------------------------------|
| 3.0.1       | 16-09-2026                     | Migrated the **Data Connector** to CCF Push (Codeless Connector Framework). Alerts now ingest into **ValenceAlerts_CL** (previously ValenceAlert_CL) and a new **ValenceAuditLogs_CL** table was added. The stream schema and DCR transformations match the payload sent by the Valence platform, and a **sentinelSeverity** column maps Valence's Critical severity into Microsoft Sentinel's supported range. |
|  3.0.0      |  27-11-2023                    |  Initial Solution Release         |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

