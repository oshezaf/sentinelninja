# Tenable VM - Enrich incident with asset info

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Obtains IPs from the incident. 2. Searches asset information by the IPs in Microsoft Sentinel. 3. Adds obtained information as a comment to the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Tenable App](../solutions/tenable-app.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tenable%20App/Playbooks/Playbooks/Tenable-EnrichIncidentWithAssetsInfo/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`Tenable_VM_Asset_CL`](../tables/tenable-vm-asset-cl.md) | — | ✗ |

## Additional Documentation

> 📄 *Source: [Playbooks/Tenable-EnrichIncidentWithAssetsInfo/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tenable%20App/Playbooks/Playbooks/Tenable-EnrichIncidentWithAssetsInfo/readme.md)*

# Tenable-EnrichIncidentWithAssetsInfo

## Summary

When a new sentinel incident is created, this playbook gets triggered and performs the following actions:

1. Obtains IPs from the incident.
2. Searches asset ids by the IPs.
3. Gets assets information.
4. Adds obtained information as a comment to the incident.

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tenable%20App/Playbooks/Playbooks%5CTenable-EnrichIncidentWithAssetsInfo/playbook_screenshot.png" width="50%"/><br>

### Prerequisites

1. Prior to the deployment of this playbook, [TenableVM Data Connector](../../../Data%20Connectors/) should be deployed.

### Deployment instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required paramteres:
    * Playbook Name: Enter the playbook name here

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FTenable%20App%2FPlaybooks%2FPlaybooks%2FTenable-EnrichIncidentWithAssetsInfo%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FTenable%20App%2FPlaybooks%2FPlaybooks%2FTenable-EnrichIncidentWithAssetsInfo%2Fazuredeploy.json)

### Post-Deployment instructions

#### a. Authorize connections

Once deployment is complete, authorize each connection.

1. Click the Microsoft Sentinel connection resource
2. Click edit API connection
3. Click Authorize
4. Sign in
5. Click Save
6. Repeat 1-5 steps for Azure Monitor Logs connection

#### b. Configurations in Sentinel

1. In Microsoft sentinel, analytical rules should be configured to trigger an incident that contains IPs. In the *Entity maping* section of the analytics rule creation workflow, IP should be mapped to **Address** identitfier of the **IP** entity type. Check the [documentation](https://docs.microsoft.com/azure/sentinel/map-data-fields-to-entities) to learn more about mapping entities.
2. Configure the automation rules to trigger the playbook. Check the [documentation](https://docs.microsoft.com/azure/sentinel/tutorial-respond-threats-playbook) to learn more about automation rules.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Tenable App](../solutions/tenable-app.md)

