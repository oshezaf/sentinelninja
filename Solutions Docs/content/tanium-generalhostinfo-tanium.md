# Tanium-GeneralHostInfo

Tanium's real-time data can speed up investigations by providing important context for analysts, such as basic information about the computer's name, IP, and storage information. This playbook starts with a Microsoft Sentinel incident, gets the hosts associated with that incident, queries the Tanium API Gateway for general endpoint information for those hosts, and then adds a comment to the incident with that information. See [Tanium Help](https://help.tanium.com/bundle/ConnectAzureSentinel/page

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Tanium](../solutions/tanium.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tanium/Playbooks/Tanium-GeneralHostInfo/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to Tanium](../solutions/tanium.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
