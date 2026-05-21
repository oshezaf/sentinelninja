# Multiple Password Reset by user

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query will determine multiple password resets by user across multiple data sources. Account manipulation including password reset may aid adversaries in maintaining access to credentials and certain permission levels within an environment.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `0b9ae89d-8cad-461c-808f-0494f70ad5c4` |
| **Severity** | Low |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, CredentialAccess |
| **Techniques** | T1078, T1110 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [SecurityEvents](../connectors/securityevents.md), [Syslog](../connectors/syslog.md), [Office365](../connectors/office365.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/MultipleDataSources/MultiplePasswordresetsbyUser.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AuditLogs`](../tables/auditlogs.md) |  | ✓ | ✗ | ? |
| [`OfficeActivity`](../tables/officeactivity.md) | `OfficeWorkload == "AzureActiveDirectory"` | ✓ | ✗ | ? |
| [`SecurityEvent`](../tables/securityevent.md) |  | ✓ | ✓ | ? |
| [`Syslog`](../tables/syslog.md) | `Facility in "auth,authpriv"`<br>`SyslogMessage matchesregex ".*password changed for.*"` | ✓ | ✓ | ? |
| [`WindowsEvent`](../tables/windowsevent.md) | `EventID in "4723,4724"` | ✓ | ✓ | ? |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [AzureActiveDirectory](../connectors/azureactivedirectory.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| [CiscoSDWAN](../connectors/ciscosdwan.md) | [Cisco SD-WAN](../solutions/cisco-sd-wan.md) |
| [CiscoUCS](../connectors/ciscoucs.md) | [Cisco UCS (legacy connector)](../solutions/cisco-ucs.md) |
| [CitrixADC](../connectors/citrixadc.md) | [Citrix ADC (legacy connector)](../solutions/citrix-adc.md) |
| [ESI-Opt34DomainControllersSecurityEventLogs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md) | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |
| [Forescout](../connectors/forescout.md) | [Forescout (Legacy)](../solutions/forescout-legacy.md) |
| [RSASecurIDAM](../connectors/rsasecuridam.md) | [RSA SecurID (legacy connector)](../solutions/rsa-securid.md) |
| [SecurityEvents](../connectors/securityevents.md) | [Windows Security Events](../solutions/windows-security-events.md) |
| [WatchguardFirebox](../connectors/watchguardfirebox.md) | [Watchguard Firebox (legacy connector)](../solutions/watchguard-firebox.md) |
| [WindowsForwardedEvents](../connectors/windowsforwardedevents.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| [WindowsSecurityEvents](../connectors/windowssecurityevents.md) | [Windows Security Events](../solutions/windows-security-events.md) |

**Solutions:** [Cisco SD-WAN](../solutions/cisco-sd-wan.md), [Cisco UCS (legacy connector)](../solutions/cisco-ucs.md), [Citrix ADC (legacy connector)](../solutions/citrix-adc.md), [Forescout (Legacy)](../solutions/forescout-legacy.md), [Microsoft Entra ID](../solutions/microsoft-entra-id.md), [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md), [RSA SecurID (legacy connector)](../solutions/rsa-securid.md), [Watchguard Firebox (legacy connector)](../solutions/watchguard-firebox.md), [Windows Forwarded Events](../solutions/windows-forwarded-events.md), [Windows Security Events](../solutions/windows-security-events.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

