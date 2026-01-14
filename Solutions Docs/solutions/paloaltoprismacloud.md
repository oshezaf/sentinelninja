# PaloAltoPrismaCloud

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/PaloAltoPrismaCloud/logo/Palo-alto-logo.png" alt="PaloAltoPrismaCloud Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Palo Alto Prisma Cloud](https://www.paloaltonetworks.com/prisma/cloud) CSPM solution provides the capability to ingest Prisma Cloud CSPM alerts and audit logs into Microsoft Sentinel using the Prisma Cloud CSPM API. Refer to Prisma Cloud CSPM API documentation for more information. 
 
 **Underlying Microsoft Technologies used:** 
 
 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:
 
 • [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api) 
 



## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-04-16 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PaloAltoPrismaCloud](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PaloAltoPrismaCloud) |

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [[DEPRECATED] Palo Alto Prisma Cloud CSPM](../connectors/paloaltoprismacloud.md) ⚠️
- [Palo Alto Prisma Cloud CSPM (via Codeless Connector Framework)](../connectors/paloaltoprismacloudcspmccpdefinition.md)

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md) | [Palo Alto Prisma Cloud CSPM (via Codeless Connector Framework)](../connectors/paloaltoprismacloudcspmccpdefinition.md) | Analytics, Hunting, Workbooks |
| [`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md) | [[DEPRECATED] Palo Alto Prisma Cloud CSPM](../connectors/paloaltoprismacloud.md) | Analytics, Hunting, Workbooks |
| [`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md) | [Palo Alto Prisma Cloud CSPM (via Codeless Connector Framework)](../connectors/paloaltoprismacloudcspmccpdefinition.md) | Analytics, Hunting, Workbooks |
| [`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) | [[DEPRECATED] Palo Alto Prisma Cloud CSPM](../connectors/paloaltoprismacloud.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **24 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 11 |
| Hunting Queries | 9 |
| Playbooks | 2 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Palo Alto Prisma Cloud - Access keys are not rotated for 90 days](../content/paloaltoprismacloud-palo-alto-prisma-cloud-access-keys-are-not-rotated-for-90-days-777d4993-31bb-4d45-b949-84f58e09fa2f-741c6c72.md) | Medium | InitialAccess | [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md)<br>[`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md)<br>[`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md)<br>[`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) |
| [Palo Alto Prisma Cloud - Anomalous access key usage](../content/paloaltoprismacloud-palo-alto-prisma-cloud-anomalous-access-key-usage-bd602b90-f7f9-4ae9-bf8c-3672a24deb39-ba4d66a4.md) | Medium | InitialAccess | [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md)<br>[`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md)<br>[`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md)<br>[`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) |
| [Palo Alto Prisma Cloud - High risk score alert](../content/paloaltoprismacloud-palo-alto-prisma-cloud-high-risk-score-alert-617b02d8-0f47-4f3c-afed-1926a45e7b28-96bc73a5.md) | Medium | InitialAccess | [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md)<br>[`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md)<br>[`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md)<br>[`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) |
| [Palo Alto Prisma Cloud - High severity alert opened for several days](../content/paloaltoprismacloud-palo-alto-prisma-cloud-high-severity-alert-opened-for-several-days-c5bf680f-fa37-47c3-9f38-e839a9b99c05-debefc21.md) | Medium | InitialAccess | [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md)<br>[`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md)<br>[`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md)<br>[`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) |
| [Palo Alto Prisma Cloud - IAM Group with Administrator Access Permissions](../content/paloaltoprismacloud-palo-alto-prisma-cloud-iam-group-with-administrator-access-permissions-ac76d9c0-17a3-4aaa-a341-48f4c0b1c882-901dee49.md) | Medium | InitialAccess | [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md)<br>[`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md)<br>[`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md)<br>[`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) |
| [Palo Alto Prisma Cloud - Inactive user](../content/paloaltoprismacloud-palo-alto-prisma-cloud-inactive-user-7f78fa52-9833-41de-b5c5-76e61b8af9c1-537c43fd.md) | Low | InitialAccess | [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md)<br>[`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md)<br>[`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md)<br>[`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) |
| [Palo Alto Prisma Cloud - Maximum risk score alert](../content/paloaltoprismacloud-palo-alto-prisma-cloud-maximum-risk-score-alert-119a574d-f37a-403a-a67a-4d6f5083d9cf-223d8b37.md) | Medium | InitialAccess | [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md)<br>[`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md)<br>[`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md)<br>[`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) |
| [Palo Alto Prisma Cloud - Multiple failed logins for user](../content/paloaltoprismacloud-palo-alto-prisma-cloud-multiple-failed-logins-for-user-4f688252-bf9b-4136-87bf-d540b5be1050-d7b00173.md) | Medium | CredentialAccess | [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md)<br>[`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md)<br>[`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md)<br>[`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) |
| [Palo Alto Prisma Cloud - Network ACL allow all outbound traffic](../content/paloaltoprismacloud-palo-alto-prisma-cloud-network-acl-allow-all-outbound-traffic-4264e133-eec2-438f-af85-05e869308f94-116f8f70.md) | Medium | InitialAccess | [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md)<br>[`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md)<br>[`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md)<br>[`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) |
| [Palo Alto Prisma Cloud - Network ACL allow ingress traffic to server administration ports](../content/paloaltoprismacloud-palo-alto-prisma-cloud-network-acl-allow-ingress-traffic-to-server-administration-po-df89f4bf-720e-41c5-a209-15e41e400d35-f7048dd1.md) | Medium | InitialAccess | [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md)<br>[`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md)<br>[`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md)<br>[`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) |
| [Palo Alto Prisma Cloud - Network ACLs Inbound rule to allow All Traffic](../content/paloaltoprismacloud-palo-alto-prisma-cloud-network-acls-inbound-rule-to-allow-all-traffic-6098b34a-1e6b-440a-9e3b-fb4d5944ade1-8af38af1.md) | Medium | InitialAccess | [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md)<br>[`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md)<br>[`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md)<br>[`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Palo Alto Prisma Cloud - Access keys used](../content/paloaltoprismacloud-palo-alto-prisma-cloud-access-keys-used-f2e509e5-6eda-4626-a167-2875eb9c48af-3de24356.md) | InitialAccess | [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md)<br>[`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md)<br>[`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md)<br>[`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) |
| [Palo Alto Prisma Cloud - High risk score opened alerts](../content/paloaltoprismacloud-palo-alto-prisma-cloud-high-risk-score-opened-alerts-23a0867f-a522-4b34-acf4-0eadf75fc1e7-d49e04e7.md) | InitialAccess | [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md)<br>[`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md)<br>[`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md)<br>[`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) |
| [Palo Alto Prisma Cloud - High severity alerts](../content/paloaltoprismacloud-palo-alto-prisma-cloud-high-severity-alerts-dde04bfe-7237-4205-a447-258201e369e4-b90b36f7.md) | InitialAccess | [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md)<br>[`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md)<br>[`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md)<br>[`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) |
| [Palo Alto Prisma Cloud - New users](../content/paloaltoprismacloud-palo-alto-prisma-cloud-new-users-fd92609a-71bd-4da7-8388-e80147757e63-0130102c.md) | InitialAccess | [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md)<br>[`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md)<br>[`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md)<br>[`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) |
| [Palo Alto Prisma Cloud - Opened alerts](../content/paloaltoprismacloud-palo-alto-prisma-cloud-opened-alerts-4a09caf2-08a2-4c1d-981d-bb734de12a29-52f49567.md) | InitialAccess | [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md)<br>[`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md)<br>[`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md)<br>[`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) |
| [Palo Alto Prisma Cloud - Top recources with alerts](../content/paloaltoprismacloud-palo-alto-prisma-cloud-top-recources-with-alerts-08ab5107-5c4e-4baf-b0f4-bf75c044f8b1-8b740b45.md) | InitialAccess | [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md)<br>[`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md)<br>[`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md)<br>[`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) |
| [Palo Alto Prisma Cloud - Top sources of failed logins](../content/paloaltoprismacloud-palo-alto-prisma-cloud-top-sources-of-failed-logins-21b4c55b-3a86-40a4-81c4-31945e8f7562-c16a2884.md) | InitialAccess | [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md)<br>[`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md)<br>[`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md)<br>[`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) |
| [Palo Alto Prisma Cloud - Top users by failed logins](../content/paloaltoprismacloud-palo-alto-prisma-cloud-top-users-by-failed-logins-4c17ad45-fe78-4639-98cc-3b2fd173b053-44c87856.md) | InitialAccess | [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md)<br>[`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md)<br>[`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md)<br>[`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) |
| [Palo Alto Prisma Cloud - Updated resources](../content/paloaltoprismacloud-palo-alto-prisma-cloud-updated-resources-d0a145c5-546d-48df-a5d7-8866f3bbe24f-3a2c5f49.md) | InitialAccess | [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md)<br>[`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md)<br>[`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md)<br>[`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [PaloAltoPrismaCloudOverview](../content/paloaltoprismacloud-paloaltoprismacloudoverview-8eaa7569.md) | [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md)<br>[`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md)<br>[`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md)<br>[`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Fetch Security Posture from Prisma Cloud](../content/paloaltoprismacloud-fetch-security-posture-from-prisma-cloud-f913dc33.md) | This playbook provides/updates the compliance security posture details of asset in comments section ... | - |
| [Remediate assets on prisma cloud](../content/paloaltoprismacloud-remediate-assets-on-prisma-cloud-25186c76.md) | This playbook provides/updates the compliance security posture details of asset in comments section ... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [PaloAltoPrismaCloud](../content/paloaltoprismacloud-paloaltoprismacloud-a18b1e73-57a3-415b-b6c4-6b7a4ce7b6fd-e75f48bf.md) | - | [`PaloAltoPrismaCloudAlertV2_CL`](../tables/paloaltoprismacloudalertv2-cl.md) *(read)*<br>[`PaloAltoPrismaCloudAlert_CL`](../tables/paloaltoprismacloudalert-cl.md) *(read)*<br>[`PaloAltoPrismaCloudAuditV2_CL`](../tables/paloaltoprismacloudauditv2-cl.md) *(read)*<br>[`PaloAltoPrismaCloudAudit_CL`](../tables/paloaltoprismacloudaudit-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.4       | 27-10-2025                     | Add missing "detailed" flag to CCF **Data Connector** polling config |
| 3.0.3       | 10-10-2025                     | CCF **Data Connector** Moving to GA.		|
| 3.0.2       | 06-08-2025                     | Change **authentication type** from Basic to JWT Token.		|
| 3.0.1       | 17-07-2025                     | 1 **Analytic Rule** updated with improved rule logic.<br/> Added new **CCF Connector** - *Palo Alto Prisma Cloud CSPM.*   |  
| 3.0.0       | 18-08-2023                     | Manual deployment instructions updated for **Data Connector**		|

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

