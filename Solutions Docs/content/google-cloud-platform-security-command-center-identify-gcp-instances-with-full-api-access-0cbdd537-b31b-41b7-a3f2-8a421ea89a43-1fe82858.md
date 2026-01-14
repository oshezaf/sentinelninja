# Identify GCP Instances with Full API Access

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies Google Cloud Platform Compute Engine instances that are configured with the "Allow full access to all Cloud APIs" scope using Security Command Center FULL_API_ACCESS findings.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Google Cloud Platform Security Command Center](../solutions/google-cloud-platform-security-command-center.md) |
| **ID** | `0cbdd537-b31b-41b7-a3f2-8a421ea89a43` |
| **Tactics** | PrivilegeEscalation |
| **Techniques** | T1068, T1098 |
| **Required Connectors** | [GoogleSCCDefinition](../connectors/googlesccdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Security%20Command%20Center/Hunting%20Queries/GCPFullAPIAccessDetection.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`GoogleCloudSCC`](../tables/googlecloudscc.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Google Cloud Platform Security Command Center](../solutions/google-cloud-platform-security-command-center.md)

