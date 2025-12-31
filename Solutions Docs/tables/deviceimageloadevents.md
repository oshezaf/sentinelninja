# DeviceImageLoadEvents

DLL loading events

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/deviceimageloadevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-deviceimageloadevents-table) |

## Solutions (2)

This table is used by the following solutions:

- [FalconFriday](../solutions/falconfriday.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (8)

### Analytic Rules (4)

**In solution [FalconFriday](../solutions/falconfriday.md):**
- [Detect .NET runtime being loaded in JScript for code execution](../content/9f921513-65f3-48a2-ae7d-326c5901c55e.md)
- [Hijack Execution Flow - DLL Side-Loading](../content/3084b487-fad6-4000-9544-6085b9657290.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Rare Process as a Service](../content/91a451e3-178f-41b2-9e5d-da97d75b9971.md)
- [Regsvr32 Rundll32 Image Loads Abnormal Extension](../content/36fbd4e7-5630-4414-aa42-702a7fdded21.md)

### Hunting Queries (4)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Rare Process as a Service](../content/96976bb1-1993-45b8-a477-8236ee93976b.md)
- [Regsvr32 Rundll32 Image Loads Abnormal Extension](../content/b1f8aac2-766d-47ec-8787-84bc7692ff77.md)
- [Suspicious Image Load related to IcedId](../content/853bacff-45cf-42f2-b2a6-6727fcf183ef.md)
- [Suspicious Spoolsv Child Process](../content/084a6349-b3d6-4528-91e4-4de5d52424e5.md)

---

**Browse:**

- [← Back to Tables Index](../tables-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Content Index](../content-index.md)
