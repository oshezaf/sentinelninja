# ASR rules categorized detection graph

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query offers daily categorization of ASR rules, helping SOC analysts monitor specific categories like office-related activities or WMI among the 16 rules.  It aids in tracking detection rates and organizational trends.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `4a7bf574-fe5f-4168-97e7-5a8aa19a5eed` |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/ASR%20rules/ASR-rules-categorized-detection-graph.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`DeviceEvents`](../tables/deviceevents.md) | `ActionType in "AsrAdobeReaderChildProcessBlocked,AsrExecutableEmailContentBlocked,AsrExecutableOfficeContentBlocked,AsrLsassCredentialTheftBlocked,AsrObfuscatedScriptBlocked,AsrOfficeChildProcessBlocked,AsrOfficeCommAppChildProcessBlocked,AsrOfficeMacroWin32ApiCallsBlocked,AsrOfficeProcessInjectionBlocked,AsrPersistenceThroughWmiBlocked,AsrPsexecWmiChildProcessBlocked,AsrRansomwareBlocked,AsrScriptExecutableDownloadBlocked,AsrUntrustedExecutableBlocked,AsrUntrustedUsbProcessBlocked,AsrVulnerableSignedDriverBlocked"`<br>`ActionType startswith "asr"` | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

