# Samsung_Knox_System_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (57 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Samsung_Knox_System_CL.json)

| Column Name | Type |
|:------------|:-----|
| ArpDevice | string |
| AvbBootPatchLevel | string |
| AvbBootState | string |
| AvbDeviceLocked | string |
| AvbOsPatchLevel | string |
| AvbOsVersion | string |
| AvbVendorPatchLevel | string |
| AvbVerityMode | string |
| BLBuildId | string |
| BLBuildType | string |
| BLBuildVersion | string |
| BLEvent | string |
| BLEventTarget | string |
| BLMode | string |
| BLRP | string |
| CCModeState | string |
| CustomCount | string |
| DeviceImei1 | string |
| DeviceImei2 | string |
| DeviceModel | string |
| DeviceSerialNumber | string |
| DeviceWifimac | string |
| EDLCount | string |
| EmFuseHistory | string |
| EmStatus | string |
| EmTokens | string |
| EventGuid | long |
| FOTACount | string |
| FrpState | string |
| ImgStatus | string |
| KernelBuildId | string |
| KernelBuildType | string |
| KernelRP | string |
| KernelState | string |
| KGFuse | string |
| KGState | string |
| MDMState | string |
| MitreTtp | dynamic |
| Name | string |
| ODINCount | string |
| PrimaryImei | string |
| Profile | string |
| RebootReason | string |
| RPMBState | string |
| SecureBoot | string |
| Severity | string |
| SystemBuildId0 | string |
| SystemBuildId1 | string |
| SystemBuildId2 | string |
| SystemRP | string |
| TimeGenerated | datetime |
| UnlockCount | string |
| VbMetaType | string |
| Version | string |
| WbFuse | string |
| WbReason | string |
| WpState | string |

## Solutions (1)

This table is used by the following solutions:

- [Samsung Knox Asset Intelligence](../solutions/samsung-knox-asset-intelligence.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Samsung Knox Asset Intelligence](../connectors/samsungdcdefinition.md) |  |

---

## Content Items Using This Table (4)

### Analytic Rules (3)

**In solution [Samsung Knox Asset Intelligence](../solutions/samsung-knox-asset-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Samsung Knox - Mobile Device Boot Compromise Events](../content/samsung-knox-asset-intelligence-samsung-knox-mobile-device-boot-compromise-events-fae7e371-aee8-4d3f-8311-2255a45a30b3-015abeee.md) |  |
| [Samsung Knox - Peripheral Access  Detection with Camera Events](../content/samsung-knox-asset-intelligence-samsung-knox-peripheral-access-detection-with-camera-events-cd526f4d-dbe9-4149-8a0a-9ec43c3abb16-ad75124d.md) |  |
| [Samsung Knox - Peripheral Access  Detection with Mic Events](../content/samsung-knox-asset-intelligence-samsung-knox-peripheral-access-detection-with-mic-events-e4032fd2-4d05-4302-b7c0-f3f0380e2313-a1a77675.md) |  |

### Workbooks (1)

**In solution [Samsung Knox Asset Intelligence](../solutions/samsung-knox-asset-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SamsungKnoxAssetIntelligence](../content/samsung-knox-asset-intelligence-samsungknoxassetintelligence-db535420.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

