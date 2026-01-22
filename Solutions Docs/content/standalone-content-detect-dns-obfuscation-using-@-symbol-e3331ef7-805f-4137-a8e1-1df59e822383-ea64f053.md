# Detect DNS obfuscation using @ symbol

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

One of the tricks used in phishing is obfuscating the domain name in a URL by using the @ symbol. This technique goes all the way back to the original RFC  for URLs, RFC 1738. When you specify an @ in the DNS portion of a URL it denotes  that the left side of the DNS name holds a username and password for  authentication to the server on the right side of the @ sign. Unfortunately, an attacker can use this technique to trick a user by formatting the URL as http://www.trusteddomain.com@www.realdo

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `e3331ef7-805f-4137-a8e1-1df59e822383` |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Initial%20access/Detect%20DNS%20Obfuscation%20Using%20%40%20Symbol%20in%20Email%20URLs.yml) |

## Tables Used

This content item queries data from the following tables:

- [`EmailUrlInfo`](../tables/emailurlinfo.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

