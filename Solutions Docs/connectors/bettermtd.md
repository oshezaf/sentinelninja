# BETTER Mobile Threat Defense (MTD)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/BETTER_MTD_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `BetterMTD` |
| **Publisher** | BETTER Mobile |
| **Used in Solutions** | [BETTER Mobile Threat Defense (MTD)](../solutions/better-mobile-threat-defense-mtd.md) |
| **Collection Method** | [REST API](../methods/rest-api.md) |
| **Connector Definition Files** | [BETTERMTD.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BETTER%20Mobile%20Threat%20Defense%20%28MTD%29/Data%20Connectors/BETTERMTD.json) |
| **Ingestion API** | [HTTP Data Collector API](../methods/http-data-collector-api.md) — *Connector definition requires workspace key (SharedKey pattern)* |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |

The BETTER MTD Connector allows Enterprises to connect their Better MTD instances with Microsoft Sentinel, to view their data in Dashboards, create custom alerts, use it to trigger playbooks and expands threat hunting capabilities. This gives users more insight into their organization's mobile devices and ability to quickly analyze current mobile security posture which improves their overall SecOps capabilities.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`BetterMTDAppLog_CL`](../tables/bettermtdapplog-cl.md) 🔶 | ✗ | ✓ | ✗ |
| [`BetterMTDDeviceLog_CL`](../tables/bettermtddevicelog-cl.md) 🔶 | ✗ | ✓ | ✗ |
| [`BetterMTDIncidentLog_CL`](../tables/bettermtdincidentlog-cl.md) 🔶 | ✗ | ✓ | ✗ |
| [`BetterMTDNetflowLog_CL`](../tables/bettermtdnetflowlog-cl.md) 🔶 | ✗ | ✓ | ✗ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

1. In **Better MTD Console**, click on **Integration** on the side bar.
2. Select  **Others** tab.
3. Click the **ADD ACCOUNT** button and Select **Microsoft Sentinel** from the available integrations.
4. Create the Integration:
  - set `ACCOUNT NAME` to a descriptive name that identifies the integration then click **Next**
  - Enter your `WORKSPACE ID` and `PRIMARY KEY` from the fields below, click **Save**
  - Click **Done**
5.  Threat Policy setup (Which Incidents should be reported to `Microsoft Sentinel`):
  - In **Better MTD Console**, click on **Policies** on the side bar
  - Click on the **Edit** button of the Policy that you are using.
  - For each Incident types that you want to be logged go to **Send to Integrations** field and select **Sentinel**
6. For additional information, please refer to our [Documentation](https://mtd-docs.bmobi.net/integrations/how-to-setup-azure-sentinel-integration#mtd-integration-configuration).
- **Workspace ID**: `WorkspaceId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Primary Key**: `PrimaryKey`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Connectors Index](../connectors-index.md)

