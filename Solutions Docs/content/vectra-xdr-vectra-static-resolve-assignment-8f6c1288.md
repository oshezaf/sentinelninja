# Vectra Static Resolve Assignment

This playbook resolves the assignment for an entity in Vectra and adds a note for the assignment when the status of an incident is changed to 'closed', and also it triages all active detections associated with the entity while applying the Microsoft Sentinel incident ID as the triage label.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Vectra XDR](../solutions/vectra-xdr.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR/Playbooks/VectraStaticResolveAssignment/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [VectraStaticResolveAssignment/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR/Playbooks/VectraStaticResolveAssignment/readme.md)*

## Summary

This playbook resolves the assignment for an entity in Vectra and adds a note for the assignment when the status of an incident is changed to 'closed', and also it triages all active detections associated with the entity while applying the Microsoft Sentinel incident ID as the triage label.

### Prerequisites

1. The Vectra XDR data connector should be configured to create alerts and generate an incident based on entity data in Microsoft Sentinel.
2. Obtain the key vault name and tenantId where client credentials are stored using which access token will be generated.
   * Create a Key Vault with a unique name.
   * Go to Keyvaults → *your Key Vault* → Overview and copy DirectoryID which will be used as tenantId.
   * NOTE: Ensure the Permission model in the Access Configuration of Key Vault is set to **'Vault access policy'**.
3. Obtain Teams GroupId and ChannelId:
   * Create a Team with a public channel.
   * Click on three dots (...) present on the right side of your newly created teams channel and Get link to the channel.
   * Copy the text from the link between /channel and /, decode it using an online URL decoder and copy it to use as channelId.
   * Copy the text of groupId parameter from the link to use as groupId.
4. Ensure that VectraGenerateAccessToken playbook is deployed before deploying VectraStaticResolveAssignment playbook.

### Deployment Instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
   * PlaybookName: Enter the playbook name here.
   * KeyVaultName: Name of the Key Vault where secrets are stored.
   * TenantId: Tenant ID where the Key Vault is located.
   * BaseURL: Enter the base URL of your Vectra account.
   * GenerateAccessCredPlaybookName: Playbook name which is deployed as part of prerequisites.
   * TeamsGroupId: Enter Id of the Teams Group where the adaptive card will be posted.
   * TeamsChannelId: Enter Id of the Teams Channel where the adaptive card will be posted.
   * EntityNote: Enter a note you want to add in Vectra Entity for assignment.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FVectraXDR%2FPlaybooks%2FVectraStaticResolveAssignment%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FVectraXDR%2FPlaybooks%2FVectraStaticResolveAssignment%2Fazuredeploy.json)

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

Add access policy for the playbook's managed identity and authorized user to read and write secrets of key vault.
1. Go to logic app → *your Logic App* → identity → System assigned Managed identity and copy Object (principal) ID.
2. Go to key vaults → *your Key Vault* → Access policies → create.
3. Select all keys & secrets permissions. Click next.
4. In the principal section, search by copied object ID. Click next.
5. Click review + create.
6. Repeat the above steps 2 to 5 to add access policy for the user account using which connection is authorized.

#### c. Configurations in Microsoft Sentinel

1. In Microsoft Sentinel, analytical rule should be configured to trigger an incident based on data ingested from Vectra. Incident should have Entity mapping.
2. In Microsoft Sentinel, Configure the automation rules to trigger the playbook:
   a. Go to Microsoft Sentinel → *your workspace* → Automation.
   b. Click on Create → Automation rule.
   c. Provide name for your rule.
   d. Select Trigger as When incident is updated.
   e. In Incident Status condition, select Status changed to 'Closed'.
   f. In Actions dropdown select Run playbook.
   g. In the second dropdown select your deployed playbook.
   h. Click on Apply.
   i. Save the Automation rule.

**NOTE:** If you want to manually run the playbook on a particular incident follow the below steps:
   a. Go to Microsoft Sentinel → *your workspace* → Incidents.
   b. Select an incident.
   c. In the right pane, click on Actions, and from the dropdown select the 'Run Playbook' option.
   d. Click on the Run button beside this playbook.

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Vectra XDR](../solutions/vectra-xdr.md)

