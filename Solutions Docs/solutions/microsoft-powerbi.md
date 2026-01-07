# Microsoft PowerBI

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/PowerBILogo.svg" alt="Microsoft PowerBI Logo" width="75" height="75">

The [Microsoft PowerBI](https://docs.microsoft.com/power-bi/fundamentals/power-bi-overview) solution enables you to track user activities in your PowerBI environment. You can filter the audit data by date range, user, dashboard, report, dataset, and activity type.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Office Management API ](https://docs.microsoft.com/office/office-365-management-api/office-365-management-apis-overview)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 2.0.1 |
| **Author** | Microsoft |
| **First Published** | 2022-05-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20PowerBI](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20PowerBI) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Microsoft PowerBI](../connectors/officepowerbi.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`PowerBIActivity`](../tables/powerbiactivity.md) | [Microsoft PowerBI](../connectors/officepowerbi.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [MicrosoftPowerBIActivityWorkbook](../content/microsoft-powerbi-microsoftpowerbiactivityworkbook-657a784e.md) | [`PowerBIActivity`](../tables/powerbiactivity.md) |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
