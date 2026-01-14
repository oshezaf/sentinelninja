# Block IP - Palo Alto PAN-OS - Entity trigger

This playbook interacts with relevant stakeholders, such incident response team, to approve blocking/allowing IPs in Palo Alto PAN-OS, using **Address Object Groups**. This allows to make changes on predefined address group, which is attached to predefined security policy rule.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PaloAlto-PAN-OS/Playbooks/PaloAltoPlaybooks/PaloAlto-PAN-OS-BlockIP-EntityTrigger/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [PaloAltoPlaybooks/PaloAlto-PAN-OS-BlockIP-EntityTrigger/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PaloAlto-PAN-OS/Playbooks/PaloAltoPlaybooks/PaloAlto-PAN-OS-BlockIP-EntityTrigger/readme.md)*

# PaloAlto-PAN-OS-BlockIP

 ## Summary

This playbook allows blocking/unblocking IPs in PaloAlto, using **Address Object Groups**. This allows to make changes on predefined address group, which is attached to predefined security policy rule.

When a new Sentinel incident is created, this playbook gets triggered and performs below actions:

1. An adaptive card is sent to the SOC channel providing Incident information, IP address, list of existing security policy rules in which IP is a member of and provides an option to Block/Unblock IP Address to predefined address group or Ignore.

2. The SOC can take action on risky IP based on the information provided in the adaptive card.


![PaloAlto-PAN-OS-BlockIP](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PaloAlto-PAN-OS/Playbooks/PaloAltoPlaybooks%5CPaloAlto-PAN-OS-BlockIP-EntityTrigger/images/designerscreenshot_lighttheme.PNG)<br>

**This is the adaptive card SOC will receive when playbook is triggered for each risky IP for taking actions like block/unblock/ignore:**<br><br>
![Adaptive Card example](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PaloAlto-PAN-OS/Playbooks/PaloAltoPlaybooks%5CPaloAlto-PAN-OS-BlockIP-EntityTrigger/images/AdaptiveCardtoBlockorUnblock.PNG)<br>

**This is the consolidate adaptive card about the summary of actions taken on IP and the incident configuration:**<br><br>
![Consolidated Adaptive Card example](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PaloAlto-PAN-OS/Playbooks/PaloAltoPlaybooks%5CPaloAlto-PAN-OS-BlockIP-EntityTrigger/images/SummarizedAdaptiveCard.PNG)<br>

### Prerequisites 
1. PaloAlto connector needs to be deployed prior to the deployment of this playbook under the same subscription. Relevant instructions can be found in the connector doc page.
2. Generate an API key. [Refer this link on how to generate the API Key](https://docs.paloaltonetworks.com/pan-os/10-1/pan-os-panorama-api/get-started-with-the-pan-os-xml-api/get-your-api-key)
3. Address group should be created for PAN-OS and this should be used while creating playbooks. 


### Deployment instructions 
1. Deploy the playbook by clicking on "Deploy to Azure" button. This will take you to deploying an ARM Template wizard.



[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FPaloAlto-PAN-OS%2FPlaybooks%2FPaloAltoPlaybooks%2FPaloAlto-PAN-OS-BlockIP-EntityTrigger%2Fazuredeploy.json)   [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FPaloAlto-PAN-OS%2FPlaybooks%2FPaloAltoPlaybooks%2FPaloAlto-PAN-OS-BlockIP-EntityTrigger%2Fazuredeploy.json)


2. Fill in the required parameters:
    * Playbook Name: Enter the playbook name here (e.g. PaloAlto-PAN-OS-BlockIP)
    * Teams GroupId: Enter the Teams channel id to send the adaptive card
    * Teams ChannelId: Enter the Teams Group id to send the adaptive card
     [Refer the below link to get the channel id and group id](https://docs.microsoft.com/powershell/module/teams/get-teamchannel?view=teams-ps)
    * Predefined address group name: Enter the predefined address group name here to Block IP / Unblock IP
	* CustomConnectorName : Name of the custom connector, if you want to change the default name, make sure to use the same in all PaloAlto automation playbooks as well
    

### Post-Deployment instructions 
#### a. Authorize connections
Once deployment is complete, you will need to authorize each connection.
1.	Click the Microsoft Sentinel connection resource
2.	Click edit API connection
3.	Click Authorize
4.	Sign in
5.	Click Save
6.	Repeat steps for other connection such as Teams connection and PAN-OS API connection (For authorizing the PAN-OS API connection, API Key needs to be provided)

#### b. Configurations in Sentinel
1. In Microsoft sentinel analytical rules should be configured to trigger an incident with risky IP
2. Configure the automation rules to trigger this playbook

#### c. Assign Playbook Microsoft Sentinel Responder Role
1. Select the Playbook (Logic App) resource
2. Click on Identity Blade
3. Choose System assigned tab
4. Click on Azure role assignments
5. Click on Add role assignments
6. Select Scope - Resource group
7. Select Subscription - where Playbook has been created
8. Select Resource group - where Playbook has been created
9. Select Role - Microsoft Sentinel Responder
10. Click Save (It takes 3-5 minutes to show the added role.)


## Playbook steps explained

### When Microsoft Sentinel incident creation rule is triggered

Microsoft Sentinel incident is created. The playbook receives the incident as the input.

### Get Entities as IPs

Get the list of risky/malicious IPs as entities from the Incident.

### Initialize variables 


*[Content truncated...]*

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Playbooks](playbooks.md) · [Back to PaloAlto-PAN-OS](../solutions/paloalto-pan-os.md)

