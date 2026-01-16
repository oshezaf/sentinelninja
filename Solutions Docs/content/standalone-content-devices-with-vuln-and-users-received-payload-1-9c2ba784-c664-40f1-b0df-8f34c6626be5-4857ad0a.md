# devices_with_vuln_and_users_received_payload (1)

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

// Author: jan geisbauer // @janvonkirchheim // ------------------------ // 1.	A list of all devices that have this vulnerability // 2.	A list of all users that uses those devices // 3.	If these users received .mkv files recently

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `9c2ba784-c664-40f1-b0df-8f34c6626be5` |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hunting%20Queries/Hunting%20Queries/Microsoft%20365%20Defender/TVM/devices_with_vuln_and_users_received_payload%20%281%29.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceFileEvents`](../tables/devicefileevents.md)
- [`DeviceTvmSoftwareVulnerabilities`](../tables/devicetvmsoftwarevulnerabilities.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Standalone Content](../solutions/standalone-content.md)

