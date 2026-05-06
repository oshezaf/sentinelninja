# Endpoint enrichment - Crowdstrike

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

When a new Microsoft Sentinel incident is created, this playbook gets triggered and performs below actions:

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection/Playbooks/CrowdStrike_Enrichment_GetDeviceInformation/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 2 |
| `http` | Built-in | 0 | 4 |
| `workflow` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Entities_-_Get_Hosts*: method=`post`, path=`/entities/host`

**`http`** (builtin):
- *HTTP-Get_detection_information*: method=`POST`, uri=`@{body('CrowdStrike_Base')?['FalconHost']}/detects/entities/summaries/GET/v1`
- *HTTP_-Search_for_detections*: method=`GET`, uri=`@{body('CrowdStrike_Base')?['FalconHost']}/detects/queries/detects/v1?filter=first_behavior:>'@{variables('Timestamp')}'&device_id:'@{body('Parse_JSON_Get_device_id_response')?['resources']?[0]}'&sort=first_behavior.desc`
- *HTTP_-_Get_device_information_*: method=`GET`, uri=`@{body('CrowdStrike_Base')?['FalconHost']}/devices/entities/devices/v1?ids=@{body('Parse_JSON_Get_device_id_response')?['resources']?[0]}`
- *HTTP_-_Get_device_id*: method=`GET`, uri=`@{body('CrowdStrike_Base')?['FalconHost']}/devices/queries/devices/v1?filter=hostname:'@{body('Entities_-_Get_Hosts')?['Hosts']?[0]?['HostName']}'`

**`workflow`** (builtin):
- *CrowdStrike_Base*: workflowId=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name ,'/providers/Microsoft.Logic/workflows/', parameters('CrowdStrike_Base_Playbook_Name'))]`, triggerName=`manual`

</details>

## Additional Documentation

> 📄 *Source: [CrowdStrike_Enrichment_GetDeviceInformation/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection/Playbooks/CrowdStrike_Enrichment_GetDeviceInformation/readme.md)*

# Crowdstrike_Enrichment_GetDeviceInformation
 ## Summary
 When a new Microsoft Sentinel incident is created, this playbook gets triggered and performs below actions:
 1. Fetches the device information from Crowdstrike
 2. Enrich the incident with device information from Crowdstrike

![comment](https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection/Playbooks/CrowdStrike_Enrichment_GetDeviceInformation/images/comment.png)

![Crowdstrike_Enrichment_GetDeviceInformation](https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection/Playbooks/CrowdStrike_Enrichment_GetDeviceInformation/images/designerOverviewCollapsedLight.png)

### Prerequisites 
1. Azure Key vault is required for storing the Crowdstrike ClientID and Secrets, create key vault if not exists [learn how](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2Fazure-quickstart-templates%2Fmaster%2Fquickstarts%2Fmicrosoft.keyvault%2Fkey-vault-secret-create%2Fazuredeploy.json)
2. Add Crowdstrike Client ID and Client Secret in Key vault secrets and capture the keys which are required during the template deployment
3. CrowdStrike_Base playbook needs to be deployed prior to the deployment of this playbook under the same subscription and under the same resource group.
4. CrowdStrike_Base playbook needs to be added in the access policy of the Key Vault [learn how](https://docs.microsoft.com/azure/key-vault/general/assign-access-policy-portal)

### Deployment instructions 
1. Deploy the playbook by clicking on "Deploy to Azure" button. This will take you to deploying an ARM Template wizard.
2. Fill in the required parameters:
    * Playbook_Name: Enter the playbook name here (Ex:Crowdstrike_ContainHost)
    * CrowdStrike_Base_Playbook_Name : Enter the base playbook name here (Ex:CrowdStrike_Base)
    
### Post-Deployment instructions 
#### a. Authorize connections
Once deployment is complete, you will need to authorize connections.
1.	Click the Microsoft Sentinel connection resource
2.	Click edit API connection
3.	Click Authorize
4.	Sign in
5.	Click Save
#### b. Configurations in Sentinel
1. In Microsoft sentinel analytical rules should be configured to trigger an incident with risky device 
2. Configure the automation rules to trigger this playbook


[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCrowdStrike%2520Falcon%2520Endpoint%2520Protection%2FPlaybooks%2FCrowdStrike_Enrichment_GetDeviceInformation%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCrowdStrike%2520Falcon%2520Endpoint%2520Protection%2FPlaybooks%2FCrowdStrike_Enrichment_GetDeviceInformation%2Fazuredeploy.json)

## Playbook steps explained

### When Microsoft Sentinel incident creation rule is triggered
Microsoft Sentinel incident is created. The playbook receives the incident as the input.

### Entities - Get Hosts
Get the list of risky devices as entities from the Incident

### Initialize_variable_comment
Initialize a string variable to store comments to update in the incident

### Initialize variable timestamp
Initialize timestamp variable to hold the timestamp for the past 3 days

### CrowdStrike Base
Call the base logic App to get access token and Falcon Host URL

### HTTP-Get device id
This gets the device id from crowdstrike by filtering on hostname

### Parse JSON Get device id response
This prepares Json message for the device id response

 ### Condition to check if device is present in crowdstrike

1. If device is present, get the device information from crowdstrike API and prepares HTML table with required information
2. Set the timestamp for past 3 days and search for detections on the host and get the detection information
3. check if detection information is present create HTML table for detection information

 ### Compose image to add in the incident
This action will compose the Crowdstrike image to add to the incident comments

### Add a comment to the incident with the information
This action will enrich the incident with the constructed HTML table with device information

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)

