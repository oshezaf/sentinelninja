# X509_Data_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (23 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/X509_Data_CL.json)

| Column Name | Type |
|:------------|:-----|
| altnames_s | string |
| as_info_s | string |
| common_name_s | string |
| count_d | real |
| country_codes_s | string |
| first_seen_s | string |
| ip_s | string |
| issuer_common_name_s | string |
| issuer_s | string |
| last_seen_s | string |
| md5_g | string |
| not_after_s | string |
| not_before_s | string |
| port_d | real |
| self_signed_b | bool |
| serial_s | string |
| sha1_s | string |
| sha256_s | string |
| subject_s | string |
| tags_s | string |
| TimeGenerated | datetime |
| Type | string |
| validity_period_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Team Cymru Scout](../solutions/team-cymru-scout.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CymruScoutX509Data](../parsers/cymruscoutx509data.md) | [Team Cymru Scout](../solutions/team-cymru-scout.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

