# Contrast ADR - EDR Alert Correlation

Correlates Contrast ADR incidents with specific high-risk attack patterns including command injection, deserialization attacks, and file upload vulnerabilities. This rule identifies confirmed security events that require immediate attention from security teams.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [ContrastADR](../solutions/contrastadr.md) |
| **ID** | `c1c6ba64-134e-403b-b9a6-1bebc90809a4` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution, DefenseEvasion, InitialAccess, CommandAndControl |
| **Techniques** | T1059, T1055, T1190, T1008 |
| **Required Connectors** | [ContrastADR](../connectors/contrastadr.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ContrastADR/Analytic%20Rules/Contrast_ADR_Confirmed_EDR.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ContrastADRIncident_CL`](../tables/contrastadrincident-cl.md)
- [`ContrastADR_CL`](../tables/contrastadr-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to ContrastADR](../solutions/contrastadr.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

