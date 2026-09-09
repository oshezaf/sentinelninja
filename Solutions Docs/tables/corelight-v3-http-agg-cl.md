# Corelight_v3_http_agg_CL

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

## Schema (40 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v3_http_agg_CL.json)

| Column Name | Type |
|:------------|:-----|
| count | long |
| host | string |
| id_orig_h | string |
| id_orig_p | int |
| id_resp_h | string |
| id_resp_p | int |
| info_code | real |
| info_msg | string |
| method | string |
| orig_filenames | dynamic |
| orig_fuids | dynamic |
| orig_mime_types | dynamic |
| origin | string |
| password | dynamic |
| path | string |
| post_body | string |
| proxied | dynamic |
| referrer | string |
| request_body_len | long |
| resp_filenames | dynamic |
| resp_fuids | dynamic |
| resp_mime_types | dynamic |
| response_body_len | long |
| status_code | long |
| status_msg | string |
| system_name | string |
| tags | dynamic |
| TimeGenerated | datetime |
| ts | datetime |
| ts_last | datetime |
| Type | string |
| uids | dynamic |
| uri | string |
| user_agent | dynamic |
| user_agents | string |
| username | dynamic |
| usernames | string |
| version | dynamic |
| versions | string |
| write_ts | datetime |

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

## Content Items Using This Table (7)

### Analytic Rules (6)

**In solution [Corelight](../solutions/corelight.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Corelight - External Proxy Detected](../content/corelight-corelight-external-proxy-detected-05850746-9ae4-412f-838b-844f0903f4a9-ddace3ce.md) |  |
| [Corelight - Multiple Compressed Files Transferred over HTTP](../content/corelight-corelight-multiple-compressed-files-transferred-over-http-4e55e306-3022-43a1-870a-41c4d5116079-08a06d64.md) |  |
| [Corelight - Multiple files sent over HTTP with abnormal requests](../content/corelight-corelight-multiple-files-sent-over-http-with-abnormal-requests-7226d37b-50ee-4e3b-9f80-5b74080d8f2c-a74bb743.md) |  |
| [Corelight - Possible Typo Squatting or Punycode Phishing HTTP Request](../content/corelight-corelight-possible-typo-squatting-or-punycode-phishing-http-request-6b579e98-abc9-4e7a-9efc-2f3408ba16c9-8c086033.md) |  |
| [Corelight - Possible Webshell](../content/corelight-corelight-possible-webshell-f3245aa1-1ca1-471c-a0b7-97ea6b791d5d-53a9b40c.md) |  |
| [Corelight - Possible Webshell (Rare PUT or POST)](../content/corelight-corelight-possible-webshell-rare-put-or-post-db662e49-6e34-4d10-9d3c-5d04b5479658-85d9b33d.md) |  |

### Workbooks (1)

**In solution [Corelight](../solutions/corelight.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Corelight_Data_Explorer](../content/corelight-corelight-data-explorer-258d9f06.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [corelight_http_agg](../parsers/corelight-http-agg.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

