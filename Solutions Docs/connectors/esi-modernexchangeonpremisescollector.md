# Exchange Security Insights On-Premises Collector (Azure Monitor)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ESI-ModernExchangeOnPremisesCollector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [ESI-ModernExchangeOnPremisesCollector_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20On-Premises/Data%20Connectors/ESI-ModernExchangeOnPremisesCollector_ccf/ESI-ModernExchangeOnPremisesCollector_connectorDefinition.json) |
| **DCR Definition Files** | [ESI-ModernExchangeOnPremisesCollector_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20On-Premises/Data%20Connectors/ESI-ModernExchangeOnPremisesCollector_ccf/ESI-ModernExchangeOnPremisesCollector_DCR.json) |
| **CCF Configuration** | [ESI-ModernExchangeOnPremisesCollector_dataConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20On-Premises/Data%20Connectors/ESI-ModernExchangeOnPremisesCollector_ccf/ESI-ModernExchangeOnPremisesCollector_dataConnector.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#exchange-security-insights-on-premises-collector) |

Connector used to send Exchange Server security configuration data to Microsoft Sentinel through the Azure Monitor Log Ingestion API.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ESIAPIExchangeOnPremisesConfig_CL`](../tables/esiapiexchangeonpremisesconfig-cl.md) 🔶 | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Microsoft Entra**: Permission to create an app registration in Microsoft Entra ID. Typically requires Entra ID Application Developer role or higher.
- **Microsoft Azure**: Permission to assign the Monitoring Metrics Publisher role on the Data Collection Rule (DCR). This typically requires the Azure RBAC Owner or User Access Administrator role.
- **Service Account with Organization Management role**: The service account that runs the scheduled collector task must be a member of the Exchange Organization Management role group.
- **Detailed documentation**: >**NOTE:** Detailed installation and usage documentation is available [here](https://aka.ms/MicrosoftExchangeSecurityGithub).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

>**NOTE - UPDATE**

ℹ️ <H1><b><u>NOTE - UPDATE:</u></b></H1>For an existing deployment, update the collector script to version <b>8.0.0.0</b> or later, before switching to the Azure Monitor Log Ingestion API. <br/>See <a href='https://aka.ms/sentinel-ESI-OnpremisesCollectorUpdate'>ESI On-Premises Collector Update</a> and <a href='https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20On-Premises/%23%20-%20General%20Content/Documentations/README_LogIngestionAPI.md#upgrade-an-existing-deployment'>Upgrade an existing deployment</a>.</br>For detailed documentation for the following steps, refer to the <a href='https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20On-Premises/%23%20-%20General%20Content/Documentations/README_LogIngestionAPI.md'>Official Documentation</a>

**1. Deploy the Azure Monitor connector resources**

This connector enables the Exchange Server collector to send security configuration data to Microsoft Sentinel through the Azure Monitor Log Ingestion API.
Deploy Exchange Collector Push connector resources

**2. Install the ESI Collector on the Exchange management server**

Install the collector on a Windows server that has the **Exchange Management Shell, Active Directory module for Windows PowerShell, and at least Az.Accounts module**.
**Script Deployment**

**Download the latest version of ESI Collector**

  Download the latest `CollectExchSecIns.zip` package from https://aka.ms/ESI-ExchangeCollector-Script.

  **Copy the script folder**

  Extract the package and copy the collector folder to a server where the Exchange PowerShell cmdlets are available.

  **Unblock the downloaded package**

  Before extraction, run `Unblock-File -LiteralPath .\CollectExchSecIns.zip`. If the package is already extracted, unblock the PowerShell files recursively.

  **Configure network access**

  Ensure that the collector can reach Microsoft Entra ID, `https://raw.githubusercontent.com` (if you accept the script AutoUpdate option), and the Data Collection Endpoint displayed by this connector.

**3. Configure the ESI Collector and scheduled task**

Run PowerShell as a local administrator and launch setup.ps1 to configure the collector and daily scheduled task.

 Here is the documentation for [Setup.ps1](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20On-Premises/%23%20-%20General%20Content/Documentations/ReadmeSetup.PS1.md).

The On-Premises collector uses certificate authentication, using an application secret is an available option but this configuration is not recommended.

See the [Certificate creation guide](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20On-Premises/%23%20-%20General%20Content/Documentations/README_LogIngestionAPI.md#create-the-authentication-certificate).
- **Tenant ID (Directory ID)**: `TenantId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Entra App Registration Application ID**: `ApplicationId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Endpoint URI**: `DataCollectionEndpoint`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Rule Immutable ID**: `DataCollectionRuleId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Stream Name**: `Custom-ESIExchangeConfig`

**4. Verify the scheduled task**

Verify that Setup.ps1 created the daily collector task. Remember the account used by the Scheduled Task needs to be a member of the **Organization Management** group.

 If the task is missing, re-run Setup.ps1.

**1. Note**

>**NOTE:** Parsers are automatically deployed with the solution. For additional information, see the [documentation](https://aka.ms/MicrosoftExchangeSecurityGithub).

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

