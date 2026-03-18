# meraki_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (10 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/meraki_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| Computer | string |
| ManagementGroupName | string |
| Message | string |
| MG | string |
| RawData | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |

## Solutions (2)

This table is used by the following solutions:

- [CiscoMeraki](../solutions/ciscomeraki.md)
- [CustomLogsAma](../solutions/customlogsama.md)

## Connectors (4)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) |  |
| [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) |  |
| [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) |  |
| [Custom logs via AMA](../connectors/customlogsviaama.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [CiscoMeraki](../solutions/ciscomeraki.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [CiscoMerakiWorkbook](../content/ciscomeraki-ciscomerakiworkbook-efe4feca.md) |  |

## Parsers Using This Table (4)

### ASIM Parsers (3)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuditEventCiscoMeraki](../asim/asimauditeventciscomeraki.md) | AuditEvent | Cisco Meraki |  |
| [ASimAuthenticationCiscoMeraki](../asim/asimauthenticationciscomeraki.md) | Authentication | Cisco Meraki |  |
| [ASimNetworkSessionCiscoMeraki](../asim/asimnetworksessionciscomeraki.md) | NetworkSession | Cisco Meraki |  |

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CiscoMeraki](../parsers/ciscomeraki.md) | [CiscoMeraki](../solutions/ciscomeraki.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

