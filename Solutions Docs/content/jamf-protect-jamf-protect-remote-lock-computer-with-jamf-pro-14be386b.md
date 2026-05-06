# Jamf Protect - Remote lock computer with Jamf Pro

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This Playbook can be used manually or in a Automation Rule to send an remote MDM command with Jamf Pro to lock the computer with an randomised 6 digit passcode.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Jamf Protect](../solutions/jamf-protect.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Jamf%20Protect/Playbooks/JamfProtect_LockComputer_with_JamfPro/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`

**`http`** (builtin):
- *Get_JSSID_for_given_computer_in_Jamf_Pro*: method=`GET`, uri=`@{parameters('jamfProURL')}/JSSResource/computers/name/@{items('For_each_host_send_DeviceLock_command')?['properties']?['friendlyName']}`
- *Get_managementID_for_given_computer_in_Jamf_Pro*: method=`GET`, uri=`@{parameters('jamfProURL')}/api/v1/computers-inventory/@{body('Parse_JSON_response_for_given_computer')?['computer']?['general']?['id']}?section=GENERAL`
- *Send_DeviceLock_command_to_given_computers_JSSID*: method=`POST`, uri=`@{parameters('jamfProURL')}/JSSResource/computercommands/command/DeviceLock/passcode/@{outputs('Generate_a_randomised_6_digit_value')}/id/@{body('Parse_JSON_for_given_computer_based_on_managementID')?['general']?['site']?['id']}`
- *Generate_Access_Token_using_API_Client*: method=`POST`, uri=`@{parameters('jamfProURL')}/api/oauth/token`

</details>

## Additional Documentation

> 📄 *Source: [JamfProtect_LockComputer_with_JamfPro/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Jamf%20Protect/Playbooks/JamfProtect_LockComputer_with_JamfPro/readme.md)*

# JamfProtect_LockComputer_with_JamfPro
 ## Summary
This Playbook can be used manually or in a Automation Rule to send an remote MDM command with Jamf Pro to lock the computer with an randomised 6 digit passcode.

![JamfProtect_LockComputer_with_JamfPro](https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Jamf%20Protect%/Playbooks/JamfProtect_LockComputer_with_JamfPro/images/designerOverviewCollapsedLight.png)

### Prerequisites 

1. Generate API Client in Jamf Pro and take note of the CLientID and Secret. [learn how](https://learn.jamf.com/search?bundle=jamf-pro-documentation-current&q=api%20client).
2. Use the ClientID and Password during the deployment of this Playbook.


### Deployment instructions 
1. Deploy the playbook by clicking on "Deploy to Azure" button. This will take you to deploying an ARM Template wizard.
2. Fill in the required parameters:

    * jamfProURL: Enter the Jamf Pro instance URL.
    * jamfProClientID: Enter the ClientID of Jamf Pro API Client.
    * jamfProSecret: Enter the ClientSecret of Jamf Pro API Client.
    * Playbook_Name: Enter the playbook name here (Ex:JamfProtect_LockComputer_with_JamfPro).


[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Jamf%20Protect%/Playbooks/JamfProtect_LockComputer_with_JamfPro/azuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Jamf%20Protect%/Playbooks/JamfProtect_LockComputer_with_JamfPro/azuredeploy.json)


## Playbook steps explained

### Microsoft Sentinel Incident
When an Incident is being created and we have an Automation Rule in place to rule this trigger we can use the Incident details.

### Generate Access Token using API Client
This HTTP Action will generate an Access Token using the defined parameters.

### Parse JSON Response from Access Token
This action parses the response from the previous HTTP action in a format so we can use it further in the Playbook.

### Set accessToken as variable
This action parses the response from the previous HTTP action in a format so we can use it further in the Playbook.

### Parse JSON Entities from the Incident
This actions parses the Host Entity array from the incident.

### Filter array for the entity kind Host
This action filters the array Hosts from the incident so we can use it in the Playbook.

### For each host send DeviceLock Command
Runs a set of actions for each host

    ### Get JSSID for given computer in Jamf Pro
    This HTTP action will get the JSSID for the given Host.

    ### Parse JSON response for given computer
    This action parses the response from the previous HTTP action in a format so we can use it further in the Playbook.

    ### Get managementID for given computer in Jam Pro
    This HTTP action will get the managementID for a given host based up on it's JSSID.

    ### Parse JSON for given computer based on managementiD
    This action parses the response from the previous HTTP action in a format so we can use it further in the Playbook.

    ### Generate a randomised 6 digit value
    This action will generated a randomised 6 digit integer value

    ### Send DeviceLock command to given computers JSSID
    This HTTP action will send a DeviceLock command to the stored JSSID and using the randomised 6 digit integer value as passcode.

    ### Add comment to incident (V3)
    This action will generate a comment to the Incident and stores the host including the passcode we have been sending a command to.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Jamf Protect](../solutions/jamf-protect.md)

