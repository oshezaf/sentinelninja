# Cayosoft Guardian

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cayosoft-logo.svg" alt="Cayosoft Guardian Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cayosoft Support |
| **Support Tier** | Partner |
| **Support Link** | [https://www.cayosoft.com/support](https://www.cayosoft.com/support) |
| **Categories** | Identity,Security - Threat Protection,Security - Insider Threat,Security - Vulnerability Management,Security - Information Protection,Security - Cloud Security |
| **Version** | 3.0.0 |
| **Author** | Cayosoft |
| **First Published** | 2026-07-09 |
| **Last Updated** | 2026-08-13 |
| **Solution Folder** | [Cayosoft Guardian](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cayosoft%20Guardian) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/cayosoftinc.cayosoft_guardian_solution) · Popularity: ⚪ Very Low (0%) |

The Cayosoft Guardian solution for Microsoft Sentinel provides seamless integration for your identity security alerts. It automatically ingests threat alerts from Cayosoft Guardian into Microsoft Sentinel via the Azure Monitor Agent (AMA) and Data Collection Rules (DCR). After the data is ingested into the custom CayosoftThreatAlerts_CL table, Microsoft Sentinel can use it for monitoring, analytics, incident creation, investigation, and automated response across your hybrid identity environment. The solution includes a Data Connector, a comprehensive Threats Dashboard, and pre-configured Analytic Rules.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cayosoft Guardian Threat Alerts](../connectors/cayosoftguardianconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CayosoftThreatAlerts_CL`](../tables/cayosoftthreatalerts-cl.md) | [Cayosoft Guardian Threat Alerts](../connectors/cayosoftguardianconnector.md) | Analytics, Workbooks |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityIncident`](../tables/securityincident.md) | - | Workbooks |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Cayosoft Guardian - Cloud Application Security Threats](../content/cayosoft-guardian-cayosoft-guardian-cloud-application-security-threats-e6f6c71c-f1fd-473b-9129-249db5d7462c-429092f9.md) | Medium | - | [`CayosoftThreatAlerts_CL`](../tables/cayosoftthreatalerts-cl.md) |
| [Cayosoft Guardian - Core Identity and Infrastructure Threats](../content/cayosoft-guardian-cayosoft-guardian-core-identity-and-infrastructure-threats-4720d7a5-6845-4ce4-aa45-79334e1a1176-0f15a2e7.md) | Medium | - | [`CayosoftThreatAlerts_CL`](../tables/cayosoftthreatalerts-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [WorkbookContent](../content/cayosoft-guardian-workbookcontent-32aebefa.md) | [`CayosoftThreatAlerts_CL`](../tables/cayosoftthreatalerts-cl.md)<br>*Internal use:*<br>[`SecurityIncident`](../tables/securityincident.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**              |
|-------------|--------------------------------|---------------------------------|
| 3.0.0       | 15-07-2026                     | Initial Solution Release.       |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

