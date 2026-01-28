# Integration for Atlassian Beacon

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Integration for Atlassian Beacon Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Atlassian Beacon](https://www.atlassian.com/software/beacon) solution provides the capability to ingest Atlassian Beacon Alerts into Microsoft Sentinel.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

b. [Azure Logic Apps](https://azure.microsoft.com/products/logic-apps/#overview)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | DEFEND Ltd. |
| **Support Tier** | Partner |
| **Support Link** | [https://www.defend.co.nz/](https://www.defend.co.nz/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | DEFEND Ltd. |
| **First Published** | 2023-09-22 |
| **Solution Folder** | [Integration for Atlassian Beacon](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Integration%20for%20Atlassian%20Beacon) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Atlassian Beacon Alerts](../connectors/atlassianbeaconalerts.md)

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`atlassian_beacon_alerts_CL`](../tables/atlassian-beacon-alerts-cl.md) | [Atlassian Beacon Alerts](../connectors/atlassianbeaconalerts.md) | Analytics, Playbooks (writes) |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |
| Playbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Atlassian Beacon Alert](../content/integration-for-atlassian-beacon-atlassian-beacon-alert-83fbf6a2-f227-48f4-8e7b-0b0ecac2381b-93237405.md) | High | - | *Internal use:*<br>[`atlassian_beacon_alerts_CL`](../tables/atlassian-beacon-alerts-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Atlassian Beacon Integration](../content/integration-for-atlassian-beacon-atlassian-beacon-integration-638ff69e.md) | This Logic App recieves a webhook from Atlassian Beacon and ingest the payload into Microsoft Sentin... | *Internal use:*<br>[`atlassian_beacon_alerts_CL`](../tables/atlassian-beacon-alerts-cl.md) *(write)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                       |
|-------------|--------------------------------|--------------------------------------------------------------------------|
| 3.0.3       | 04-03-2024                     | Updated title to comply with Atlassian                                   |
| 3.0.2       | 23-01-2024                     | Replaced Atlassian Beacon Logo with Official Azure Sentinel Logo         |
| 3.0.1       | 04-12-2023                     | Atlassian Beacon Payload update in Integration                           |
| 3.0.0       | 24-10-2023                     | Initial Solution Release                                                 |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

