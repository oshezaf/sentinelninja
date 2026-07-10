# BitSightFindings_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | BitSight *(basis: projected)* |
| **Event Type** | Events |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (31 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BitSight%5CData%20Connectors%5CBitSight_Events_CCF/table_BitSightFindings.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AffectsRating | bool | Indicates whether this finding contributes to the company's overall rating. |
| AssetCategory | string | Category of the affected asset. |
| Assets | dynamic | Array of assets associated with this finding. |
| AttributedCompanies | dynamic | Array of companies to which this finding has been attributed. |
| Comments | dynamic | Array of analyst comments attached to this finding. |
| CompanyGuid | string | GUID of the company associated with the finding. |
| CompanyName | string | Name of the company associated with the finding. |
| ConnectorName | string | Connection name assigned during connector setup. |
| CurrentlyActive | bool | Indicates if the finding is currently active. |
| Details | dynamic | Detailed finding data object (CVE info, diligence annotations, remediations, etc.). |
| Duration | int | Number of days the finding has been active. |
| EvidenceKey | string | Key identifying the source of evidence for the finding. |
| FirstSeen | string | Date the finding was first observed (YYYY-MM-DD). |
| GracePeriodEndDate | string | Date until which the finding is in a grace period and does not affect the rating (YYYY-MM-DD). |
| GuestNetworkEndDate | string | Date until which the finding is suppressed as a guest network (YYYY-MM-DD). |
| ImpactsRiskVectorDetails | dynamic | Object describing which risk vectors are impacted by this finding. |
| LastSeen | string | Date the finding was most recently observed (YYYY-MM-DD). |
| NoRvGradeImpactEndDate | string | Date until which the finding has no risk vector grade impact (YYYY-MM-DD). |
| RelatedFindings | dynamic | Array of finding identifiers related to this finding. |
| RemainingDecay | int | Number of days remaining in the finding's decay window. |
| Remediated | bool | Indicates whether this finding has been remediated. |
| RemediationHistory | dynamic | Remediation history object (last_requested_refresh_date, last_refresh_status, etc.). |
| RiskCategory | string | The risk category (e.g., Diligence, Compromised Systems, User Behavior). |
| RiskVector | string | The risk vector slug for this finding. |
| RiskVectorLabel | string | Human-readable label for the risk vector. |
| RolledupObservationId | string | Identifier of the rolled-up observation this finding belongs to. |
| Severity | real | Numeric severity score. |
| SeverityCategory | string | Severity category (MINOR, MODERATE, MATERIAL, SEVERE). |
| Tags | dynamic | Array of tags applied to this finding. |
| TemporaryId | string | The temporary identifier for a finding. |
| TimeGenerated | datetime |  |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [BitSight](../solutions/bitsight.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [BitSight Security Events (via Codeless Connector Framework)](../connectors/bitsighteventsconnector.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (2)

**In solution [BitSight](../solutions/bitsight.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [BitSight - compromised systems detected](../content/bitsight-bitsight-compromised-systems-detected-d68b758a-b117-4cb8-8e1d-dcab5a4a2f21-a4f59745.md) |  |
| [BitSight - diligence risk category detected](../content/bitsight-bitsight-diligence-risk-category-detected-161ed3ac-b242-4b13-8c6b-58716e5e9972-ffcba42e.md) |  |

### Workbooks (1)

**In solution [BitSight](../solutions/bitsight.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [BitSightWorkbook](../content/bitsight-bitsightworkbook-85beb528.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [BitSightFindingsData](../parsers/bitsightfindingsdata.md) | [BitSight](../solutions/bitsight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

