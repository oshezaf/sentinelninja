# Authomize

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Authomize |
| **Support Tier** | Partner |
| **Support Link** | [https://support.authomize.com](https://support.authomize.com) |
| **Categories** | domains,verticals |
| **First Published** | 2023-06-15 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Authomize](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Authomize) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Authomize Data Connector](../connectors/authomize.md)

## Tables Reference

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
| [AWS role with admin privileges](../content/734c00a0-a95b-44dd-9b69-d926ed44256d.md) | High | InitialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [AWS role with shadow admin privileges](../content/2526079b-3355-4756-a2d1-21e9cd957261.md) | High | InitialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Access to AWS without MFA](../content/48a9478b-440a-4330-b42c-94bd84dc904c.md) | Medium | InitialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Admin SaaS account detected](../content/87419138-d75f-450d-aca4-1dc802e32540.md) | Low | InitialAccess, PrivilegeEscalation | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Admin password not updated in 30 days](../content/63d87fcb-d197-48d2-a642-de4813f0219a.md) | Medium | InitialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Detect AWS IAM Users](../content/077eb06a-c011-47f7-8d92-dfc2b1e1d71b.md) | High | PrivilegeEscalation | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Empty group with entitlements](../content/c4d442a8-8227-4735-ac13-d84704e1b371.md) | Informational | PrivilegeEscalation, Persistence | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [IaaS admin detected](../content/dc728ba1-5204-4fde-ab48-eda19c8fad3a.md) | Medium | InitialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [IaaS policy not attached to any identity](../content/57bae0c4-50b7-4552-9de9-19dfecddbace.md) | Informational | PrivilegeEscalation, Persistence | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [IaaS shadow admin detected](../content/31f43e9d-1839-4baf-a668-54c28b98af3e.md) | High | InitialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Lateral Movement Risk - Role Chain Length](../content/25bef734-4399-4c55-9579-4ebabd9cccf6.md) | Informational | PrivilegeEscalation, Persistence | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [New direct access policy was granted against organizational policy](../content/d7ee7bb5-d712-4d44-b201-b13379924934.md) | Low | InitialAccess, PrivilegeEscalation | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [New service account gained access to IaaS resource](../content/6c17f270-cd56-48cc-9196-1728ffea6538.md) | Informational | InitialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Password Exfiltration over SCIM application](../content/2e3c4ad5-8cb3-4b46-88ff-a88367ee7eaa.md) | High | CredentialAccess, InitialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Privileged Machines Exposed to the Internet](../content/72891de4-da70-44e4-9984-35fcea98d000.md) | High | Discovery, Impact | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Refactor AWS policy based on activities in the last 60 days](../content/642de064-c67b-4eb7-98bd-3f8cd51f282c.md) | High | PrivilegeEscalation | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Stale AWS policy attachment to identity](../content/766a3b1b-0d5b-4a8d-b0d6-7dd379e73567.md) | Low | InitialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Stale IAAS policy attachment to role](../content/ccdf3f87-7890-4549-9d0f-8f43c1d2751d.md) | Informational | PrivilegeEscalation, Persistence | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Unused IaaS Policy](../content/e0ae5f9e-865b-41f5-98bb-c04113888e85.md) | High | InitialAccess, PrivilegeEscalation | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [User assigned to a default admin role](../content/c04ed74c-3b23-48cd-9c11-fd10cffddc64.md) | High | InitialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [User without MFA](../content/71a7b0de-f13d-44b9-9caa-668f1bad0ce6.md) | Medium | InitialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Admin SaaS account detected](../content/b3430fb5-78aa-4729-8595-f66c06138478.md) | PrivilegeEscalation | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [IaaS admin detected](../content/ab80b41c-23e5-4264-ac23-806aad2a57af.md) | PrivilegeEscalation | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [IaaS shadow admin detected](../content/fad675f5-b743-40c6-873d-019de93f18db.md) | PrivilegeEscalation | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Password Exfiltration over SCIM application](../content/485e7cab-131e-40ce-9482-791e681b7967.md) | CredentialAccess | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [Privileged Machines Exposed to the Internet](../content/7457a420-8c28-4ce2-a55e-d050e5a6bc4f.md) | Discovery | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |
| [ateral Movement Risk - Role Chain Length](../content/bf03796a-3ed7-440f-bfc3-0c702cf762a9.md) | PrivilegeEscalation | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Authomize](../content/authomize-authomize.md) | [`Authomize_v2_CL`](../tables/authomize-v2-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       |  12-12-2023                    | Added Entity Mapping to **Analytic rules**  |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
