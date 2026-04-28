# UpwindLogsAssets_CL

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

## Schema (22 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/UpwindLogsAssets_CL.json)

| Column Name | Type |
|:------------|:-----|
| category | string |
| cloud_account_id | string |
| cloud_provider | string |
| cloud_resource_id | string |
| detection_risk | dynamic |
| high_privilege_risk | dynamic |
| id | string |
| name | string |
| network_risk | dynamic |
| private_ip_addresses | dynamic |
| protected_by | string |
| public_ip_addresses | dynamic |
| region | string |
| resource_type | string |
| sensitive_data_at_rest | dynamic |
| sensitive_data_in_transit | dynamic |
| status | string |
| sub_category | string |
| tags | dynamic |
| technologies | dynamic |
| TimeGenerated | datetime |
| vulnerability_risk | dynamic |

## Solutions (1)

This table is used by the following solutions:

- [Upwind](../solutions/upwind.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Upwind Logs Loader (Ingestion API)](../connectors/upwindlogsloader.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

