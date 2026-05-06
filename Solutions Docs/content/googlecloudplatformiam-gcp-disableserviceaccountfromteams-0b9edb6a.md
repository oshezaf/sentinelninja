# GCP-DisableServiceAccountFromTeams

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

When a new sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Sends an adaptive card to the Teams channel where the analyst can choose an action to be taken. <img src='https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/GoogleCloudPlatformIAM/Playbooks/GCP-DisableServiceAccountFromTeams/teams_screenshot.png'/> 2. [Disables Service Account](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts/disable) depen

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformIAM/Playbooks/GCP-DisableServiceAccountFromTeams/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 12 |
| `gcpiamapi` | Managed | 0 | 2 |
| `teams` | Managed | 1 | 0 |
| `GoogleCloudPlatformIAM` | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Update_incident*: method=`put`, path=`/Incidents`
- *Update_incident_2*: method=`put`, path=`/Incidents`
- *Update_incident_3*: method=`put`, path=`/Incidents`
- *Update_incident_4*: method=`put`, path=`/Incidents`
- *Update_incident_5*: method=`put`, path=`/Incidents`
- *Update_incident_6*: method=`put`, path=`/Incidents`
- *Update_incident_7*: method=`put`, path=`/Incidents`
- *Update_incident_8*: method=`put`, path=`/Incidents`
- *Update_incident_9*: method=`put`, path=`/Incidents`
- *Update_incident_10*: method=`put`, path=`/Incidents`
- *Update_incident_11*: method=`put`, path=`/Incidents`

**`gcpiamapi`** (managedApi):
- *iam.projects.serviceAccounts.disable*: method=`post`, path=`/v1/projects/@{encodeURIComponent(outputs('parse_project_id'))}/serviceAccounts/@{encodeURIComponent(items('For_each_service_account'))}:disable`
- *iam.projects.serviceAccounts.delete*: method=`delete`, path=`/v1/projects/@{encodeURIComponent(outputs('parse_project_id'))}/serviceAccounts/@{encodeURIComponent(items('For_each_service_account'))}`

</details>

## Additional Documentation

> 📄 *Source: [GCP-DisableServiceAccountFromTeams/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformIAM/Playbooks/GCP-DisableServiceAccountFromTeams/readme.md)*

## Summary
 When a new sentinel incident is created, this playbook gets triggered and performs the following actions:

 1. Sends an adaptive card to the Teams channel where the analyst can choose an action to be taken.

 <img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformIAM/Playbooks/GCP-DisableServiceAccountFromTeams/teams_screenshot.png" width="50%"/><br>

 2. [Disables Service Account](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts/disable) depending on the action chosen in the adaptive card.
 3. Changes incident status and severity depending on the action chosen in the adaptive card.
 4. Adds comment to the incident with information about the actions taken.

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformIAM/Playbooks/GCP-DisableServiceAccountFromTeams/playbook_screenshot.png" width="80%"/><br>
### Prerequisites 
1. Prior to the deployment of this playbook, GoogleCloudPlatformIAM Connector needs to be deployed under the same subscription.
2. GCP credentials are required. Refer to the GoogleCloudPlatformIAM Custom Connector documentation.

### Deployment instructions 
1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required paramteres:
    * Playbook Name: Enter the playbook name here
    * Teams Group Id: Id of the Teams Group where the adaptive card will be posted
    * Teams Channel Id: Id of the Teams Channel where the adaptive card will be posted

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FGoogleCloudPlatformIAM%2FPlaybooks%2FGCP-DisableServiceAccountFromTeams%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FGoogleCloudPlatformIAM%2FPlaybooks%2FGCP-DisableServiceAccountFromTeams%2Fazuredeploy.json)


### Post-Deployment instructions

#### a. Authorize connections

Once deployment is complete, authorize each connection.

1. Click the Microsoft Sentinel connection resource
2. Click edit API connection
3. Click Authorize
4. Sign in
5. Click Save
6. Repeat steps for other connections

#### b. Configurations in Sentinel

1. In Microsoft sentinel, analytical rules should be configured to trigger an incident. An incident should have the *gcp_project_id* and *gcp_service_account* custom entities. Check the [documentation](https://docs.microsoft.com/azure/sentinel/surface-custom-details-in-alerts) to learn more about adding custom entities to incidents. 
2. Configure the automation rules to trigger the playbook.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md)

