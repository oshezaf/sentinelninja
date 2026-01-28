# ImpersonatedUserFootprint

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Microsoft Defender for Identity raises alert on suspicious Kerberos ticket, pointing to a potential overpass-the-hash attack. Once attackers gain credentials for a user with higher privileges, they will use the stolen credentials to sign into other devices and move laterally. This query finds related sign-in events following overpass-the-hash attack to trace the footprint of the impersonated user.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `aeb65be9-7a40-409e-a227-56ebbcf33de4` |
| **Tactics** | Lateral movement |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Lateral%20Movement/ImpersonatedUserFootprint.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AlertEvidence`](../tables/alertevidence.md) |  | ✓ | ✗ |
| [`AlertInfo`](../tables/alertinfo.md) | `ActionType == "LogonSuccess"` | ✓ | ✗ |
| [`DeviceLogonEvents`](../tables/devicelogonevents.md) |  | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

