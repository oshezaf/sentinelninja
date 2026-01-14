# Azure DevOps Service Connection Addition/Abuse - Historic allow list

This detection builds an allow list of historic service connection use by Builds and Releases and compares to recent history, flagging growth of service connection use which are not manually included in the allow list and not historically included in the allow list Build/Release runs. This is to determine if someone is hijacking a build/release and adding many service connections in order to abuse or dump credentials from service connections.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [AzureDevOpsAuditing](../solutions/azuredevopsauditing.md) |
| **ID** | `5efb0cfd-063d-417a-803b-562eae5b0301` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence, Impact |
| **Techniques** | T1098, T1496 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureDevOpsAuditing/Analytic%20Rules/AzDOHistoricServiceConnectionAdds.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ADOAuditLogs_CL`](../tables/adoauditlogs-cl.md)
- [`AzureDevOpsAuditing`](../tables/azuredevopsauditing.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to AzureDevOpsAuditing](../solutions/azuredevopsauditing.md)

