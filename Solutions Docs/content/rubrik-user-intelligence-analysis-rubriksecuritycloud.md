# Rubrik User Intelligence Analysis

This playbook queries Rubrik Security Cloud to get user sensitive data and update severity of incident accordingly. This playbook calls the RubrikRetrieveUserIntelligenceInformation playbook internally to get user risk details and policy hits details to enrich the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [RubrikSecurityCloud](../solutions/rubriksecuritycloud.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RubrikSecurityCloud/Playbooks/RubrikUserIntelligenceAnalysis/azuredeploy.json) |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to RubrikSecurityCloud](../solutions/rubriksecuritycloud.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
