# SenservaPro

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/SenservaPro/Data Connectors/Logo/SenservaPro_logo.svg" alt="SenservaPro Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [SenservaPro](https://www.senserva.com/) solution provides a viewing experience for your SenservaPro scanning logs. View dashboards of your data, use queries to hunt & explore, and create custom alerts.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Senserva |
| **Support Tier** | Partner |
| **Support Link** | [https://www.senserva.com/contact/](https://www.senserva.com/contact/) |
| **Categories** | domains |
| **Version** | 2.0.2 |
| **Author** | Senserva - support@senserva.com |
| **First Published** | 2022-06-01 |
| **Solution Folder** | [SenservaPro](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SenservaPro) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [SenservaPro (Preview)](../connectors/senservapro.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SenservaPro_CL`](../tables/senservapro-cl.md) | [SenservaPro (Preview)](../connectors/senservapro.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **33 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 15 |
| Hunting Queries | 15 |
| Workbooks | 3 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Azure Secure Score Self Service Password Reset](../content/senservapro-azure-secure-score-self-service-password-reset-114120b2-aaa0-4c4e-bdf1-2ee178465047-2811587a.md) | High | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score MFA registration V2](../content/senservapro-azure-secure-score-mfa-registration-v2-8eb2b20a-bf64-4dcc-9d98-1ad559502c00-f958230b.md) | Medium | CredentialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score PW age policy new](../content/senservapro-azure-secure-score-pw-age-policy-new-88c9a5e0-31ec-490b-82e5-a286d9b99a67-a388e7f8.md) | Medium | CredentialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score admin MFA](../content/senservapro-azure-secure-score-admin-mfa-9a15c3dd-f72b-49a4-bcb7-94406395661e-9b276f73.md) | High | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score block legacy authentication](../content/senservapro-azure-secure-score-block-legacy-authentication-c27bb559-28c5-4924-a7da-3bf04cd02c8f-e58244d1.md) | High | CredentialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score one admin](../content/senservapro-azure-secure-score-one-admin-f539b2a7-d9e7-4438-aa20-893bc61df130-05fff552.md) | High | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score role overlap](../content/senservapro-azure-secure-score-role-overlap-8e6d9a66-f1b0-463d-ba90-11a5aec0e15a-1aa1a218.md) | Medium | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score sign in risk policy](../content/senservapro-azure-secure-score-sign-in-risk-policy-5231d757-a5b5-4ca7-a91b-aa3702970e02-315f1412.md) | Medium | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score user risk policy](../content/senservapro-azure-secure-score-user-risk-policy-1c07a4cb-e31b-4917-bd2a-3572e42f602c-5f0430ce.md) | Medium | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Non-admin guest](../content/senservapro-non-admin-guest-9b6558c4-ba23-40ac-b95f-42f8a29a3b35-5eee1e43.md) | Low | InitialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [SenservaPro AD Applications Not Using Client Credentials](../content/senservapro-senservapro-ad-applications-not-using-client-credentials-56910d7b-aae7-452c-a3ed-89f72ef59234-26525cfd.md) | Medium | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Service principal not using client credentials](../content/senservapro-service-principal-not-using-client-credentials-d308318a-b298-4e57-82bd-74ae33c4a539-f716ee22.md) | High | InitialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Stale last password change](../content/senservapro-stale-last-password-change-645a8724-5c7e-4a1f-81cb-c33aff1439eb-b265e3ab.md) | Low | InitialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Third party integrated apps](../content/senservapro-third-party-integrated-apps-bfa7ee22-b5a9-42c8-bd50-2e95885640bb-958898cb.md) | High | Exfiltration | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [UserAccountDisabled](../content/senservapro-useraccountdisabled-24e0132f-61d1-41bd-9393-06136d1039c7-b567bfdb.md) | Medium | InitialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Application not using client credentials](../content/senservapro-application-not-using-client-credentials-1bdb9a37-dc72-4c5a-a222-08443865dc0d-f2f6e002.md) | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure Secure Score Self Service Password Reset](../content/senservapro-azure-secure-score-self-service-password-reset-ef37b9a3-c792-4f2f-8a4e-f8416de43455-277440fa.md) | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score MFA registration V2](../content/senservapro-azure-secure-score-mfa-registration-v2-6111b528-da13-4fa0-a2e6-4cb32d943f58-8dfa27a2.md) | CredentialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score PW age policy new](../content/senservapro-azure-secure-score-pw-age-policy-new-54f23b1d-f8d3-46c5-85f9-24126446a688-e25066c2.md) | CredentialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score admin MFA V2](../content/senservapro-azure-secure-score-admin-mfa-v2-95226772-981e-41ab-80e3-5b6a6f1d26d9-f8783eb7.md) | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score block legacy authentication](../content/senservapro-azure-secure-score-block-legacy-authentication-e7bdd9f9-cb83-46e3-9a8e-f14198d3c530-527c3ac2.md) | CredentialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score integrated apps](../content/senservapro-azure-secure-score-integrated-apps-0810700d-f0e9-44ae-874f-45985921efde-d72185b9.md) | Exfiltration | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score one admin](../content/senservapro-azure-secure-score-one-admin-27982ecb-493e-4dae-bb21-6f0b77b25526-9982dae3.md) | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score role overlap](../content/senservapro-azure-secure-score-role-overlap-ad9cddb0-6daa-4616-a397-b9df7d6082f4-a982060c.md) | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score sign in risk policy](../content/senservapro-azure-secure-score-sign-in-risk-policy-28c19364-ef24-4798-a656-d9c798559d98-51fc45ce.md) | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score user risk policy](../content/senservapro-azure-secure-score-user-risk-policy-b91ac293-3855-4ab6-a9ee-e107930765d7-21af042b.md) | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Non-admin guest](../content/senservapro-non-admin-guest-9b6558c4-ba23-40ac-b95f-42f8a29a3b35-476a039b.md) | InitialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Service principal not using client credentials](../content/senservapro-service-principal-not-using-client-credentials-b604620b-0d87-4ffd-be2e-7e40e81ce559-da428640.md) | InitialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Stale last password change](../content/senservapro-stale-last-password-change-29aebd0f-25ae-4d81-b0c2-2fb7f45f0340-2d9be67a.md) | InitialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [UserAccountDisabled](../content/senservapro-useraccountdisabled-4ca722e6-b165-42cd-8eb2-88304a0fc3da-d628ecc7.md) | InitialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SenservaProAnalyticsWorkbook](../content/senservapro-senservaproanalyticsworkbook-aaafb530.md) | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [SenservaProMultipleWorkspaceWorkbook](../content/senservapro-senservapromultipleworkspaceworkbook-de5c1809.md) | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [SenservaProSecureScoreMultiTenantWorkbook](../content/senservapro-senservaprosecurescoremultitenantworkbook-8e66feb9.md) | [`SenservaPro_CL`](../tables/senservapro-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                       |
|-------------|--------------------------------|--------------------------------------------------------------------------|
| 3.0.0       | 11-11-2023                     | Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

