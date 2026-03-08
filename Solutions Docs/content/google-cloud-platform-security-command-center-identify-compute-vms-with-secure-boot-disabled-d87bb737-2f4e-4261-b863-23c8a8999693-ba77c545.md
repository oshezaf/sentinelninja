# Identify Compute VMs with Secure Boot Disabled

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies Google Compute Engine VM instances reported by Security Command Center with Secure Boot disabled (COMPUTE_SECURE_BOOT_DISABLED findings).

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Google Cloud Platform Security Command Center](../solutions/google-cloud-platform-security-command-center.md) |
| **ID** | `d87bb737-2f4e-4261-b863-23c8a8999693` |
| **Tactics** | ResourceDevelopment, DefenseEvasion |
| **Techniques** | T1608, T1562.001 |
| **Required Connectors** | [GoogleSCCDefinition](../connectors/googlesccdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Security%20Command%20Center/Hunting%20Queries/GCPComputeSecureBootDisabledDetection.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`GoogleCloudSCC`](../tables/googlecloudscc.md) | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Google Cloud Platform Security Command Center](../solutions/google-cloud-platform-security-command-center.md)

