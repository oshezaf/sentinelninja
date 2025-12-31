# The Hive - Create case

Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Creates case in TheHive instance with enriched description and title. 2. Gets Hosts, IPs entities. 3. Creates task and bind it to case. 4. Creates observables with hosts and IPs for created case.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [TheHive](../solutions/thehive.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TheHive/Playbooks/TheHive-CreateCase/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to TheHive](../solutions/thehive.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
