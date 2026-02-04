# GCP IAM - New Service Account

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects new service account creation.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md) |
| **ID** | `a768aa52-453e-4e3e-80c2-62928d2e2f56` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1136 |
| **Required Connectors** | [GCPIAMDataConnector](../connectors/gcpiamdataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformIAM/Analytic%20Rules/GCPIAMNewServiceAccount.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`GCPIAM`](../tables/gcpiam.md) | ✓ | ✗ | ✓ |
| [`GCP_IAM_CL`](../tables/gcp-iam-cl.md) | — | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md)

