# Failed host logons but success logon to AzureAD

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a list of IP addresses with a minimum number(default of 5) of failed logon attempts to remote hosts. Uses that list to identify any successful logons to Microsoft Entra ID from these IPs within the same timeframe.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `1ce5e766-26ab-4616-b7c8-3b33ae321e80` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, CredentialAccess |
| **Techniques** | T1078, T1110 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md), [SecurityEvents](../connectors/securityevents.md), [Syslog](../connectors/syslog.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Detections/Analytic%20Rules/MultipleDataSources/HostAADCorrelation.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)
- [`SecurityEvent`](../tables/securityevent.md)
- [`SigninLogs`](../tables/signinlogs.md)
- [`Syslog`](../tables/syslog.md)
- [`WindowsEvent`](../tables/windowsevent.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Standalone Content](../solutions/standalone-content.md)

