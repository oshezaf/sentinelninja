# Cisco SE - Generic IOC

This rule is triggered when generic IOC is observed on host.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cisco Secure Endpoint](../solutions/cisco-secure-endpoint.md) |
| **ID** | `bccdbc39-31d3-4e2b-9df2-e4c9eecba825` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution |
| **Techniques** | T1204.002 |
| **Required Connectors** | [CiscoSecureEndpoint](../connectors/ciscosecureendpoint.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20Secure%20Endpoint/Analytic%20Rules/CiscoSEGenIoC.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md)
- [`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md)
- [`CiscoSecureEndpoint_CL`](../tables/ciscosecureendpoint-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](../analytic-rules.md)
- [← Back to Cisco Secure Endpoint](../solutions/cisco-secure-endpoint.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
