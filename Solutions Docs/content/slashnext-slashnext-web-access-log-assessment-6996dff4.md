# SlashNext Web Access Log Assessment

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Designed to analyze Web Access logs from Web Gateways and Firewalls. Scan your logs for continuous detection of phishing and malicious threat URLs clicked by end users. Identify threats missed by current security layers.The playbook shall extract all the URLs from the logs to perform analysis using SlashNext Connector and create an incident for each unique malicious URL found in the web logs.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SlashNext](../solutions/slashnext.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SlashNext/Playbooks/SlashNextWebAccessLogAssessment/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `SlashNext` | Custom | 1 | 1 |
| `function` | Built-in | 0 | 2 |
| `http` | Built-in | 0 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`SlashNext`** (customApi):
- *Repute*: method=`post`, path=`/api/v1/urls/repute`

**`function`** (builtin):
- *Extract_List_of_URLs*: functionId=`[concat('/subscriptions/',subscription().subscriptionId, '/resourceGroups/', resourceGroup().name,'/providers/Microsoft.Web/sites/',variables('azureFunction'),'/functions/processlogs')]`
- *Generate_URL_Mapping*: functionId=`[concat('/subscriptions/',subscription().subscriptionId, '/resourceGroups/', resourceGroup().name,'/providers/Microsoft.Web/sites/',variables('azureFunction'),'/functions/processlogs')]`

**`http`** (builtin):
- *Query_for_table_names*: method=`POST`, uri=`@variables('Query API')`
- *Query_data_from_each_table*: method=`POST`, uri=`@variables('Query API')`
- *Add_Comment_in_Existing_Incident*: method=`PUT`, uri=`[uriComponentToString(uri(variables('domain'),'subscriptions/@{variables('subscription_id')}/resourceGroups/@{variables('resource_group')}/providers/Microsoft.OperationalInsights/workspaces/@{variables('workspace_name')}/providers/Microsoft.SecurityInsights/incidents/@{items('Incident_Creating_Loop')['hash']}/comments/@{guid()}?api-version=2021-10-01'))]`
- *Insert_Incident*: method=`PUT`, uri=`[uriComponentToString(uri(variables('domain'),'subscriptions/@{variables('subscription_id')}/resourceGroups/@{variables('resource_group')}/providers/Microsoft.OperationalInsights/workspaces/@{variables('workspace_name')}/providers/Microsoft.SecurityInsights/incidents/@{body('Parse_URL_Mapping')?['hash']}?api-version=2021-10-01-preview'))]`

</details>

## Additional Documentation

> 📄 *Source: [SlashNextWebAccessLogAssessment/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SlashNext/Playbooks/SlashNextWebAccessLogAssessment/readme.md)*

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SlashNext/Playbooks/SlashNextWebAccessLogAssessment/../logo/slashnext-logo.png" alt="drawing" width="50%"/><br>

## Overview

Designed to analyze Web Access logs from Web Gateways and Firewalls. 
Scan your logs for continuous detection of phishing and malicious threat URLs clicked by end users.
Identify threats missed by current security layers

The playbook shall extract all the URLs from the logs to perform analysis using SlashNext Connector
and create an incident for each unique malicious URL found in the web logs.

## SlashNext Web Access Log Assessment Playbook 

### Prerequisites

**SlashNext Logic Apps Connector** supports **Basic** authentication, while creating connection you will be asked to provide API key. 
To acquire SlashNext API key, please contact us at [support@slashnext.com](mailto:support@slashnext.com) or visit [SlashNext.com](www.slashnext.com)

### Deployment Instructions 
1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
    * Playbook Name: Enter playbook name here

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSlashNext%2FPlaybooks%2FSlashNextWebAccessLogAssessment%2Fdeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSlashNext%2FPlaybooks%2FSlashNextWebAccessLogAssessment%2Fdeploy.json)

### Post-Deployment Instructions
#### a. Authorize connections

Once deployment is complete, authorize SlashNext Logic Apps Connector connection.

1. Click on the SlashNext connection resource
2. Click **Edit** API connection
3. Enter API key acquired from SlashNext
4. Click **Save**

#### b. Configure Logic App Permissions

1. Click on **Identity**
2. Select **Azure role assignment** from system assigned tab
3. Click on **Add role assignment**
4. Select relevant permission and save
5. Repeat above steps for the following permissions
    1. Log Analytics Reader
    2. Microsoft Sentinel Contributor

#### c. Set following Variables in Logic App as per the Environment

1. Subscription Id
2. Workspace Id
3. Resource Group
4. Workspace Name

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to SlashNext](../solutions/slashnext.md)

