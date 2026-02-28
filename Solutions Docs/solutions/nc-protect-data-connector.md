# NC Protect Data Connector

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/NCProtectLogo.svg" alt="NC Protect Data Connector Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | archTIS |
| **Support Tier** | Partner |
| **Support Link** | [https://www.archtis.com/nc-protect-support/](https://www.archtis.com/nc-protect-support/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | archTIS |
| **First Published** | 2021-10-20 |
| **Solution Folder** | [NC Protect Data Connector](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NC%20Protect%20Data%20Connector) |

The [NC Protect Data Connector (archtis.com)](https://info.archtis.com/get-started-with-nc-protect-sentinel-data-connector) provides the capability to ingest user activity logs and events into Microsoft Sentinel. The connector provides visibility into NC Protect user activity logs and events in Microsoft Sentinel to improve monitoring and investigation capabilities 

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [NC Protect](../connectors/nucleuscyberncprotect.md) �

> � **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`NCProtectUAL_CL`](../tables/ncprotectual-cl.md) � | [NC Protect](../connectors/nucleuscyberncprotect.md) | Workbooks |


> � **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).
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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

