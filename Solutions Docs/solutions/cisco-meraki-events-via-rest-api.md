# Cisco Meraki Events via REST API

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/CiscoMeraki/Connector/MerakiConnector/logo.jpg" alt="Cisco Meraki Events via REST API Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Cisco Meraki Events via REST API solution for Microsoft Sentinel enables you to easily ingest the following events from [Cisco Meraki MX security appliance](https://meraki.cisco.com/products/security-sd-wan/) to Microsoft Sentinel using Cisco Meraki API:
 1. [Organization Appliance Security Events](https://developer.cisco.com/meraki/api-latest/#!get-organization-appliance-security-events) 
 2. [Organization Api Requests](https://developer.cisco.com/meraki/api-latest/#!get-organization-api-requests) 
 3. [Organization Configuration Changes](https://developer.cisco.com/meraki/api-latest/#!get-organization-configuration-changes) 

This enables you to view and analyze this data for security monitoring and using them to create custom alerts, and incorporate it to improve your investigation process, giving you more insight into your platform security.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:
 1. [Azure Monitor Logs: DCR-based Custom Logs](https://docs.microsoft.com/azure/azure-monitor/logs/custom-logs-overview)
 2. [Codeless Connector Platform (CCP)](https://docs.microsoft.com/azure/sentinel/create-codeless-connector?tabs=deploy-via-arm-template%2Cconnect-via-the-azure-portal)

**Supported ASIM schema:** 
 1. Network Session 
 2. Web Session  
 3. Audit Event

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2023-07-12 |
| **Solution Folder** | [Cisco Meraki Events via REST API](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20Meraki%20Events%20via%20REST%20API) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ASimAuditEventLogs`](../tables/asimauditeventlogs.md) | [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md) | - |
| [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md) | [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md) | - |
| [`ASimWebSessionLogs`](../tables/asimwebsessionlogs.md) | [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.2       | 10-01-2025                     | Transitioned the **CCP Connector** to General Availability (GA).    |
| 3.0.1       | 30-09-2024                     | Cisco Meraki via REST API configuration Changes pagination fix     |
| 3.0.0       | 27-12-2023                     | Initial Solution Release with new addition of **CCP Connector**                                  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

