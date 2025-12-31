# AusCtisExportTaggedIndicators

This playbook gets triggered every hour and perform the following actions: 1. Get all the threat intelligence indicators from Microsoft Sentinel Workspace with given tag. 2. Filter all the indicators whose export in not completed. 3. Export the indicators to provided TAXII server.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Australian Cyber Security Centre](../solutions/australian-cyber-security-centre.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Australian%20Cyber%20Security%20Centre/Playbooks/AusCtisExportTaggedIndicators/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to Australian Cyber Security Centre](../solutions/australian-cyber-security-centre.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
