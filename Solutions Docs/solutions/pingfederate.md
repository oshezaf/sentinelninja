# PingFederate

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-06-01 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PingFederate](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PingFederate) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [[Deprecated] PingFederate via Legacy Agent](../connectors/pingfederate.md)
- [[Deprecated] PingFederate via AMA](../connectors/pingfederateama.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] PingFederate via AMA](../connectors/pingfederateama.md), [[Deprecated] PingFederate via Legacy Agent](../connectors/pingfederate.md) | Analytics, Hunting, Workbooks |

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
| [Ping Federate - Abnormal password reset attempts](../content/e45a7334-2cb4-4690-8156-f02cac73d584.md) | High | CredentialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Abnormal password resets for user](../content/6145efdc-4724-42a6-9756-5bd1ba33982e.md) | High | InitialAccess, Persistence, PrivilegeEscalation | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Authentication from new IP.](../content/30583ed4-d13c-43b8-baf2-d75fbe727210.md) | Low | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Forbidden country](../content/14042f74-e50b-4c21-8a01-0faf4915ada4.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - New user SSO success login](../content/05282c91-7aaf-4d76-9a19-6dc582e6a411.md) | Low | InitialAccess, Persistence | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - OAuth old version](../content/85f70197-4865-4635-a4b2-a9c57e8fea1b.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Password reset request from unexpected source IP address..](../content/2d201d21-77b4-4d97-95f3-26b5c6bde09f.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - SAML old version](../content/fddd3840-acd2-41ed-94d9-1474b0a7c8a6.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Unexpected authentication URL.](../content/9578ef7f-cbb4-4e9a-bd26-37c15c53b413.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Unexpected country for user](../content/64e65105-c4fc-4c28-a4e9-bb1a3ce7652d.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Unusual mail domain.](../content/dc79de7d-2590-4852-95fb-f8e02b34f4da.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Ping Federate - Authentication URLs](../content/e309c774-8f31-41c3-b270-7efc934de96a.md) | CredentialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Authentication from unusual sources](../content/0bce5bd0-cc19-43de-a5ab-47dbc5c6c600.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Failed Authentication](../content/b04e339c-942d-439a-bc27-dbee2961927c.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - New users](../content/a52d874d-dc45-438f-b395-92d1a3ebcf76.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Password reset requests](../content/31bb34b4-26f7-4b83-a667-d596e05eb28a.md) | InitialAccess, Persistence | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Rare source IP addresses](../content/86c8a38a-96bd-445d-8d12-e35b7290832b.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Requests from unusual countries](../content/378e53cd-c28a-46d7-8160-1920240bf09e.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - SAML subjects](../content/b0a25cd9-08f4-470d-bd04-47da22810b5f.md) | CredentialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Top source IP addresses](../content/ce92624d-ae52-4b8e-ba36-3e5bdb6a793a.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Ping Federate - Users recently reseted password](../content/6698f022-adf4-48a3-a8da-a4052ac999b4.md) | InitialAccess, Persistence | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [PingFederate](../content/pingfederate-pingfederate.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [PingFederateEvent](../content/9d4e2cac-3380-4549-a87d-84b4bdaa5538.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.2       | 22-11-2024                     |    Removed Deprecated **Data Connectors**                           |
| 3.0.1 	  | 12-07-2024 					   |    Deprecated **Data Connector** 									|
| 3.0.0       | 04-09-2023                     |	Addition of new PingFederate AMA **Data Connector**             |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
