# ConfluenceAuditLogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (11 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianConfluenceAudit/Data%20Connectors/AtlassianConfluenceAuditLogs_CCP/AtlassianConfluenceAudit_DCR.json)

| Column Name | Type |
|:------------|:-----|
| affectedObject | dynamic |
| associatedObjects | dynamic |
| author | dynamic |
| category | string |
| changedValues | dynamic |
| creationDate | long |
| description | string |
| remoteAddress | string |
| summary | string |
| superAdmin | boolean |
| sysAdmin | boolean |

## Solutions (1)

This table is used by the following solutions:

- [AtlassianConfluenceAudit](../solutions/atlassianconfluenceaudit.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [ Atlassian Confluence Audit (via Codeless Connector Framework)](../connectors/confluenceauditccpdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

