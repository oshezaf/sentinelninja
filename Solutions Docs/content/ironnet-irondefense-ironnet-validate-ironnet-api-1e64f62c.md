# IronNet_Validate_IronNet_API

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

author: IronNet

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [IronNet IronDefense](../solutions/ironnet-irondefense.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IronNet%20IronDefense/Playbooks/IronNet_Validate_IronNet_API/azuredeploy.json) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `http` | Built-in | 0 | 9 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`http`** (builtin):
- *CommentOnAlert_API_call*: method=`POST`, uri=`@{parameters('IronNetUrl')}/IronApi/CommentOnAlert`
- *GetAlertIronDomeInformation_API_call*: method=`POST`, uri=`@{parameters('IronNetUrl')}/IronApi/GetAlertIronDomeInformation`
- *GetAlerts_API_call*: method=`POST`, uri=`@{parameters('IronNetUrl')}/IronApi/GetAlerts`
- *GetEvents_API_call*: method=`POST`, uri=`@{parameters('IronNetUrl')}/IronApi/GetEvents`
- *RateAlert_API_call*: method=`POST`, uri=`@{parameters('IronNetUrl')}/IronApi/RateAlert`
- *ReportObservedBadActivity_API_call*: method=`POST`, uri=`@{parameters('IronNetUrl')}/IronApi/ReportObservedBadActivity`
- *SetAlertStatus_API_call*: method=`POST`, uri=`@{parameters('IronNetUrl')}/IronApi/SetAlertStatus`
- *GetEvent_API_call*: method=`POST`, uri=`@{parameters('IronNetUrl')}/IronApi/GetEvent`
- *IronNet_Login*: method=`POST`, uri=`@{parameters('IronNetUrl')}/IronApi/Login`

</details>

## Additional Documentation

> 📄 *Source: [IronNet_Validate_IronNet_API/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IronNet%20IronDefense/Playbooks/IronNet_Validate_IronNet_API/readme.md)*

# IronNet_ValidateIronAPI
author: IronNet

This playbook is used for validating IronAPI Endpoints.

## Deployment Instructions
1. Click the "Deploy to Azure" button to open the ARM template wizard to deploy
this playbook.<br>
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FIronNet%20IronDefense%2FPlaybooks%2FIronNet_UpdateSentinelIncidents%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FIronNet%20IronDefense%2FPlaybooks%2FIronNet_UpdateSentinelIncidents%2Fazuredeploy.json)
2. Enter template parameters. Use the IronVue user credentials for IronAPI.

## Playbook Execution
1. The Playbook execution begins with an API call to IronDefense 
   Alert.
2. This workflow validates for 8 IronAPI endpoints inorder to verify that the 
   API is stable.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to IronNet IronDefense](../solutions/ironnet-irondefense.md)

