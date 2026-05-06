# Infoblox-TimeRangeBased-DHCP-Lookup

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

The playbook will retrieve IP entities from an incident, search for related DHCP data in a table for a apecified time range, and if found, add the DHCP lookup data as a comment on the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Infoblox](../solutions/infoblox.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Playbooks/Infoblox%20TimeRangeBased%20DHCP%20Lookup/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuremonitorlogs` | Managed | 1 | 1 |
| `azuresentinel` | Managed | 1 | 9 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuremonitorlogs`** (managedApi):
- *Run_Query_And_List_DHCP_Lookup_Data_For_Provided_Time_Range*: method=`post`, path=`/queryDataV2`

**`azuresentinel`** (managedApi):
- *Entities_-_Get_IPs*: method=`post`, path=`/entities/ip`
- *Add_Comment_To_Incident_For_Empty_IP_Address_Found*: method=`post`, path=`/Incidents/Comment`
- *Add_Comment_That_Limit_Has_Been_Exceeded_To_100*: method=`post`, path=`/Incidents/Comment`
- *Add_Comment__For_Empty_Results_Found_For_IP*: method=`post`, path=`/Incidents/Comment`
- *Add_Comment_That_Limit_Has_Been_Exceeded_To_100_(2)*: method=`post`, path=`/Incidents/Comment`
- *Add_Comment_To_Incident_For_Remaining_Records*: method=`post`, path=`/Incidents/Comment`
- *Add_Comment_To_Incident_For_Limit_Exceeded*: method=`post`, path=`/Incidents/Comment`
- *Add_Comment_For_DHCP_Record_In_HTML_Table_Format_*: method=`post`, path=`/Incidents/Comment`
- *Add_Comment_That_Limit_Has_Been_Exceeded*: method=`post`, path=`/Incidents/Comment`

</details>

## Additional Documentation

> 📄 *Source: [Infoblox TimeRangeBased DHCP Lookup/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox/Playbooks/Infoblox%20TimeRangeBased%20DHCP%20Lookup/readme.md)*

# Infoblox TimeRangeBased DHCP Lookup

* [Summary](#Summary)
* [Prerequisites](#Prerequisites)
* [Deployment instructions](#Deployment-instructions)
* [Post-Deployment instructions](#Post-Deployment-instructions)

## Summary<a name="Summary"></a>

The playbook will retrieve IP entities from an incident, search for related DHCP data in a table for a specified time range, and if found, add the DHCP lookup data as a comment on the incident.

### Prerequisites<a name="Prerequisites"></a>

1. CEF based Infoblox Data Connector should be configured to ingest DHCP lease related data in Microsoft Sentinel.

### Deployment instructions<a name="Deployment-instructions"></a>

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
    * Playbook Name: Enter the playbook name here
    * Start Date: Enter start date from which you want to perform lookup for DHCP data. Date should be in the format of yyyy-mm-dd
    * End Date: Enter end date till you want to perform lookup for DHCP data. Date should be in the format of yyyy-mm-dd
    * Workspace Name: Enter name of Log Analytics Workspace where DHCP data is available

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https%3A%2F%2Fportal.azure.com%2F%23create%2FMicrosoft.Template%2Furi%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FInfoblox%2FPlaybooks%2FInfoblox%20TimeRangeBased%20DHCP%20Lookup%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https%3A%2F%2Fportal.azure.us%2F%23create%2FMicrosoft.Template%2Furi%2Fhttps%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FInfoblox%2FPlaybooks%2FInfoblox%20TimeRangeBased%20DHCP%20Lookup%2Fazuredeploy.json)

### Post-Deployment instructions<a name="Post-Deployment-instructions"></a>

#### a. Authorize connections

Once deployment is complete, authorize each connection.

1. Go to your logic app -> API connections -> Select azuremonitorlogs connection resource
2. Go to General -> edit API connection
3. Click Authorize
4. Sign in
5. Click Save
6. Repeat steps for other connections

#### b. Assign Role to add comment in incident

Assign role to this playbook.

1. Go to Log Analytics Workspace → <your workspace> → Access Control → Add
2. Add role assignment
3. Assignment type: Job function roles -> Add 'Microsoft Sentinel Contributor' as a Role
4. Members: select managed identity for assigned access to and add your logic app as member
5. Click on review+assign

#### c. Configurations in Microsoft Sentinel

1. In Microsoft sentinel, analytical rules should be configured to trigger an incident which has Entities Mapping available for IP
2. To manually run the playbook on a particular incident follow the below steps:
a. Go to Microsoft Sentinel -> <your workspace> -> Incidents
b. Select an incident
c. In the right pane, click on Actions, and from the dropdown select the 'Run Playbook' option
d. Click on the Run button beside this playbook

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Infoblox](../solutions/infoblox.md)

