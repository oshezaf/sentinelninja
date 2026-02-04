# SSG_Security_Incidents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

The security analytic rule is designed to scrutinize network activity involving private IP addresses within an organization's internal network. By filtering log entries to include only those where either the source or the destination IP is private, the rule focuses on internal communications that could indicate unauthorized access, internal threats, or other security anomalies.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SINEC Security Guard](../solutions/sinec-security-guard.md) |
| **ID** | `d41fa731-45a2-4b23-bb1d-29896fbc5298` |
| **Severity** | HIGH |
| **Kind** | NRT |
| **Tactics** | Impact |
| **Techniques** | T1486 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SINEC%20Security%20Guard/Analytic%20Rules/SSG_Azure_Sentinel_analytic_rule.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SINECSecurityGuard_CL`](../tables/sinecsecurityguard-cl.md) | — | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SINEC Security Guard](../solutions/sinec-security-guard.md)

