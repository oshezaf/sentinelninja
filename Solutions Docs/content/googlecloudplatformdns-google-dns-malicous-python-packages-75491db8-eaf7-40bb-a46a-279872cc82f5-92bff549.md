# Google DNS - Malicous Python packages

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects requests to resources with malicious Python packages.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [GoogleCloudPlatformDNS](../solutions/googlecloudplatformdns.md) |
| **ID** | `75491db8-eaf7-40bb-a46a-279872cc82f5` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1195 |
| **Required Connectors** | [GCPDNSDataConnector](../connectors/gcpdnsdataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformDNS/Analytic%20Rules/GCPDNSMaliciousPythonPackages.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`GCPDNS`](../tables/gcpdns.md) | ✓ | ✗ |
| [`GCP_DNS_CL`](../tables/gcp-dns-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to GoogleCloudPlatformDNS](../solutions/googlecloudplatformdns.md)

