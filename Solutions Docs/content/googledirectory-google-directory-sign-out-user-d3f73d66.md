# Google Directory - Sign Out User

Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Gets users from the incident. 2. [Signs out users.](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/signOut) 3. Adds comment to the incident about signed out users.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [GoogleDirectory](../solutions/googledirectory.md) |
| **Solution JSON** | ⚠️ Not listed |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleDirectory/Playbooks/Playbooks/Google-SignOutUser/azuredeploy.json) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Additional Documentation

> 📄 *Source: [Playbooks/Google-SignOutUser/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleDirectory/Playbooks/Playbooks/Google-SignOutUser/readme.md)*

# Google-SignOutUser
 ## Summary
 Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the following actions:
 1. Gets users from the incident.
 2. [Signs out users.](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/signOut)
 3. Adds comment to the incident about signed out users.

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleDirectory/Playbooks/Playbooks%5CGoogle-SignOutUser/playbook_screenshot.png" width="80%"/><br>
### Prerequisites 
1. [Google Directory Custom API Connector](./../../GoogleDirectoryAPIConnector/) has to be deployed prior to the deployment of this playbook under the same subscription.
2. Google Directory API credentials are required. Refer to [the Google Directory Custom Connector documentation](./../../GoogleDirectoryAPIConnector/).

### Deployment instructions 
1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required paramteres:
    * Playbook Name: Enter the playbook name here
    * Google Directory Connector Name: Logic App Connector Name

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FGoogleDirectory%2FPlaybooks%2FGoogle-SignOutUser%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FGoogleDirectory%2FPlaybooks%2FGoogle-SignOutUser%2Fazuredeploy.json)


### Post-Deployment instructions 
#### a. Authorize connections
Once deployment is complete, authorize each connection.
1.	Click the Azure Sentinel connection resource
2.	Click edit API connection
3.	Click Authorize
4.	Sign in
5.	Click Save
6.	Repeat steps for GoogleDirectory connector API Connection.


#### b. Configurations in Sentinel
1. In Microsoft sentinel, analytical rules should be configured to trigger an incident that contains Accounts. In the *Entity maping* section of the analytics rule creation workflow, user email should be mapped to **FullName** identitfier of the **Account** entity type. Check the [documentation](https://docs.microsoft.com/azure/sentinel/map-data-fields-to-entities) to learn more about mapping entities.
2. Configure the automation rules to trigger the playbook. Check the [documentation](https://docs.microsoft.com/azure/sentinel/tutorial-respond-threats-playbook) to learn more about automation rules.

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to GoogleDirectory](../solutions/googledirectory.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
