# Fetch Threat Intel from fortiwebcloud

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook provides/updates the threat intel and essential details in comments section of triggered incident so that SOC analysts can directly take corrective measure to stop the attack

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Fortinet FortiWeb Cloud WAF-as-a-Service connector for Microsoft Sentinel](../solutions/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Fortinet%20FortiWeb%20Cloud%20WAF-as-a-Service%20connector%20for%20Microsoft%20Sentinel/Playbooks/FortiWebPlaybooks/FortiWeb-enrichment/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [FortiWebPlaybooks/FortiWeb-enrichment/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Fortinet%20FortiWeb%20Cloud%20WAF-as-a-Service%20connector%20for%20Microsoft%20Sentinel/Playbooks/FortiWebPlaybooks/FortiWeb-enrichment/readme.md)*

# FortiWeb-enrichment Info Playbook
 ## Summary
 When a new Microosft Sentinel incident is created, this playbook gets triggered and performs below actions
 1. Fetches the list of Ip's from incident entites .
 2. Make the APi call to get the latest threat information/details from cloud console and update the same incidents comments with result.
 ![image](https://user-images.githubusercontent.com/97503740/184323073-d3d7e6eb-f40e-42e1-8d2b-ef7f9550e646.png)
![image](https://user-images.githubusercontent.com/97503740/184323351-310a1d97-a541-4204-aa65-06069e5decbe.png)

### Prerequisites 
1. FortiWeb Cloud Custom Connector needs to be deployed prior to the deployment of this playbook under the same subscription.
2. API key. To get API Key, login into your FortiWeb cloud instance dashboard and navigate to Global --> system settings --> API Key.

### Deployment instructions 
1. Deploy the playbook by clicking on "Deploy to Azure" button. This will take you to deplyoing an ARM Template wizard.
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FFortiWebCloud%2FPlaybooks%2FFortiWebPlaybooks%2FFortiWeb-encrichment%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FFortiWebCloud%2FPlaybooks%2F%2FFortiWebPlaybooks%2FFortiWeb-encrichment%2Fazuredeploy.json)

2. Fill in the required paramteres:
    * Playbook Name: Enter the playbook name here (Ex: FortiWeb-BlockIP-URL)
    * Custom Connector Name: Enter the FortiWeb custom connector name here (Ex: FortiWebCloud)

### Post-Deployment instructions 
#### a. Authorize connections
Once deployment is complete, you will need to authorize each connection.
1.	Click the Microosft Sentinel connection resource
2.	Click edit API connection
3.	Click Authorize
4.	Sign in
5.	Click Save
6.	Repeat steps for Fortiweb Api  Connection (For authorizing the Fortiweb API connection, API Key needs to be provided)
#### b. Configurations in Sentinel
1. In Microosft Sentinel analytical rules should be configured to trigger an incident with risky URL or IP Address. 
2. Configure the automation rules to trigger this playbook , mapping of IP and URL entities is necessary

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Fortinet FortiWeb Cloud WAF-as-a-Service connector for Microsoft Sentinel](../solutions/fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel.md)

