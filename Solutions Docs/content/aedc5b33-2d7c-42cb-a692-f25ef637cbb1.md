# ProofpointPOD - Possible data exfiltration to private email

Detects when sender sent email to the non-corporate domain and recipient's username is the same as sender's username.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Proofpoint On demand(POD) Email Security](../solutions/proofpoint-on-demand%28pod%29-email-security.md) |
| **ID** | `aedc5b33-2d7c-42cb-a692-f25ef637cbb1` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [ProofpointPOD](../connectors/proofpointpod.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Proofpoint%20On%20demand%28POD%29%20Email%20Security/Analytic%20Rules/ProofpointPODDataExfiltrationToPrivateEmail.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Proofpoint On demand(POD) Email Security](../solutions/proofpoint-on-demand%28pod%29-email-security.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
