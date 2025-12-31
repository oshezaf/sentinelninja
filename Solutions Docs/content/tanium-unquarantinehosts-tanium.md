# Tanium-UnquarantineHosts

This playbook starts with a Microsoft Sentinel incident, gets the hosts associated with that incident, then directs Tanium to un-quarantine those hosts. The status of the un-quarantine operation is commented on the Microsoft Sentinel incident. See [Tanium Help](https://help.tanium.com/bundle/ConnectAzureSentinel/page/Integrations/MSFT/ConnectAzureSentinel/Overview.htm) for a guide to setting up the Tanium Connector for Sentinel. Don't forget to **grant the role 'Key Vaults Secret User'** to the

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Tanium](../solutions/tanium.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tanium/Playbooks/Tanium-UnquarantineHosts/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to Tanium](../solutions/tanium.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
