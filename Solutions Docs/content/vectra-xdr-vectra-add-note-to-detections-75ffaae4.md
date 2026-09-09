# Vectra Add Note To Detections

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook extracts notes from incident comments and adds them to each detection listed in the incident's custom details. If no comment with proper structure is found and Teams is configured, it prompts the user for note input via an Adaptive Card. If Teams is not configured, the playbook exits gracefully with Succeeded status.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Vectra XDR](../solutions/vectra-xdr.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR/Playbooks/VectraAddNoteToDetections/azuredeploy.json) |

## Logic App Connectors

This playbook uses **5** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 0 |
| [`keyvault`](../logic-apps/managed-keyvault.md) | Managed | 1 | 2 |
| [`teams`](../logic-apps/managed-teams.md) | Managed | 1 | 0 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 2 |
| [`workflow`](../logic-apps/builtin-workflow.md) | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`keyvault`](../logic-apps/managed-keyvault.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_Access_Token_For_Fetching_Notes | get | `/secrets/@{encodeURIComponent('Vectra-Access-Token')}/value` | — |
| Get_Access_Token_For_Adding_Notes | get | `/secrets/@{encodeURIComponent('Vectra-Access-Token')}/value` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP_Request_To_Fetch_Notes_Of_Detection | GET | `@{variables('base_url')}/api/@{variables('api_version')}/detections/@{int(split(items('For_Each_Detection_ID'), '.')[0])}/notes` | — |
| HTTP_Request_To_Add_Note_To_Detection | POST | `@{variables('base_url')}/api/@{variables('api_version')}/detections/@{int(split(items('For_Each_Detection_ID'), '.')[0])}/notes` | — |

#### [`workflow`](../logic-apps/builtin-workflow.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| GenerateAccessTokenVectra_For_Fetching_Notes | — | — | workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/',trim(parameters('GenerateAccessCredPlaybookName')))]`<br>triggerName=`manual` |
| GenerateAccessTokenVectra_For_Adding_Notes | — | — | workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/',resourceGroup().name,'/providers/Microsoft.Logic/workflows/',trim(parameters('GenerateAccessCredPlaybookName')))]`<br>triggerName=`manual` |

</details>

## Additional Documentation

> 📄 *Source: [VectraAddNoteToDetections/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR/Playbooks/VectraAddNoteToDetections/readme.md)*

## Summary

This playbook extracts notes from incident comments and adds them to each detection listed in the incident's custom details. If no comment with proper structure is found and Teams is configured, it prompts the user for note input via an Adaptive Card. If Teams is not configured, the playbook exits gracefully with Succeeded status.

### Prerequisites

1. The Vectra XDR data connector should be configured to create alerts and generate an incident based on entity data in Microsoft Sentinel.
2. Obtain Key Vault name and Tenant ID where client credentials are stored and using which access token will be generated.
   * Create a Key Vault with a unique name.
   * Go to Key Vaults → *your Key Vault* → Overview and copy Directory ID, which will be used as the tenant ID.
   **NOTE:** Ensure the Permission model in the Access Configuration of Key Vault is set to **'Vault access policy'**.
3. *(Optional)* Obtain Teams GroupId and ChannelId if you want the playbook to prompt for notes when no structured comment is found.
   * Create a Team with a public channel.
   * Click on the three dots (...) next to your newly created Teams channel and select **Get link to channel**.
   * Copy the text from the link between `/channel` and `/`, decode it using an online URL decoder, and copy it to use as Channel ID.
   * Copy the text of the GroupId parameter from the link to use as GroupId.
4. Ensure the VectraGenerateAccessToken playbook is deployed before deploying VectraAddNoteToDetections playbook.

### Deployment Instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
   * PlaybookName: Enter the playbook name here.
   * KeyVaultName: Name of the Key Vault where secrets are stored.
   * TenantId: Tenant ID where the Key Vault is located.
   * BaseURL: Enter the base URL of your Vectra account.
   * TeamsGroupId: *(Optional)* Enter Id of the Teams Group where the adaptive card will be posted. Leave empty to skip Teams prompts.
   * TeamsChannelId: *(Optional)* Enter Id of the Teams Channel where the adaptive card will be posted. Leave empty to skip Teams prompts.
   * GenerateAccessCredPlaybookName: Playbook name which is deployed as part of prerequisites.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FVectraXDR%2FPlaybooks%2FVectraAddNoteToDetections%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FVectraXDR%2FPlaybooks%2FVectraAddNoteToDetections%2Fazuredeploy.json)

### Post-Deployment Instructions

#### a. Authorize connections

Once deployment is complete, authorize each connection.
1. Go to your logic app → API connections → Select keyvault connection resource.
2. Go to General → Edit API connection.
3. Click Authorize.
4. Sign in.
5. Click Save.
6. Repeat steps for other connections (Teams connection if Teams parameters are configured).

#### b. Add Access Policy in Key Vault

Add access policy for the playbook's managed identity and authorized user to read and write secrets of the Key Vault.
1. Go to Logic App → *your Logic App* → Identity → System assigned Managed identity and copy Object (principal) ID.
2. Go to Key Vaults → *your Key Vault* → Access policies → Create.
3. Select all keys & secrets permissions. Click Next.
4. In the principal section, search by copied Object ID. Click Next.
5. Click Review + Create.
6. Repeat steps 2 to 5 to add access policy for the user account used to authorize the connection.

#### c. Configurations in Microsoft Sentinel

1. In Microsoft Sentinel, the analytical rule should be configured to trigger an incident based on data ingested from Vectra. Incident should have Entity mapping with `detection_id` populated in Custom Details.
2. To manually run the playbook on a particular incident, follow the steps below:
   * Go to Microsoft Sentinel → *your workspace* → Incidents.
   * Select an incident.
   * In the right pane, click on **Actions**, and from the dropdown select the **Run Playbook** option.
   * Click on the **Run** button beside this playbook.

#### d. Note

1. In Microsoft Sentinel Incident, the comment should be in the following structure only to be able to extract values from it.
   * **note: [note_content]** (Do not use quotes for note content)
   * **note: {note_content}** (Do not use quotes for note content)
   * Single note value is supported from the comment. For multiple note values, use the adaptive card option instead.
2. If both `TeamsGroupId` and `TeamsChannelId` are left empty at deployment, the playbook will exit with **Succeeded** status when no structured comment is found, instead of prompting via Teams.

*[Content truncated...]*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Vectra XDR](../solutions/vectra-xdr.md)

