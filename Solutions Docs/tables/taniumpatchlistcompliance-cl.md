# TaniumPatchListCompliance_CL

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
- [Content Items](#content-items-using-this-table)

## Schema (10 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tanium%5CData%20Connectors/Table_PatchListCompliance.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Compliance_Status_s | string |  |
| Computer_ID_s | string |  |
| Computer_Name_s | string |  |
| Count_d | real |  |
| Last_Logged_In_User_s | string |  |
| Operating_System_s | string |  |
| OS_Type_s | string |  |
| Patch_List_Id_s | string |  |
| Patch_List_Name_s | string |  |
| TimeGenerated | datetime | The time at which the data was generated |

## Solutions (1)

This table is used by the following solutions:

- [Tanium](../solutions/tanium.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Tanium's CCF Push Connector](../connectors/taniumconnector.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Tanium](../solutions/tanium.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [TaniumWorkbook](../content/tanium-taniumworkbook-97052723.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

