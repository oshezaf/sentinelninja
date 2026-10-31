# Cisco Meraki Events via REST API

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/CiscoMeraki/Connector/MerakiConnector/logo.jpg" alt="Cisco Meraki Events via REST API Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | Security - Network |
| **Version** | 3.2.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2023-07-12 |
| **Last Updated** | 2026-09-22 |
| **Solution Folder** | [Cisco Meraki Events via REST API](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20Meraki%20Events%20via%20REST%20API) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-ciscomerakinativepoller) · Popularity: 🟢 High (83%) |

The Cisco Meraki Events via REST API solution for Microsoft Sentinel enables you to easily ingest the following events from [Cisco Meraki MX security appliance](https://meraki.cisco.com/products/security-sd-wan/) to Microsoft Sentinel using Cisco Meraki API:
 1. [Organization Appliance Security Events](https://developer.cisco.com/meraki/api-latest/#!get-organization-appliance-security-events) 
 2. [Organization Api Requests](https://developer.cisco.com/meraki/api-latest/#!get-organization-api-requests) 
 3. [Organization Configuration Changes](https://developer.cisco.com/meraki/api-latest/#!get-organization-configuration-changes) 

In addition to the ASIM-normalized events above, the solution also ingests the following Cisco Meraki Dashboard inventory and wireless security data into custom tables:
 4. [Organizations](https://developer.cisco.com/meraki/api-latest/#!get-organizations) 
 5. [Organization Networks](https://developer.cisco.com/meraki/api-latest/#!get-organization-networks) 
 6. [Network Clients](https://developer.cisco.com/meraki/api-latest/#!get-network-clients) 
 7. [Wireless Air Marshal Events](https://developer.cisco.com/meraki/api-latest/#!get-network-wireless-air-marshal) 

This enables you to view and analyze this data for security monitoring and using them to create custom alerts, and incorporate it to improve your investigation process, giving you more insight into your platform security.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:
 1. [Azure Monitor Logs: DCR-based Custom Logs](https://docs.microsoft.com/azure/azure-monitor/logs/custom-logs-overview)
 2. [Codeless Connector Platform (CCP)](https://docs.microsoft.com/azure/sentinel/create-codeless-connector?tabs=deploy-via-arm-template%2Cconnect-via-the-azure-portal)

**Supported ASIM schema:** 
 1. Network Session 
 2. Web Session  
 3. Audit Event

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cisco Meraki Events (using REST API) (via Codeless Connector Framework)](../connectors/ciscomerakiconnector.md)

## Tables Used

This solution uses **8 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ASimAuditEventLogs`](../tables/asimauditeventlogs.md) | [Cisco Meraki Events (using REST API) (via Codeless Connector Framework)](../connectors/ciscomerakiconnector.md) | - |
| [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md) | [Cisco Meraki Events (using REST API) (via Codeless Connector Framework)](../connectors/ciscomerakiconnector.md) | - |
| [`ASimWebSessionLogs`](../tables/asimwebsessionlogs.md) | [Cisco Meraki Events (using REST API) (via Codeless Connector Framework)](../connectors/ciscomerakiconnector.md) | - |
| [`CiscoMerakiAirMarshalEvents_CL`](../tables/ciscomerakiairmarshalevents-cl.md) | [Cisco Meraki Events (using REST API) (via Codeless Connector Framework)](../connectors/ciscomerakiconnector.md) | - |
| [`CiscoMerakiFileScannedEvents_CL`](../tables/ciscomerakifilescannedevents-cl.md) | [Cisco Meraki Events (using REST API) (via Codeless Connector Framework)](../connectors/ciscomerakiconnector.md) | - |
| [`CiscoMerakiNetworkClients_CL`](../tables/ciscomerakinetworkclients-cl.md) | [Cisco Meraki Events (using REST API) (via Codeless Connector Framework)](../connectors/ciscomerakiconnector.md) | - |
| [`CiscoMerakiOrganizationNetworks_CL`](../tables/ciscomerakiorganizationnetworks-cl.md) | [Cisco Meraki Events (using REST API) (via Codeless Connector Framework)](../connectors/ciscomerakiconnector.md) | - |
| [`CiscoMerakiOrganizations_CL`](../tables/ciscomerakiorganizations-cl.md) | [Cisco Meraki Events (using REST API) (via Codeless Connector Framework)](../connectors/ciscomerakiconnector.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.2.1       | 15-09-2026                     | Fixed Cisco Meraki connector regressions by correcting the Organizations/Organization Networks health check window, routing security events except File Scanned to ASIM Network Session logs, separating File Scanned events into a dedicated custom table, restoring query-string support for API request URLs, preserving additional configuration-change context, and restoring ASIM Network Session `DvcAction` mapping from the `blocked` field. Fixed DCR creation errors by replacing unsupported `coalesce` expressions and matching File Scanned `EventCount` to the destination string schema. Corrected Network Clients and Air Marshal nested polling to extract the network ID from each parent record without expanding its properties. |
| 3.2.0       | 28-08-2026                     | Promoted the updated Cisco Meraki CCF REST API data connector introduced in version 3.1.0 to General Availability (GA). |
| 3.1.1       | 24-08-2026                     | Standardized all CCF Connector data types to use checkpointed `t0`/`t1` time windowing (UnixTimestamp), aligning the newer Organizations, Organization Networks, Network Clients, and Air Marshal Events data types with the existing ASIM log endpoints to prevent duplicate ingestion. <br/> Updated the polling interval and `t0`/`t1` time window configuration of the **CCF Connector** data types to fix duplicate ingestion.|
| 3.1.0       | 06-07-2026                     | Added four new data types to the **CCP Connector**: Organizations, Organization Networks, Network Clients, and Wireless Air Marshal Events. |
| 3.0.2       | 10-01-2025                     | Transitioned the **CCP Connector** to General Availability (GA).    |
| 3.0.1       | 30-09-2024                     | Cisco Meraki via REST API configuration Changes pagination fix     |
| 3.0.0       | 27-12-2023                     | Initial Solution Release with new addition of **CCP Connector**                                  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

