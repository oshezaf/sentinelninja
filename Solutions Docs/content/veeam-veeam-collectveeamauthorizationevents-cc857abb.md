# Veeam-CollectVeeamAuthorizationEvents

This Microsoft Sentinel playbook automatically collects Veeam authorization events Veeam Backup & Replication servers on schedule. The playbook gets Veeam Backup & Replication settings from watchlist and calls the GetAllAuthorizationEventsAsync function for each enabled server, ingesting the data into custom tables.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Veeam](../solutions/veeam.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam/Playbooks/Veeam-CollectVeeamAuthorizationEvents/CollectVeeamAuthorizationEventsPlaybook.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to Veeam](../solutions/veeam.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

