# Infoblox-Block-Allow-IP-Domain

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

The playbook will add/remove IP or Domain value in Named List of Infoblox.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Infoblox](../solutions/infoblox.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Playbooks/Infoblox%20Block%20Allow%20IP%20Domain/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`teams`](../logic-apps/managed-teams.md) | Managed | 1 | 0 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP_Call_To_Add_Remove_IP_or_Domain_in_Selected_Name_List | PATCH | `@{variables('base_url')}/api/atcfw/v1/named_lists/@{variables('list_id')}/items` | — |
| HTTP_Call_For_Get_List_For_Named_List_Endpoint | GET | `@{variables('base_url')}/api/atcfw/v1/named_lists` | — |

</details>

## Additional Documentation

> 📄 *Source: [Infoblox Block Allow IP Domain/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Playbooks/Infoblox%20Block%20Allow%20IP%20Domain/readme.md)*

# Infoblox Block and Allow IP Domain

* [Summary](#Summary)
* [Prerequisites](#Prerequisites)
* [Deployment instructions](#Deployment-instructions)
* [Post-Deployment instructions](#Post-Deployment-instructions)

## Summary<a name="Summary"></a>

The playbook will add/remove IP or Domain value in Named List of Infoblox.

### Prerequisites<a name="Prerequisites"></a>

1. User must have a valid Infoblox API Key.
2. Obtain Teams GroupId and ChannelId
    * Create a Team with public channel.
    * Click on three dots (...) present on right side of the your newly created teams channel and Get link to the channel.
    * Copy the text from the link between /channel and /, decode it using online url decoder and copy it to use as channelId.
    * Copy the text of groupId parameter from link to use as groupId.

### Deployment instructions<a name="Deployment-instructions"></a>

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
    * Playbook Name: Enter the playbook name here
    * Infoblox API Key: Enter valid value for API Key
    * Infoblox Base Url: Enter baseurl for your Infoblox instance (e.g. https://csp.infoblox.com)
    * TeamsGroupId: Enter Id of the Teams Group where the adaptive card will be posted
    * TeamsChannelId: Enter Id of the Teams Channel where the adaptive card will be posted

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https%3A%2F%2Fportal.azure.com%2F%23create%2FMicrosoft.Template%2Furi%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FInfoblox%2FPlaybooks%2FInfoblox%20Block%20Allow%20IP%20Domain%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https%3A%2F%2Fportal.azure.us%2F%23create%2FMicrosoft.Template%2Furi%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FInfoblox%2FPlaybooks%2FInfoblox%20Block%20Allow%20IP%20Domain%2Fazuredeploy.json)

### Post-Deployment instructions<a name="Post-Deployment-instructions"></a>

#### a. Authorize connections

Once deployment is complete, authorize connection.

1. Go to your logic app → API connections → Select teams connection resource
2. Go to General → edit API connection
3. Click Authorize
4. Sign in
5. Click Save

#### b. Get Workflow URL for the playbook

Once deployment is complete, get Workflow URL

1. Go to your logic app → Overview
2. Copy Workflow URL

This URL can be use to trigger the Logic App directly

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Infoblox](../solutions/infoblox.md)

