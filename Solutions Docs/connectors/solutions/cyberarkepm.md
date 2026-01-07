# CyberArkEPM

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | CyberArk Support |
| **Support Tier** | Partner |
| **Support Link** | [https://www.cyberark.com/services-support/technical-support-contact/](https://www.cyberark.com/services-support/technical-support-contact/) |
| **Categories** | domains |
| **First Published** | 2022-04-10 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyberArkEPM](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyberArkEPM) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [CyberArkEPM](../connectors/cyberarkepm.md)

## Tables Reference

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
| [CyberArkEPM - Attack attempt not blocked](../content/8e8978a2-9188-4187-8909-5ea00507bf16.md) | High | Execution | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - MSBuild usage as LOLBin](../content/a11bf869-458e-49fd-be03-58021b14be15.md) | Medium | DefenseEvasion | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Multiple attack types](../content/c02f96b4-057b-4e63-87af-6376ef7a081b.md) | High | Execution | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Possible execution of Powershell Empire](../content/eddfd1fd-71df-4cc3-b050-287643bee398.md) | High | Execution | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Process started from different locations](../content/0d4e62da-0a64-4532-b93e-28cd2940c300.md) | Medium | Execution, DefenseEvasion | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Renamed Windows binary](../content/9281b7cc-8f05-45a9-bf10-17fb29492a84.md) | High | Execution, DefenseEvasion | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Uncommon Windows process started from System folder](../content/16b940d2-aaf8-4eaa-a5e1-05df5f5c3d43.md) | Medium | Execution, DefenseEvasion | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Uncommon process Internet access](../content/9d0d44ab-54dc-472a-9931-53521e888932.md) | High | Execution, DefenseEvasion, CommandAndControl | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Unexpected executable extension](../content/911d5b75-a1ce-4f13-a839-9c2474768696.md) | Medium | Execution, DefenseEvasion | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Unexpected executable location](../content/c1fcbbd7-74f8-4f32-8116-0a533ebd3878.md) | Medium | Execution, DefenseEvasion | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [CyberArkEPM - Elevation requests](../content/20fc7ee2-5387-4c4c-8819-77fb7bfb8d2a.md) | Execution, PrivilegeEscalation | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Powershell downloads](../content/576cac40-d6f5-4ef9-9c3d-013b94656bea.md) | Execution | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Powershell scripts execution parameters](../content/f1490e77-2a5e-4f07-afd9-c2bb20e26d30.md) | Execution | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Process hash changed](../content/8d72be65-d837-4e86-bca8-4a30e6834a22.md) | DefenseEvasion | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Processes run as admin](../content/e96de960-f4d7-49a3-8de7-4f5b7e8537cf.md) | Execution, PrivilegeEscalation | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Processes with Internet access attempts](../content/cff4d318-eaec-43c9-8c3e-84f74c789b98.md) | CommandAndControl | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Rare process run by users](../content/9cf63647-4e05-47cc-90ac-4a17cfd06a05.md) | Execution | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Rare process vendors](../content/37031fed-f7cb-45fc-a1c2-e2eab46cbba2.md) | Execution | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Scripts executed on hosts](../content/bd8511dd-ee8f-4c76-a9c8-b8f263ec7355.md) | Execution | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |
| [CyberArkEPM - Suspicious activity attempts](../content/e60cf50c-3ae0-44ac-9de1-ea13886973b8.md) | Execution | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CyberArkEPM](../content/cyberarkepm-cyberarkepm.md) | [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CyberArkEPM](../content/40a61269-9d21-41ac-b5ae-d741e4a4ecde.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                         |
|-------------|--------------------------------|------------------------------------------------------------|
| 3.0.0       | 27-07-2023                     | Updated solution to fix deployment validations             | 
| 3.0.1       | 28-04-2025                     | Updated deployment instructions to use Python 3.10 version |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
