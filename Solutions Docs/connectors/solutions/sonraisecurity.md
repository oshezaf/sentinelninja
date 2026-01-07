# SonraiSecurity

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Sonrai |
| **Support Tier** | Partner |
| **Categories** | domains |
| **First Published** | 2021-10-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SonraiSecurity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SonraiSecurity) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Sonrai Data Connector](../connectors/sonraidataconnector.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) | [Sonrai Data Connector](../connectors/sonraidataconnector.md) | Analytics, Workbooks |

## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 9 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [New Sonrai Ticket](../content/bcc3362d-b6f9-4de0-b41c-707fafd5a416.md) | Medium | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) |
| [Sonrai Ticket Assigned](../content/37a8d052-a3db-4dc6-9dca-9390cac6f486.md) | Medium | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) |
| [Sonrai Ticket Closed](../content/f5d467de-b5a2-4b4f-96db-55e27c733594.md) | Low | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) |
| [Sonrai Ticket Escalation Executed](../content/0d29c93e-b83f-4dfb-bbbb-76824b77eeca.md) | Medium | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) |
| [Sonrai Ticket Escalation Executed](../content/822fff15-ea68-4d0f-94ee-b4482ddb6f3a.md) | Medium | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) |
| [Sonrai Ticket Reopened](../content/b60129ab-ce22-4b76-858d-3204932a13cc.md) | Medium | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) |
| [Sonrai Ticket Risk Accepted](../content/080191e8-271d-4ae6-85ce-c7bcd4b06b40.md) | Medium | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) |
| [Sonrai Ticket Snoozed](../content/10e6c454-5cad-4f86-81ce-800235cb050a.md) | Medium | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) |
| [Sonrai Ticket Updated](../content/af9b8eb1-a8ef-40aa-92a4-1fc73a1479c7.md) | Medium | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Sonrai](../content/sonrai-sonraisecurity.md) | [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                       |
|-------------|--------------------------------|--------------------------------------------------------------------------|
| 3.0.0       | 04-12-2023                     | Added entity mapping to **Analytic Rules**                               |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
