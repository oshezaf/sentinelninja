# Google DNS - Sources with high number of errors

Query searches for sources with high number of errors.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [GoogleCloudPlatformDNS](../solutions/googlecloudplatformdns.md) |
| **ID** | `e85a5d94-1f9f-4ce1-b54d-c61bbd24c41f` |
| **Severity** | Low |
| **Tactics** | CommandAndControl |
| **Techniques** | T1095 |
| **Required Connectors** | [GCPDNSDataConnector](../connectors/gcpdnsdataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformDNS/Hunting%20Queries/GCPDNSSourceHighErrors.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`GCPDNS`](../tables/gcpdns.md)
- [`GCP_DNS_CL`](../tables/gcp-dns-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to GoogleCloudPlatformDNS](../solutions/googlecloudplatformdns.md)

