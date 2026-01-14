# Google DNS - Multiple errors to same domain

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects multiple errors to same domain.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [GoogleCloudPlatformDNS](../solutions/googlecloudplatformdns.md) |
| **ID** | `da04a5d6-e2be-4cba-8cdb-a3f2efa87e9e` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1095 |
| **Required Connectors** | [GCPDNSDataConnector](../connectors/gcpdnsdataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformDNS/Analytic%20Rules/GCPDNSMultipleErrorsQuery.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`GCPDNS`](../tables/gcpdns.md)
- [`GCP_DNS_CL`](../tables/gcp-dns-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to GoogleCloudPlatformDNS](../solutions/googlecloudplatformdns.md)

