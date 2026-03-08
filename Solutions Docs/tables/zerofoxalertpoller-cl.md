# ZeroFoxAlertPoller_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (28 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZeroFox/Data%20Connectors/Alerts/ZeroFoxAlerts_DCR.json)

| Column Name | Type |
|:------------|:-----|
| alert_type | string |
| asset | dynamic |
| asset_term | string |
| assignee | string |
| business_network | string |
| content_created_at | datetime |
| darkweb_term | string |
| entered_by | string |
| entity | dynamic |
| escalated | boolean |
| id | int |
| last_modified | datetime |
| logs | string |
| metadata | string |
| network | string |
| notes | string |
| offending_content_url | string |
| perpetrator | dynamic |
| protected_locations | string |
| protected_social_object | string |
| reviewed | boolean |
| reviews | string |
| rule_group_id | int |
| rule_id | int |
| rule_name | string |
| severity | int |
| status | string |
| tags | string |

## Solutions (1)

This table is used by the following solutions:

- [ZeroFox](../solutions/zerofox.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [ZeroFox Enterprise - Alerts (Polling CCF)](../connectors/zerofoxalertsdefinition.md) |  |

---

## Content Items Using This Table (4)

### Analytic Rules (4)

**In solution [ZeroFox](../solutions/zerofox.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ZeroFox Alerts - High Severity Alerts](../content/zerofox-zerofox-alerts-high-severity-alerts-deb45e6d-892f-40bf-9118-e2a6f26b788d-c9abb77d.md) |  |
| [ZeroFox Alerts - Informational Severity Alerts](../content/zerofox-zerofox-alerts-informational-severity-alerts-6f7a7413-b72f-4361-84ee-897baeb9c6d4-18c9cec2.md) |  |
| [ZeroFox Alerts - Low Severity Alerts](../content/zerofox-zerofox-alerts-low-severity-alerts-e0c7a91a-7aa1-498a-9c20-cd6c721f9345-7087702f.md) |  |
| [ZeroFox Alerts - Medium Severity Alerts](../content/zerofox-zerofox-alerts-medium-severity-alerts-a6496de5-911b-4199-b7db-d34ac9d70df3-2805ff18.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

