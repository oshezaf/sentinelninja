# CiscoDuoSecurity

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cisco Systems |
| **Support Tier** | Partner |
| **Support Link** | [https://duo.com/support](https://duo.com/support) |
| **Categories** | domains |
| **First Published** | 2022-01-07 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoDuoSecurity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoDuoSecurity) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cisco Duo Security](../connectors/ciscoduosecurity.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) | [Cisco Duo Security](../connectors/ciscoduosecurity.md) | - |

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
| [Cisco Duo - AD sync failed](../content/398dd1cd-3251-49d8-b927-5b93bae4a094.md) | Medium | Impact | - |
| [Cisco Duo - Admin password reset](../content/413e49a5-b107-4698-8428-46b89308bd22.md) | High | Persistence | - |
| [Cisco Duo - Admin user created](../content/0724cb01-4866-483d-a149-eb400fe1daa8.md) | Medium | Persistence, PrivilegeEscalation | - |
| [Cisco Duo - Admin user deleted](../content/6424c623-31a5-4892-be33-452586fd4075.md) | Medium | Impact | - |
| [Cisco Duo - Authentication device new location](../content/01df3abe-3dc7-40e2-8aa7-f00b402df6f0.md) | Medium | InitialAccess | - |
| [Cisco Duo - Multiple admin 2FA failures](../content/e46c5588-e643-4a60-a008-5ba9a4c84328.md) | High | InitialAccess | - |
| [Cisco Duo - Multiple user login failures](../content/034f62b6-df51-49f3-831f-1e4cfd3c40d2.md) | High | InitialAccess | - |
| [Cisco Duo - Multiple users deleted](../content/6e4f9031-91d3-4fa1-8baf-624935f04ad8.md) | Medium | Impact | - |
| [Cisco Duo - New access device](../content/f05271b6-26a5-49cf-ad73-4a202fba6eb6.md) | Medium | InitialAccess | - |
| [Cisco Duo - Unexpected authentication factor](../content/16c91a2c-17ad-4985-a9ad-4a4f1cb11830.md) | Medium | InitialAccess | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Cisco Duo - Admin failure authentications](../content/421bbeed-ad5b-4acd-9f0b-6b609da33914.md) | InitialAccess | - |
| [Cisco Duo - Admin failure authentications](../content/385b0938-3922-48ab-a57a-cb8650ab71a3.md) | InitialAccess | - |
| [Cisco Duo - Authentication error reasons](../content/5653900e-4b21-408d-84da-e4db3da891bb.md) | InitialAccess | - |
| [Cisco Duo - Authentication errors](../content/b8c43652-1b79-4b18-a348-a719bafad6d3.md) | InitialAccess | - |
| [Cisco Duo - Delete actions](../content/c6386cad-2dd2-436c-a938-bc66dda6c01a.md) | Impact | - |
| [Cisco Duo - Deleted users](../content/5d0b00fd-1dc0-4e1b-ae09-5cec3b4fadf6.md) | Impact | - |
| [Cisco Duo - Devices with unsecure settings](../content/c308e737-e620-4c89-ab1e-a186e901b087.md) | InitialAccess | - |
| [Cisco Duo - Devices with vulnerable OS](../content/9de62fee-f601-43c9-8757-2098e59fedeb.md) | InitialAccess | - |
| [Cisco Duo - Fraud authentications](../content/b8f46142-cebc-435d-9943-2ed74e1eaba7.md) | InitialAccess | - |
| [Cisco Duo - New users](../content/72c81132-bc09-4a2f-9c32-02e2e9ee7978.md) | InitialAccess, Persistence | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CiscoDuo](../content/ciscoduo-ciscoduosecurity.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CiscoDuo](../content/a4ce5d43-3bca-4eb4-8302-b868e45c6dc4.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                     |
|-------------|--------------------------------|--------------------------------------------------------|
|  3.0.4      |  26-09-2025                    | Updated support **Microsoft** to **Partner**                   |
|  3.0.3      |  02-09-2025                    | Added support for new log endpoints                   |
|  3.0.2      |  16-04-2024                    | Added Deploy to Azure Goverment button for Government portal in **Dataconnector**<br/> Fixed **Parser** issue for Parser name and ParentID mismatch |
|  3.0.1      |  30-01-2024                    | Updated solution to fix **parser** query                   |
|  3.0.0      |  08-01-2024                    | Updated solution to fix Api version of saved searches  |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
