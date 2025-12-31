# NCSCNLShareSTIXBundle

This playbook gets triggered every hour and perform the following actions: 1. Get all the threat intelligence indicators from Microsoft Sentinel Workspace with given tag. 2. Filter all the indicators whose export in not completed. 3. Share the STIX Bundle, that includes the 'Indicator, corresponding Identities, Markings and optional Sighting' with the to provided TAXII server.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [NCSC-NL NDN Cyber Threat Intelligence Sharing](../solutions/ncsc-nl-ndn-cyber-threat-intelligence-sharing.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NCSC-NL%20NDN%20Cyber%20Threat%20Intelligence%20Sharing/Playbooks/NCSCNLShareSTIXBundle/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to NCSC-NL NDN Cyber Threat Intelligence Sharing](../solutions/ncsc-nl-ndn-cyber-threat-intelligence-sharing.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
