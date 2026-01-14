# Create Observable - EclecticIQ

This playbook adds new observable in EclecticIQ based on the entities info present in Sentinel incident. If same type and value exists already, then it will update the observable and comment will be added to Sentinel's incident

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [EclecticIQ](../solutions/eclecticiq.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/EclecticIQ/Playbooks/EclecticIQPlaybooks/EclecticIQ-CreateObservable/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [EclecticIQPlaybooks/EclecticIQ-CreateObservable/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/EclecticIQ/Playbooks/EclecticIQPlaybooks/EclecticIQ-CreateObservable/readme.md)*

# OpenCTI- Add Indicators in OpenCTI Playbook
 ## Summary
 When a new Microsoft Sentinel incident is created, this playbook gets triggered and performs below actions
 1. Create or Update (if already exists) observable in EclecticIQ for each entity (Accounts, Host, IP Address, FileHash, URL) that is presented in Sentinel incident
 2. This playbook adds new comment to sentinel incident
    ![Comment example](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/EclecticIQ/Playbooks/EclecticIQPlaybooks%5CEclecticIQ-CreateObservable/images/EclecticIQ_CA_IncidentComment_DarkTheme.png)



![Playbook Designer view](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/EclecticIQ/Playbooks/EclecticIQPlaybooks%5CEclecticIQ-CreateObservable/images/EclecticIQ_CA_Workflow_DarkTheme.png)<br>

### Prerequisites 
1. EclecticIQ Custom Connector needs to be deployed prior to the deployment of this playbook under the same subscription.
2. API key. To get API Key, find the instructions here https://developers.eclecticiq.com/docs/authenticate#generate-api-token.

### Deployment instructions 
1. Deploy the playbook by clicking on "Deploy to Azure" button. This will take you to deplyoing an ARM Template wizard.
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%EclecticIQ%2FPlaybooks%2FEclecticIQPlaybooks%2FEclecticIQ-CreateObservable%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%EclecticIQ%2FPlaybooks%2FEclecticIQPlaybooks%2FEclecticIQ-CreateObservable%2Fazuredeploy.json)

2. Fill in the required parameters:
    * Playbook Name: Enter the playbook name here (Ex: EclecticIQ-CreateObservable)
    * Custom Connector Name: Enter the EclecticIQ custom connector name here (Ex: EclecticIQCustomConnector)
    
### Post-Deployment instructions 
#### a. Authorize connections
Once deployment is complete, you will need to authorize each connection.
1.	Click the Azure Sentinel connection resource
2.	Click edit API connection
3.	Click Authorize
4.	Sign in
5.	Click Save
6.	Repeat steps for EclecticIQ API  Connection (For authorizing the EclecticIQ API connection, API Key needs to be provided)
#### b. Configurations in Sentinel
1. In Azure sentinel analytical rules should be configured to trigger an incident with risky user account or host or URL or FileHash or IP Address. 
2. Configure the automation rules to trigger this playbook
#### c. Assign Playbook Microsoft Sentinel Responder Role
1. Select the Playbook (Logic App) resource
2. Click on Identity Blade
3. Choose System assigned tab
4. Click on Azure role assignments
5. Click on Add role assignments
6. Select Scope - Resource group
7. Select Subscription - where Playbook has been created
8. Select Resource group - where Playbook has been created
9. Select Role - Microsoft Sentinel Responder
10. Click Save (It takes 3-5 minutes to show the added role.)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Playbooks](playbooks.md) · [Back to EclecticIQ](../solutions/eclecticiq.md)

