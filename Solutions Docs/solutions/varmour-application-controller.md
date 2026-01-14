# vArmour Application Controller

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/vArmour%20Application%20Controller/Data%20Connectors/Logo/varmour-logo.svg" alt="vArmour Application Controller Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

This vArmour solution enables streaming of Application Controller Violation Alerts into Microsoft Sentinel, so you can take advantage of search & correlation, alerting, & threat intelligence enrichment for each log.


This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation. 

 **NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors are about to be deprecated by **Aug 31, 2024**.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | vArmour Networks |
| **Support Tier** | Partner |
| **Support Link** | [https://www.varmour.com/contact-us/](https://www.varmour.com/contact-us/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | vArmour |
| **First Published** | 2022-06-01 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/vArmour%20Application%20Controller](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/vArmour%20Application%20Controller) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [[Deprecated] vArmour Application Controller via Legacy Agent](../connectors/varmourac.md)
- [[Deprecated] vArmour Application Controller via AMA](../connectors/varmouracama.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] vArmour Application Controller via AMA](../connectors/varmouracama.md), [[Deprecated] vArmour Application Controller via Legacy Agent](../connectors/varmourac.md) | Analytics, Workbooks |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [vArmour AppController - SMB Realm Traversal](../content/varmour-application-controller-varmour-appcontroller-smb-realm-traversal-a36de6c3-3198-4d37-92ae-e19e36712c2e-f56ac1bb.md) | Medium | Discovery, LateralMovement | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [vArmour_AppContoller_Workbook](../content/varmour-application-controller-varmour-appcontoller-workbook-89c75f45.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                       |
|-------------|--------------------------------|--------------------------------------------------------------------------|
| 3.0.1       | 27-06-2024                     | Deprecating data connectors            |
| 3.0.0       | 04-09-2023                     | Addition of new vArmour Application Controller AMA **Data Connector** | 	                                                            |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

