# Tracking Password Changes

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This script identifies password changes or resets across multiple host and cloud sources. Account manipulation, including password changes and resets, may help adversaries maintain access to credentials and permission levels.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `bac44fe4-c0bc-4e90-aa48-2e346fda803f` |
| **Tactics** | InitialAccess, CredentialAccess |
| **Techniques** | T1078, T1110 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [SecurityEvents](../connectors/securityevents.md), [Syslog](../connectors/syslog.md), [Office365](../connectors/office365.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hunting%20Queries/Hunting%20Queries/MultipleDataSources/TrackingPasswordChanges.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AuditLogs`](../tables/auditlogs.md)
- [`OfficeActivity`](../tables/officeactivity.md)
- [`SecurityEvent`](../tables/securityevent.md)
- [`SigninLogs`](../tables/signinlogs.md)
- [`Syslog`](../tables/syslog.md)
- [`WindowsEvent`](../tables/windowsevent.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Standalone Content](../solutions/standalone-content.md)

