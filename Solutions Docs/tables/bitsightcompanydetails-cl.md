# BitSightCompanyDetails_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | Microsoft *(basis: projected)* |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (43 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BitSight%5CData%20Connectors%5CBitSight_CCF/table_BitSightCompanyDetails.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AvailableUpgradeTypes | dynamic | Array of available upgrade types for this company. |
| BulkEmailSenderStatus | string | Bulk email sender classification (e.g., NONE). |
| CompanyFeatures | dynamic | Array of feature flags enabled for the company. |
| CompanyType | string | The type of entity (e.g., CURATED,PRIVATE). |
| ComplianceClaim | dynamic | Compliance claim object, or null. |
| ConnectorName | string | Connection name identifier for multi-instance tracking. |
| CurrentRating | int | Current overall BitSight security rating. |
| CustomerMonitoringCount | int | Number of customers monitoring this company. |
| CustomId | dynamic | Customer-assigned identifier for the company. |
| Description | string | Description of the company. |
| DisplayUrl | string | URL to the company overview page in BitSight portal. |
| Guid | string | Unique identifier (GUID) for the company in BitSight. |
| HasCompanyTree | bool | Indicates whether the company has a company tree. |
| HasDelegatedSecurityControls | bool | Indicates whether security controls have been delegated. |
| HasPreferredContact | bool | Indicates whether the company has a preferred contact. |
| Homepage | string | URL of the company homepage. |
| Industry | string | Industry sector name. |
| IndustrySlug | string | URL-friendly identifier for the industry. |
| InSpmPortfolio | bool | Indicates whether the company is in the SPM portfolio. |
| Ipv4Count | int | Number of IPv4 addresses attributed to the company. |
| IsBundle | bool | Indicates whether this is a bundle entry. |
| IsCsp | bool | Indicates whether the company is a cloud service provider. |
| IsMycompMysubsBundle | bool | Indicates whether this is a my-company/my-subsidiaries bundle. |
| IsPrimary | bool | Indicates whether this is the primary company record. |
| Name | string | Name of the company. |
| PeopleCount | int | Number of people associated with the company. |
| Permissions | dynamic | Object of permission flags for this company (can_annotate, can_view_forensics, etc.). |
| PrimaryCompany | dynamic | Primary company object (guid, name), or null. |
| PrimaryDomain | string | Primary internet domain of the company. |
| RatingIndustryMedian | string | Comparison of company rating to industry median (e.g., above, below). |
| Ratings | dynamic | Array of historical rating snapshots, each with rating_date, rating, range, and rating_color. |
| RelatedCompanies | dynamic | Array of related company references. |
| SearchCount | int | Number of searches for the company. |
| SecurityGrade | string | Security grade, if available. |
| ServiceProvider | bool | Indicates whether this company is a service provider. |
| Shortname | string | Short name of the company. |
| Sparkline | string | URL to the company rating sparkline image. |
| SubIndustry | string | Sub-industry name. |
| SubIndustrySlug | string | URL-friendly identifier for the sub-industry. |
| SubscriptionEndDate | string | Date the subscription ends (YYYY-MM-DD), or null. |
| SubscriptionType | string | Type of BitSight subscription (e.g., Continuous Monitoring). |
| SubscriptionTypeKey | string | Machine-readable subscription type key. |
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
| [BitSight Security Statistics (via Codeless Connector Framework)](../connectors/bitsightstatisticsconnector.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (2)

**In solution [BitSight](../solutions/bitsight.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [BitSight - drop in company ratings](../content/bitsight-bitsight-drop-in-company-ratings-d8844f11-3a36-4b97-9062-1e6d57c00e37-6dbc0005.md) |  |
| [BitSight - drop in the headline rating](../content/bitsight-bitsight-drop-in-the-headline-rating-b11fdc35-6368-4cc0-8128-52cd2e2cdda0-d880d206.md) |  |

### Workbooks (1)

**In solution [BitSight](../solutions/bitsight.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [BitSightWorkbook](../content/bitsight-bitsightworkbook-85beb528.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [BitSightCompanyDetails](../parsers/bitsightcompanydetails.md) | [BitSight](../solutions/bitsight.md) |  |
| [BitSightGraphData](../parsers/bitsightgraphdata.md) | [BitSight](../solutions/bitsight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

