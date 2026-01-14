# Threat Essentials - Mail redirect via ExO transport rule

Identifies when Exchange Online transport rule configured to forward emails. This could be an adversary mailbox configured to collect mail from multiple user accounts.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md) |
| **ID** | `d7c575b2-84f5-48cb-92c5-70d7e8246284` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Collection, Exfiltration |
| **Techniques** | T1114, T1020 |
| **Required Connectors** | [Office365](../connectors/office365.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SecurityThreatEssentialSolution/Analytic%20Rules/Threat_Essentials_Mail_redirect_via_ExO_transport_rule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`OfficeActivity`](../tables/officeactivity.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md)

