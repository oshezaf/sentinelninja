# CiscoUmbrella-AssignPolicyToIdentity

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook provides an automated way to associate an identity to an existing policy in Cisco Cloud Security. For more details, click [here](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoUmbrella/Playbooks/CiscoUmbrellaPlaybooks/CiscoUmbrella-AssignPolicyToIdentity/readme.md#summary).

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [CiscoUmbrella](../solutions/ciscoumbrella.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoUmbrella/Playbooks/CiscoUmbrellaPlaybooks/CiscoUmbrella-AssignPolicyToIdentity/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [CiscoUmbrellaPlaybooks/CiscoUmbrella-AssignPolicyToIdentity/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoUmbrella/Playbooks/CiscoUmbrellaPlaybooks/CiscoUmbrella-AssignPolicyToIdentity/readme.md)*

## Summary

When a new sentinel incident is created, this playbook gets triggered and performs the following actions

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoUmbrella/Playbooks/CiscoUmbrellaPlaybooks%5CCiscoUmbrella-AssignPolicyToIdentity/Images/playbook_screenshot_new.png" width="30%"/><br>

1. Assigns a new DNS or web policy (*PolicyId* is provided on the playbook deployment step) to an identity (*originId* of the identity provided in the alert custom entities).
2. Adds comment to the incident with information about the assigned policies.

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoUmbrella/Playbooks/CiscoUmbrellaPlaybooks%5CCiscoUmbrella-AssignPolicyToIdentity/Images/commentOnIncident.png" width="60%"/><br>

### Prerequisites

1. Login to Cisco Cloud Security dashboard and navigating to Admin-->API Keys. Create New API Key if not already created and select the appropriate "Key Scope" with Read/Write permission. Store "Api Key" and "Key Secret" to a safe place. This "Api Key" is a "Client Id" and "Key Secret" is a "Secret" used for this Playbook.
2. Store the "Api Key" and "Key Secret" from previous step to Key vault Secrets. 
3. To obtain the Organization ID and Policy ID, press F12 or right-click on the page and select 'Inspect' in your browser on the Cisco Cloud Security dashboard page. Then, navigate to the 'Policies' section and click on the 'All Policies' tab. Now open the 'Network' tab and search with 'policy'. Open the 'Response' tab of the request to get the Policy ID and Organization ID as shown in the screenshot below.

    > **NOTE:** The **ID** and **OrganizationID** values in the screenshot below are for illustration purposes only and are not intended for actual use.

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoUmbrella/Playbooks/CiscoUmbrellaPlaybooks%5CCiscoUmbrella-AssignPolicyToIdentity/Images/orgIdAndPolicyId.png" width="60%"/><br>

### Deployment instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
    * Playbook Name: Enter the playbook name here.
    * Cisco Cloud Security Organization Id: Organization id in Cisco Cloud Security.
    * Cisco Cloud Security Policy Id: ID of the DNS or web policy to act upon.
    * Keyvault name: Name of the key vault where secrets are stored.
    * Cloud Security API Client Id Key Name: Name of the Secrets field from Keyvault where Cisco Cloud Security "API Key" value is stored.
    * Cloud Security API Secret Key Name: Name of the Secrets field from Keyvault where Cisco Cloud Security "Key Secret" value is stored.
    * Host End Point: Default is "api.umbrella.com" and is used for any API call to Cisco Cloud Security REST API's.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCiscoUmbrella%2FPlaybooksk%2FCiscoUmbrellaPlaybooks%2FCiscoUmbrella-AssignPolicyToIdentity%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCiscoUmbrella%2FPlaybooks%2FCiscoUmbrellaPlaybooks%2FCiscoUmbrella-AssignPolicyToIdentity%2Fazuredeploy.json)

### Post-Deployment instructions

#### a. Authorize connections

Once deployment is complete, authorize each connection.

1. Click the Microsoft Sentinel connection resource
2. Click edit API connection
3. Click Authorize
4. Sign in
5. Click Save
6. Repeat steps for Cisco Cloud Security Network Device Management connector API Connection. Provide your key and the secret for authorizing.

#### b. Configurations in Sentinel

1. In Microsoft sentinel, analytical rules should be configured to trigger an incident. An incident should have the *originId* custom entity. OriginId is an Umbrella-wide unique identifier for this traffic source (origin). It can be obtained from the corresponding field in Cisco Cloud Security logs. Check the [documentation](https://docs.microsoft.com/azure/sentinel/surface-custom-details-in-alerts) to learn more about adding custom entities to incidents.
2. Configure the automation rules to trigger the playbook.

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

#### d. Assign access policy on key vault for Playbook to fetch the secret key

*[Content truncated...]*

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Playbooks](playbooks.md) · [Back to CiscoUmbrella](../solutions/ciscoumbrella.md)

