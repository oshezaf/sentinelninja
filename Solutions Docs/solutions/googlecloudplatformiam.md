# GoogleCloudPlatformIAM

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/google_logo.svg" alt="GoogleCloudPlatformIAM Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Google Cloud Platform Identity and Access Management (IAM) solution provides the capability to ingest [GCP IAM logs](https://cloud.google.com/iam/docs/audit-logging) into Microsoft Sentinel using the GCP Logging API. Refer to [GCP Logging API documentation](https://cloud.google.com/logging/docs/api) for more information.
  
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
| **Version** | 3.0.5 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-07-30 |
| **Solution Folder** | [GoogleCloudPlatformIAM](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformIAM) |

## Additional Information

📖 **Setup Guide:** [Google Cloud Platform connectors](https://learn.microsoft.com/azure/sentinel/connect-google-cloud-platform) - Connect GCP logs to Microsoft Sentinel

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [Google Cloud Platform IAM (via Codeless Connector Framework)](../connectors/gcpiamccpdefinition.md)
- [[DEPRECATED] Google Cloud Platform IAM](../connectors/gcpiamdataconnector.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GCPIAM`](../tables/gcpiam.md) | [Google Cloud Platform IAM (via Codeless Connector Framework)](../connectors/gcpiamccpdefinition.md) | Analytics, Hunting |
| [`GCP_IAM_CL`](../tables/gcp-iam-cl.md) | [[DEPRECATED] Google Cloud Platform IAM](../connectors/gcpiamdataconnector.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **25 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 10 |
| Hunting Queries | 10 |
| Playbooks | 3 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [GCP IAM - Disable Data Access Logging](../content/googlecloudplatformiam-gcp-iam-disable-data-access-logging-2530a631-9605-404d-ae58-58ef1f91b17c-b5c24a62.md) | Medium | DefenseEvasion | [`GCPIAM`](../tables/gcpiam.md)<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |
| [GCP IAM - Empty user agent](../content/googlecloudplatformiam-gcp-iam-empty-user-agent-9e0d8632-d33d-4075-979e-c972674f77b3-a16b7078.md) | Medium | DefenseEvasion | [`GCPIAM`](../tables/gcpiam.md)<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |
| [GCP IAM - High privileged role added to service account](../content/googlecloudplatformiam-gcp-iam-high-privileged-role-added-to-service-account-86112c4b-2535-4178-aa0e-ed9e32e3f054-e62bc201.md) | High | PrivilegeEscalation | [`GCPIAM`](../tables/gcpiam.md)<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |
| [GCP IAM - New Authentication Token for Service Account](../content/googlecloudplatformiam-gcp-iam-new-authentication-token-for-service-account-80e4db30-5636-4fbd-8816-24c3ded8d243-45af187b.md) | Medium | LateralMovement | [`GCPIAM`](../tables/gcpiam.md)<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |
| [GCP IAM - New Service Account](../content/googlecloudplatformiam-gcp-iam-new-service-account-a768aa52-453e-4e3e-80c2-62928d2e2f56-903c98c3.md) | Low | Persistence | [`GCPIAM`](../tables/gcpiam.md)<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |
| [GCP IAM - New Service Account Key](../content/googlecloudplatformiam-gcp-iam-new-service-account-key-fc135860-8773-4ead-b5be-9789af1ff8ff-ddbcaf48.md) | Low | LateralMovement | [`GCPIAM`](../tables/gcpiam.md)<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |
| [GCP IAM - Privileges Enumeration](../content/googlecloudplatformiam-gcp-iam-privileges-enumeration-52d88912-fa8b-4db2-b247-ee9225e41e8f-7998e5d2.md) | Low | Discovery | [`GCPIAM`](../tables/gcpiam.md)<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |
| [GCP IAM - Publicly exposed storage bucket](../content/googlecloudplatformiam-gcp-iam-publicly-exposed-storage-bucket-4a433846-4b05-4a27-99d7-92093feded79-7f5ffaae.md) | Medium | Discovery | [`GCPIAM`](../tables/gcpiam.md)<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |
| [GCP IAM - Service Account Enumeration](../content/googlecloudplatformiam-gcp-iam-service-account-enumeration-50e0437e-912d-4cd0-ac19-fef0aebdd3d7-5d27b7f1.md) | Low | Discovery | [`GCPIAM`](../tables/gcpiam.md)<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |
| [GCP IAM - Service Account Keys Enumeration](../content/googlecloudplatformiam-gcp-iam-service-account-keys-enumeration-7ad3cfed-18c0-44af-9e9d-9fb5472a2321-1e046e4f.md) | Low | Discovery | [`GCPIAM`](../tables/gcpiam.md)<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [GCP IAM - Changed roles](../content/googlecloudplatformiam-gcp-iam-changed-roles-0ab42aac-2c86-443c-80fa-ef8cdd0d997e-d2250be5.md) | PrivilegeEscalation | [`GCPIAM`](../tables/gcpiam.md)<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |
| [GCP IAM - Deleted service accounts](../content/googlecloudplatformiam-gcp-iam-deleted-service-accounts-b758750b-18e8-4aec-a831-c9a1a312d314-9ce24ba0.md) | Impact | [`GCPIAM`](../tables/gcpiam.md)<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |
| [GCP IAM - Disabled service accounts](../content/googlecloudplatformiam-gcp-iam-disabled-service-accounts-f228b2ca-3604-475a-8bd1-33b6c5dbcd3d-71041e65.md) | Impact | [`GCPIAM`](../tables/gcpiam.md)<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |
| [GCP IAM - New custom roles](../content/googlecloudplatformiam-gcp-iam-new-custom-roles-e9accd25-ecff-4076-b2da-3102bf95bec5-1b828f0f.md) | PrivilegeEscalation | [`GCPIAM`](../tables/gcpiam.md)<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |
| [GCP IAM - New service account keys](../content/googlecloudplatformiam-gcp-iam-new-service-account-keys-33bf838b-a85e-4051-8646-07f4e47ee4ea-d2e0206e.md) | LateralMovement | [`GCPIAM`](../tables/gcpiam.md)<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |
| [GCP IAM - New service accounts](../content/googlecloudplatformiam-gcp-iam-new-service-accounts-52518413-437b-4f79-86d3-28c8c1fafb66-85c410bc.md) | Persistence | [`GCPIAM`](../tables/gcpiam.md)<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |
| [GCP IAM - Rare IAM actions](../content/googlecloudplatformiam-gcp-iam-rare-iam-actions-85e64fe8-aeed-4021-85de-fdf539917ca1-dee16ec6.md) | InitialAccess | [`GCPIAM`](../tables/gcpiam.md)<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |
| [GCP IAM - Rare user agent](../content/googlecloudplatformiam-gcp-iam-rare-user-agent-ee96562f-cb40-42fd-80d6-dce38cb38f5c-c76775d3.md) | DefenseEvasion | [`GCPIAM`](../tables/gcpiam.md)<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |
| [GCP IAM - Top service accounts by failed actions](../content/googlecloudplatformiam-gcp-iam-top-service-accounts-by-failed-actions-27234847-8d3f-4d33-a3ef-5d3ec2575154-690da1f5.md) | Discovery | [`GCPIAM`](../tables/gcpiam.md)<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |
| [GCP IAM - Top source IP addresses with failed actions](../content/googlecloudplatformiam-gcp-iam-top-source-ip-addresses-with-failed-actions-2f906618-68e1-49ae-a961-8483cb7b6523-0c683ae9.md) | Discovery | [`GCPIAM`](../tables/gcpiam.md)<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [GCP_IAM](../content/googlecloudplatformiam-gcp-iam-59739972.md) | [`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [GCP-DisableServiceAccountFromTeams](../content/googlecloudplatformiam-gcp-disableserviceaccountfromteams-0b9edb6a.md) | When a new sentinel incident is created, this playbook gets triggered and performs the following act... | - |
| [GCP-DisableServiceAccountKey](../content/googlecloudplatformiam-gcp-disableserviceaccountkey-d3d8482c.md) | Once a new sentinel incident is created, this playbook gets triggered and performs the following act... | - |
| [GCP-EnrichServiseAccountInfo](../content/googlecloudplatformiam-gcp-enrichserviseaccountinfo-4a930a19.md) | Once a new sentinel incident is created, this playbook gets triggered and performs the following act... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [GCP_IAM](../content/googlecloudplatformiam-gcp-iam-0a77da75-0ce2-4d55-8d7d-b26e2b3d9f9a-47e266eb.md) | - | [`GCPIAM`](../tables/gcpiam.md) *(read)*<br>[`GCP_IAM_CL`](../tables/gcp-iam-cl.md) *(read)* |

## Release Notes

**Version** | **Date Modified (DD-MM-YYYY)**| **ChangeHistory**                                                                         |
|------------|-------------------------------|-------------------------------------------------------------------------------------------|
| 3.0.7      | 28-08-2025                    | Improved type handling in the parser query by explicitly converting certain fields to bool and datetime.|
| 3.0.6      | 31-07-2025                    | Removed deprecated **Data Connector** |
| 3.0.5      | 27-06-2025                    | GoogleCloudPlatformIAM **CCF Data Connector** moving to GA |
| 3.0.4      | 13-06-2025                    | Updated Standard Table configuration in **CCF Data Connector**.   |
| 3.0.3      | 28-05-2025                    | Implementation of Standard Table functionality to **CCF Data Connector**.    |
| 3.0.2      | 18-02-2025                    | Migrated the **Function app** connector to CCP **Data Connctor** and Updated **Parser**.   |
| 3.0.1      | 10-09-2024                    | Repackaged solution to add existing **Parser**.                                            |
| 3.0.0      | 04-09-2024                    | Updated the python runtime version to 3.11.                                                |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

