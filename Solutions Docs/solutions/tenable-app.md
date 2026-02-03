# Tenable App

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Tenable.svg" alt="Tenable App Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Tenable App](https://www.tenable.com/products/vulnerability-management) solution provides the capability to ingest Asset and Vulnerability data into Microsoft Sentinel through the REST API from the Tenable platform (Managed in the cloud). Refer to [API documentation](https://developer.tenable.com/reference/navigate) for more information.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Tenable |
| **Support Tier** | Partner |
| **Support Link** | [https://www.tenable.com/support/technical-support](https://www.tenable.com/support/technical-support) |
| **Categories** | domains |
| **Version** | 3.1.1 |
| **Author** | Tenable - support@tenable.com |
| **First Published** | 2024-06-06 |
| **Last Updated** | 2025-06-19 |
| **Solution Folder** | [Tenable App](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tenable%20App) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Tenable Identity Exposure](../connectors/tenableie.md)
- [Tenable Vulnerability Management](../connectors/tenablevm.md)

## Tables Used

This solution uses **7 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) | [Tenable Identity Exposure](../connectors/tenableie.md) | Analytics, Workbooks |
| [`Tenable_IE_CL`](../tables/tenable-ie-cl.md) | [Tenable Identity Exposure](../connectors/tenableie.md) | - |
| [`Tenable_VM_Asset_CL`](../tables/tenable-vm-asset-cl.md) | [Tenable Vulnerability Management](../connectors/tenablevm.md) | Playbooks |
| [`Tenable_VM_Compliance_CL`](../tables/tenable-vm-compliance-cl.md) | [Tenable Vulnerability Management](../connectors/tenablevm.md) | - |
| [`Tenable_VM_Vuln_CL`](../tables/tenable-vm-vuln-cl.md) | [Tenable Vulnerability Management](../connectors/tenablevm.md) | Playbooks |
| [`Tenable_WAS_Asset_CL`](../tables/tenable-was-asset-cl.md) | [Tenable Vulnerability Management](../connectors/tenablevm.md) | - |
| [`Tenable_WAS_Vuln_CL`](../tables/tenable-was-vuln-cl.md) | [Tenable Vulnerability Management](../connectors/tenablevm.md) | - |

## Content Items

This solution includes **20 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 12 |
| Playbooks | 3 |
| Parsers | 3 |
| Workbooks | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [TIE Active Directory attacks pathways](../content/tenable-app-tie-active-directory-attacks-pathways-de549a62-f595-4810-88bd-621338186588-8d945f8a.md) | Low | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [TIE DCShadow](../content/tenable-app-tie-dcshadow-874e3530-552e-437b-ba2e-227979e7e43c-398b98b9.md) | High | DefenseEvasion | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [TIE DCSync](../content/tenable-app-tie-dcsync-19d1f964-ddcf-437b-92ce-b9c1c14d24f1-8c44578b.md) | High | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [TIE Golden Ticket](../content/tenable-app-tie-golden-ticket-216e12dd-165a-4537-b241-32e1bd3330c7-7def72b1.md) | High | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [TIE Indicators of Attack](../content/tenable-app-tie-indicators-of-attack-6c75f0d2-2973-4188-bb05-ec7bc8696120-0f2547b1.md) | Low | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [TIE Indicators of Exposures](../content/tenable-app-tie-indicators-of-exposures-f6ae2eb2-97c9-4e0f-ae73-7420ef80d99d-af82d6d0.md) | Low | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [TIE LSASS Memory](../content/tenable-app-tie-lsass-memory-7851f57c-98b6-43c6-9747-9bb7cf11f21c-105e8678.md) | High | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [TIE Password Guessing](../content/tenable-app-tie-password-guessing-d1416c25-5a56-4a88-8d7c-568e6551a307-1b7ef1ae.md) | High | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [TIE Password Spraying](../content/tenable-app-tie-password-spraying-f47eb8cb-4acb-4ee4-887d-0247c6d73a72-ec0050b3.md) | High | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [TIE Password issues](../content/tenable-app-tie-password-issues-87af910a-e9c0-4c96-8045-f778ba405251-e62ae59a.md) | Low | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [TIE privileged accounts issues](../content/tenable-app-tie-privileged-accounts-issues-5c170c73-75ba-48ea-8dfc-e4e2d4f23979-a4f698a7.md) | Low | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [TIE user accounts issues](../content/tenable-app-tie-user-accounts-issues-c4562ef3-d821-4089-b6c0-120d95c855e6-748b2811.md) | Low | CredentialAccess | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [TenableIEIoA](../content/tenable-app-tenableieioa-03d04cb0.md) | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |
| [TenableIEIoE](../content/tenable-app-tenableieioe-ef6095f6.md) | [`AlsidForADLog_CL`](../tables/alsidforadlog-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Tenable VM - Enrich incident with asset info](../content/tenable-app-tenable-vm-enrich-incident-with-asset-info-c63aded0.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | [`Tenable_VM_Asset_CL`](../tables/tenable-vm-asset-cl.md) *(read)* |
| [Tenable VM - Enrich incident with vulnerability info](../content/tenable-app-tenable-vm-enrich-incident-with-vulnerability-info-a70a5679.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | [`Tenable_VM_Vuln_CL`](../tables/tenable-vm-vuln-cl.md) *(read)* |
| [Tenable VM - Launch Scan](../content/tenable-app-tenable-vm-launch-scan-432d5e79.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [TenableVMAssets](../content/tenable-app-tenablevmassets-3b381d0c-a650-4f74-b7c6-13c731f3ea48-7f3bc7b3.md) | - | [`Tenable_VM_Asset_CL`](../tables/tenable-vm-asset-cl.md) *(read)* |
| [TenableVMVulnerabilities](../content/tenable-app-tenablevmvulnerabilities-0c75ae72-bca4-4b53-a4f5-7c6d34e8b9cb-9cd90b90.md) | - | [`Tenable_VM_Vuln_CL`](../tables/tenable-vm-vuln-cl.md) *(read)* |
| [afad_parser](../content/tenable-app-afad-parser-612975c5-4856-4ca0-a36e-64dbb7b70d18-2ec73fc6.md) | - | [`Tenable_IE_CL`](../tables/tenable-ie-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.1.1       | 12-09-2025                     | Added button for Azure Gov Cloud in the UI page of the data connector.
| 3.1.0       | 19-06-2025                     | Updated the python runtime version to 3.12. Updated pyTenable sdk version to 1.7.4. Added support for WAS Asset and WAS Vuln data ingestion. Removed Queue Trigger functions and updated with Durable Functions. Added support for Log Ingestion API and updated parsers and playbooks accordingly |
| 3.0.1       | 05-09-2024                     | Updated the python runtime version to 3.11 |
| 3.0.0       | 03-07-2024                     | Initial Solution Release                    |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

