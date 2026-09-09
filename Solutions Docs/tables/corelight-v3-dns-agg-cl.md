# Corelight_v3_dns_agg_CL

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

## Schema (35 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v3_dns_agg_CL.json)

| Column Name | Type |
|:------------|:-----|
| AA | string |
| answers | dynamic |
| count | long |
| icann_domain | string |
| icann_host_subdomain | string |
| icann_tld | string |
| id_orig_h | string |
| id_orig_p | int |
| id_resp_h | string |
| id_resp_p | int |
| is_trusted_domain | string |
| path | string |
| proto | string |
| qclass | real |
| qclass_name | string |
| qtype | long |
| qtype_name | string |
| query | string |
| RA | string |
| rcode | long |
| rcode_name | string |
| RD | string |
| rejected | dynamic |
| rtt | real |
| system_name | string |
| TC | string |
| TimeGenerated | datetime |
| trans_id | string |
| ts | datetime |
| ts_last | datetime |
| TTLs | string |
| Type | string |
| uids | dynamic |
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

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [Corelight](../solutions/corelight.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Corelight - C2 DGA Detected Via Repetitive Failures](../content/corelight-corelight-c2-dga-detected-via-repetitive-failures-8eaa2268-74ee-492c-b869-450eff707fef-523acd4f.md) |  |

### Workbooks (1)

**In solution [Corelight](../solutions/corelight.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Corelight_Data_Explorer](../content/corelight-corelight-data-explorer-258d9f06.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [corelight_dns_agg](../parsers/corelight-dns-agg.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

