# Lookout Cloud Security Platform for Microsoft Sentinel

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Lookout Cloud Security Platform for Microsoft Sentinel Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Lookout |
| **Support Tier** | Partner |
| **Support Link** | [https://www.lookout.com/support](https://www.lookout.com/support) |
| **Categories** | domains |
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

- [Lookout Cloud Security for Microsoft Sentinel](../connectors/lookoutcloudsecuritydataconnector.md) �

> � **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`LookoutCloudSecurity_CL`](../tables/lookoutcloudsecurity-cl.md) � | [Lookout Cloud Security for Microsoft Sentinel](../connectors/lookoutcloudsecuritydataconnector.md) | - |


> � **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).
## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 3 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [LookoutCSActivities](../content/lookout-cloud-security-platform-for-microsoft-sentinel-lookoutcsactivities-ecaf0d02-9547-4e2d-b4fd-48112442430e-1f450e47.md) | - | [`LookoutCloudSecurity_CL`](../tables/lookoutcloudsecurity-cl.md) *(read)* |
| [LookoutCSAnomalies](../content/lookout-cloud-security-platform-for-microsoft-sentinel-lookoutcsanomalies-411d9caf-088b-42d7-b1d0-7db898efc1b4-e3e9a60c.md) | - | [`LookoutCloudSecurity_CL`](../tables/lookoutcloudsecurity-cl.md) *(read)* |
| [LookoutCSViolations](../content/lookout-cloud-security-platform-for-microsoft-sentinel-lookoutcsviolations-3394b060-0e55-4ecc-828e-a5671e3275cd-d0207f9f.md) | - | [`LookoutCloudSecurity_CL`](../tables/lookoutcloudsecurity-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 05-09-2024                     | Updated the python runtime version to 3.11  |
|             | 14-11-2023                     | **Data Connector** Updated data connector to use Lookout SASE Platform Integration API v23.2|
| 2.0.0       | 20-02-2023                     | Initial Solution Release |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

