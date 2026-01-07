# Cyble Vision Alerts Bitbucket

Detects exposed secrets in Bitbucket repositories using the Alerts_bit_bucket parser. Creates one incident per matched secret. Includes decoder, detector, commit, file, and repository context for SOC triage.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyble Vision](../solutions/cyble-vision.md) |
| **ID** | `f3c25011-4509-41c8-be27-35d891531c39` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, Exfiltration, Discovery |
| **Techniques** | T1552, T1537, T1083 |
| **Required Connectors** | [CybleVisionAlerts](../connectors/cyblevisionalerts.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyble%20Vision/Analytic%20Rules/Alerts_BitBucket.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Cyble Vision](../solutions/cyble-vision.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
