# Microsoft Active Directory Tier Model

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/MicrosoftADTierModel.svg" alt="Microsoft Active Directory Tier Model Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | Identity,Security - Threat Protection |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2026-07-14 |
| **Last Updated** | 2026-07-31 |
| **Solution Folder** | [Microsoft Active Directory Tier Model](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Active%20Directory%20Tier%20Model) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-microsoftadtiermodel) · Popularity: ⚪ Very Low (0%) |

The Microsoft Active Directory Tier Model solution for Microsoft Sentinel provides detection, triage automation, and reporting for the Active Directory (AD) administrative tier model - Tier 0 (T0), Tier 1 (T1), and Tier 2 (T2) - across Active Directory Domain Services (AD DS / ADDS). It monitors tier-sensitive changes on Domain Controllers, including group membership, object creation and deletion, ACL modifications, Group Policy (GPO) links and enforcement, organizational unit (OU) changes, block inheritance, domain trusts, child-domain promotion, BitLocker recovery keys, and LAPS activity, using Windows Security Event logs.

The analytic rules dynamically build each alert title from the affected object's tier and type, which keeps the number of rules low instead of duplicating a rule per tier. Automation rules then tag Tier Model incidents and automatically set severity or close expected, low-value activity, and a workbook provides Tier Model metrics.

**Important:** The analytic rules, automation rules, and workbook are linked by the rule names - each alert title carries a (TMxxx.1) identifier that the automation rules and workbook depend on. Do not rename or modify the default analytic and automation rule names, or the automation rules and workbook will not function correctly.

**Prerequisites:**

