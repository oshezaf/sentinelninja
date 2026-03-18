# Whois_Data_CL

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
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (49 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Whois_Data_CL.json)

| Column Name | Type |
|:------------|:-----|
| _name_s | string |
| about_contact_address_s | string |
| about_contact_city_s | string |
| about_contact_country_s | string |
| about_contact_email_s | string |
| about_contact_person_s | string |
| about_contact_phone_s | string |
| about_contact_role_s | string |
| abuse_contact_id_s | string |
| address_s | string |
| admin_contact_address_s | string |
| admin_contact_city_s | string |
| admin_contact_country_s | string |
| admin_contact_email_s | string |
| admin_contact_id_s | string |
| admin_contact_person_s | string |
| admin_contact_phone_s | string |
| admin_contact_role_s | string |
| asn_d | real |
| bgp_a   _name_s | string |
| bgp_asn_d | real |
| cc_s | string |
| cidr_s | string |
| city_s | string |
| description_s | string |
| ip_s | string |
| mnt_by_email_s | string |
| mnt_lower_email_s | string |
| mnt_router_email_s | string |
| modified_s | string |
| n   _name_s | string |
| net_handle_s | string |
| o   _name_s | string |
| org_address_s | string |
| org_city_s | string |
| org_country_s | string |
| org_email_s | string |
| org_id_s | string |
| org_phone_s | string |
| tech_contact_address_s | string |
| tech_contact_city_s | string |
| tech_contact_country_s | string |
| tech_contact_email_s | string |
| tech_contact_id_s | string |
| tech_contact_person_s | string |
| tech_contact_phone_s | string |
| tech_contact_role_s | string |
| TimeGenerated | datetime |
| Type | string |

## Solutions (1)

This table is used by the following solutions:

- [Team Cymru Scout](../solutions/team-cymru-scout.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CymruScoutWhois](../parsers/cymruscoutwhois.md) | [Team Cymru Scout](../solutions/team-cymru-scout.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

