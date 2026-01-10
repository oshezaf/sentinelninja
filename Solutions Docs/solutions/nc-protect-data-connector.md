# NC Protect Data Connector

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/archTIS/Data%20Connectors/Logo/NCProtectLogo.svg" alt="NC Protect Data Connector Logo" width="75" height="75">

The [NC Protect Data Connector (archtis.com)](https://info.archtis.com/get-started-with-nc-protect-sentinel-data-connector) provides the capability to ingest user activity logs and events into Microsoft Sentinel. The connector provides visibility into NC Protect user activity logs and events in Microsoft Sentinel to improve monitoring and investigation capabilities 

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | archTIS |
| **Support Tier** | Partner |
| **Support Link** | [https://www.archtis.com/nc-protect-support/](https://www.archtis.com/nc-protect-support/) |
| **Categories** | domains |
| **Version** | 2.0.1 |
| **Author** | archTIS |
| **First Published** | 2021-10-20 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/archTIS](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/archTIS) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [NC Protect](../connectors/nucleuscyberncprotect.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`NCProtectUAL_CL`](../tables/ncprotectual-cl.md) | [NC Protect](../connectors/nucleuscyberncprotect.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [NucleusCyber_NCProtect_Workbook](../content/nc-protect-data-connector-nucleuscyber-ncprotect-workbook-14169a8f.md) | [`NCProtectUAL_CL`](../tables/ncprotectual-cl.md) |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

