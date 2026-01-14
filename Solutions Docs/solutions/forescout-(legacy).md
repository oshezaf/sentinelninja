# Forescout (Legacy)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Forescout (Legacy) Logo" width="75" height="75">

The [Forescout](https://www.forescout.com/) solution provides the capability to ingest [Forescout events](https://docs.forescout.com/bundle/syslog-3-6-1-h/page/syslog-3-6-1-h.How-to-Work-with-the-Syslog-Plugin.html) into Microsoft Sentinel.

**NOTE:** This is a legacy solution. Microsoft recommends installing the [Forescout eyeExtend](https://azuremarketplace.microsoft.com/en-US/marketplace/apps/forescout.azure-sentinel-solution-forescout) solution instead to get the latest security monitoring content offered by Forescout.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-06-01 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Forescout%20%28Legacy%29](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Forescout%20%28Legacy%29) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Forescout](../connectors/forescout.md)

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ForescoutEvent](../content/forescout-legacy-forescoutevent-ee50cfb3-9d10-4705-931e-77f8c4db8678-b7a885fa.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.0       | 20-06-2024                     | Update in description changes                                      |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

