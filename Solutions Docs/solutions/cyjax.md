# ⚠️ Cyjax

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Cyjax.svg" alt="Cyjax Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cyjax |
| **Support Tier** | Partner |
| **Support Link** | [https://www.cyjax.com/demo](https://www.cyjax.com/demo) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Cyjax - info@cyjax.com |
| **First Published** | 2026-03-24 |
| **Last Updated** | 2026-03-24 |
| **Solution Folder** | [Cyjax](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyjax) |

The [Cyjax](https://www.cyjax.com) solution provides the capability to ingest threat intelligence data into Microsoft Sentinel through the REST API. Refer to [Cyjax documentation](https://www.cyjax.com/demo) for more information.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)

## Contents

- [Data Connectors](#data-connectors)
- [Internal Tables](#internal-tables)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cyjax Threat Intelligence IOC Connector](../connectors/cyjaxiocapi.md)

## Internal Tables

The following **4 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CyjaxAdHocEnrichment_CL`](../tables/cyjaxadhocenrichment-cl.md) 🔶 | - | Playbooks (writes), Workbooks |
| [`CyjaxDataBreaches_CL`](../tables/cyjaxdatabreaches-cl.md) 🔶 | - | Playbooks (writes), Workbooks |
| [`CyjaxDomainMonitor_CL`](../tables/cyjaxdomainmonitor-cl.md) 🔶 | - | Playbooks (writes), Workbooks |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | [Cyjax Threat Intelligence IOC Connector](../connectors/cyjaxiocapi.md) | Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **8 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 5 |
| Parsers | 2 |
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Cyjax](../content/cyjax-cyjax-ba2b870a.md) | *Internal use:*<br>[`CyjaxAdHocEnrichment_CL`](../tables/cyjaxadhocenrichment-cl.md)<br>[`CyjaxDataBreaches_CL`](../tables/cyjaxdatabreaches-cl.md)<br>[`CyjaxDomainMonitor_CL`](../tables/cyjaxdomainmonitor-cl.md)<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Cyjax Ad Hoc Enrichment](../content/cyjax-cyjax-ad-hoc-enrichment-a45ef0b4.md) | This playbook is triggered via HTTP request and is designed to get IOC value from workbook provided ... | *Internal use:*<br>[`CyjaxAdHocEnrichment_CL`](../tables/cyjaxadhocenrichment-cl.md) *(write)* |
| [Cyjax Add Comment To Incident](../content/cyjax-cyjax-add-comment-to-incident-1fec48a1.md) | This playbook is triggered via HTTP request and is designed to be used as a sub-playbook by other Cy... | - |
| [Cyjax Data Breaches](../content/cyjax-cyjax-data-breaches-9a3f7092.md) | This playbook is triggered manually from a Data Breaches Tab from Cyjax Workbook in Microsoft Sentin... | *Internal use:*<br>[`CyjaxDataBreaches_CL`](../tables/cyjaxdatabreaches-cl.md) *(write)* |
| [Cyjax Domain Monitor](../content/cyjax-cyjax-domain-monitor-66e866eb.md) | This playbook is triggered manually from a Domain Monitor Tab from Cyjax Workbook in Microsoft Senti... | *Internal use:*<br>[`CyjaxDomainMonitor_CL`](../tables/cyjaxdomainmonitor-cl.md) *(write)* |
| [Cyjax Incident Enrichment](../content/cyjax-cyjax-incident-enrichment-ce175d04.md) | This playbook is triggered manually or automatically from a incident in Microsoft Sentinel. It itera... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CyjaxCorrelate](../parsers/cyjaxcorrelate.md) | - | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) *(read)* |
| [CyjaxThreatIndicator](../parsers/cyjaxthreatindicator.md) | - | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|---|---|---|
| 3.0.0 | 02-03-2026 | Initial Solution for Cyjax Data Connector, playbooks and Workbook |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

