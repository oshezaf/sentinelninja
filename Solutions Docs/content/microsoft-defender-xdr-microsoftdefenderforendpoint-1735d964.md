# MicrosoftDefenderForEndPoint

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Workbooks/MicrosoftDefenderForEndPoint.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`DeviceEvents`](../tables/deviceevents.md) | `ActionType in "AntivirusDetection,PnpDeviceConnected"`<br>`ActionType endswith "Audited"`<br>`ActionType endswith "Blocked"`<br>`ActionType startswith "Asr"` | ✓ | ✗ | ✓ |
| [`DeviceFileCertificateInfo`](../tables/devicefilecertificateinfo.md) |  | ✓ | ✗ | — |
| [`DeviceFileEvents`](../tables/devicefileevents.md) |  | ✓ | ✗ | — |
| [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) |  | ✓ | ✗ | — |
| [`DeviceInfo`](../tables/deviceinfo.md) |  | ✓ | ✗ | — |
| [`DeviceLogonEvents`](../tables/devicelogonevents.md) |  | ✓ | ✗ | — |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) | `ActionType in "FileCreated,UsbDriveMounted"` | ✓ | ✗ | — |
| [`DeviceNetworkInfo`](../tables/devicenetworkinfo.md) |  | ✓ | ✗ | — |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |  | ✓ | ✗ | — |
| [`DeviceRegistryEvents`](../tables/deviceregistryevents.md) |  | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

