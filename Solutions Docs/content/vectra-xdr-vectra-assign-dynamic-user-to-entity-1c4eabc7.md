# Vectra Assign Dynamic User To Entity

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will assign a user selected by user from teams adpative card to an entity in Vectra when the status of an incident changes from 'New' to 'Active'.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Vectra XDR](../solutions/vectra-xdr.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR/Playbooks/VectraAssignDynamicUserToEntity/azuredeploy.json) |

## Logic App Connectors

This playbook uses **6** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 0 |
| `keyvault` | Managed | 1 | 0 |
| `keyvault_3` | Managed | 0 | 5 |
| `teams` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 5 |
| `workflow` | Built-in | 0 | 5 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`keyvault_3`** (managedApi):
- *Get_Access_Token_For_Assign_User_To_Vectra_Entity*: method=`get`, path=`/secrets/@{encodeURIComponent('Vectra-Access-Token')}/value`
- *Get_Access_Token_For_Reassigning_User_To_Vectra_Entity*: method=`get`, path=`/secrets/@{encodeURIComponent('Vectra-Access-Token')}/value`
- *Get_Access_Token_For_Host_Entity*: method=`get`, path=`/secrets/@{encodeURIComponent('Vectra-Access-Token')}/value`
- *Get_Access_Token_For_Account_Entity*: method=`get`, path=`/secrets/@{encodeURIComponent('Vectra-Access-Token')}/value`
- *Get_Access_Token_For_Users*: method=`get`, path=`/secrets/@{encodeURIComponent('Vectra-Access-Token')}/value`

**`teams`** (managedApi):
- *Post_Message_in_Chat_For_No_Users_Found*: method=`post`, path=`/beta/teams/conversation/message/poster/Flow bot/location/@{encodeURIComponent('Channel')}`

**`http`** (builtin):
- *HTTP_Request_To_Assign_User_To_Vectra_Entity*: method=`POST`, uri=`@{variables('base_url')}/api/@{variables('api_version')}/assignments`
- *HTTP_Request_To_Reassign_User_To_Vectra_Entity*: method=`PUT`, uri=`@{variables('base_url')}/api/@{variables('api_version')}/assignments/@{variables('assignment_id')}`
- *HTTP_Request_To_Fetch_Associated_Host_Entity_Data*: method=`GET`, uri=`@{variables('base_url')}/api/@{variables('api_version')}/hosts/@{int(variables('entity_id'))}`
- *HTTP_Request_To_Fetch_Associated_Account_Entity_Data*: method=`GET`, uri=`@{variables('base_url')}/api/@{variables('api_version')}/accounts/@{int(variables('entity_id'))}`
- *HTTP_Request_To_Fetch_Available_Users*: method=`GET`, uri=`@{variables('base_url')}/api/@{variables('api_version')}/users`

**`workflow`** (builtin):
- *GenerateAccessTokenVectra_2*: workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/',trim(parameters('GenerateAccessCredPlaybookName')))]`, triggerName=`manual`
- *GenerateAccessTokenVectra_5*: workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/',trim(parameters('GenerateAccessCredPlaybookName')))]`, triggerName=`manual`
- *GenerateAccessTokenVectra_3*: workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/',trim(parameters('GenerateAccessCredPlaybookName')))]`, triggerName=`manual`
- *GenerateAccessTokenVectra_4*: workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/',trim(parameters('GenerateAccessCredPlaybookName')))]`, triggerName=`manual`
- *GenerateAccessTokenVectra*: workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/',trim(parameters('GenerateAccessCredPlaybookName')))]`, triggerName=`manual`

</details>

## Additional Documentation

> 📄 *Source: [VectraAssignDynamicUserToEntity/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR/Playbooks/VectraAssignDynamicUserToEntity/readme.md)*

## Summary

This playbook will assign a user selected by the user from a Teams adaptive card to an entity in Vectra when the status of an incident changes from 'New' to 'Active'.

### Prerequisites

1. The Vectra XDR data connector should be configured to create alerts and generate an incident based on entity data in Microsoft Sentinel.
2. Obtain Key Vault name and Tenant ID where client credentials are stored using which the access token will be generated.
   * Create a Key Vault with a unique name.
   * Go to Key Vaults → *your Key Vault* → Overview and copy Directory ID, which will be used as the tenant ID.
   **NOTE:** Ensure the Permission model in the Access Configuration of Key Vault is set to **'Vault access policy'**.
3. Make sure that VectraGenerateAccessToken playbook is deployed before deploying VectraAssignDynamicUserToEntity playbook.
4. Obtain Teams GroupId and ChannelId.
   * Create a Team with a public channel.
   * Click on the three dots (...) next to your newly created Teams channel and select **Get link to channel**.
   * Copy the text from the link between `/channel` and `/`, decode it using an online URL decoder, and copy it to use as Channel ID.
   * Copy the text of the GroupId parameter from the link to use as GroupId.

### Deployment Instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
   * PlaybookName: Enter the playbook name here.
   * KeyVaultName: Name of the Key Vault where secrets are stored.
   * TenantId: Tenant ID where the Key Vault is located.
   * BaseURL: Enter the base URL of your Vectra account.
   * TeamsGroupId: Enter Id of the Teams Group where the adaptive card will be posted.
   * TeamsChannelId: Enter Id of the Teams Channel where the adaptive card will be posted.
   * GenerateAccessCredPlaybookName: Playbook name which is deployed as part of prerequisites.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FVectraXDR%2FPlaybooks%2FVectraAssignDynamicUserToEntity%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FVectraXDR%2FPlaybooks%2FVectraAssignDynamicUserToEntity%2Fazuredeploy.json)

### Post-Deployment Instructions

#### a. Authorize connections

Once deployment is complete, authorize each connection.
1. Go to your logic app → API connections → Select keyvault connection resource.
2. Go to General → Edit API connection.
3. Click Authorize.
4. Sign in.
5. Click Save.
6. Repeat steps for other connections.

#### b. Add Access Policy in Key Vault

Add access policy for the playbook's managed identity and authorized user to read and write secrets of the Key Vault.
1. Go to Logic App → *your Logic App* → Identity → System assigned Managed identity and copy Object (principal) ID.
2. Go to Key Vaults → *your Key Vault* → Access policies → Create.
3. Select all keys & secrets permissions. Click Next.
4. In the principal section, search by copied Object ID. Click Next.
5. Click Review + Create.
6. Repeat steps 2 to 5 to add access policy for the user account using which connection is authorized.

#### c. Configurations in Microsoft Sentinel

1. In Microsoft Sentinel, an analytical rule should be configured to trigger an incident based on data ingested from Vectra. The incident should have Entity mapping.
2. In Microsoft Sentinel, configure the automation rules to trigger the playbook.
   * Go to Microsoft Sentinel → *your workspace* → Automation.
   * Click on **Create** → **Automation rule**.
   * Provide a name for your rule.
   * Select **Trigger** as **When incident is updated**.
   * In **Conditions**, select **Status changed from 'New'** and **Status changed to 'Active'**.
   * In **Actions** dropdown select **Run playbook**.
   * In the second dropdown select your deployed playbook.
   * Click on **Apply**.
   * Save the Automation rule.

**NOTE:** If you want to manually run the playbook on a particular incident, follow the steps below:
   * Go to Microsoft Sentinel → *your workspace* → Incidents.
   * Select an incident.
   * In the right pane, click on **Actions**, and from the dropdown select the **Run Playbook** option.
   * Click on the **Run** button beside this playbook.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Vectra XDR](../solutions/vectra-xdr.md)

