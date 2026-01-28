# Sonrai Ticket Closed

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Checks if Sonrai tickets have been closed.  It uses the action type to check if a ticket has been closed

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SonraiSecurity](../solutions/sonraisecurity.md) |
| **ID** | `f5d467de-b5a2-4b4f-96db-55e27c733594` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation |
| **Techniques** | T1566, T1059, T1547, T1548, T1562, T1003, T1087, T1021, T1119, T1071, T1041, T1499 |
| **Required Connectors** | [SonraiDataConnector](../connectors/sonraidataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SonraiSecurity/Analytic%20Rules/SonraiTicketClosed.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SonraiSecurity](../solutions/sonraisecurity.md)

