# Failed AzureAD logons but success logon to host

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a list of IP addresses with a minimum number (default of 5) of failed logon attempts to Microsoft Entra ID. Uses that list to identify any successful remote logons to hosts from these IPs within the same timeframe.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `8ee967a2-a645-4832-85f4-72b635bcb3a6` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, CredentialAccess |
| **Techniques** | T1078, T1110 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md), [SecurityEvents](../connectors/securityevents.md), [Syslog](../connectors/syslog.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/MultipleDataSources/AADHostLoginCorrelation.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`SecurityEvent`](../tables/securityevent.md) |  | ✓ | ✓ | ✓ |
| [`Syslog`](../tables/syslog.md) | `Facility contains "auth"`<br>`ProcessName != "sudo"`<br>`SyslogMessage has "Accepted"` | ✓ | ✓ | ✓ |
| [`WindowsEvent`](../tables/windowsevent.md) |  | ✓ | ✓ | ✓ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
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

**Solutions:** [Cisco SD-WAN](../solutions/cisco-sd-wan.md), [Cisco UCS (legacy connector)](../solutions/cisco-ucs.md), [Citrix ADC (legacy connector)](../solutions/citrix-adc.md), [Forescout (Legacy)](../solutions/forescout-legacy.md), [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md), [RSA SecurID (legacy connector)](../solutions/rsa-securid.md), [Watchguard Firebox (legacy connector)](../solutions/watchguard-firebox.md), [Windows Forwarded Events](../solutions/windows-forwarded-events.md), [Windows Security Events](../solutions/windows-security-events.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

