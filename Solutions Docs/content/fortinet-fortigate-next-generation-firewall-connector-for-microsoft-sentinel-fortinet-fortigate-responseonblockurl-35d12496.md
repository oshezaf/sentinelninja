# Fortinet-FortiGate-ResponseOnBlockURL

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook allows the SOC users to automatically response to Microsoft Sentinel incidents which includes URL's, by adding the URLs to the Microsoft Sentinel URL blocked group.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](../solutions/fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Fortinet%20FortiGate%20Next-Generation%20Firewall%20connector%20for%20Microsoft%20Sentinel/Playbooks/Fortinet_ResponseOnURL/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [Fortinet_ResponseOnURL/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Fortinet%20FortiGate%20Next-Generation%20Firewall%20connector%20for%20Microsoft%20Sentinel/Playbooks/Fortinet_ResponseOnURL/readme.md)*

# Fortinet - ResponseOnURL

 ## Summary

This playbook allows the SOC users to automatically response to Microsoft Sentinel incidents which includes URL's, by adding the URLs to the Sentinel URL blocked group.
 [Learn more about Threat Intelligence in Fortinet policy](https://www.fortinet.com/fortiguard/threat-intelligence/threat-research)

![Fortinet](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Fortinet%20FortiGate%20Next-Generation%20Firewall%20connector%20for%20Microsoft%20Sentinel/Playbooks/Fortinet_ResponseOnURL/DesginerResposeOnURL.png)<br>


**This is the adaptive card SOC will receive when playbook is triggered for each risky IP for taking actions like block/unblock/ignore ::**<br><br>
![Fortinet](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Fortinet%20FortiGate%20Next-Generation%20Firewall%20connector%20for%20Microsoft%20Sentinel/Playbooks/Fortinet_ResponseOnURL/ResponseOnURLAdaptiveCard.PNG)<br>

**This is the consolidate adaptive card about the summary of actions taken on IP and the incident configuration ::**<br><br>
![Consolidated Adaptive Card example](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Fortinet%20FortiGate%20Next-Generation%20Firewall%20connector%20for%20Microsoft%20Sentinel/Playbooks/Fortinet_ResponseOnURL/FortinetSummaryAdaptivecardURL.PNG)<br>


### Prerequisites 
- Sentinel URL block group should create in the VM
- FortinetConnector needs to be deployed prior to the deployment of this playbook under the same subscription. Relevant instructions can be found in the connector doc page.
- Fortinet-GetRestAPIFunctionAPP needs to be deployed prior to the deployment of this playbook under the same subscription. Relevant instructions can be found in the Function doc page.
- FortinetConnector need to be authenticated with an API key. Relevant instructions can be found in the connector doc page.
- This playbook will add new address object to existing VM. 

### Deployment instructions 
1. Deploy the playbook by clicking on "Deploy to Azure" button. This will take you to deploying an ARM Template wizard.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FPlaybooks%2FFortinet-FortiGate%2FPlaybooks%2FFortinet_ResponseOnURL%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FPlaybooks%2FFortinet-FortiGate%2FPlaybooks%2FFortinet_ResponseOnURL%2Fazuredeploy.json)


2. Fill the required parameteres:
    * Playbook Name: Enter the playbook name here (ex:Fortinet_ResponseOnURL)
    * Team Channel ID: Enter the teams channel id
    * Teams group ID: Enter the teams channel id
    * Pre-defined Group Name: Group name which is created in firewall
    * Function app Name: Enter Function app name which is created as Prerequisite
    * Managed Identities Name: Enter the managed identity name (ex: managed identities name)

### Post-Deployment instructions

* Go to logic app designer.
* Look for the function call actions. You can find them by the titles:
  - Fetch the details of the address object.
  - Get address group details.
* For each one of the above function call actions and perform the below mentioned steps:
  - Go to "Managed identity" dropdown and select user identity.
  - Save playbook.
* Go to Microsoft Sentinel, hook playbook to Microsoft Sentinel rules.

#### a. Authorize connections
Once deployment is complete, you will need to authorize each connection.
1.	Click the Microsoft Sentinel connection resource.
2.	Click edit API connection.
3.	Click Authorize.
4.	Sign in.
5.	Click Save.
6.	Repeat steps for other connection such as Team's connection

##Playbook steps explained

#### b. Configurations in Sentinel
1. In Microsoft sentinel analytical rules should be configured to trigger an incident with URL Entity.
2. Configure the automation rules to trigger this playbook.

### When Microsoft Sentinel incident creation rule is triggered

- Microsoft Sentinel incident is created. The playbook receives the incident as the input.

### Get Entities as URLs

- Get the list of risky/malicious URLs as entities from the Incident.

### Initialize variables 

-  Action Name (type-String) - To determine the action name to be displayed in the adaptive card such as Block or Unblock URL from predefined address group.

-  Adaptive card body(type-Array) - To determine the dynamic adaptive card body 
   
-  Address group Members(type-Array) - To determine the body of predefined address group
   
-  URL Address Action(type-Array) - Consolidated actions summary on each URL to display in adaptive card

-  Predefined group name(type-String)- You can change the pre-defined address group name here

## Post an adaptive card to the SOC channel

*[Content truncated...]*

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](../solutions/fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md)

