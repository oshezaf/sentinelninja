# MailRisk

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/securepractice_logo.svg" alt="MailRisk Logo" width="75" height="75">

The [MailRisk by Secure Practice](https://securepractice.co/) solution for Microsoft Sentinel enables you to ingest email reported with the MailRisk plugin into Microsoft Sentinel Log Analytics using the Codeless Connector Framework (CCF) with REST API Polling.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Secure Practice |
| **Support Tier** | Partner |
| **Support Link** | [https://securepractice.co/support](https://securepractice.co/support) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Secure Practice - support@securepractice.co |
| **First Published** | 2023-03-16 |
| **Last Updated** | 2025-10-27 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MailRisk](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MailRisk) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [MailRisk by Secure Practice](../connectors/securepracticemailriskconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`MailRiskEventEmails_CL`](../tables/mailriskeventemails-cl.md) | [MailRisk by Secure Practice](../connectors/securepracticemailriskconnector.md) | - |

## Release Notes

| **Version**  | **Date Modified (DD-MM-YYYY)**  | **Change History**                          	|
|--------------|---------------------------------|----------------------------------------------|
| 3.0.0        | 29-10-2025                      | Migrate connector to CCF                   	|

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

