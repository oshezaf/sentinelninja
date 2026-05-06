# SpectraAnalyze-EnrichNetworkEntities

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will enrich a network entities (IP addresses, URLs, and domain names) with information from a Spectra Analyze appliance. A comment will be added to the incident with details about the entity.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [ReversingLabs](../solutions/reversinglabs.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ReversingLabs/Playbooks/SpectraAnalyze-EnrichNetworkEntities/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 6 |
| `reversinglabsa1000` | Managed | 1 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)_1*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_(V3)_2*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Entities_-_Get_DNS*: method=`post`, path=`/entities/dnsresolution`
- *Entities_-_Get_IPs*: method=`post`, path=`/entities/ip`
- *Entities_-_Get_URLs*: method=`post`, path=`/entities/url`

**`reversinglabsa1000`** (managedApi):
- *Retrieve_information_for_a_URL_1*: method=`get`, path=`/api/network-threat-intel/url/`
- *Retrieve_information_for_a_domain_1*: method=`get`, path=`/api/network-threat-intel/domain/@{encodeURIComponent(item()?['DomainName'])}/`
- *Retrieve_information_for_an_IP_address_1*: method=`get`, path=`/api/network-threat-intel/ip/@{encodeURIComponent(item()?['Address'])}/report/`

</details>

## Additional Documentation

> 📄 *Source: [SpectraAnalyze-EnrichNetworkEntities/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ReversingLabs/Playbooks/SpectraAnalyze-EnrichNetworkEntities/readme.md)*

Author: Aaron Hoffmann (ReversingLabs)

## Summary
This playbook enriches network entities (IP addresses, URLs, and domains) with information from a ReversingLabs Spectra Analyze (formerly A1000) appliance.

## Prerequisites

You'll need the following:
* A ReversingLabs Spectra Analyze host URL
* A ReversingLabs Spectra Analyze API token


## Deployment instructions
1. Deploy the playbook by clicking on "Deploy to Azure" button. This will take you to deploying an ARM Template wizard.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FReversingLabs%2FPlaybooks%2FSpectraAnalyze-EnrichNetworkEntities%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FReversingLabs%2FPlaybooks%2FSpectraAnalyze-EnrichNetworkEntities%2Fazuredeploy.json)

## Post-deployment

After deploying the template, you'll want to update the playbook connections with your Spectra Analyze API token.

## Screenshots

![Playbook overview](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ReversingLabs/Playbooks/SpectraAnalyze-EnrichNetworkEntities/playbook.png)

## References

- [ReversingLabs content pack installation guide](https://reversinglabs-marketplace.azureedge.net/help/ReversingLabsSentinelContentHubInstall.pdf)
- [Video - How to install and configure the ReversingLabs content pack](https://www.youtube.com/watch?v=gLjMDz618O0)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to ReversingLabs](../solutions/reversinglabs.md)

