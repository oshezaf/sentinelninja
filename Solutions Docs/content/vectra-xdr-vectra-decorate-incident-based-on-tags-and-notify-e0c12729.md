# Vectra Decorate Incident Based On Tags And Notify

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will add pre-defined or user customizable comment to an incident generated based on tags, add pre-defined or user customizable note to associated Vectra Entity and notify to Microsoft Teams.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Vectra XDR](../solutions/vectra-xdr.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR/Playbooks/VectraDecorateIncidentBasedOnTagAndNotify/azuredeploy.json) |

## Logic App Connectors

This playbook uses **6** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 1 |
| [`keyvault`](../logic-apps/managed-keyvault.md) | Managed | 1 | 0 |
| [`keyvault_3`](../logic-apps/managed-keyvault-3.md) | Managed | 0 | 1 |
| [`teams`](../logic-apps/managed-teams.md) | Managed | 1 | 1 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 1 |
| [`workflow`](../logic-apps/builtin-workflow.md) | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_Comment_To_Incident_(V3) | post | `/Incidents/Comment` | — |

#### [`keyvault_3`](../logic-apps/managed-keyvault-3.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_Access_Token | get | `/secrets/@{encodeURIComponent('Vectra-Access-Token')}/value` | — |

#### [`teams`](../logic-apps/managed-teams.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Post_Message_in_Teams | post | `/beta/teams/conversation/message/poster/Flow bot/location/@{encodeURIComponent('Channel')}` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP_Request_To_Add_Note_To_Vectra_Entity | POST | `@{variables('base_url')}/api/@{variables('api_version')}/entities/@{int(variables('entity_id'))}/notes` | — |

#### [`workflow`](../logic-apps/builtin-workflow.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| GenerateAccessTokenVectra | — | — | workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/',trim(parameters('GenerateAccessCredPlaybookName')))]`<br>triggerName=`manual` |

</details>

## Additional Documentation

> 📄 *Source: [VectraDecorateIncidentBasedOnTagAndNotify/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR/Playbooks/VectraDecorateIncidentBasedOnTagAndNotify/readme.md)*

## Summary

This playbook will add pre-defined or user customizable comment to an incident generated based on tags, add pre-defined or user customizable note to associated Vectra Entity and notify to Microsoft Teams.

### Prerequisites

1. The Vectra XDR data connector should be configured to create alerts and generate an incident based on entity data in Microsoft Sentinel.
2. Obtain the Key Vault name and Tenant ID where client credentials are stored using which the access token will be generated.
   * Create a Key Vault with a unique name.
   * Go to Key Vaults → *your Key Vault* → Overview and copy Directory ID, which will be used as the tenant ID.
   * NOTE: Ensure the Permission model in the Access Configuration of Key Vault is set to **'Vault access policy'**.
3. User must have a Microsoft Teams account.
4. Make sure that the VectraGenerateAccessToken playbook is deployed before deploying the VectraDecorateIncidentBasedOnTagAndNotify playbook.

### Deployment Instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
   * PlaybookName: Enter the playbook name here.
   * KeyVaultName: Name of the Key Vault where secrets are stored.
   * tenantId: Tenant ID where the Key Vault is located.
   * BaseURL: Enter the base URL of your Vectra account.
   * TeamsUserId: Enter Microsoft Teams User email Id. 
   * IncidentComment: Enter comment you want to add in incident create based on tag. NOTE: Entity id, type and tag will be added by default for incident comment.
   * EntityNote: Enter a note you want to add in Vectra Entity. NOTE: Incident link will be added by default to note.
   * GenerateAccessCredPlaybookName: Playbook name which is deployed as part of prerequisites.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FVectraXDR%2FPlaybooks%2FVectraDecorateIncidentBasedOnTagAndNotify%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FVectraXDR%2FPlaybooks%2FVectraDecorateIncidentBasedOnTagAndNotify%2Fazuredeploy.json)

### Post-Deployment Instructions

#### a. Authorize Connections

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

#### c. Assign Role to Add Comment in Incident

Assign a role to this playbook.
1. Go to Log Analytics Workspace → *your workspace* → Access Control → Add.
2. Add role assignment.
3. Assignment type: Job function roles.
4. Role: Microsoft Sentinel Contributor.
5. Members: Select managed identity for assigned access to and add your logic app as a member.
6. Click on Review + Assign.

#### d. Configurations in Microsoft Sentinel

1. In Microsoft Sentinel, the below analytical rules should be configured to trigger an incident:
   * Vectra Create Incident Based On Tag For Entity Type Account.
   * Vectra Create Incident Based On Tag For Entity Type Host.
2. In Microsoft Sentinel, Configure the automation rules to trigger the playbook.
   * Go to Microsoft Sentinel → *your workspace* → Automation.
   * Click on Create → Automation rule.
   * Provide a name for your rule.
   * In Analytic rule name condition, select the analytic rule which you have created.
   * In Actions dropdown, select Run playbook.
   * In the second dropdown, select your deployed playbook.
   * Click on Apply.
   * Save the Automation rule.

**NOTE:** If you want to manually run the playbook on a particular incident follow the below steps:
- Go to Microsoft Sentinel → *your workspace* → Incidents
- Select an incident.
- In the right pane, click on Actions, and from the dropdown select the 'Run Playbook' option.
- click on the Run button beside this playbook.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Vectra XDR](../solutions/vectra-xdr.md)

