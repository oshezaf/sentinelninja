# KeeperSecurityEventNewLogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (9 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Keeper%20Security/Data%20Connectors/KeeperSecurity_ccp/KepperSecurity_DCR.json)

| Column Name | Type |
|:------------|:-----|
| audit_event | string |
| category | string |
| client_version | string |
| data | dynamic |
| enterprise_id | int |
| remote_address | string |
| TimeGenerated | datetime |
| timestamp | datetime |
| username | string |

## Solutions (1)

This table is used by the following solutions:

- [Keeper Security](../solutions/keeper-security.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Keeper Security Push Connector](../connectors/keepersecuritypush2.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (2)

**In solution [Keeper Security](../solutions/keeper-security.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Keeper Security - Password Changed](../content/keeper-security-keeper-security-password-changed-f031fbbc-37d8-4667-b795-d386bf2b5ab2-b3c2c3bc.md) |  |
| [Keeper Security - User MFA Changed](../content/keeper-security-keeper-security-user-mfa-changed-75ffc8a4-86db-4f48-8506-cb4c049be484-da722465.md) |  |

### Workbooks (1)

**In solution [Keeper Security](../solutions/keeper-security.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [KeeperSecurityDashboard](../content/keeper-security-keepersecuritydashboard-f36797d1.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

