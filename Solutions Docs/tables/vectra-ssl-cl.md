# vectra_ssl_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (36 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/vectra_ssl_CL.json)

| Column Name | Type |
|:------------|:-----|
| cipher | string |
| client_curve_num | dynamic |
| client_ec_point_format | dynamic |
| client_extension | dynamic |
| client_issuer | string |
| client_subject | string |
| client_version | string |
| client_version_num | int |
| curve | string |
| established | bool |
| id_ip_ver | string |
| id_orig_h | string |
| id_orig_p | int |
| id_resp_h | string |
| id_resp_p | int |
| issuer | string |
| ja3 | string |
| ja3s | string |
| local_orig | bool |
| local_resp | bool |
| next_protocol | string |
| orig_hostname | string |
| orig_huid | string |
| orig_sluid | string |
| resp_hostname | string |
| resp_huid | string |
| resp_sluid | string |
| sensor_uid | string |
| server_extensions | dynamic |
| server_name | string |
| subject | string |
| TimeGenerated | datetime |
| ts | datetime |
| uid | string |
| version | string |
| version_num | int |

## Solutions (1)

This table is used by the following solutions:

- [Vectra AI Stream](../solutions/vectra-ai-stream.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [vectra_ssl](../parsers/vectra-ssl.md) | [Vectra AI Stream](../solutions/vectra-ai-stream.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

