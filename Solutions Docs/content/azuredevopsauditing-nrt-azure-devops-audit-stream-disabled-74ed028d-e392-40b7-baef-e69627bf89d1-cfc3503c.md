# NRT Azure DevOps Audit Stream Disabled

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Azure DevOps allow for audit logs to be streamed to external storage solutions such as SIEM solutions. An attacker looking to hide malicious Azure DevOps activity from defenders may look to disable data streams before conducting activity and then re-enabling the stream after (so as not to raise data threshold-based alarms). Looking for disabled audit streams can identify this activity, and due to the nature of the action its unlikely to have a high false positive rate.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [AzureDevOpsAuditing](../solutions/azuredevopsauditing.md) |
| **ID** | `74ed028d-e392-40b7-baef-e69627bf89d1` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | NRT |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1562.008 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureDevOpsAuditing/Analytic%20Rules/NRT_ADOAuditStreamDisabled.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ADOAuditLogs_CL`](../tables/adoauditlogs-cl.md)
- [`AzureDevOpsAuditing`](../tables/azuredevopsauditing.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to AzureDevOpsAuditing](../solutions/azuredevopsauditing.md)

