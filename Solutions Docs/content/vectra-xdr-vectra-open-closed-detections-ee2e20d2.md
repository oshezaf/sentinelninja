# Vectra Open Closed Detections

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook enables user to close opened detections associated with a Vectra Entity. User can add detection ids in comments of the associated incident else if no comments found, users can provide detection ids via MS Teams.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Vectra XDR](../solutions/vectra-xdr.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR/Playbooks/VectraOpenClosedDetections/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [VectraOpenClosedDetections/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR/Playbooks/VectraOpenClosedDetections/readme.md)*

## Summary

This playbook enables users to close opened detections associated with a Vectra Entity. Users can add detection IDs in comments of the associated incident or, if no comments are found, users can provide detection IDs via Microsoft Teams Card.

### Prerequisites

1. Obtain Key Vault name and Tenant ID where client credentials are stored using which access token will be generated.
   - Create a Key Vault with a unique name.
   - Go to Key Vaults → *your Key Vault* → Overview and copy Directory ID, which will be used as the tenant ID.
   - **NOTE:** Ensure the Permission model in the Access Configuration of Key Vault is set to **'Vault access policy'**.
2. Obtain Teams GroupId and ChannelId.
   - Create a Team with a public channel.
   - Click on the three dots (...) next to your newly created Teams channel and select **Get link to channel**.
   - Copy the text from the link between `/channel` and `/`, decode it using an online URL decoder, and copy it to use as Channel ID.
   - Copy the text of the GroupId parameter from the link to use as GroupId.
3. Ensure the VectraGenerateAccessToken playbook is deployed before deploying VectraOpenClosedDetections playbook.

### Deployment Instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
   - PlaybookName: Enter the playbook name here.
   - KeyVaultName: Name of the Key Vault where secrets are stored.
   - TenantId: Tenant ID where the Key Vault is located.
   - BaseURL: Enter the base URL of your Vectra account.
   - TeamsGroupId: Enter Id of the Teams Group where the adaptive card will be posted.
   - TeamsChannelId: Enter Id of the Teams Channel where the adaptive card will be posted.
   - GenerateAccessCredPlaybookName: Playbook name which is deployed as part of prerequisites.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FVectraXDR%2FPlaybooks%2FVectraOpenClosedDetections%2Fazuredeploy.json) [![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FVectraXDR%2FPlaybooks%2FVectraOpenClosedDetections%2Fazuredeploy.json)

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
6. Repeat steps 2 to 5 to add access policy for the user account used to authorize the connection.

#### c. Assign Role to update incident

After authorizing each connection, assign role to this playbook.
1. Go to Log Analytics Workspace → *your workspace* → Access Control → Add.
2. Add role assignment.
3. Assignment type: Job function roles.
4. Role: Microsoft Sentinel Contributor.
5. Members: select managed identity for assigned access to and add your logic app as member.
6. Click on review+assign.

#### d. Configurations in Microsoft Sentinel

1. In Microsoft Sentinel, the analytical rule should be configured to trigger an incident based on data ingested from Vectra. Incident should have Entity mapping.
2. To manually run the playbook on a particular incident, follow the steps below:
   - Go to Microsoft Sentinel → *your workspace* → Incidents.
   - Select an incident.
   - In the right pane, click on **Actions**, and from the dropdown select the **Run Playbook** option.
   - Click on the **Run** button beside this playbook.

#### e. Note

1. In Microsoft Sentinel Incident, the comment should contain detection IDs in the following format to be able to extract values from it.
   * **open_dets: id1,id2,id3** (Comma-separated detection IDs without quotes)
   * **open_dets: All** (Use 'All' keyword with specified format to open all detections)
   * Multiple detection IDs are supported from the comment. If no comments are found, users can provide detection IDs via the adaptive card option instead.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Vectra XDR](../solutions/vectra-xdr.md)

