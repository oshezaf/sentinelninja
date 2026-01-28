# Auth0

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Auth0.svg" alt="Auth0 Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Auth0 Access Management](https://auth0.com/access-management) solution for Microsoft Sentinel provides the capability to ingest [Auth0 log events](https://auth0.com/docs/api/management/v2/#!/Logs/get_logs) into your Microsoft Sentinel workspace.
  
  **Underlying Microsoft Technologies used:** 

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

  a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

 b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)



## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.1.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-08-18 |
| **Solution Folder** | [Auth0](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Auth0) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Auth0 Access Management](../connectors/auth0.md)
- [Auth0 Logs](../connectors/auth0connectorccpdefinition.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Auth0AM_CL`](../tables/auth0am-cl.md) | [Auth0 Access Management](../connectors/auth0.md) | - |
| [`Auth0Logs_CL`](../tables/auth0logs-cl.md) | [Auth0 Logs](../connectors/auth0connectorccpdefinition.md) | - |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 2 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Auth0](../content/auth0-auth0-4563059e-9b11-4978-86e7-0bb6e22e23bb-96f2be7e.md) | - | [`Auth0AM_CL`](../tables/auth0am-cl.md) *(read)*<br>[`Auth0_CL`](../tables/auth0-cl.md) *(read)* |
| [Auth0AM](../content/auth0-auth0am-a6453489-5e6c-4976-bfc7-f9d234fde3ca-b3c9858a.md) | - | [`Auth0AM_CL`](../tables/auth0am-cl.md) *(read)*<br>[`Auth0Logs_CL`](../tables/auth0logs-cl.md) *(read)* |

## Additional Documentation

> 📄 *Source: [Auth0/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Auth0/README.md)*

# Steps to Configure Auth0 app
The following are steps to be followed in Auth0 App.

1. Please go to applications and select application from auth0 side, Please find below screen shot for reference :-

![](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Auth0/Images/Applications.png%3Fraw%3Dtrue)

2. Click on settings of the App and note down the credentials
<br>***a. Copy the domain
    b. Get the client id value
    c. Get the client secret***<br>

3. Under Application properties --> Select Application type as Machine to Machine. Please find below screen shot for reference :-

![](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Auth0/Images/ApplicationProperties.png%3Fraw%3Dtrue)

4. Under credentials tab --> Select client secret (Post). Please find below screen shot for reference :-

![](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Auth0/Images/Credentials.png%3Fraw%3Dtrue)

5. Under API tab, please make sure Authorized to scopes, Please find below screen shot for reference :-

![](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Auth0/Images/API.png%3Fraw%3Dtrue)

6. Please make sure the domain value under settings --> Environment Variables, please refer below screen shot for reference and other values are entered from the above step copied values and Domain should be  starts with https://,then click on Apply  and restart function app

![](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Auth0/Images/functionappvalues.png%3Fraw%3Dtrue)

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                     |
|-------------|--------------------------------|--------------------------------------------------------|
| 3.1.2       | 10-02-2025                     | Advancing CCP **Data Connector** from Public preview to Global Availability.           |
| 3.1.1       | 22-01-2025                     | Added Preview tag to CCP **Data Connector**                                            |
| 3.1.0       | 13-12-2024                     | Added new CCP **Data Connector** to the Solution                                       |
| 3.0.0       | 24-08-2024                     | Updated the **Data Connector** Function app python runtime version to 3.11             |
|             | 11-12-2023                     | Added new **Parser** (Auth0AM)                                                         |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

