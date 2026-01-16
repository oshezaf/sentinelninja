# Service Principal Authentication Attempt from New Country

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

'Detects when there is a Service Principal login attempt from a country that has not seen a successful login in the previous 14 days.   Threat actors may attempt to authenticate with credentials from compromised accounts - monitoring attempts from anomalous locations may help identify these attempts.   Authentication attempts should be investigated to ensure the activity was legitimate and if there is other similar activity.   Ref: https://docs.microsoft.com/azure/active-directory/fundamentals/s

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `1baaaf00-655f-4de9-8ff8-312e902cda71` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1078.004 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Detections/Analytic%20Rules/SigninLogs/ServicePrincipalAuthenticationAttemptfromNewCountry.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Standalone Content](../solutions/standalone-content.md)

