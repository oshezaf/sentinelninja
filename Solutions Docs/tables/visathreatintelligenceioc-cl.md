# VisaThreatIntelligenceIOC_CL

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
- [Content Items](#content-items-using-this-table)

## Schema (14 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/VisaThreatIntelligenceIOC_CL.json)

| Column Name | Type |
|:------------|:-----|
| Classification | string |
| CreatedOn | datetime |
| ExpiresOn | datetime |
| IOCType | string |
| IsApt | bool |
| KillChain | string |
| LastIngestedOn | datetime |
| Offense | string |
| SourceConfidence | string |
| SourceSeverity | string |
| ThreatActor | string |
| TimeGenerated | datetime |
| UpdatedOn | datetime |
| Value | string |

## Solutions (1)

This table is used by the following solutions:

- [Visa Threat Intelligence (VTI)](../solutions/visa-threat-intelligence-vti.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Visa Threat Intelligence](../connectors/visathreatintelligenceccp.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (2)

**In solution [Visa Threat Intelligence (VTI)](../solutions/visa-threat-intelligence-vti.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [VTI - High Severity Domain Collision Detection](../content/visa-threat-intelligence-vti-vti-high-severity-domain-collision-detection-7be47078-657a-43cf-9c93-b4705a9f6134-72918c13.md) |  |
| [VTI - High Severity SHA1 Collision Detection](../content/visa-threat-intelligence-vti-vti-high-severity-sha1-collision-detection-dbd9e28f-973d-47f3-a8c3-9e18da846870-1dd78c47.md) |  |

### Workbooks (1)

**In solution [Visa Threat Intelligence (VTI)](../solutions/visa-threat-intelligence-vti.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [VTI_IOC_Feed](../content/visa-threat-intelligence-vti-vti-ioc-feed-33721f01.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

