# Sophos Endpoint Protection

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/sophos_logo.svg" alt="Sophos Endpoint Protection Logo" width="75" height="75">

The [Sophos Endpoint Protection](https://www.sophos.com/products/endpoint-antivirus.aspx) solution provides the capability to ingest to ingest [Sophos events](https://developer.sophos.com/docs/siem-v1/1/routes/events/get) and [Sophos alerts](https://developer.sophos.com/docs/siem-v1/1/routes/alerts/get) into Microsoft Sentinel. Refer to [Sophos Central documentation](https://docs.sophos.com/central/Customer/help/en-us/central/Customer/concepts/Logs.html) for more information.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)

c. [Codeless Connector Platform (CCP)](https://learn.microsoft.com/en-us/azure/sentinel/create-custom-connector#connect-with-the-codeless-connector-platform)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.5 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-07-07 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Sophos%20Endpoint%20Protection](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Sophos%20Endpoint%20Protection) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Sophos Endpoint Protection](../connectors/sophosep.md)
- [Sophos Endpoint Protection (using REST API)](../connectors/sophosendpointprotectionccpdefinition.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SophosEPAlerts_CL`](../tables/sophosepalerts-cl.md) | [Sophos Endpoint Protection (using REST API)](../connectors/sophosendpointprotectionccpdefinition.md) | - |
| [`SophosEPEvents_CL`](../tables/sophosepevents-cl.md) | [Sophos Endpoint Protection (using REST API)](../connectors/sophosendpointprotectionccpdefinition.md) | - |
| [`SophosEP_CL`](../tables/sophosep-cl.md) | [Sophos Endpoint Protection](../connectors/sophosep.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [SophosEPEvent](../content/sophos-endpoint-protection-sophosepevent-4ed36a9b-accd-491d-b22b-2454c137d90d-30d66816.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.6       | 23-10-2025                     | Updated the solution to be compatible with tool changes for the connection name.            |
| 3.0.5       | 21-08-2024                     | **Data Connector** [Sophos Endpoint Protection (using REST API)] Globally Available|
| 3.0.4       | 01-07-2024                     | Update files for CCP Connector to fix the connectivity|
| 3.0.3       | 25-04-2024                     | Repackaged for parser issue with old names       |
| 3.0.2       | 12-04-2024                     | Repackaged for parser fix in solution package 				|  
| 3.0.1       | 12-03-2024                     | Updated Sophos Endpoint **Function App** and **Parser** <br/>Added new CCP **Data Connector**		|  
| 3.0.0       | 14-08-2023                     | Manual deployment instructions updated for **Data Connector**		|

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

