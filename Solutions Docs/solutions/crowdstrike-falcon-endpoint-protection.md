# CrowdStrike Falcon Endpoint Protection

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection/Data%20Connectors/Logo/crowdstrike.svg" alt="CrowdStrike Falcon Endpoint Protection Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [CrowdStrike Falcon Endpoint Protection](https://www.crowdstrike.com/products/) solution allows you to easily onboard CrowdStrike Falcon Endpoint Protection to Microsoft Sentinel. The data collected can be used to create custom dashboards, alerts, and improve investigation. This gives you more insight into your organization's endpoints and improves your security operation capabilities. 

This solution contains multiple Data Connectors that help ingest Falcon Data Replicator logs, Adversary Intelligence & other more specific data from CrowdStrike. Carefully review the capabilities of each connector and configure/enable the most relevant connector based on specific requirements.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.2.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-06-01 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution provides **4 data connector(s)** (plus 2 discovered⚠️):

- [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiccpdefinition.md)
- [CrowdStrike Falcon Adversary Intelligence ](../connectors/crowdstrikefalconadversaryintelligence.md)
- [[Deprecated] CrowdStrike Falcon Endpoint Protection via Legacy Agent](../connectors/crowdstrikefalconendpointprotection.md) ⚠️
- [[Deprecated] CrowdStrike Falcon Endpoint Protection via AMA](../connectors/crowdstrikefalconendpointprotectionama.md) ⚠️
- [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md)
- [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md)

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **29 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ASimAuditEventLogs`](../tables/asimauditeventlogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) | - |
| [`ASimAuthenticationEventLogs`](../tables/asimauthenticationeventlogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) | - |
| [`ASimAuthenticationEventLogs_CL`](../tables/asimauthenticationeventlogs-cl.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) | - |
| [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) | - |
| [`ASimFileEventLogs`](../tables/asimfileeventlogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) | - |
| [`ASimFileEventLogs_CL`](../tables/asimfileeventlogs-cl.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) | - |
| [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) | - |
| [`ASimProcessEventLogs`](../tables/asimprocesseventlogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) | - |
| [`ASimProcessEventLogs_CL`](../tables/asimprocesseventlogs-cl.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) | - |
| [`ASimRegistryEventLogs`](../tables/asimregistryeventlogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) | - |
| [`ASimRegistryEventLogs_CL`](../tables/asimregistryeventlogs-cl.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) | - |
| [`ASimUserManagementActivityLogs`](../tables/asimusermanagementactivitylogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) | - |
| [`ASimUserManagementLogs_CL`](../tables/asimusermanagementlogs-cl.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) | - |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] CrowdStrike Falcon Endpoint Protection via AMA](../connectors/crowdstrikefalconendpointprotectionama.md), [[Deprecated] CrowdStrike Falcon Endpoint Protection via Legacy Agent](../connectors/crowdstrikefalconendpointprotection.md) | Analytics, Workbooks |
| [`CrowdStrikeAlerts`](../tables/crowdstrikealerts.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiccpdefinition.md) | - |
| [`CrowdStrikeDetections`](../tables/crowdstrikedetections.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiccpdefinition.md) | - |
| [`CrowdStrikeHosts`](../tables/crowdstrikehosts.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiccpdefinition.md) | - |
| [`CrowdStrikeIncidents`](../tables/crowdstrikeincidents.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiccpdefinition.md) | - |
| [`CrowdStrikeVulnerabilities`](../tables/crowdstrikevulnerabilities.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiccpdefinition.md) | - |
| [`CrowdStrike_Additional_Events_CL`](../tables/crowdstrike-additional-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md), [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) | - |
| [`CrowdStrike_Audit_Events_CL`](../tables/crowdstrike-audit-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) | - |
| [`CrowdStrike_Auth_Events_CL`](../tables/crowdstrike-auth-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) | - |
| [`CrowdStrike_DNS_Events_CL`](../tables/crowdstrike-dns-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) | - |
| [`CrowdStrike_File_Events_CL`](../tables/crowdstrike-file-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) | - |
| [`CrowdStrike_Network_Events_CL`](../tables/crowdstrike-network-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) | - |
| [`CrowdStrike_Process_Events_CL`](../tables/crowdstrike-process-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) | - |
| [`CrowdStrike_Registry_Events_CL`](../tables/crowdstrike-registry-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) | - |
| [`CrowdStrike_Secondary_Data_CL`](../tables/crowdstrike-secondary-data-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md), [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) | - |
| [`CrowdStrike_User_Events_CL`](../tables/crowdstrike-user-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) | - |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | [CrowdStrike Falcon Adversary Intelligence ](../connectors/crowdstrikefalconadversaryintelligence.md) | - |

## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 4 |
| Playbooks | 3 |
| Analytic Rules | 2 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Critical Severity Detection](../content/crowdstrike-falcon-endpoint-protection-critical-severity-detection-f7d298b2-726c-42a5-bbac-0d7f9950f527-d91689ae.md) | High | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Critical or High Severity Detections by User](../content/crowdstrike-falcon-endpoint-protection-critical-or-high-severity-detections-by-user-4465ebde-b381-45f7-ad08-7d818070a11c-be3ff818.md) | High | - | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CrowdStrikeFalconEndpointProtection](../content/crowdstrike-falcon-endpoint-protection-crowdstrikefalconendpointprotection-b9a8efc3.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Crowdstrike API authentication](../content/crowdstrike-falcon-endpoint-protection-crowdstrike-api-authentication-f93025fb.md) | This is Crowdstrike base template which is used to generate access token and this is used in actual ... | - |
| [Endpoint enrichment - Crowdstrike](../content/crowdstrike-falcon-endpoint-protection-endpoint-enrichment-crowdstrike-9fdce9cc.md) | When a new Microsoft Sentinel incident is created, this playbook gets triggered and performs below a... | - |
| [Isolate endpoint - Crowdstrike](../content/crowdstrike-falcon-endpoint-protection-isolate-endpoint-crowdstrike-8e772c42.md) | When a new Microsoft Sentinel incident is created, this playbook gets triggered and performs below a... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CrowdStrikeFalconEventStream](../content/crowdstrike-falcon-endpoint-protection-crowdstrikefalconeventstream-d2db8f31-eb69-4784-b165-b19fc163e1dc-dd1401e4.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) *(read)* |
| [CrowdStrikeReplicator](../content/crowdstrike-falcon-endpoint-protection-crowdstrikereplicator-5fbb24dd-7089-43fd-ba32-27e944e8c6aa-04120f36.md) | - | [`CrowdstrikeReplicatorLogs_CL`](../tables/crowdstrikereplicatorlogs-cl.md) *(read)* |
| [CrowdStrikeReplicatorV2](../content/crowdstrike-falcon-endpoint-protection-crowdstrikereplicatorv2-b52d934f-469b-4908-997f-fc097b17442a-0f0f5d92.md) | - | [`ASimAuditEventLogs`](../tables/asimauditeventlogs.md) *(read)*<br>[`ASimAuthenticationEventLogs`](../tables/asimauthenticationeventlogs.md) *(read)*<br>[`ASimAuthenticationEventLogs_CL`](../tables/asimauthenticationeventlogs-cl.md) *(read)*<br>[`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md) *(read)*<br>[`ASimFileEventLogs`](../tables/asimfileeventlogs.md) *(read)*<br>[`ASimFileEventLogs_CL`](../tables/asimfileeventlogs-cl.md) *(read)*<br>[`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md) *(read)*<br>[`ASimProcessEventLogs`](../tables/asimprocesseventlogs.md) *(read)*<br>[`ASimProcessEventLogs_CL`](../tables/asimprocesseventlogs-cl.md) *(read)*<br>[`ASimRegistryEventLogs`](../tables/asimregistryeventlogs.md) *(read)*<br>[`ASimRegistryEventLogs_CL`](../tables/asimregistryeventlogs-cl.md) *(read)*<br>[`ASimUserManagementActivityLogs`](../tables/asimusermanagementactivitylogs.md) *(read)*<br>[`ASimUserManagementLogs_CL`](../tables/asimusermanagementlogs-cl.md) *(read)*<br>[`CrowdStrike_Additional_Events_CL`](../tables/crowdstrike-additional-events-cl.md) *(read)*<br>[`CrowdStrike_Secondary_Data_CL`](../tables/crowdstrike-secondary-data-cl.md) *(read)* |
| [CrowdStrikeReplicator_future](../content/crowdstrike-falcon-endpoint-protection-crowdstrikereplicator-future-5fbb24dd-7089-43fd-ba32-27e944e8c6aa-f62533ef.md) ⚠️ | - | - |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                             |
|-------------|--------------------------------|--------------------------------------------------------------------------------|
| 3.2.0       | 07-01-2026                     | Updated *CrowdStrike Falcon Adversary Data Connector* Change table name to be "ThreatIntelIndicators" instead of "ThreatIntelligenceIndicator" |
| 3.1.9       | 17-12-2025                     | Updated *CrowdStrike API Data Connector* Enhance API configuration instructions with link |
| 3.1.8       | 08-12-2025                     | Updated *CrowdStrike API Data Connector* to fix rate limit exceptions by introducing retry logic. |
| 3.1.7       | 12-11-2025                     | Updated *CrowdStrike API Data Connector* to fix rate limit exceptions |
| 3.1.6       | 23-10-2025                     | Updated *CrowdStrike API Data Connector* to fix deprecated detections API issues |
| 3.1.5       | 22-08-2025                     | Updated *CrowdStrike API Data Connector* to fix duplicate logs issues |
| 3.1.4       | 04-07-2025                     | Added new **CCF Connector** to the Solution *CrowdStrike API Data Connector*.<br/>Removed *Crowdstrike Falcon Data Replicator* - Function App **Data Connector**.<br/>Updated Connectors description. |
| 3.1.3       | 24-06-2025                     | Removed "DEPRECATED" label from the *Crowdstrike Falcon Data Replicator V2* - **Data connector**. <br/> Updated Solution description.                                      |
| 3.1.2       | 03-06-2025                     | Crowdstrike Falcon S3 **CCF connector** moving to GA.                                    |
| 3.1.1       | 08-05-2025                     | Added preview tag to **CCP Connector**.                                    |
| 3.1.0       | 11-03-2025                     | Added new CCP **Data Connector** to the Solution.                                    |
| 3.0.10      | 15-01-2025                     | Resolve **Workbook** data type dependency issue.                                    |
| 3.0.9       | 12-11-2024                     | Removed deprecated **Data Connectors**.                                             |
|             |                                | Updated the python runtime version to 3.11 in **Data Connector** Function App.                                                                               |
| 3.0.8 	  | 10-07-2024 					   | Deprecated **Data Connector**. 										            |
| 3.0.7       | 20-06-2024                     | Shortlinks updated for **Data Connector** CrowdStrike Falcon Indicators of Compromise.                   |
| 3.0.6       | 06-06-2024                     | Renamed **Data Connector** *CrowdStrike Falcon Indicators of Compromise* to *CrowdStrike Falcon Adversary Intelligence*. |
| 3.0.5       | 30-05-2024                     | Added new Function App **Data Connector** CrowdStrike Falcon Indicators of Compromise.                   |
| 3.0.4       | 03-05-2024                     | Fixed **Parser** issue for Parser name and ParentID mismatch.                   |
| 3.0.3       | 10-04-2024                     | Added Azure Deploy button for government portal deployments.                    |
| 3.0.2       | 14-02-2024                     | Addition of new CrowdStrike Falcon Endpoint Protection AMA **Data Connector**.  |
| 3.0.1       | 31-01-2024                     | **Data Connector**[Crowdstrike Falcon Data Replicator V2] globally available.   |
| 3.0.0       | 28-07-2023                     | New **Data Connector** added.                                                   |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

