# Notify Incident Owner in Microsoft Teams

This playbook sends a Teams message to the new incident owner.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SentinelSOARessentials](../solutions/sentinelsoaressentials.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Notify-Owner/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [Notify-Owner/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Notify-Owner/readme.md)*

author: Lior Tamir

This playbook sends a Teams message to the new incident owner.

# Prerequisites

Microsoft Teams account that allows to send messages.

# Quick Deployment
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSentinelSOARessentials%2FPlaybooks%2FNotify-Owner%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/deploytoazuregov.png)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSentinelSOARessentials%2FPlaybooks%2FNotify-Owner%2Fazuredeploy.json)
<br><br>

# Post-deployment
Add playbook as an action to the automation rule 
- Trigger = When incident is updated;  
- Condition = Owner changed.<br>


# Screenshots

**Playbook** <br>
![playbook screenshot](./images/designerLight.png)<br>

**Teams message** <br>
![teams notification](./images/ownerTeamsMessage.png)<br><br>

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to SentinelSOARessentials](../solutions/sentinelsoaressentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
