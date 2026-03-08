# Samsung_Knox_Process_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (34 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Samsung_Knox_Process_CL.json)

| Column Name | Type |
|:------------|:-----|
| Atime | datetime |
| CmdLine | string |
| Ctime | datetime |
| Cwd | string |
| DeviceImei1 | string |
| DeviceImei2 | string |
| DeviceModel | string |
| DeviceSerialNumber | string |
| DeviceWifimac | string |
| Egid | int |
| Euid | int |
| EventGuid | long |
| ExitCode | int |
| Fsgid | int |
| Fsuid | int |
| Gid | int |
| MitreTtp | dynamic |
| Mtime | datetime |
| Name | string |
| OwnerGid | int |
| OwnerUid | int |
| Path | string |
| Pid | int |
| Ppid | int |
| PrimaryImei | string |
| Profile | string |
| Severity | string |
| Sgid | int |
| Suid | int |
| Syscall | int |
| Tid | int |
| TimeGenerated | datetime |
| Uid | int |
| Version | string |

## Solutions (1)

This table is used by the following solutions:

- [Samsung Knox Asset Intelligence](../solutions/samsung-knox-asset-intelligence.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Samsung Knox Asset Intelligence](../connectors/samsungdcdefinition.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [Samsung Knox Asset Intelligence](../solutions/samsung-knox-asset-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Samsung Knox - Application Privilege Escalation or Change Events](../content/samsung-knox-asset-intelligence-samsung-knox-application-privilege-escalation-or-change-events-215e89ca-cdbc-4661-b8b2-7041f6ecc7fb-d43356a9.md) |  |

### Workbooks (1)

**In solution [Samsung Knox Asset Intelligence](../solutions/samsung-knox-asset-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SamsungKnoxAssetIntelligence](../content/samsung-knox-asset-intelligence-samsungknoxassetintelligence-db535420.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

