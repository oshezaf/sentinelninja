# PRODAFTUstaCompromisedCredentials_CL

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

## Schema (22 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/PRODAFTUstaCompromisedCredentials_CL.json)

| Column Name | Type |
|:------------|:-----|
| CompanyId | int |
| CompanyName | string |
| ContentType | string |
| Created | datetime |
| InfectionDate | datetime |
| IsCorporate | bool |
| PasswordLength | int |
| PasswordScore | string |
| Source | string |
| Status | string |
| StatusTimestamp | datetime |
| TicketId | long |
| TimeGenerated | datetime |
| Url | string |
| Username | string |
| VictimComputerName | string |
| VictimCountry | string |
| VictimIp | string |
| VictimMalware | string |
| VictimOs | string |
| VictimUid | string |
| VictimUsername | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [PRODAFT USTA - Account Takeover Prevention](../solutions/prodaft-usta-account-takeover-prevention.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [PRODAFT USTA - Account Takeover Prevention (via Codeless Connector Framework)](../connectors/prodaftustaatpccpdefinition.md) |  |

---

## Content Items Using This Table (4)

### Analytic Rules (2)

**In solution [PRODAFT USTA - Account Takeover Prevention](../solutions/prodaft-usta-account-takeover-prevention.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [PRODAFT USTA - Compromised credential used in successful sign-in](../content/prodaft-usta-account-takeover-prevention-prodaft-usta-compromised-credential-used-in-successful-sign-in-5da571b5-54f6-42c2-8c3e-27edd987ceec-c6c285f0.md) |  |
| [PRODAFT USTA - Corporate credential compromised](../content/prodaft-usta-account-takeover-prevention-prodaft-usta-corporate-credential-compromised-9ad6cf22-ffbb-4422-9933-9bbd0104f818-4df5a4e0.md) |  |

### Hunting Queries (1)

**In solution [PRODAFT USTA - Account Takeover Prevention](../solutions/prodaft-usta-account-takeover-prevention.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [PRODAFT USTA - Infostealer exposure across corporate identities](../content/prodaft-usta-account-takeover-prevention-prodaft-usta-infostealer-exposure-across-corporate-identities-c2acc93e-23c8-4d0c-87d7-eee7064e8fec-9eddac19.md) |  |

### Workbooks (1)

**In solution [PRODAFT USTA - Account Takeover Prevention](../solutions/prodaft-usta-account-takeover-prevention.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [PRODAFTUstaATPOverview](../content/prodaft-usta-account-takeover-prevention-prodaftustaatpoverview-23fe73af.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [PRODAFTUstaCompromisedCredentials](../parsers/prodaftustacompromisedcredentials.md) | [PRODAFT USTA - Account Takeover Prevention](../solutions/prodaft-usta-account-takeover-prevention.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

