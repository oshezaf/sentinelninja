# Utimaco Enterprise Secure Key Manager

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/UtimacoLogoSVG.svg" alt="Utimaco Enterprise Secure Key Manager Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Utimaco |
| **Support Tier** | Partner |
| **Support Link** | [https://utimaco.com/support](https://utimaco.com/support) |
| **Categories** | Security - Information Protection |
| **Source Vendor** | Utimaco *(basis: publisher)* |
| **Source Product** | Enterprise Secure Key Manager |
| **Version** | 3.0.0 |
| **Author** | Utimaco - support@utimaco.com |
| **First Published** | 2026-05-29 |
| **Last Updated** | 2026-06-17 |
| **Solution Folder** | [Utimaco Enterprise Secure Key Manager](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Utimaco%20Enterprise%20Secure%20Key%20Manager) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/utimacoisgmbh1676995905654.azure-sentinel-solution-eskm) · Popularity: 🔵 Medium (64%) |

The [Utimaco ESKM](https://utimaco.com/key-management/enterprise-secure-key-manager) solution ingests KMIP server logs from Utimaco Enterprise Secure Key Manager (ESKM) into Microsoft Sentinel using the Codeless Connector Platform (CCP). It enables monitoring of key management operations, authentication events, and KMIP client activity, helping you detect misuse, configuration issues, and unauthorized access to cryptographic material. 
 
 
 
 **Underlying Microsoft Technologies used:** 
 
 
 
 a. [Microsoft Sentinel Codeless Connector Platform (CCP)](https://learn.microsoft.com/azure/sentinel/create-codeless-connector) 
 
 
 
 b. [Azure Monitor Data Collection Rules and Endpoints](https://learn.microsoft.com/azure/azure-monitor/essentials/data-collection-rule-overview)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Utimaco Enterprise Secure Key Manager (ESKM)](../connectors/utimacoeskmconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`UtimacoESKMKmipServerLogs_CL`](../tables/utimacoeskmkmipserverlogs-cl.md) | [Utimaco Enterprise Secure Key Manager (ESKM)](../connectors/utimacoeskmconnector.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **8 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 4 |
| Analytic Rules | 3 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Utimaco ESKM - Burst of KMIP DESTROY operations by a single user](../content/utimaco-enterprise-secure-key-manager-utimaco-eskm-burst-of-kmip-destroy-operations-by-a-single-user-9b1a3b3e-7e16-4a3b-8a8f-7f1f2b1c0a03-5fa2afcb.md) | High | Impact | [`UtimacoESKMKmipServerLogs_CL`](../tables/utimacoeskmkmipserverlogs-cl.md) |
| [Utimaco ESKM - Multiple KMIP authentication failures from same IP](../content/utimaco-enterprise-secure-key-manager-utimaco-eskm-multiple-kmip-authentication-failures-from-same-ip-9b1a3b3e-7e16-4a3b-8a8f-7f1f2b1c0a01-e75b8c05.md) | Medium | CredentialAccess | [`UtimacoESKMKmipServerLogs_CL`](../tables/utimacoeskmkmipserverlogs-cl.md) |
| [Utimaco ESKM - PERMISSION_DENIED burst for a KMIP user](../content/utimaco-enterprise-secure-key-manager-utimaco-eskm-permission-denied-burst-for-a-kmip-user-9b1a3b3e-7e16-4a3b-8a8f-7f1f2b1c0a02-43bc2ce7.md) | Medium | Discovery | [`UtimacoESKMKmipServerLogs_CL`](../tables/utimacoeskmkmipserverlogs-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Utimaco ESKM - After-hours KMIP activity](../content/utimaco-enterprise-secure-key-manager-utimaco-eskm-after-hours-kmip-activity-9b1a3b3e-7e16-4a3b-8a8f-7f1f2b1c0b04-a52dd019.md) | DefenseEvasion | [`UtimacoESKMKmipServerLogs_CL`](../tables/utimacoeskmkmipserverlogs-cl.md) |
| [Utimaco ESKM - High-volume private key retrievals by user](../content/utimaco-enterprise-secure-key-manager-utimaco-eskm-high-volume-private-key-retrievals-by-user-9b1a3b3e-7e16-4a3b-8a8f-7f1f2b1c0b03-edf3b4f9.md) | Collection, Exfiltration | [`UtimacoESKMKmipServerLogs_CL`](../tables/utimacoeskmkmipserverlogs-cl.md) |
| [Utimaco ESKM - New source IPs connecting to KMIP](../content/utimaco-enterprise-secure-key-manager-utimaco-eskm-new-source-ips-connecting-to-kmip-9b1a3b3e-7e16-4a3b-8a8f-7f1f2b1c0b02-fce38bca.md) | InitialAccess | [`UtimacoESKMKmipServerLogs_CL`](../tables/utimacoeskmkmipserverlogs-cl.md) |
| [Utimaco ESKM - Rare KMIP users in the last 24 hours](../content/utimaco-enterprise-secure-key-manager-utimaco-eskm-rare-kmip-users-in-the-last-24-hours-9b1a3b3e-7e16-4a3b-8a8f-7f1f2b1c0b01-e7cc8841.md) | InitialAccess, Persistence | [`UtimacoESKMKmipServerLogs_CL`](../tables/utimacoeskmkmipserverlogs-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ESKMworkbook](../content/utimaco-enterprise-secure-key-manager-eskmworkbook-845900db.md) | [`UtimacoESKMKmipServerLogs_CL`](../tables/utimacoeskmkmipserverlogs-cl.md) |

## Additional Documentation

> 📄 *Source: [Utimaco Enterprise Secure Key Manager/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Utimaco%20Enterprise%20Secure%20Key%20Manager/README.md)*

## Overview

This solution enables integration of Utimaco ESKM (Enterprise Secure Key Manager) logs with Microsoft Sentinel using the Connector Builder (RestApiPoller) platform. It provides:
- Automated ingestion of KMIP server logs
- Prebuilt workbook for monitoring key management and authentication activity
- Analytics rules for threat detection
- Hunting queries for proactive investigation

## Features
- **Data Connector:** Connector Builder (RestApiPoller) poller for ESKM KMIP server logs
- **Workbook:** Visualizes key metrics, event distribution, operation outcomes, authentication trends, and activity timeline
- **Analytics Rules:** Detects brute-force, privilege probing, mass deletion, and authentication anomalies
- **Hunting Queries:** Surfaces rare users, new source IPs, high-volume key retrievals, and after-hours activity

## Deployment
1. Import the solution package into Microsoft Sentinel via Content Hub or ARM template deployment.
2. Configure the data connector with your ESKM API endpoint and credentials.
3. Enable analytic rules and customize thresholds as needed.
4. Use the workbook and hunting queries for monitoring and investigation.

## Support
For support, contact Utimaco:
- Email: support@utimaco.com
- Website: https://utimaco.com/support

## Legal
This solution is provided by Utimaco. See license terms in the solution package or contact support for details.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**        |
|-------------|--------------------------------|---------------------------|
| 3.0.0       | 11-06-2026                     | Initial Solution Release. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

