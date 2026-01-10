# Contrast ADR - Security Incident Alert

Monitors Contrast ADR security incidents across all applications and environments. This rule creates alerts for all security incidents detected by Contrast Security ADR, providing comprehensive visibility into application security events requiring investigation.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [ContrastADR](../solutions/contrastadr.md) |
| **ID** | `7ce5956f-48f2-42f5-8e2e-c254e7643c11` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, DefenseEvasion, Discovery, CommandAndControl |
| **Techniques** | T1190, T1055, T1018, T1008 |
| **Required Connectors** | [ContrastADR](../connectors/contrastadr.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ContrastADR/Analytic%20Rules/Contrast_Security_ADR_incident.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ContrastADRIncident_CL`](../tables/contrastadrincident-cl.md)

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

