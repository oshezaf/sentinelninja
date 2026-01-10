# Orca Security Alerts

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/OrcaSecurity.svg" alt="Orca Security Alerts Logo" width="75" height="75">

The [Orca Security Alerts](https://orca.security/) solution for Microsoft Sentinel enables you to ingest Orca Security Alerts into Microsoft Sentinel. Orca Security enables the detection and prioritization of cloud security risks through their agentless cloud security and compliance solution for AWS, Azure, Google Cloud, and Kubernetes./n/n**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:/n/na. [Azure Monitor HTTP Data Collector API ](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Orca Security |
| **Support Tier** | Partner |
| **Support Link** | [https://orca.security/about/contact/](https://orca.security/about/contact/) |
| **Categories** | domains |
| **Version** | 2.0.1 |
| **Author** | Orca Security |
| **First Published** | 2022-05-10 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Orca%20Security%20Alerts](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Orca%20Security%20Alerts) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Orca Security Alerts](../connectors/orcasecurityalerts.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`OrcaAlerts_CL`](../tables/orcaalerts-cl.md) | [Orca Security Alerts](../connectors/orcasecurityalerts.md) | Workbooks |

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

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

