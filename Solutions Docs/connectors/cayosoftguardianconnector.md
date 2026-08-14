# Cayosoft Guardian Threat Alerts

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cayosoft-logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CayosoftGuardianConnector` |
| **Publisher** | Cayosoft |
| **Used in Solutions** | [Cayosoft Guardian](../solutions/cayosoft-guardian.md) |
| **Collection Method** | [AMA](../methods/ama.md) |
| **Connector Definition Files** | [CayosoftGuardian_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cayosoft%20Guardian/Data%20Connectors/CayosoftGuardian_connectorDefinition.json) |

The Cayosoft Guardian data connector automatically ingests threat alerts from Cayosoft Guardian into Microsoft Sentinel. Cayosoft Guardian writes threat alerts to the Windows Event Log as Event ID 2. The Azure Monitor Agent (AMA) collects these events by using Data Collection Rules (DCRs) and sends the parsed data to the custom Log Analytics table named `CayosoftThreatAlerts_CL`. After the data is ingested, Microsoft Sentinel can use it for monitoring, analytics, incident creation, investigation, and automated response across your hybrid identity environment.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CayosoftThreatAlerts_CL`](../tables/cayosoftthreatalerts-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and write permissions are required for the Log Analytics workspace.

**Custom Permissions:**
- **Cayosoft Guardian Server**: Must be connected to Azure Arc or run as an Azure virtual machine, with the Azure Monitor Agent installed.
- **Data Collection Rules**: Read and write permissions for Data Collection Rules are required to associate the Data Collection Rule with the Azure Arc-enabled server or Azure virtual machine that runs Cayosoft Guardian.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Prerequisites and Infrastructure Setup**

Before configuring the integration, make sure the following requirements are met:
- You have a Microsoft Sentinel workspace.
- The Windows Server that hosts Cayosoft Guardian is connected to Azure Arc or runs as an Azure virtual machine.
- The Azure Monitor Agent (AMA) is installed on the Cayosoft Guardian server.

**2. Deploy the Data Collection Rule (DCR)**

Cayosoft Guardian streams threat alerts via the Azure Monitor Agent, which requires a Data Collection Rule (DCR) linked to your Arc-enabled server or Azure VM. This is a one-time deployment, separate from the solution install.

1. Click the button below.

	[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCayosoft%2520Guardian%2FData%2520Connectors%2FCayosoftGuardian_DCRTemplate.json)
2. Select your **Subscription**, **Resource Group**, and **Region**.
3. Enter your **Workspace Name** (the Microsoft Sentinel-enabled Log Analytics workspace) and **Arc Machine Name** (the exact name of the Arc-enabled server or Azure VM running Cayosoft Guardian).
4. Click **Review + Create**, then **Create**.

**3. Configure Cayosoft Guardian Logging**

Enable the event log generation within the product:
1. Open Cayosoft Guardian.
2. Navigate to **Settings** > **Service Settings** > **Windows Event Log Settings**.
3. Verify that **Windows Event Log for Alerts** is enabled. Cayosoft Guardian writes threat alerts to the Windows Event Log > Applications and Services Logs > Cayosoft Guardian Alerts

**4. Install the Workbook**

The Cayosoft Guardian solution includes a prebuilt workbook that visualizes threat alerts and incidents, including severity distribution, alerts by system type, alert trends over time, and recent incidents and alerts.
1. In Microsoft Sentinel, go to **Content hub**.
2. Search for **Cayosoft Guardian** and verify that the solution is installed. If it is not installed, install it.
3. Go to **Workbooks** and select the **Templates** tab.
4. Select **Cayosoft Guardian - Incidents Dashboard**, click **Save**, choose the Azure region where you want to save the workbook, and then click **View saved workbook**.
5. The workbook is available under **My workbooks**. Optionally, pin it to an Azure dashboard for quick access.

**5. Enable the Analytics Rules**

The Cayosoft Guardian solution also includes scheduled analytics rule templates that convert Cayosoft Guardian threat alerts into Microsoft Sentinel incidents.
1. In Microsoft Sentinel, go to **Analytics**.
2. Select the **Rule templates** tab.
3. Locate the Cayosoft Guardian analytics rule templates, for example:
	- **Cayosoft Guardian - Cloud Application Security Threats**
	- **Cayosoft Guardian - Core Identity and Infrastructure Threats**
4. Click **Create rule**, review the schedule, entity mapping, and incident settings, and then click **Review + Create**.
5. Verify that the rule appears as **Enabled** on the **Active rules** tab. The analytics rules generate the `SecurityIncident` records used by the workbook's **Incidents & recent alerts** table.

**6. Verify the Integration**

After configuring the connector, verify that Microsoft Sentinel is receiving Cayosoft Guardian threat alert data:
1. In Microsoft Sentinel, open the Log Analytics workspace connected to your Microsoft Sentinel instance.
2. Open **Logs**.
3. Run the following query:```CayosoftThreatAlerts_CL | sort by TimeGenerated desc | take 50 ``` 
4. Confirm that new rows are available in the table.
For detailed information, step-by-step guides, and known issues, please refer to the <a href='https://support.cayosoft.com/hc/en-us/articles/46659066589325-Threat-Alerts-Directory' target='_blank'>official documentation</a>.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

