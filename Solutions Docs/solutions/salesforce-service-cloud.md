# Salesforce Service Cloud

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/salesforce_logo.svg" alt="Salesforce Service Cloud Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.10 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-16 |
| **Last Updated** | 2026-01-27 |
| **Solution Folder** | [Salesforce Service Cloud](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Salesforce%20Service%20Cloud) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-salesforceservicecloud) · Popularity: 🟢 High (93%) |

The [Salesforce Service Cloud](https://www.salesforce.com/in/products/service-cloud/overview/) solution for Microsoft Sentinel enables you to ingest Service Cloud events into Microsoft Sentinel.
  
  **Underlying Microsoft Technologies used:** 

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

 • [Microsoft Sentinel Codeless Connector Framework](https://aka.ms/Sentinel-CCP_Platform)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [[DEPRECATED] Salesforce Service Cloud](../connectors/salesforceservicecloud.md) ⚠️ 🔶
- [Salesforce Service Cloud (via Codeless Connector Framework)](../connectors/salesforceservicecloudccpdefinition.md)

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SalesforceServiceCloudV2_CL`](../tables/salesforceservicecloudv2-cl.md) | [Salesforce Service Cloud (via Codeless Connector Framework)](../connectors/salesforceservicecloudccpdefinition.md), [[DEPRECATED] Salesforce Service Cloud](../connectors/salesforceservicecloud.md) | Analytics, Workbooks |
| [`SalesforceServiceCloud_CL`](../tables/salesforceservicecloud-cl.md) 🔶 | [[DEPRECATED] Salesforce Service Cloud](../connectors/salesforceservicecloud.md) | Analytics, Workbooks |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | - | Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Brute force attack against user credentials](../content/salesforce-service-cloud-brute-force-attack-against-user-credentials-5a6ce089-e756-40fb-b022-c8e8864a973a-39827da6.md) | Medium | CredentialAccess | [`SalesforceServiceCloudV2_CL`](../tables/salesforceservicecloudv2-cl.md)<br>[`SalesforceServiceCloud_CL`](../tables/salesforceservicecloud-cl.md) |
| [Potential Password Spray Attack](../content/salesforce-service-cloud-potential-password-spray-attack-64d16e62-1a17-4a35-9ea7-2b9fe6f07118-5b230e48.md) | Medium | CredentialAccess | [`SalesforceServiceCloudV2_CL`](../tables/salesforceservicecloudv2-cl.md)<br>[`SalesforceServiceCloud_CL`](../tables/salesforceservicecloud-cl.md) |
| [User Sign in from different countries](../content/salesforce-service-cloud-user-sign-in-from-different-countries-3094e036-e5ae-4d6e-8626-b0f86ebc71f2-a92654f0.md) | Medium | InitialAccess | [`SalesforceServiceCloudV2_CL`](../tables/salesforceservicecloudv2-cl.md)<br>[`SalesforceServiceCloud_CL`](../tables/salesforceservicecloud-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SalesforceServiceCloud](../content/salesforce-service-cloud-salesforceservicecloud-a9451acb.md) | [`SalesforceServiceCloudV2_CL`](../tables/salesforceservicecloudv2-cl.md)<br>[`SalesforceServiceCloud_CL`](../tables/salesforceservicecloud-cl.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [SalesforceServiceCloud](../parsers/salesforceservicecloud.md) | - | [`SalesforceServiceCloudV2_CL`](../tables/salesforceservicecloudv2-cl.md) *(read)*<br>[`SalesforceServiceCloud_CL`](../tables/salesforceservicecloud-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.10      | 23-01-2026                     | Update the Salesforce data connector with instructions for the Salesforce Shield Event Monitoring license requirement     |
| 3.0.9       | 17-11-2025                     | Resolved bug in **CCF Data Connector** related to column names     |
| 3.0.8       | 04-11-2025                     | Resolved bugs in **Analytic rules** related to TimestampDerived field.         |
| 3.0.7       | 02-11-2025                     | Updated CCF Data Connector polling config to v65.0.                |
| 3.0.6       | 17-10-2025                     | Updated KQL transformation logic to map USER_NAME to the UserEmail column instead of USER_EMAIL.|
| 3.0.5       | 20-08-2025                     | Moving Salesforce Service cloud **CCF Data Connector** to GA.		|
| 3.0.4       | 11-07-2025                     | Salesforce **Workbook** updated with new ThreatIntelIndicators.	|
| 3.0.3       | 03-07-2025                     | Added Preview tag to CCF Connector title.<br/>Deprecated Function app Connector.		|
| 3.0.2       | 24-03-2025                     | Updated **Analytic rules** query to use TimeStampDerived column rather than TimeGenerated. |
| 3.0.1       | 06-02-2025                     | Updated timeframes for Salesforce cloud **Analytic rules**.			|
| 3.0.0       | 05-09-2023                     | Manual deployment instructions updated for **Data Connector**.		|

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

