# CiscoISE-False Positives Clear Policies

This playbook gets triggered when a new sentinel incident is created 1.For each MAC address (MACAddress provided in the alert custom entities) in the incident checks if it is was rejected in Cisco ISE. 2.If MAC address was rejected, checks if it is in the safe list (safe list is a custom [Watchlist](https://docs.microsoft.com/azure/sentinel/watchlists) that contains safe MAC addresses). If it is in safe list, releases endpoint with this MAC address in Cisco ISE. 3.Adds comment to the incident wi

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Cisco ISE](../solutions/cisco-ise.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20ISE/Playbooks/CiscoISE-FalsePositivesClearPolicies/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to Cisco ISE](../solutions/cisco-ise.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
