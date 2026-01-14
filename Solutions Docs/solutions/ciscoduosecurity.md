# CiscoDuoSecurity

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cisco-logo-72px.svg" alt="CiscoDuoSecurity Logo" width="75" height="75">

The [Cisco Duo Security](https://duo.com/) solution allows you to ingest [authentication logs](https://duo.com/docs/adminapi#authentication-logs), [administrator logs](https://duo.com/docs/adminapi#administrator-logs), [telephony logs](https://duo.com/docs/adminapi#telephony-logs), [offline enrolment logs](https://duo.com/docs/adminapi#offline-enrollment-logs) and [Trust Monitor events](https://duo.com/docs/adminapi#trust-monitor) into Microsoft Sentinel using the Cisco Duo Admin API. Refer to [API documentation](https://duo.com/docs/adminapi) for more information.
  
  **Underlying Microsoft Technologies used:** 

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

  a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

 

  b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)



## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cisco Systems |
| **Support Tier** | Partner |
| **Support Link** | [https://duo.com/support](https://duo.com/support) |
| **Categories** | domains |
| **Version** | 3.0.4 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-01-07 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoDuoSecurity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoDuoSecurity) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cisco Duo Security](../connectors/ciscoduosecurity.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) | [Cisco Duo Security](../connectors/ciscoduosecurity.md) | Analytics, Hunting, Workbooks |

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
| [Cisco Duo - AD sync failed](../content/ciscoduosecurity-cisco-duo-ad-sync-failed-398dd1cd-3251-49d8-b927-5b93bae4a094-3833d11f.md) | Medium | Impact | [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) |
| [Cisco Duo - Admin password reset](../content/ciscoduosecurity-cisco-duo-admin-password-reset-413e49a5-b107-4698-8428-46b89308bd22-f14125a1.md) | High | Persistence | [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) |
| [Cisco Duo - Admin user created](../content/ciscoduosecurity-cisco-duo-admin-user-created-0724cb01-4866-483d-a149-eb400fe1daa8-d441e737.md) | Medium | Persistence, PrivilegeEscalation | [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) |
| [Cisco Duo - Admin user deleted](../content/ciscoduosecurity-cisco-duo-admin-user-deleted-6424c623-31a5-4892-be33-452586fd4075-2896e5e9.md) | Medium | Impact | [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) |
| [Cisco Duo - Authentication device new location](../content/ciscoduosecurity-cisco-duo-authentication-device-new-location-01df3abe-3dc7-40e2-8aa7-f00b402df6f0-135f49d0.md) | Medium | InitialAccess | [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) |
| [Cisco Duo - Multiple admin 2FA failures](../content/ciscoduosecurity-cisco-duo-multiple-admin-2fa-failures-e46c5588-e643-4a60-a008-5ba9a4c84328-28722368.md) | High | InitialAccess | [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) |
| [Cisco Duo - Multiple user login failures](../content/ciscoduosecurity-cisco-duo-multiple-user-login-failures-034f62b6-df51-49f3-831f-1e4cfd3c40d2-1fac9a53.md) | High | InitialAccess | [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) |
| [Cisco Duo - Multiple users deleted](../content/ciscoduosecurity-cisco-duo-multiple-users-deleted-6e4f9031-91d3-4fa1-8baf-624935f04ad8-9c38fc40.md) | Medium | Impact | [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) |
| [Cisco Duo - New access device](../content/ciscoduosecurity-cisco-duo-new-access-device-f05271b6-26a5-49cf-ad73-4a202fba6eb6-3865b761.md) | Medium | InitialAccess | [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) |
| [Cisco Duo - Unexpected authentication factor](../content/ciscoduosecurity-cisco-duo-unexpected-authentication-factor-16c91a2c-17ad-4985-a9ad-4a4f1cb11830-872c74c5.md) | Medium | InitialAccess | [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Cisco Duo - Admin failure authentications](../content/ciscoduosecurity-cisco-duo-admin-failure-authentications-421bbeed-ad5b-4acd-9f0b-6b609da33914-7964a3f0.md) | InitialAccess | [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) |
| [Cisco Duo - Admin failure authentications](../content/ciscoduosecurity-cisco-duo-admin-failure-authentications-385b0938-3922-48ab-a57a-cb8650ab71a3-c63cf47e.md) | InitialAccess | [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) |
| [Cisco Duo - Authentication error reasons](../content/ciscoduosecurity-cisco-duo-authentication-error-reasons-5653900e-4b21-408d-84da-e4db3da891bb-1505cec4.md) | InitialAccess | [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) |
| [Cisco Duo - Authentication errors](../content/ciscoduosecurity-cisco-duo-authentication-errors-b8c43652-1b79-4b18-a348-a719bafad6d3-cbc3376b.md) | InitialAccess | [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) |
| [Cisco Duo - Delete actions](../content/ciscoduosecurity-cisco-duo-delete-actions-c6386cad-2dd2-436c-a938-bc66dda6c01a-bde0b753.md) | Impact | [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) |
| [Cisco Duo - Deleted users](../content/ciscoduosecurity-cisco-duo-deleted-users-5d0b00fd-1dc0-4e1b-ae09-5cec3b4fadf6-3ae6a644.md) | Impact | [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) |
| [Cisco Duo - Devices with unsecure settings](../content/ciscoduosecurity-cisco-duo-devices-with-unsecure-settings-c308e737-e620-4c89-ab1e-a186e901b087-1c514be4.md) | InitialAccess | [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) |
| [Cisco Duo - Devices with vulnerable OS](../content/ciscoduosecurity-cisco-duo-devices-with-vulnerable-os-9de62fee-f601-43c9-8757-2098e59fedeb-7e9fbaa0.md) | InitialAccess | [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) |
| [Cisco Duo - Fraud authentications](../content/ciscoduosecurity-cisco-duo-fraud-authentications-b8f46142-cebc-435d-9943-2ed74e1eaba7-32d790d4.md) | InitialAccess | [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) |
| [Cisco Duo - New users](../content/ciscoduosecurity-cisco-duo-new-users-72c81132-bc09-4a2f-9c32-02e2e9ee7978-ebad122b.md) | InitialAccess, Persistence | [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CiscoDuo](../content/ciscoduosecurity-ciscoduo-c9e00bc9.md) | [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CiscoDuo](../content/ciscoduosecurity-ciscoduo-a4ce5d43-3bca-4eb4-8302-b868e45c6dc4-60f3c122.md) | - | [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                     |
|-------------|--------------------------------|--------------------------------------------------------|
|  3.0.4      |  26-09-2025                    | Updated support **Microsoft** to **Partner**                   |
|  3.0.3      |  02-09-2025                    | Added support for new log endpoints                   |
|  3.0.2      |  16-04-2024                    | Added Deploy to Azure Goverment button for Government portal in **Dataconnector**<br/> Fixed **Parser** issue for Parser name and ParentID mismatch |
|  3.0.1      |  30-01-2024                    | Updated solution to fix **parser** query                   |
|  3.0.0      |  08-01-2024                    | Updated solution to fix Api version of saved searches  |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

