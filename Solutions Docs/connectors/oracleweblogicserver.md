# 🚫 🔍 [Deprecated] Oracle WebLogic Server

> 🚫 **Deprecated:** This connector has been deprecated and may be removed in future versions.

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `OracleWebLogicServer` |
| **Publisher** | Oracle |
| **Used in Solutions** | [OracleWebLogicServer](../solutions/oracleweblogicserver.md) |
| **Collection Method** | [MMA](../methods/mma.md) |
| **Connector Definition Files** | [Connector_OracleWebLogicServer_agent.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OracleWebLogicServer/Data%20Connectors/Connector_OracleWebLogicServer_agent.json) |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |

OracleWebLogicServer data connector provides the capability to ingest [OracleWebLogicServer](https://docs.oracle.com/en/middleware/standalone/weblogic-server/index.html) events into Microsoft Sentinel. Refer to [OracleWebLogicServer documentation](https://docs.oracle.com/en/middleware/standalone/weblogic-server/14.1.1.0/index.html) for more information.

## Additional Information

🛠️ **Device Configuration:** Table: `OracleWebLogicServer_CL`. Log locations: Windows: `{DOMAIN_NAME}\Servers\{SERVER_NAME}\logs*.log`, Linux: `{DOMAIN_HOME}/servers/{SERVER_NAME}/logs/*.log`. See [Custom Logs via AMA configuration](https://learn.microsoft.com/azure/sentinel/unified-connector-custom-device#oracle-weblogic-server).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`OracleWebLogicServer_CL`](../tables/oracleweblogicserver-cl.md) 🔶 | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

>**NOTE:** This data connector depends on a parser based on a Kusto Function to work as expected which is deployed as part of the solution. To view the function code in Log Analytics, open Log Analytics/Microsoft Sentinel Logs blade, click Functions and search for the alias OracleWebLogicServerEvent and load the function code or click [here](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OracleWebLogicServer/Parsers/OracleWebLogicServerEvent.yaml). The function usually takes 10-15 minutes to activate after solution installation/update.

**1. Install and onboard the agent for Linux or Windows**

Install the agent on the Oracle WebLogic Server where the logs are generated.

> Logs from Oracle WebLogic Server deployed on Linux or Windows servers are collected by **Linux** or **Windows** agents.
**Choose where to install the Linux agent:**

**Install agent on Azure Linux Virtual Machine**

  Select the machine to install the agent on and then click **Connect**.
  - **Install agent on Linux Virtual Machine**

  **Install agent on a non-Azure Linux Machine**

  Download the agent on the relevant machine and follow the instructions.
  - **Install agent on Linux (Non-Azure)**

**Choose where to install the Windows agent:**

**Install agent on Azure Windows Virtual Machine**

  Select the machine to install the agent on and then click **Connect**.
  - **Install/configure: InstallAgentOnVirtualMachine**

  **Install agent on a non-Azure Windows Machine**

  Download the agent on the relevant machine and follow the instructions.
  - **Install/configure: InstallAgentOnNonAzure**

**2. Configure the logs to be collected**

Configure the custom log directory to be collected
- **Open custom logs settings**

1. Select the link above to open your workspace advanced settings 
2. From the left pane, select **Data**, select **Custom Logs** and click **Add+**
3. Click **Browse** to upload a sample of a OracleWebLogicServer log file (e.g. server.log). Then, click **Next >**
4. Select **New line** as the record delimiter and click **Next >**
5. Select **Windows** or **Linux** and enter the path to OracleWebLogicServer logs based on your configuration. Example: 
 - **Linux** Directory:  'DOMAIN_HOME/servers/server_name/logs/*.log'
 - **Windows** Directory: 'DOMAIN_NAME\servers\SERVER_NAME\logs\*.log'
6. After entering the path, click the '+' symbol to apply, then click **Next >** 
7. Add **OracleWebLogicServer_CL** as the custom log Name and click **Done**

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

