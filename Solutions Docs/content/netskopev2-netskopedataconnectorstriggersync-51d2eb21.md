# NetskopeDataConnectorsTriggerSync

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Playbook to sync timer trigger of all Netskope data connectors.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Netskopev2](../solutions/netskopev2.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskopev2/Playbooks/NetskopeDataConnectorsTriggerSync/azuredeploy.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `http` | Built-in | 0 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`http`** (builtin):
- *Sync_timer_trigger_request*: method=`POST`, uri=`https://@{variables('Manage')}.azure.com/subscriptions/@{variables('Subscription Id')}/resourceGroups/@{variables('Resource Group Name')}/providers/Microsoft.Web/sites/@{items('For_each_app')?['name']}/syncfunctiontriggers?api-version=2022-03-01`
- *Get_Auth_token*: method=`POST`, uri=`https://login.@{variables('MicrosoftOnline')}.com/@{variables('Tenant Id')}/oauth2/v2.0/token`
- *Get_function_app_list*: method=`GET`, uri=`https://@{variables('Manage')}.azure.com/subscriptions/@{variables('Subscription Id')}/resourceGroups/@{variables('Resource Group Name')}/providers/Microsoft.Web/sites?api-version=2022-03-01`

</details>

## Additional Documentation

> 📄 *Source: [NetskopeDataConnectorsTriggerSync/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskopev2/Playbooks/NetskopeDataConnectorsTriggerSync/readme.md)*

* [Summary](#Summary)
* [Prerequisites](#Prerequisites)
* [Deployment instructions](#Deployment-instructions)
* [Post-Deployment instructions](#Post-Deployment-instructions)


## Summary<a name="Summary"></a>

Playbook to sync timer trigger of all Netskope data connectors.

### Prerequisites<a name="Prerequisites"></a>

* Users must have a below Microsoft Azure credentials:
    * 1.Tenant ID
    * 2.Client ID
    * 3.Client Secret 
    * 4.Resource Group Name
    * 5.Subscription ID

### Deployment instructions<a name="Deployment-instructions"></a>

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
    * Subscription : Select Subscription in which you want to deploy the Logic App.
    * Resource Group: Select Resource Group name in which you want to deploy the Logic App.
    * Playbook Name: Enter the playbook name
    * Tenant ID : Enter the Azure Tenant ID.
    * Client ID : Enter the Azure Client ID.
    * Client Secret : Enter the Azure Client Secret.
    * Resource Group Name : Enter the Azure Resource Group Name in which your Netskope data connectors are available.
    * Subscription ID : Enter the Azure Subscription ID in which your Netskope data connectors are available.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FNetskopev2%2FPlaybooks%2FNetskopeDataConnectorsTriggerSync%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FNetskopev2%2FPlaybooks%2FNetskopeDataConnectorsTriggerSync%2Fazuredeploy.json)

### Post-Deployment instructions<a name="Post-Deployment-instructions"></a>

##### a. Run the playbook to sync timer trigger of all Netskope Data connectors

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Netskopev2](../solutions/netskopev2.md)

