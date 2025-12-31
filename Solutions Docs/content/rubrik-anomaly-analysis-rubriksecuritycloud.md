# Rubrik Anomaly Analysis

This playbook queries Rubrik Security Cloud to enrich the Anomaly event with additional information regarding the Ransomware analysis, results from sensitive data scans, (to aid in incident prioritization), and additional information about the Rubrik cluster. Also it retrieves suspiciousFiles information associated with anomalous snapshot and internally calls RubrikAnomalyGenerateDownloadableLink playbook to get downloadable links and enrich the anomaly incident and RubrikUpdateAnomalyStatus pla

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [RubrikSecurityCloud](../solutions/rubriksecuritycloud.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RubrikSecurityCloud/Playbooks/RubrikAnomalyAnalysis/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to RubrikSecurityCloud](../solutions/rubriksecuritycloud.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
