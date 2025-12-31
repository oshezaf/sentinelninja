# Isolate MDE Machine using entity trigger

This playbook will isolate Microsoft Defender for Endpoint MDE device using entity trigger. It will be triggered by Microsoft Sentinel when an entity of type 'Host' is detected in an incident. The playbook retrieves the list of machines from MDE, checks if the entity's hostname exists in that list, and if it does, it isolates the machine and adds a comment to the incident indicating that the host has been successfully isolated. If the hostname does not exist in MDE, it adds a comment indicating

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MicrosoftDefenderForEndpoint/Playbooks/Isolate-MDEMachine/Isolate-MDE-Machine-entity-trigger/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
