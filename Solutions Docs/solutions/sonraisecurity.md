# SonraiSecurity

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/SonraiSecurity/Workbooks/Images/Logo/Sonrai.svg" alt="SonraiSecurity Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Sonrai Security](https://sonraisecurity.com/) solution provides the capability to ingest Sonrai tickets into Microsoft Sentinel through the REST API.
 
 **Underlying Microsoft Technologies used:** 
 
 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:
 
 1. [Codeless Connector Platform (CCP) (used in GitHub Enterprise Audit Log data connector)](https://docs.microsoft.com/azure/sentinel/create-codeless-connector?tabs=deploy-via-arm-template%2Cconnect-via-the-azure-portal)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Sonrai |
| **Support Tier** | Partner |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Sonrai - support@sonraisecurity.com |
| **First Published** | 2021-10-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SonraiSecurity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SonraiSecurity) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Sonrai Data Connector](../connectors/sonraidataconnector.md)

## Tables Used

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
| [New Sonrai Ticket](../content/sonraisecurity-new-sonrai-ticket-bcc3362d-b6f9-4de0-b41c-707fafd5a416-2812a685.md) | Medium | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) |
| [Sonrai Ticket Assigned](../content/sonraisecurity-sonrai-ticket-assigned-37a8d052-a3db-4dc6-9dca-9390cac6f486-2ee6e4d0.md) | Medium | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) |
| [Sonrai Ticket Closed](../content/sonraisecurity-sonrai-ticket-closed-f5d467de-b5a2-4b4f-96db-55e27c733594-09bc4d60.md) | Low | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) |
| [Sonrai Ticket Escalation Executed](../content/sonraisecurity-sonrai-ticket-escalation-executed-0d29c93e-b83f-4dfb-bbbb-76824b77eeca-67fd1e6c.md) | Medium | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) |
| [Sonrai Ticket Escalation Executed](../content/sonraisecurity-sonrai-ticket-escalation-executed-822fff15-ea68-4d0f-94ee-b4482ddb6f3a-4c0b067a.md) | Medium | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) |
| [Sonrai Ticket Reopened](../content/sonraisecurity-sonrai-ticket-reopened-b60129ab-ce22-4b76-858d-3204932a13cc-26283b06.md) | Medium | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) |
| [Sonrai Ticket Risk Accepted](../content/sonraisecurity-sonrai-ticket-risk-accepted-080191e8-271d-4ae6-85ce-c7bcd4b06b40-ec666763.md) | Medium | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) |
| [Sonrai Ticket Snoozed](../content/sonraisecurity-sonrai-ticket-snoozed-10e6c454-5cad-4f86-81ce-800235cb050a-186cfa44.md) | Medium | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) |
| [Sonrai Ticket Updated](../content/sonraisecurity-sonrai-ticket-updated-af9b8eb1-a8ef-40aa-92a4-1fc73a1479c7-12412c0f.md) | Medium | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Sonrai](../content/sonraisecurity-sonrai-6abc78da.md) | [`Sonrai_Tickets_CL`](../tables/sonrai-tickets-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                       |
|-------------|--------------------------------|--------------------------------------------------------------------------|
| 3.0.0       | 04-12-2023                     | Added entity mapping to **Analytic Rules**                               |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

