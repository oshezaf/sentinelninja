# TenableIO

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Tenable |
| **Support Tier** | Partner |
| **Support Link** | [https://www.tenable.com/support/technical-support](https://www.tenable.com/support/technical-support) |
| **Categories** | domains |
| **First Published** | 2022-06-01 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TenableIO](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TenableIO) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Tenable.io Vulnerability Management](../connectors/tenableioapi.md)

## Tables Reference

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Tenable_IO_Assets_CL`](../tables/tenable-io-assets-cl.md) | [Tenable.io Vulnerability Management](../connectors/tenableioapi.md) | Playbooks |
| [`Tenable_IO_Vuln_CL`](../tables/tenable-io-vuln-cl.md) | [Tenable.io Vulnerability Management](../connectors/tenableioapi.md) | Playbooks |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 3 |
| Parsers | 2 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Tenable.io - Enrich incident with asset info](../content/tenableio-tenable.io---enrich-incident-with-asset-info.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | [`Tenable_IO_Assets_CL`](../tables/tenable-io-assets-cl.md) *(read)* |
| [Tenable.io - Enrich incident with vulnerability info](../content/tenableio-tenable.io---enrich-incident-with-vulnerability-info.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | [`Tenable_IO_Vuln_CL`](../tables/tenable-io-vuln-cl.md) *(read)* |
| [Tenable.io - Launch Scan](../content/tenableio-tenable.io---launch-scan.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [TenableIOAssets](../content/tenableio-tenableioassets-6c5ef8f1-8bb3-4444-921d-2d9ac007f469.md) | - | - |
| [TenableIOVulnerabilities](../content/tenableio-tenableiovulnerabilities-4099e6de-30d4-4d7a-85df-caafe8f858fe.md) | - | - |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
