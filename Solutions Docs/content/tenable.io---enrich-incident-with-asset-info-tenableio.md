# Tenable.io - Enrich incident with asset info

Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Obtains IPs from the incident. 2. Searches asset information by the IPs in Microsoft Sentinel. 3. Adds obtained information as a comment to the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [TenableIO](../solutions/tenableio.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TenableIO/Playbooks/Playbooks/Tenable-EnrichIncidentWithAssetsInfo/azuredeploy.json) |

## Tables Used

| Table | Usage |
|:------|:------|
| [`Tenable_IO_Assets_CL`](../tables/tenable-io-assets-cl.md) | read |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to TenableIO](../solutions/tenableio.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
