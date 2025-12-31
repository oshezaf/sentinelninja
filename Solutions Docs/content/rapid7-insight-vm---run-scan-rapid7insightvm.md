# Rapid7 Insight VM - Run scan

Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Obtains IPs from the incident. 2. Searches asset ids by the IPs. 3. Obtains a list of scan engines. 4. Sends an adaptive card to the Teams channel where the user can choose an action to be taken. 5. Runs scans for selected IPs using chosen scan engines. 6. Add inforamtions about launched scans as a comment to the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Rapid7InsightVM](../solutions/rapid7insightvm.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Rapid7InsightVM/Playbooks/Playbooks/Rapid7InsightVM-RunScan/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to Rapid7InsightVM](../solutions/rapid7insightvm.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
