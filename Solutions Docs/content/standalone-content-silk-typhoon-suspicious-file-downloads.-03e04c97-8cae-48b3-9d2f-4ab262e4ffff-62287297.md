# Silk Typhoon Suspicious File Downloads.

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query looks for messages related to file downloads of suspicious file types. This query uses the Exchange HttpProxy AOBGeneratorLog, you will need to onboard this log as a custom log under the table http_proxy_oab_CL before using this query.  Reference: https://www.microsoft.com/security/blog/2021/03/02/hafnium-targeting-exchange-servers/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `03e04c97-8cae-48b3-9d2f-4ab262e4ffff` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Detections/Analytic%20Rules/http_proxy_oab_CL/SilkTyphoonSuspiciousFileDownloads.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`http_proxy_oab_CL`](../tables/http-proxy-oab-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Standalone Content](../solutions/standalone-content.md)

