# CYFIRMA - Social and Public Exposure - Source Code Exposure on Public Repositories Rule

This rule triggers when CYFIRMA detects source code related to internal or enterprise domains exposed on public platforms like GitHub.  Such exposure may lead to intellectual property leakage or help adversaries understand internal systems, increasing the risk of targeted attacks.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Digital Risk](../solutions/cyfirma-digital-risk.md) |
| **ID** | `28e315a3-725d-4261-a6c2-e597d51541f4` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | ResourceDevelopment, CredentialAccess, Discovery |
| **Techniques** | T1587.001, T1606.001, T1082 |
| **Required Connectors** | [CyfirmaDigitalRiskAlertsConnector](../connectors/cyfirmadigitalriskalertsconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Digital%20Risk/Analytic%20Rules/SPESourceCodeExposureMediumRule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyfirmaSPESourceCodeAlerts_CL`](../tables/cyfirmaspesourcecodealerts-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Cyfirma Digital Risk](../solutions/cyfirma-digital-risk.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

