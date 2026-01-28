# Lumen TI IPAddress in SigninLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query maps Lumen IP indicators of compromise (IOCs) from threat intelligence (TI), by searching for matches in SigninLogs.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md) |
| **ID** | `1425aea5-a9e5-4288-886e-934b90664a91` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Required Connectors** | [LumenThreatFeedConnector](../connectors/lumenthreatfeedconnector.md), [ThreatIntelligenceUploadIndicatorsAPI](../connectors/threatintelligenceuploadindicatorsapi.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Lumen%20Defender%20Threat%20Feed/Analytic%20Rules/Lumen_IPEntity_SigninLogs.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`SigninLogs`](../tables/signinlogs.md) | ✓ | ✗ |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)

