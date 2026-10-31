# Airlock Digital for Microsoft Sentinel

*Solution: AirlockDigital*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/AirlockDigital.svg" alt="AirlockDigital Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Airlock Digital |
| **Support Tier** | Partner |
| **Support Link** | [https://www.airlockdigital.com/](https://www.airlockdigital.com/) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.2.0 |
| **Author** | Airlock Digital - support@airlockdigital.com |
| **First Published** | 2026-08-04 |
| **Last Updated** | 2026-08-26 |
| **Solution Folder** | [AirlockDigital](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AirlockDigital) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/airlockdigitalptyltd1783575912163.azure-sentinel-solution-airlockdigital) · Popularity: 🟡 Low (19%) |

The [Airlock Digital](https://www.airlockdigital.com/) solution for Microsoft Sentinel ingests application control and execution logs from Airlock Digital using the Codeless Connector Platform (CCP), giving visibility into file executions, server activity, and policy changes.

The solution provides three data connectors so you can choose the one that matches your deployment:

a. **Airlock Digital (Push)** -- for self-hosted servers and Airlock Digital SaaS running v7.0 or higher. Airlock's external logging feature streams execution history, server activity, and policy change events into Microsoft Sentinel in near real time, authenticating with a Microsoft Entra application. This is the recommended connector.

b. **Airlock Digital (Poll)** -- for self-hosted servers older than v7.0 that do not support push-based logging. Periodically pulls execution history and server activity from the Airlock REST API using a user API key.

c. **Airlock Digital (Poll - SaaS)** -- for the Airlock Digital hosted SaaS offering, authenticating with a user API key together with your directory and tenant identifiers.

The solution also installs ASIM parsers that normalize Airlock data into the Process Event and Audit Event schemas, plus a workbook summarizing application control activity.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in Preview state or might result in additional ingestion or operational costs:

a. [Codeless Connector Platform (CCP)](https://docs.microsoft.com/azure/sentinel/create-codeless-connector?tabs=deploy-via-arm-template%2Cconnect-via-the-azure-portal)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **3 data connector(s)** (plus 1 discovered⚠️):

- [Airlock Digital connector (via Codeless Connector Framework)](../connectors/airlockdigitalconnector.md) ⚠️
- [Airlock Digital (Poll)](../connectors/airlockdigitalpoll.md)
- [Airlock Digital (Push)](../connectors/airlockdigitalpush.md)
- [Airlock Digital (Poll - SaaS)](../connectors/airlockdigitalsaas.md)

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

## Tables Used

This solution uses **5 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AirlockDigitalExecutionHistories_CL`](../tables/airlockdigitalexecutionhistories-cl.md) | [Airlock Digital (Poll - SaaS)](../connectors/airlockdigitalsaas.md), [Airlock Digital (Poll)](../connectors/airlockdigitalpoll.md), [Airlock Digital (Push)](../connectors/airlockdigitalpush.md), [Airlock Digital connector (via Codeless Connector Framework)](../connectors/airlockdigitalconnector.md) | - |
| [`AirlockDigitalFileActivitySummary_CL`](../tables/airlockdigitalfileactivitysummary-cl.md) | [Airlock Digital connector (via Codeless Connector Framework)](../connectors/airlockdigitalconnector.md) | - |
| [`AirlockDigitalPolicyChanges_CL`](../tables/airlockdigitalpolicychanges-cl.md) | [Airlock Digital (Push)](../connectors/airlockdigitalpush.md) | - |
| [`AirlockDigitalServerActivities_CL`](../tables/airlockdigitalserveractivities-cl.md) | [Airlock Digital (Poll - SaaS)](../connectors/airlockdigitalsaas.md), [Airlock Digital (Poll)](../connectors/airlockdigitalpoll.md), [Airlock Digital (Push)](../connectors/airlockdigitalpush.md), [Airlock Digital connector (via Codeless Connector Framework)](../connectors/airlockdigitalconnector.md) | - |
| [`Operation`](../tables/operation.md) | - | Workbooks |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 3 |
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AirlockDigital](../content/airlockdigital-airlockdigital-f4806f05.md) | [`Operation`](../tables/operation.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ASimAuditEventAirlockDigital](../parsers/asimauditeventairlockdigital.md) | - | [`AirlockDigitalServerActivities_CL`](../tables/airlockdigitalserveractivities-cl.md) *(read)* |
| [ASimAuditEventAirlockDigitalPolicyChange](../parsers/asimauditeventairlockdigitalpolicychange.md) | - | [`AirlockDigitalPolicyChanges_CL`](../tables/airlockdigitalpolicychanges-cl.md) *(read)* |
| [ASimProcessEventAirlockDigital](../parsers/asimprocesseventairlockdigital.md) | - | [`AirlockDigitalExecutionHistories_CL`](../tables/airlockdigitalexecutionhistories-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                           |
|-------------|--------------------------------|--------------------------------------------------------------|
| 3.2.0       | 05-08-2026                     | Solution now published by Airlock Digital.<br/>Updated **Data Connector** *Airlock Digital (Poll)*.<br/>Added new **Data Connectors** *Airlock Digital (Push)* and *Airlock Digital (Poll - SaaS)*.<br/>Added new **Parsers** and **Workbook**. |
| 3.1.1       | 28-07-2026                     | Promoted the Airlock Digital data connector from public preview to general availability (GA). |
| 3.1.0       | 23-07-2026                     | Added multi-instance support: multiple simultaneous Airlock Digital server connections via a grid and context-pane UX with a multi-select data type dropdown and per-connection friendly name. Added a ConnectorName column to all data tables to identify the originating connection. Fixed log ingestion: increased data connector poller timeout to 120s and corrected the pagination token path to slice notation for Server Activities and Execution Histories to resolve fetch timeouts and out-of-range paging errors. Removed deprecated graphQueriesTableName property (hardcoded table names in queries). |
| 3.0.1       | 02-06-2026                     | Fixed: Removed empty ApiKeyIdentifier field for Partner Center certification compliance. Fixed UX description typo. |
| 3.0.0       | 20-05-2026                     | Created a Data Connector for Airlock Digital CCF Container with Server Activities, Execution Histories, and File Activity Summary data streams. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

