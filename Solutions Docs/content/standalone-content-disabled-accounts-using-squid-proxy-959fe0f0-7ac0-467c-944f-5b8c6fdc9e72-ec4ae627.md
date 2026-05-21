# Disabled accounts using Squid proxy

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Query finds accounts recorded as disabled by AD in previous time period but still using proxy in current time period. Presumes default squid log format is used. http://www.squid-cache.org/Doc/config/access_log/

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `959fe0f0-7ac0-467c-944f-5b8c6fdc9e72` |
| **Tactics** | CredentialAccess |
| **Techniques** | T1110 |
| **Required Connectors** | [Syslog](../connectors/syslog.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Syslog/disabled_account_squid_usage.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`SigninLogs`](../tables/signinlogs.md) |  | ✓ | ✗ | ? |
| [`Syslog`](../tables/syslog.md) | `ProcessName contains "squid"` | ✓ | ✓ | ? |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [AzureActiveDirectory](../connectors/azureactivedirectory.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| [CiscoSDWAN](../connectors/ciscosdwan.md) | [Cisco SD-WAN](../solutions/cisco-sd-wan.md) |
| [CiscoUCS](../connectors/ciscoucs.md) | [Cisco UCS (legacy connector)](../solutions/cisco-ucs.md) |
| [CitrixADC](../connectors/citrixadc.md) | [Citrix ADC (legacy connector)](../solutions/citrix-adc.md) |
| [Forescout](../connectors/forescout.md) | [Forescout (Legacy)](../solutions/forescout-legacy.md) |
| [RSASecurIDAM](../connectors/rsasecuridam.md) | [RSA SecurID (legacy connector)](../solutions/rsa-securid.md) |
| [WatchguardFirebox](../connectors/watchguardfirebox.md) | [Watchguard Firebox (legacy connector)](../solutions/watchguard-firebox.md) |

**Solutions:** [Cisco SD-WAN](../solutions/cisco-sd-wan.md), [Cisco UCS (legacy connector)](../solutions/cisco-ucs.md), [Citrix ADC (legacy connector)](../solutions/citrix-adc.md), [Forescout (Legacy)](../solutions/forescout-legacy.md), [Microsoft Entra ID](../solutions/microsoft-entra-id.md), [RSA SecurID (legacy connector)](../solutions/rsa-securid.md), [Watchguard Firebox (legacy connector)](../solutions/watchguard-firebox.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

