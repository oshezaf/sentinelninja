# Varonis for Sentinel Solutions

*Solution: VaronisSaaS*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/VaronisLogo.svg" alt="VaronisSaaS Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Varonis |
| **Support Tier** | Partner |
| **Support Link** | [https://www.varonis.com/resources/support](https://www.varonis.com/resources/support) |
| **Categories** | Security - Network |
| **Version** | 3.0.3 |
| **Author** | Varonis |
| **First Published** | 2023-11-10 |
| **Last Updated** | 2025-12-19 |
| **Solution Folder** | [VaronisSaaS](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VaronisSaaS) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/varonis.microsoft-sentinel-solution-varonissaas) · Popularity: 🔵 Medium (64%) |

The Varonis SaaS integration allows you to retrieve Varonis DatAlert alerts, create incident and pull activities related to the alerts for conducting investigations.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **2 data connector(s)**:

- [[Deprecated] Varonis SaaS](../connectors/varonissaas.md) 🔶
- [Varonis SaaS (Push)](../connectors/varonissaasalertspush.md) 🔶

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`VaronisAlerts_CL`](../tables/varonisalerts-cl.md) 🔶 | [Varonis SaaS (Push)](../connectors/varonissaasalertspush.md), [[Deprecated] Varonis SaaS](../connectors/varonissaas.md) | Analytics, Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 4 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Varonis - High severity alerts detected](../content/varonissaas-varonis-high-severity-alerts-detected-7d2c9a41-5b8e-4f36-9c1a-2e6b8d4f7a13-4e1d4d3c.md) | High | Collection, Exfiltration | [`VaronisAlerts_CL`](../tables/varonisalerts-cl.md) |
| [Varonis - Informational alerts detected](../content/varonissaas-varonis-informational-alerts-detected-e5a7c93b-8d14-42f6-b7c0-3a9e1f6d5b28-0b3681bb.md) | Informational | Collection, Exfiltration | [`VaronisAlerts_CL`](../tables/varonisalerts-cl.md) |
| [Varonis - Low severity alerts detected](../content/varonissaas-varonis-low-severity-alerts-detected-9b1f3e7a-6c42-4d18-a5e9-2b7f8c0d4e61-3ed08cd4.md) | Low | Collection, Exfiltration | [`VaronisAlerts_CL`](../tables/varonisalerts-cl.md) |
| [Varonis - Medium severity alerts detected](../content/varonissaas-varonis-medium-severity-alerts-detected-c4e8b16f-3a92-4d75-8e21-6f9c0b5d2a84-b5ee29f4.md) | Medium | Collection, Exfiltration | [`VaronisAlerts_CL`](../tables/varonisalerts-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [VaronisSaaS](../content/varonissaas-varonissaas-5667e619.md) | [`VaronisAlerts_CL`](../tables/varonisalerts-cl.md) |

## Additional Documentation

> 📄 *Source: [VaronisSaaS/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VaronisSaaS/README.md)*

# Varonis SaaS

### In this article
[Connector Attributes](#connector-attributes)\
[Connector Attributes](#query-samples)\
[Prerequisites](#prerequisites)\
[Vendor Installation Instructions](#vendor-installation-instructions)\
[Next Steps](#next-steps)

Varonis SaaS provides the capability to ingest [Varonis Alerts](https://www.varonis.com/products/SaaS) into Microsoft Sentinel.

Varonis prioritizes deep data visibility, classification capabilities, and automated remediation for data access. Varonis builds a single prioritized view of risk for your data, so you can proactively and systematically eliminate risk from insider threats and cyberattacks.

## Connector Attributes
| Connector attribute           | Description                                   |
| ----------------------------- | --------------------------------------------- |
| Azure function app code       | https://github.com/Azure/Azure-Sentinel/tree/master/Solutions/VaronisSaaS/Data%20Connectors/VaronisSaaSFunction |
| Log Analytics table(s)        | VaronisAlerts_CL                              |
| Data collection rules support | Not currently supported                       |
| Supported by                  | Varonis Corporation                           |

## Query samples
#### All Varonis Data Alerts logs

```kusto
VaronisAlerts_CL
| sort by TimeGenerated desc
```

## Prerequisites
To integrate with Varonis SaaS (using Azure Functions) make sure you have the following:
- Microsoft.Web/sites permissions: Read and write permissions to Azure Functions to create a Function App is required. See the [documentation](https://learn.microsoft.com/azure/azure-functions/) to learn more about Azure Functions.
- Varonis API credentials: Varonis API credentials with permission read log is required for Varonis SaaS API. See the documentation to learn more about creating Varonis SaaS API credentials.

## Vendor installation instructions
>This connector uses Azure Functions to connect to the Varonis SaaS Endpoint API to pull logs into Microsoft Sentinel. This might result in additional data ingestion costs. Check the [Azure Functions pricing page](https://azure.microsoft.com/pricing/details/functions/) for details.

STEP 1 - Obtain the Varonis DatAlert Endpoint API credentials.

To generate the Client ID and API key:

1. Launch the Varonis Web Interface.
2. Navigate to Configuration -> API Keys. The API Keys page is displayed.
3. Click Create API Key. The Add New API Key settings are displayed on the right.
4. Fill in the name and description.
5. Click the Generate Key button.
6. Copy the API key secret and save it in a handy location. You won't be able to copy it again.

For additional information, please check: [Varonis Documentation](https://help.varonis.com/s/document-item?bundleId=ami1661784208197&topicId=emp1703144742927.html&_LANG=enus)

STEP 2 - Deploy the connector and the associated Azure Function.

1. Click the Deploy to Azure button.\

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.1.1       | 29-07-2026                     | Mark Azure Function data connector as Deprecated |
| 3.1.0       | 21-04-2026                     | Add CCF Push data connector                 |
| 3.0.3       | 25-11-2025                     | Add Informational severity level support    |
| 3.0.2       | 12-09-2025                     | Save last alert ingest time                 |
| 3.0.1       | 02-12-2025                     | Bug fixes                                   |
| 3.0.0       | 02-07-2024                     | Refactor azure function                     |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

