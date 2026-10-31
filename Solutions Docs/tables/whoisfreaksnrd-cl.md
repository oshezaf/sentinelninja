# WhoisFreaksNRD_CL

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

## Schema (85 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/WhoisFreaks%5CData%20Connectors%5CWhoisFreaks_CCF/WhoisFreaks_WhoisFreaksNRD_table.json)

| Column Name | Type |
|:------------|:-----|
| administrative_address | string |
| administrative_city | string |
| administrative_company | string |
| administrative_country | string |
| administrative_country_code | string |
| administrative_email | string |
| administrative_fax | string |
| administrative_handle | string |
| administrative_id | string |
| administrative_id_type | string |
| administrative_name | string |
| administrative_phone | string |
| administrative_state | string |
| administrative_zip | string |
| billing_address | string |
| billing_city | string |
| billing_company | string |
| billing_country | string |
| billing_country_code | string |
| billing_email | string |
| billing_fax | string |
| billing_handle | string |
| billing_id | string |
| billing_id_type | string |
| billing_name | string |
| billing_phone | string |
| billing_state | string |
| billing_zip | string |
| create_date | string |
| domain_name | string |
| domain_registrar_authoritative_registry_name | string |
| domain_registrar_email_address | string |
| domain_registrar_id | string |
| domain_registrar_name | string |
| domain_registrar_phone | string |
| domain_registrar_url | string |
| domain_registrar_whois | string |
| domain_status_1 | string |
| domain_status_2 | string |
| domain_status_3 | string |
| domain_status_4 | string |
| eligibility_id | string |
| eligibility_name | string |
| eligibility_type | string |
| expiry_date | string |
| name_server_1 | string |
| name_server_2 | string |
| name_server_3 | string |
| name_server_4 | string |
| nrd_type | string |
| num | string |
| query_time | string |
| registrant_address | string |
| registrant_city | string |
| registrant_company | string |
| registrant_country | string |
| registrant_country_code | string |
| registrant_email | string |
| registrant_fax | string |
| registrant_handle | string |
| registrant_id | string |
| registrant_id_type | string |
| registrant_name | string |
| registrant_phone | string |
| registrant_state | string |
| registrant_zip | string |
| reseller_email | string |
| reseller_name | string |
| reseller_phone | string |
| technical_address | string |
| technical_city | string |
| technical_company | string |
| technical_country | string |
| technical_country_code | string |
| technical_email | string |
| technical_fax | string |
| technical_handle | string |
| technical_id | string |
| technical_id_type | string |
| technical_name | string |
| technical_phone | string |
| technical_state | string |
| technical_zip | string |
| TimeGenerated | datetime |
| update_date | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [WhoisFreaks](../solutions/whoisfreaks.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [WhoisFreaks Threat & NRD Feeds (via Codeless Connector Framework)](../connectors/whoisfreaks.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (2)

**In solution [WhoisFreaks](../solutions/whoisfreaks.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [WhoisFreaks - burst of newly registered domains](../content/whoisfreaks-whoisfreaks-burst-of-newly-registered-domains-9d79f28f-5d1d-4ca8-b3d3-4ab5f5513e8d-f1b5d916.md) |  |
| [WhoisFreaks - newly registered domain seen in threat feed](../content/whoisfreaks-whoisfreaks-newly-registered-domain-seen-in-threat-feed-d2deed97-6c0c-4a57-95fd-675d3c6fb949-54db08c2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

