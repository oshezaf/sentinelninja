# Search for Breaches - ShadowByte Aria

This playbook updates the Incident with the brach details if an account has been compromised.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [ShadowByte Aria](../solutions/shadowbyte-aria.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ShadowByte%20Aria/Playbooks/ShadowByte_Aria_Search_for_Breaches/azuredeploy.json) |

## Tables Used

| Table | Usage |
|:------|:------|
| [`ShadowByteAriaForums_CL`](../tables/shadowbyteariaforums-cl.md) | write |

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

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to ShadowByte Aria](../solutions/shadowbyte-aria.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
