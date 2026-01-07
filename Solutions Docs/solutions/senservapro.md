# SenservaPro

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Senserva |
| **Support Tier** | Partner |
| **Support Link** | [https://www.senserva.com/contact/](https://www.senserva.com/contact/) |
| **Categories** | domains |
| **First Published** | 2022-06-01 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SenservaPro](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SenservaPro) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [SenservaPro (Preview)](../connectors/senservapro.md)

## Tables Reference

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
| [Azure Secure Score Self Service Password Reset](../content/114120b2-aaa0-4c4e-bdf1-2ee178465047.md) | High | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score MFA registration V2](../content/8eb2b20a-bf64-4dcc-9d98-1ad559502c00.md) | Medium | CredentialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score PW age policy new](../content/88c9a5e0-31ec-490b-82e5-a286d9b99a67.md) | Medium | CredentialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score admin MFA](../content/9a15c3dd-f72b-49a4-bcb7-94406395661e.md) | High | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score block legacy authentication](../content/c27bb559-28c5-4924-a7da-3bf04cd02c8f.md) | High | CredentialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score one admin](../content/f539b2a7-d9e7-4438-aa20-893bc61df130.md) | High | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score role overlap](../content/8e6d9a66-f1b0-463d-ba90-11a5aec0e15a.md) | Medium | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score sign in risk policy](../content/5231d757-a5b5-4ca7-a91b-aa3702970e02.md) | Medium | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score user risk policy](../content/1c07a4cb-e31b-4917-bd2a-3572e42f602c.md) | Medium | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Non-admin guest](../content/9b6558c4-ba23-40ac-b95f-42f8a29a3b35.md) | Low | InitialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [SenservaPro AD Applications Not Using Client Credentials](../content/56910d7b-aae7-452c-a3ed-89f72ef59234.md) | Medium | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Service principal not using client credentials](../content/d308318a-b298-4e57-82bd-74ae33c4a539.md) | High | InitialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Stale last password change](../content/645a8724-5c7e-4a1f-81cb-c33aff1439eb.md) | Low | InitialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Third party integrated apps](../content/bfa7ee22-b5a9-42c8-bd50-2e95885640bb.md) | High | Exfiltration | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [UserAccountDisabled](../content/24e0132f-61d1-41bd-9393-06136d1039c7.md) | Medium | InitialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Application not using client credentials](../content/1bdb9a37-dc72-4c5a-a222-08443865dc0d.md) | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure Secure Score Self Service Password Reset](../content/ef37b9a3-c792-4f2f-8a4e-f8416de43455.md) | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score MFA registration V2](../content/6111b528-da13-4fa0-a2e6-4cb32d943f58.md) | CredentialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score PW age policy new](../content/54f23b1d-f8d3-46c5-85f9-24126446a688.md) | CredentialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score admin MFA V2](../content/95226772-981e-41ab-80e3-5b6a6f1d26d9.md) | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score block legacy authentication](../content/e7bdd9f9-cb83-46e3-9a8e-f14198d3c530.md) | CredentialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score integrated apps](../content/0810700d-f0e9-44ae-874f-45985921efde.md) | Exfiltration | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score one admin](../content/27982ecb-493e-4dae-bb21-6f0b77b25526.md) | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score role overlap](../content/ad9cddb0-6daa-4616-a397-b9df7d6082f4.md) | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score sign in risk policy](../content/28c19364-ef24-4798-a656-d9c798559d98.md) | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Azure secure score user risk policy](../content/b91ac293-3855-4ab6-a9ee-e107930765d7.md) | Impact | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Non-admin guest](../content/9b6558c4-ba23-40ac-b95f-42f8a29a3b35.md) | InitialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Service principal not using client credentials](../content/b604620b-0d87-4ffd-be2e-7e40e81ce559.md) | InitialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [Stale last password change](../content/29aebd0f-25ae-4d81-b0c2-2fb7f45f0340.md) | InitialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [UserAccountDisabled](../content/4ca722e6-b165-42cd-8eb2-88304a0fc3da.md) | InitialAccess | [`SenservaPro_CL`](../tables/senservapro-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SenservaProAnalyticsWorkbook](../content/senservaproanalyticsworkbook-senservapro.md) | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [SenservaProMultipleWorkspaceWorkbook](../content/senservapromultipleworkspaceworkbook-senservapro.md) | [`SenservaPro_CL`](../tables/senservapro-cl.md) |
| [SenservaProSecureScoreMultiTenantWorkbook](../content/senservaprosecurescoremultitenantworkbook-senservapro.md) | [`SenservaPro_CL`](../tables/senservapro-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                       |
|-------------|--------------------------------|--------------------------------------------------------------------------|
| 3.0.0       | 11-11-2023                     | Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID. |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
