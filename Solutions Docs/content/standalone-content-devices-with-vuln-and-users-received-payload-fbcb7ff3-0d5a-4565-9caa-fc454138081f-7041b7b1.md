# devices_with_vuln_and_users_received_payload

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

// Author: jan geisbauer // @janvonkirchheim // ------------------------ // 1.	A list of all devices that have this vulnerability // 2.	A list of all users that uses those devices // 3.	If these users received .mkv files recently

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `fbcb7ff3-0d5a-4565-9caa-fc454138081f` |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/TVM/devices_with_vuln_and_users_received_payload.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceInfo`](../tables/deviceinfo.md)
- [`DeviceTvmSoftwareVulnerabilities`](../tables/devicetvmsoftwarevulnerabilities.md)
- [`EmailAttachmentInfo`](../tables/emailattachmentinfo.md)
- [`IdentityInfo`](../tables/identityinfo.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

