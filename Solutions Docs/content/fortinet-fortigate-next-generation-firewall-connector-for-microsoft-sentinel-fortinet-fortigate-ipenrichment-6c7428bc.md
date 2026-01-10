# Fortinet-FortiGate-IPEnrichment

This playbook enriches the incident with address object and address group.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](../solutions/fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Fortinet%20FortiGate%20Next-Generation%20Firewall%20connector%20for%20Microsoft%20Sentinel/Playbooks/Fortinet_IncidentEnrichment/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [Fortinet_IncidentEnrichment/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Fortinet%20FortiGate%20Next-Generation%20Firewall%20connector%20for%20Microsoft%20Sentinel/Playbooks/Fortinet_IncidentEnrichment/readme.md)*

# Fortinet-Incident enrichment

## Summary
This playbook enriches the incident with address object and address group.

![Fortinet](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Fortinet%20FortiGate%20Next-Generation%20Firewall%20connector%20for%20Microsoft%20Sentinel/Playbooks/Fortinet_IncidentEnrichment/Inicdent_Enrichment.PNG)<br>
 ![Fortinet](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Fortinet%20FortiGate%20Next-Generation%20Firewall%20connector%20for%20Microsoft%20Sentinel/Playbooks/Fortinet_IncidentEnrichment/Enrichment.PNG)<br>

When a new Microsoft Sentinel is created, this playbook gets triggered and performs below actions:
- It fetches details of the address object.
- It retrieve the details of address groups which address object is belongs to.
- Add the Summary of address object and its groups details to an incident.



### Prerequisites 
- Sentinel IP block group should create in the VM
- Function App needs to be deployed prior to the deployment of this playbook under the same subscription. Relevant instructions can be found in the Function doc page


### Deployment instructions 
- Deploy the playbook by clicking on "Deploy to Azure" button. This will take you to deploying an ARM Template wizard.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FPlaybooks%2FFortinet-FortiGate%2FPlaybooks%2FFortinet_IncidentEnrichment%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FPlaybooks%2FFortinet-FortiGate%2FPlaybooks%2FFortinet_IncidentEnrichment%2Fazuredeploy.json)


- Fill the required parameters:
    * Playbook Name: Enter the playbook name here (ex:Fortinet_EnrichmentwithIP)
    * Function app Name: Enter Function app name which is created as Prerequisite
    * Address Group: Pre-defined address group name which is created in VM
    * Managed Identities Name: Enter the managed identity name (ex: managed identities name)[Create user assigned manage identity](https://docs.microsoft.com/azure/active-directory/managed-identities-azure-resources/how-to-manage-ua-identity-portal).

### Post-Deployment instructions 
#### a. Authorize connections
Once deployment is complete, you will need to authorize each connection.
1.  Click the Microsoft Sentinel connection resource
2.  Click edit API connection
3.  Click Authorize
4.  Sign in
5.  Click Save

#### b. Configurations in Sentinel
- In Microsoft sentinel analytical rules should be configured to trigger an incident with IP Entity.
- Configure the automation rules to trigger this playbook

## Playbook steps explained

### When Microsoft Sentinel incident creation rule is triggered

- Capture IP and check for existence and if IP does not exist, create an address object for IP's

### For each-malicious IP received from the incident
Iterates on the IPs found in this incident (probably one) and performs the following:
- Fetches the address object details
- Retrieve the address groups details
- construct HTML Table with details of address object and address groups
- Add comment for an incident with summary of the address object and address groups.

## Enrich Incident with address object and address groups details look as follows

 ![Fortinet](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Fortinet%20FortiGate%20Next-Generation%20Firewall%20connector%20for%20Microsoft%20Sentinel/Playbooks/Fortinet_IncidentEnrichment/Inicdent_Enrichment.PNG)<br>
    
## Known Issues and Limitations
- When pre-defined group reaches the max limit user must create the new pre-defined group and change in the play book

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](../solutions/fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

