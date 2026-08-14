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
| **Support Link** | [https://support.spycloud.com](https://support.spycloud.com) |
| **Categories** | Security - Threat Intelligence,Identity |
| **Version** | 3.0.0 |
| **Author** | SpyCloud - support@spycloud.com |
| **First Published** | 2026-06-09 |
| **Last Updated** | 2026-06-09 |
| **Solution Folder** | [SpyCloud Enterprise Protection CCF](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SpyCloud%20Enterprise%20Protection%20CCF) |

The [SpyCloud Enterprise Protection](https://spycloud.com/) solution for Microsoft Sentinel ingests SpyCloud breach watchlist and catalog data via the Codeless Connector Framework (CCF), including an optional Compass daily feed. The solution includes two built-in analytic rules, two KQL parsers, and two automation playbooks for Microsoft Defender for Endpoint and Azure AD / Entra ID Conditional Access response.

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

- [SpyCloud Enterprise Protection Connector](../connectors/spycloudenterpriseprotectionccf.md)

## Tables Used

This solution uses **5 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SpyCloudBreachCatalogV2_CL`](../tables/spycloudbreachcatalogv2-cl.md) | [SpyCloud Enterprise Protection Connector](../connectors/spycloudenterpriseprotectionccf.md) | - |
| [`SpyCloudBreachWatchlistV2_CL`](../tables/spycloudbreachwatchlistv2-cl.md) | [SpyCloud Enterprise Protection Connector](../connectors/spycloudenterpriseprotectionccf.md) | Analytics |
| [`SpyCloud_ConditionalAccessLogsV2_CL`](../tables/spycloud-conditionalaccesslogsv2-cl.md) | [SpyCloud Enterprise Protection Connector](../connectors/spycloudenterpriseprotectionccf.md) | - |
| [`Spycloud_MDE_LogsV2_CL`](../tables/spycloud-mde-logsv2-cl.md) | [SpyCloud Enterprise Protection Connector](../connectors/spycloudenterpriseprotectionccf.md) | - |
| [`spycloud_compassV2_CL`](../tables/spycloud-compassv2-cl.md) | [SpyCloud Enterprise Protection Connector](../connectors/spycloudenterpriseprotectionccf.md) | - |

## Content Items

This solution includes **6 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Playbooks | 2 |
| Parsers | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [SpyCloud infostealer malware credential exposure](../content/spycloud-enterprise-protection-ccf-spycloud-infostealer-malware-credential-exposure-ead4deed-9d48-4646-aee0-6b46c2dd1ae6-d71d624c.md) | High | CredentialAccess, CommandAndControl | [`SpyCloudBreachWatchlistV2_CL`](../tables/spycloudbreachwatchlistv2-cl.md) |
| [SpyCloud plaintext credential exposure detected](../content/spycloud-enterprise-protection-ccf-spycloud-plaintext-credential-exposure-detected-a25eba0e-ff42-4c97-a379-d76bdb2aa1e3-4042bb68.md) | High | CredentialAccess | [`SpyCloudBreachWatchlistV2_CL`](../tables/spycloudbreachwatchlistv2-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [SpyCloud Conditional Access Playbook](../content/spycloud-enterprise-protection-ccf-spycloud-conditional-access-playbook-ba645b13.md) | Spycloud Conditional access playbook | - |
| [SpyCloud_MDE_Automation](../content/spycloud-enterprise-protection-ccf-spycloud-mde-automation-50659b15.md) | This playbook automates endpoint response actions in Microsoft Defender for Endpoint (MDE) when SpyC... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [get_Spycloud_enriched_data](../parsers/get-spycloud-enriched-data.md) | - | [`SpyCloudBreachCatalogV2_CL`](../tables/spycloudbreachcatalogv2-cl.md) *(read)* |
| [get_spycloud_compass_data](../parsers/get-spycloud-compass-data.md) | - | [`spycloud_compassV2_CL`](../tables/spycloud-compassv2-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                    |
|-------------|----------------------------------|--------------------------------------------------------|
| 3.0.0       | 09-06-2026                       | Initial CCF-based release. SpyCloud Watchlist and Breach Catalog CCF data connector (Compass daily feed included), two built-in analytic rules (**AR_Breached_Users_20**, **AR_malware_25**), two KQL parsers (**get_Spycloud_enriched_data**, **get_spycloud_compass_data**), MDE Automation playbook, and Conditional Access playbook. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

