# Vectra AI Detect - New Campaign Detected

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies when a new Campaign has been detected.  This occurs when multiple Detections accross different Hosts are suspected to be part of the same Attack Campaign.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Vectra AI Detect](../solutions/vectra-ai-detect.md) |
| **ID** | `a34d0338-eda0-42b5-8b93-32aae0d7a501` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | LateralMovement, CommandAndControl |
| **Techniques** | T1021, T1071 |
| **Required Connectors** | [CefAma](../connectors/cefama.md) |
| **Event Vendor** | Vectra Networks |
| **Event Product** | X Series |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20AI%20Detect/Analytic%20Rules/VectraDetect-NewCampaign.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Vectra AI Detect](../solutions/vectra-ai-detect.md)

