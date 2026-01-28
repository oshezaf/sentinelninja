# SpectraAnalyze-EnrichFileHash

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will enrich a Microsoft Sentinel incident with file hash information from a Spectra Analyze appliance. A comment will be added to the incident with details about the file.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [ReversingLabs](../solutions/reversinglabs.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ReversingLabs/Playbooks/SpectraAnalyze-EnrichFileHash/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [SpectraAnalyze-EnrichFileHash/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ReversingLabs/Playbooks/SpectraAnalyze-EnrichFileHash/readme.md)*

Author: Aaron Hoffmann (ReversingLabs)

This playbook enriches file hash entities with information from a ReversingLabs Spectra Analyze (formerly A1000) appliance.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FReversingLabs%2FPlaybooks%2FSpectraAnalyze-EnrichFileHash%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FReversingLabs%2FPlaybooks%2FSpectraAnalyze-EnrichFileHash%2Fazuredeploy.json)
## Prerequisites

You'll need the following:
* A ReversingLabs Spectra Analyze Appliance URL
* A Spectra Analyze API Token


## Post-deployment

After deploying the template, you'll want to update the playbook connections with your Spectra Analyze API token.

## Screenshots

![Playbook overview](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ReversingLabs/Playbooks/SpectraAnalyze-EnrichFileHash/playbook.jpg)

## References

- [ReversingLabs content pack installation guide](https://reversinglabs-marketplace.azureedge.net/help/ReversingLabsSentinelContentHubInstall.pdf)
- [Video - How to install and configure the ReversingLabs content pack](https://www.youtube.com/watch?v=gLjMDz618O0)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to ReversingLabs](../solutions/reversinglabs.md)

