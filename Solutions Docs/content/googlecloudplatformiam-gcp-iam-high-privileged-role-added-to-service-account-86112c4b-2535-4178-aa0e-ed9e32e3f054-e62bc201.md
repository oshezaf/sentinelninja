# GCP IAM - High privileged role added to service account

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when high privileged role was added to service account.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md) |
| **ID** | `86112c4b-2535-4178-aa0e-ed9e32e3f054` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | PrivilegeEscalation |
| **Techniques** | T1078 |
| **Required Connectors** | [GCPIAMDataConnector](../connectors/gcpiamdataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformIAM/Analytic%20Rules/GCPIAMHighPrivilegedRoleAdded.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`GCPIAM`](../tables/gcpiam.md)
- [`GCP_IAM_CL`](../tables/gcp-iam-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md)

