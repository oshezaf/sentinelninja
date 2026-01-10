# Pure Storage

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/purestorage_logo.svg" alt="Pure Storage Logo" width="75" height="75">

Solution for Microsoft Sentinel to ingest logs from PureStorage arrays

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | purestoragemarketplaceadmin |
| **Support Tier** | Partner |
| **Support Link** | [https://support.purestorage.com](https://support.purestorage.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Pure Storage - support@purestorage.com |
| **First Published** | 2024-02-05 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Pure%20Storage](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Pure%20Storage) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **1 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`Syslog`](../tables/syslog.md) | Analytics |

## Content Items

This solution includes **9 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 4 |
| Analytic Rules | 3 |
| Parsers | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [External Fabric Module XFM1 is unhealthy](../content/pure-storage-external-fabric-module-xfm1-is-unhealthy-a8130dcc-3617-41c0-a7ac-5f352bcfffaf-9171f737.md) | High | Execution | [`Syslog`](../tables/syslog.md) |
| [Pure Controller Failed](../content/pure-storage-pure-controller-failed-c317b007-84e7-4449-93f4-4444f6638fd0-857a505b.md) | High | Execution | [`Syslog`](../tables/syslog.md) |
| [Pure Failed Login](../content/pure-storage-pure-failed-login-ed32b115-5001-43a7-a2bb-f53026db4d97-7948e1d0.md) | High | CredentialAccess | [`Syslog`](../tables/syslog.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Pure Storage FlashBlade File System Snapshot](../content/pure-storage-pure-storage-flashblade-file-system-snapshot-2cf3736e.md) | This playbook gets triggered when a Microsoft Sentinel Incident created for suspicious activity and ... | - |
| [Pure Storage Protection Group Snapshot](../content/pure-storage-pure-storage-protection-group-snapshot-9fcd6aff.md) | This playbook gets triggered when a Microsoft Sentinel Incident created for suspicious activity and ... | - |
| [Pure Storage User Deletion](../content/pure-storage-pure-storage-user-deletion-9d7757a4.md) | This playbook gets triggered when a Microsoft Sentinel Incident created for suspicious user activity... | - |
| [Pure Storage Volume Snapshot](../content/pure-storage-pure-storage-volume-snapshot-5248fe1a.md) | This playbook gets triggered when a Microsoft Sentinel Incident created for suspicious activity and ... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [PureStorageFlashArrayParser](../content/pure-storage-purestorageflasharrayparser-008b25eb-aeec-4751-9a42-3a0102e9774b-1902bf2e.md) | - | - |
| [PureStorageFlashBladeParser](../content/pure-storage-purestorageflashbladeparser-c76dff08-ca13-467d-a143-c33cc226585c-0bf3302c.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**             |
|-------------|--------------------------------|--------------------------------|
| 3.0.3       | 05-11-2024                     | Added new **Analytic Rule** a **Playbook** and a **Parser** |
| 3.0.2       | 09-05-2024                     | Repackaged for **Parser** issue fix on reinstall |
| 3.0.1       | 03-05-2024                     | Repackaged for **Parser** issue fix on reinstall<br/> Added 2 new **Analytic Rules** and 3 new **Playbooks** |
| 3.0.0       | 05-02-2024                     | Initial Solution Release - **Parser** Only   |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

