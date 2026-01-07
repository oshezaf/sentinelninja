# AWS IAM - Enrich incident with user info

Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Gets users from the incident. 2. Obtains information about users in AWS IAM. 3. Adds obtained information as a comment to the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [AWS_IAM](../solutions/aws-iam.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS_IAM/Playbooks/Playbooks/AWSIAM-EnrichIncidentWithUserInfo/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [Playbooks/AWSIAM-EnrichIncidentWithUserInfo/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS_IAM/Playbooks/Playbooks/AWSIAM-EnrichIncidentWithUserInfo/readme.md)*

# AWSIAM-EnrichIncidentWithUserInfo

## Summary

When a new sentinel incident is created, this playbook gets triggered and performs the following actions:

1. Gets users from incident.
2. Obtains information about users in AWS IAM.
3. Adds obtained information as a comment to the incident.

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AWS_IAM/Playbooks/Playbooks%5CAWSIAM-EnrichIncidentWithUserInfo/playbook_screenshot.png" width="50%"/><br>

### Prerequisites

1. Prior to the deployment of this playbook, [AWS IAM Function App Connector](../../AWS_IAM_FunctionAppConnector/) needs to be deployed under the same subscription.
2. Obtain AWS IAM API credentials. Refer to [AWS IAM Function App Connector](../../AWS_IAM_FunctionAppConnector/readme.md) documentation.

### Deployment instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
    * Playbook Name: Enter the playbook name here

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FAWS_IAM%2FPlaybooks%2FPlaybooks%2FAWSIAM-EnrichIncidentWithUserInfo%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FAWS_IAM%2FPlaybooks%2FPlaybooks%2FAWSIAM-EnrichIncidentWithUserInfo%2Fazuredeploy.json)

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

1. In Microsoft sentinel, analytical rules should be configured to trigger an incident that contains user name in AWS. In the *Entity maping* section of the analytics rule creation workflow, user name should be mapped to **Name** identitfier of the **Account** entity type. Check the [documentation](https://docs.microsoft.com/azure/sentinel/map-data-fields-to-entities) to learn more about mapping entities.
2. Configure the automation rules to trigger the playbook. Check the [documentation](https://docs.microsoft.com/azure/sentinel/tutorial-respond-threats-playbook) to learn more about automation rules.

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to AWS_IAM](../solutions/aws-iam.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
