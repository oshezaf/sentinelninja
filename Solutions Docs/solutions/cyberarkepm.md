# Idira Endpoint Privilege Manager for Microsoft Sentinel

*Solution: CyberArkEPM*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/idira_RGB_logo.svg" alt="CyberArkEPM Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Idira Support |
| **Support Tier** | Partner |
| **Support Link** | [https://www.cyberark.com/services-support/technical-support-contact/](https://www.cyberark.com/services-support/technical-support-contact/) |
| **Categories** | Security - Threat Protection,Identity |
| **Version** | 3.2.0 |
| **Author** | Idira by Palo Alto Networks - cybr-bizdevtech@paloaltonetworks.com |
| **First Published** | 2022-04-10 |
| **Last Updated** | 2026-10-27 |
| **Solution Folder** | [CyberArkEPM](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyberArkEPM) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/cyberark.cybr_epm_sentinel) · Rating: ★☆☆☆☆ 1.0/5 (1 ratings) · Popularity: 🔵 Medium (75%) |

Idira Endpoint Privilege Manager, a critical and foundational endpoint control addresses the underlying weaknesses of endpoint defenses against a privileged attacker and helps enterprises defend against these attacks.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **2 data connector(s)**:

- [Idira EPM](../connectors/cyberarkepm.md)
- [Idira EPM](../connectors/cyberarkepmccpdefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) | [Idira EPM](../connectors/cyberarkepm.md), [Idira EPM](../connectors/cyberarkepmccpdefinition.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **22 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 10 |
| Hunting Queries | 10 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [IdiraEPM - Attack attempt not blocked](../content/cyberarkepm-idiraepm-attack-attempt-not-blocked-8e8978a2-9188-4187-8909-5ea00507bf16-2b3f6f38.md) | High | Execution | [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) |
| [IdiraEPM - MSBuild usage as LOLBin](../content/cyberarkepm-idiraepm-msbuild-usage-as-lolbin-a11bf869-458e-49fd-be03-58021b14be15-b1a4e17d.md) | Medium | DefenseEvasion | [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) |
| [IdiraEPM - Multiple attack types](../content/cyberarkepm-idiraepm-multiple-attack-types-c02f96b4-057b-4e63-87af-6376ef7a081b-6930142e.md) | High | Execution | [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) |
| [IdiraEPM - Possible execution of Powershell Empire](../content/cyberarkepm-idiraepm-possible-execution-of-powershell-empire-eddfd1fd-71df-4cc3-b050-287643bee398-184c0da1.md) | High | Execution | [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) |
| [IdiraEPM - Process started from different locations](../content/cyberarkepm-idiraepm-process-started-from-different-locations-0d4e62da-0a64-4532-b93e-28cd2940c300-08a0e0de.md) | Medium | Execution, DefenseEvasion | [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) |
| [IdiraEPM - Renamed Windows binary](../content/cyberarkepm-idiraepm-renamed-windows-binary-9281b7cc-8f05-45a9-bf10-17fb29492a84-966d4400.md) | High | Execution, DefenseEvasion | [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) |
| [IdiraEPM - Uncommon Windows process started from System folder](../content/cyberarkepm-idiraepm-uncommon-windows-process-started-from-system-folder-16b940d2-aaf8-4eaa-a5e1-05df5f5c3d43-b9d4870b.md) | Medium | Execution, DefenseEvasion | [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) |
| [IdiraEPM - Uncommon process Internet access](../content/cyberarkepm-idiraepm-uncommon-process-internet-access-9d0d44ab-54dc-472a-9931-53521e888932-1a01e0d1.md) | High | Execution, DefenseEvasion, CommandAndControl | [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) |
| [IdiraEPM - Unexpected executable extension](../content/cyberarkepm-idiraepm-unexpected-executable-extension-911d5b75-a1ce-4f13-a839-9c2474768696-640cbc52.md) | Medium | Execution, DefenseEvasion | [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) |
| [IdiraEPM - Unexpected executable location](../content/cyberarkepm-idiraepm-unexpected-executable-location-c1fcbbd7-74f8-4f32-8116-0a533ebd3878-b1df3cc0.md) | Medium | Execution, DefenseEvasion | [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [IdiraEPM - Elevation requests](../content/cyberarkepm-idiraepm-elevation-requests-20fc7ee2-5387-4c4c-8819-77fb7bfb8d2a-13381489.md) | Execution, PrivilegeEscalation | [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) |
| [IdiraEPM - Powershell downloads](../content/cyberarkepm-idiraepm-powershell-downloads-576cac40-d6f5-4ef9-9c3d-013b94656bea-7a758af2.md) | Execution | [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) |
| [IdiraEPM - Powershell scripts execution parameters](../content/cyberarkepm-idiraepm-powershell-scripts-execution-parameters-f1490e77-2a5e-4f07-afd9-c2bb20e26d30-0d74f711.md) | Execution | [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) |
| [IdiraEPM - Process hash changed](../content/cyberarkepm-idiraepm-process-hash-changed-8d72be65-d837-4e86-bca8-4a30e6834a22-87e55471.md) | DefenseEvasion | [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) |
| [IdiraEPM - Processes run as admin](../content/cyberarkepm-idiraepm-processes-run-as-admin-e96de960-f4d7-49a3-8de7-4f5b7e8537cf-90ad1e21.md) | Execution, PrivilegeEscalation | [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) |
| [IdiraEPM - Processes with Internet access attempts](../content/cyberarkepm-idiraepm-processes-with-internet-access-attempts-cff4d318-eaec-43c9-8c3e-84f74c789b98-49d94af0.md) | CommandAndControl | [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) |
| [IdiraEPM - Rare process run by users](../content/cyberarkepm-idiraepm-rare-process-run-by-users-9cf63647-4e05-47cc-90ac-4a17cfd06a05-a7cf695e.md) | Execution | [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) |
| [IdiraEPM - Rare process vendors](../content/cyberarkepm-idiraepm-rare-process-vendors-37031fed-f7cb-45fc-a1c2-e2eab46cbba2-bd9a0368.md) | Execution | [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) |
| [IdiraEPM - Scripts executed on hosts](../content/cyberarkepm-idiraepm-scripts-executed-on-hosts-bd8511dd-ee8f-4c76-a9c8-b8f263ec7355-1b0db516.md) | Execution | [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) |
| [IdiraEPM - Suspicious activity attempts](../content/cyberarkepm-idiraepm-suspicious-activity-attempts-e60cf50c-3ae0-44ac-9de1-ea13886973b8-ad2c6da9.md) | Execution | [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CyberArkEPM](../content/cyberarkepm-cyberarkepm-34ce07fb.md) | [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CyberArkEPM](../parsers/cyberarkepm.md) | - | [`CyberArkEPM_Events_CL`](../tables/cyberarkepm-events-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                   |
|-------------|--------------------------------|----------------------------------------------------------------------|
| 3.2.0       | 23-09-2026                     | Add CCF implementation data connector and rebrand to Idira           |
| 3.1.0       | 19-05-2026                     | Update reporting mechanism to use DCR. Switch to Oauth login for EPM |
| 3.0.1       | 28-04-2025                     | Updated deployment instructions to use Python 3.10 version           |
| 3.0.0       | 27-07-2023                     | Updated solution to fix deployment validations                       |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

