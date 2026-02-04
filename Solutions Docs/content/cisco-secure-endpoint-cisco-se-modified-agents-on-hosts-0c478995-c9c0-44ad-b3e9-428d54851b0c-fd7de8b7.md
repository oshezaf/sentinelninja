# Cisco SE - Modified agents on hosts

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Query searches for hosts with modified agent settings.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Cisco Secure Endpoint](../solutions/cisco-secure-endpoint.md) |
| **ID** | `0c478995-c9c0-44ad-b3e9-428d54851b0c` |
| **Severity** | Low |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1562 |
| **Required Connectors** | [CiscoSecureEndpoint](../connectors/ciscosecureendpoint.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20Secure%20Endpoint/Hunting%20Queries/CiscoSEModifiedAgent.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md) | — | ✗ | ✓ |
| [`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md) | — | ✗ | ✓ |
| [`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) | — | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Cisco Secure Endpoint](../solutions/cisco-secure-endpoint.md)

