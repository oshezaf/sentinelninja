# LemonDuck Registration Function

LemonDuck is a malware primarily known for its botnet and cryptocurrency mining objectives. First discovered in 2019, LemonDuck has since adopted more sophisticated behavior and escalated its operations in 2021.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **ID** | `147c4c0a-7241-4ce9-9b71-0aecb8a2b59f` |
| **Tactics** | Execution, Persistence, LateralMovement, CommandAndControl |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Hunting%20Queries/Campaigns/LemonDuck/LemonDuckRegistrationFunction.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceEvents`](../tables/deviceevents.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
