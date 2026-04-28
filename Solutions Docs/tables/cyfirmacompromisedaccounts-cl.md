# CyfirmaCompromisedAccounts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (25 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CyfirmaCompromisedAccounts_CL.json)

| Column Name | Type |
|:------------|:-----|
| antivirus | string |
| asset_comment | string |
| breach_date | string |
| Category | string |
| computer_name | string |
| description | string |
| email | string |
| first_seen | datetime |
| impact | string |
| ip | string |
| last_seen | datetime |
| name | string |
| notes | dynamic |
| operating_system | string |
| pass_hash | string |
| password | string |
| phone_number | string |
| recommendations | string |
| safe_flag_comments | string |
| source | string |
| system_info | string |
| TimeGenerated | datetime |
| uid | string |
| url | string |
| user_name | string |

## Solutions (1)

This table is used by the following solutions:

- [Cyfirma Compromised Accounts](../solutions/cyfirma-compromised-accounts.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CYFIRMA Compromised Accounts](../connectors/cyfirmacompromisedaccountsdataconnector.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (3)

**In solution [Cyfirma Compromised Accounts](../solutions/cyfirma-compromised-accounts.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [CYFIRMA - Compromised Employees Detection Rule](../content/cyfirma-compromised-accounts-cyfirma-compromised-employees-detection-rule-72d3fb86-d1eb-44d6-9352-170c6bb45bb7-01f20155.md) |  |
| [CYFIRMA - Customer Accounts Leaks Detection Rule](../content/cyfirma-compromised-accounts-cyfirma-customer-accounts-leaks-detection-rule-ebd1bf8d-aa18-4e66-9cad-555b71a290f1-ccb739cc.md) |  |
| [CYFIRMA - Public Accounts Leaks Detection Rule](../content/cyfirma-compromised-accounts-cyfirma-public-accounts-leaks-detection-rule-57602938-e95a-4fc3-9352-8d473ed256e1-a6ff5532.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

