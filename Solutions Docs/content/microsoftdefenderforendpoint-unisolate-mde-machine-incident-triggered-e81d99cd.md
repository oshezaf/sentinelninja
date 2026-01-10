# Unisolate MDE Machine - Incident Triggered

This playbook will release a machine from isolation in Microsoft Defender for Endpoint. It is triggered by an incident creation in Microsoft Sentinel. The playbook will search for the host entity in the incident and then search for the machine in Microsoft Defender for Endpoint. If the machine is found, it will be unisolated.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MicrosoftDefenderForEndpoint/Playbooks/Unisolate-MDEMachine/Unisolate-MDEMachine-incident-trigger/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to MicrosoftDefenderForEndpoint](../solutions/microsoftdefenderforendpoint.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

