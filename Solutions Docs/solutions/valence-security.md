# Valence Security

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ValenceSecurityLogo.svg" alt="Valence Security Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

[Valence Security](https://valencesecurity.com/) SaaS security platform: Valence is the first SaaS security company to combine SSPM and advanced remediation with business user collaboration to find and fix SaaS security risks. SaaS applications are becoming decentrally managed and more complex, which is introducing misconfiguration, identity, data, and SaaS-to-SaaS integration risks. The Valence SaaS Security Platform provides visibility and remediation capabilities for business-critical SaaS applications such as Microsoft 365, Google Workspace, Salesforce, GitHub and Slack. With Valence, security teams can empower their business to securely adopt SaaS.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Valence Security |
| **Support Tier** | Partner |
| **Support Link** | [https://www.valencesecurity.com/](https://www.valencesecurity.com/) |
| **Categories** | domains |
| **Version** | 1.0.0 |
| **Author** | Valence Security - info@valencesecurity.com |
| **First Published** | 2023-11-20 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Valence%20Security](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Valence%20Security) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [SaaS Security](../connectors/valencesecurity.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ValenceAlert_CL`](../tables/valencealert-cl.md) | [SaaS Security](../connectors/valencesecurity.md) | Analytics, Workbooks |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Valence Security Alerts](../content/valence-security-valence-security-alerts-d944d564-b6fa-470d-b5ab-a1a141878c5e-f39d1559.md) | High | - | [`ValenceAlert_CL`](../tables/valencealert-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ValenceAlertsWorkbook](../content/valence-security-valencealertsworkbook-fae392cb.md) | [`ValenceAlert_CL`](../tables/valencealert-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                |
|-------------|--------------------------------|-----------------------------------|
|  3.0.0      |  27-11-2023                    |  Initial Solution Release         |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

