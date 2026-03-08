# Malformed user agent

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Malware authors will sometimes hardcode user agent string values when writing the network communication component of their malware. Malformed user agents can be an indication of such malware.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `a357535e-f722-4afe-b375-cff362b2b376` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, CommandAndControl, Execution |
| **Techniques** | T1189, T1071, T1203 |
| **Required Connectors** | [WAF](../connectors/waf.md), [Office365](../connectors/office365.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AWS](../connectors/aws.md), [AzureMonitor(IIS)](../connectors/azuremonitor-iis.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/MultipleDataSources/MalformedUserAgents.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Analytic Rules](analytic-rules.md)

