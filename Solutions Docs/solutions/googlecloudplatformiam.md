# GoogleCloudPlatformIAM

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2021-07-30 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformIAM](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformIAM) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Google Cloud Platform IAM (via Codeless Connector Framework)](../connectors/gcpiamccpdefinition.md)
- [[DEPRECATED] Google Cloud Platform IAM](../connectors/gcpiamdataconnector.md)

## Tables Reference

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GCPIAM`](../tables/gcpiam.md) | [Google Cloud Platform IAM (via Codeless Connector Framework)](../connectors/gcpiamccpdefinition.md) | - |
| [`GCP_IAM_CL`](../tables/gcp-iam-cl.md) | [[DEPRECATED] Google Cloud Platform IAM](../connectors/gcpiamdataconnector.md) | Workbooks |

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
| [GCP IAM - Disable Data Access Logging](../content/2530a631-9605-404d-ae58-58ef1f91b17c.md) | Medium | DefenseEvasion | - |
| [GCP IAM - Empty user agent](../content/9e0d8632-d33d-4075-979e-c972674f77b3.md) | Medium | DefenseEvasion | - |
| [GCP IAM - High privileged role added to service account](../content/86112c4b-2535-4178-aa0e-ed9e32e3f054.md) | High | PrivilegeEscalation | - |
| [GCP IAM - New Authentication Token for Service Account](../content/80e4db30-5636-4fbd-8816-24c3ded8d243.md) | Medium | LateralMovement | - |
| [GCP IAM - New Service Account](../content/a768aa52-453e-4e3e-80c2-62928d2e2f56.md) | Low | Persistence | - |
| [GCP IAM - New Service Account Key](../content/fc135860-8773-4ead-b5be-9789af1ff8ff.md) | Low | LateralMovement | - |
| [GCP IAM - Privileges Enumeration](../content/52d88912-fa8b-4db2-b247-ee9225e41e8f.md) | Low | Discovery | - |
| [GCP IAM - Publicly exposed storage bucket](../content/4a433846-4b05-4a27-99d7-92093feded79.md) | Medium | Discovery | - |
| [GCP IAM - Service Account Enumeration](../content/50e0437e-912d-4cd0-ac19-fef0aebdd3d7.md) | Low | Discovery | - |
| [GCP IAM - Service Account Keys Enumeration](../content/7ad3cfed-18c0-44af-9e9d-9fb5472a2321.md) | Low | Discovery | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [GCP IAM - Changed roles](../content/0ab42aac-2c86-443c-80fa-ef8cdd0d997e.md) | PrivilegeEscalation | - |
| [GCP IAM - Deleted service accounts](../content/b758750b-18e8-4aec-a831-c9a1a312d314.md) | Impact | - |
| [GCP IAM - Disabled service accounts](../content/f228b2ca-3604-475a-8bd1-33b6c5dbcd3d.md) | Impact | - |
| [GCP IAM - New custom roles](../content/e9accd25-ecff-4076-b2da-3102bf95bec5.md) | PrivilegeEscalation | - |
| [GCP IAM - New service account keys](../content/33bf838b-a85e-4051-8646-07f4e47ee4ea.md) | LateralMovement | - |
| [GCP IAM - New service accounts](../content/52518413-437b-4f79-86d3-28c8c1fafb66.md) | Persistence | - |
| [GCP IAM - Rare IAM actions](../content/85e64fe8-aeed-4021-85de-fdf539917ca1.md) | InitialAccess | - |
| [GCP IAM - Rare user agent](../content/ee96562f-cb40-42fd-80d6-dce38cb38f5c.md) | DefenseEvasion | - |
| [GCP IAM - Top service accounts by failed actions](../content/27234847-8d3f-4d33-a3ef-5d3ec2575154.md) | Discovery | - |
| [GCP IAM - Top source IP addresses with failed actions](../content/2f906618-68e1-49ae-a961-8483cb7b6523.md) | Discovery | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [GCP_IAM](../content/gcp-iam-googlecloudplatformiam.md) | [`GCP_IAM_CL`](../tables/gcp-iam-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [GCP-DisableServiceAccountFromTeams](../content/gcp-disableserviceaccountfromteams-googlecloudplatformiam.md) | When a new sentinel incident is created, this playbook gets triggered and performs the following act... | - |
| [GCP-DisableServiceAccountKey](../content/gcp-disableserviceaccountkey-googlecloudplatformiam.md) | Once a new sentinel incident is created, this playbook gets triggered and performs the following act... | - |
| [GCP-EnrichServiseAccountInfo](../content/gcp-enrichserviseaccountinfo-googlecloudplatformiam.md) | Once a new sentinel incident is created, this playbook gets triggered and performs the following act... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [GCP_IAM](../content/0a77da75-0ce2-4d55-8d7d-b26e2b3d9f9a.md) | - | - |

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

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
