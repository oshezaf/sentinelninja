# Orca Security Alerts

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/OrcaSecurity.svg" alt="Orca Security Alerts Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Orca Security |
| **Support Tier** | Partner |
| **Support Link** | [https://orca.security/about/contact/](https://orca.security/about/contact/) |
| **Categories** | domains |
| **Version** | 2.0.1 |
| **Author** | Orca Security |
| **First Published** | 2022-05-10 |
| **Solution Folder** | [Orca Security Alerts](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Orca%20Security%20Alerts) |

The [Orca Security Alerts](https://orca.security/) solution for Microsoft Sentinel enables you to ingest Orca Security Alerts into Microsoft Sentinel. Orca Security enables the detection and prioritization of cloud security risks through their agentless cloud security and compliance solution for AWS, Azure, Google Cloud, and Kubernetes./n/n**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:/n/na. [Azure Monitor HTTP Data Collector API ](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Orca Security Alerts](../connectors/orcasecurityalerts.md) 🔶

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`OrcaAlerts_CL`](../tables/orcaalerts-cl.md) 🔶 | [Orca Security Alerts](../connectors/orcasecurityalerts.md) | Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).
## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [OrcaAlerts](../content/orca-security-alerts-orcaalerts-8a812d22.md) | [`OrcaAlerts_CL`](../tables/orcaalerts-cl.md) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

