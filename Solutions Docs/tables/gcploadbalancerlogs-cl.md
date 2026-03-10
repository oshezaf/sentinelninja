# GCPLoadBalancerLogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Category** | GCP |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (8 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Load%20Balancer%20Logs/Data%20Connectors/GCPFLoadBalancerLogs_GCP_CCP/GCPFLoadBalancerLogs_DCR.json)

| Column Name | Type |
|:------------|:-----|
| httpRequest | dynamic |
| insertId | string |
| jsonPayload | dynamic |
| logName | string |
| receiveTimestamp | datetime |
| resource | dynamic |
| severity | string |
| timestamp | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Google Cloud Platform Load Balancer Logs](../solutions/google-cloud-platform-load-balancer-logs.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [GCP Pub/Sub Load Balancer Logs (via Codeless Connector Platform).](../connectors/gcpfloadbalancerlogsccpdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

