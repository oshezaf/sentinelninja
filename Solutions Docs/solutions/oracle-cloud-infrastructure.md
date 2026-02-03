# Oracle Cloud Infrastructure

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Oracle Cloud Infrastructure Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Oracle Cloud Infrastructure (OCI) solution provides the capability to ingest OCI Logs from [OCI Stream](https://docs.oracle.com/iaas/Content/Streaming/Concepts/streamingoverview.htm) into Microsoft Sentinel using the [OCI Streaming REST API](https://docs.oracle.com/iaas/api/#/streaming/streaming/20180418).

**Underlying Microsoft Technologies used:**

This Solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

 • [Microsoft Sentinel Codeless Connector Framework](https://aka.ms/Sentinel-CCP_Platform)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.6 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-06-01 |
| **Solution Folder** | [Oracle Cloud Infrastructure](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Oracle%20Cloud%20Infrastructure) |

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [Oracle Cloud Infrastructure (via Codeless Connector Framework)](../connectors/oci-connector-ccp-definition.md)
- [[DEPRECATED] Oracle Cloud Infrastructure](../connectors/oraclecloudinfrastructurelogsconnector.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md) | [Oracle Cloud Infrastructure (via Codeless Connector Framework)](../connectors/oci-connector-ccp-definition.md) | Analytics, Hunting, Workbooks |
| [`OCI_Logs_CL`](../tables/oci-logs-cl.md) | [[DEPRECATED] Oracle Cloud Infrastructure](../connectors/oraclecloudinfrastructurelogsconnector.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **22 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 10 |
| Hunting Queries | 10 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [OCI - Discovery activity](../content/oracle-cloud-infrastructure-oci-discovery-activity-61f995d7-8038-4ff0-ad2b-eccfd18fcc8c-3b103bbb.md) | Medium | Discovery | [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md)<br>[`OCI_Logs_CL`](../tables/oci-logs-cl.md) |
| [OCI - Event rule deleted](../content/oracle-cloud-infrastructure-oci-event-rule-deleted-31b15699-0b55-4246-851e-93f9cefb6f5c-52b327bf.md) | High | DefenseEvasion | [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md)<br>[`OCI_Logs_CL`](../tables/oci-logs-cl.md) |
| [OCI - Inbound SSH connection](../content/oracle-cloud-infrastructure-oci-inbound-ssh-connection-eb6e07a1-2895-4c55-9c27-ac84294f0e46-b168a5f8.md) | Medium | InitialAccess | [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md)<br>[`OCI_Logs_CL`](../tables/oci-logs-cl.md) |
| [OCI - Insecure metadata endpoint](../content/oracle-cloud-infrastructure-oci-insecure-metadata-endpoint-9c4b1b9c-6462-41ce-8f2e-ce8c104331fc-b22ffd8a.md) | High | Discovery | [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md)<br>[`OCI_Logs_CL`](../tables/oci-logs-cl.md) |
| [OCI - Instance metadata access](../content/oracle-cloud-infrastructure-oci-instance-metadata-access-a55b4bbe-a014-4ae9-a50d-441ba5e98b65-9c40229f.md) | Medium | Discovery | [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md)<br>[`OCI_Logs_CL`](../tables/oci-logs-cl.md) |
| [OCI - Multiple instances launched](../content/oracle-cloud-infrastructure-oci-multiple-instances-launched-a79cf2b9-a511-4282-ba5d-812e14b07831-c81054f3.md) | Medium | Impact | [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md)<br>[`OCI_Logs_CL`](../tables/oci-logs-cl.md) |
| [OCI - Multiple instances terminated](../content/oracle-cloud-infrastructure-oci-multiple-instances-terminated-252e651d-d825-480c-bdeb-8b239354577d-58dfd5da.md) | High | Impact | [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md)<br>[`OCI_Logs_CL`](../tables/oci-logs-cl.md) |
| [OCI - Multiple rejects on rare ports](../content/oracle-cloud-infrastructure-oci-multiple-rejects-on-rare-ports-482c24b9-a700-4b2a-85d3-1c42110ba78c-1acf665f.md) | Medium | Reconnaissance | [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md)<br>[`OCI_Logs_CL`](../tables/oci-logs-cl.md) |
| [OCI - SSH scanner](../content/oracle-cloud-infrastructure-oci-ssh-scanner-e087d4fb-af0b-4e08-a067-b9ba9e5f8840-a4b0a62f.md) | High | Reconnaissance | [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md)<br>[`OCI_Logs_CL`](../tables/oci-logs-cl.md) |
| [OCI - Unexpected user agent](../content/oracle-cloud-infrastructure-oci-unexpected-user-agent-a0b9a7ca-3e6d-4996-ae35-759df1d67a54-ec9d7de9.md) | Medium | InitialAccess | [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md)<br>[`OCI_Logs_CL`](../tables/oci-logs-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [OCI - Delete operations](../content/oracle-cloud-infrastructure-oci-delete-operations-eed33749-85c4-47cc-9776-12eeb3172888-62fef1b2.md) | Impact | [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md)<br>[`OCI_Logs_CL`](../tables/oci-logs-cl.md) |
| [OCI - Deleted users](../content/oracle-cloud-infrastructure-oci-deleted-users-4f7c20dc-702c-491d-908e-3b5f8bdc73ab-9424b8e4.md) | Impact | [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md)<br>[`OCI_Logs_CL`](../tables/oci-logs-cl.md) |
| [OCI - Destination ports (inbound traffic)](../content/oracle-cloud-infrastructure-oci-destination-ports-inbound-traffic-3bdfa923-3fc8-4651-8954-dab2bef2bdd1-7abbc360.md) | InitialAccess | [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md)<br>[`OCI_Logs_CL`](../tables/oci-logs-cl.md) |
| [OCI - Destination ports (outbound traffic)](../content/oracle-cloud-infrastructure-oci-destination-ports-outbound-traffic-fff09b57-24ff-4e47-8a29-6292b0310e19-a5e0c310.md) | Exfiltration | [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md)<br>[`OCI_Logs_CL`](../tables/oci-logs-cl.md) |
| [OCI - Launched instances](../content/oracle-cloud-infrastructure-oci-launched-instances-3df69415-2dec-4457-9433-97a3c15a4b70-2f0f2a81.md) | Impact | [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md)<br>[`OCI_Logs_CL`](../tables/oci-logs-cl.md) |
| [OCI - New users](../content/oracle-cloud-infrastructure-oci-new-users-c411dc09-a8ca-44f9-a594-242b5e90ada8-53c9f4f0.md) | InitialAccess, Persistence | [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md)<br>[`OCI_Logs_CL`](../tables/oci-logs-cl.md) |
| [OCI - Terminated instances](../content/oracle-cloud-infrastructure-oci-terminated-instances-51101a78-a802-4a83-ac02-ef31416ffbc7-09371e34.md) | Impact | [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md)<br>[`OCI_Logs_CL`](../tables/oci-logs-cl.md) |
| [OCI - Update activities](../content/oracle-cloud-infrastructure-oci-update-activities-e4353276-19a5-4833-a271-be507170269e-51a407a0.md) | Impact | [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md)<br>[`OCI_Logs_CL`](../tables/oci-logs-cl.md) |
| [OCI - Updated instances](../content/oracle-cloud-infrastructure-oci-updated-instances-7b17d83a-7a88-4867-accf-494736bcec50-72bc8aa3.md) | DefenseEvasion | [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md)<br>[`OCI_Logs_CL`](../tables/oci-logs-cl.md) |
| [OCI - User source IP addresses](../content/oracle-cloud-infrastructure-oci-user-source-ip-addresses-01dc84d2-ef1d-4df6-9499-e1c4a305f01f-d4d386ac.md) | Impact | [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md)<br>[`OCI_Logs_CL`](../tables/oci-logs-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [OracleCloudInfrastructureOCI](../content/oracle-cloud-infrastructure-oraclecloudinfrastructureoci-601b3646.md) | [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md)<br>[`OCI_Logs_CL`](../tables/oci-logs-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [OCILogs](../content/oracle-cloud-infrastructure-ocilogs-8be45447-4a81-4731-8a87-0f2cbb5aa5b8-49e11145.md) | - | [`OCI_LogsV2_CL`](../tables/oci-logsv2-cl.md) *(read)*<br>[`OCI_Logs_CL`](../tables/oci-logs-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                          |
|-------------|--------------------------------|-----------------------------------------------------------------------------|
| 3.0.6       | 09-12-2025                     | Support Multistream + multi partition.       |
| 3.0.5       | 13-11-2025                     | Updated partition id text box's description with zero-based indexing.       |
| 3.0.4       | 22-09-2025                     | Updated the OCI **CCF Data Connector** instructions to include information about the partition ID limitation.		 							 |
| 3.0.3       | 25-08-2025                     | Moving OCI **CCF Data Connector** to GA		 							 |
| 3.0.2       | 14-07-2025                     | Introduced new **CCF Connector** to the Solution - "OCI-Connector-CCP-Definition".|
| 3.0.1       | 05-10-2023                     | Manual deployment instructions updated for **Data Connector**.               |
| 3.0.0       | 21-08-2023                     | Modified the **Parser** by adding Columnifexists condition to avoid errors. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

