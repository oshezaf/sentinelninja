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
| **Version** | 3.3.0 |
| **Author** | Varonis |
| **First Published** | 2023-11-10 |
| **Last Updated** | 2026-09-08 |
| **Solution Folder** | [VaronisSaaS](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VaronisSaaS) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/varonis.microsoft-sentinel-solution-varonissaas) · Popularity: 🟢 High (83%) |

The Varonis SaaS integration allows you to retrieve Varonis DatAlert alerts, create incident and pull activities related to the alerts for conducting investigations.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [[Deprecated] Varonis SaaS](../connectors/varonissaas.md) ⚠️ 🔶
- [Varonis SaaS (Push)](../connectors/varonissaasalertspush.md) 🔶

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`VaronisAlertsV2_CL`](../tables/varonisalertsv2-cl.md) 🔶 | [Varonis SaaS (Push)](../connectors/varonissaasalertspush.md) | Analytics, Workbooks |
| [`VaronisAlerts_CL`](../tables/varonisalerts-cl.md) 🔶 | [[Deprecated] Varonis SaaS](../connectors/varonissaas.md) | - |


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
| [Varonis - High severity alerts detected](../content/varonissaas-varonis-high-severity-alerts-detected-7d2c9a41-5b8e-4f36-9c1a-2e6b8d4f7a13-4e1d4d3c.md) | High | Collection, Exfiltration | [`VaronisAlertsV2_CL`](../tables/varonisalertsv2-cl.md) |
| [Varonis - Informational alerts detected](../content/varonissaas-varonis-informational-alerts-detected-e5a7c93b-8d14-42f6-b7c0-3a9e1f6d5b28-0b3681bb.md) | Informational | Collection, Exfiltration | [`VaronisAlertsV2_CL`](../tables/varonisalertsv2-cl.md) |
| [Varonis - Low severity alerts detected](../content/varonissaas-varonis-low-severity-alerts-detected-9b1f3e7a-6c42-4d18-a5e9-2b7f8c0d4e61-3ed08cd4.md) | Low | Collection, Exfiltration | [`VaronisAlertsV2_CL`](../tables/varonisalertsv2-cl.md) |
| [Varonis - Medium severity alerts detected](../content/varonissaas-varonis-medium-severity-alerts-detected-c4e8b16f-3a92-4d75-8e21-6f9c0b5d2a84-b5ee29f4.md) | Medium | Collection, Exfiltration | [`VaronisAlertsV2_CL`](../tables/varonisalertsv2-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [VaronisSaaS](../content/varonissaas-varonissaas-5667e619.md) | [`VaronisAlertsV2_CL`](../tables/varonisalertsv2-cl.md) |

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
| Connector type                | Codeless Connector Framework (CCF) Push       |
| Log Analytics table(s)        | VaronisAlertsV2_CL                            |
| Data collection rules support | Supported (DCR stream `Custom-VaronisSaaSAlerts`) |
| Supported by                  | Varonis Corporation                           |

## Query samples
#### All Varonis alerts

```kusto
VaronisAlertsV2_CL
| sort by TimeGenerated desc
```

## Prerequisites
To integrate with Varonis SaaS (Push) make sure you have the following:
- Workspace: read, write and delete permissions on the Log Analytics workspace.
- Microsoft Entra: permission to create an app registration (typically the Application Developer role or higher).
- Microsoft Azure: permission to assign the Monitoring Metrics Publisher role on the data collection rule (typically the Owner or User Access Administrator role).

## Vendor installation instructions
>This connector uses the Codeless Connector Framework (CCF) Push pattern. Varonis SaaS pushes DatAlert alerts to Microsoft Sentinel through the Azure Monitor Logs Ingestion API.

STEP 1 - Create the Azure resources.

1. In Microsoft Sentinel, open **Data connectors** and select **Varonis SaaS (Push)**.
2. Click **Deploy Varonis SaaS Push connector resources**. This creates the `VaronisAlertsV2_CL` table, a data collection rule, and a Microsoft Entra application with a client secret, and grants the application the Monitoring Metrics Publisher role on the data collection rule.

STEP 2 - Configure your Varonis SaaS application.

Copy the following values from the connector page into your Varonis SaaS application configuration:
- Tenant ID (Directory ID)
- Entra App Registration Application ID
- Entra App Registration Secret
- Data Collection Endpoint Uri
- Data Collection Rule Immutable ID
- Stream Name (`Custom-VaronisSaaSAlerts`)

## Next
For more information, go to the related solution in the Azure Marketplace.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.3.0       | 23-10-2026                     | Removed the deprecated Azure Function data connector from the solution. The workbook now queries only the **VaronisAlertsV2_CL** table populated by the CCF Push data connector. Added a note to the connector page that deployment must be done from Microsoft Sentinel in the Azure portal |
| 3.2.0       | 20-08-2026                     | CCF Push data connector now ingests into the dedicated **VaronisAlertsV2_CL** table to avoid schema conflicts with the legacy Azure Function connector's table |
| 3.1.1       | 29-07-2026                     | Mark Azure Function data connector as Deprecated |
| 3.1.0       | 21-04-2026                     | Add CCF Push data connector                 |
| 3.0.3       | 25-11-2025                     | Add Informational severity level support    |
| 3.0.2       | 12-09-2025                     | Save last alert ingest time                 |
| 3.0.1       | 02-12-2025                     | Bug fixes                                   |
| 3.0.0       | 02-07-2024                     | Refactor azure function                     |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

