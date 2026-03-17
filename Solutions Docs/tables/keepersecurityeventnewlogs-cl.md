# KeeperSecurityEventNewLogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Schema (9 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Keeper%20Security%5CData%20Connectors%5CKeeperSecurity_ccp/KepperSecurity_table.json)

| Column Name | Type |
|:------------|:-----|
| AuditEvent | string |
| Category | string |
| ClientVersion | string |
| Data | dynamic |
| EnterpriseId | int |
| RemoteAddress | string |
| TimeGenerated | datetime |
| Timestamp | datetime |
| Username | string |

## Solutions (1)

This table is used by the following solutions:

- [Keeper Security](../solutions/keeper-security.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Keeper Security Push Connector](../connectors/keepersecuritypush2.md) |  |

---

## Content Items Using This Table (4)

### Analytic Rules (2)

**In solution [Keeper Security](../solutions/keeper-security.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Keeper Security - Password Changed](../content/keeper-security-keeper-security-password-changed-f031fbbc-37d8-4667-b795-d386bf2b5ab2-b3c2c3bc.md) |  |
| [Keeper Security - User MFA Changed](../content/keeper-security-keeper-security-user-mfa-changed-75ffc8a4-86db-4f48-8506-cb4c049be484-da722465.md) |  |

### Workbooks (2)

**In solution [Keeper Security](../solutions/keeper-security.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [KeeperSecurityDashboard](../content/keeper-security-keepersecuritydashboard-f36797d1.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [KeeperSecurityDashboard](../content/github-only-keepersecuritydashboard-16fd45ec.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

