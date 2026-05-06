# CiscoSDWANLogicAPP

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook provides an end-to-end example of sending an email, posting a message to the Microsoft Teams channel, and creating 3rd party ticket for the suspicious activity found in the data.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Cisco SD-WAN](../solutions/cisco-sd-wan.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20SD-WAN/Playbooks/CiscoSDWANLogicAPP/azuredeploy.json) |

## Logic App Connectors

This playbook uses **9** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azurecommunicationservicessms` | Managed | 1 | 3 |
| `azuresentinel` | Managed | 1 | 0 |
| `jira` | Managed | 1 | 0 |
| `jira_2` | Managed | 0 | 3 |
| `outlook` | Managed | 1 | 0 |
| `outlook_2` | Managed | 0 | 3 |
| `service-now` | Managed | 1 | 0 |
| `service-now_1` | Managed | 0 | 3 |
| `teams` | Managed | 1 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azurecommunicationservicessms`** (managedApi):
- *Send_SMS_2*: method=`post`, path=`/v2/sms`
- *Send_SMS_3*: method=`post`, path=`/v2/sms`
- *Send_SMS*: method=`post`, path=`/v2/sms`

**`jira_2`** (managedApi):
- *Create_a_new_issue_(V3)_2*: method=`post`, path=`/v3/issue`
- *Create_a_new_issue_(V3)_3*: method=`post`, path=`/v3/issue`
- *Create_a_new_issue_(V3)*: method=`post`, path=`/v3/issue`

**`outlook_2`** (managedApi):
- *Send_an_email_(V2)_2*: method=`post`, path=`/v2/Mail`
- *Send_an_email_(V2)_3*: method=`post`, path=`/v2/Mail`
- *Send_an_email_(V2)*: method=`post`, path=`/v2/Mail`

**`service-now_1`** (managedApi):
- *Create_Record_2*: method=`post`, path=`/api/now/v2/table/@{encodeURIComponent('ticket')}`
- *Create_Record_3*: method=`post`, path=`/api/now/v2/table/@{encodeURIComponent('ticket')}`
- *Create_Record*: method=`post`, path=`/api/now/v2/table/@{encodeURIComponent('ticket')}`

**`teams`** (managedApi):
- *Post_message_in_a_chat_or_channel_2*: method=`post`, path=`/beta/teams/conversation/message/poster/Flow bot/location/@{encodeURIComponent('Channel')}`
- *Post_message_in_a_chat_or_channel_3*: method=`post`, path=`/beta/teams/conversation/message/poster/Flow bot/location/@{encodeURIComponent('Channel')}`
- *Post_message_in_a_chat_or_channel*: method=`post`, path=`/beta/teams/conversation/message/poster/@{encodeURIComponent('Flow bot')}/location/@{encodeURIComponent('Channel')}`

</details>

## Additional Documentation

> 📄 *Source: [CiscoSDWANLogicAPP/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20SD-WAN/Playbooks/CiscoSDWANLogicAPP/readme.md)*

# Cisco SDWAN Logic App

* [Summary](#Summary)
* [Deployment instructions](#Deployment-instructions)
* [Post-Deployment instructions](#Post-Deployment-instructions)


## Summary<a name="Summary"></a>

This playbook provides an end-to-end example of sending an email, posting a message to the Microsoft Teams channel, and creating 3rd party ticket for the suspicious activity found in the data.

### Deployment instructions<a name="Deployment-instructions"></a>

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill the below parameters:
    * Subscription: Azure Subscription ID which is present in the subscription tab in Microsoft Sentinel.
    * Resource Group: The Azure Resource Group name in which you want to deploy the Logic App.
    * Playbook Name: Enter the playbook name here
    * 3rd_Party_Ticket_System: Select 3rd Party Ticketing System.
    * Jira_Instance: Enter the URL of Jira Instance if you have selected Jira as 3rd Party Ticketing system.
    * Jira_Project_Key: Enter Jira Project Key if you have selected Jira as 3rd Party Ticketing system.
    * Email: Enter comma-separated email addresses on which alert details will be sent.
    * From_Mobile_No: Enter the source mobile number with the Country code for sending SMS.
    * To_Mobile_No: Enter the destination mobile number with the Country code for sending SMS.
    * Teams_Channel_ID: Enter the ID of the Microsoft Teams channel on which alert details will be sent.
    * Teams_Group_ID: Enter the ID of the Microsoft Teams channel group on which alert details will be sent.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https%3A%2F%2Fportal.azure.com%2F%23create%2FMicrosoft.Template%2Furi%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCisco%20SD-WAN%2FPlaybooks%2FCiscoSDWANLogicApp%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https%3A%2F%2Fportal.azure.com%2F%23create%2FMicrosoft.Template%2Furi%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCisco%20SD-WAN%2FPlaybooks%2FCiscoSDWANLogicApp%2Fazuredeploy.json)

### Post-Deployment instructions<a name="Post-Deployment-instructions"></a>

##### a. Authorize connections

Once deployment is complete, authorize each connection like MicrosoftSentinel.

1. Click the connection resource
2. Click edit API connection
3. Click Authorize
4. Sign in
5. Click Save

##### b. Configurations in Microsoft Sentinel

1. In Microsoft Sentinel, analytics rules should be configured to trigger an incident. 
  > 1. Add your deployed logic app in analytic rule to be trigger on every generated incident, to do this follow below steps
  >> * Select the analytic rule you have deployed.
  >> * Click on **Edit**
  >> * Go to **Automated response** tab
  >> * Click on **Add new**
  >> * Provide name for your rule, In Actions dropdown select **Run playbook**
  >> * In second dropdown select your deployed playbook
  >> * Click on **Apply**
  >> * Save the Analytic rule.

#### Sample analytics rule query
* Analytic Rule : Monitor Critical IPs
```
CiscoSyslogUTD
| union (CiscoSDWANNetflow)
| where isnotempty(SourceIP) or isnotempty(NetflowFwSrcAddrIpv4)
| extend SourceIP = coalesce(SourceIP, NetflowFwSrcAddrIpv4)
| where ipv4_is_in_any_range(SourceIP, "172.16.101.9/24", "192.168.1.1/24", "208.67.220.220")
| summarize count() by SourceIP
```

* Analytic Rule : IPS Event Threshold
```
CiscoSyslogUTD 
| where Classification == "A Network Trojan was Detected" 
| summarize count() by Classification 
| where count_ > 10
```

* Analytic Rule : Malware Events
```
CiscoSyslogUTD
| where isnotempty(Malware) and Malware != "None"
| distinct Malware, SourceIP
| join kind=inner (CiscoSDWANNetflow
| where isnotempty(NetflowUsername)
| summarize arg_max(TimeStamp, NetflowUsername) by NetflowFwSrcAddrIpv4
| distinct 
    ["Username"] = NetflowUsername,
    ["SourceIP"] = NetflowFwSrcAddrIpv4) on SourceIP
| project Malware, SourceIP, Username
```

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Cisco SD-WAN](../solutions/cisco-sd-wan.md)

