# Veeam-CollectSecurityComplianceAnalyzerResult

A Microsoft Sentinel playbook that automatically collects Veeam Security Compliance Analyzer results from Veeam Backup & Replication servers on schedule. The playbook gets Veeam Backup & Replication settings from watchlist and calls the GetSecurityComplianceAnalyzerResults function for each enabled server, ingesting the data into custom tables.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Veeam](../solutions/veeam.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam/Playbooks/Veeam-CollectSecurityComplianceAnalyzerResult/Veeam-CollectSecurityComplianceAnalyzerResult.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to Veeam](../solutions/veeam.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
