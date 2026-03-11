# Unicode Obfuscation in Command Line

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

The query looks for Command Lines that contain non ASCII characaters. Insertion of these characters could be used to evade detections.  Command lines should be reviewed to determine whether inclusion of non ASCII characters was deliberate or not

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md) |
| **ID** | `a953f304-12e4-48ae-bedc-d58fb1b0c6a6` |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1027 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Endpoint%20Threat%20Protection%20Essentials/Hunting%20Queries/UnicodeObfuscationInCommandLine.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | ✓ | ✗ | ? |
| [`SecurityEvent`](../tables/securityevent.md) | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)

