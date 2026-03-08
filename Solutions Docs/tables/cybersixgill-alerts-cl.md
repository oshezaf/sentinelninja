# CyberSixgill_Alerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (30 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CyberSixgill_Alerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| alert_name | string |
| alert_type_id | string |
| assets | string |
| Category | string |
| Computer | string |
| content | string |
| date | string |
| id | string |
| lang | string |
| langcode | string |
| ManagementGroupName | string |
| MG | string |
| portal_url | string |
| RawData | string |
| read | bool |
| Severity | int |
| SourceSystem | string |
| status_name | string |
| sub_alerts | string |
| sub_alertsize | real |
| TenantId | string |
| threat_actor | string |
| threat_level | string |
| threatource | string |
| threats | string |
| TimeGenerated | datetime |
| title | string |
| Type | string |
| user_id | string |

## Solutions (1)

This table is used by the following solutions:

- [Cybersixgill-Actionable-Alerts](../solutions/cybersixgill-actionable-alerts.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cybersixgill Actionable Alerts](../connectors/cybersixgillactionablealerts.md) |  |

---

## Content Items Using This Table (3)

### Hunting Queries (1)

**In solution [Cybersixgill-Actionable-Alerts](../solutions/cybersixgill-actionable-alerts.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Cybersixgill Actionable alerts](../content/cybersixgill-actionable-alerts-cybersixgill-actionable-alerts-532133dd-a8ed-4062-bf0d-f04dc97bb71a-f87f4c92.md) |  |

### Workbooks (2)

**In solution [Cybersixgill-Actionable-Alerts](../solutions/cybersixgill-actionable-alerts.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ActionableAlertsDashboard](../content/cybersixgill-actionable-alerts-actionablealertsdashboard-9c629610.md) |  |
| [ActionableAlertsList](../content/cybersixgill-actionable-alerts-actionablealertslist-16388c4a.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

