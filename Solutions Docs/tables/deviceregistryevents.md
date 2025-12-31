# DeviceRegistryEvents

Creation and modification of registry entries

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/deviceregistryevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-deviceregistryevents-table) |

## Solutions (4)

This table is used by the following solutions:

- [FalconFriday](../solutions/falconfriday.md)
- [Malware Protection Essentials](../solutions/malware-protection-essentials.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust%28tic3.0%29.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (9)

### Analytic Rules (6)

**In solution [FalconFriday](../solutions/falconfriday.md):**
- [Component Object Model Hijacking - Vault7 trick](../content/1aaff41f-4e18-45b1-bb34-de6eb4943cf2.md)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [Detect Print Processors Registry Driver Key Creation/Modification](../content/7edde3d4-9859-4a00-b93c-b19ddda55320.md)
- [Detect Registry Run Key Creation/Modification](../content/dd041e4e-1ee2-41ec-ba4e-82a71d628260.md)
- [Detect Windows Allow Firewall Rule Addition/Modification](../content/056593d4-ca3b-47a7-be9d-d1d0884a1d36.md)
- [Detect Windows Update Disabled from Registry](../content/f1443a87-78d5-40c3-b051-f468f0f2def0.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MosaicLoader](../content/506f4d6b-3864-4bb1-8f75-a13fb066f97a.md)

### Hunting Queries (1)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MosaicLoader](../content/0efbcea0-1dc0-4844-8a9c-3a1d98fc1697.md)

### Workbooks (2)

**In solution [Malware Protection Essentials](../solutions/malware-protection-essentials.md):**
- [MalwareProtectionEssentialsWorkbook](../content/malwareprotectionessentialsworkbook-malware-protection-essentials.md)

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust%28tic3.0%29.md):**
- [ZeroTrustTIC3](../content/zerotrusttic3-zerotrust%28tic3.0%29.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content/content-index.md)
