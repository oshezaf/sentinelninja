# SuspiciousUrlClicked

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query correlates Microsoft Defender for Office 365 signals and Microsoft Entra ID identity data to find the relevant endpoint event BrowerLaunchedToOpen in Microsoft Defender ATP. This event reflects relevant clicks on the malicious URL in the spear-phishing email recognized by Microsoft Defender for Office 365.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `959f8d6a-53b8-488f-a628-999b3410702e` |
| **Tactics** | Initial access |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Initial%20access/SuspiciousUrlClicked.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AlertEvidence`](../tables/alertevidence.md) | `ActionType == "BrowserLaunchedToOpenUrl"` | ✓ | ✗ |
| [`AlertInfo`](../tables/alertinfo.md) |  | ✓ | ✗ |
| [`DeviceEvents`](../tables/deviceevents.md) |  | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

