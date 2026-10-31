# Censys Entity Enrichment - Host

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook is triggered automatically when an IP entity is detected in a Microsoft Sentinel incident, based on an automation rule. Upon triggering, it extracts the IP address from the entity and queries the Censys API (v3) to retrieve detailed host information including geolocation (continent, country, city, coordinates), autonomous system details (ASN, BGP prefix), WHOIS data (network, organization, contacts), services, and DNS information. The playbook retrieves the Censys API token securel

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Censys](../solutions/censys.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Censys/Playbooks/CensysEntityEnrichmentHost/azuredeploy.json) |

## Logic App Connectors

This playbook uses **5** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azureloganalyticsdatacollector`](../logic-apps/managed-azureloganalyticsdatacollector.md) | Managed | 1 | 1 |
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 1 |
| [`keyvault`](../logic-apps/managed-keyvault.md) | Managed | 1 | 1 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 2 |
| [`workflow`](../logic-apps/builtin-workflow.md) | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azureloganalyticsdatacollector`](../logic-apps/managed-azureloganalyticsdatacollector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Ingest_Censys_Host_Data | post | `/api/logs` | — |

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_incident | post | `/Incidents` | — |

#### [`keyvault`](../logic-apps/managed-keyvault.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_Censys_API_Token | get | `/secrets/@{encodeURIComponent('Censys-Access-Token')}/value` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP_Call_to_Fetch_Host_Enrichment_Data | GET | `@{variables('base_url')}/@{variables('api_version')}/global/asset/enrichment/host/@{encodeURIComponent(variables('EntityData'))}` | — |
| HTTP_Call_to_Fetch_Host_Data | GET | `@{variables('base_url')}/@{variables('api_version')}/global/asset/host/@{variables('EntityData')}` | — |

#### [`workflow`](../logic-apps/builtin-workflow.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| CensysIncidentEnrichment | — | — | workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/',trim(parameters('IncidentEnrichmentPlaybookName')))]`<br>triggerName=`When_an_HTTP_request_is_received` |

</details>

## Additional Documentation

> 📄 *Source: [CensysEntityEnrichmentHost/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Censys/Playbooks/CensysEntityEnrichmentHost/readme.md)*

## Summary

This playbook is triggered automatically when an IP entity is detected in a Microsoft Sentinel incident, based on an automation rule. Upon triggering, it extracts the IP address from the entity and queries the Censys API (v3) to retrieve detailed host information including geolocation (continent, country, city, coordinates), autonomous system details (ASN, BGP prefix), WHOIS data (network, organization, contacts), services, and DNS information. The playbook retrieves the Censys API token securely from Azure Key Vault, performs the API call with retry logic (up to 3 attempts) and comprehensive error handling for HTTP status codes (200, 401, 403, 404, 422). Upon successful data retrieval, the host data is ingested into Azure Log Analytics (CensysHost_CL table) for historical analysis and reporting. The playbook then retrieves the associated incident and invokes the CensysIncidentEnrichment sub-playbook to add the enrichment data as a comment to the incident. If no incident is associated, the playbook terminates successfully after data ingestion.

By default this playbook first queries the Censys Host Enrichment API (`v3/global/asset/enrichment/host`), which returns the standard host record plus GreyNoise, IPinfo (network and privacy) and Mallory third-party data. The enrichment API is a separately entitled feature: if it responds with 403 (not entitled) or 409, or with any other non-success status, the playbook falls back to the standard host API so that enrichment still completes. A 401 response terminates the run with an authentication error pointing at the Key Vault secret and Organization ID. Set the `UseHostEnrichment` parameter to `false` to always use the standard host API.

### Prerequisites

1. Deploy the CensysIncidentEnrichment playbook before deploying this playbook.
2. Create an Azure Key Vault and store your Censys API token as a secret named 'Censys-Access-Token'.
3. Obtain your Censys Organization ID from the Censys platform account settings.
4. Configure an automation rule in Microsoft Sentinel to trigger this playbook when IP entities are detected.

### Deployment Instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
   * PlaybookName: Enter the playbook name here (default: CensysEntityEnrichmentHost).
   * UseHostEnrichment: Enter True (default) to use the Censys Host Enrichment API for additional GreyNoise, IPinfo and Mallory data. Any other value, such as False, uses the standard host API only.
   * OrganizationID: Your Censys Organization ID from the Censys platform account settings.
   * IncidentEnrichmentPlaybookName: Name of the deployed CensysAddIncidentComment playbook.
   * KeyVaultName: Name of the Azure Key Vault where the Censys API token is stored.
   * TenantId: Azure AD Tenant ID where the Key Vault is located.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCensys%2FPlaybooks%2FCensysEntityEnrichmentHost%2Fazuredeploy.json) [![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCensys%2FPlaybooks%2FCensysEntityEnrichmentHost%2Fazuredeploy.json)

### Post-Deployment Instructions

#### a. Authorize connections

Once deployment is complete, authorize each connection.
1. Go to your logic app → API connections → Select keyvault connection resource.
2. Go to General → Edit API connection.
3. Click Authorize.
4. Sign in.
5. Click Save.
6. Repeat steps for Microsoft Sentinel and Log Analytics Data Collector connections.

#### b. Add Access policy in Key Vault

Grant the playbook's managed identity 'Key Vault Secrets User' role on the Azure Key Vault.
1. Go to Logic App → *your Logic App* → Identity → System assigned Managed identity and copy Object (principal) ID.
2. Go to Key Vaults → *your Key Vault* → Access policies → Create.
3. Select Get and List permissions for Secrets. Click Next.
4. In the principal section, search by copied Object ID. Click Next.
5. Click Review + Create.

#### c. Create automation rule in Microsoft Sentinel

Create an automation rule in Microsoft Sentinel to trigger this playbook for IP entities.
1. Go to Microsoft Sentinel → *your workspace* → Automation.
2. Click Create → Automation rule.
3. Configure the rule to trigger when IP entities are detected.
4. Add action to run this playbook.
5. Click Apply.

#### d. Ensure CensysIncidentEnrichment playbook is deployed

Ensure the CensysIncidentEnrichment (or CensysAddIncidentComment) playbook is deployed and accessible.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Censys](../solutions/censys.md)

