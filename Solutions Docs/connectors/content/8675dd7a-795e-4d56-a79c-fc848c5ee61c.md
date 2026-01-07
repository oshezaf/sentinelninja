# Malware Link Clicked

This query identifies a user clicking on an email link whose threat category is classified as a malware

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [ProofPointTap](../solutions/proofpointtap.md) |
| **ID** | `8675dd7a-795e-4d56-a79c-fc848c5ee61c` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1566.002 |
| **Required Connectors** | [ProofpointTAPv2](../connectors/proofpointtapv2.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ProofPointTap/Analytic%20Rules/MalwareLinkClicked.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ProofPointTAPClicksPermittedV2_CL`](../tables/proofpointtapclickspermittedv2-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to ProofPointTap](../solutions/proofpointtap.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
