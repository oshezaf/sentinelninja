# Google Cloud Platform Load Balancer Logs

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/refs/heads/master/Logos/google_logo.svg" alt="Google Cloud Platform Load Balancer Logs Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Google Cloud Platform Load Balancer solution for Microsoft Sentinel allows you to monitor your GCP Load Balancer in Microsoft Sentinel. This solution includes a data connector and enables ingestion of the GCP Load Balancer Logs into Microsoft Sentinel. The logs ingested also enable monitoring GCP Cloud Armour/GCP WAF logs.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2025-02-12 |
| **Solution Folder** | [Google Cloud Platform Load Balancer Logs](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Load%20Balancer%20Logs) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [GCP Pub/Sub Load Balancer Logs (via Codeless Connector Platform).](../connectors/gcpfloadbalancerlogsccpdefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GCPLoadBalancerLogs_CL`](../tables/gcploadbalancerlogs-cl.md) | [GCP Pub/Sub Load Balancer Logs (via Codeless Connector Platform).](../connectors/gcpfloadbalancerlogsccpdefinition.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                             |
|-------------|--------------------------------|------------------------------------------------|
| 3.0.1       | 28-03-2025                     | Moving Solution from Public Preview to Globally available.                       |
| 3.0.0       | 14-02-2025                     | Initial Solution Release.                       |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

