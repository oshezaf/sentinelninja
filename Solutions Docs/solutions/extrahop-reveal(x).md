# ExtraHop Reveal(x)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ExtraHopLogo.svg" alt="ExtraHop Reveal(x) Logo" width="75" height="75">

The [ExtraHop Reveal(x)](https://www.extrahop.com/products/security/) Solution for Microsoft Sentinel enables ingestion of Common Event Format (CEF) logs into Microsoft Sentinel. This solution enables you to view dashboards, create custom alerts, and improve investigation. This integration gives you the ability to gain insight into your organization's network and improve your security operation capabilities.

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors are about to be deprecated by **Aug 31, 2024.**

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | ExtraHop |
| **Support Tier** | Partner |
| **Support Link** | [https://www.extrahop.com/support/](https://www.extrahop.com/support/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | ExtraHop |
| **First Published** | 2022-05-19 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ExtraHop%20Reveal%28x%29](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ExtraHop%20Reveal%28x%29) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [[Deprecated] ExtraHop Reveal(x) via Legacy Agent](../connectors/extrahopnetworks.md)
- [[Deprecated] ExtraHop Reveal(x) via AMA](../connectors/extrahopnetworksama.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] ExtraHop Reveal(x) via AMA](../connectors/extrahopnetworksama.md), [[Deprecated] ExtraHop Reveal(x) via Legacy Agent](../connectors/extrahopnetworks.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ExtraHopDetectionSummary](../content/extrahop-reveal-x-extrahopdetectionsummary-e66497f1.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.1       | 11-07-2024                     |    Deprecating data connectors                                     |
| 3.0.0       | 13-09-2023                     |	Addition of new ExtraHop Reveal(x) AMA **Data Connector**       |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
