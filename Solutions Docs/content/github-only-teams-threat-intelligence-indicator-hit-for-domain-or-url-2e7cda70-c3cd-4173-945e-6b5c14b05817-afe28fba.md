# Teams Threat Intelligence Indicator Hit for Domain or URL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This rule detects and alerts on known threats in Teams messages when a contained domain or URL matches a Microsoft Defender Threat Intelligence indicator (of type 'Domain' or 'URL')

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `2e7cda70-c3cd-4173-945e-6b5c14b05817` |
| **Tactics** | InitialAccess |
| **Techniques** | T1566 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Email%20and%20Collaboration%20Queries/Microsoft%20Teams%20protection/Threat%20Intelligence%20Indicator%20Hit%20for%20Domain%20or%20URL.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`MessageEvents`](../tables/messageevents.md) | ? | ✗ | ? |
| [`MessageUrlInfo`](../tables/messageurlinfo.md) | ? | ✗ | ? |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | ✓ | ✓ | ? |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [InfobloxDataConnector](../connectors/infobloxdataconnector.md) | [Infoblox](../solutions/infoblox.md) |
| [MicrosoftDefenderThreatIntelligence](../connectors/microsoftdefenderthreatintelligence.md) | [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md) |
| [PremiumMicrosoftDefenderForThreatIntelligence](../connectors/premiummicrosoftdefenderforthreatintelligence.md) | [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md) |
| [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md) | [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md) |
| [ThreatIntelligenceUploadIndicatorsAPI](../connectors/threatintelligenceuploadindicatorsapi.md) | [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md) |

**Solutions:** [Infoblox](../solutions/infoblox.md), [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

