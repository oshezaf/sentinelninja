# ProofpointPOD - Large size outbound emails

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Search for emails which size is 2 times grater than average size of outbound email for user.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Proofpoint On demand(POD) Email Security](../solutions/proofpoint-on-demand-pod-email-security.md) |
| **ID** | `dd9674cf-898b-4c80-96f1-f70bec66e6fc` |
| **Tactics** | Exfiltration |
| **Required Connectors** | [ProofpointPOD](../connectors/proofpointpod.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Proofpoint%20On%20demand%28POD%29%20Email%20Security/Hunting%20Queries/ProofpointPODLargeOutboundEmails.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md) | — | ✗ |
| [`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md) | — | ✗ |
| [`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md) | — | — |
| [`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md) | — | — |
| [`maillog_CL`](../tables/maillog-cl.md) | — | — |
| [`message_CL`](../tables/message-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Proofpoint On demand(POD) Email Security](../solutions/proofpoint-on-demand-pod-email-security.md)

