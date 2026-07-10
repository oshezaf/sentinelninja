# ⚠️ Lookout Cloud Security Platform for Microsoft Sentinel

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Lookout Cloud Security Platform for Microsoft Sentinel Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Lookout |
| **Support Tier** | Partner |
| **Support Link** | [https://www.lookout.com/support](https://www.lookout.com/support) |
| **Categories** | Security - Cloud Security |
| **Source Vendor** | Lookout *(basis: publisher)* |
| **Source Product** | Cloud Security |
| **Version** | 3.0.0 |
| **Author** | Lookout |
| **First Published** | 2023-02-17 |
| **Solution Folder** | [Lookout Cloud Security Platform for Microsoft Sentinel](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Lookout%20Cloud%20Security%20Platform%20for%20Microsoft%20Sentinel) |

The Lookout Cloud Security solution for Microsoft Sentinel enables enterprises to search for Lookout cloud security threats and compliance violations, create custom dashboards and create alerts in Microsoft Sentinel SIEM.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Lookout Cloud Security for Microsoft Sentinel](../connectors/lookoutcloudsecuritydataconnector.md) 🔶

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`LookoutCloudSecurity_CL`](../tables/lookoutcloudsecurity-cl.md) 🔶 | [Lookout Cloud Security for Microsoft Sentinel](../connectors/lookoutcloudsecuritydataconnector.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 3 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [LookoutCSActivities](../parsers/lookoutcsactivities.md) | - | [`LookoutCloudSecurity_CL`](../tables/lookoutcloudsecurity-cl.md) *(read)* |
| [LookoutCSAnomalies](../parsers/lookoutcsanomalies.md) | - | [`LookoutCloudSecurity_CL`](../tables/lookoutcloudsecurity-cl.md) *(read)* |
| [LookoutCSViolations](../parsers/lookoutcsviolations.md) | - | [`LookoutCloudSecurity_CL`](../tables/lookoutcloudsecurity-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 05-09-2024                     | Updated the python runtime version to 3.11  |
|             | 14-11-2023                     | **Data Connector** Updated data connector to use Lookout SASE Platform Integration API v23.2|
| 2.0.0       | 20-02-2023                     | Initial Solution Release |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

