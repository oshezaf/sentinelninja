# High risk Office operation conducted by IP Address that recently attempted to log into a disabled account

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

'It is possible that a disabled user account is compromised and another account on the same IP is used to perform operations that are not typical for that user.  The query filters the SigninLogs for entries where ResultType is indicates a disabled account and the TimeGenerated is within a defined time range.  It then summarizes these entries by IPAddress and AppId, calculating various statistics such as number of login attempts, distinct UPNs, App IDs etc and joins these results with another set

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `9adbd1c3-a4be-44ef-ac2f-503fd25692ee` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Persistence, Collection |
| **Techniques** | T1078, T1098, T1114 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [Office365](../connectors/office365.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Detections/Analytic%20Rules/MultipleDataSources/DisabledAccIPSigninWithRareRiskyOps.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`OfficeActivity`](../tables/officeactivity.md)
- [`SigninLogs`](../tables/signinlogs.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Standalone Content](../solutions/standalone-content.md)