1. Active Directory Tier Model deployed. This solution monitors an existing Tier Model and expects the standard Tier 0 / Tier 1 / Tier 2 organizational unit (OU) structure (for example, OU=Tier 0 Accounts, OU=Tier 1 Member Servers, OU=Tier 0 PAW, OU=Tier 0 Groups). If your OU names differ, adjust the analytic rule queries to match. To deploy and audit the Tier Model, see the [Microsoft Active Directory Tier Model project](https://github.com/microsoft/ActiveDirectoryTierModel/) and its [documentation](https://microsoft.github.io/ActiveDirectoryTierModel/).

2. Domain Controller telemetry. All Domain Controllers must run as Azure virtual machines or be onboarded to Azure Arc, with a Data Collection Rule (DCR) that collects Security event logs from every Domain Controller into the Microsoft Sentinel workspace.

3. Automation rules (required). The solution's automation rules are provided as an ARM template in the solution's Playbooks folder (MicrosoftADTierModelAutomationRules) and must be deployed as a required post-installation step for incident tagging, severity assignment, and the workbook to function correctly. See the automation rules README for one-click deployment.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

1. [Azure Monitor Agent (AMA) and Data Collection Rules](https://learn.microsoft.com/azure/azure-monitor/agents/data-collection-rule-azure-monitor-agent)

2. [Windows Security Events via AMA](https://learn.microsoft.com/azure/sentinel/data-connectors/windows-security-events-via-ama)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **1 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`SecurityEvent`](../tables/securityevent.md) | Analytics |

### Internal Tables

The following **2 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | Workbooks |

## Content Items

This solution includes **21 content item(s)** (20 in solution, 1 discovered 🔍):

| Content Type | Total | In Solution | Discovered |
|:-------------|------:|------------:|-----------:|
| Analytic Rules | 19 | 19 | - |
| Workbooks | 2 | 1 | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [PROD (TM001.1) - GROUP - Added to Group Outside the Object Tier Level](../content/microsoft-active-directory-tier-model-prod-tm001.1-group-added-to-group-outside-the-object-tier-level-b300c7f8-dc5e-4fc6-879b-63f0013358ce-6006006d.md) | High | PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |
| [PROD (TM002.1) - OBJECT - Created or Deleted a Tier Level Object](../content/microsoft-active-directory-tier-model-prod-tm002.1-object-created-or-deleted-a-tier-level-object-b58adf25-fb44-4296-9b6c-0e6b97139dad-2795650c.md) | Low | InitialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [PROD (TM003.1) - OBJECT - Moved or Recovered a Tier Level Account](../content/microsoft-active-directory-tier-model-prod-tm003.1-object-moved-or-recovered-a-tier-level-account-1d858e12-777d-4156-b0af-b5ef410739e6-21ce2bb5.md) | Medium | Persistence | [`SecurityEvent`](../tables/securityevent.md) |
| [PROD (TM004.1) - OBJECT - Enabled, Disabled, Unlocked, or Password Reset of a Tier Level Object](../content/microsoft-active-directory-tier-model-prod-tm004.1-object-enabled,-disabled,-unlocked,-or-password-reset-1da0cf44-c927-4b6f-9b43-91871b2391b3-c917af1c.md) | High | Persistence | [`SecurityEvent`](../tables/securityevent.md) |
| [PROD (TM005.1) - GPO - Linked, Unlinked, or Enforced at Tier Level OU](../content/microsoft-active-directory-tier-model-prod-tm005.1-gpo-linked,-unlinked,-or-enforced-at-tier-level-ou-02cf2172-0eb7-4a4a-bce7-7251cdd3e233-ba1eb9dc.md) | High | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [PROD (TM006.1) - ACL - Modified at Tier Level OU](../content/microsoft-active-directory-tier-model-prod-tm006.1-acl-modified-at-tier-level-ou-f3e2433b-6456-4009-a1cb-0d4eb3a36125-b432541c.md) | High | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [PROD (TM007.1) - OU - Created or Deleted at Tier Level](../content/microsoft-active-directory-tier-model-prod-tm007.1-ou-created-or-deleted-at-tier-level-4e027b5f-fc4a-4de6-be24-3eb9324e2fc8-9888d4d6.md) | High | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [PROD (TM008.1) - GPO - Linked, Unlinked, or Enforced at Root of Domain](../content/microsoft-active-directory-tier-model-prod-tm008.1-gpo-linked,-unlinked,-or-enforced-at-root-of-domain-fe468726-b1dc-4e76-adad-3480de4a2c56-f94601bc.md) | High | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [PROD (TM009.1) - ACL - Modified at Root of the Domain](../content/microsoft-active-directory-tier-model-prod-tm009.1-acl-modified-at-root-of-the-domain-7437402c-800b-4cf3-90d9-0c1f12204375-1a4c6470.md) | High | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [PROD (TM010.1) - BITLOCKER - Stored Bitlocker Recovery Key to Tier Level Computer Object](../content/microsoft-active-directory-tier-model-prod-tm010.1-bitlocker-stored-bitlocker-recovery-key-to-tier-level-eea9c640-afe0-4ce4-9a41-c409d4c2c924-1aa7bcc6.md) | Informational | CredentialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [PROD (TM011.1) - LAPS - Tier Level Computer Object LAPS Password Expiration Time Set Manually](../content/microsoft-active-directory-tier-model-prod-tm011.1-laps-tier-level-computer-object-laps-password-expirat-daf2b9f7-dcf2-4b45-831a-d7142318c7e9-dc070dd3.md) | Low | Discovery | [`SecurityEvent`](../tables/securityevent.md) |
| [PROD (TM012.1) - GPO - Enforced Outside of Tier Model](../content/microsoft-active-directory-tier-model-prod-tm012.1-gpo-enforced-outside-of-tier-model-05846968-15cc-4309-bddc-eaa296f84af1-ddc937c8.md) | High | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [PROD (TM013.1) - OU - Block Inheritance was Enabled on an OU](../content/microsoft-active-directory-tier-model-prod-tm013.1-ou-block-inheritance-was-enabled-on-an-ou-17371300-904a-4af5-9550-cf57ee727bb7-7e50854e.md) | High | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [PROD (TM014.1) - GPO - Linked, Unlinked, or Enforced at the AD Site Level](../content/microsoft-active-directory-tier-model-prod-tm014.1-gpo-linked,-unlinked,-or-enforced-at-the-ad-site-leve-38f2f6f4-2869-401c-8341-e3a5c11018a5-8c131a4d.md) | High | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [PROD (TM015.1) - ACL - Modified at KRBTGT or AdminSDHolder Object Level](../content/microsoft-active-directory-tier-model-prod-tm015.1-acl-modified-at-krbtgt-or-adminsdholder-object-level-a9f94bf1-856e-40ff-a176-24f967da1e27-38fd56fc.md) | High | Persistence | [`SecurityEvent`](../tables/securityevent.md) |
| [PROD (TM016.1) - GROUP - Added to Well-Known or Tier Model Group](../content/microsoft-active-directory-tier-model-prod-tm016.1-group-added-to-well-known-or-tier-model-group-763fc00b-4971-43c2-9cd1-f12b58a542bd-e013fae3.md) | High | PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |
| [PROD (TM017.1) - GROUP - Tier 0 Added to Allow RODC Password Replication Group](../content/microsoft-active-directory-tier-model-prod-tm017.1-group-tier-0-added-to-allow-rodc-password-replication-634a69b4-0e46-4349-8463-af1c8d191620-79a47382.md) | High | PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |
| [PROD (TM018.1) - DOMAIN - Child Domain promoted within the Forest](../content/microsoft-active-directory-tier-model-prod-tm018.1-domain-child-domain-promoted-within-the-forest-ff1bec81-e241-44bf-98ed-c6e37805a2e3-72a39c20.md) | High | PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |
| [PROD (TM019.1) - TRUST - A new AD Trust has been established](../content/microsoft-active-directory-tier-model-prod-tm019.1-trust-a-new-ad-trust-has-been-established-891315d2-e080-4ac8-af5a-50bae17f2d4d-e9ddae80.md) | High | PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [MicrosoftADTierModel](../content/microsoft-active-directory-tier-model-microsoftadtiermodel-3fad41c8.md) | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |
| [workbooksMetadata](../content/microsoft-active-directory-tier-model-workbooksmetadata-743e7b34.md) ⚠️ | - |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Additional Documentation

> 📄 *Source: [Microsoft Active Directory Tier Model/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Active%20Directory%20Tier%20Model/README.md)*

# Overview
---
## Microsoft Sentinel: Microsoft Active Directory Tier Model Solution

The **Microsoft Active Directory Tier Model** solution for Microsoft Sentinel provides detection, triage automation, and reporting for the Active Directory (AD) administrative tier model - Tier 0 (T0), Tier 1 (T1), and Tier 2 (T2) - across Active Directory Domain Services (AD DS / ADDS). It monitors tier-sensitive changes on Domain Controllers using Windows Security Event logs, tags and triages the resulting incidents with automation rules, and visualizes Tier Model activity in a workbook.

This solution contains:

- **19 Analytic rule templates** (TM001 - TM019)
- **1 Workbook** (Microsoft Active Directory Tier Model)
- **5 Automation rules** (deployed separately - see [Deploying the Automation Rules](#deploying-the-automation-rules))

## Try on Portal

You can deploy the solution by clicking on the buttons below:

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FMicrosoft%2520Active%2520Directory%2520Tier%2520Model%2FPackage%2FmainTemplate.json" target="_blank"><img src="https://aka.ms/deploytoazurebutton"/></a>
<a href="https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FMicrosoft%2520Active%2520Directory%2520Tier%2520Model%2FPackage%2FmainTemplate.json" target="_blank"><img src="https://aka.ms/deploytoazuregovbutton"/></a>

![Workbook Overview](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Active%20Directory%20Tier%20Model/Workbooks/Images/Preview/MicrosoftADTierModelWhite.png?raw=true)

## Getting Started

This solution **monitors an existing Active Directory Tier Model deployment**. Without the Tier Model deployed, the analytic rules will not match any activity and the solution provides no value. The rules key off the standard Tier 0 / Tier 1 / Tier 2 organizational unit (OU) structure (for example `OU=Tier 0 Accounts`, `OU=Tier 1 Member Servers`, `OU=Tier 0 PAW`, `OU=Tier 0 Groups`).

> **Important - do not rename the default rule names.** The analytic rules, automation rules, and workbook are tied together by the rule **names**. Each analytic rule stamps its alert title with a `(TMxxx.1)` identifier (for example `(TM002.1)`), and that identifier is the shared key across all three components:
>
> - The **automation rules** match incidents by the `(TMxxx.1)` title tag to apply tagging, severity changes, and closures.
> - The **workbook** filters and groups Tier Model incidents by these alert names.
>
> Because the analytic rule number, the automation rule, and the alert name are all linked, **renaming or modifying the default names will break the automation rules and the workbook.** Keep the default names as shipped. If you must customize a rule, preserve its `(TMxxx.1)` prefix so the dependencies continue to function.


*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**              |
|-------------|--------------------------------|---------------------------------|
| 3.0.0       | 14-07-2026                     | Initial solution release        |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

