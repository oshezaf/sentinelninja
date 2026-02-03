# Exchange Server Suspicious File Downloads.

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'This query looks for messages related to file downloads of suspicious file types on an Exchange Server. This could indicate attempted deployment of webshells.  This query uses the Exchange HttpProxy AOBGeneratorLog, you will need to onboard this log as a custom log under the table http_proxy_oab_CL before using this query.  This log is commonly found at C:\Program Files\Microsoft\Exchange Server\V15\Logging\OABGeneratorLog on the Exchange server. Details on collecting custom logs into Sentinel

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `8955c0fb-3408-47b0-a3b9-a1faec41e427` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/http_proxy_oab_CL/ExchagngeSuspiciousFileDownloads.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`http_proxy_oab_CL`](../tables/http-proxy-oab-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

