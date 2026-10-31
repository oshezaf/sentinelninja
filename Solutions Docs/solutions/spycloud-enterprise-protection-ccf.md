# ⚠️ SpyCloud Enterprise Protection CCF

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/SpyCloud_Enterprise_Protection.svg" alt="SpyCloud Enterprise Protection CCF Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | SpyCloud |
| **Support Tier** | Partner |
| **Support Link** | [https://portal.spycloud.com](https://portal.spycloud.com) |
| **Categories** | Security - Threat Intelligence,Identity |
| **Version** | 3.0.1 |
| **Author** | SpyCloud - integrations@spycloud.com |
| **First Published** | 2026-06-09 |
| **Last Updated** | 2026-08-28 |
| **Solution Folder** | [SpyCloud Enterprise Protection CCF](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SpyCloud%20Enterprise%20Protection%20CCF) |

The [SpyCloud Enterprise Threat Protection](https://spycloud.com/) solution for Microsoft Sentinel ingests SpyCloud breach watchlist and catalog data via the Codeless Connector Framework (CCF), including an optional Compass daily feed. The solution includes three built-in analytic rules, two KQL parsers, and three automation playbooks covering Microsoft Defender for Endpoint response, Azure AD / Entra ID Conditional Access enforcement, and sign-in session revocation.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

 a. [Codeless Connector Framework (CCF)](https://learn.microsoft.com/en-us/azure/sentinel/create-codeless-connector)

 b. [Azure Logic Apps](https://azure.microsoft.com/services/logic-apps/)

 c. [Microsoft Defender for Endpoint](https://www.microsoft.com/en-us/security/business/endpoint-security/microsoft-defender-endpoint)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [SpyCloud Enterprise Threat Protection Connector](../connectors/spycloudenterpriseprotectionccf.md)

## Tables Used

This solution uses **5 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SpyCloudBreachCatalogV2_CL`](../tables/spycloudbreachcatalogv2-cl.md) | [SpyCloud Enterprise Threat Protection Connector](../connectors/spycloudenterpriseprotectionccf.md) | - |
| [`SpyCloudBreachWatchlistV2_CL`](../tables/spycloudbreachwatchlistv2-cl.md) | [SpyCloud Enterprise Threat Protection Connector](../connectors/spycloudenterpriseprotectionccf.md) | Analytics |
| [`SpyCloudCompassV2_CL`](../tables/spycloudcompassv2-cl.md) | [SpyCloud Enterprise Threat Protection Connector](../connectors/spycloudenterpriseprotectionccf.md) | - |
| [`SpyCloud_ConditionalAccessLogsV2_CL`](../tables/spycloud-conditionalaccesslogsv2-cl.md) | [SpyCloud Enterprise Threat Protection Connector](../connectors/spycloudenterpriseprotectionccf.md) | - |
| [`Spycloud_MDE_LogsV2_CL`](../tables/spycloud-mde-logsv2-cl.md) | [SpyCloud Enterprise Threat Protection Connector](../connectors/spycloudenterpriseprotectionccf.md) | - |

## Content Items

This solution includes **8 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |
| Playbooks | 3 |
| Parsers | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [SpyCloud identity access record exposure](../content/spycloud-enterprise-protection-ccf-spycloud-identity-access-record-exposure-cd8ec49c-b654-49be-b040-e552b8eba7c8-2d4be166.md) | High | CredentialAccess, DefenseEvasion | [`SpyCloudBreachWatchlistV2_CL`](../tables/spycloudbreachwatchlistv2-cl.md) |
| [SpyCloud infostealer malware credential exposure](../content/spycloud-enterprise-protection-ccf-spycloud-infostealer-malware-credential-exposure-ead4deed-9d48-4646-aee0-6b46c2dd1ae6-d71d624c.md) | High | CredentialAccess, CommandAndControl | [`SpyCloudBreachWatchlistV2_CL`](../tables/spycloudbreachwatchlistv2-cl.md) |
| [SpyCloud plaintext credential exposure detected](../content/spycloud-enterprise-protection-ccf-spycloud-plaintext-credential-exposure-detected-a25eba0e-ff42-4c97-a379-d76bdb2aa1e3-4042bb68.md) | High | CredentialAccess | [`SpyCloudBreachWatchlistV2_CL`](../tables/spycloudbreachwatchlistv2-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [SpyCloud Conditional Access Playbook](../content/spycloud-enterprise-protection-ccf-spycloud-conditional-access-playbook-ba645b13.md) | Spycloud Conditional access playbook | - |
| [SpyCloud MDE Automation Playbook](../content/spycloud-enterprise-protection-ccf-spycloud-mde-automation-playbook-3e87e024.md) | Automates Microsoft Defender for Endpoint response actions - machine isolation, machine tagging and ... | - |
| [SpyCloud Session Revocation Playbook](../content/spycloud-enterprise-protection-ccf-spycloud-session-revocation-playbook-9a81870a.md) | Revoke all active sign-in sessions for users named in an identity access record exposure. | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [get_Spycloud_enriched_data](../parsers/get-spycloud-enriched-data.md) | - | [`SpyCloudBreachCatalogV2_CL`](../tables/spycloudbreachcatalogv2-cl.md) *(read)* |
| [get_spycloud_compass_data](../parsers/get-spycloud-compass-data.md) | - | [`SpyCloudCompassV2_CL`](../tables/spycloudcompassv2-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.1       | 28-08-2026 | Reliability and deployment fixes across ingestion, analytics, and playbooks. Added severity-30 **Identity Access Records** analytic rule. Removed unnecessary **Automation Rules** and related configurations. Standardized solution naming and support details. |
| 3.0.0       | 09-06-2026 | Initial CCF-based release. SpyCloud Watchlist and Breach Catalog CCF data connector (Compass daily feed included), two built-in analytic rules (**AR_Breached_Users_20**, **AR_malware_25**), two KQL parsers (**get_Spycloud_enriched_data**, **get_spycloud_compass_data**), MDE Automation playbook, and Conditional Access playbook. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

