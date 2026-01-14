# ⚠️ WithSecureElementsViaConnector

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/WithSecure.svg" alt="WithSecureElementsViaConnector Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

WithSecure Elements is a unified cloud-based cyber security platform.
By connecting WithSecure Elements via Connector to Microsoft Sentinel, security events can be received in Common Event Format (CEF) over syslog.
It requires deploying "Elements Connector" either on-prem or in cloud.
The Common Event Format (CEF) provides natively search & correlation, alerting and threat intelligence enrichment for each data log. 

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation. 

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. Legacy connector uses the Log Analytics agent which is about to be deprecated by **Aug 31, 2024,** and thus should only be installed where AMA is not supported. Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | WithSecure |
| **Support Tier** | Partner |
| **Support Link** | [https://www.withsecure.com/en/support](https://www.withsecure.com/en/support) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | WithSecure |
| **First Published** | 2022-11-03 |
| **Last Updated** | 2022-11-03 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/WithSecureElementsViaConnector](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/WithSecureElementsViaConnector) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] WithSecure Elements via Connector](../connectors/withsecureelementsviaconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] WithSecure Elements via Connector](../connectors/withsecureelementsviaconnector.md) | - |

## Release Notes

| **Version**   | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                                                          |
|---------------|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
|  3.0.1        |  01-07-2024                    | Deprecating data connectors |
|  3.0.0        |  31-10-2023                    | Updated legacy F-Secure links related to the connector installation and event forwarding configuration with WithSecure links|

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

