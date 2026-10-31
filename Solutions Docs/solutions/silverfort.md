# Silverfort for Microsoft Sentinel

*Solution: Silverfort*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/silverfort-logo.svg" alt="Silverfort Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Silverfort |
| **Support Tier** | Partner |
| **Support Link** | [https://www.silverfort.com/customer-success/#support](https://www.silverfort.com/customer-success/#support) |
| **Categories** | Identity |
| **Version** | 3.1.0 |
| **Author** | Silverfort |
| **First Published** | 2024-09-01 |
| **Last Updated** | 2026-10-21 |
| **Solution Folder** | [Silverfort](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Silverfort) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/silverfort.microsoft-sentinel-solution-silverfort) · Popularity: ⚪ Very Low (8%) |

The [Silverfort](https://silverfort.com) ITDR Admin Console connector solution allows ingestion of Silverfort events and logging into Microsoft Sentinel.
 Silverfort provides syslog based events and logging using Common Event Format (CEF). By forwarding your Silverfort ITDR Admin Console CEF data into Microsoft Sentinel, you can take advantage of Sentinels's search & correlation, alerting, and threat intelligence enrichment on Silverfort data. 
 Please contact Silverfort or consult the Silverfort documentation for more information.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Silverfort Admin Console](../connectors/silverfortama.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Silverfort Admin Console](../connectors/silverfortama.md) | Analytics, Workbooks |

## Content Items

This solution includes **21 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 20 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Silverfort - AS-REP roasting](../content/silverfort-silverfort-as-rep-roasting-cd246cea-4b7b-5c08-ad07-c1353cdf27c7-6bdab4d4.md) | High | CredentialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - Authentication input injection](../content/silverfort-silverfort-authentication-input-injection-87e9f0c9-cd3d-5b8b-8c5b-c31f175ff367-fa39c81b.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - Certifried Incident](../content/silverfort-silverfort-certifried-incident-9ae540c9-c926-4100-8f07-1eac22596292-74a2bc0f.md) | High | PrivilegeEscalation | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - Credential scanning](../content/silverfort-silverfort-credential-scanning-2ae44c2c-f139-539c-8695-fbaba1c11401-04bc347c.md) | High | CredentialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - Denied MFA with risk indicators](../content/silverfort-silverfort-denied-mfa-with-risk-indicators-1b35fc5f-db8c-5fd5-942f-011d208783d0-4daddcc8.md) | High | CredentialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - Domain controller log cleared](../content/silverfort-silverfort-domain-controller-log-cleared-6cfe8a42-7727-53e4-b88d-3b20cba83851-7547f2fd.md) | High | DefenseEvasion | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - Impossible travel](../content/silverfort-silverfort-impossible-travel-26f002c2-c020-5528-acf1-c98592e18aa7-36b04ece.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - Kerberoasting](../content/silverfort-silverfort-kerberoasting-e8e921df-1954-5d9e-bfc9-56df5628208c-c638fbf5.md) | High | CredentialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - Kerberos checksum mismatch](../content/silverfort-silverfort-kerberos-checksum-mismatch-0bdbce35-83e8-5528-b57e-0d6f4a66a716-4c426cde.md) | High | CredentialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - Lateral movement](../content/silverfort-silverfort-lateral-movement-59ba5290-028b-5c01-814c-798aed507440-b652fcb6.md) | High | LateralMovement | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - Lateral movement target discovery](../content/silverfort-silverfort-lateral-movement-target-discovery-b323b0a6-d96b-565d-a18a-b5adc932394a-1e672777.md) | High | Discovery | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - Log4Shell Incident](../content/silverfort-silverfort-log4shell-incident-d6abed70-4043-46da-9304-a98f3446fa5f-69483854.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - Malicious IPAddress authentication](../content/silverfort-silverfort-malicious-ipaddress-authentication-0c64f30b-389e-538d-87f7-3ce3f9d27739-545b10e1.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - NTDS.dit extraction](../content/silverfort-silverfort-ntds.dit-extraction-cc110738-a263-5cfa-ac76-a991f3e3a2df-cd360ecc.md) | High | CredentialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - NoPacBreach Incident](../content/silverfort-silverfort-nopacbreach-incident-bdfd2c45-10a0-44e7-a90a-ba7b6bdd9ff2-486f0310.md) | High | PrivilegeEscalation | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - Privileged group membership addition](../content/silverfort-silverfort-privileged-group-membership-addition-99820a41-1d19-5fcc-81df-0f71c64069b6-97809b3a.md) | High | Persistence, PrivilegeEscalation | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - Remote service installation](../content/silverfort-silverfort-remote-service-installation-30df57e3-043a-5a71-9d78-dc328ecbd42b-6a5ddbbe.md) | High | Execution, Persistence, PrivilegeEscalation | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - Repeated denied MFA prompts](../content/silverfort-silverfort-repeated-denied-mfa-prompts-79583816-3c48-5508-9557-9229676acb14-5e0d11b0.md) | High | CredentialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - SMB share enumeration](../content/silverfort-silverfort-smb-share-enumeration-f778b28c-c29c-58e9-9f8a-1b3a8f4a9f49-2a4ff47c.md) | High | Discovery | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - UserBruteForce Incident](../content/silverfort-silverfort-userbruteforce-incident-46ff357b-9e98-465b-9e45-cd52fa4a7522-aec505ad.md) | High | CredentialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SilverfortWorkbook](../content/silverfort-silverfortworkbook-63b31322.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                |
|-------------|--------------------------------|-----------------------------------|
| 3.1.0       | 12-10-2026                     | Added 16 Silverfort incident analytic rules and fixed Account entity mapping in four existing rules. |
| 3.0.1       | 02-06-2026                     | Minor Doc Update                  |
| 3.0.0       | 13-09-2024                     | Initial Solution Release          |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

