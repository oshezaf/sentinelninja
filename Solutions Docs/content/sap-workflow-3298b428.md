# workflow

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

< 🏡home

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SAP](../solutions/sap.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP/Playbooks/Basic-SAPLockUser-STD/workflow.json) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 0 | 4 |
| `teams` | Managed | 0 | 10 |
| `http` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(true_positive)*: method=`post`, path=`/Incidents/Comment`
- *Close_Sentinel_incident*: method=`put`, path=`/Incidents`
- *Add_false-positive_comment_to_incident*: method=`post`, path=`/Incidents/Comment`
- *Flag_false_positive*: method=`put`, path=`/Incidents`

**`teams`** (managedApi):
- *Reply_with_a_message_in_a_channel*: method=`post`, path=`/v1.0/teams/conversation/replyWithMessage/poster/Flow bot/location/@{encodeURIComponent('Channel')}`
- *Reply_with_a_message_in_a_channel_2*: method=`post`, path=`/v1.0/teams/conversation/replyWithMessage/poster/Flow bot/location/@{encodeURIComponent('Channel')}`
- *Notify_impacted_colleague_working_with_SAP*: method=`post`, path=`/beta/teams/conversation/message/poster/Flow bot/location/@{encodeURIComponent('Chat with Flow bot')}`
- *Reply_with_SAP_lock_message_in_channel*: method=`post`, path=`/v1.0/teams/conversation/replyWithMessage/poster/Flow bot/location/@{encodeURIComponent('Channel')}`
- *Reply_with_true_positive_success*: method=`post`, path=`/v1.0/teams/conversation/replyWithMessage/poster/Flow bot/location/@{encodeURIComponent('Channel')}`
- *Reply_to_Admins_with_lock_error_in_Channel*: method=`post`, path=`/v1.0/teams/conversation/replyWithMessage/poster/Flow bot/location/@{encodeURIComponent('Channel')}`
- *Reply_with_false_positive_success*: method=`post`, path=`/v1.0/teams/conversation/replyWithMessage/poster/Flow bot/location/@{encodeURIComponent('Channel')}`
- *Post_timeout_message_in_Channel*: method=`post`, path=`/beta/teams/conversation/message/poster/Flow bot/location/@{encodeURIComponent('Channel')}`
- *Post_parsing_error_message_to_Logic_App_admin*: method=`post`, path=`/beta/teams/conversation/message/poster/Flow bot/location/@{encodeURIComponent('Chat with Flow bot')}`
- *Post_processing_error_message_to_Logic_App_admin*: method=`post`, path=`/beta/teams/conversation/message/poster/Flow bot/location/@{encodeURIComponent('Chat with Flow bot')}`

**`http`** (builtin):
- *Block_User_via_SOAP_exposed_BAPI*: method=`POST`, uri=`@{parameters('SOAPApiBasePath')}/sap-com:document:sap:rfc:functions:ZWS_BAPI_USER_LOCK:BAPI_USER_LOCKRequest?sap-client=@{variables('sap-client-id')}`

</details>

## Additional Documentation

> 📄 *Source: [Basic-SAPLockUser-STD/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP/Playbooks/Basic-SAPLockUser-STD/readme.md)*

# Lock SAP User from Teams - Basic

< 🏡[home](../README.md)

Basic Sentinel playbook with minimum integration effort for simple SAP user blocking on ERP via SOAP service anticipating Azure private VNet integration.

👨🏽‍🔧[**installation guide**](../INSTALLATION.md).

| Step | 🪂 |
| --- | --- |
| Logic Apps Infrastructure | [![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSAP%2FPlaybooks%2FBasic-SAPLockUser-STD%2Fazuredeploy.json) |
| Logic Apps Connections | [![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSAP%2FPlaybooks%2FBasic-SAPLockUser-STD%2Fazureconnectordeploy.json) |
| Logic Apps Standard Connections configuration | 🔗[link](connections.json) |
| Logic Apps Standard workflow | 🔗[link](workflow.json) |
| Logic Apps Standard workflow parameters | 🔗[link](workflowparameters.json) |

## Required Azure Roles

| Role Name | Resource Type Scope | Purpose |
| --- | --- | --- |
| [Microsoft Sentinel Responder](https://learn.microsoft.com/azure/role-based-access-control/built-in-roles#microsoft-sentinel-responder) | At least resource group where Sentinel lives | Required for Incident state update |

Learn more about Microsoft Sentinel built-in roles [here](https://learn.microsoft.com/azure/sentinel/roles) and Azure built-in roles [here](https://learn.microsoft.com/azure/role-based-access-control/built-in-roles).

[🔝](#)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to SAP](../solutions/sap.md)

