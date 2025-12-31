# Entity (IP, URL, FileHash) Enrichment - Minemeld

This playbook search for indicators in Minemeld related to the entities(IP, filehash, URL) gathered from Sentinel incident. If the search result is positive a comment will be added to enrich the incident, if not a comment stating no information available on Minemeld for searched indicator will be added to the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Minemeld](../solutions/minemeld.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Minemeld/Playbooks/MinemeldPlaybooks/Minemeld-EnrichIncident/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to Minemeld](../solutions/minemeld.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
