# PanoraysCompanyFindingPOC_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (20 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Panorays%5CData%20Connectors%5CPanoraysSelfFindings_ccf/PanoraysSelfFindings_Table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| asset_name | string | The specific digital asset where the finding was detected (e.g., a domain, subdomain, IP address, or URL). |
| category | string | The high-level security domain of the finding (Possible values: Human, Network and IT, Application) |
| cves | dynamic | A list of Common Vulnerabilities and Exposures (CVE) IDs associated with this finding, if applicable (e.g., [CVE-2024-44228]). |
| description | string | A detailed explanation of the vulnerability, including why it is a risk and the potential impact |
| evidence | dynamic | Technical proof collected during the scan. May include HTTP headers, open port nr., or specific configuration settings that triggered the finding. |
| finding_text | string | The headline or short title of the specific finding (e.g., Cloud Private Services Exposed) |
| id | string | The unique identifier for this specific finding within the Panorays platform. |
| is_hidden | bool | Indicates if this finding has been manually suppressed or hidden in the Panorays dashboard (true = hidden) |
| metadata | dynamic | A JSON object containing additional context specific to the finding type (e.g., specific port numbers, certificate details) |
| previously_disputed | bool | Flag indicating if this finding was previously marked as a false positive or disputed by an analyst. |
| segments | dynamic | A list of business units, tags, or asset groups within Panorays that this finding is associated with |
| severity | string | The risk level assigned to this finding. Possible values: Critical, High, Medium, Low, Info. |
| status | string | The current lifecycle state of the finding. Possible values Open, Done, Closed. |
| status_update_ts | string | The timestamp (as a string) reflecting specifically when the status field last changed. |
| sub_category | string | A granular classification of the finding within the parent category (e.g., Exposed Services, Mail Server etc.). |
| test_name | string | The name of the security test that generated this finding |
| test_text | string | The descriptive text of the security test |
| TimeGenerated | datetime | The UTC timestamp when this event was ingested into Microsoft Sentinel. Use this for time-range filtering in KQL |
| update_ts | datetime | The timestamp (UTC) when the record was last modified in the Panorays. |
| updated_by | string | The user or system process that performed the last update to this record. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Panorays](../solutions/panorays.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Panorays](../connectors/panorays-connectordefinition.md) |  |
| [Panorays (Manual)](../connectors/[resourceid-'microsoft.operationalinsights-workspaces-providers-dataconnectordefinitions',-parameters-'workspacename'-,-'microsoft.securityinsights',-variables-'connectordefinitionname'-].md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

