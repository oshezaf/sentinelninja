# OracleDatabaseAudit

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/oracle_logo.svg" alt="OracleDatabaseAudit Logo" width="75" height="75">

The Oracle Database Audit solution provides the capability to ingest [Oracle Database](https://www.oracle.com/database/technologies/) audit events into Microsoft Sentinel through the syslog. Refer to [documentation](https://docs.oracle.com/en/database/oracle/oracle-database/21/dbseg/introduction-to-auditing.html#GUID-94381464-53A3-421B-8F13-BD171C867405) for more information.
  
 This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog  solution will be installed as part of this solution installation. 

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.**. Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-11-05 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OracleDatabaseAudit](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OracleDatabaseAudit) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Oracle Database Audit](../connectors/oracledatabaseaudit.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [[Deprecated] Oracle Database Audit](../connectors/oracledatabaseaudit.md) | - |

## Content Items

This solution includes **22 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 10 |
| Hunting Queries | 10 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [OracleDBAudit - Connection to database from external IP](../content/oracledatabaseaudit-oracledbaudit-connection-to-database-from-external-ip-54aa2c17-acfd-4e3a-a1c4-99c88cf34ebe-1f0cb538.md) | Medium | InitialAccess, Collection, Exfiltration | - |
| [OracleDBAudit - Connection to database from unknown IP](../content/oracledatabaseaudit-oracledbaudit-connection-to-database-from-unknown-ip-80b1dd6d-1aea-471e-be7a-a4a0afdeec80-58ee84fd.md) | Medium | InitialAccess | - |
| [OracleDBAudit - Multiple tables dropped in short time](../content/oracledatabaseaudit-oracledbaudit-multiple-tables-dropped-in-short-time-b3aa0e5a-75a2-4613-80ec-93a1be3aeb8f-1c483121.md) | Medium | Impact | - |
| [OracleDBAudit - New user account](../content/oracledatabaseaudit-oracledbaudit-new-user-account-cca7b348-e904-4a7a-8f26-d22d4d477119-9b9b7968.md) | Low | InitialAccess, Persistence | - |
| [OracleDBAudit - Query on Sensitive Table](../content/oracledatabaseaudit-oracledbaudit-query-on-sensitive-table-d7fdcad5-ce96-4db6-9a5e-4a86a5166e5e-f6002111.md) | Medium | Collection | - |
| [OracleDBAudit - SQL injection patterns](../content/oracledatabaseaudit-oracledbaudit-sql-injection-patterns-ab352f0d-7c55-4ab2-a22e-b1c2d995e193-8f05d17d.md) | Medium | InitialAccess | - |
| [OracleDBAudit - Shutdown Server](../content/oracledatabaseaudit-oracledbaudit-shutdown-server-27cc2cdc-ba67-4906-a6ef-ecbc9c284f4e-30f74874.md) | Medium | Impact | - |
| [OracleDBAudit - Unusual user activity on multiple tables](../content/oracledatabaseaudit-oracledbaudit-unusual-user-activity-on-multiple-tables-75024e1c-26e7-4e73-821d-95e5decdd8db-dbe1e2fb.md) | Medium | Collection | - |
| [OracleDBAudit - User activity after long inactivity time](../content/oracledatabaseaudit-oracledbaudit-user-activity-after-long-inactivity-time-5e93a535-036b-4570-9e58-d8992f30e1ae-1821ecca.md) | Medium | InitialAccess, Persistence | - |
| [OracleDBAudit - User connected to database from new IP](../content/oracledatabaseaudit-oracledbaudit-user-connected-to-database-from-new-ip-39a0995e-f4a9-4869-a0ae-36d6d9049bfd-fe409afd.md) | Low | InitialAccess | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [OracleDBAudit - Action by Ip](../content/oracledatabaseaudit-oracledbaudit-action-by-ip-b43e074f-b630-4a16-80e5-138f4b6b64fb-d7d05129.md) | InitialAccess, DefenseEvasion, Collection, Impact | - |
| [OracleDBAudit - Action by user](../content/oracledatabaseaudit-oracledbaudit-action-by-user-e0b49a22-1c63-4572-b913-b3f31b8e9edf-ba650a07.md) | InitialAccess, DefenseEvasion, Collection, Impact | - |
| [OracleDBAudit - Active Users](../content/oracledatabaseaudit-oracledbaudit-active-users-859c26cc-a779-4259-b981-6c6bc8f6402b-701e81f8.md) | InitialAccess, DefenseEvasion | - |
| [OracleDBAudit - Audit large queries](../content/oracledatabaseaudit-oracledbaudit-audit-large-queries-ba5e1a88-2054-4bda-a6e0-20008148ae6e-b8eed56b.md) | InitialAccess, DefenseEvasion | - |
| [OracleDBAudit - Dropped Tables](../content/oracledatabaseaudit-oracledbaudit-dropped-tables-e74b944a-c438-4949-b4d0-cdfe3a9354c9-0dd5f3b4.md) | Impact | - |
| [OracleDBAudit - Inactive Users](../content/oracledatabaseaudit-oracledbaudit-inactive-users-2c7bbbe1-17cb-44ec-be63-fbb37b609403-632ec36a.md) | InitialAccess | - |
| [OracleDBAudit - Top tables queries](../content/oracledatabaseaudit-oracledbaudit-top-tables-queries-b8fcb5b8-254c-4d49-865e-403b8453f487-bdf84abe.md) | Collection | - |
| [OracleDBAudit - Users Privileges Review](../content/oracledatabaseaudit-oracledbaudit-users-privileges-review-46bbb4e9-fdeb-45dc-b4df-e4cee0f90ef0-ccae9e98.md) | InitialAccess, PrivilegeEscalation | - |
| [OracleDBAudit - Users connected to databases during non-operational hours.](../content/oracledatabaseaudit-oracledbaudit-users-connected-to-databases-during-non-operational-hours.-48fa6c2c-6e30-49e1-bc94-744212f99bfe-9ab227bc.md) | InitialAccess, DefenseEvasion, Collection, Impact | - |
| [OracleDBAudit - Users with new privileges](../content/oracledatabaseaudit-oracledbaudit-users-with-new-privileges-6be9634e-6661-4bff-98f1-4a743d7231a5-119d0684.md) | InitialAccess, PrivilegeEscalation | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [OracleDatabaseAudit](../content/oracledatabaseaudit-oracledatabaseaudit-7eda506f.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [OracleDatabaseAuditEvent](../content/oracledatabaseaudit-oracledatabaseauditevent-fb193d04-3051-4fc8-ae13-cc087d4c9f15-6b7a5d65.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.3       | 11-12-2024                     | Removed Deprecated Data connectors          |
| 3.0.2       | 23-07-2024                     | Deprecated data connectors                  |
| 3.0.1       | 26-04-2024                     | Repackaged for fix on parser in maintemplate to have old parsername and parentid                    |
| 3.0.0       | 19-12-2023                     | Documentation changes for oracle data base audit  |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
