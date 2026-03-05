# TenableIO

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/tenableio_logo.svg" alt="TenableIO Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Tenable |
| **Support Tier** | Partner |
| **Support Link** | [https://www.tenable.com/support/technical-support](https://www.tenable.com/support/technical-support) |
| **Categories** | domains |
| **Version** | 2.0.2 |
| **Author** | Tenable - support@tenable.com |
| **First Published** | 2022-06-01 |
| **Solution Folder** | [TenableIO](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TenableIO) |

The [Tenableio](https://www.tenable.com/products/tenable-io) solution provides the capability to ingest Asset and Vulnerability data into Microsoft Sentinel through the REST API from the Tenable.io platform (Managed in the cloud). Refer to [API documentation](https://developer.tenable.com/reference/navigate) for more information.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Tenable.io Vulnerability Management](../connectors/tenableioapi.md) 🔶

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Tenable_IO_Assets_CL`](../tables/tenable-io-assets-cl.md) 🔶 | [Tenable.io Vulnerability Management](../connectors/tenableioapi.md) | Playbooks |
| [`Tenable_IO_Vuln_CL`](../tables/tenable-io-vuln-cl.md) 🔶 | [Tenable.io Vulnerability Management](../connectors/tenableioapi.md) | Playbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).
## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 3 |
| Parsers | 2 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Tenable.io - Enrich incident with asset info](../content/tenableio-tenable.io-enrich-incident-with-asset-info-03f97e46.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | [`Tenable_IO_Assets_CL`](../tables/tenable-io-assets-cl.md) *(read)* |
| [Tenable.io - Enrich incident with vulnerability info](../content/tenableio-tenable.io-enrich-incident-with-vulnerability-info-9da265bb.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | [`Tenable_IO_Vuln_CL`](../tables/tenable-io-vuln-cl.md) *(read)* |
| [Tenable.io - Launch Scan](../content/tenableio-tenable.io-launch-scan-f49e53b9.md) | Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the fol... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [TenableIOAssets](../parsers/tenableioassets.md) ⚠️ | - | [`Tenable_IO_Assets_CL`](../tables/tenable-io-assets-cl.md) *(read)* |
| [TenableIOVulnerabilities](../parsers/tenableiovulnerabilities.md) ⚠️ | - | [`Tenable_IO_Vuln_CL`](../tables/tenable-io-vuln-cl.md) *(read)* |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

