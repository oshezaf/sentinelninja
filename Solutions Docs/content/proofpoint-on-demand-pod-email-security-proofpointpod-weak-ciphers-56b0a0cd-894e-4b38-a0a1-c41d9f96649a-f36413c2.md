# ProofpointPOD - Weak ciphers

Detects when weak TLS ciphers are used.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Proofpoint On demand(POD) Email Security](../solutions/proofpoint-on-demand-pod-email-security.md) |
| **ID** | `56b0a0cd-894e-4b38-a0a1-c41d9f96649a` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1573 |
| **Required Connectors** | [ProofpointPOD](../connectors/proofpointpod.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Proofpoint%20On%20demand%28POD%29%20Email%20Security/Analytic%20Rules/ProofpointPODWeakCiphers.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)
- [`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)
- [`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)
- [`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)
- [`maillog_CL`](../tables/maillog-cl.md)
- [`message_CL`](../tables/message-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Proofpoint On demand(POD) Email Security](../solutions/proofpoint-on-demand-pod-email-security.md)

