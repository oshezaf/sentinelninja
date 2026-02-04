# ProofpointPOD - Suspicious file types in attachments

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Hunting for suspicious file types in attachments.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Proofpoint On demand(POD) Email Security](../solutions/proofpoint-on-demand-pod-email-security.md) |
| **ID** | `7b281f4a-6a9a-439f-8b4f-f08eb24f2fb7` |
| **Tactics** | InitialAccess |
| **Required Connectors** | [ProofpointPOD](../connectors/proofpointpod.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Proofpoint%20On%20demand%28POD%29%20Email%20Security/Hunting%20Queries/ProofpointPODSuspiciousFileTypesInAttachments.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md) | — | ✗ | ✓ |
| [`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md) | — | ✗ | ✓ |
| [`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md) | — | — | — |
| [`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md) | — | — | — |
| [`maillog_CL`](../tables/maillog-cl.md) | — | — | — |
| [`message_CL`](../tables/message-cl.md) | — | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Proofpoint On demand(POD) Email Security](../solutions/proofpoint-on-demand-pod-email-security.md)

