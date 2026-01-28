# ZeroFox Enterprise - Alerts (Polling CCF)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/foxy-mark.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ZeroFoxAlertsDefinition` |
| **Publisher** | ZeroFox Enterprise |
| **Used in Solutions** | [ZeroFox](../solutions/zerofox.md) |
| **Collection Method** | CCF |
| **Connector Definition Files** | [ZeroFoxAlerts_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZeroFox/Data%20Connectors/Alerts/ZeroFoxAlerts_ConnectorDefinition.json) |

Collects alerts from ZeroFox API.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`ZeroFoxAlertPoller_CL`](../tables/zerofoxalertpoller-cl.md) | — | — |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **ZeroFox Personal Access Token (PAT)**: A ZeroFox PAT is required. You can get it in Data Connectors > [API Data Feeds](https://cloud.zerofox.com/data_connectors/api).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect ZeroFox to Microsoft Sentinel**

Connect ZeroFox to Microsoft Sentinel
- **Provide your ZeroFox PAT**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

