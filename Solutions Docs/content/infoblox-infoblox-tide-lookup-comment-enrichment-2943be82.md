# Infoblox-TIDE-Lookup-Comment-Enrichment

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

The playbook enrich an incident by adding TIDE Lookup information as comment on an incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Infoblox](../solutions/infoblox.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Playbooks/Infoblox%20TIDE%20Lookup%20Incident%20Comment%20Based/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 17 |
| `http` | Built-in | 0 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_Comment_To_Incident_If_Entity_Mapping_Not_Found*: method=`post`, path=`/Incidents/Comment`
- *Add_Comment_To_Incident_If_No_TIDE_Data_Found_For_Hash*: method=`post`, path=`/Incidents/Comment`
- *Add_Comment_That_Limit_Has_Been_Exceeded_For_Hash*: method=`post`, path=`/Incidents/Comment`
- *Add_Hash_TIDE_Data_As_Comment*: method=`post`, path=`/Incidents/Comment`
- *Add_Comment_To_Incident_If_No_TIDE_Data_Found_For_Host*: method=`post`, path=`/Incidents/Comment`
- *Add_Comment_That_Limit_Has_Been_Exceeded_For_Host*: method=`post`, path=`/Incidents/Comment`
- *Add_Host_TIDE_Data_As_Comment*: method=`post`, path=`/Incidents/Comment`
- *Add_Comment_To_Incident_If_No_TIDE_Data_Found_For_IP*: method=`post`, path=`/Incidents/Comment`
- *Add_Comment_That_Limit_Has_Been_Exceeded_For_IP*: method=`post`, path=`/Incidents/Comment`
- *Add_IP_TIDE_Data_As_Comment*: method=`post`, path=`/Incidents/Comment`
- *Add_Comment_To_Incident_If_No_TIDE_Data_Found_For_URL*: method=`post`, path=`/Incidents/Comment`
- *Add_Comment_That_Limit_Has_Been_Exceeded_For_URL*: method=`post`, path=`/Incidents/Comment`
- *Add_URL_TIDE_Data_As_Comment*: method=`post`, path=`/Incidents/Comment`
- *Get_FileHashes_From_Entities*: method=`post`, path=`/entities/filehash`
- *Get_Hosts_From_Entities*: method=`post`, path=`/entities/host`
- *Get_IPs_From_Entities*: method=`post`, path=`/entities/ip`
- *Get_URLs_From_Entities*: method=`post`, path=`/entities/url`

**`http`** (builtin):
- *HTTP_Request_To_Get_TIDE_Data_Of_Type_Hash*: method=`GET`, uri=`@{variables('base_url')}/tide/api/data/threats`
- *HTTP_Request_To_Get_TIDE_Data_Of_Type_Host*: method=`GET`, uri=`@{variables('base_url')}/tide/api/data/threats`
- *HTTP_Request_To_Get_TIDE_Data_Of_Type_IP*: method=`GET`, uri=`@{variables('base_url')}/tide/api/data/threats`
- *HTTP_Request_To_Get_TIDE_Data_Of_Type_URL*: method=`GET`, uri=`@{variables('base_url')}/tide/api/data/threats`

</details>

## Additional Documentation

> 📄 *Source: [Infoblox TIDE Lookup Incident Comment Based/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Playbooks/Infoblox%20TIDE%20Lookup%20Incident%20Comment%20Based/readme.md)*

# Infoblox TIDE Lookup Comment Enrichment

* [Summary](#Summary)
* [Prerequisites](#Prerequisites)
* [Deployment instructions](#Deployment-instructions)
* [Post-Deployment instructions](#Post-Deployment-instructions)

## Summary<a name="Summary"></a>

The playbook enriches an incident by adding TIDE Lookup information as comment on an incident.

### Prerequisites<a name="Prerequisites"></a>

1. User must provide valid Infoblox API Key.

### Deployment instructions<a name="Deployment-instructions"></a>

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
    * Playbook Name: Enter the playbook name here
    * Infoblox API Key: Enter valid value for API Key
    * Infoblox Base Url: Enter baseurl for your Infoblox instance.(e.g. https://csp.infoblox.com)

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https%3A%2F%2Fportal.azure.com%2F%23create%2FMicrosoft.Template%2Furi%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FInfoblox%2FPlaybooks%2FInfoblox%20TIDE%20Lookup%20Incident%20Comment%20Based%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https%3A%2F%2Fportal.azure.us%2F%23create%2FMicrosoft.Template%2Furi%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FInfoblox%2FPlaybooks%2FInfoblox%20TIDE%20Lookup%20Incident%20Comment%20Based%2Fazuredeploy.json)

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Infoblox](../solutions/infoblox.md)

