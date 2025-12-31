# Microsoft Windows SQL Server Database Audit

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Community |
| **Support Tier** | Community |
| **Support Link** | [https://github.com/Azure/Azure-Sentinel/issues](https://github.com/Azure/Azure-Sentinel/issues) |
| **Categories** | domains |
| **First Published** | 2022-11-29 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Windows%20SQL%20Server%20Database%20Audit](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Windows%20SQL%20Server%20Database%20Audit) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

This solution queries **1 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`SQLEvent`](../tables/sqlevent.md) | Hunting |

## Content Items

This solution includes **9 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 9 |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Failed Logon Attempts on SQL Server](../content/d98256d5-0c9a-4ffc-8618-66a3404412f8.md) | CredentialAccess | [`SQLEvent`](../tables/sqlevent.md) |
| [Failed Logon on SQL Server from Same IPAddress in Short time Span](../content/72727649-6445-46a3-b249-997a009fad89.md) | CredentialAccess | [`SQLEvent`](../tables/sqlevent.md) |
| [Multiple Failed Logon on SQL Server in Short time Span](../content/aef212b5-c770-42e1-9abf-bc513e4e749c.md) | CredentialAccess | [`SQLEvent`](../tables/sqlevent.md) |
| [New User created on SQL Server](../content/2b96760d-5307-44f0-94bd-8cf0ec52b1fb.md) | Persistence | [`SQLEvent`](../tables/sqlevent.md) |
| [SQL User deleted from Database](../content/7b8fa5f5-4f5b-4698-a4cf-720bbb215bea.md) | Persistence, PrivilegeEscalation, Impact | [`SQLEvent`](../tables/sqlevent.md) |
| [User Role altered on SQL Server](../content/80a420b3-6a97-4b8f-9d86-4b43ee522fb2.md) | Persistence, PrivilegeEscalation | [`SQLEvent`](../tables/sqlevent.md) |
| [User added to SQL Server SecurityAdmin Group](../content/363ea6d1-b30d-4a44-b56a-63c3c8a99621.md) | Persistence, PrivilegeEscalation | [`SQLEvent`](../tables/sqlevent.md) |
| [User removed from SQL Server Roles](../content/5dd79877-8066-4ce4-ae03-eedd8ebf04f8.md) | Persistence, PrivilegeEscalation, Impact | [`SQLEvent`](../tables/sqlevent.md) |
| [User removed from SQL Server SecurityAdmin Group](../content/f35b879c-c836-4502-94f2-c76b7f06f02d.md) | Persistence, PrivilegeEscalation, Impact | [`SQLEvent`](../tables/sqlevent.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.1       | 18-03-2024                     | Change in **Hunting Queries** description   | 
| 3.0.0       | 10-07-2023                     | Updated **Parser** to correctly parse failed login events | 
|             |                                | Added Entity mapping and version in all the **Hunting Queries** |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
