# RubrikSecurityCloud

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Rubrik |
| **Support Tier** | Partner |
| **Support Link** | [https://support.rubrik.com](https://support.rubrik.com) |
| **Categories** | domains |
| **First Published** | 2022-07-19 |
| **Last Updated** | 2025-07-25 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RubrikSecurityCloud](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RubrikSecurityCloud) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Rubrik Security Cloud data connector](../connectors/rubriksecuritycloudazurefunctions.md)

## Tables Reference

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Rubrik_Anomaly_Data_CL`](../tables/rubrik-anomaly-data-cl.md) | [Rubrik Security Cloud data connector](../connectors/rubriksecuritycloudazurefunctions.md) | Analytics |
| [`Rubrik_Events_Data_CL`](../tables/rubrik-events-data-cl.md) | [Rubrik Security Cloud data connector](../connectors/rubriksecuritycloudazurefunctions.md) | Analytics |
| [`Rubrik_Ransomware_Data_CL`](../tables/rubrik-ransomware-data-cl.md) | [Rubrik Security Cloud data connector](../connectors/rubriksecuritycloudazurefunctions.md) | - |
| [`Rubrik_ThreatHunt_Data_CL`](../tables/rubrik-threathunt-data-cl.md) | [Rubrik Security Cloud data connector](../connectors/rubriksecuritycloudazurefunctions.md) | - |

## Content Items

This solution includes **19 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 17 |
| Analytic Rules | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Rubrik Critical Anomaly](../content/54c70d21-696f-4f03-9238-9d7118d079fe.md) | Medium | Persistence | [`Rubrik_Anomaly_Data_CL`](../tables/rubrik-anomaly-data-cl.md) |
| [Rubrik Threat Monitoring](../content/0083cbc4-776e-42ca-8694-6950fd605df9.md) | Medium | Persistence | [`Rubrik_Events_Data_CL`](../tables/rubrik-events-data-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Rubrik Advanced Threat Hunt](../content/rubrik-advanced-threat-hunt-rubriksecuritycloud.md) | This playbook fetches the object mapped with incident and starts advance threat hunt. | - |
| [Rubrik Anomaly Analysis](../content/rubrik-anomaly-analysis-rubriksecuritycloud.md) | This playbook queries Rubrik Security Cloud to enrich the Anomaly event with additional information ... | - |
| [Rubrik Anomaly Generate Downloadable Link](../content/rubrik-anomaly-generate-downloadable-link-rubriksecuritycloud.md) | This playbook will generate downloadable links according to objectType (VMware, Fileset or VolumeGro... | - |
| [Rubrik Anomaly Incident Response](../content/rubrik-anomaly-incident-response-rubriksecuritycloud.md) | This playbook provides an end to end example of the collection of Ransomware Anomaly information fro... | - |
| [Rubrik Data Object Discovery](../content/rubrik-data-object-discovery-rubriksecuritycloud.md) | This playbook queries Rubrik Security Cloud to enrich the incoming event with additional information... | - |
| [Rubrik File Object Context Analysis](../content/rubrik-file-object-context-analysis-rubriksecuritycloud.md) | This playbook will retrieve policy hits from Rubrik Security Cloud for a given object, for a particu... | - |
| [Rubrik Fileset Ransomware Discovery](../content/rubrik-fileset-ransomware-discovery-rubriksecuritycloud.md) | This playbook queries Rubrik Security Cloud to enrich the incoming event with additional information... | - |
| [Rubrik IOC Scan](../content/rubrik-ioc-scan-rubriksecuritycloud.md) | This playbook interacts with Rubrik Security Cloud to scan backups for specified IOCs. This playbook... | - |
| [Rubrik Poll Async Result](../content/rubrik-poll-async-result-rubriksecuritycloud.md) | This playbook is used by other playbooks to poll for results from some of the asynchronous API calls... | - |
| [Rubrik Ransomware Discovery and File Recovery](../content/rubrik-ransomware-discovery-and-file-recovery-rubriksecuritycloud.md) | This playbook interacts with Rubrik Security Cloud to (1) optionally preserve evidence by creating a... | - |
| [Rubrik Ransomware Discovery and VM Recovery](../content/rubrik-ransomware-discovery-and-vm-recovery-rubriksecuritycloud.md) | This playbook interacts with Rubrik Security Cloud to (1) optionally preserve evidence by creating a... | - |
| [Rubrik Retrieve User Intelligence Information](../content/rubrik-retrieve-user-intelligence-information-rubriksecuritycloud.md) | This playbook queries Rubrik Security Cloud to get risk detail and policy hits details for a usernam... | - |
| [Rubrik Turbo Threat Hunt](../content/rubrik-turbo-threat-hunt-rubriksecuritycloud.md) | This playbook fetches the object mapped with incident and starts turbo threat hunt. | - |
| [Rubrik Update Anomaly Status](../content/rubrik-update-anomaly-status-rubriksecuritycloud.md) | This playbook will resolve or report false positive to unresolved anomaly and update status as resol... | - |
| [Rubrik Update Anomaly Status Via Incident](../content/rubrik-update-anomaly-status-via-incident-rubriksecuritycloud.md) | This playbook queries Rubrik Security Cloud to enrich the Anomaly event with additional information ... | - |
| [Rubrik User Intelligence Analysis](../content/rubrik-user-intelligence-analysis-rubriksecuritycloud.md) | This playbook queries Rubrik Security Cloud to get user sensitive data and update severity of incide... | - |
| [RubrikWorkloadAnalysis](../content/rubrikworkloadanalysis-rubriksecuritycloud.md) | This playbook retrieves sensitive IP and Host data to enrich the incident details, and adjusts the i... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.5.1       | 05-11-2025                     | Updated API Host Name default value in playbooks and custom connector |
| 3.5.0       | 25-07-2025                     | Added RubrikTurboThreatHunt and RubrikAdvanceThreatHunt playbooks. RubrikThreatMonitoring and RubrikCriticalAnomaly Analytic Rules also added.
| 3.4.0       | 07-04-2025                     | Added RubrikUpdateAnomalyStatusViaIncident and RubrikUpdateAnomalyStatus playbook. Enhanced RubrikAnomalyAnalysis playbook. Added User-Agent in every API call of each playbook. Removed policy creation resources from data connector Arm template.
| 3.3.0       | 19-11-2024                     | Added one new Playbook(RubrikWorkloadAnalysis) and updated the RubrikWebhookEvents Data Connector to add a new Orchestrator for Rubrik Events.
| 3.2.1       | 11-11-2024                     | Fixed the issue of Custom Connector id parameter in RubrikRansomwareDiscoveryAndVmRecovery playbook. |
| 3.2.0       | 24-02-2024                     | Added 3 new Playbooks(RubrikFileObjectContextAnalysis, RubrikUserIntelligenceAnalysis, RubrikRetrieveUserIntelligenceInformation) for FileObject and User, fixed clusterLocation issue of Collect_IOC_Scan_Data adaptive card in RubrikRansomwareDiscoveryAndVmRecovery playbook and updated python packages to fix vulnerability CVE-2023-50782 of cryptography module. Enhanced Anomaly Analysis playbook and added RubrikAnomalyGenerateDownloadableLink playbook. |
| 3.1.0       | 20-10-2023                     | Updated the **DataConnector** code by implementing Durable Function App. |
| 3.0.0       | 14-07-2023                     | Updated the title in such a way that user can identify the adaptive card based on incident. |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
