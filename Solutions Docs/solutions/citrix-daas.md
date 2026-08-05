# Citrix Cloud and DaaS

*Solution: Citrix DaaS*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/citrix_logo.svg" alt="Citrix DaaS Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2026-07-23 |
| **Last Updated** | 2026-07-30 |
| **Solution Folder** | [Citrix DaaS](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Citrix%20DaaS) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-citrixdaas) · Popularity: 🟡 Low (43%) |

The Citrix DaaS solution for Microsoft Sentinel provides the capability to ingest configuration audit logs and session activity from [Citrix DaaS](https://www.citrix.com/products/citrix-daas/) (Citrix Virtual Apps and Desktops service) into Microsoft Sentinel using the [Citrix CVAD Manage REST APIs](https://developer.cloud.com/citrixworkspace/citrix-daas/citrix-virtual-apps-and-desktops-service-apis/docs/overview). It provides audit trails for security investigations, compliance monitoring, and operational troubleshooting. Multiple Citrix tenants can be connected from a single data connector, with each record tagged with its Citrix Customer ID for multi-tenant differentiation.

**Underlying Microsoft Technologies used:**

This Solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

 • [Microsoft Sentinel Codeless Connector Framework](https://aka.ms/Sentinel-CCP_Platform)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Citrix DaaS Audit & Sessions (via Codeless Connector Framework)](../connectors/citrixdaasactionsconnector.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CitrixDaaSConfigOps_CL`](../tables/citrixdaasconfigops-cl.md) | [Citrix DaaS Audit & Sessions (via Codeless Connector Framework)](../connectors/citrixdaasactionsconnector.md) | - |
| [`CitrixDaaSSessions_CL`](../tables/citrixdaassessions-cl.md) | [Citrix DaaS Audit & Sessions (via Codeless Connector Framework)](../connectors/citrixdaasactionsconnector.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                    |
|-------------|--------------------------------|-------------------------------------------------------|
| 3.0.0       | 23-07-2026                     | Initial release of the **Citrix DaaS** solution with the Citrix DaaS Audit & Sessions CCF **Data Connector**. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

