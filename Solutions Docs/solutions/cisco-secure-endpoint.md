# Cisco Secure Endpoint

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cisco-logo-72px.svg" alt="Cisco Secure Endpoint Logo" width="75" height="75">

The Cisco Secure Endpoint (formerly AMP for Endpoints) data connector provides the capability to ingest Cisco Secure Endpoint [audit logs](https://developer.cisco.com/docs/secure-endpoint/auditlog/) and [events](https://developer.cisco.com/docs/secure-endpoint/v1-api-reference-event/) into Microsoft Sentinel.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

 • [Microsoft Sentinel Codeless Connector Framework](https://aka.ms/Sentinel-CCP_Platform)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-10-28 |
| **Last Updated** | 2022-02-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20Secure%20Endpoint](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20Secure%20Endpoint) |

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [[DEPRECATED] Cisco Secure Endpoint (AMP)](../connectors/ciscosecureendpoint.md) ⚠️
- [Cisco Secure Endpoint (via Codeless Connector Framework)](../connectors/ciscosecureendpointlogsccpdefinition.md)

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md) | [Cisco Secure Endpoint (via Codeless Connector Framework)](../connectors/ciscosecureendpointlogsccpdefinition.md) | Analytics, Hunting, Workbooks |
| [`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md) | [Cisco Secure Endpoint (via Codeless Connector Framework)](../connectors/ciscosecureendpointlogsccpdefinition.md) | Analytics, Hunting, Workbooks |
| [`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) | [[DEPRECATED] Cisco Secure Endpoint (AMP)](../connectors/ciscosecureendpoint.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **23 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 11 |
| Hunting Queries | 10 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Cisco SE - Connection to known C2 server](../content/cisco-secure-endpoint-cisco-se-connection-to-known-c2-server-0f788a93-dc88-4f80-89ef-bef7cd0fef05-8712dcc0.md) | High | CommandAndControl | [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md)<br>[`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md)<br>[`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |
| [Cisco SE - Dropper activity on host](../content/cisco-secure-endpoint-cisco-se-dropper-activity-on-host-b6df3e11-de70-4779-ac9a-276c454a9025-05cf295f.md) | High | Execution | [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md)<br>[`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md)<br>[`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |
| [Cisco SE - Generic IOC](../content/cisco-secure-endpoint-cisco-se-generic-ioc-bccdbc39-31d3-4e2b-9df2-e4c9eecba825-72d32591.md) | High | Execution | [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md)<br>[`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md)<br>[`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |
| [Cisco SE - Malware execusion on host](../content/cisco-secure-endpoint-cisco-se-malware-execusion-on-host-aea4468e-6322-48b6-bd83-f9d300cce855-2d57c940.md) | High | Execution | [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md)<br>[`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md)<br>[`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |
| [Cisco SE - Malware outbreak](../content/cisco-secure-endpoint-cisco-se-malware-outbreak-225053c7-085b-4fca-a18f-c367f9228bf3-5df4ca01.md) | High | InitialAccess | [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md)<br>[`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md)<br>[`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |
| [Cisco SE - Multiple malware on host](../content/cisco-secure-endpoint-cisco-se-multiple-malware-on-host-b13489d7-feb1-4ad3-9a4c-09f6d64448fd-13e2b837.md) | High | InitialAccess | [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md)<br>[`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md)<br>[`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |
| [Cisco SE - Policy update failure](../content/cisco-secure-endpoint-cisco-se-policy-update-failure-64fece0a-44db-4bab-844d-fd503dc0aaba-8be03ddc.md) | Medium | DefenseEvasion | [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md)<br>[`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md)<br>[`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |
| [Cisco SE - Possible webshell](../content/cisco-secure-endpoint-cisco-se-possible-webshell-d2c97cc9-1ccc-494d-bad4-564700451a2b-13941844.md) | High | CommandAndControl | [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md)<br>[`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md)<br>[`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |
| [Cisco SE - Ransomware Activity](../content/cisco-secure-endpoint-cisco-se-ransomware-activity-c9629114-0f49-4b50-9f1b-345287b2eebf-74a95a48.md) | High | Impact | [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md)<br>[`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md)<br>[`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |
| [Cisco SE - Unexpected binary file](../content/cisco-secure-endpoint-cisco-se-unexpected-binary-file-eabb9c20-7b0b-4a77-81e8-b06944f351c6-e45f58b7.md) | Medium | InitialAccess | [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md)<br>[`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md)<br>[`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |
| [Cisco SE High Events Last Hour](../content/cisco-secure-endpoint-cisco-se-high-events-last-hour-4683ebce-07ad-4089-89e3-39d8fe83c011-74a85d28.md) | High | Execution, InitialAccess | [`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Cisco SE - Infected hosts](../content/cisco-secure-endpoint-cisco-se-infected-hosts-2b2415f3-6bfd-48df-8f9f-a1ccf67449f5-ba154dcb.md) | Execution | [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md)<br>[`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md)<br>[`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |
| [Cisco SE - Infected users](../content/cisco-secure-endpoint-cisco-se-infected-users-f597ff7a-bddc-4cb1-83a8-62b0d7f4740d-d3b9b36b.md) | Execution | [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md)<br>[`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md)<br>[`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |
| [Cisco SE - Malicious files](../content/cisco-secure-endpoint-cisco-se-malicious-files-d074fc1b-e276-48c8-9ef4-d691652a6625-97813a5f.md) | Execution | [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md)<br>[`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md)<br>[`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |
| [Cisco SE - Modified agents on hosts](../content/cisco-secure-endpoint-cisco-se-modified-agents-on-hosts-0c478995-c9c0-44ad-b3e9-428d54851b0c-fd7de8b7.md) | DefenseEvasion | [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md)<br>[`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md)<br>[`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |
| [Cisco SE - Rare scanned files](../content/cisco-secure-endpoint-cisco-se-rare-scanned-files-fd6f8d2b-416d-4ee6-8289-961022205d7e-15e58b08.md) | Execution | [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md)<br>[`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md)<br>[`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |
| [Cisco SE - Scanned files](../content/cisco-secure-endpoint-cisco-se-scanned-files-1eae0963-16be-4d49-9491-6fc54f8254fd-5b24f87d.md) | Execution | [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md)<br>[`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md)<br>[`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |
| [Cisco SE - Suspicious powershel downloads](../content/cisco-secure-endpoint-cisco-se-suspicious-powershel-downloads-31c92a55-375a-4199-8407-d2863476d85d-49c0efd2.md) | Execution | [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md)<br>[`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md)<br>[`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |
| [Cisco SE - Uncommon application behavior](../content/cisco-secure-endpoint-cisco-se-uncommon-application-behavior-dc87c967-61d2-48e9-9fe1-26920944ca57-c6dc4e1b.md) | Execution | [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md)<br>[`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md)<br>[`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |
| [Cisco SE - User Logins](../content/cisco-secure-endpoint-cisco-se-user-logins-987681e4-3f0f-484c-95c1-88044b07759b-adf8f4cf.md) | InitialAccess | [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md)<br>[`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md)<br>[`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |
| [Cisco SE - Vulnerable applications](../content/cisco-secure-endpoint-cisco-se-vulnerable-applications-3d3330e9-d11b-4b68-8861-251253950bd2-b925e376.md) | Execution | [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md)<br>[`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md)<br>[`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Cisco Secure Endpoint Overview](../content/cisco-secure-endpoint-cisco-secure-endpoint-overview-653ce4d3.md) | [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md)<br>[`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md)<br>[`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CiscoSecureEndpoint](../content/cisco-secure-endpoint-ciscosecureendpoint-a959dd1e-deb9-4b48-8615-6df2025e0330-7ff7a4cf.md) | - | [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md) *(read)*<br>[`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md) *(read)*<br>[`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)**| **ChangeHistory**                             |
|-------------|-------------------------------|-----------------------------------------------|
| 3.0.2       | 14-08-2025                    | Cisco Secure Endpoint **CCF Connector** moving to GA. |
| 3.0.1       | 23-06-2025                    | Adding a new **CCF Data Connector** - *Cisco Secure Endpoint*  and updated the **Parser** to handle the newly introduced table.  	   |
| 3.0.0       | 28-08-2024                    | Updated the python runtime version to 3.11.    |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

