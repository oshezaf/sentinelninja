# ⚠️ HoneyForge Threat Detection

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/HoneyForgeLogo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `HoneyForge` |
| **Publisher** | BUI |
| **Used in Solutions** | [HoneyForge](../solutions/honeyforge.md) |
| **Collection Method** | [AMA](../methods/ama.md) |
| **Connector Definition Files** | [HoneyForge.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HoneyForge/Data%20Connectors/HoneyForge.json) |

The [HoneyForge](https://honeyforge.tech) connector ingests deception sensor events from the HoneyForge Threat Detection Platform into Microsoft Sentinel. HoneyForge deploys hardware honeypot sensors across your network that passively listen for connection attempts. Any interaction with a sensor is, by definition, suspicious — because legitimate systems should never communicate with a decoy device.



Events are forwarded to Microsoft Sentinel in Common Event Format (CEF) via syslog. The connector provides immediate detection coverage through the bundled analytic rule, hunting queries, and operational workbook.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceProduct == "HoneyForge"`<br>`DeviceVendor == "BUI"` | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

>**NOTE:** This connector uses the **Common Event Format (CEF)** to forward HoneyForge sensor events to Microsoft Sentinel via syslog. An ASIM parser (`HoneyForgeEvent`) is deployed with this solution to normalise the events to the ASIM NetworkSession schema.

**1. Step 1 — Deploy the CEF syslog forwarder**

Deploy a Linux machine to act as the syslog forwarder between your HoneyForge deployment and Microsoft Sentinel. This machine can be on-premises, in Azure, or in another cloud. It must have network line-of-sight to receive syslog from HoneyForge and outbound HTTPS to the Log Analytics workspace.

**Requirements:**
- Python 2.7 or 3.x
- sudo / elevated permissions
- Outbound HTTPS (TCP 443) to `*.ods.opinsights.azure.com`
- Inbound TCP/UDP 514 from the HoneyForge backend
**1.1 — Install the Log Analytics agent and CEF collector**

  Run the following command on your Linux forwarder machine. Replace `{WorkspaceId}` and `{PrimaryKey}` with your Microsoft Sentinel workspace values.
  - **Run on the Linux forwarder:**: `sudo wget -O cef_installer.py https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/DataConnectors/CEF/cef_installer.py && sudo python cef_installer.py {0} {1}`
**2. Step 2 — Configure HoneyForge syslog forwarding**

Configure HoneyForge to forward CEF-formatted sensor events to the Linux forwarder.

1. Log in to the HoneyForge dashboard at [platform.honeyforge.tech](https://platform.honeyforge.tech).
2. Navigate to **Settings → SIEM / Syslog**.
3. Enter the **IP address** of your Linux forwarder and port **514**.
4. Select **CEF** as the format and save.
5. Click **Send test event** to verify connectivity.

For assistance configuring syslog forwarding, contact BUI at [support@bui.co.za](mailto:support@bui.co.za).

**3. Step 3 — Validate connectivity**

Allow up to 20 minutes for the first events to appear in the `CommonSecurityLog` table. Validate that events are arriving with the following query:

```kql
CommonSecurityLog
| where DeviceVendor =~ "BUI"
| where DeviceProduct =~ "HoneyForge"
| take 10
```

If no events appear after 20 minutes, run the connectivity troubleshooter:
- **Run the troubleshooter on the Linux forwarder:**: `sudo wget -O cef_troubleshoot.py https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/DataConnectors/CEF/cef_troubleshoot.py && sudo python cef_troubleshoot.py {0}`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

