# CITRIX SECURITY ANALYTICS

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/citrix-logo-circle-black.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `Citrix` |
| **Publisher** | CITRIX |
| **Used in Solutions** | [Citrix Analytics for Security](../solutions/citrix-analytics-for-security.md) |
| **Collection Method** | [Unknown (Custom Log)](../methods/unknown-custom-log.md) |
| **Connector Definition Files** | [CitrixSecurityAnalytics.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Citrix%20Analytics%20for%20Security/Data%20Connectors/CitrixSecurityAnalytics.json) |

Citrix Analytics (Security) integration with Microsoft Sentinel helps you to export data analyzed for risky events from Citrix Analytics (Security) into Microsoft Sentinel environment. You can create custom dashboards, analyze data from other sources along with that from Citrix Analytics (Security) and create custom workflows using Logic Apps to monitor and mitigate security events.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`CitrixAnalytics_indicatorEventDetails_CL`](../tables/citrixanalytics-indicatoreventdetails-cl.md) | — | — |
| [`CitrixAnalytics_indicatorSummary_CL`](../tables/citrixanalytics-indicatorsummary-cl.md) | — | — |
| [`CitrixAnalytics_riskScoreChange_CL`](../tables/citrixanalytics-riskscorechange-cl.md) | — | — |
| [`CitrixAnalytics_userProfile_CL`](../tables/citrixanalytics-userprofile-cl.md) | — | — |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Licensing**: Entitlements to Citrix Security Analytics in Citrix Cloud. Please review [Citrix Tool License Agreement.](https://aka.ms/sentinel-citrixanalyticslicense-readme)

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

To get access to this capability and the configuration steps on Citrix Analytics, please visit: [Connect Citrix to Microsoft Sentinel.](https://aka.ms/Sentinel-Citrix-Connector)​
- **Workspace ID**: `WorkspaceId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Primary Key**: `PrimaryKey`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

## Additional Documentation

> 📄 *Source: [Citrix Analytics for Security\Data Connectors\CitrixSecurityAnalyticsLicense.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Citrix Analytics for Security\Data Connectors\CitrixSecurityAnalyticsLicense.md)*

Use of this Citrix Workbook is subject to the Citrix license covering the specific edition of the Citrix product with which you will be using this software. Citrix’s standard end-user license agreement (EULA) for its on-premises software and hardware offerings and its standard end-user service agreement (EUSA) for its Citrix Cloud and other SaaS offerings are available at https://www.citrix.com/buy/licensing/agreements.html. Your use of this software is limited to use in connection with the Citrix product(s) to which you are licensed. Certain third-party software may be provided with this software that is subject to separate license conditions. The licenses are located in the third-party licenses file accompanying this component or in the corresponding license files available at www.citrix.com .

Citrix and other marks are trademarks and/or registered trademarks of Citrix Systems, Inc. in the U.S. and other countries.

Last Modified: 2021-06-24

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

