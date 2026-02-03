# AbuseIPDB Enrich Incident By IP Info

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Once a new sentinal incident is created, this playbook gets triggered and performs the following actions: 1. [Gets Information](https://docs.abuseipdb.com/#check-endpoint) from AbuseIPDB by IP`s, provided in the alert custom entities. 2. Enriches the incident with the obtained info.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [AbuseIPDB](../solutions/abuseipdb.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbuseIPDB/Playbooks/AbuseIPDB-EnrichIncidentByIPInfo/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [AbuseIPDB-EnrichIncidentByIPInfo/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbuseIPDB/Playbooks/AbuseIPDB-EnrichIncidentByIPInfo/readme.md)*

# AbuseIPDB-EnrichIncidentByIPInfo
 ## Summary
 Once a new sentinal incident is created, this playbook gets triggered and performs the following actions:
 1. [Gets Information](https://docs.abuseipdb.com/#check-endpoint) from AbuseIPDB by IP`s, provided in the alert custom entities. 
 2. Enriches the incident with the obtained info.

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbuseIPDB/Playbooks/AbuseIPDB-EnrichIncidentByIPInfo/playbook_screenshot.png" width="80%"/><br>
### Prerequisites 
1. AbuseIPDBAPI Custom Connector has to be deployed prior to the deployment of this playbook under the same subscription.

### Deployment instructions 
1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required paramteres:
    * Playbook Name: Enter the playbook name here

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FAbuseIPDB%2FPlaybooks%2FAbuseIPDB-EnrichIncidentByIPInfo%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FAbuseIPDB%2FPlaybooks%2FAbuseIPDB-EnrichIncidentByIPInfo%2Fazuredeploy.json)


### Post-Deployment instructions 
#### a. Authorize connections
Once deployment is complete, authorize each connection.

1. Open playbook which has been deployed
2. Click API connection on left side blade
3. Click the Microsoft Sentinel connection resource
4. Click edit API connection
5. Click Authorize
6. Sign in
7. Click Save
8. Repeat steps for AbuseIPDBAPI connector API Connection
#### b. Configurations in Sentinel
1. In Microsoft Sentinel, analytical rules should be configured to trigger an incident. 
2. Configure the automation rules to trigger the playbook.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to AbuseIPDB](../solutions/abuseipdb.md)

