# Cisco SE - Uncommon application behavior

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Query searches for uncommon application behavior events.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Cisco Secure Endpoint](../solutions/cisco-secure-endpoint.md) |
| **ID** | `dc87c967-61d2-48e9-9fe1-26920944ca57` |
| **Severity** | Medium |
| **Tactics** | Execution |
| **Techniques** | T1204.002 |
| **Required Connectors** | [CiscoSecureEndpoint](../connectors/ciscosecureendpoint.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20Secure%20Endpoint/Hunting%20Queries/CiscoSEUncommonApplicationBehavior.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md) | ✓ | ✓ | ✓ |
| [`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md) | ✓ | ✓ | ✓ |
| [`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Cisco Secure Endpoint](../solutions/cisco-secure-endpoint.md)

