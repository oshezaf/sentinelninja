# ⚠️ CyberArkEPM

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/CyberArk_Logo.svg" alt="CyberArkEPM Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

Endpoint Privilege Manager, a critical and foundational endpoint control addresses the underlying weaknesses of endpoint defenses against a privileged attacker and helps enterprises defend against these attacks.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | CyberArk Support |
| **Support Tier** | Partner |
| **Support Link** | [https://www.cyberark.com/services-support/technical-support-contact/](https://www.cyberark.com/services-support/technical-support-contact/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | CyberArk Business Development - business_development@cyberark.com |
| **First Published** | 2022-04-10 |
| **Solution Folder** | [CyberArkEPM](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyberArkEPM) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [CyberArkEPM](../connectors/cyberarkepm.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) | [CyberArkEPM](../connectors/cyberarkepm.md) | Analytics, Hunting, Workbooks |

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
| [CyberArkEPM - Attack attempt not blocked](../content/cyberarkepm-cyberarkepm-attack-attempt-not-blocked-8e8978a2-9188-4187-8909-5ea00507bf16-2c52bf85.md) | High | Execution | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - MSBuild usage as LOLBin](../content/cyberarkepm-cyberarkepm-msbuild-usage-as-lolbin-a11bf869-458e-49fd-be03-58021b14be15-c30da3a6.md) | Medium | DefenseEvasion | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Multiple attack types](../content/cyberarkepm-cyberarkepm-multiple-attack-types-c02f96b4-057b-4e63-87af-6376ef7a081b-c13c5274.md) | High | Execution | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Possible execution of Powershell Empire](../content/cyberarkepm-cyberarkepm-possible-execution-of-powershell-empire-eddfd1fd-71df-4cc3-b050-287643bee398-2d5da046.md) | High | Execution | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Process started from different locations](../content/cyberarkepm-cyberarkepm-process-started-from-different-locations-0d4e62da-0a64-4532-b93e-28cd2940c300-6e1ef9fe.md) | Medium | Execution, DefenseEvasion | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Renamed Windows binary](../content/cyberarkepm-cyberarkepm-renamed-windows-binary-9281b7cc-8f05-45a9-bf10-17fb29492a84-2d034aad.md) | High | Execution, DefenseEvasion | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Uncommon Windows process started from System folder](../content/cyberarkepm-cyberarkepm-uncommon-windows-process-started-from-system-folder-16b940d2-aaf8-4eaa-a5e1-05df5f5c3d43-515a91a8.md) | Medium | Execution, DefenseEvasion | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Uncommon process Internet access](../content/cyberarkepm-cyberarkepm-uncommon-process-internet-access-9d0d44ab-54dc-472a-9931-53521e888932-7cd557dd.md) | High | Execution, DefenseEvasion, CommandAndControl | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Unexpected executable extension](../content/cyberarkepm-cyberarkepm-unexpected-executable-extension-911d5b75-a1ce-4f13-a839-9c2474768696-814c115f.md) | Medium | Execution, DefenseEvasion | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Unexpected executable location](../content/cyberarkepm-cyberarkepm-unexpected-executable-location-c1fcbbd7-74f8-4f32-8116-0a533ebd3878-f588775e.md) | Medium | Execution, DefenseEvasion | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [CyberArkEPM - Elevation requests](../content/cyberarkepm-cyberarkepm-elevation-requests-20fc7ee2-5387-4c4c-8819-77fb7bfb8d2a-c48d1704.md) | Execution, PrivilegeEscalation | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Powershell downloads](../content/cyberarkepm-cyberarkepm-powershell-downloads-576cac40-d6f5-4ef9-9c3d-013b94656bea-5c113d34.md) | Execution | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Powershell scripts execution parameters](../content/cyberarkepm-cyberarkepm-powershell-scripts-execution-parameters-f1490e77-2a5e-4f07-afd9-c2bb20e26d30-cce84b88.md) | Execution | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Process hash changed](../content/cyberarkepm-cyberarkepm-process-hash-changed-8d72be65-d837-4e86-bca8-4a30e6834a22-71d80861.md) | DefenseEvasion | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Processes run as admin](../content/cyberarkepm-cyberarkepm-processes-run-as-admin-e96de960-f4d7-49a3-8de7-4f5b7e8537cf-6d23b2f4.md) | Execution, PrivilegeEscalation | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Processes with Internet access attempts](../content/cyberarkepm-cyberarkepm-processes-with-internet-access-attempts-cff4d318-eaec-43c9-8c3e-84f74c789b98-7c6ad7ed.md) | CommandAndControl | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Rare process run by users](../content/cyberarkepm-cyberarkepm-rare-process-run-by-users-9cf63647-4e05-47cc-90ac-4a17cfd06a05-59b01a72.md) | Execution | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Rare process vendors](../content/cyberarkepm-cyberarkepm-rare-process-vendors-37031fed-f7cb-45fc-a1c2-e2eab46cbba2-6a23417c.md) | Execution | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Scripts executed on hosts](../content/cyberarkepm-cyberarkepm-scripts-executed-on-hosts-bd8511dd-ee8f-4c76-a9c8-b8f263ec7355-53f78481.md) | Execution | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Suspicious activity attempts](../content/cyberarkepm-cyberarkepm-suspicious-activity-attempts-e60cf50c-3ae0-44ac-9de1-ea13886973b8-c068e0ec.md) | Execution | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CyberArkEPM](../content/cyberarkepm-cyberarkepm-34ce07fb.md) | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CyberArkEPM](../content/cyberarkepm-cyberarkepm-40a61269-9d21-41ac-b5ae-d741e4a4ecde-f8c0e3b1.md) | - | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                         |
|-------------|--------------------------------|------------------------------------------------------------|
| 3.0.0       | 27-07-2023                     | Updated solution to fix deployment validations             | 
| 3.0.1       | 28-04-2025                     | Updated deployment instructions to use Python 3.10 version |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

