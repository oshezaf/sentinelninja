# CyfirmaCompromisedAccounts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (26 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Compromised%20Accounts/Data%20Connectors/CyfirmaCompromisedAccounts_ccp/CyfirmaCompAcc_DCR.json)

| Column Name | Type |
|:------------|:-----|
| antivirus | string |
| asset_comment | string |
| breach_date | string |
| computer_name | string |
| cookie_sessions | dynamic |
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
| title | string |
| type | string |
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

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CYFIRMA - Compromised Employees Detection Rule](../content/cyfirma-compromised-accounts-cyfirma-compromised-employees-detection-rule-72d3fb86-d1eb-44d6-9352-170c6bb45bb7-01f20155.md) |  |
| [CYFIRMA - Customer Accounts Leaks Detection Rule](../content/cyfirma-compromised-accounts-cyfirma-customer-accounts-leaks-detection-rule-ebd1bf8d-aa18-4e66-9cad-555b71a290f1-ccb739cc.md) |  |
| [CYFIRMA - Public Accounts Leaks Detection Rule](../content/cyfirma-compromised-accounts-cyfirma-public-accounts-leaks-detection-rule-57602938-e95a-4fc3-9352-8d473ed256e1-a6ff5532.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

