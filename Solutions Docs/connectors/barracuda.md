# 🚫 [Deprecated] Barracuda Web Application Firewall via Legacy Agent

> 🚫 **Deprecated:** This connector has been deprecated and may be removed in future versions.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/barracuda_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `Barracuda` |
| **Publisher** | Barracuda |
| **Used in Solutions** | [Barracuda WAF](../solutions/barracuda-waf.md) |
| **Collection Method** | MMA |
| **Connector Definition Files** | [template_Barracuda.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Barracuda%20WAF/Data%20Connectors/template_Barracuda.json) |

## Additional Information

📖 **Vendor Documentation:** [Barracuda WAF Export Logs](https://campus.barracuda.com/product/webapplicationfirewall/doc/168300161/how-to-export-logs-from-the-barracuda-web-application-firewall) - How to configure syslog and log settings

The Barracuda Web Application Firewall (WAF) connector allows you to easily connect your Barracuda logs with Microsoft Sentinel, to view dashboards, create custom alerts, and improve investigation. This gives you more insight into your organization’s network and improves your security operation capabilities.



[For more information >​](https://aka.ms/CEF-Barracuda)

## Tables Ingested

This connector ingests data into the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`Barracuda_CL`](../tables/barracuda-cl.md) |  | — | — |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceVendor == "Barracuda"` | ✓ | ✓ |
| [`barracuda_CL`](../tables/barracuda-cl.md) |  | — | — |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Configure and connect Barracuda WAF**

The Barracuda Web Application Firewall can integrate with and export logs directly to Microsoft Sentinel via Azure OMS Server.​

1.  Go to [Barracuda WAF configuration](https://aka.ms/asi-barracuda-connector), and follow the instructions, using the parameters below to set up the connection:.

2.  Web Firewall logs facility: Go to the advanced settings (link below) for your workspace and on the **Data > Syslog** tabs, make sure that the facility exists.​

> Notice that the data from all regions will be stored in the selected workspace
- **Workspace ID**: `WorkspaceId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Primary Key**: `PrimaryKey`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Open Syslog settings**

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

