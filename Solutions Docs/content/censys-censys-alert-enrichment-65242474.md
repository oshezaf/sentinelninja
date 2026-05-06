# Censys Alert Enrichment

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook is triggered by a Microsoft Sentinel Alert. It extracts IP addresses, domains, and certificate file hashes (SHA256) from alert entities, then queries the Censys API to retrieve enrichment data for hosts, web properties, and certificates. The enriched data is ingested into Log Analytics Workspace custom tables (CensysHostAlert, CensysWebPropertyAlert, CensysCertificateAlert). If the alert is associated with an incident, the playbook invokes the CensysAddIncidentComment sub-playbook

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Censys](../solutions/censys.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Censys/Playbooks/CensysAlertEnrichment/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CensysCertificateAlert_CL`](../tables/censyscertificatealert-cl.md) 🔶 | ? | ✓ | ? |
| [`CensysHostAlert_CL`](../tables/censyshostalert-cl.md) 🔶 | ? | ✓ | ? |
| [`CensysWebPropertyAlert_CL`](../tables/censyswebpropertyalert-cl.md) 🔶 | ? | ✓ | ? |

## Logic App Connectors

This playbook uses **5** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azureloganalyticsdatacollector` | Managed | 1 | 3 |
| `azuresentinel` | Managed | 1 | 3 |
| `keyvault` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 3 |
| `workflow` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azureloganalyticsdatacollector`** (managedApi):
- *Ingest_Censys_Host_Data*: method=`post`, path=`/api/logs`
- *Ingest_Censys_Certificate_Data*: method=`post`, path=`/api/logs`
- *Ingest_Censys_Web_Property_Data*: method=`post`, path=`/api/logs`

**`azuresentinel`** (managedApi):
- *Entities_-_Get_IPs*: method=`post`, path=`/entities/ip`
- *Entities_-_Get_FileHashes*: method=`post`, path=`/entities/filehash`
- *Alert_-_Get_incident*: method=`get`, path=`/Incidents/subscriptions/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/resourceGroups/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/workspaces/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/alerts/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}`

**`keyvault`** (managedApi):
- *Get_Censys_API_Token*: method=`get`, path=`/secrets/@{encodeURIComponent('Censys-Access-Token')}/value`

**`http`** (builtin):
- *HTTP_Call_to_Fetch_Host_Data*: method=`POST`, uri=`@{variables('base_url')}/@{variables('api_version')}/global/asset/host`
- *HTTP_Call_to_Fetch_Certificates_Data*: method=`POST`, uri=`@{variables('base_url')}/@{variables('api_version')}/global/asset/certificate`
- *HTTP_Call_to_Fetch_WebProperty_Data*: method=`POST`, uri=`@{variables('base_url')}/@{variables('api_version')}/global/asset/webproperty`

**`workflow`** (builtin):
- *CensysIncidentEnrichment*: workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/',trim(parameters('IncidentEnrichmentPlaybookName')))]`, triggerName=`When_an_HTTP_request_is_received`

</details>

## Additional Documentation

> 📄 *Source: [CensysAlertEnrichment/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Censys/Playbooks/CensysAlertEnrichment/readme.md)*

## Summary

This playbook is triggered by a Microsoft Sentinel Alert. It extracts IP addresses, domains, and certificate file hashes (SHA256) from alert entities, then queries the Censys API to retrieve enrichment data for hosts, web properties, and certificates. The enriched data is ingested into Log Analytics Workspace custom tables (CensysHostAlert, CensysWebPropertyAlert, CensysCertificateAlert). If the alert is associated with an incident, the playbook invokes the CensysAddIncidentComment sub-playbook to add enrichment data as incident comments.

### Prerequisites

1. Deploy the CensysAddIncidentComment playbook before deploying this playbook.
2. Obtain a Censys API token and store it in Azure Key Vault as a secret named 'Censys-Access-Token'.
3. Obtain the Censys Organization ID from your Censys platform account.
4. Create or identify an Azure Key Vault and note its name and Tenant ID.
5. Ensure you have a Log Analytics Workspace configured for Microsoft Sentinel.

### Deployment Instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
   * PlaybookName: Enter the playbook name here (default: CensysAlertEnrichment).
   * OrganizationID: Your Censys Organization ID from the Censys platform account settings.
   * IncidentEnrichmentPlaybookName: Name of the deployed CensysAddIncidentComment playbook.
   * KeyVaultName: Name of the Azure Key Vault where the Censys API token is stored.
   * TenantId: Azure AD Tenant ID where the Key Vault is located.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCensys%2FPlaybooks%2FCensysAlertEnrichment%2Fazuredeploy.json) [![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCensys%2FPlaybooks%2FCensysAlertEnrichment%2Fazuredeploy.json)

### Post-Deployment Instructions

#### a. Authorize connections

Once deployment is complete, authorize each connection.
1. Go to your logic app → API connections → Select keyvault connection resource.
2. Go to General → edit API connection.
3. Click Authorize.
4. Sign in.
5. Click Save.
6. Repeat steps for Azure Sentinel and Log Analytics Data Collector connections.

#### b. Add Access policy in Keyvault

Add access policy for the playbook's managed identity to read secrets from Key Vault.
1. Go to logic app → *your logic app* → identity → System assigned Managed identity and copy Object (principal) ID.
2. Go to keyvaults → *your keyvault* → Access policies → create.
3. Select Get and List permissions for Secrets. Click next.
4. In the principal section, search by copied object ID. Click next.
5. Click review + create.

#### c. Assign Role for Microsoft Sentinel

Assign Microsoft Sentinel Responder role to the playbook's managed identity.
1. Go to Log Analytics Workspace → *your workspace* → Access Control → Add.
2. Add role assignment.
3. Assignment type: Job function roles.
4. Role: Microsoft Sentinel Contributor.
5. Members: select managed identity for assigned access to and add your logic app as member.
6. Click on review + assign.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Censys](../solutions/censys.md)

