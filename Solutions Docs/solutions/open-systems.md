# Open Systems Data Connector for Microsoft Sentinel

*Solution: Open Systems*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/opensystems_logo.svg" alt="Open Systems Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Open Systems |
| **Support Tier** | Partner |
| **Support Link** | [https://www.open-systems.com/support](https://www.open-systems.com/support) |
| **Categories** | Security - Threat Protection,Security - Network |
| **Source Vendor** | Open Systems *(basis: publisher)* |
| **Version** | 3.0.0 |
| **Author** | Open Systems - support@open-systems.com |
| **First Published** | 2025-05-12 |
| **Solution Folder** | [Open Systems](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Open%20Systems) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/opensystemsag1582030008223.azure-sentinel-solution-osag) · Popularity: 🔵 Medium (71%) |

Designed for security teams, the Open Systems Data Connector for Microsoft Sentinel delivers log data to customers. It extracts network security data and pushes it seamlessly to Microsoft Sentinel to provide SOC teams and incident responders with vital insights into their cybersecurity landscape.
  
  **Underlying Microsoft Technologies used:** 

 This solution takes a dependency on the following technologies:

  a. [Azure Monitor Data Collection](https://learn.microsoft.com/en-us/azure/azure-monitor/data-collection/data-collection-rule-overview)



  b. [Azure Container Apps](https://azure.microsoft.com/services/container-apps/)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Open Systems Data Connector](../connectors/opensystems.md) 🔶

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`OpenSystemsAuthenticationLogs_CL`](../tables/opensystemsauthenticationlogs-cl.md) 🔶 | [Open Systems Data Connector](../connectors/opensystems.md) | - |
| [`OpenSystemsFirewallLogs_CL`](../tables/opensystemsfirewalllogs-cl.md) 🔶 | [Open Systems Data Connector](../connectors/opensystems.md) | - |
| [`OpenSystemsProxyLogs_CL`](../tables/opensystemsproxylogs-cl.md) 🔶 | [Open Systems Data Connector](../connectors/opensystems.md) | - |
| [`OpenSystemsZtnaLogs_CL`](../tables/opensystemsztnalogs-cl.md) 🔶 | [Open Systems Data Connector](../connectors/opensystems.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 5 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [AuthASIMParser](../parsers/authasimparser.md) | - | - |
| [FirewallASIMParser](../parsers/firewallasimparser.md) | - | - |
| [FirewallASIMParserFilter](../parsers/firewallasimparserfilter.md) | - | - |
| [ProxyASIMParser](../parsers/proxyasimparser.md) | - | - |
| [ProxyASIMParserFilter](../parsers/proxyasimparserfilter.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                               |
|-------------|--------------------------------|------------------------------------------------------------------|
|  3.0.0      |  12-05-2025                    | Initial Solution release.										  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

