# Infoblox-IPAM-Lookup

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

The playbook will retrieve IP entities from an incident, call an API to obtain IPAM lookup data, and add this data, along with IP space and subnet information, as a comment on the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Infoblox](../solutions/infoblox.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Playbooks/Infoblox%20IPAM%20Lookup/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 9 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_Comment_To_Incident_No_IPs_Found | post | `/Incidents/Comment` | — |
| Entities_-_Get_IPs | post | `/entities/ip` | — |
| Add_Comment_To_Incident_For_Empty_IP_Address_Found | post | `/Incidents/Comment` | — |
| Add_Comment_That_Limit_Has_Been_Exceeded_To_100 | post | `/Incidents/Comment` | — |
| Add_Comment_To_Incident_For_No_Results_Found_For_IP_Address | post | `/Incidents/Comment` | — |
| Add_Comment_That_Limit_Has_Been_Exceeded_To_100_(2) | post | `/Incidents/Comment` | — |
| Add_Comment_To_Incident_For_Whole_API_Response_Of_One_IP_Traversed_(V3) | post | `/Incidents/Comment` | — |
| Add_Comment_To_Incident | post | `/Incidents/Comment` | — |
| Add_Comment_That_Limit_Has_Been_Exceeded_To_100_(3) | post | `/Incidents/Comment` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP_Request_To_Lookup_Information_For_An_IP_Space_ | GET | `@{variables('base_url')}/api/ddi/v1/@{variables('ip_space_id')}` | — |
| HTTP_Request_To_Lookup_Information_For_Subnet | GET | `@{variables('base_url')}/api/ddi/v1/@{variables('subnet_id')}` | — |
| HTTP_Request_To_Lookup_Information_About_An_IP_Address | GET | `@{variables('base_url')}/api/ddi/v1/ipam/address` | — |

</details>

## Additional Documentation

> 📄 *Source: [Infoblox IPAM Lookup/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Playbooks/Infoblox%20IPAM%20Lookup/readme.md)*

# Infoblox IPAM Lookup

* [Summary](#Summary)
* [Prerequisites](#Prerequisites)
* [Deployment instructions](#Deployment-instructions)
* [Post-Deployment instructions](#Post-Deployment-instructions)

## Summary<a name="Summary"></a>

The playbook will retrieve IP entities from an incident, call an API to obtain IPAM lookup data, and add this data, along with IP space and subnet information, as a comment on the incident.

### Prerequisites<a name="Prerequisites"></a>

1. User must have a valid Infoblox API Key.

### Deployment instructions<a name="Deployment-instructions"></a>

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
    * Playbook Name: Enter the playbook name here
    * Infoblox API Key: Enter valid value for API Key
    * Infoblox Base Url: Enter baseurl for your Infoblox instance.(e.g. https://csp.infoblox.com)

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https%3A%2F%2Fportal.azure.com%2F%23create%2FMicrosoft.Template%2Furi%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FInfoblox%2FPlaybooks%2FInfoblox%20IPAM%20Lookup%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https%3A%2F%2Fportal.azure.us%2F%23create%2FMicrosoft.Template%2Furi%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FInfoblox%2FPlaybooks%2FInfoblox%20IPAM%20Lookup%2Fazuredeploy.json)

### Post-Deployment instructions<a name="Post-Deployment-instructions"></a>


#### a. Assign Role to add comment in incident

Assign role to this playbook.

1. Go to Log Analytics Workspace → <your workspace> → Access Control → Add
2. Add role assignment
3. Assignment type: Job function roles -> Add 'Microsoft Sentinel Contributor' as a Role
4. Members: select managed identity for assigned access to and add your logic app as member
5. Click on review+assign

#### b. Configurations in Microsoft Sentinel

1. In Microsoft sentinel, analytical rules should be configured to trigger an incident which has Entities Mapping available for IP
2. To manually run the playbook on a particular incident follow the below steps:
a. Go to Microsoft Sentinel -> <your workspace> -> Incidents
b. Select an incident
c. In the right pane, click on Actions, and from the dropdown select the 'Run Playbook' option
d. Click on the Run button beside this playbook

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Infoblox](../solutions/infoblox.md)

