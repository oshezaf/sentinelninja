# Auth0Logs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (22 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Auth0%5CData%20Connectors%5CAuth0_CCP/table.json)

| Column Name | Type |
|:------------|:-----|
| ActorUserId | string |
| ActorUsername | string |
| Audience | string |
| ClientId | string |
| ClientName | string |
| Connection | string |
| ConnectionId | string |
| Description | string |
| Details | dynamic |
| event_date | datetime |
| EventType | string |
| HttpUserAgent | string |
| IsMobile | bool |
| LocationInfo | dynamic |
| LogId | string |
| Scope | string |
| SrcHostname | string |
| SrcIpAddr | string |
| Strategy | string |
| StrategyType | string |
| TenantName | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Auth0](../solutions/auth0.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Auth0 Logs](../connectors/auth0connectorccpdefinition.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Auth0Workbook](../content/github-only-auth0workbook-07316f43.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [Auth0AM](../parsers/auth0am.md) | [Auth0](../solutions/auth0.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

