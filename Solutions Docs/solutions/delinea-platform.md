# Delinea Platform Sentinel Solution

*Solution: Delinea Platform*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/DelineaLogo.svg" alt="Delinea Platform Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Delinea |
| **Support Tier** | Partner |
| **Support Link** | [https://delinea.com/support](https://delinea.com/support) |
| **Categories** | Identity,Security - Threat Protection |
| **Version** | 3.0.1 |
| **Author** | Delinea |
| **First Published** | 2026-06-16 |
| **Last Updated** | 2026-10-28 |
| **Solution Folder** | [Delinea Platform](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Delinea%20Platform) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/delineainc1667920346745.delinea_platform_direct) · Popularity: ⚪ Very Low (0%) |

The **Delinea Platform** solution ingests privileged-access audit events (secret access, session recording, user activity, configuration changes) into Microsoft Sentinel via the Codeless Connector Framework.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Delinea Platform Audit Events](../connectors/delineaplatformconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) | [Delinea Platform Audit Events](../connectors/delineaplatformconnector.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **22 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 10 |
| Analytic Rules | 6 |
| Workbooks | 4 |
| Parsers | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Delinea - Bulk secret export / access](../content/delinea-platform-delinea-bulk-secret-export-access-7ab54aed-f97e-4202-a624-3cbd496c3b68-aa09d1ea.md) | Medium | CredentialAccess, Exfiltration | [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) |
| [Delinea - Failed authentication spike (single account)](../content/delinea-platform-delinea-failed-authentication-spike-single-account-e6d743f2-a538-455f-899c-251926b9071e-f52d6e65.md) | Medium | CredentialAccess | [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) |
| [Delinea - Platform configuration change](../content/delinea-platform-delinea-platform-configuration-change-7c07194a-8eda-4cb7-9bc4-cd4700eb4c4d-8dc1270a.md) | Medium | DefenseEvasion, Persistence | [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) |
| [Delinea - Privilege escalation detected (role / permission changes)](../content/delinea-platform-delinea-privilege-escalation-detected-role-permission-changes-c24252d1-d98c-48db-b2f9-4cb37dd2208a-d2d0529a.md) | High | PrivilegeEscalation, Persistence | [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) |
| [Delinea - Privileged account access anomaly (secret-access volume vs baseline)](../content/delinea-platform-delinea-privileged-account-access-anomaly-secret-access-volume-vs-baseline-e1bfca9b-7980-469f-a57c-16e81451861b-4bba52d6.md) | Medium | CredentialAccess | [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) |
| [Delinea - Sensitive secret accessed by new user (first access in 14 days)](../content/delinea-platform-delinea-sensitive-secret-accessed-by-new-user-first-access-in-14-days-a7b167e2-9582-440b-8d47-53df2f73c4f4-d976407f.md) | High | InitialAccess, LateralMovement, CredentialAccess | [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Delinea - Activity by source IP](../content/delinea-platform-delinea-activity-by-source-ip-3185bf9b-29dd-40fa-8477-e2fd4172e3ce-68a6c74d.md) | Discovery, InitialAccess | [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) |
| [Delinea - All events by user](../content/delinea-platform-delinea-all-events-by-user-206c0df6-a756-48a8-9c69-8a0815682327-649628a3.md) | Discovery | [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) |
| [Delinea - Authentication failures ranked by account](../content/delinea-platform-delinea-authentication-failures-ranked-by-account-9ecbc6e0-e40d-4fa3-8d6a-2652418f9c77-84fc0c54.md) | CredentialAccess | [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) |
| [Delinea - Configuration changes](../content/delinea-platform-delinea-configuration-changes-7adfee87-8c63-4625-a2db-c6971a3233b6-edc3c83a.md) | DefenseEvasion, Persistence | [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) |
| [Delinea - Events by severity](../content/delinea-platform-delinea-events-by-severity-e9850d1c-4821-4375-bfe7-3559684c141d-8e380652.md) | Discovery | [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) |
| [Delinea - Failed operations](../content/delinea-platform-delinea-failed-operations-29231a10-e272-4854-b191-a2d2db4279fa-fcc7670a.md) | CredentialAccess | [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) |
| [Delinea - Off-hours privileged activity](../content/delinea-platform-delinea-off-hours-privileged-activity-4c68acd6-286e-4f8c-ac4e-606a41984957-f47b03e4.md) | CredentialAccess | [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) |
| [Delinea - Rare / first-seen event types](../content/delinea-platform-delinea-rare-first-seen-event-types-634f4212-76e3-485e-a6cc-5b1929476ef8-e9e58497.md) | Discovery | [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) |
| [Delinea - Secret access audit trail](../content/delinea-platform-delinea-secret-access-audit-trail-51a82b60-4225-49ab-8fc6-c6381fa0f52c-d813232e.md) | CredentialAccess | [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) |
| [Delinea - Secret access fan-out by user](../content/delinea-platform-delinea-secret-access-fan-out-by-user-729822b0-daa5-4480-a92d-e1fd7294ea97-840bfec8.md) | CredentialAccess | [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [DelineaIdentityAuthOverview](../content/delinea-platform-delineaidentityauthoverview-991f54fc.md) | [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) |
| [DelineaPrivilegedAccessThreatHunting](../content/delinea-platform-delineaprivilegedaccessthreathunting-e732df9b.md) | [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) |
| [DelineaSecretServerVaultActivity](../content/delinea-platform-delineasecretservervaultactivity-fecbbf4b.md) | [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) |
| [DelineaUserActivityInvestigation](../content/delinea-platform-delineauseractivityinvestigation-3bc7d9ec.md) | [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ASimAuditEventDelineaPlatform](../parsers/asimauditeventdelineaplatform.md) | - | [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) *(read)* |
| [vimAuditEventDelineaPlatform](../parsers/vimauditeventdelineaplatform.md) | - | [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.1       | 23-10-2026                     | Fixed missing parameter in audit query. |
| 3.0.0       | 29-09-2026                     | Initial Solution Release with CCF data connector, ASIM parsers, analytic rules, hunting queries and workbooks. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

