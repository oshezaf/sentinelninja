# Theom Critical Risks

Creates Microsoft Sentinel incidents for critical risk Theom alerts.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Theom](../solutions/theom.md) |
| **ID** | `bb9051ef-0e72-4758-a143-80c25ee452f0` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Exfiltration, Impact, Reconnaissance |
| **Techniques** | T1592, T1589, T1070, T1552, T1619, T1119, T1560, T1530, T1213, T1001, T1041, T1537, T1485, T1486, T1565 |
| **Required Connectors** | [Theom](../connectors/theom.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Theom/Analytic%20Rules/TheomRisksCritical.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`TheomAlerts_CL`](../tables/theomalerts-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Theom](../solutions/theom.md)

