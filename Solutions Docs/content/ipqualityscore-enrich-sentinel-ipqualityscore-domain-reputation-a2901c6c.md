# Enrich_Sentinel_IPQualityScore_Domain_Reputation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook uses the IPQS Fraud and Risk Scoring connector to automatically enrich Domain's found in the Sentinel incidents. This Playbook Template provides the Reputation such as **Critical, High Risk, Moderate Risk, Low Risk, Suspicious, Clean** based on Risk Score. Learn more about the integration via the https://docs.microsoft.com/connectors/ipqsfraudandriskscor/ or visit https://www.ipqualityscore.com/contact-us to request a trial key.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [IPQualityScore](../solutions/ipqualityscore.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IPQualityScore/Playbooks/Enrich_Sentinel_IPQualityScore_Domain_Reputation/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 3 |
| `ipqsfraudandriskscor` | Managed | 1 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Entities_-_Get_Hosts*: method=`post`, path=`/entities/host`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Alert_-_Get_incident_2*: method=`get`, path=`/Incidents/subscriptions/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/resourceGroups/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/workspaces/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/alerts/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}`

**`ipqsfraudandriskscor`** (managedApi):
- *Retrieve_URL_(or)_Domain_reputation_data*: method=`post`, path=`/url`

</details>

## Additional Documentation

> 📄 *Source: [Enrich_Sentinel_IPQualityScore_Domain_Reputation/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IPQualityScore/Playbooks/Enrich_Sentinel_IPQualityScore_Domain_Reputation/readme.md)*

author: David Mackler, IPQualityScore

This playbook uses the IPQS Fraud and Risk Scoring connector to automatically enrich Domain's found in the Sentinel incidents. This Playbook Template provides the Reputation such as **Critical, High Risk, Moderate Risk, Low Risk, Suspicious, Clean** based on Risk Score. 
Learn more about the integration via the https://docs.microsoft.com/connectors/ipqsfraudandriskscor/ or visit https://www.ipqualityscore.com/contact-us to request a trial key.

## Sentinel Incident Comments Screenshot

![Incident Comments](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IPQualityScore/Playbooks/Enrich_Sentinel_IPQualityScore_Domain_Reputation/Graphics/comments.png)

## Reputation Threat Metrix

![Threat Metrix](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IPQualityScore/Playbooks/Enrich_Sentinel_IPQualityScore_Domain_Reputation/Graphics/domain_threat_metrix.png)

## Links to deploy the Enrich_Sentinel_IPQualityScore_Domain_Reputation playbook template:

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FIPQualityScore%2FPlaybooks%2FEnrich_Sentinel_IPQualityScore_Domain_Reputation%2Fazuredeploy.json)

[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FIPQualityScore%2FPlaybooks%2FEnrich_Sentinel_IPQualityScore_Domain_Reputation%2Fazuredeploy.json)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to IPQualityScore](../solutions/ipqualityscore.md)

