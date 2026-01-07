# VMWareESXi

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-01-12 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMWareESXi](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMWareESXi) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] VMware ESXi](../connectors/vmwareesxi.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [[Deprecated] VMware ESXi](../connectors/vmwareesxi.md) | - |

## Content Items

This solution includes **26 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 14 |
| Hunting Queries | 10 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [VMware ESXi - Dormant VM started](../content/4cdcd5d8-89df-4076-a917-bc50abb9f2ab.md) | Medium | InitialAccess | - |
| [VMware ESXi - Low patch disk space](../content/48d992ba-d404-4159-a8c6-46f51d1325c7.md) | Medium | Impact | - |
| [VMware ESXi - Low temp directory space](../content/2ee727f7-b7c2-4034-b6c9-d245d5a29343.md) | Medium | Impact | - |
| [VMware ESXi - Multiple Failed Shell Login via SSH](../content/22d177d5-588c-4f1a-a332-2695f52079bb.md) | Medium | CredentialAccess | - |
| [VMware ESXi - Multiple VMs stopped](../content/5fe1af14-cd40-48ff-b581-3a12a1f90785.md) | Medium | Impact | - |
| [VMware ESXi - Multiple new VMs started](../content/bdea247f-7d17-498c-ac0e-c7e764cbdbbe.md) | Medium | InitialAccess | - |
| [VMware ESXi - New VM started](../content/0f4a80de-344f-47c0-bc19-cb120c59b6f0.md) | Medium | InitialAccess | - |
| [VMware ESXi - Root impersonation](../content/23a3cf72-9497-408e-8144-87958a60d31a.md) | Medium | PrivilegeEscalation | - |
| [VMware ESXi - Root login](../content/deb448a8-6a9d-4f8c-8a95-679a0a2cd62c.md) | High | InitialAccess, PrivilegeEscalation | - |
| [VMware ESXi - Root password changed](../content/17b0ea43-5aeb-4dc4-ac3a-be84acb8d5b7.md) | High | InitialAccess, Persistence, DefenseEvasion | - |
| [VMware ESXi - SSH Enable on ESXi Host](../content/4f5b5d79-ff4e-4edd-ae3e-9e1187f0b924.md) | High | LateralMovement | - |
| [VMware ESXi - Shared or stolen root account](../content/9c496d6c-42a3-4896-9b6c-00254386928f.md) | High | InitialAccess, PrivilegeEscalation | - |
| [VMware ESXi - Unexpected disk image](../content/395c5560-ddc2-45b2-aafe-2e3f64528d3d.md) | Medium | Impact | - |
| [VMware ESXi - VM stopped](../content/43889f30-7bce-4d8a-93bb-29c9615ca8dd.md) | Medium | Impact | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [VMware ESXi - Download errors](../content/6702f91d-c764-497b-8d67-1cce8a33b895.md) | InitialAccess | - |
| [VMware ESXi - List of dormant users.](../content/a0f32708-e6fb-427f-94d2-b09cf64acdf8.md) | InitialAccess | - |
| [VMware ESXi - List of powered off VMs](../content/b8d23b5d-3fb0-4265-9f4f-8878bc87471d.md) | Impact | - |
| [VMware ESXi - List of powered on VMs](../content/9148aa96-1480-4150-9ed7-bacaae322260.md) | InitialAccess | - |
| [VMware ESXi - List of unused VMs](../content/d69f0373-f424-4f17-a34a-8379974fec6e.md) | InitialAccess | - |
| [VMware ESXi - List of virtual disks (images)](../content/9a90ccdd-2091-447f-bea2-e8a5125c8dde.md) | Impact | - |
| [VMware ESXi - NFC download activities](../content/b5424011-314b-4ddc-95db-12d2b6f1ce96.md) | InitialAccess | - |
| [VMware ESXi - Root logins](../content/e04a7f8e-1a47-4390-943d-a6cabbf4ec6e.md) | InitialAccess, PrivilegeEscalation | - |
| [VMware ESXi - Root logins failures](../content/fc6c0440-1bb6-4661-89e9-4cb2c8f1e5e2.md) | InitialAccess, PrivilegeEscalation | - |
| [VMware ESXi - VM high resource load](../content/3467bb11-7cbf-49f7-9e71-c3d0da327af5.md) | Impact | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [VMWareESXi](../content/vmwareesxi-vmwareesxi.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [VMwareESXi](../content/b4f52ff7-daaa-455c-91d9-00ab4976242a.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                     |
|-------------|--------------------------------|------------------------------------------------------------------------|
| 3.0.6       | 04-01-2026                     | Remove broken VMware ESXi link                                         |
| 3.0.5       | 03-11-2025                     | Added new **Analytic Rule** (VMware ESXi - Root change password) and (VMware ESXi - Multiple Failed SSH Login)      |
| 3.0.4       | 09-10-2025                     | Added new **Analytic Rule** (VMware ESXi - SSH Enable on ESXi Host)    |
| 3.0.3       | 02-12-2024                     | Removed Deprecated **Data connectors**                                 |
| 3.0.2       | 01-08-2024                     | Update **Parser** as part of Syslog migration                          |
|             |                                | Deprecating data connectors                                            |
| 3.0.1       | 30-04-2024                     | Repackaged for parser name issue                                       |
| 3.0.0       | 15-04-2024                     | Updated **Parser** VMwareESXi.yaml to automatic update applicable logs |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
