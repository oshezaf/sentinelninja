# Infoblox - TI - InfobloxCDC Match Found - Lookalike Domains

InfobloxCDC Lookalike Domain match found in your Infoblox TIDE Threat Intelligence. Customize query count, scheduling, responses and more. Modify data sources, types and threat properties as desired. This rule depends on a parser based on a Kusto Function to work as expected called [**InfobloxCDC**](https://aka.ms/sentinel-InfobloxCloudDataConnector-parser).

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Infoblox Cloud Data Connector](../solutions/infoblox-cloud-data-connector.md) |
| **ID** | `568730be-b39d-45e3-a392-941e00837d52` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1498, T1565 |
| **Required Connectors** | [ThreatIntelligence](../connectors/threatintelligence.md), [CefAma](../connectors/cefama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20Cloud%20Data%20Connector/Analytic%20Rules/Infoblox-TI-InfobloxCDCMatchFound-LookalikeDomains.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Infoblox Cloud Data Connector](../solutions/infoblox-cloud-data-connector.md)

