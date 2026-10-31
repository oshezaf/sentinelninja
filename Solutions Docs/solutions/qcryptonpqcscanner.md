# QCrypton PQC Scanner

*Solution: QCryptonPQCScanner*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/qcrypton.svg" alt="QCryptonPQCScanner Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | QCrypton, Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://www.qcrypton.com/contact.html](https://www.qcrypton.com/contact.html) |
| **Categories** | Security - Cloud Security,Security - Threat Protection,Compliance |
| **Version** | 3.0.0 |
| **Author** | QCrypton, Inc. |
| **First Published** | 2026-09-07 |
| **Last Updated** | 2026-10-29 |
| **Solution Folder** | [QCryptonPQCScanner](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/QCryptonPQCScanner) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/qcryptoninc1788706847984.qcrypton-pqc-scanner-sentinel) · Popularity: ⚪ Very Low (0%) |

Post-quantum cryptography readiness for Microsoft Sentinel. Ingests findings on quantum-vulnerable Key Vault keys, Entra ID app/service-principal certificates, classical-signed TLS certificates, App Service/Storage TLS posture, and CMK provenance. Ships with data connector (CCP RestApiPoller), 6 analytic rules, workbook, and Teams-notification playbook.

  **Underlying Microsoft Technologies used:** 

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

• [Microsoft Sentinel Codeless Connector Framework](https://aka.ms/Sentinel-CCP_Platform)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [QCrypton PQC Scanner (via Codeless Connector Framework)](../connectors/qcryptonpqcscannerccpdefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`PQReadiness_CL`](../tables/pqreadiness-cl.md) | [QCrypton PQC Scanner (via Codeless Connector Framework)](../connectors/qcryptonpqcscannerccpdefinition.md) | Analytics, Workbooks |

## Content Items

This solution includes **8 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 6 |
| Workbooks | 1 |
| Playbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [App Service using TLS < 1.3](../content/qcryptonpqcscanner-app-service-using-tls-1.3-7f8e9d1c-2b3a-4e5f-6c7d-8a9b0c1d2e3f-8d0d883b.md) | Medium | InitialAccess | [`PQReadiness_CL`](../tables/pqreadiness-cl.md) |
| [Certificate expiring after 2030 still uses classical signature](../content/qcryptonpqcscanner-certificate-expiring-after-2030-still-uses-classical-signature-5e4d3c2b-1a9f-4e8d-7c6b-5a4d3f2e1c0b-cea40d5c.md) | High | Persistence | [`PQReadiness_CL`](../tables/pqreadiness-cl.md) |
| [New quantum-vulnerable resource appeared](../content/qcryptonpqcscanner-new-quantum-vulnerable-resource-appeared-9b8c7d6e-5f4a-3b2c-1d0e-9f8a7b6c5d4e-6a180ae7.md) | Informational | Discovery | [`PQReadiness_CL`](../tables/pqreadiness-cl.md) |
| [Public TLS certificate with classical signature on Application Gateway](../content/qcryptonpqcscanner-public-tls-certificate-with-classical-signature-on-application-gateway-3c9b1e2a-7d4f-4a6b-8e3d-2f4a1c5d6b7e-8a624671.md) | High | InitialAccess | [`PQReadiness_CL`](../tables/pqreadiness-cl.md) |
| [Quantum-vulnerable certificate on Entra app registration](../content/qcryptonpqcscanner-quantum-vulnerable-certificate-on-entra-app-registration-2a4b6c8d-1e3f-5a7b-9c0d-4e6f8a2b1c3d-cf451690.md) | High | CredentialAccess | [`PQReadiness_CL`](../tables/pqreadiness-cl.md) |
| [Quantum-vulnerable key detected in Key Vault](../content/qcryptonpqcscanner-quantum-vulnerable-key-detected-in-key-vault-8a1c4f2d-2b3a-4e5f-9c1d-1a2b3c4d5e6f-c419c81e.md) | Medium | Impact | [`PQReadiness_CL`](../tables/pqreadiness-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [QCryptonPQReadiness](../content/qcryptonpqcscanner-qcryptonpqreadiness-803dfec5.md) | [`PQReadiness_CL`](../tables/pqreadiness-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [QCrypton PQC — notify on new vulnerable finding](../content/qcryptonpqcscanner-qcrypton-pqc-—-notify-on-new-vulnerable-finding-91da7c15.md) | Logic App playbook: on Microsoft Sentinel incident trigger, post a card to a Microsoft Teams channel... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|-------------|
| 3.0.0       | 17-09-2026                     | Initial release of the QCrypton PQC Scanner solution. Includes: 1 data connector (Codeless Connector Framework — RestApiPoller, `PQReadiness_CL`); 6 scheduled analytic rules (Key Vault vulnerable keys, Entra ID quantum-vulnerable certificates, App Gateway/Front Door classical TLS certs, App Service legacy TLS, long-lived certs signed classically, new vulnerable resource detection); 1 workbook (PQ Readiness posture overview with black & white preview images); 1 playbook (Teams notification on incident). Fixed logo and solution path references; added workbook preview images, playbook README, and WorkbooksMetadata entry. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

