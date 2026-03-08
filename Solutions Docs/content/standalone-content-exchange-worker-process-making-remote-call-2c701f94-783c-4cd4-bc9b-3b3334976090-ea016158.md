# Exchange Worker Process Making Remote Call

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This query dynamically identifies Exchange servers and then looks for instances where the IIS worker process initiates a call out to a remote URL using either cmd.exe or powershell.exe. This behaviour was described as post-compromise behaviour following exploitation of CVE-2022-41040 and CVE-2022-41082, this pattern of activity was use to download additional tools to the server. This suspicious activity is generic.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `2c701f94-783c-4cd4-bc9b-3b3334976090` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Execution |
| **Techniques** | T1059.001, T1059.003 |
| **Required Connectors** | [AzureMonitor(IIS)](../connectors/azuremonitor-iis.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/MultipleDataSources/ExchangeWorkerProcessMakingRemoteCall.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Analytic Rules](analytic-rules.md)

