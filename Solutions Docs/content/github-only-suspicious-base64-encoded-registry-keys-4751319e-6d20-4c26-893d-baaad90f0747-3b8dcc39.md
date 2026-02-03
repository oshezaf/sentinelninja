# suspicious-base64-encoded-registry-keys

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Looks for suspicious base64 encoded registry keys being created. Author: Jouni Mikkola References: https://threathunt.blog/registry-hunts/

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `4751319e-6d20-4c26-893d-baaad90f0747` |
| **Tactics** | Defense evasion |
| **Techniques** | T1112 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Defense%20evasion/suspicious-base64-encoded-registry-keys.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`DeviceRegistryEvents`](../tables/deviceregistryevents.md) | `ActionType has_any "RegistryKeyCreated,RegistryValueSet"` | ✓ | ✗ |

## Associated Connectors

The following connectors provide data for this content item:

| Connector | Solution |
|:----------|:---------|
| [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |

**Solutions:** [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

