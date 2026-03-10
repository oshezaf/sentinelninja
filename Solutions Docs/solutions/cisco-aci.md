# Cisco ACI

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cisco-logo-72px.svg" alt="Cisco ACI Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-07-03 |
| **Solution Folder** | [Cisco ACI](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20ACI) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-ciscoaci) |
| **Pre-requisites** | [Syslog](syslog.md) |

The [Cisco Application Centric Infrastructure (ACI)](https://www.cisco.com/c/en/us/solutions/collateral/data-center-virtualization/application-centric-infrastructure/solution-overview-c22-741487.html) solution provides the capability to ingest [Cisco ACI logs](https://www.cisco.com/c/en/us/td/docs/switches/datacenter/aci/apic/sw/all/syslog/guide/b_ACI_System_Messages_Guide/m-aci-system-messages-reference.html) into Microsoft Sentinel.

 This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog  solution will be installed as part of this solution installation.

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Contents

- [Pre-requisites](#pre-requisites)
- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Pre-requisites

This solution depends on **1 other solution(s)**:

| Solution |
|:---------|
| [Syslog](syslog.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Cisco Application Centric Infrastructure](../connectors/ciscoaci.md) ⚠️

Connectors from dependency solutions:

- [Syslog via Legacy Agent](../connectors/syslog.md) *(dependency on [Syslog](syslog.md))*
- [Syslog via AMA](../connectors/syslogama.md) *(dependency on [Syslog](syslog.md))*

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [Syslog via AMA](../connectors/syslogama.md) (dependency), [Syslog via Legacy Agent](../connectors/syslog.md) (dependency), [[Deprecated] Cisco Application Centric Infrastructure](../connectors/ciscoaci.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CiscoACIEvent](../parsers/ciscoacievent.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.1       | 24-12-2024                     | Removed Deprecated **Data connector**       |
| 3.0.0       | 23-07-2024                     | Deprecating data connectors                 |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

