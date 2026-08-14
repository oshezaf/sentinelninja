# ServiceNowCMDB

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ServiceNow.svg" alt="ServiceNowCMDB Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | IT Operations |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2026-08-03 |
| **Last Updated** | 2026-08-05 |
| **Solution Folder** | [ServiceNowCMDB](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ServiceNowCMDB) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-servicenowcmdb) · Popularity: ⚪ Very Low (0%) |

The [ServiceNow CMDB](https://www.servicenow.com/) Solution for Microsoft Sentinel enables you to ingest Configuration Management Database (CMDB) and Asset Management records from ServiceNow into Microsoft Sentinel using the Codeless Connector Platform (CCP). This connector retrieves records from the ServiceNow Table API for Asset Management (alm_asset), Configuration Items (cmdb_ci), Computer CIs (cmdb_ci_computer), Server CIs (cmdb_ci_server), and CI Relationships (cmdb_rel_ci), providing visibility into your IT asset inventory and configuration items.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in Preview state or might result in additional ingestion or operational costs:

a. [Codeless Connector Platform (CCP)](https://docs.microsoft.com/azure/sentinel/create-codeless-connector?tabs=deploy-via-arm-template%2Cconnect-via-the-azure-portal)

## Data Connectors

This solution provides **1 data connector(s)**:

- [ServiceNow CMDB (via Codeless Connector Framework)](../connectors/servicenowcmdbconnector.md)

## Tables Used

This solution uses **5 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ServiceNowAlmAsset_CL`](../tables/servicenowalmasset-cl.md) | [ServiceNow CMDB (via Codeless Connector Framework)](../connectors/servicenowcmdbconnector.md) | - |
| [`ServiceNowCmdbCiComputer_CL`](../tables/servicenowcmdbcicomputer-cl.md) | [ServiceNow CMDB (via Codeless Connector Framework)](../connectors/servicenowcmdbconnector.md) | - |
| [`ServiceNowCmdbCiServer_CL`](../tables/servicenowcmdbciserver-cl.md) | [ServiceNow CMDB (via Codeless Connector Framework)](../connectors/servicenowcmdbconnector.md) | - |
| [`ServiceNowCmdbCi_CL`](../tables/servicenowcmdbci-cl.md) | [ServiceNow CMDB (via Codeless Connector Framework)](../connectors/servicenowcmdbconnector.md) | - |
| [`ServiceNowCmdbRelCi_CL`](../tables/servicenowcmdbrelci-cl.md) | [ServiceNow CMDB (via Codeless Connector Framework)](../connectors/servicenowcmdbconnector.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                           |
|-------------|--------------------------------|--------------------------------------------------------------|
| 3.0.0       | 03-08-2026                     | Created a Data Connector for ServiceNow CMDB CCF Container with Asset Management, Configuration Items, Computer CIs, Server CIs, and CI Relationships data streams. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

