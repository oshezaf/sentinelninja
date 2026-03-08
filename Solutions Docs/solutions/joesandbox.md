# JoeSandbox

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/joesandbox.svg" alt="JoeSandbox Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Stefan Bühlmann |
| **Support Tier** | Partner |
| **Support Link** | [https://www.joesecurity.org/support](https://www.joesecurity.org/support) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Stefan Bühlmann |
| **First Published** | 2025-09-12 |
| **Solution Folder** | [JoeSandbox](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/JoeSandbox) |

 The JoeSandbox Connector for Microsoft Sentinel enhances security operations by providing enriched threat intelligence, enabling faster and more informed responses to security incidents. The integration has two main parts: first, URL detonation and enrichment, which provides detailed insights into suspicious URLs. Second, it automatically generates and feeds threat intelligence for all submissions to JoeSandbox, improving threat detection and incident response in Sentinel. This seamless integration empowers teams to proactively address emerging threats.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [JoeSandboxThreatIntelligence](../connectors/joesandbox.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | [JoeSandboxThreatIntelligence](../connectors/joesandbox.md) | - |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 2 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [JoeSandbox File Analyis](../content/joesandbox-joesandbox-file-analyis-aa5d7e19.md) | Submits a attachment or set of attachment associated with an office 365 email to JoeSandbox for Anal... | - |
| [JoeSandbox URL Analyis](../content/joesandbox-joesandbox-url-analyis-9f551431.md) | Submits a url or set of urls associated with an incident to JoeSandbox for Analyis. | - |

## Additional Documentation

> 📄 *Source: [JoeSandbox/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/JoeSandbox/README.md)*

# JoeSandbox Threat Intelligence Feed and Enrichment Integration - Microsoft Sentinel

**Latest Version:** **1.0.0** - **Release Date:** **15/09/2025**

## Overview


## Requirements
- Microsoft Sentinel.
- JoeSandbox API Key.
- Microsoft Azure
  1. Azure functions with Flex Consumption plan.
     Reference: https://learn.microsoft.com/en-us/azure/azure-functions/flex-consumption-plan
     
	 **Note:** Flex Consumption plans are not available in all regions, please check if the region you are deploying the function is supported, if not we suggest you to deploy the function app with premium plan.
	 Reference: https://learn.microsoft.com/en-us/azure/azure-functions/flex-consumption-how-to?tabs=azure-cli%2Cvs-code-publish&pivots=programming-language-python#view-currently-supported-regions
  3. Azure functions Premium plan.
	 Reference: https://learn.microsoft.com/en-us/azure/azure-functions/functions-premium-plan
  4. Azure Logic App with Consumption plan.
     Reference: https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-pricing#consumption-multitenant
  5. Azure storage with Standard general-purpose v2.
     
## Microsoft Sentinel

### Creating Application for API Access

- Open [https://portal.azure.com/](https://portal.azure.com) and search `Microsoft Entra ID` service.

![01](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/JoeSandbox/Images/01.png)

- Click `Add->App registration`.

![02a](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/JoeSandbox/Images/02a.png)

- Enter the name of application and select supported account types and click on `Register`.

![02](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/JoeSandbox/Images/02.png)

- In the application overview you can see `Application Name`, `Application ID` and `Tenant ID`.
 
![03](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/JoeSandbox/Images/03.png)

- After creating the application, we need to set API permissions for connector. For this purpose,
  - Click `Manage->API permissions` tab
  - Click `Microsoft Graph` button
  - Search `indicator` and click on the `ThreatIndicators.ReadWrite.OwnedBy`, click `Add permissions` button below.
  - Click on `Grant admin consent`

 ![app_per](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/JoeSandbox/Images/app_per.png) 

- We need secrets to access programmatically. For creating secrets
  - Click `Manage->Certificates & secrets` tab
  - Click `Client secrets` tab
  - Click `New client secret` button
  - Enter description and set expiration date for secret

![10](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/JoeSandbox/Images/10.png)

- Use Secret `Value` to configure connector.
  
 ![11](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/JoeSandbox/Images/11.png)

## Provide Permission To App Created Above

- Open [https://portal.azure.com/](https://portal.azure.com) and search `Microsoft Sentinel` service.

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 15-09-2025                     | Initial Solution Release                    |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Solutions Index](../solutions-index.md)

