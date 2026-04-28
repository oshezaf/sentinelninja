# QualysKB_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (21 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/QualysKB_CL.json)

| Column Name | Type |
|:------------|:-----|
| Category_s | string |
| Consequence_s | string |
| CVE_ID_s | string |
| CVE_URL_s | string |
| Diagnosis_s | string |
| Discovery_Additional_Info_s | string |
| Discovery_Auth_Type_s | string |
| Discovery_Remote_s | string |
| Last_Service_Modification_DateTime_s | string |
| PCI_Flag_s | string |
| Published_DateTime_s | string |
| QID_s | string |
| Severity_Level_s | string |
| Software_Product_s | string |
| Software_Vendor_s | string |
| Solution_s | string |
| TimeGenerated | datetime |
| Title_s | string |
| Vendor_Reference_ID_s | string |
| Vendor_Reference_URL_s | string |
| Vuln_Type_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Qualys VM Knowledgebase](../solutions/qualys-vm-knowledgebase.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Qualys VM KnowledgeBase](../connectors/qualyskb.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [QualysKB](../parsers/qualyskb.md) | [Qualys VM Knowledgebase](../solutions/qualys-vm-knowledgebase.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

