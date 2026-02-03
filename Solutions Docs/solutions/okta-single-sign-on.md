# Okta Single Sign-On

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/okta_logo.svg" alt="Okta Single Sign-On Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Okta Single Sign-On (SSO)](https://www.okta.com/products/single-sign-on) solution for Microsoft Sentinel provides the capability to ingest [audit and event logs](https://www.okta.com/integrate/documentation/isv-syslog-references/) into Microsoft Sentinel using the Okta API.
  
  **Underlying Microsoft Technologies used:** 

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

  a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)



  b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)



 c. [Codeless Connector Platform (CCP)](https://docs.microsoft.com/azure/sentinel/create-codeless-connector?tabs=deploy-via-arm-template%2Cconnect-via-the-azure-portal)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.1.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-03-24 |
| **Solution Folder** | [Okta Single Sign-On](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Okta%20Single%20Sign-On) |

## Data Connectors

This solution provides **2 data connector(s)** (plus 2 discovered⚠️):

- [Okta Single Sign-On](../connectors/oktasso.md)
- [Okta Single Sign-On (Polling CCP)](../connectors/oktasso-polling.md) ⚠️
- [Okta Single Sign-On](../connectors/oktassov2.md)
- [Okta Single Sign-On (using Azure Functions)](../connectors/oktasinglesignon-usingazurefunctions.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`OktaNativePoller_CL`](../tables/oktanativepoller-cl.md) | [Okta Single Sign-On (Polling CCP)](../connectors/oktasso-polling.md) | - |
| [`OktaV2_CL`](../tables/oktav2-cl.md) | [Okta Single Sign-On](../connectors/oktassov2.md), [Okta Single Sign-On (using Azure Functions)](../connectors/oktasinglesignon-usingazurefunctions.md) | Analytics, Hunting, Workbooks |
| [`Okta_CL`](../tables/okta-cl.md) | [Okta Single Sign-On](../connectors/oktassov2.md), [Okta Single Sign-On](../connectors/oktasso.md), [Okta Single Sign-On (using Azure Functions)](../connectors/oktasinglesignon-usingazurefunctions.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **24 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 10 |
| Analytic Rules | 9 |
| Playbooks | 3 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Device Registration from Malicious IP](../content/okta-single-sign-on-device-registration-from-malicious-ip-e36c6bd6-f86a-4282-93a5-b4a1b48dd849-7384eb46.md) | High | Persistence | [`OktaV2_CL`](../tables/oktav2-cl.md)<br>[`Okta_CL`](../tables/okta-cl.md) |
| [Failed Logins from Unknown or Invalid User](../content/okta-single-sign-on-failed-logins-from-unknown-or-invalid-user-884be6e7-e568-418e-9c12-89229865ffde-0b05185e.md) | Medium | CredentialAccess | [`OktaV2_CL`](../tables/oktav2-cl.md)<br>[`Okta_CL`](../tables/okta-cl.md) |
| [High-Risk Admin Activity](../content/okta-single-sign-on-high-risk-admin-activity-9f82a735-ae43-4c03-afb4-d5d153e1ace1-497c8fc0.md) | Medium | Persistence | [`OktaV2_CL`](../tables/oktav2-cl.md)<br>[`Okta_CL`](../tables/okta-cl.md) |
| [MFA Fatigue (OKTA)](../content/okta-single-sign-on-mfa-fatigue-okta-c2697b81-7fe9-4f57-ba1d-de46c6f91f9c-44b7ecc7.md) | Medium | CredentialAccess | [`OktaV2_CL`](../tables/oktav2-cl.md)<br>[`Okta_CL`](../tables/okta-cl.md) |
| [New Device/Location sign-in along with critical operation](../content/okta-single-sign-on-new-device-location-sign-in-along-with-critical-operation-41e843a8-92e7-444d-8d72-638f1145d1e1-06c1784b.md) | Medium | InitialAccess, Persistence | [`OktaV2_CL`](../tables/oktav2-cl.md)<br>[`Okta_CL`](../tables/okta-cl.md) |
| [Okta Fast Pass phishing Detection](../content/okta-single-sign-on-okta-fast-pass-phishing-detection-78d2b06c-8dc0-40e1-91c8-66d916c186f3-fefae1c8.md) | Medium | InitialAccess | [`OktaV2_CL`](../tables/oktav2-cl.md)<br>[`Okta_CL`](../tables/okta-cl.md) |
| [Potential Password Spray Attack](../content/okta-single-sign-on-potential-password-spray-attack-e27dd7e5-4367-4c40-a2b7-fcd7e7a8a508-8d39fbf2.md) | Medium | CredentialAccess | [`OktaV2_CL`](../tables/oktav2-cl.md)<br>[`Okta_CL`](../tables/okta-cl.md) |
| [User Login from Different Countries within 3 hours](../content/okta-single-sign-on-user-login-from-different-countries-within-3-hours-2954d424-f786-4677-9ffc-c24c44c6e7d5-965998c8.md) | High | InitialAccess | [`OktaV2_CL`](../tables/oktav2-cl.md)<br>[`Okta_CL`](../tables/okta-cl.md) |
| [User Session Impersonation(Okta)](../content/okta-single-sign-on-user-session-impersonation-okta-35846296-4052-4de2-8098-beb6bb5f2203-cf2f2ba3.md) | Medium | PrivilegeEscalation | [`Okta_CL`](../tables/okta-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Admin privilege granted (Okta)](../content/okta-single-sign-on-admin-privilege-granted-okta-5309ea6b-463c-4449-a3c4-2fc8ee0080ee-23fe94ba.md) | Persistence | [`OktaV2_CL`](../tables/oktav2-cl.md)<br>[`Okta_CL`](../tables/okta-cl.md) |
| [Create API Token (Okta)](../content/okta-single-sign-on-create-api-token-okta-c5134bac-044d-447a-a260-d1d439653ae7-0e45b431.md) | PrivilegeEscalation | [`OktaV2_CL`](../tables/oktav2-cl.md)<br>[`Okta_CL`](../tables/okta-cl.md) |
| [Initiate impersonation session (Okta)](../content/okta-single-sign-on-initiate-impersonation-session-okta-96fb9b37-e2b7-45f6-9b2a-cb9cdfd2b0fc-8f019c66.md) | InitialAccess | [`OktaV2_CL`](../tables/oktav2-cl.md)<br>[`Okta_CL`](../tables/okta-cl.md) |
| [Logins originating from VPS Providers](../content/okta-single-sign-on-logins-originating-from-vps-providers-f262fc3a-0acc-4c8b-9a73-fdc09f55fff2-61a9231a.md) | InitialAccess | [`OktaV2_CL`](../tables/oktav2-cl.md)<br>[`Okta_CL`](../tables/okta-cl.md) |
| [New device registration from unfamiliar location](../content/okta-single-sign-on-new-device-registration-from-unfamiliar-location-4355f601-1421-4ac4-b2ce-88f0859cc101-e402fdf2.md) | Persistence | [`OktaV2_CL`](../tables/oktav2-cl.md)<br>[`Okta_CL`](../tables/okta-cl.md) |
| [Okta Login from multiple locations](../content/okta-single-sign-on-okta-login-from-multiple-locations-37381608-bcd7-46bc-954e-1fd418023c26-5c569b3c.md) | CredentialAccess | [`OktaV2_CL`](../tables/oktav2-cl.md)<br>[`Okta_CL`](../tables/okta-cl.md) |
| [Okta login attempts using Legacy Auth](../content/okta-single-sign-on-okta-login-attempts-using-legacy-auth-6a9199ec-bc32-4935-9f82-4aa848edb3fc-6f88bf06.md) | CredentialAccess | [`OktaV2_CL`](../tables/oktav2-cl.md)<br>[`Okta_CL`](../tables/okta-cl.md) |
| [Rare MFA Operations (Okta)](../content/okta-single-sign-on-rare-mfa-operations-okta-18667b4a-18e5-4982-ba75-92ace62bc79c-204f5119.md) | Persistence | [`OktaV2_CL`](../tables/oktav2-cl.md)<br>[`Okta_CL`](../tables/okta-cl.md) |
| [Sign-ins from Nord VPN Providers](../content/okta-single-sign-on-sign-ins-from-nord-vpn-providers-708c33ec-22a2-4739-b248-c14919500cdd-3c19da48.md) | InitialAccess | [`OktaV2_CL`](../tables/oktav2-cl.md)<br>[`Okta_CL`](../tables/okta-cl.md) |
| [User password reset(Okta)](../content/okta-single-sign-on-user-password-reset-okta-38da2aa3-4778-4d88-9178-3c5c14758b05-7f425c2c.md) | Persistence | [`OktaV2_CL`](../tables/oktav2-cl.md)<br>[`Okta_CL`](../tables/okta-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [OktaSingleSignOn](../content/okta-single-sign-on-oktasinglesignon-21c9f54c.md) | [`OktaV2_CL`](../tables/oktav2-cl.md)<br>[`Okta_CL`](../tables/okta-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Prompt Okta user](../content/okta-single-sign-on-prompt-okta-user-beec822e.md) | This playbook uses the OKTA connector to prompt the risky user on Teams. User is asked action was ta... | - |
| [Response on Okta user from Teams](../content/okta-single-sign-on-response-on-okta-user-from-teams-0dfd8bc2.md) | This playbooks sends an adaptive card to the SOC Teams channel with information about the Okta user ... | - |
| [User enrichment - Okta](../content/okta-single-sign-on-user-enrichment-okta-3d8dea7d.md) | This playbook will collect user information from Okta and post a report on the incident. | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [OktaSSO](../content/okta-single-sign-on-oktasso-ee884976-418c-472d-8a91-3533f4aa15d0-2d6140fb.md) | - | [`OktaV2_CL`](../tables/oktav2-cl.md) *(read)*<br>[`Okta_CL`](../tables/okta-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                            |
|-------------|--------------------------------|---------------------------------------------------------------|
| 3.1.4       | 13-01-2026                     | Updated non-functional link from MFA Fatigue (OKTA) **Analytic rule** |
| 3.1.3       | 05-02-2025                     | Version Update |
| 3.1.2       | 06-01-2025                     | Removing Custom Entity mappings from **Analytic Rule**                         |
| 3.1.1       | 08-11-2024                     | Fixed CCP **Data Connector** connection bug                          |
| 3.1.0       | 27-11-2024                     | Fixed Solution version in Maintemplate and resolved ARM template error                           |
| 3.0.10      | 08-11-2024                     | Updated **Parser** to fix the schema                          |
| 3.0.9       | 17-10-2024                     | Updated package to fix connectivity of CCP connector |
| 3.0.8       | 14-08-2024                     | Data Connector Globally Available         |
| 3.0.7       | 25-04-2024                     | Repackaged for parser issue with old names       |
| 3.0.6       | 17-04-2024                     | Repackaged solution for parser fix   |
| 3.0.5       | 08-04-2024                     | Added Azure Deploy button for government portal deployments   |
| 3.0.4       | 18-03-2024                     | Updated description in data file, data connector and added logo for ccp data connector                    |
| 3.0.3       | 08-03-2024                     | Updated ccp with domainname in dcr, tables, name change in definition and poller                     |
| 3.0.2       | 20-02-2024                     | Updated _solutionVersion to resource specific version and repackage                    |
| 3.0.1       | 24-01-2024                     | New **Analytic Rule** added (UserSessionImpersonation.yaml)  |
| 3.0.0       | 10-10-2023                     | Manual deployment instructions updated for **Data Connector** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

