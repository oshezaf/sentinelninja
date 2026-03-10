# vectra_smtp_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (38 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/vectra_smtp_CL.json)

| Column Name | Type |
|:------------|:-----|
| cc | string |
| date_ | datetime |
| dkim_status | string |
| dmarc_status | string |
| first_received | string |
| from_ | string |
| helo | string |
| id_ip_ver | string |
| id_orig_h | string |
| id_orig_p | int |
| id_resp_h | string |
| id_resp_p | int |
| in_reply_to | string |
| local_orig | bool |
| local_resp | bool |
| mail_from | string |
| msgid | string |
| orig_hostname | string |
| orig_huid | string |
| orig_sluid | string |
| rcpt_to | dynamic |
| reply_to | string |
| resp_hostname | string |
| resp_huid | string |
| resp_sluid | string |
| second_received | string |
| sensor_uid | string |
| spf_helo | string |
| spf_mailfrom | string |
| subject | string |
| TimeGenerated | datetime |
| tls | bool |
| to_ | dynamic |
| ts | datetime |
| uid | string |
| useragent | string |
| version | int |
| x_originating_ip | string |

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
| [vectra_smtp](../parsers/vectra-smtp.md) | [Vectra AI Stream](../solutions/vectra-ai-stream.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

