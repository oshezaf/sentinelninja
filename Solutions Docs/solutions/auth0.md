# Auth0

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-08-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Auth0](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Auth0) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Auth0 Access Management](../connectors/auth0.md)
- [Auth0 Logs](../connectors/auth0connectorccpdefinition.md)

## Tables Reference

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
| [Auth0](../content/auth0-auth0-4563059e-9b11-4978-86e7-0bb6e22e23bb.md) | - | - |
| [Auth0AM](../content/auth0-auth0am-a6453489-5e6c-4976-bfc7-f9d234fde3ca.md) | - | - |

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

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
