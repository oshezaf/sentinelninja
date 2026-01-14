# Lookout - High Severity Mobile Threats Detected (v2)

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects high severity mobile threats from Lookout Mobile Risk API v2 with enhanced threat intelligence and device context. This rule leverages the comprehensive v2 field set to provide detailed threat classification, risk assessment, and device compliance status for improved security monitoring.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Lookout](../solutions/lookout.md) |
| **ID** | `8b4a5c7e-2f91-4d8a-9e3b-1c6f8a2d4e9f` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery, DefenseEvasion, Persistence, PrivilegeEscalation |
| **Techniques** | T1424, T1418, T1629, T1630 |
| **Required Connectors** | [LookoutAPI](../connectors/lookoutapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Lookout/Analytic%20Rules/LookoutThreatEventV2.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`LookoutMtdV2_CL`](../tables/lookoutmtdv2-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Lookout](../solutions/lookout.md)

