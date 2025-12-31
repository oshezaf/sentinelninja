# CiscoISE-TakeEndpointActionFromTeams

When a new sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Sends an adaptive card to the Teams channel where the analyst can choose an action to be taken. 2. Assigns a policy (policy name is provided during the deployment stage) to an endpoint (*MACAddress* of the endpoint is provided in the alert custom entities) depending on the action chosen in the adaptive card. 3. Changes incident status and severity depending on the action chosen in the ada

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Cisco ISE](../solutions/cisco-ise.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20ISE/Playbooks/CiscoISE-TakeEndpointActionFromTeams/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to Cisco ISE](../solutions/cisco-ise.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
