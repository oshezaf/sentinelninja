# Vectra Dynamic Resolve Assignment

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

When an incident is closed, This playbook will prompt the operator to select an outcome from a predefined list, choose detections to triage from associated detection IDs and name list, provide a resolution note, and label the triaged detections. Based on the provided input playbook will resolve the open assignment.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Vectra XDR](../solutions/vectra-xdr.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR/Playbooks/VectraDynamicResolveAssignment/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [VectraDynamicResolveAssignment/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR/Playbooks/VectraDynamicResolveAssignment/readme.md)*

## Summary

When an incident is closed, This playbook will prompt the operator to select an outcome from a predefined list, choose detections to triage from associated detection IDs and name list, provide a resolution note, and label the triaged detections. Based on the provided input playbook will resolve the open assignment.

### Prerequisites

1. The Vectra XDR data connector should be configured to create alerts and generate an incident based on entity data in Microsoft Sentinel.
2. Obtain the Key Vault name and Tenant ID where client credentials are stored using which the access token will be generated.
   * Create a Key Vault with a unique name.
   * Go to Key Vaults → *your Key Vault* → Overview and copy Directory ID, which will be used as the tenant ID.
   * NOTE: Ensure the Permission model in the Access Configuration of Key Vault is set to **'Vault access policy'**.
3. Obtain Teams GroupId and ChannelId.
   * Create a Team with a public channel.
   * Click on three dots (...) present on the right side of your newly created teams channel and Get link to the channel.
   * Copy the text from the link between /channel and /, decode it using an online URL decoder, and copy it to use as channelId.
   * Copy the text of groupId parameter from the link to use as groupId.
4. Make sure that the VectraGenerateAccessToken playbook is deployed before deploying VectraDynamicResolveAssignment playbook.

### Deployment Instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
   * PlaybookName: Enter the playbook name here.
   * KeyVaultName: Name of the Key Vault where secrets are stored.
   * tenantId: Tenant ID where the Key Vault is located.
   * BaseURL: Enter the base URL of your Vectra account.
   * TeamsGroupId: Enter Id of the Teams Group where the adaptive card will be posted.
   * TeamsChannelId: Enter Id of the Teams Channel where the adaptive card will be posted.
   * GenerateAccessCredPlaybookName: Playbook name which is deployed as part of prerequisites.
   

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FVectraXDR%2FPlaybooks%2FVectraDynamicResolveAssignment%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FVectraXDR%2FPlaybooks%2FVectraDynamicResolveAssignment%2Fazuredeploy.json)

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
3. Select all keys & secrets permissions. Click next.
4. In the principal section, search by copied Object ID. Click next.
5. Click review + create.
6. Repeat the above steps 2 to 5 to add access policy for the user account using which connection is authorized.

#### c. Configurations in Microsoft Sentinel

1. In Microsoft Sentinel, analytical rule should be configured to trigger an incident based on data ingested from Vectra. Incident should have Entity mapping.
2. In Microsoft Sentinel, Configure the automation rules to trigger the playbook.
   * Go to Microsoft Sentinel → *your workspace* → Automation.
   * Click on Create → Automation rule.
   * Provide a name for your rule.
   * Select Trigger as When incident is updated.
   * In Conditions, select Status Equals 'Closed'.
   * In Actions dropdown select Run playbook.
   * In the second dropdown, select your deployed playbook.
   * Click on Apply.
   * Save the Automation rule.

**NOTE:** If you want to manually run the playbook on a particular incident, follow the below steps:
1. Go to Microsoft Sentinel → *your workspace* → Incidents.
2. Select an incident.
3. In the right pane, click on Actions, and from the dropdown select the 'Run Playbook' option.
4. Click on the Run button beside this playbook.

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Vectra XDR](../solutions/vectra-xdr.md)

