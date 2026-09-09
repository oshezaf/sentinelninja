# ⚠️ 🔍 Recorded Future Identity - Credential Exposure Importer

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/RecordedFuture.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `RecordedFutureIdentityV3` |
| **Publisher** | Recorded Future |
| **Used in Solutions** | [Recorded Future Identity](../solutions/recorded-future-identity.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [azuredeploy-v3.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future%20Identity/Data%20Connectors/azuredeploy-v3.json) |

Imports Recorded Future Identity credential exposure data into Microsoft Sentinel. Writes malware log exposures to `RFI_MalwareLogs_V2_CL`, credential dump exposures to `RFI_CredentialDumps_V2_CL`, and user lookup results to `RFI_UsersLookupResults_V2_CL`. For full installation details, see the [readme](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future%20Identity/Playbooks/v3.0/readme.md).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`RFI_CredentialDumps_V2_CL`](../tables/rfi-credentialdumps-v2-cl.md) | ? | ✓ | ? |
| [`RFI_MalwareLogs_V2_CL`](../tables/rfi-malwarelogs-v2-cl.md) | ? | ✓ | ? |
| [`RFI_UsersLookupResults_V2_CL`](../tables/rfi-userslookupresults-v2-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and write permissions are required.

**Custom Permissions:**
- **Azure Subscription**: Monitoring Contributor and Log Analytics Contributor permissions required to deploy the Data Connectors infrastructure. Owner or Role Based Access Control Administrator required to deploy playbooks with automatic role assignment.
- **Recorded Future API Token**: A Recorded Future Identity API token is required to authorize the RFI Custom Connector used by the playbooks.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Step 1 — Deploy Data Connectors infrastructure**

Deploys the shared Data Collection Endpoint (DCE), Data Collection Rules (DCRs), Log Analytics tables (`RFI_MalwareLogs_V2_CL`, `RFI_CredentialDumps_V2_CL`, `RFI_UsersLookupResults_V2_CL`), and this connector definition tile. Deploy this into the same resource group as your Log Analytics Workspace.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Recorded%2520Future%2520Identity/Data%2520Connectors/azuredeploy-v3.json)

**2. Step 2 — Deploy RFI-CustomConnector**

The custom connector handles authentication towards the Recorded Future API. Deploy it once — it is shared by the playbooks.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Recorded%2520Future%2520Identity/Playbooks/v3.0/RFI-CustomConnector-0-1-0/azuredeploy.json)

**3. Step 3 — Deploy playbooks**

Deploy one or more of the search/lookup playbooks depending on your use case. See the [readme](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future%20Identity/Playbooks/v3.0/readme.md) for full deployment instructions, parameters, and post-deployment configuration.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

