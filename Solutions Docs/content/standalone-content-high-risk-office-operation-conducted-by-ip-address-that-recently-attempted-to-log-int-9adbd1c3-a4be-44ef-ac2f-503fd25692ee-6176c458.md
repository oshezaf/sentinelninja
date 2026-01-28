# High risk Office operation conducted by IP Address that recently attempted to log into a disabled account

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'It is possible that a disabled user account is compromised and another account on the same IP is used to perform operations that are not typical for that user.  The query filters the SigninLogs for entries where ResultType is indicates a disabled account and the TimeGenerated is within a defined time range.  It then summarizes these entries by IPAddress and AppId, calculating various statistics such as number of login attempts, distinct UPNs, App IDs etc and joins these results with another set

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `9adbd1c3-a4be-44ef-ac2f-503fd25692ee` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Persistence, Collection |
| **Techniques** | T1078, T1098, T1114 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [Office365](../connectors/office365.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/MultipleDataSources/DisabledAccIPSigninWithRareRiskyOps.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`OfficeActivity`](../tables/officeactivity.md) | ✓ | ✗ |
| [`SigninLogs`](../tables/signinlogs.md) | ✓ | ✗ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [AzureActiveDirectory](../connectors/azureactivedirectory.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |

**Solutions:** [Microsoft Entra ID](../solutions/microsoft-entra-id.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

