# GCP-EnrichServiseAccountInfo

Once a new sentinel incident is created, this playbook gets triggered and performs the following actions: 1. [Gets service Account Information](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts/get) by the gcp_project_id and gcp_service_account, provided in the alert custom entities. 2. Enriches the incident with the obtained info. <img src='https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/GoogleCloudPlatformIAM/Playbooks/GCP-EnrichServiseAccount

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformIAM/Playbooks/GCP-EnrichServiseAccountInfo/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [GCP-EnrichServiseAccountInfo/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformIAM/Playbooks/GCP-EnrichServiseAccountInfo/readme.md)*

## Summary
 Once a new sentinel incident is created, this playbook gets triggered and performs the following actions:
 1. [Gets service Account Information](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts/get) by the *gcp_project_id* and *gcp_service_account*, provided in the alert custom entities. 
 2. Enriches the incident with the obtained info.

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformIAM/Playbooks/GCP-EnrichServiseAccountInfo/playbook_screenshot.png" width="80%"/><br>
### Prerequisites 
1. GoogleCloudPlatformIAM Custom Connector has to be deployed prior to the deployment of this playbook under the same subscription.
2. GCP credentials are required. Refer to the GoogleCloudPlatformIAM Custom Connector documentation.

### Deployment instructions 
1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required paramteres:
    * Playbook Name: Enter the playbook name here

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FGoogleCloudPlatformIAM%2FPlaybooks%2FGCP-EnrichServiseAccountInfo%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FGoogleCloudPlatformIAM%2FPlaybooks%2FGCP-EnrichServiseAccountInfo%2Fazuredeploy.json)


### Post-Deployment instructions 
#### a. Authorize connections
Once deployment is complete, authorize each connection.
1.	Click the Microsoft Sentinel connection resource
2.	Click edit API connection
3.	Click Authorize
4.	Sign in
5.	Click Save
6.	Repeat steps for GoogleCloudPlatformIAM connector API Connection.
#### b. Configurations in Sentinel
1. In Microsoft sentinel, analytical rules should be configured to trigger an incident. An incident should have the *gcp_project_id* and *gcp_service_account* custom entities. Check the [documentation](https://docs.microsoft.com/azure/sentinel/surface-custom-details-in-alerts) to learn more about adding custom entities to incidents. 
2. Configure the automation rules to trigger the playbook.

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Playbooks](playbooks.md) · [Back to GoogleCloudPlatformIAM](../solutions/googlecloudplatformiam.md)

