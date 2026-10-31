# CrowdStrikeVulnerabilitiesV2_CL

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

## Schema (18 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection%5CData%20Connectors%5CCrowdStrikeAPI_ccp/CrowdStrikeAPI_CrowdStrikeVulnerabilitiesV2_table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Aid | string | Agent ID of the system where vulnerability was detected. |
| App | dynamic | Detailed information about the affected application. |
| Apps | dynamic | List of affected applications. |
| Cid | string | Customer ID in the CrowdStrike platform. |
| Confidence | string | Confidence level of the vulnerability detection. |
| CreatedTimestamp | datetime | Timestamp when the vulnerability was first detected. |
| CrowdStrikeDomain | string | CrowdStrike host/domain configured for this connection; hard-coded on every record so hosts can be differentiated. |
| Cve | dynamic | Common Vulnerabilities and Exposures (CVE) information. |
| DataProviders | dynamic | List of data providers that reported this vulnerability. |
| HostInfo | dynamic | Information about the affected host system. |
| Id | string | Unique identifier for the vulnerability record. |
| Remediation | dynamic | Remediation steps or recommendations for the vulnerability. |
| Status | string | Current status of the vulnerability. |
| SuppressionInfo | dynamic | Information about vulnerability suppression if applied. |
| TimeGenerated | datetime |  |
| UpdatedTimestamp | datetime | Timestamp when the vulnerability record was last updated. |
| VulnerabilityId | string | Unique identifier for the specific vulnerability. |
| VulnerabilityMetadataId | string | Unique identifier for the vulnerability metadata. |

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

