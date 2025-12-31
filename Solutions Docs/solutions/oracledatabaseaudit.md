# OracleDatabaseAudit

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2021-11-05 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OracleDatabaseAudit](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OracleDatabaseAudit) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] Oracle Database Audit](../connectors/oracledatabaseaudit.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [[Deprecated] Oracle Database Audit](../connectors/oracledatabaseaudit.md) | Analytics, Hunting, Workbooks |

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
| [OracleDBAudit - Connection to database from external IP](../content/54aa2c17-acfd-4e3a-a1c4-99c88cf34ebe.md) | Medium | InitialAccess, Collection, Exfiltration | [`Syslog`](../tables/syslog.md) |
| [OracleDBAudit - Connection to database from unknown IP](../content/80b1dd6d-1aea-471e-be7a-a4a0afdeec80.md) | Medium | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [OracleDBAudit - Multiple tables dropped in short time](../content/b3aa0e5a-75a2-4613-80ec-93a1be3aeb8f.md) | Medium | Impact | [`Syslog`](../tables/syslog.md) |
| [OracleDBAudit - New user account](../content/cca7b348-e904-4a7a-8f26-d22d4d477119.md) | Low | InitialAccess, Persistence | [`Syslog`](../tables/syslog.md) |
| [OracleDBAudit - Query on Sensitive Table](../content/d7fdcad5-ce96-4db6-9a5e-4a86a5166e5e.md) | Medium | Collection | [`Syslog`](../tables/syslog.md) |
| [OracleDBAudit - SQL injection patterns](../content/ab352f0d-7c55-4ab2-a22e-b1c2d995e193.md) | Medium | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [OracleDBAudit - Shutdown Server](../content/27cc2cdc-ba67-4906-a6ef-ecbc9c284f4e.md) | Medium | Impact | [`Syslog`](../tables/syslog.md) |
| [OracleDBAudit - Unusual user activity on multiple tables](../content/75024e1c-26e7-4e73-821d-95e5decdd8db.md) | Medium | Collection | [`Syslog`](../tables/syslog.md) |
| [OracleDBAudit - User activity after long inactivity time](../content/5e93a535-036b-4570-9e58-d8992f30e1ae.md) | Medium | InitialAccess, Persistence | [`Syslog`](../tables/syslog.md) |
| [OracleDBAudit - User connected to database from new IP](../content/39a0995e-f4a9-4869-a0ae-36d6d9049bfd.md) | Low | InitialAccess | [`Syslog`](../tables/syslog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [OracleDBAudit - Action by Ip](../content/b43e074f-b630-4a16-80e5-138f4b6b64fb.md) | InitialAccess, DefenseEvasion, Collection, Impact | [`Syslog`](../tables/syslog.md) |
| [OracleDBAudit - Action by user](../content/e0b49a22-1c63-4572-b913-b3f31b8e9edf.md) | InitialAccess, DefenseEvasion, Collection, Impact | [`Syslog`](../tables/syslog.md) |
| [OracleDBAudit - Active Users](../content/859c26cc-a779-4259-b981-6c6bc8f6402b.md) | InitialAccess, DefenseEvasion | [`Syslog`](../tables/syslog.md) |
| [OracleDBAudit - Audit large queries](../content/ba5e1a88-2054-4bda-a6e0-20008148ae6e.md) | InitialAccess, DefenseEvasion | [`Syslog`](../tables/syslog.md) |
| [OracleDBAudit - Dropped Tables](../content/e74b944a-c438-4949-b4d0-cdfe3a9354c9.md) | Impact | [`Syslog`](../tables/syslog.md) |
| [OracleDBAudit - Inactive Users](../content/2c7bbbe1-17cb-44ec-be63-fbb37b609403.md) | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [OracleDBAudit - Top tables queries](../content/b8fcb5b8-254c-4d49-865e-403b8453f487.md) | Collection | [`Syslog`](../tables/syslog.md) |
| [OracleDBAudit - Users Privileges Review](../content/46bbb4e9-fdeb-45dc-b4df-e4cee0f90ef0.md) | InitialAccess, PrivilegeEscalation | [`Syslog`](../tables/syslog.md) |
| [OracleDBAudit - Users connected to databases during non-operational hours.](../content/48fa6c2c-6e30-49e1-bc94-744212f99bfe.md) | InitialAccess, DefenseEvasion, Collection, Impact | [`Syslog`](../tables/syslog.md) |
| [OracleDBAudit - Users with new privileges](../content/6be9634e-6661-4bff-98f1-4a743d7231a5.md) | InitialAccess, PrivilegeEscalation | [`Syslog`](../tables/syslog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [OracleDatabaseAudit](../content/oracledatabaseaudit-oracledatabaseaudit.md) | [`Syslog`](../tables/syslog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [OracleDatabaseAuditEvent](../content/fb193d04-3051-4fc8-ae13-cc087d4c9f15.md) | - | - |

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
- [Content Index](../content-index.md)
