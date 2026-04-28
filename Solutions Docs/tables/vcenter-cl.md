# vcenter_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (2 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/vcenter_CL.json)

| Column Name | Type |
|:------------|:-----|
| Message | string |
| TimeGenerated | datetime |

## Solutions (2)

This table is used by the following solutions:

- [CustomLogsAma](../solutions/customlogsama.md)
- [VMware vCenter](../solutions/vmware-vcenter.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Custom logs via AMA](../connectors/customlogsviaama.md) |  |
| [[Deprecated] VMware vCenter](../connectors/vmwarevcenter.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (2)

**In solution [VMware vCenter](../solutions/vmware-vcenter.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [VMware vCenter - Root login](../content/vmware-vcenter-vmware-vcenter-root-login-03e8a895-b5ba-49a0-aed3-f9a997d92fbe-e2c012c8.md) |  |
| [vCenter - Root impersonation](../content/vmware-vcenter-vcenter-root-impersonation-f1fcb22c-b459-42f2-a7ee-7276b5f1309c-9fa02551.md) |  |

### Workbooks (1)

**In solution [VMware vCenter](../solutions/vmware-vcenter.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [vCenter](../content/vmware-vcenter-vcenter-167665a0.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [vCenter](../parsers/vcenter.md) | [VMware vCenter](../solutions/vmware-vcenter.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

