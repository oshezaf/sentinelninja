# ⚠️ Authomize

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Authomize.svg" alt="Authomize Logo" width="75" height="75">

The [Authomize Solution](https://authomize.com) integrates Authomize with Microsoft Sentinel to monitor and analyze security events from Authomize.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Authomize |
| **Support Tier** | Partner |
| **Support Link** | [https://support.authomize.com](https://support.authomize.com) |
| **Categories** | domains,verticals |
| **Version** | 3.0.0 |
| **Author** | Authomize - support@authomize.com |
| **First Published** | 2023-06-15 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Authomize](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Authomize) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Authomize Data Connector](../connectors/authomize.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) | [Authomize Data Connector](../connectors/authomize.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **28 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 21 |
| Hunting Queries | 6 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [AWS role with admin privileges](../content/authomize-aws-role-with-admin-privileges-734c00a0-a95b-44dd-9b69-d926ed44256d-a1c34868.md) | High | InitialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [AWS role with shadow admin privileges](../content/authomize-aws-role-with-shadow-admin-privileges-2526079b-3355-4756-a2d1-21e9cd957261-8e07d58b.md) | High | InitialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Access to AWS without MFA](../content/authomize-access-to-aws-without-mfa-48a9478b-440a-4330-b42c-94bd84dc904c-13ae6d15.md) | Medium | InitialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Admin SaaS account detected](../content/authomize-admin-saas-account-detected-87419138-d75f-450d-aca4-1dc802e32540-9cd7a656.md) | Low | InitialAccess, PrivilegeEscalation | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Admin password not updated in 30 days](../content/authomize-admin-password-not-updated-in-30-days-63d87fcb-d197-48d2-a642-de4813f0219a-65e1e097.md) | Medium | InitialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Detect AWS IAM Users](../content/authomize-detect-aws-iam-users-077eb06a-c011-47f7-8d92-dfc2b1e1d71b-f5d15e77.md) | High | PrivilegeEscalation | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Empty group with entitlements](../content/authomize-empty-group-with-entitlements-c4d442a8-8227-4735-ac13-d84704e1b371-48f33875.md) | Informational | PrivilegeEscalation, Persistence | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [IaaS admin detected](../content/authomize-iaas-admin-detected-dc728ba1-5204-4fde-ab48-eda19c8fad3a-4ade3873.md) | Medium | InitialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [IaaS policy not attached to any identity](../content/authomize-iaas-policy-not-attached-to-any-identity-57bae0c4-50b7-4552-9de9-19dfecddbace-d525d1b3.md) | Informational | PrivilegeEscalation, Persistence | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [IaaS shadow admin detected](../content/authomize-iaas-shadow-admin-detected-31f43e9d-1839-4baf-a668-54c28b98af3e-9f7efd58.md) | High | InitialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Lateral Movement Risk - Role Chain Length](../content/authomize-lateral-movement-risk-role-chain-length-25bef734-4399-4c55-9579-4ebabd9cccf6-b59e2667.md) | Informational | PrivilegeEscalation, Persistence | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [New direct access policy was granted against organizational policy](../content/authomize-new-direct-access-policy-was-granted-against-organizational-policy-d7ee7bb5-d712-4d44-b201-b13379924934-3299c307.md) | Low | InitialAccess, PrivilegeEscalation | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [New service account gained access to IaaS resource](../content/authomize-new-service-account-gained-access-to-iaas-resource-6c17f270-cd56-48cc-9196-1728ffea6538-08838a9a.md) | Informational | InitialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Password Exfiltration over SCIM application](../content/authomize-password-exfiltration-over-scim-application-2e3c4ad5-8cb3-4b46-88ff-a88367ee7eaa-4b814fdc.md) | High | CredentialAccess, InitialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Privileged Machines Exposed to the Internet](../content/authomize-privileged-machines-exposed-to-the-internet-72891de4-da70-44e4-9984-35fcea98d000-c1efb0ea.md) | High | Discovery, Impact | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Refactor AWS policy based on activities in the last 60 days](../content/authomize-refactor-aws-policy-based-on-activities-in-the-last-60-days-642de064-c67b-4eb7-98bd-3f8cd51f282c-6026e372.md) | High | PrivilegeEscalation | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Stale AWS policy attachment to identity](../content/authomize-stale-aws-policy-attachment-to-identity-766a3b1b-0d5b-4a8d-b0d6-7dd379e73567-c0294924.md) | Low | InitialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Stale IAAS policy attachment to role](../content/authomize-stale-iaas-policy-attachment-to-role-ccdf3f87-7890-4549-9d0f-8f43c1d2751d-5cb7f68e.md) | Informational | PrivilegeEscalation, Persistence | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Unused IaaS Policy](../content/authomize-unused-iaas-policy-e0ae5f9e-865b-41f5-98bb-c04113888e85-86fba83d.md) | High | InitialAccess, PrivilegeEscalation | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [User assigned to a default admin role](../content/authomize-user-assigned-to-a-default-admin-role-c04ed74c-3b23-48cd-9c11-fd10cffddc64-5d7a4cf8.md) | High | InitialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [User without MFA](../content/authomize-user-without-mfa-71a7b0de-f13d-44b9-9caa-668f1bad0ce6-e32b8130.md) | Medium | InitialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Admin SaaS account detected](../content/authomize-admin-saas-account-detected-b3430fb5-78aa-4729-8595-f66c06138478-6473e22c.md) | PrivilegeEscalation | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [IaaS admin detected](../content/authomize-iaas-admin-detected-ab80b41c-23e5-4264-ac23-806aad2a57af-85ec11f2.md) | PrivilegeEscalation | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [IaaS shadow admin detected](../content/authomize-iaas-shadow-admin-detected-fad675f5-b743-40c6-873d-019de93f18db-f9a27b45.md) | PrivilegeEscalation | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Password Exfiltration over SCIM application](../content/authomize-password-exfiltration-over-scim-application-485e7cab-131e-40ce-9482-791e681b7967-f2173219.md) | CredentialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Privileged Machines Exposed to the Internet](../content/authomize-privileged-machines-exposed-to-the-internet-7457a420-8c28-4ce2-a55e-d050e5a6bc4f-3beb4360.md) | Discovery | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [ateral Movement Risk - Role Chain Length](../content/authomize-ateral-movement-risk-role-chain-length-bf03796a-3ed7-440f-bfc3-0c702cf762a9-ed2fe005.md) | PrivilegeEscalation | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Authomize](../content/authomize-authomize-0bb90a63.md) | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       |  12-12-2023                    | Added Entity Mapping to **Analytic rules**  |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

