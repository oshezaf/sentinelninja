# Google DNS - Possible data exfiltration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects possible data exfiltration.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [GoogleCloudPlatformDNS](../solutions/googlecloudplatformdns.md) |
| **ID** | `705bed63-668f-4508-9d2d-26faf4010700` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration |
| **Techniques** | T1567 |
| **Required Connectors** | [GCPDNSDataConnector](../connectors/gcpdnsdataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformDNS/Analytic%20Rules/GCPDNSDataExfiltration.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`GCPDNS`](../tables/gcpdns.md) | ✓ | ✗ |
| [`GCP_DNS_CL`](../tables/gcp-dns-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to GoogleCloudPlatformDNS](../solutions/googlecloudplatformdns.md)

