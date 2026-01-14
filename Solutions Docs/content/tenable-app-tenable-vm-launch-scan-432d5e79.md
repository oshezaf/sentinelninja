# Tenable VM - Launch Scan

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Launches scan by scan id provided during the playbook deployment. 2. Adds information about launched scan as a comment to the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Tenable App](../solutions/tenable-app.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tenable%20App/Playbooks/Playbooks/Tenable-LaunchScan/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [Playbooks/Tenable-LaunchScan/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tenable%20App/Playbooks/Playbooks/Tenable-LaunchScan/readme.md)*

# Tenable-LaunchScan

## Summary

When a new sentinel incident is created, this playbook gets triggered and performs the following actions:

1. Launches scan by scan id provided during the playbook deployment.
2. Adds information about launched scan as a comment to the incident.

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tenable%20App/Playbooks/Playbooks%5CTenable-LaunchScan/playbook_screenshot.png" width="50%"/><br>

### Prerequisites

1. Prior to the deployment of this playbook, [Tenable Vulnerability Management API Connector](../../TenableVulnerabilityManagementConnector/) needs to be deployed under the same subscription.
2. Obtain Tenable API credentials. Follow the instructions in the [documentation](https://developer.tenable.com/docs/authorization).

### Deployment instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required paramteres:
    * Playbook Name: Enter the playbook name here
    * Scan Id: Scan Id to be launched
    * Tenable Vulnerability Management Connector Name: name of the custom Logic App connector

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FTenable%20App%2FPlaybooks%2FPlaybooks%2FTenable-LaunchScan%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FTenable%20App%2FPlaybooks%2FPlaybooks%2FTenable-LaunchScan%2Fazuredeploy.json)

### Post-Deployment instructions

#### a. Authorize connections

Once deployment is complete, authorize each connection.

1. Click the Microsoft Sentinel connection resource
2. Click edit API connection
3. Click Authorize
4. Sign in
5. Click Save
6. Click the Tenable Vulnerability Management connection resource
7. Click edit API connection
8. Provide API key
9. Click Save

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Tenable App](../solutions/tenable-app.md)

