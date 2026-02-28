# LinuxAudit_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (53 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/LinuxAudit_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| arch_s | string |
| argc_s | string |
| auid_s | string |
| cap_fe_s | string |
| cap_fi_s | string |
| cap_fp_s | string |
| cap_frootid_s | string |
| cap_fver_s | string |
| comm_s | string |
| Computer | string |
| dev_s | string |
| egid_s | string |
| euid_s | string |
| EventReceivedTime_t | datetime |
| exe_s | string |
| exit_d | real |
| fsgid_s | string |
| fsuid_s | string |
| gid_s | string |
| inode_d | real |
| item_d | real |
| items_d | real |
| key_s | string |
| list_s | string |
| ManagementGroupName | string |
| MG | string |
| mode_s | string |
| name_s | string |
| nametype_s | string |
| ogid_s | string |
| ouid_s | string |
| path_s | string |
| pid_d | real |
| ppid_d | real |
| RawData | string |
| rdev_s | string |
| res_s | string |
| seq_d | real |
| ses_s | string |
| sgid_s | string |
| SourceModuleName_s | string |
| SourceModuleType_s | string |
| SourceSystem | string |
| success_s | string |
| suid_s | string |
| syscall_s | string |
| TenantId | string |
| time_t | datetime |
| TimeGenerated | datetime |
| Type | string |
| type_s | string |
| uid_s | string |

## Solutions (1)

This table is used by the following solutions:

- [NXLog LinuxAudit](../solutions/nxlog-linuxaudit.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [NXLog LinuxAudit](../connectors/nxloglinuxaudit.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

