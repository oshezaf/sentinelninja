# locate-files-possibly-signed-by-fraudulent-ecc-certificates

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This query was originally published in the threat analytics report, CVE-2020-0601 certificate validation vulnerability. The Windows CryptoAPI Spoofing Vulnerability, CVE-2020-0601, can be exploited to spoof code-signing certificates. For example, an attacker could forge a certificate that lists Microsoft as the issuer. This would allow an attacker to disguise a malicious executable as legitimate. The vulnerability was patched with the January 2020 Security Update. Use the following query to loca

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `d8f2e268-68a6-4f09-abd1-2568462bcaf5` |
| **Tactics** | Defense evasion |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Defense%20evasion/locate-files-possibly-signed-by-fraudulent-ecc-certificates.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Hunting Queries](hunting-queries.md)

