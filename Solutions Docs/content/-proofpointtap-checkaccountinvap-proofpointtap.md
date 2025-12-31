#  ProofpointTAP-CheckAccountInVAP

Once a new sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Gets [Very Attacked People](https://help.proofpoint.com/Threat_Insight_Dashboard/API_Documentation/People_API#.2Fv2.2Fpeople.2Fvap) for the latest 14 days. 2. Enriches the incident with information whether incident's users are in VAP list and changes incident severity.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [ProofPointTap](../solutions/proofpointtap.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ProofPointTap/Playbooks/ProofpointTAP-CheckAccountInVAP/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to ProofPointTap](../solutions/proofpointtap.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
