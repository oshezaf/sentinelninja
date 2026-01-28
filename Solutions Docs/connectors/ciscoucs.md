# 🚫 🔍 [Deprecated] Cisco UCS

> 🚫 **Deprecated:** This connector has been deprecated and may be removed in future versions.

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cisco-logo-72px.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CiscoUCS` |
| **Publisher** | Cisco |
| **Used in Solutions** | [Cisco UCS](../solutions/cisco-ucs.md) |
| **Collection Method** | MMA |
| **Connector Definition Files** | [Connector_Syslog_CiscoUCS.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20UCS/Data%20Connectors/Connector_Syslog_CiscoUCS.json) |

The [Cisco Unified Computing System (UCS)](https://www.cisco.com/c/en/us/products/servers-unified-computing/index.html) connector allows you to easily connect your Cisco UCS logs with Microsoft Sentinel This gives you more insight into your organization's network and improves your security operation capabilities.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`Syslog`](../tables/syslog.md) | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): write permission is required.

**Custom Permissions:**
- **Cisco UCS**: must be configured to export logs via Syslog

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**NOTE:** This data connector depends on a parser based on a Kusto Function to work as expected which is deployed as part of the solution. To view the function code in Log Analytics, open Log Analytics/Microsoft Sentinel Logs blade, click Functions and search for the alias CiscoUCS and load the function code or click [here](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20UCS/Parsers/CiscoUCS.yaml). The function usually takes 10-15 minutes to activate after solution installation/update.

**1. Install and onboard the agent for Linux**

Typically, you should install the agent on a different computer from the one on which the logs are generated.

>  Syslog logs are collected only from **Linux** agents.
**Choose where to install the agent:**

**Install agent on Azure Linux Virtual Machine**

  Select the machine to install the agent on and then click **Connect**.
  - **Install agent on Linux Virtual Machine**

  **Install agent on a non-Azure Linux Machine**

  Download the agent on the relevant machine and follow the instructions.
  - **Install agent on Linux (Non-Azure)**

**2. Configure the logs to be collected**

Configure the facilities you want to collect and their severities.
 1. Under workspace advanced settings **Configuration**, select **Data** and then **Syslog**.
 2. Select **Apply below configuration to my machines** and select the facilities and severities.
 3.  Click **Save**.
- **Open Syslog settings**

**3. Configure and connect the Cisco UCS**

[Follow these instructions](https://www.cisco.com/c/en/us/support/docs/servers-unified-computing/ucs-manager/110265-setup-syslog-for-ucs.html#configsremotesyslog) to configure the Cisco UCS to forward syslog. Use the IP address or hostname for the Linux device with the Linux agent installed as the Destination IP address.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

