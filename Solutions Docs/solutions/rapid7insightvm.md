# Rapid7InsightVM

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Rapid7InsightVM Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Rapid7 Insight platform](https://www.rapid7.com/products/insightvm/) brings together Rapid7’s library of vulnerability research, exploit knowledge, global attacker behavior, Internet-wide scanning data, exposure analytics, and real-time reporting to provide a fully available, scalable, and efficient way to collect your vulnerability data and turn it into answers. InsightVM leverages this platform for live vulnerability and endpoint analytics.
 
 **Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 
 
 a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api) b. [Azure Functions ](https://azure.microsoft.com/services/functions/#overview)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-07-07 |
| **Solution Folder** | [Rapid7InsightVM](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Rapid7InsightVM) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Rapid7 Insight Platform Vulnerability Management Reports](../connectors/insightvmcloudapi.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`NexposeInsightVMCloud_assets_CL`](../tables/nexposeinsightvmcloud-assets-cl.md) | [Rapid7 Insight Platform Vulnerability Management Reports](../connectors/insightvmcloudapi.md) | - |
| [`NexposeInsightVMCloud_vulnerabilities_CL`](../tables/nexposeinsightvmcloud-vulnerabilities-cl.md) | [Rapid7 Insight Platform Vulnerability Management Reports](../connectors/insightvmcloudapi.md) | - |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 3 |
| Parsers | 2 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Rapid7 Insight VM - Enrich incident with asset info](../content/rapid7insightvm-rapid7-insight-vm-enrich-incident-with-asset-info-cb13fd3a.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |
| [Rapid7 Insight VM - Enrich vulnerability info](../content/rapid7insightvm-rapid7-insight-vm-enrich-vulnerability-info-56b018aa.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |
| [Rapid7 Insight VM - Run scan](../content/rapid7insightvm-rapid7-insight-vm-run-scan-939c1740.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [InsightVMAssets](../content/rapid7insightvm-insightvmassets-67ba9c29-ac0c-48c6-9569-ecd554fc4e65-2cea1ca2.md) | - | [`NexposeInsightVMCloud_assets_CL`](../tables/nexposeinsightvmcloud-assets-cl.md) *(read)* |
| [InsightVMVulnerabilities](../content/rapid7insightvm-insightvmvulnerabilities-3cc071bd-caeb-40fd-87b9-cdde61d872cb-bf026349.md) | - | [`NexposeInsightVMCloud_vulnerabilities_CL`](../tables/nexposeinsightvmcloud-vulnerabilities-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                             |
|-------------|--------------------------------|--------------------------------------------------------------------------------|
| 3.0.1       | 03-05-2024                     | Fixed Metadata issue for ParserName and ParentId mismatch  |
| 3.0.0       | 16-01-2024                     | Updated Manual Deployment instructions in **Data Connector** Description  |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

