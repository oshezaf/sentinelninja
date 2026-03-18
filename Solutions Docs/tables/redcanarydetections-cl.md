# RedCanaryDetections_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (23 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/RedCanaryDetections_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| _SubscriptionId | string |
| child_process_iocs_s | string |
| Computer | string |
| cross_process_iocs_s | string |
| detection_details_s | string |
| detection_headline_s | string |
| detection_id_s | string |
| detection_severity_s | string |
| detection_url_s | string |
| file_modification_iocs_s | string |
| host_full_name_s | string |
| host_name_s | string |
| host_os_family_s | string |
| host_os_version_s | string |
| identities_s | string |
| network_connection_iocs_s | string |
| process_iocs_s | string |
| RawData | string |
| registry_modification_iocs_s | string |
| tactics_s | string |
| TimeGenerated | datetime |
| Type | string |

## Solutions (1)

This table is used by the following solutions:

- [Red Canary](../solutions/red-canary.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Red Canary Threat Detection](../connectors/redcanarydataconnector.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [Red Canary](../solutions/red-canary.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Red Canary Threat Detection](../content/red-canary-red-canary-threat-detection-6d263abb-6445-45cc-93e9-c593d3d77b89-44ff5a3e.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

