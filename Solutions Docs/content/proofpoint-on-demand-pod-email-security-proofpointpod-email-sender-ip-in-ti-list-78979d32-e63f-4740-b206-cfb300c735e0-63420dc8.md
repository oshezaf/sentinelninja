# ProofpointPOD - Email sender IP in TI list

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Email sender IP in TI list.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Proofpoint On demand(POD) Email Security](../solutions/proofpoint-on-demand-pod-email-security.md) |
| **ID** | `78979d32-e63f-4740-b206-cfb300c735e0` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration, InitialAccess |
| **Techniques** | T1078, T1567 |
| **Required Connectors** | [ThreatIntelligence](../connectors/threatintelligence.md), [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md), [ProofpointPOD](../connectors/proofpointpod.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Proofpoint%20On%20demand%28POD%29%20Email%20Security/Analytic%20Rules/ProofpointPODEmailSenderIPinTIList.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ProofpointPODMailLog_CL`](../tables/proofpointpodmaillog-cl.md)
- [`ProofpointPODMessage_CL`](../tables/proofpointpodmessage-cl.md)
- [`ProofpointPOD_maillog_CL`](../tables/proofpointpod-maillog-cl.md)
- [`ProofpointPOD_message_CL`](../tables/proofpointpod-message-cl.md)
- [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)
- [`maillog_CL`](../tables/maillog-cl.md)
- [`message_CL`](../tables/message-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Proofpoint On demand(POD) Email Security](../solutions/proofpoint-on-demand-pod-email-security.md)

