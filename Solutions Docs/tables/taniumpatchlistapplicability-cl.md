# TaniumPatchListApplicability_CL

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

## Schema (22 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tanium%5CData%20Connectors/Table_PatchListApplicability.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Bulletins_s | string |  |
| Classification_s | string |  |
| Computer_ID_s | string |  |
| Computer_Name_s | string |  |
| Count_d | real |  |
| Custom_Field_s | string |  |
| CVE_IDs_s | string |  |
| Install_Status_s | string |  |
| KB_Articles_s | string |  |
| Last_Logged_In_User_s | string |  |
| Operating_System_s | string |  |
| OS_Type_s | string |  |
| Patch_List_Ids_s | string |  |
| Patch_Mean_Time_to_Patch_s | string |  |
| Product_s | string |  |
| Release_Date_s | string |  |
| Severity_s | string |  |
| Size_in_Bytes_s | string |  |
| Superseded_s | string |  |
| TimeGenerated | datetime | The time at which the data was generated |
| Title_s | string |  |
| Uninstallable_s | string |  |

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

