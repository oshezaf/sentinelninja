# User enrichment - Okta

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will collect user information from Okta and post a report on the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Okta%20Single%20Sign-On/Playbooks/OktaPlaybooks/Okta-EnrichIncidentWithUserDetails/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [OktaPlaybooks/Okta-EnrichIncidentWithUserDetails/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Okta%20Single%20Sign-On/Playbooks/OktaPlaybooks/Okta-EnrichIncidentWithUserDetails/readme.md)*

# Okta-Enrich Incident With User Details Playbook
 ## Summary
 When a new Microsoft Sentinel incident is created, this playbook gets triggered and performs below actions
 1. Fetches the user details and user group details from Okta
 2. Adds a rich comment to the incident with all the collected information
    ![Comment example](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Okta%20Single%20Sign-On/Playbooks/OktaPlaybooks%5COkta-EnrichIncidentWithUserDetails/images/Incident_Comment.png)


![Playbook Designer view](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Okta%20Single%20Sign-On/Playbooks/OktaPlaybooks%5COkta-EnrichIncidentWithUserDetails/Okta-EnrichIncidentwithuserdetails.PNG)<br>

### Prerequisites 
1. Okta Custom Connector needs to be deployed prior to the deployment of this playbook under the same subscription.
2. Generate an API key.Refer this link [ how to generate the API Key](https://developer.okta.com/docs/guides/create-an-api-token/overview/)

### Deployment instructions 
1. Deploy the playbook by clicking on "Deploy to Azure" button. This will take you to deplyoing an ARM Template wizard.
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FPlaybooks%2FOkta%2FOktaPlaybooks%2FOkta-EnrichIncidentWithUserDetails%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FPlaybooks%2FOkta%2FOktaPlaybooks%2FOkta-EnrichIncidentWithUserDetails%2Fazuredeploy.json)

2. Fill in the required paramteres:
    * Playbook Name: Enter the playbook name here (Ex:OktaPlaybook)
    
### Post-Deployment instructions 
#### a. Authorize connections
Once deployment is complete, you will need to authorize each connection.
1.	Click the Microsoft Sentinel connection resource
2.	Click edit API connection
3.	Click Authorize
4.	Sign in
5.	Click Save
6.	Repeat steps for Okta Api  Connection (For authorizing the Okta API connection, API Key needs to be provided)
#### b. Configurations in Sentinel
1. In Microsoft sentinel analytical rules should be configured to trigger an incident with risky user account 
2. Configure the automation rules to trigger this playbook


## Playbook steps explained
### When Microsoft Sentinel incident creation rule is triggered

Microsoft Sentinel incident is created. The playbook receives the incident as the input.
### Entities - Get Accounts

Get the list of risky/malicious accounts as entities from the Incident

### Initialize variable to collect group details
Initialize an array variable to compose user group details to use it later while updating the incident

### For each-risky account received from the incident
Iterates on the accounts found in this incident (probably one) and performs the following:

1. For the risky user account, playbook uses "Get User" action to get user details from Okta
2. For each user, playbook uses "Get User Groups" action to get user  group details from Okta

   a. Compose array of groups for updating incident with group details

   b. Append groups to group array variable

3. Create HTML table format of user group details such as group id,group name and group description

4. Add a comment to the incident with the information below:

     a. User information collected by "Get User" action from Okta such as

     * User id, User name, User login, User email, User status, User created, User activated, User statusChanged, User lastLogin, User lastUpdated, User passwordChanged


     
     b. User groups information collected by "Get User Groups" action from Okta such as

     * Group id,Group name and Group description

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Okta Single Sign-On](../solutions/okta-single-sign-on.md)

