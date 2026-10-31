# Pulumi Cloud - Excessive authentication failures

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies more than five failed Pulumi Cloud login attempts (user-login-failed events) from a single IP address within a one-hour window. This may indicate a brute force attack or an attempt to use compromised credentials.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [PulumiCloudAuditLogs](../solutions/pulumicloudauditlogs.md) |
| **ID** | `0199390c-e96d-4119-b25c-83257f3c4738` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1110 |
| **Required Connectors** | [PulumiAuditLogsDefinition](../connectors/pulumiauditlogsdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PulumiCloudAuditLogs/Analytic%20Rules/AuthenticationFailures.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PulumiAuditLogs_CL`](../tables/pulumiauditlogs-cl.md) 🔶 | ✗ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to PulumiCloudAuditLogs](../solutions/pulumicloudauditlogs.md)

