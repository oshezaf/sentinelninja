# Citrix ADC

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/citrix-logo-circle-black.svg" alt="Citrix ADC Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Citrix ADC](https://www.citrix.com/products/citrix-adc/) (formerly NetScaler) enables you to ingest Citrix ADC logs into Microsoft Sentinel. Refer the [Citrix ADC log collection guide](https://support.citrix.com/article/CTX227560) for more details.

 This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog solution will be installed as part of this solution installation.

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft-support@microsoft.com |
| **First Published** | 2022-06-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Citrix%20ADC](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Citrix%20ADC) |
| **Dependencies** | [Syslog](syslog.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Citrix ADC (former NetScaler)](../connectors/citrixadc.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 2 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CitrixADCEvent](../content/citrix-adc-citrixadcevent-42894dea-1da9-4e98-b934-3fd97924dc8a-5a0d149b.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [CitrixADCEventOld](../content/citrix-adc-citrixadceventold-1c9a0c69-efc6-4fe6-ac53-baf6fe77b833-1e7dac89.md) ⚠️ | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) *(read)* |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.3       | 09-12-2024                     | Removed Deprecated **Data connector**       |
| 3.0.2       | 30-07-2024                     | Update **Parser** as part of Syslog migration  |
|             |                                | Deprecating data connectors                    |
| 3.0.1       | 18-08-2023                     | Modified the **Parser** with correct watchlist alias|
| 3.0.0       | 14-07-2023                     | Modified the **Data Connector** with improved onboarding instructions \| v 1.0.1
|             |                                | Modified the **Parser** to process the logs coming from Citrix ADC to Syslog table

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

