# RedCanaryDetections_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (18 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Red%20Canary%5CData%20Connectors%5CRedCanary_ccf/RedCanary_table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| child_process_iocs_s | string | Serialized child process indicators associated with the Red Canary detection. |
| cross_process_iocs_s | string | Serialized cross-process indicators associated with the Red Canary detection. |
| detection_details_s | string | Detection details provided by Red Canary. |
| detection_headline_s | string | Headline for the Red Canary detection. |
| detection_id_s | string | Unique Red Canary detection identifier. |
| detection_severity_s | string | Severity assigned to the Red Canary detection. |
| detection_url_s | string | URL for the detection in Red Canary. |
| file_modification_iocs_s | string | Serialized file modification indicators associated with the Red Canary detection. |
| host_full_name_s | string | Fully qualified host name for the affected endpoint. |
| host_name_s | string | Host name for the affected endpoint. |
| host_os_family_s | string | Operating system family for the affected host. |
| host_os_version_s | string | Operating system version for the affected host. |
| identities_s | string | Serialized identities associated with the Red Canary detection. |
| network_connection_iocs_s | string | Serialized network connection indicators associated with the Red Canary detection. |
| process_iocs_s | string | Serialized process indicators associated with the Red Canary detection. |
| registry_modification_iocs_s | string | Serialized registry modification indicators associated with the Red Canary detection. |
| tactics_s | string | MITRE ATT&CK tactics associated with the detection. |
| TimeGenerated | datetime | The timestamp when the detection was ingested into Microsoft Sentinel. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Red Canary](../solutions/red-canary.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Red Canary Threat Detection (via Codeless Connector Framework)](../connectors/redcanary-connectordefinition.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [Red Canary](../solutions/red-canary.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Red Canary Threat Detection](../content/red-canary-red-canary-threat-detection-6d263abb-6445-45cc-93e9-c593d3d77b89-44ff5a3e.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

