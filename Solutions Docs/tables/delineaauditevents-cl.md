# DelineaAuditEvents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (7 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Delinea%20Platform%5CData%20Connectors%5CDelineaAuditLogs_ccf/Delinea_Table.json)

| Column Name | Type |
|:------------|:-----|
| EventType | string |
| Level | string |
| RawData | string |
| SecretId | string |
| Service | string |
| TimeGenerated | datetime |
| User | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Delinea Platform](../solutions/delinea-platform.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Delinea Platform Audit Events](../connectors/delineaplatformconnector.md) |  |

---

## Content Items Using This Table (20)

### Analytic Rules (6)

**In solution [Delinea Platform](../solutions/delinea-platform.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Delinea - Bulk secret export / access](../content/delinea-platform-delinea-bulk-secret-export-access-7ab54aed-f97e-4202-a624-3cbd496c3b68-aa09d1ea.md) |  |
| [Delinea - Failed authentication spike (single account)](../content/delinea-platform-delinea-failed-authentication-spike-single-account-e6d743f2-a538-455f-899c-251926b9071e-f52d6e65.md) |  |
| [Delinea - Platform configuration change](../content/delinea-platform-delinea-platform-configuration-change-7c07194a-8eda-4cb7-9bc4-cd4700eb4c4d-8dc1270a.md) |  |
| [Delinea - Privilege escalation detected (role / permission changes)](../content/delinea-platform-delinea-privilege-escalation-detected-role-permission-changes-c24252d1-d98c-48db-b2f9-4cb37dd2208a-d2d0529a.md) |  |
| [Delinea - Privileged account access anomaly (secret-access volume vs baseline)](../content/delinea-platform-delinea-privileged-account-access-anomaly-secret-access-volume-vs-baseline-e1bfca9b-7980-469f-a57c-16e81451861b-4bba52d6.md) |  |
| [Delinea - Sensitive secret accessed by new user (first access in 14 days)](../content/delinea-platform-delinea-sensitive-secret-accessed-by-new-user-first-access-in-14-days-a7b167e2-9582-440b-8d47-53df2f73c4f4-d976407f.md) |  |

### Hunting Queries (10)

**In solution [Delinea Platform](../solutions/delinea-platform.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Delinea - Activity by source IP](../content/delinea-platform-delinea-activity-by-source-ip-3185bf9b-29dd-40fa-8477-e2fd4172e3ce-68a6c74d.md) |  |
| [Delinea - All events by user](../content/delinea-platform-delinea-all-events-by-user-206c0df6-a756-48a8-9c69-8a0815682327-649628a3.md) |  |
| [Delinea - Authentication failures ranked by account](../content/delinea-platform-delinea-authentication-failures-ranked-by-account-9ecbc6e0-e40d-4fa3-8d6a-2652418f9c77-84fc0c54.md) |  |
| [Delinea - Configuration changes](../content/delinea-platform-delinea-configuration-changes-7adfee87-8c63-4625-a2db-c6971a3233b6-edc3c83a.md) |  |
| [Delinea - Events by severity](../content/delinea-platform-delinea-events-by-severity-e9850d1c-4821-4375-bfe7-3559684c141d-8e380652.md) |  |
| [Delinea - Failed operations](../content/delinea-platform-delinea-failed-operations-29231a10-e272-4854-b191-a2d2db4279fa-fcc7670a.md) |  |
| [Delinea - Off-hours privileged activity](../content/delinea-platform-delinea-off-hours-privileged-activity-4c68acd6-286e-4f8c-ac4e-606a41984957-f47b03e4.md) |  |
| [Delinea - Rare / first-seen event types](../content/delinea-platform-delinea-rare-first-seen-event-types-634f4212-76e3-485e-a6cc-5b1929476ef8-e9e58497.md) |  |
| [Delinea - Secret access audit trail](../content/delinea-platform-delinea-secret-access-audit-trail-51a82b60-4225-49ab-8fc6-c6381fa0f52c-d813232e.md) |  |
| [Delinea - Secret access fan-out by user](../content/delinea-platform-delinea-secret-access-fan-out-by-user-729822b0-daa5-4480-a92d-e1fd7294ea97-840bfec8.md) |  |

### Workbooks (4)

**In solution [Delinea Platform](../solutions/delinea-platform.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DelineaIdentityAuthOverview](../content/delinea-platform-delineaidentityauthoverview-991f54fc.md) |  |
| [DelineaPrivilegedAccessThreatHunting](../content/delinea-platform-delineaprivilegedaccessthreathunting-e732df9b.md) |  |
| [DelineaSecretServerVaultActivity](../content/delinea-platform-delineasecretservervaultactivity-fecbbf4b.md) |  |
| [DelineaUserActivityInvestigation](../content/delinea-platform-delineauseractivityinvestigation-3bc7d9ec.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ASimAuditEventDelineaPlatform](../parsers/asimauditeventdelineaplatform.md) | [Delinea Platform](../solutions/delinea-platform.md) |  |
| [vimAuditEventDelineaPlatform](../parsers/vimauditeventdelineaplatform.md) | [Delinea Platform](../solutions/delinea-platform.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

