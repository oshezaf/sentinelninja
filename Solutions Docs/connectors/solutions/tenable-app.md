# Tenable App

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Tenable |
| **Support Tier** | Partner |
| **Support Link** | [https://www.tenable.com/support/technical-support](https://www.tenable.com/support/technical-support) |
| **Categories** | domains |
| **First Published** | 2024-06-06 |
| **Last Updated** | 2025-06-19 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tenable%20App](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tenable%20App) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Tenable Identity Exposure](../connectors/tenableie.md)
- [Tenable Vulnerability Management](../connectors/tenablevm.md)

## Tables Reference

This solution uses **6 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Tenable_IE_CL`](../tables/tenable-ie-cl.md) | [Tenable Identity Exposure](../connectors/tenableie.md) | Analytics, Workbooks |
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
| [TIE Active Directory attacks pathways](../content/de549a62-f595-4810-88bd-621338186588.md) | Low | CredentialAccess | [`Tenable_IE_CL`](../tables/tenable-ie-cl.md) |
| [TIE DCShadow](../content/874e3530-552e-437b-ba2e-227979e7e43c.md) | High | DefenseEvasion | [`Tenable_IE_CL`](../tables/tenable-ie-cl.md) |
| [TIE DCSync](../content/19d1f964-ddcf-437b-92ce-b9c1c14d24f1.md) | High | CredentialAccess | [`Tenable_IE_CL`](../tables/tenable-ie-cl.md) |
| [TIE Golden Ticket](../content/216e12dd-165a-4537-b241-32e1bd3330c7.md) | High | CredentialAccess | [`Tenable_IE_CL`](../tables/tenable-ie-cl.md) |
| [TIE Indicators of Attack](../content/6c75f0d2-2973-4188-bb05-ec7bc8696120.md) | Low | CredentialAccess | [`Tenable_IE_CL`](../tables/tenable-ie-cl.md) |
| [TIE Indicators of Exposures](../content/f6ae2eb2-97c9-4e0f-ae73-7420ef80d99d.md) | Low | CredentialAccess | [`Tenable_IE_CL`](../tables/tenable-ie-cl.md) |
| [TIE LSASS Memory](../content/7851f57c-98b6-43c6-9747-9bb7cf11f21c.md) | High | CredentialAccess | [`Tenable_IE_CL`](../tables/tenable-ie-cl.md) |
| [TIE Password Guessing](../content/d1416c25-5a56-4a88-8d7c-568e6551a307.md) | High | CredentialAccess | [`Tenable_IE_CL`](../tables/tenable-ie-cl.md) |
| [TIE Password Spraying](../content/f47eb8cb-4acb-4ee4-887d-0247c6d73a72.md) | High | CredentialAccess | [`Tenable_IE_CL`](../tables/tenable-ie-cl.md) |
| [TIE Password issues](../content/87af910a-e9c0-4c96-8045-f778ba405251.md) | Low | CredentialAccess | [`Tenable_IE_CL`](../tables/tenable-ie-cl.md) |
| [TIE privileged accounts issues](../content/5c170c73-75ba-48ea-8dfc-e4e2d4f23979.md) | Low | CredentialAccess | [`Tenable_IE_CL`](../tables/tenable-ie-cl.md) |
| [TIE user accounts issues](../content/c4562ef3-d821-4089-b6c0-120d95c855e6.md) | Low | CredentialAccess | [`Tenable_IE_CL`](../tables/tenable-ie-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [TenableIEIoA](../content/tenableieioa-tenable-app.md) | [`Tenable_IE_CL`](../tables/tenable-ie-cl.md) |
| [TenableIEIoE](../content/tenableieioe-tenable-app.md) | [`Tenable_IE_CL`](../tables/tenable-ie-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Tenable VM - Enrich incident with asset info](../content/tenable-vm---enrich-incident-with-asset-info-tenable-app.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | [`Tenable_VM_Asset_CL`](../tables/tenable-vm-asset-cl.md) *(read)* |
| [Tenable VM - Enrich incident with vulnerability info](../content/tenable-vm---enrich-incident-with-vulnerability-info-tenable-app.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | [`Tenable_VM_Vuln_CL`](../tables/tenable-vm-vuln-cl.md) *(read)* |
| [Tenable VM - Launch Scan](../content/tenable-vm---launch-scan-tenable-app.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [TenableVMAssets](../content/3b381d0c-a650-4f74-b7c6-13c731f3ea48.md) | - | - |
| [TenableVMVulnerabilities](../content/0c75ae72-bca4-4b53-a4f5-7c6d34e8b9cb.md) | - | - |
| [afad_parser](../content/612975c5-4856-4ca0-a36e-64dbb7b70d18.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.1.1       | 12-09-2025                     | Added button for Azure Gov Cloud in the UI page of the data connector.
| 3.1.0       | 19-06-2025                     | Updated the python runtime version to 3.12. Updated pyTenable sdk version to 1.7.4. Added support for WAS Asset and WAS Vuln data ingestion. Removed Queue Trigger functions and updated with Durable Functions. Added support for Log Ingestion API and updated parsers and playbooks accordingly |
| 3.0.1       | 05-09-2024                     | Updated the python runtime version to 3.11 |
| 3.0.0       | 03-07-2024                     | Initial Solution Release                    |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
