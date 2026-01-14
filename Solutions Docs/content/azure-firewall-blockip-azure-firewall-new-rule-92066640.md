# BlockIP-Azure Firewall New Rule

This playbook uses the Azure Firewall connector to add IP Address to the Deny Network Rules collection based on the Microsoft Sentinel Incident

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Azure Firewall](../solutions/azure-firewall.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Firewall/Playbooks/AzureFirewall-BlockIP-addNewRule/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [AzureFirewall-BlockIP-addNewRule/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Firewall/Playbooks/AzureFirewall-BlockIP-addNewRule/readme.md)*

# Block IP Address in Azure Firewall by adding new rules to Network Rules Collection

 ## Summary
When a new Microsoft Sentinel incident is created, this playbook gets triggered and performs below actions:
1.  An adaptive card is sent to the SOC channel, providing IP address, Virus Total report , showing list of existing firewalls in the Resource group and providing an option to block IP Address to Deny network rules collection or Ignore.
2. If SOC user confirms yes, the IP Address gets added to deny network rules collection and incident will get updates with endpoint information, summary of the action taken and virus total scan report.
3. Else, incident will get updates with endpoint information and summary of the action taken. 
4. Update the firewall tags "configuration" as key and "sentinel" as value.


![IP Address to block IP Address while adding to the Deny network rules collection](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Firewall/Playbooks/AzureFirewall-BlockIP-addNewRule/designerScreenshot.PNG)<br><br>
**This is the adaptive card SOC will recieve when playbook is triggered:**<br><br>
![Adaptive Card example](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Firewall/Playbooks/AzureFirewall-BlockIP-addNewRule/AdaptiveCard.jpg)

**Comment example:**<br><br>
![Comment example](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Firewall/Playbooks/AzureFirewall-BlockIP-addNewRule/Incident_Comment.png)

### Prerequisites 
1. **This playbook template is based on Microsoft Sentinel Incident Trigger which is currently in Private Preview (Automation Rules).** You can change the trigger to the Sentinel Alert trigger in cases you are not part of the Private Preview.
1. Azure Firewall connector needs to be deployed prior to the deployment of this playbook under the same subscription. Relevant instructions can be found in the connector doc page.
1. Azure Firewall connector need to be authenticated with a Service Principal that has permissions over Azure Firewall. Relevant instructions can be found in the connector doc page.
1. This playbook will add new rules to existing Network Collections in Azure Firewalls in your subscription. Make sure you have such prior to running the playbook. 
1. **Permissions required for this playbook** 
This playbook **Gets** and **Updates** Azure Firewalls. The registered application/Service Principal that is authenticated to the connector needs to have the following RBAC Roles:

	* **Contributor** on the Azure Firewalls it should be able to get and update in the subscription.

1. To use VirusTotal connector, get your Virus Totan API key. [ how to generate the API Key](https://developers.virustotal.com/v3.0/reference#getting-started)


### Deployment instructions 
1. Deploy the playbook by clicking on "Depoly to Azure" button. This will take you to deplyoing an ARM Template wizard.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FAzure%2520Firewall%2FPlaybooks%2FAzureFirewall-BlockIP-addNewRule%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FAzure%2520Firewall%2FPlaybooks%2FAzureFirewall-BlockIP-addNewRule%2Fazuredeploy.json)


2. Fill in the required paramteres:
    * Playbook Name: Enter the playbook name here (ex:AzureFirewall-BlockIP-addNewRule)
    * Teams GroupId : Enter the Teams channel id to send the adaptive card
    * Teams ChannelId : Enter the Teams Group id to send the adaptive card
    [Refer the below link to get the channel id and group id](https://docs.microsoft.com/powershell/module/teams/get-teamchannel?view=teams-ps)
    * ClientId : Enter the ClientId of the application
    * ClientSecret : Enter the Client secret of the application

### Post-Deployment instructions 
#### a. Authorize connections
Once deployment is complete, you will need to authorize each connection.
1.	Click the Microsoft Sentinel connection resource
2.	Click edit API connection
3.	Click Authorize
4.	Sign in
5.	Click Save
6.	Repeat steps for other connection such as Teams connection and Virus Total (For authorizing the Virus Total API connection, the API Key needs to be provided)
7.  Authorize the Azure Firewall custom connector by following the below mentioned steps.

	  a. Navigate to playbook

     b. Click Edit

     c. Find the action with the name "Lists all Azure Firewalls in a resource group", "Gets the specified Azure Firewall","Creates or updates the specified Azure Firewall", "Updates tags for Azure Firewall resource" in the workflow.
        
     d. Click Change connection
        a. Enter Connection name, ClientId, SecretKey and TenantId captured from Microsoft Entra ID. 


*[Content truncated...]*

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Azure Firewall](../solutions/azure-firewall.md)

