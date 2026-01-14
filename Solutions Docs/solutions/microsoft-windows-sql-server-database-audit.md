# Microsoft Windows SQL Server Database Audit

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Microsoft Windows SQL Server Database Audit Logo" width="75" height="75">

The Microsoft Windows SQL Server Database Audit solution for Microsoft Sentinel enables security monitoring scenarios using Windows events. The contents of the solution allow hunting for unauthorized access and other abnormalities with SQL database identities.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Community |
| **Support Tier** | Community |
| **Support Link** | [https://github.com/Azure/Azure-Sentinel/issues](https://github.com/Azure/Azure-Sentinel/issues) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Community |
| **First Published** | 2022-11-29 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Windows%20SQL%20Server%20Database%20Audit](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Windows%20SQL%20Server%20Database%20Audit) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **9 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 9 |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Failed Logon Attempts on SQL Server](../content/microsoft-windows-sql-server-database-audit-failed-logon-attempts-on-sql-server-d98256d5-0c9a-4ffc-8618-66a3404412f8-90519277.md) | CredentialAccess | - |
| [Failed Logon on SQL Server from Same IPAddress in Short time Span](../content/microsoft-windows-sql-server-database-audit-failed-logon-on-sql-server-from-same-ipaddress-in-short-time-72727649-6445-46a3-b249-997a009fad89-ce597c3a.md) | CredentialAccess | - |
| [Multiple Failed Logon on SQL Server in Short time Span](../content/microsoft-windows-sql-server-database-audit-multiple-failed-logon-on-sql-server-in-short-time-span-aef212b5-c770-42e1-9abf-bc513e4e749c-a2c0eaef.md) | CredentialAccess | - |
| [New User created on SQL Server](../content/microsoft-windows-sql-server-database-audit-new-user-created-on-sql-server-2b96760d-5307-44f0-94bd-8cf0ec52b1fb-13fde863.md) | Persistence | - |
| [SQL User deleted from Database](../content/microsoft-windows-sql-server-database-audit-sql-user-deleted-from-database-7b8fa5f5-4f5b-4698-a4cf-720bbb215bea-6594ba88.md) | Persistence, PrivilegeEscalation, Impact | - |
| [User Role altered on SQL Server](../content/microsoft-windows-sql-server-database-audit-user-role-altered-on-sql-server-80a420b3-6a97-4b8f-9d86-4b43ee522fb2-d518c316.md) | Persistence, PrivilegeEscalation | - |
| [User added to SQL Server SecurityAdmin Group](../content/microsoft-windows-sql-server-database-audit-user-added-to-sql-server-securityadmin-group-363ea6d1-b30d-4a44-b56a-63c3c8a99621-fa24c328.md) | Persistence, PrivilegeEscalation | - |
| [User removed from SQL Server Roles](../content/microsoft-windows-sql-server-database-audit-user-removed-from-sql-server-roles-5dd79877-8066-4ce4-ae03-eedd8ebf04f8-c113ae47.md) | Persistence, PrivilegeEscalation, Impact | - |
| [User removed from SQL Server SecurityAdmin Group](../content/microsoft-windows-sql-server-database-audit-user-removed-from-sql-server-securityadmin-group-f35b879c-c836-4502-94f2-c76b7f06f02d-1bad26c1.md) | Persistence, PrivilegeEscalation, Impact | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.1       | 18-03-2024                     | Change in **Hunting Queries** description   | 
| 3.0.0       | 10-07-2023                     | Updated **Parser** to correctly parse failed login events | 
|             |                                | Added Entity mapping and version in all the **Hunting Queries** |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

