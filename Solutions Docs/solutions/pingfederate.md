# PingFederate

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/PingFederate/Data%20Connectors/Logo/PingIdentity.svg" alt="PingFederate Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [PingFederate](https://www.pingidentity.com/en/pingone/pingfederate.html) solution provides the capability to ingest [PingFederate](https://docs.pingidentity.com/bundle/pingfederate-102/page/lly1564002980532.html) events into Microsoft Sentinel. Refer to [PingFederate documentation](https://docs.pingidentity.com/bundle/pingfederate-102/page/tle1564002955874.html) for more information.

This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors were deprecated on **Aug 31, 2024**.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-06-01 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PingFederate](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PingFederate) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution has **2 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] PingFederate via Legacy Agent](../connectors/pingfederate.md) ⚠️
- [[Deprecated] PingFederate via AMA](../connectors/pingfederateama.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] PingFederate via AMA](../connectors/pingfederateama.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **23 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 11 |
| Hunting Queries | 10 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Ping Federate - Abnormal password reset attempts](../content/pingfederate-ping-federate-abnormal-password-reset-attempts-e45a7334-2cb4-4690-8156-f02cac73d584-66f0ba30.md) | High | CredentialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Abnormal password resets for user](../content/pingfederate-ping-federate-abnormal-password-resets-for-user-6145efdc-4724-42a6-9756-5bd1ba33982e-032d12ff.md) | High | InitialAccess, Persistence, PrivilegeEscalation | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Authentication from new IP.](../content/pingfederate-ping-federate-authentication-from-new-ip.-30583ed4-d13c-43b8-baf2-d75fbe727210-c7473a0b.md) | Low | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Forbidden country](../content/pingfederate-ping-federate-forbidden-country-14042f74-e50b-4c21-8a01-0faf4915ada4-ba3e6874.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - New user SSO success login](../content/pingfederate-ping-federate-new-user-sso-success-login-05282c91-7aaf-4d76-9a19-6dc582e6a411-ac2468e0.md) | Low | InitialAccess, Persistence | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - OAuth old version](../content/pingfederate-ping-federate-oauth-old-version-85f70197-4865-4635-a4b2-a9c57e8fea1b-a844b284.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Password reset request from unexpected source IP address..](../content/pingfederate-ping-federate-password-reset-request-from-unexpected-source-ip-address..-2d201d21-77b4-4d97-95f3-26b5c6bde09f-1f0eb2b3.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - SAML old version](../content/pingfederate-ping-federate-saml-old-version-fddd3840-acd2-41ed-94d9-1474b0a7c8a6-f0a3cb29.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Unexpected authentication URL.](../content/pingfederate-ping-federate-unexpected-authentication-url.-9578ef7f-cbb4-4e9a-bd26-37c15c53b413-2e62ddab.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Unexpected country for user](../content/pingfederate-ping-federate-unexpected-country-for-user-64e65105-c4fc-4c28-a4e9-bb1a3ce7652d-6d3dc524.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Unusual mail domain.](../content/pingfederate-ping-federate-unusual-mail-domain.-dc79de7d-2590-4852-95fb-f8e02b34f4da-2fa89f0f.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Ping Federate - Authentication URLs](../content/pingfederate-ping-federate-authentication-urls-e309c774-8f31-41c3-b270-7efc934de96a-d335e82c.md) | CredentialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Authentication from unusual sources](../content/pingfederate-ping-federate-authentication-from-unusual-sources-0bce5bd0-cc19-43de-a5ab-47dbc5c6c600-f33ddf03.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Failed Authentication](../content/pingfederate-ping-federate-failed-authentication-b04e339c-942d-439a-bc27-dbee2961927c-cd5d855c.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - New users](../content/pingfederate-ping-federate-new-users-a52d874d-dc45-438f-b395-92d1a3ebcf76-851a9fee.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Password reset requests](../content/pingfederate-ping-federate-password-reset-requests-31bb34b4-26f7-4b83-a667-d596e05eb28a-eb5c8e99.md) | InitialAccess, Persistence | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Rare source IP addresses](../content/pingfederate-ping-federate-rare-source-ip-addresses-86c8a38a-96bd-445d-8d12-e35b7290832b-146697e7.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Requests from unusual countries](../content/pingfederate-ping-federate-requests-from-unusual-countries-378e53cd-c28a-46d7-8160-1920240bf09e-936e5397.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - SAML subjects](../content/pingfederate-ping-federate-saml-subjects-b0a25cd9-08f4-470d-bd04-47da22810b5f-7ae3da54.md) | CredentialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Top source IP addresses](../content/pingfederate-ping-federate-top-source-ip-addresses-ce92624d-ae52-4b8e-ba36-3e5bdb6a793a-39d9e3c4.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Users recently reseted password](../content/pingfederate-ping-federate-users-recently-reseted-password-6698f022-adf4-48a3-a8da-a4052ac999b4-d90c92a1.md) | InitialAccess, Persistence | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [PingFederate](../content/pingfederate-pingfederate-c26986d3.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [PingFederateEvent](../content/pingfederate-pingfederateevent-9d4e2cac-3380-4549-a87d-84b4bdaa5538-f4c5f534.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.2       | 22-11-2024                     |    Removed Deprecated **Data Connectors**                           |
| 3.0.1 	  | 12-07-2024 					   |    Deprecated **Data Connector** 									|
| 3.0.0       | 04-09-2023                     |	Addition of new PingFederate AMA **Data Connector**             |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

