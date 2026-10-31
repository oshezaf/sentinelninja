# CrowdStrikeCasesV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Category** | Crowdstrike |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (22 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection%5CData%20Connectors%5CCrowdStrikeAPI_ccp/CrowdStrikeAPI_CrowdStrikeCasesV2_table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AnalysisResults | dynamic | The results of analyzing the case evidence (alerts, cloud_assets, events, files, hosts, users). |
| AssignedTo | dynamic | Details about the user who is currently assigned to the case. |
| Cid | string | The unique customer account ID that the case belongs to. |
| Consistency | dynamic | Background processing details associated with updates made to the case. |
| CreatedBy | dynamic | Details about the user who created the case. |
| CreatedTimestamp | datetime | The date and time the case was created. |
| CrowdStrikeDomain | string | CrowdStrike host/domain configured for this connection; hard-coded on every record so hosts can be differentiated. |
| Description | string | The user-provided description of the case. |
| EndTimestamp | datetime | The date and time the case was ended. |
| Evidence | dynamic | Evidence associated with the case (alerts, events). |
| Id | string | The unique ID of the case. |
| LastUpdatedBy | dynamic | Details about the user who last updated the case. |
| Name | string | The user-defined case name. |
| ReferenceId | string | Reference identifier for the case. |
| Severity | int | The current user-provided severity rating of the case (1-100). |
| SeverityInfo | dynamic | Additional information about the severity of the case. |
| StartTimestamp | datetime | The date and time the case was started. |
| Status | string | The current status of the case (new, closed, in_progress, reopened). |
| Tags | dynamic | A list of user-defined labels applied to the case. |
| TimeGenerated | datetime |  |
| UpdatedTimestamp | datetime | The date and time the case was last updated. |
| Version | int | The current case version. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CrowdStrike](../parsers/crowdstrike.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

