# GCP IAM - New custom roles

Query searches for new custom roles created for the last 24 hours.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md) |
| **ID** | `e9accd25-ecff-4076-b2da-3102bf95bec5` |
| **Severity** | Low |
| **Tactics** | PrivilegeEscalation |
| **Techniques** | T1078 |
| **Required Connectors** | [GCPIAMDataConnector](../connectors/gcpiamdataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformIAM/Hunting%20Queries/GCPIAMNewCustomRoles.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`GCP_IAM_CL`](../tables/gcp-iam-cl.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
