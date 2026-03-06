# vectra_x509_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (38 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/vectra_x509_CL.json)

| Column Name | Type |
|:------------|:-----|
| ca | bool |
| cn | string |
| curve | string |
| exponent | string |
| id_ip_ver | string |
| id_orig_h | string |
| id_orig_p | int |
| id_resp_h | string |
| id_resp_p | int |
| issuer | string |
| key_alg | string |
| key_length | string |
| key_type | string |
| local_orig | bool |
| local_resp | bool |
| not_valid_after | datetime |
| not_valid_before | datetime |
| orig_hostname | string |
| orig_huid | string |
| orig_sluid | string |
| other_fields | bool |
| path_len | string |
| resp_hostname | string |
| resp_huid | string |
| resp_sluid | string |
| san_dns | dynamic |
| san_email | dynamic |
| san_ip | dynamic |
| san_uri | dynamic |
| self_issued | bool |
| sensor_uid | string |
| serial | string |
| sig_alg | string |
| subject | string |
| TimeGenerated | datetime |
| ts | datetime |
| uid | string |
| version | int |

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
| [vectra_x509](../parsers/vectra-x509.md) | [Vectra AI Stream](../solutions/vectra-ai-stream.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

