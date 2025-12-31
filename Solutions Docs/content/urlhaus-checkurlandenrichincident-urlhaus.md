# URLhaus-CheckURLAndEnrichIncident

Once a new Microsoft Sentinel incident is created, this playbook gets triggered and performs the following actions: 1. [Gets Information](https://urlhaus-api.abuse.ch/#payloadinfo) from URLhaus by hashes, provided in the alert custom entities. 2. Enriches the incident with the obtained info.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [URLhaus](../solutions/urlhaus.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/URLhaus/Playbooks/URLhaus-CheckURLAndEnrichIncident/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to URLhaus](../solutions/urlhaus.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
