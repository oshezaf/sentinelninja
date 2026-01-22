# Exchange SSRF Autodiscover ProxyShell - Detection

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query looks for suspicious request patterns to Exchange servers that fit patterns recently blogged about by PeterJson. This exploitation chain utilises an SSRF vulnerability in Exchange which eventually allows the attacker to execute arbitrary Powershell on the server. In the example powershell can be used to write an email to disk with an encoded attachment containing a shell. Reference: https://peterjson.medium.com/reproducing-the-proxyshell-pwn2own-exploit-49743a4ea9a1

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `968358d6-6af8-49bb-aaa4-187b3067fb95` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190 |
| **Required Connectors** | [AzureMonitor(IIS)](../connectors/azuremonitor-iis.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/W3CIISLog/ProxyShellPwn2Own.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`W3CIISLog`](../tables/w3ciislog.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

