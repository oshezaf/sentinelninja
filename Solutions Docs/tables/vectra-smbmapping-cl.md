# vectra_smbmapping_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (23 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/vectra_smbmapping_CL.json)

| Column Name | Type |
|:------------|:-----|
| domain | string |
| hostname | string |
| id_ip_ver | string |
| id_orig_h | string |
| id_orig_p | int |
| id_resp_h | string |
| id_resp_p | int |
| local_orig | bool |
| local_resp | bool |
| orig_hostname | string |
| orig_huid | string |
| orig_sluid | string |
| path | string |
| resp_hostname | string |
| resp_huid | string |
| resp_sluid | string |
| sensor_uid | string |
| service | string |
| TimeGenerated | datetime |
| ts | datetime |
| uid | string |
| username | string |
| version | string |

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
| [vectra_smbmapping](../parsers/vectra-smbmapping.md) | [Vectra AI Stream](../solutions/vectra-ai-stream.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

