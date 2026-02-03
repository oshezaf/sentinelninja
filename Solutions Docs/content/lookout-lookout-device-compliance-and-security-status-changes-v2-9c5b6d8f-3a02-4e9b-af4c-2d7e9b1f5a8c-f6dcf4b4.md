# Lookout - Device Compliance and Security Status Changes (v2)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Monitors device compliance status changes and security posture degradation using Lookout Mobile Risk API v2 enhanced device fields. Detects devices becoming non-compliant, security status changes, and potential device compromise indicators with detailed device context and MDM integration data.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Lookout](../solutions/lookout.md) |
| **ID** | `9c5b6d8f-3a02-4e9b-af4c-2d7e9b1f5a8c` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery, DefenseEvasion, Persistence |
| **Techniques** | T1418, T1629, T1655 |
| **Required Connectors** | [LookoutAPI](../connectors/lookoutapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Lookout/Analytic%20Rules/LookoutDeviceComplianceV2.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`LookoutMtdV2_CL`](../tables/lookoutmtdv2-cl.md) | — | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Lookout](../solutions/lookout.md)

