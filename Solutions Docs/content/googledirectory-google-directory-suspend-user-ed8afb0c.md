# Google Directory - Suspend User

Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Gets users from the incident. 2. Sends an adaptive card to the Teams channel where the analyst can choose users to suspend. 3. Suspends users. 4. Adds comment to the incident about suspended users.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [GoogleDirectory](../solutions/googledirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleDirectory/Playbooks/Playbooks/Google-SuspendUser/azuredeploy.json) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Additional Documentation

> 📄 *Source: [Playbooks/Google-SuspendUser/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleDirectory/Playbooks/Playbooks/Google-SuspendUser/readme.md)*

# Google-SuspendUser
 ## Summary
 Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the following actions:
 1. Gets users from the incident.
 2. Sends an adaptive card to the Teams channel where the analyst can choose users to suspend.
 3. Suspends users.
 4. Adds comment to the incident about suspended users.

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleDirectory/Playbooks/Playbooks%5CGoogle-SuspendUser/playbook_screenshot.png" width="80%"/><br>
### Prerequisites 
1. [Google Directory Custom API Connector](./../../GoogleDirectoryAPIConnector/) has to be deployed prior to the deployment of this playbook under the same subscription.
2. Google Directory API credentials are required. Refer to [the Google Directory Custom Connector documentation](./../../GoogleDirectoryAPIConnector/).

### Deployment instructions 
1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required paramteres:
    * Playbook Name: Enter the playbook name here
    * Teams Group Id: Id of the Teams Group where the adaptive card will be posted
    * Teams Channel Id: Id of the Teams Channel where the adaptive card will be posted
    * Google Directory Connector Name: Logic App Connector Name

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FGoogleDirectory%2FPlaybooks%2FGoogle-SuspendUser%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FGoogleDirectory%2FPlaybooks%2FGoogle-SuspendUser%2Fazuredeploy.json)


### Post-Deployment instructions 
#### a. Authorize connections
Once deployment is complete, authorize each connection.
1.	Click the Azure Sentinel connection resource
2.	Click edit API connection
3.	Click Authorize
4.	Sign in
5.	Click Save
6.	Repeat steps for GoogleDirectory and Teams connections.


#### b. Configurations in Sentinel
1. In Microsoft sentinel, analytical rules should be configured to trigger an incident that contains Accounts. In the *Entity maping* section of the analytics rule creation workflow, user email should be mapped to **FullName** identitfier of the **Account** entity type. Check the [documentation](https://docs.microsoft.com/azure/sentinel/map-data-fields-to-entities) to learn more about mapping entities.
2. Configure the automation rules to trigger the playbook. Check the [documentation](https://docs.microsoft.com/azure/sentinel/tutorial-respond-threats-playbook) to learn more about automation rules.

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to GoogleDirectory](../solutions/googledirectory.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

