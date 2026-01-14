# Sonrai Ticket Escalation Executed

Checks if Sonrai tickets have had a comment added.  It uses the action type to check if a ticket has had a comment added

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SonraiSecurity](../solutions/sonraisecurity.md) |
| **ID** | `0d29c93e-b83f-4dfb-bbbb-76824b77eeca` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation |
| **Techniques** | T1566, T1059, T1547, T1548, T1562, T1003, T1087, T1021, T1119, T1071, T1041, T1499 |
| **Required Connectors** | [SonraiDataConnector](../connectors/sonraidataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SonraiSecurity/Analytic%20Rules/SonraiTicketCommentAdded.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SonraiSecurity](../solutions/sonraisecurity.md)

