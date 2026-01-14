# Post-Message-Teams

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Author: Yaniv Shasha

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SentinelSOARessentials](../solutions/sentinelsoaressentials.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Post-Message-Teams/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [Post-Message-Teams/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Post-Message-Teams/readme.md)*

Author: Yaniv Shasha

This playbook will post a message in a Microsoft Teams channel when an Alert is created in Microsoft Sentinel

## Prerequisites

MS teams Account that allow to post messages

## Quick Deployment
**Deploy with incident trigger** (recommended)

After deployment, attach this playbook to an **automation rule** so it runs when the incident is created.

[Learn more about automation rules](https://docs.microsoft.com/azure/sentinel/automate-incident-handling-with-automation-rules#creating-and-managing-automation-rules)
 
 
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSentinelSOARessentials%2FPlaybooks%2FPost-Message-Teams%2Fincident-trigger%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSentinelSOARessentials%2FPlaybooks%2FPost-Message-Teams%2Fincident-trigger%2Fazuredeploy.json)


**Deploy with alert trigger**

After deployment, you can run this playbook manually on an alert or attach it to an **analytics rule** so it will runs when an alert is created.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSentinelSOARessentials%2FPlaybooks%2FPost-Message-Teams%2Falert-trigger%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSentinelSOARessentials%2FPlaybooks%2FPost-Message-Teams%2Falert-trigger%2Fazuredeploy.json)

## Screenshots
**Incident Trigger**
![Incident TriggerL](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Post-Message-Teams/incident-trigger/images/designerLight.png)
![Incident TriggerD](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Post-Message-Teams/incident-trigger/images/designerDark.png)

**Alert Trigger**
![Alert Trigger](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Post-Message-Teams/alert-trigger/images/designerAlertLight.png)

**Microsoft Teams**
![Teams](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Post-Message-Teams/images/TeamsDark.png)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Playbooks](playbooks.md) · [Back to SentinelSOARessentials](../solutions/sentinelsoaressentials.md)

