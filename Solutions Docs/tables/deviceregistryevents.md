# DeviceRegistryEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Creation and modification of registry entries

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/deviceregistryevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-deviceregistryevents-table) |

## Solutions (3)

This table is used by the following solutions:

- [FalconFriday](../solutions/falconfriday.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

## Connectors (1)

This table is ingested by the following connectors:

**Selection Criteria:** `ActionType == "RegistryValueSet"`

| Connector |
|:----------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |

---

## Content Items Using This Table (5)

### Analytic Rules (2)

**In solution [FalconFriday](../solutions/falconfriday.md):** `ActionType == "RegistryValueSet"`

| Content Item |
|:-------------|
| [Component Object Model Hijacking - Vault7 trick](../content/falconfriday-component-object-model-hijacking-vault7-trick-1aaff41f-4e18-45b1-bb34-de6eb4943cf2-23d9ec72.md) |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `ActionType == "RegistryValueSet"`

| Content Item |
|:-------------|
| [MosaicLoader](../content/microsoft-defender-xdr-mosaicloader-506f4d6b-3864-4bb1-8f75-a13fb066f97a-66639731.md) |

### Hunting Queries (1)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `ActionType == "RegistryValueSet"`

| Content Item |
|:-------------|
| [MosaicLoader](../content/microsoft-defender-xdr-mosaicloader-0efbcea0-1dc0-4844-8a9c-3a1d98fc1697-1d4d4510.md) |

### Workbooks (2)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md) |  |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1) — Selection Criteria: `ActionType in "RegistryKeyDeleted,RegistryKeyRenamed,RegistryValueDeleted,RegistryValueSet"`

| Parser | Schema | Product |
|:-------|:-------|:--------|
| [ASimRegistryEventMicrosoft365D](../asim/asimregistryeventmicrosoft365d.md) | RegistryEvent | Microsoft 365 Defender for Endpoint |

## Selection Criteria Summary (2 criteria, 5 total references)

References by type: 1 connectors, 3 content items, 1 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ActionType == "RegistryValueSet"` | 1 | 3 | - | - | **4** |
| `ActionType in "RegistryKeyDeleted,RegistryKeyRenamed,RegistryValueDeleted,RegistryValueSet"` | - | - | 1 | - | **1** |
| **Total** | **1** | **3** | **1** | **0** | **5** |

### ActionType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `RegistryValueSet` | 1 | 3 | 1 | - | **5** |
| `RegistryKeyDeleted` | - | - | 1 | - | **1** |
| `RegistryKeyRenamed` | - | - | 1 | - | **1** |
| `RegistryValueDeleted` | - | - | 1 | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

