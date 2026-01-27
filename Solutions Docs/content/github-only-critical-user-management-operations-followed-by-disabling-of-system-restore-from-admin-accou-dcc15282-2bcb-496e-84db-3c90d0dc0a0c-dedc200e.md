# Critical user management operations followed by disabling of System Restore from admin account

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'This query could identify critical user management operations like user registration(Microsoft Entra ID Multi-Factor Authentication & self-service password reset (SSPR)) authentication by admin account followed by attempts to stop System Restore activity. Stopping system restore prevents from recovering data by going back to a restore point. The operations could be an indication of attackers trying to maintain persistence, move laterally with attempts to stop system restore point that could poi

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `dcc15282-2bcb-496e-84db-3c90d0dc0a0c` |
| **Tactics** | InitialAccess, Impact |
| **Techniques** | T1078, T1490 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md), [BehaviorAnalytics](../connectors/behavioranalytics.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/MultipleDataSources/CriticalOperationsWithSystemrestore.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AuditLogs`](../tables/auditlogs.md) |  | ✓ | ✗ |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |  | ✓ | ✗ |
| [`IdentityInfo`](../tables/identityinfo.md) |  | ✓ | ✗ |
| [`SecurityEvent`](../tables/securityevent.md) |  | ✓ | ✓ |
| [`WindowsEvent`](../tables/windowsevent.md) | `EventID == "4688"` | ✓ | ✓ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [AzureActiveDirectory](../connectors/azureactivedirectory.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| [ESI-Opt34DomainControllersSecurityEventLogs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md) | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |
| [SecurityEvents](../connectors/securityevents.md) | [Windows Security Events](../solutions/windows-security-events.md) |
| [WindowsForwardedEvents](../connectors/windowsforwardedevents.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| [WindowsSecurityEvents](../connectors/windowssecurityevents.md) | [Windows Security Events](../solutions/windows-security-events.md) |

**Solutions:** [Microsoft Entra ID](../solutions/microsoft-entra-id.md), [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md), [Windows Forwarded Events](../solutions/windows-forwarded-events.md), [Windows Security Events](../solutions/windows-security-events.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

