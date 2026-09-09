# Corelight_v3_dns_red_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (34 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v3_dns_red_CL.json)

| Column Name | Type |
|:------------|:-----|
| AA | string |
| answers | dynamic |
| icann_domain | string |
| icann_host_subdomain | string |
| icann_tld | string |
| id_orig_h | string |
| id_orig_p | int |
| id_resp_h | string |
| id_resp_p | int |
| is_trusted_domain | string |
| num | long |
| path | string |
| proto | string |
| qclass | real |
| qclass_name | string |
| qtype | real |
| qtype_name | string |
| query | string |
| RA | string |
| rcode | long |
| rcode_name | string |
| RD | string |
| rejected | string |
| rtt | real |
| system_name | string |
| TC | string |
| TimeGenerated | datetime |
| trans_id | string |
| ts | datetime |
| TTLs | string |
| Type | string |
| uid | string |
| write_ts | datetime |
| zeek_Z | real |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Corelight](../solutions/corelight.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) |  |

---

## Content Items Using This Table (6)

### Analytic Rules (1)

**In solution [Corelight](../solutions/corelight.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Corelight - C2 DGA Detected Via Repetitive Failures](../content/corelight-corelight-c2-dga-detected-via-repetitive-failures-8eaa2268-74ee-492c-b869-450eff707fef-523acd4f.md) |  |

### Hunting Queries (1)

**In solution [Corelight](../solutions/corelight.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Corelight - Repetitive DNS Failures](../content/corelight-corelight-repetitive-dns-failures-1ea3a384-77a4-4b0d-8e42-74d26b38ab5b-eef9a7ed.md) |  |

### Workbooks (4)

**In solution [Corelight](../solutions/corelight.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Corelight](../content/corelight-corelight-90dad195.md) |  |
| [Corelight_Data_Explorer](../content/corelight-corelight-data-explorer-258d9f06.md) |  |
| [Corelight_Data_Insights](../content/corelight-corelight-data-insights-e22362fc.md) |  |
| [Corelight_Security_Workflow](../content/corelight-corelight-security-workflow-7c756761.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [corelight_dns](../parsers/corelight-dns.md) | [Corelight](../solutions/corelight.md) |  |
| [corelight_dns_red](../parsers/corelight-dns-red.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

