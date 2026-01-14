# Enrich-Sentinel-IPQualityScore-Phone-Number-Reputation

This playbook uses the IPQS Fraud and Risk Scoring connector to automatically enrich Phone Numbers found in the Sentinel incidents. This Playbook Template provides the Reputation such as **High Risk, Moderate Risk, Low Risk, Suspicious, Clean** based on Fraud Score. Learn more about the integration via the https://docs.microsoft.com/connectors/ipqsfraudandriskscor/ or visit https://www.ipqualityscore.com/contact-us to request a trial key.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [IPQualityScore](../solutions/ipqualityscore.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IPQualityScore/Playbooks/Enrich-Sentinel-IPQualityScore-Phone-Number-Reputation/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [Enrich-Sentinel-IPQualityScore-Phone-Number-Reputation/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IPQualityScore/Playbooks/Enrich-Sentinel-IPQualityScore-Phone-Number-Reputation/readme.md)*

author: David Mackler, IPQualityScore

This playbook uses the IPQS Fraud and Risk Scoring connector to automatically enrich Phone Numbers found in the Sentinel incidents. This Playbook Template provides the Reputation  such as **High Risk, Moderate Risk, Low Risk, Suspicious, Clean** based on Fraud Score.

Learn more about the integration via the https://docs.microsoft.com/connectors/ipqsfraudandriskscor/ or visit https://www.ipqualityscore.com/contact-us to request a trial key.

## Sentinel Incident Comments Screenshot

![Incident Comments](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IPQualityScore/Playbooks/Enrich-Sentinel-IPQualityScore-Phone-Number-Reputation/Graphics/comments.png)

## Reputation Threat Metrix

![Threat Metrix](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IPQualityScore/Playbooks/Enrich-Sentinel-IPQualityScore-Phone-Number-Reputation/Graphics/phone_threat_metrix.png)

## Link to deploy the Enrich-Sentinel-IPQualityScore-Phone-Number-Reputation playbook template:

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FIPQualityScore%2FPlaybooks%2FEnrich-Sentinel-IPQualityScore-Phone-Number-Reputation%2Fazuredeploy.json)

[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FIPQualityScore%2FPlaybooks%2FEnrich-Sentinel-IPQualityScore-Phone-Number-Reputation%2Fazuredeploy.json)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Playbooks](playbooks.md) · [Back to IPQualityScore](../solutions/ipqualityscore.md)

