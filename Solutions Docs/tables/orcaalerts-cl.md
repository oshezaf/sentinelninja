# OrcaAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (25 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Orca%20Security%20Alerts%5CData%20Connectors%5COrcaSecurityAlertsCCF/OrcaSecurityAlerts_Table.json)

| Column Name | Type |
|:------------|:-----|
| account_name | string |
| alert_id | string |
| alert_labels | string |
| alert_type | string |
| asset_hostname | string |
| asset_name | string |
| asset_state | string |
| asset_tags_info_list | dynamic |
| asset_type | string |
| asset_unique_id | string |
| cloud_provider_id | string |
| cloud_vendor_id | string |
| cluster_name | string |
| cluster_type | string |
| cve_list | dynamic |
| description | string |
| details | string |
| findings | string |
| orca_score | real |
| recommendation | string |
| risk_level | string |
| source | string |
| status | string |
| TimeGenerated | datetime |
| vm_id | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Orca Security Alerts](../solutions/orca-security-alerts.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Orca Security Alerts](../connectors/orcasecurityalerts.md) |  |
| [Orca Security Alerts (via Microsoft Entra ID)](../connectors/orcasecurityalertsccf.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Orca Security Alerts](../solutions/orca-security-alerts.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [OrcaAlerts](../content/orca-security-alerts-orcaalerts-8a812d22.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

