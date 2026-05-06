# SpectraIntelligence-EnrichNetworkEntities

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will enrich a Microsoft Sentinel Incident with information about network entities (IP addresses, URLs, and domain names) from ReversingLabs Spectra Intelligence (formerly TitaniumCloud). A comment will be added to the incident with details about the entity.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [ReversingLabs](../solutions/reversinglabs.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ReversingLabs/Playbooks/SpectraIntelligence-EnrichNetworkEntities/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 6 |
| [`reversinglabstitaniu`](../logic-apps/managed-reversinglabstitaniu.md) | Managed | 1 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_comment_to_incident_(V3)_1 | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_(V3)_2 | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |
| Entities_-_Get_DNS | post | `/entities/dnsresolution` | — |
| Entities_-_Get_IPs | post | `/entities/ip` | — |
| Entities_-_Get_URLs | post | `/entities/url` | — |

#### [`reversinglabstitaniu`](../logic-apps/managed-reversinglabstitaniu.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_the_URL_report | post | `/api/networking/url/v1/report/query/json` | — |
| Get_the_domain_report | post | `/api/networking/domain/report/v1/query/json` | — |
| Get_the_IP_address_report | post | `/api/networking/ip/report/v1/query/json` | — |

</details>

## Additional Documentation

> 📄 *Source: [SpectraIntelligence-EnrichNetworkEntities/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ReversingLabs/Playbooks/SpectraIntelligence-EnrichNetworkEntities/readme.md)*

Author: Aaron Hoffmann (ReversingLabs)

## Summary
This playbook enriches network entities (IP addresses, URLs, and domains) with information from ReversingLabs Spectra Intelligence (formerly TitaniumCloud).

## Prerequisites

You'll need the following:
* A ReversingLabs Spectra Intelligence username
* A ReversingLabs Spectra Intelligence password


## Deployment instructions
1. Deploy the playbook by clicking on "Deploy to Azure" button. This will take you to deploying an ARM Template wizard.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FReversingLabs%2FPlaybooks%2FSpectraIntelligence-EnrichNetworkEntities%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FReversingLabs%2FPlaybooks%2FSpectraIntelligence-EnrichNetworkEntities%2Fazuredeploy.json)

## Post-deployment

a. Authorize connections (Perform this action if needed)
Once deployment is complete, you will need to authorize each connection.

1. Click the Microsoft Sentinel connection resource
2. Click edit API connection
3. Click Authorize
4. Sign in
5. Click Save
6. Repeat steps for the ReversingLabs TitaniumCloud Connection (For authorizing the connection, a TitaniumCloud username and password needs to be provided)

## Screenshots

![Playbook overview](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ReversingLabs/Playbooks/SpectraIntelligence-EnrichNetworkEntities/playbook.png)

## References

- [ReversingLabs content pack installation guide](https://reversinglabs-marketplace.azureedge.net/help/ReversingLabsSentinelContentHubInstall.pdf)
- [Video - How to install and configure the ReversingLabs content pack](https://www.youtube.com/watch?v=gLjMDz618O0)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to ReversingLabs](../solutions/reversinglabs.md)

