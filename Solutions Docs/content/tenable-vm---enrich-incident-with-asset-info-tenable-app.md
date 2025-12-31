# Tenable VM - Enrich incident with asset info

Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Obtains IPs from the incident. 2. Searches asset information by the IPs in Microsoft Sentinel. 3. Adds obtained information as a comment to the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Tenable App](../solutions/tenable-app.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tenable%20App/Playbooks/Playbooks/Tenable-EnrichIncidentWithAssetsInfo/azuredeploy.json) |

## Tables Used

| Table | Usage |
|:------|:------|
| [`Tenable_VM_Asset_CL`](../tables/tenable-vm-asset-cl.md) | read |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to Tenable App](../solutions/tenable-app.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
