# Cisco SE - Possible webshell

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Detects possible webshell on host.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cisco Secure Endpoint](../solutions/cisco-secure-endpoint.md) |
| **ID** | `d2c97cc9-1ccc-494d-bad4-564700451a2b` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1102 |
| **Required Connectors** | [CiscoSecureEndpoint](../connectors/ciscosecureendpoint.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20Secure%20Endpoint/Analytic%20Rules/CiscoSEWebshell.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md) | ✓ | ✓ | ✓ |
| [`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md) | ✓ | ✓ | ✓ |
| [`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cisco Secure Endpoint](../solutions/cisco-secure-endpoint.md)

