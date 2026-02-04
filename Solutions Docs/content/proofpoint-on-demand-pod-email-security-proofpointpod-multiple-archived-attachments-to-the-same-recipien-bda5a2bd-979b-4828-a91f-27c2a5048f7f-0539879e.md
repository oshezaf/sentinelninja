# ProofpointPOD - Multiple archived attachments to the same recipient

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when multiple emails where sent to the same recipient with large archived attachments.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Proofpoint On demand(POD) Email Security](../solutions/proofpoint-on-demand-pod-email-security.md) |
| **ID** | `bda5a2bd-979b-4828-a91f-27c2a5048f7f` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration |
| **Techniques** | T1567 |
| **Required Connectors** | [ProofpointPOD](../connectors/proofpointpod.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Proofpoint%20On%20demand%28POD%29%20Email%20Security/Analytic%20Rules/ProofpointPODMultipleArchivedAttachmentsToSameRecipient.yaml) |

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

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Proofpoint On demand(POD) Email Security](../solutions/proofpoint-on-demand-pod-email-security.md)

