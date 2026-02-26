# NetBackupAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (18 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/NetBackupAlerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| auditAttributes_s | string |
| auditDateTime_d | string |
| auditDateTime_t [UTC] | datetime |
| Category | string |
| Computer | string |
| ManagementGroupName | string |
| Message | string |
| MG | string |
| operation_s | string |
| RawData | string |
| reason_s | string |
| SourceSystem | string |
| TenantId | string |
| tenantId_g | string |
| TimeGenerated [UTC] | datetime |
| Type | string |
| userName_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Veritas NetBackup](../solutions/veritas-netbackup.md)

---

## Content Items Using This Table (2)

### Analytic Rules (2)

**In solution [Veritas NetBackup](../solutions/veritas-netbackup.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Alarming number of anomalies generated in NetBackup](../content/veritas-netbackup-alarming-number-of-anomalies-generated-in-netbackup-2e0efcd4-56d2-41df-9098-d6898a58c62b-8fe77028.md) |  |
| [Multiple failed attempts of NetBackup login](../content/veritas-netbackup-multiple-failed-attempts-of-netbackup-login-d39f0c47-2e85-49b9-a686-388c2eb7062c-027f832e.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

