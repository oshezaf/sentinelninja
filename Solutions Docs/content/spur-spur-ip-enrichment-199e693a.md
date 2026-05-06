# Spur IP Enrichment

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This Playbook Submits IP Addresses associated with an alert to Spur Context API

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Spur](../solutions/spur.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Spur/Playbooks/Spur-Get-IP-Context-Data-Alert-Trigger/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 4 |
| [`spurconnector`](../logic-apps/managed-spurconnector.md) | Managed | 0 | 1 |
| [`Spur-Context-Connector`](../logic-apps/custom-spur-context-connector.md) | Custom | 1 | 0 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Entities_-_Get_IPs | post | `/entities/ip` | — |
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |
| Update_incident | put | `/Incidents` | — |
| Alert_-_Get_incident | get | `/Incidents/subscriptions/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/resourceGroups/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/workspaces/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/alerts/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}` | — |

#### [`spurconnector`](../logic-apps/managed-spurconnector.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_IP_Context | get | `/v2/context/@{encodeURIComponent(body('Parse_IP_Entity_')?['address'])}` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| GetAccessTokenSpur | POST | `@variables('access_token_url')` | — |
| HTTP_-_Save_to_Custom_Table | POST | `@concat(parameters('DCE_Endpoint_URL'),'/dataCollectionRules/',parameters('DCR_Immutable_ID'),'/streams/Custom-','Spur_IP_Context_Details_CL','?api-version=2023-01-01')` | — |

</details>

## Additional Documentation

> 📄 *Source: [Spur-Get-IP-Context-Data-Alert-Trigger/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Spur/Playbooks/Spur-Get-IP-Context-Data-Alert-Trigger/readme.md)*

## Table of Contents

1. [Overview](#overview)
2. [Deploy Spur IP Enrichment Alert Trigger Playbook](#deployplaybook)
3. [Prerequisites](#prerequisites)
4. [Deployment](#deployment)
5. [Post Deployment Steps](#postdeployment)


<a name="overview">

# Overview
This playbook uses the Spur Context API. It is able to provide hosted high-performance IP enrichment lookups of the highest-fidelity IP intelligence available. With pre-built integrations into the most common threat analysis platforms and services, Spur ensures that security teams can instantly leverage data to protect their environments from the latest evasion and obfuscation methods, such as VPNs, residential proxies, and bot automation.
 

When a new Azure Sentinel Alert is created, this playbook gets triggered and performs the following actions:

- It fetches all the IP address entities in the Alert.
- Iterates through the IP address enities and fetches the results from Spur Context API for each IP Address.
- All the details from Spur Context API will be added as comments in a tabular format.
- Optionally, is saved the Context API data into Log Analytics custom table.

![Incident Comments](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Spur/Playbooks/Spur-Get-IP-Context-Data-Alert-Trigger/images/comments.png)
![Incident Comments](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Spur/Playbooks/Spur-Get-IP-Context-Data-Alert-Trigger/images/custom_table.png)

<a name="deployplaybook">

## Links to deploy the DomainTools Iris Enrich Domain Playbook:

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSpur%2FPlaybooks%2FSpur-Get-IP-Context-Data-Alert-Trigger%2Fazuredeploy.json) [![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSpur%2FPlaybooks%2FSpur-Get-IP-Context-Data-Alert-Trigger%2Fazuredeploy.json)



<a name="prerequisites">

## Prerequisites for using and deploying playbook
- A Spur API Key.
- Spur Custom Connector.

<a name="deployment">

#### Deployment instructions
- Deploy the playbooks by clicking on "Deploy to Azure" button. This will take you to deploying an ARM Template wizard.
- Fill in the required parameters for deploying the playbook.
  ![deployment](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Spur/Playbooks/Spur-Get-IP-Context-Data-Alert-Trigger/images/deployment.png)
- Click "Review + create". Once the validation is successful, click on "Create".

<a name="postdeployment">

### Post-Deployment instructions
#### a. Authorize connections
Once deployment is complete, you will need to authorize each connection:
- Open the Logic App in the edit mode.
- Logic App prompts any missing connections, please update the connections.
  ![postdeployment](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Spur/Playbooks/Spur-Get-IP-Context-Data-Alert-Trigger/images/post_deployment_connections.png)
- As a best practice, we have used the Sentinel connection in Logic Apps that use "ManagedSecurityIdentity" permissions. Please refer to [this document](https://techcommunity.microsoft.com/t5/microsoft-sentinel-blog/what-s-new-managed-identity-for-azure-sentinel-logic-apps/ba-p/2068204) and provide permissions to the Logic App accordingly.
- Click on 'Parameter' and Enter All Parameters to save data as logs.
- Set the following parameters:
  - `Save_To_Custom_Table`: Set to `true` to enable saving Spur data to a custom Log Analytics table
  - `DCE_Endpoint_URL`: Data Collection Endpoint URL for your Log Analytics workspace
  - `DCR_Immutable_ID`: Immutable ID of the Data Collection Rule
  - `TenantID`: Azure AD tenant ID for authentication (From Azure App Registration)
  - `ClientID`: Application (client) ID of the service principal (From Azure App Registration)
  - `ClientSecret`: Client secret for the service principal (secure string)(From Azure App Registration)
  - `Auth_LoginEndpoint`: Login endpoint for authentication. Copy and paste this value in parameter-'https://login.microsoftonline.com'

#### b. Configurations in Sentinel:
- In Azure Sentinel, analytical rules should be configured to trigger an Alert with IP indicators.
- Configure the automation rules to trigger the playbook.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Spur](../solutions/spur.md)

