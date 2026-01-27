# Files copied to USB drives

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query lists files copied to USB external drives with USB drive information based on FileCreated events associated with most recent USBDriveMount events befor file creations. But be aware that Advanced Hunting is not monitoring all the file types.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `fc2c5bbb-5347-4903-87e6-c2c76c43e420` |
| **Tactics** | Exfiltration |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Exfiltration/Files%20copied%20to%20USB%20drives.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`DeviceEvents`](../tables/deviceevents.md) | `ActionType in "FileCreated,UsbDriveMounted"` | ✓ | ✗ |
| [`DeviceFileEvents`](../tables/devicefileevents.md) |  | ✓ | ✗ |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

