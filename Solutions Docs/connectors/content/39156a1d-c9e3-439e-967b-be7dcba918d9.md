# Base64 encoded IPv4 address in request url

This query detects Base64-encoded IPv4 addresses in outbound request URLs. It uses pre-computed base64 offsets for IPv4 sequences, eliminating the need for decoding. After identifying a candidate,the query extracts the plaintext IPv4 address pattern.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md) |
| **ID** | `39156a1d-c9e3-439e-967b-be7dcba918d9` |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071.001 |
| **Required Connectors** | [Zscaler](../connectors/zscaler.md), [Fortinet](../connectors/fortinet.md), [CheckPoint](../connectors/checkpoint.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Network%20Threat%20Protection%20Essentials/Hunting%20Queries/B64IPInURL.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
