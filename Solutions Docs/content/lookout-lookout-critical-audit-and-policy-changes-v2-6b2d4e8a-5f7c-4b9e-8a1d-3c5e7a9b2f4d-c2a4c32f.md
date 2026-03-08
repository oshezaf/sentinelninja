# Lookout - Critical Audit and Policy Changes (v2)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Monitors critical audit events and policy changes from Lookout Mobile Risk API v2. Detects unauthorized configuration changes, policy modifications, security setting adjustments, and administrative actions that could impact mobile security posture. Provides comprehensive audit trail for compliance and security governance.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Lookout](../solutions/lookout.md) |
| **ID** | `6b2d4e8a-5f7c-4b9e-8a1d-3c5e7a9b2f4d` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion, Persistence, PrivilegeEscalation, Impact |
| **Techniques** | T1629, T1626 |
| **Required Connectors** | [LookoutAPI](../connectors/lookoutapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Lookout/Analytic%20Rules/LookoutAuditEventV2.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`LookoutMtdV2_CL`](../tables/lookoutmtdv2-cl.md) | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Lookout](../solutions/lookout.md)

