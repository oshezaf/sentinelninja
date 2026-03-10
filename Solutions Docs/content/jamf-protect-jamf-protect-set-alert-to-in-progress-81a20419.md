# Jamf Protect - Set Alert to In Progress

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This Jamf Protect Playbook can be used manually or in a Automation Rule to change the state of the Alert in Jamf Protect itself, in an automated way you can mirror the state from a Microsoft Sentinel incident back to Jamf Protect.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Jamf Protect](../solutions/jamf-protect.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Jamf%20Protect/Playbooks/JamfProtect_Alert_Status_InProgress/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [JamfProtect_Alert_Status_InProgress/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Jamf%20Protect/Playbooks/JamfProtect_Alert_Status_InProgress/readme.md)*

# JamfProtect_Alert_Status_InProgress
 ## Summary
This Jamf Protect Playbook can be used manually or in a Automation Rule to change the state of the Alert in Jamf Protect itself, in an automated way you can mirror the state from a Microsoft Sentinel incident back to Jamf Protect.

![JamfProtect_Alert_Status_InProgress](https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Jamf%20Protect%/Playbooks/JamfProtect_Alert_Status_InProgress/images/designerOverviewCollapsedLight.png)

### Prerequisites 

1. Generate API Client in Jamf Protect and take note of the CLientID and Password. [learn how](https://learn.jamf.com/bundle/jamf-protect-documentation/page/Jamf_Protect_API.html#ariaid-title3).
2. Use the ClientID and Password during the deployment of this Playbook.


### Deployment instructions 
1. Deploy the playbook by clicking on "Deploy to Azure" button. This will take you to deploying an ARM Template wizard.
2. Fill in the required parameters:

    * jamfProtectURL: Enter the Jamf Protect instance URL.
    * client_ID: Enter the ClientID of Jamf Protect API Client.
    * Password: Enter the ClientSecret of Jamf Protect API Client.
    * Playbook_Name: Enter the playbook name here (Ex:JamfProtect_Alert_Status_InProgress).
    
    
### Post-Deployment instructions 
#### a. Create Automation Rule
Once deployment is complete, optionally we need to create an Incident-based Automation Rule to reflect changes from the Incident in Microsoft Sentinel back to Jamf Protect [learn how](https://learn.microsoft.com/en-us/azure/sentinel/automate-incident-handling-with-automation-rules)
- 1. In Microsoft Sentinel Analytic Rules for Jamf Protect - Alerts should be configured to create an incident.
- 2. Configure the Automation Rules to trigger this playbook once a incident is status is changed to Active.



[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Jamf%20Protect%/Playbooks/JamfProtect_Alert_Status_InProgress/azuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Jamf%20Protect%/Playbooks/JamfProtect_Alert_Status_InProgress/azuredeploy.json)


## Playbook steps explained

### Microsoft Sentinel Incident
When an Incident is being created and we have an Automation Rule in place to rule this trigger we can use the Incident details.

### set jamfProtectAlertURL as variable
Initialize a string variable which uses the JamfProtectURL Parameter.

### Generate Access Token
This HTTP action will generate an Access Token using the defined parameters.

### Parse JSON Response from Access Token
This action parses the response from the previous HTTP action in a format so we can use it further in the Playbook.

### Set accessToken as variable
Initialize a string variable which uses the Output from the previous JSON parse action.

### For each
Runs a set of actions for each Incident

    ### Composing Jam Protect Alert URL
    This action will get the unique vendor URL of the Entities section of the Incident.

    ### Removing pre-fix of URL and keeping Alert UDID
    This action will get the unique vendor URL and remove the prefixes so we only hold the UUID of the event.

    ### HTTP POST - Change Alert Status using Jam Protect's GraphQL API Endpoint
    This action will send an HTTP POST request to Jamf Protec's GraphQL endpoints to change the Alert status to InProgress

    ### Add comment to incident (V3)
    This action creates an Comment in the related Incident that the Alert has been set to InProgress.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Jamf Protect](../solutions/jamf-protect.md)

