# DomainToolsThreatIntelDomains_CL

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
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (4 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DomainTools%20CCF%5CData%20Connectors%5CDomainToolsFeedsLogs_ccf/DomainToolsFeedsLogs_Table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| domain | string | Domain |
| domaintype | string | Type of domain data (nod, noh, nad, domaindiscovery) |
| TimeGenerated | datetime | The timestamp (UTC) reflecting the time in which the event was generated. |
| timestamp | string | Timestamp |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [DomainTools CCF](../solutions/domaintools-ccf.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [DomainTools Threat Intelligence Domain Feed](../connectors/domaintoolsccfdefinition.md) |  |

---

## Content Items Using This Table (5)

### Analytic Rules (4)

**In solution [DomainTools CCF](../solutions/domaintools-ccf.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [DomainTools New Domain Discovery Indicators Ingested](../content/domaintools-ccf-domaintools-new-domain-discovery-indicators-ingested-f8c223c1-1a28-4b28-8e9f-5e33b610916b-b02c3e11.md) |  |
| [DomainTools Newly Added Domains Feeds Ingested](../content/domaintools-ccf-domaintools-newly-added-domains-feeds-ingested-f8c223c1-1a28-4b28-8e9f-5e34b610916b-f2a08b02.md) |  |
| [DomainTools Newly Observed Domains Feeds Ingested](../content/domaintools-ccf-domaintools-newly-observed-domains-feeds-ingested-f8c223c1-1a28-4b28-8e9f-5e35b610916b-f546635e.md) |  |
| [DomainTools Newly Observed Hostnames Feeds Ingested](../content/domaintools-ccf-domaintools-newly-observed-hostnames-feeds-ingested-f8c223c1-1a28-4b28-8e9f-5e36b610916b-a022e58d.md) |  |

### Workbooks (1)

**In solution [DomainTools CCF](../solutions/domaintools-ccf.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DomainTools_workbook](../content/domaintools-ccf-domaintools-workbook-f4481e81.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [DomainToolsThreatIntelDomains](../parsers/domaintoolsthreatinteldomains.md) | [DomainTools CCF](../solutions/domaintools-ccf.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

