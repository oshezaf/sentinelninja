# Search for Breaches - ShadowByte Aria

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook updates the Incident with the brach details if an account has been compromised.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [ShadowByte Aria](../solutions/shadowbyte-aria.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ShadowByte%20Aria/Playbooks/ShadowByte_Aria_Search_for_Breaches/azuredeploy.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ShadowByteAriaForums_CL`](../tables/shadowbyteariaforums-cl.md) | ? | ✓ | ? |

## Additional Documentation

> 📄 *Source: [ShadowByte_Aria_Search_for_Breaches/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ShadowByte%20Aria/Playbooks/ShadowByte_Aria_Search_for_Breaches/readme.md)*

Author: ShadowByte

This playbook updates the Incident with the brach details if an account has been compromised.

## prerequisites
* ShadowByte Aria Custom Connector needs to be deployed and configured prior to the deployment of this playbook under the same resource group.

## screenshots:
![screenshot1](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ShadowByte%20Aria/Playbooks/ShadowByte_Aria_Search_for_Breaches/images/screenshot.png)

## deploy to Azure
<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FShadowByte%2520Aria%2FPlaybooks%2FShadowByte_Aria_Search_for_Breaches%2Fazuredeploy.json" target="_blank">
    <img src="https://aka.ms/deploytoazurebutton""/>
</a>
<a href="https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FShadowByte%2520Aria%2FPlaybooks%2FShadowByte_Aria_Search_for_Breaches%2Fazuredeploy.json" target="_blank">
<img src="https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/deploytoazuregov.png"/>
</a>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Playbooks](playbooks.md) · [Back to ShadowByte Aria](../solutions/shadowbyte-aria.md)

