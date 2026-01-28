# Google DNS - Requests to TOR resources

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Query searches for requests to TOR resources.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [GoogleCloudPlatformDNS](../solutions/googlecloudplatformdns.md) |
| **ID** | `53b91d17-f6a7-4439-8d9a-0aebf0abeea2` |
| **Severity** | Medium |
| **Tactics** | CommandAndControl |
| **Techniques** | T1095 |
| **Required Connectors** | [GCPDNSDataConnector](../connectors/gcpdnsdataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformDNS/Hunting%20Queries/GCPDNSRequestToTOR.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`GCPDNS`](../tables/gcpdns.md) | ✓ | ✗ |
| [`GCP_DNS_CL`](../tables/gcp-dns-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to GoogleCloudPlatformDNS](../solutions/googlecloudplatformdns.md)

