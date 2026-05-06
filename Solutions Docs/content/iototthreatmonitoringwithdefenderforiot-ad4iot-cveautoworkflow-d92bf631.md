# AD4IoT-CVEAutoWorkflow

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

The playbook automates the SOC workflow by automatically enriching incident comments with the CVEs of the involved devices based on Defender for IoT data. An automated triage is performed if the CVE is critical, and the asset owner is automatically notified by email.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IoTOTThreatMonitoringwithDefenderforIoT/Playbooks/CVEAutoWorkflow/CVEAutoWorkflow.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`SecurityAlert`](../tables/securityalert.md) | `SystemAlertId == "@{items("` | ✓ | ✗ | ? |

## Logic App Connectors

This playbook uses **6** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuremonitorlogs` | Managed | 1 | 1 |
| `azuresentinel` | Managed | 2 | 0 |
| `azuresentinel_1` | Managed | 0 | 3 |
| `office365` | Managed | 1 | 0 |
| `office365_1` | Managed | 0 | 1 |
| `http` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuremonitorlogs`** (managedApi):
- *Run_query_and_list_results*: method=`post`, path=`/queryData`

**`azuresentinel_1`** (managedApi):
- *Entities_-_Get_IPs*: method=`post`, path=`/entities/ip`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Update_incident*: method=`put`, path=`/Incidents`

**`office365_1`** (managedApi):
- *Send_an_email_(V2)*: method=`post`, path=`/v2/Mail`

**`http`** (builtin):
- *HTTP*: method=`POST`, uri=`@variables('ARGEndPoint')`

</details>

## Additional Documentation

> 📄 *Source: [CVEAutoWorkflow/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IoTOTThreatMonitoringwithDefenderforIoT/Playbooks/CVEAutoWorkflow/readme.md)*

# Defender for IoT - CVE Auto Workflow

## Summary
The playbook automates the SOC workflow by automatically enriching incident comments with the CVEs of the involved devices based on Defender for IoT data. An automated triage is performed if the CVE is critical, and the asset owner is automatically notified by email

## Prerequisites
The playbook require the following in order to connect and use the playbook:

1. Reader role applied on the Azure subscription \ resource group scope
2. Valid connections where required
3. An automation rule to connect incident triggers with the playbook.

## Deployment
To add the Security Admin role to the Azure subscription where the playbook is installed:

1.Open the playbook from the Microsoft Sentinel Automation page.

2.With the playbook opened as a Logic app, select Identity > System assigned, and then in the Permissions area, select the Azure role assignments button.

3.In the Azure role assignments page, select Add role assignment.

4.In the Add role assignment pane:

  - Define the Scope as Subscription \ resource group
  - From the Subscription dropdown, select the subscription where your playbook is installed.
  - From the Role dropdown, select the Security Admin role, and then select Save.
  
** To ensure that you have valid connections for each of your connection steps in the playbook:**
1. Open the playbook from the Microsoft Sentinel Automation page.
2. With the playbook opened as a Logic app, select Logic app designer. If you have invalid connection details, you may have warning signs in both of the Connections steps. For example:

Screenshot of the default AD4IOT AutoAlertStatusSync playbook.

3. Select a Connections step to expand it and add a valid connection as needed.

**To connect your incidents, relevant analytics rules, and the playbook:**
Add a new Microsoft Sentinel analytics rule, defined as follows:

1. In the Trigger field, select When an incident is updated
2. In the Conditions area, select If > Analytic rule name > Contains, and then select the specific analytics rules relevant for Defender for IoT in your organization.

You may be using out-of-the-box analytics rules, or you may have modified the out-of-the-box content, or created your own. For more information, see Detect threats out-of-the-box with Defender for IoT data.

3. In the Actions area, select Run playbook > playbook name.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md)

