# VMWareESXi

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="VMWareESXi Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The VMware ESXi solution for Microsoft Sentinel enables you to ingest VMWare ESXi logs into Microsoft Sentinel.

 This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog  solution will be installed as part of this solution installation. 

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.6 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-01-12 |
| **Solution Folder** | [VMWareESXi](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMWareESXi) |
| **Dependencies** | [Syslog](syslog.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] VMware ESXi](../connectors/vmwareesxi.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [[Deprecated] VMware ESXi](../connectors/vmwareesxi.md) | Analytics, Hunting, Workbooks |

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
| [VMware ESXi - Dormant VM started](../content/vmwareesxi-vmware-esxi-dormant-vm-started-4cdcd5d8-89df-4076-a917-bc50abb9f2ab-af0d35be.md) | Medium | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [VMware ESXi - Low patch disk space](../content/vmwareesxi-vmware-esxi-low-patch-disk-space-48d992ba-d404-4159-a8c6-46f51d1325c7-d606fa04.md) | Medium | Impact | [`Syslog`](../tables/syslog.md) |
| [VMware ESXi - Low temp directory space](../content/vmwareesxi-vmware-esxi-low-temp-directory-space-2ee727f7-b7c2-4034-b6c9-d245d5a29343-01b9a2e3.md) | Medium | Impact | [`Syslog`](../tables/syslog.md) |
| [VMware ESXi - Multiple Failed Shell Login via SSH](../content/vmwareesxi-vmware-esxi-multiple-failed-shell-login-via-ssh-22d177d5-588c-4f1a-a332-2695f52079bb-73ceb2c6.md) | Medium | CredentialAccess | [`Syslog`](../tables/syslog.md) |
| [VMware ESXi - Multiple VMs stopped](../content/vmwareesxi-vmware-esxi-multiple-vms-stopped-5fe1af14-cd40-48ff-b581-3a12a1f90785-2049eb67.md) | Medium | Impact | [`Syslog`](../tables/syslog.md) |
| [VMware ESXi - Multiple new VMs started](../content/vmwareesxi-vmware-esxi-multiple-new-vms-started-bdea247f-7d17-498c-ac0e-c7e764cbdbbe-e942b8fc.md) | Medium | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [VMware ESXi - New VM started](../content/vmwareesxi-vmware-esxi-new-vm-started-0f4a80de-344f-47c0-bc19-cb120c59b6f0-6ed7a94d.md) | Medium | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [VMware ESXi - Root impersonation](../content/vmwareesxi-vmware-esxi-root-impersonation-23a3cf72-9497-408e-8144-87958a60d31a-78e3904d.md) | Medium | PrivilegeEscalation | [`Syslog`](../tables/syslog.md) |
| [VMware ESXi - Root login](../content/vmwareesxi-vmware-esxi-root-login-deb448a8-6a9d-4f8c-8a95-679a0a2cd62c-ca0d0073.md) | High | InitialAccess, PrivilegeEscalation | [`Syslog`](../tables/syslog.md) |
| [VMware ESXi - Root password changed](../content/vmwareesxi-vmware-esxi-root-password-changed-17b0ea43-5aeb-4dc4-ac3a-be84acb8d5b7-383072d3.md) | High | InitialAccess, Persistence, DefenseEvasion | [`Syslog`](../tables/syslog.md) |
| [VMware ESXi - SSH Enable on ESXi Host](../content/vmwareesxi-vmware-esxi-ssh-enable-on-esxi-host-4f5b5d79-ff4e-4edd-ae3e-9e1187f0b924-c8072416.md) | High | LateralMovement | [`Syslog`](../tables/syslog.md) |
| [VMware ESXi - Shared or stolen root account](../content/vmwareesxi-vmware-esxi-shared-or-stolen-root-account-9c496d6c-42a3-4896-9b6c-00254386928f-dde0a49e.md) | High | InitialAccess, PrivilegeEscalation | [`Syslog`](../tables/syslog.md) |
| [VMware ESXi - Unexpected disk image](../content/vmwareesxi-vmware-esxi-unexpected-disk-image-395c5560-ddc2-45b2-aafe-2e3f64528d3d-a62a6484.md) | Medium | Impact | [`Syslog`](../tables/syslog.md) |
| [VMware ESXi - VM stopped](../content/vmwareesxi-vmware-esxi-vm-stopped-43889f30-7bce-4d8a-93bb-29c9615ca8dd-fefd1315.md) | Medium | Impact | [`Syslog`](../tables/syslog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [VMware ESXi - Download errors](../content/vmwareesxi-vmware-esxi-download-errors-6702f91d-c764-497b-8d67-1cce8a33b895-040e68b2.md) | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [VMware ESXi - List of dormant users.](../content/vmwareesxi-vmware-esxi-list-of-dormant-users.-a0f32708-e6fb-427f-94d2-b09cf64acdf8-1dadc601.md) | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [VMware ESXi - List of powered off VMs](../content/vmwareesxi-vmware-esxi-list-of-powered-off-vms-b8d23b5d-3fb0-4265-9f4f-8878bc87471d-e2ff8382.md) | Impact | [`Syslog`](../tables/syslog.md) |
| [VMware ESXi - List of powered on VMs](../content/vmwareesxi-vmware-esxi-list-of-powered-on-vms-9148aa96-1480-4150-9ed7-bacaae322260-8d5bc41f.md) | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [VMware ESXi - List of unused VMs](../content/vmwareesxi-vmware-esxi-list-of-unused-vms-d69f0373-f424-4f17-a34a-8379974fec6e-3f08bd25.md) | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [VMware ESXi - List of virtual disks (images)](../content/vmwareesxi-vmware-esxi-list-of-virtual-disks-images-9a90ccdd-2091-447f-bea2-e8a5125c8dde-c04cd3c3.md) | Impact | [`Syslog`](../tables/syslog.md) |
| [VMware ESXi - NFC download activities](../content/vmwareesxi-vmware-esxi-nfc-download-activities-b5424011-314b-4ddc-95db-12d2b6f1ce96-eec0ef56.md) | InitialAccess | [`Syslog`](../tables/syslog.md) |
| [VMware ESXi - Root logins](../content/vmwareesxi-vmware-esxi-root-logins-e04a7f8e-1a47-4390-943d-a6cabbf4ec6e-a35f9c9c.md) | InitialAccess, PrivilegeEscalation | [`Syslog`](../tables/syslog.md) |
| [VMware ESXi - Root logins failures](../content/vmwareesxi-vmware-esxi-root-logins-failures-fc6c0440-1bb6-4661-89e9-4cb2c8f1e5e2-48dd363d.md) | InitialAccess, PrivilegeEscalation | [`Syslog`](../tables/syslog.md) |
| [VMware ESXi - VM high resource load](../content/vmwareesxi-vmware-esxi-vm-high-resource-load-3467bb11-7cbf-49f7-9e71-c3d0da327af5-9c6a697a.md) | Impact | [`Syslog`](../tables/syslog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [VMWareESXi](../content/vmwareesxi-vmwareesxi-a632a286.md) | [`Syslog`](../tables/syslog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [VMwareESXi](../content/vmwareesxi-vmwareesxi-b4f52ff7-daaa-455c-91d9-00ab4976242a-59c5383d.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

