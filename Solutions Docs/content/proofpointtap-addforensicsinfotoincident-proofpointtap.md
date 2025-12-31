# ProofpointTAP-AddForensicsInfoToIncident

Once a new sentinel incident is created, this playbook gets triggered and performs the following actions: 1. [Gets Forensics](https://help.proofpoint.com/Threat_Insight_Dashboard/API_Documentation/Forensics_API) by the *campaignId*, provided in the alert custom entities. 2. Enriches the incident with Forensics info.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [ProofPointTap](../solutions/proofpointtap.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ProofPointTap/Playbooks/ProofpointTAP-AddForensicsInfoToIncident/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to ProofPointTap](../solutions/proofpointtap.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
