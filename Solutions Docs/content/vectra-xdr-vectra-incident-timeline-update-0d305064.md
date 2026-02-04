# Vectra Incident Timeline Update

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will update the incident timeline by keeping most recent alerts and adding most recent detections and defender alerts from entities timeline to the incident timeline.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Vectra XDR](../solutions/vectra-xdr.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR/Playbooks/VectraIncidentTimelineUpdate/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SecurityAlert`](../tables/securityalert.md) | ✓ | ✗ | ✓ |
| [`SecurityIncident`](../tables/securityincident.md) | ✓ | ✗ | ✓ |

## Additional Documentation

> 📄 *Source: [VectraIncidentTimelineUpdate/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR/Playbooks/VectraIncidentTimelineUpdate/readme.md)*

## Summary

This playbook will update the incident timeline by keeping most recent alerts and adding most recent detections from entities timeline to the incident timeline.

### Prerequisites

1. The Vectra XDR data connector should be configured to create alerts and generate an incident based on entity data in Microsoft Sentinel.

### Deployment Instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
   * PlaybookName: Enter the playbook name here.
   * WorkspaceName: Enter name of the log analytics workspace where incidents are available using generated using analytic rule.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FVectraXDR%2FPlaybooks%2FVectraIncidentTimelineUpdate%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FVectraXDR%2FPlaybooks%2FVectraIncidentTimelineUpdate%2Fazuredeploy.json)

## Post-Deployment Instructions

#### a. Authorize connections

Once deployment is complete, authorize each connection.
1. Go to your logic app → API connections → Select keyvault connection resource.
2. Go to General → Edit API connection.
3. Click Authorize.
4. Sign in.
5. Click Save.
6. Repeat steps for other connections.

#### b. Assign Role to update incident

After authorizing each connection, assign role to this playbook.
1. Go to Log Analytics Workspace → *your workspace* → Access Control → Add.
2. Add role assignment.
3. Assignment type: Job function roles.
4. Role: Microsoft Sentinel Contributor.
5. Members: select managed identity for assigned access to and add your logic app as member as shown in screenshot below.
6. Click on review+assign.

#### c. Configurations in Microsoft Sentinel

1. In Microsoft sentinel, below analytical rules should be configured to trigger an incident.
   * Vectra Detection Account Alerts
   * Vectra Detection Host Alerts
   * Vectra Priority Account Incidents
   * Vectra Priority Host Incidents
   * Vectra Create Incident Based On Tag For Entity Type Account
   * Vectra Create Incident Based On Tag For Entity Type Host
2. In Microsoft Sentinel, Configure the automation rules to trigger the playbook.
   -  Go to Microsoft Sentinel → *your workspace* → Automation
   -  Click on Create → Automation rule
   -  Provide name for your rule
   -  In Analytic rule name condition, select analytic rule which you have created.
   -  In Actions dropdown select Run playbook
   -  In second dropdown select your deployed playbook,
   -  Click on Apply,
   -  Save the Automation rule.
**NOTE**: If you want to manually run the playbook on a particular incident follow the below steps:,
   -  Go to Microsoft Sentinel → *your workspace* → Incidents,
   -  Select an incident.,
   -  In the right pane, click on Actions, and from the dropdown select the 'Run Playbook' option.,
   -  Click on the Run button beside this playbook.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Vectra XDR](../solutions/vectra-xdr.md)

