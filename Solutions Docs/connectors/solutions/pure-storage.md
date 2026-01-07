# Pure Storage

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | purestoragemarketplaceadmin |
| **Support Tier** | Partner |
| **Support Link** | [https://support.purestorage.com](https://support.purestorage.com) |
| **Categories** | domains |
| **First Published** | 2024-02-05 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Pure%20Storage](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Pure%20Storage) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

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
| [External Fabric Module XFM1 is unhealthy](../content/a8130dcc-3617-41c0-a7ac-5f352bcfffaf.md) | High | Execution | [`Syslog`](../tables/syslog.md) |
| [Pure Controller Failed](../content/c317b007-84e7-4449-93f4-4444f6638fd0.md) | High | Execution | [`Syslog`](../tables/syslog.md) |
| [Pure Failed Login](../content/ed32b115-5001-43a7-a2bb-f53026db4d97.md) | High | CredentialAccess | [`Syslog`](../tables/syslog.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Pure Storage FlashBlade File System Snapshot](../content/pure-storage-flashblade-file-system-snapshot-pure-storage.md) | This playbook gets triggered when a Microsoft Sentinel Incident created for suspicious activity and ... | - |
| [Pure Storage Protection Group Snapshot](../content/pure-storage-protection-group-snapshot-pure-storage.md) | This playbook gets triggered when a Microsoft Sentinel Incident created for suspicious activity and ... | - |
| [Pure Storage User Deletion](../content/pure-storage-user-deletion-pure-storage.md) | This playbook gets triggered when a Microsoft Sentinel Incident created for suspicious user activity... | - |
| [Pure Storage Volume Snapshot](../content/pure-storage-volume-snapshot-pure-storage.md) | This playbook gets triggered when a Microsoft Sentinel Incident created for suspicious activity and ... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [PureStorageFlashArrayParser](../content/008b25eb-aeec-4751-9a42-3a0102e9774b.md) | - | - |
| [PureStorageFlashBladeParser](../content/c76dff08-ca13-467d-a143-c33cc226585c.md) | - | - |

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
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
