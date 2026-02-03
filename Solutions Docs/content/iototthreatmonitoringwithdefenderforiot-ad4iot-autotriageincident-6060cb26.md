# AD4IoT-AutoTriageIncident

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

SOC and OT engineers can stream their workflows using the playbook, which automatically updates the incident severity based on the devices involved in the incident and their importance.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IoTOTThreatMonitoringwithDefenderforIoT/Playbooks/AutoTriageIncident/AutoTriageIncident.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`SecurityAlert`](../tables/securityalert.md) | ✓ | ✗ |

## Additional Documentation

> 📄 *Source: [AutoTriageIncident/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IoTOTThreatMonitoringwithDefenderforIoT/Playbooks/AutoTriageIncident/readme.md)*

# Defender for IoT - Auto Triage Incident

## Summary
This playbook updates the incident severity according to the importance of the devices involved, and creates a comment on the IoT Device entity page.

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

2. With the playbook opened as a Logic app, select Logic app designer. If you have invalid connection details, you may have warning signs in both of the Connections steps. 

3. Select a Connections step to expand it and add a valid connection as needed.

**To connect your incidents, relevant analytics rules, and the playbook:**
Add a new Microsoft Sentinel analytics rule, defined as follows:

1. In the Trigger field, select When an incident is updated
2. In the Conditions area, select If > Analytic rule name > Contains, and then select the specific analytics rules relevant for Defender for IoT in your organization.

You may be using out-of-the-box analytics rules, or you may have modified the out-of-the-box content, or created your own. For more information, see Detect threats out-of-the-box with Defender for IoT data.

3. In the Actions area, select Run playbook > playbook name.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to IoTOTThreatMonitoringwithDefenderforIoT](../solutions/iototthreatmonitoringwithdefenderforiot.md)

