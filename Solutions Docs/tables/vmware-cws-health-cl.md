# VMware_CWS_Health_CL

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

## Schema (6 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/VMware_CWS_Health_CL.json)

| Column Name | Type |
|:------------|:-----|
| cws_component | string |
| healthtest_observed_unit | string |
| healthtest_observed_value | int |
| healthtest_status | string |
| healthtest_timestamp | datetime |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [VMware SASE](../solutions/vmware-sase.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [VMware SD-WAN and SASE Connector](../connectors/vmwaresdwan.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [VMware SASE](../solutions/vmware-sase.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [VMwareSASESOCDashboard](../content/vmware-sase-vmwaresasesocdashboard-36b12705.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

