# Failed logon attempts by valid accounts within 10 mins

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies when failed logon attempts are 20 or higher during a 10 minute period (2 failed logons per minute minimum) from valid account.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `0777f138-e5d8-4eab-bec1-e11ddfbc2be2` |
| **Severity** | Low |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1110 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/SecurityEvent/gte_6_FailedLogons_10m.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`SecurityEvent`](../tables/securityevent.md) | ✓ | ✓ |
| [`WindowsEvent`](../tables/windowsevent.md) | ✓ | ✓ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [ESI-Opt34DomainControllersSecurityEventLogs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md) | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |
| [SecurityEvents](../connectors/securityevents.md) | [Windows Security Events](../solutions/windows-security-events.md) |
| [WindowsForwardedEvents](../connectors/windowsforwardedevents.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| [WindowsSecurityEvents](../connectors/windowssecurityevents.md) | [Windows Security Events](../solutions/windows-security-events.md) |

**Solutions:** [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md), [Windows Forwarded Events](../solutions/windows-forwarded-events.md), [Windows Security Events](../solutions/windows-security-events.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

