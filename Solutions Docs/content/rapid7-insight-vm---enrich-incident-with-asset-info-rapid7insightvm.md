# Rapid7 Insight VM - Enrich incident with asset info

Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Obtains IPs from the incident. 2. Searches asset ids by the IPs. 3. Gets assets information. 4. Adds obtained information as a comment to the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Rapid7InsightVM](../solutions/rapid7insightvm.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Rapid7InsightVM/Playbooks/Playbooks/Rapid7InsightVM-EnrichIncidentWithAssetInfo/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to Rapid7InsightVM](../solutions/rapid7insightvm.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
