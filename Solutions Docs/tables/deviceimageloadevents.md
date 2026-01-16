# DeviceImageLoadEvents

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

---

DLL loading events

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/deviceimageloadevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-deviceimageloadevents-table) |

## Solutions (4)

This table is used by the following solutions:

- [FalconFriday](../solutions/falconfriday.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Standalone Content](../solutions/standalone-content.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (36)

### Analytic Rules (8)

**In solution [FalconFriday](../solutions/falconfriday.md):**
- [Detect .NET runtime being loaded in JScript for code execution](../content/falconfriday-detect-.net-runtime-being-loaded-in-jscript-for-code-execution-9f921513-65f3-48a2-ae7d-326c5901c55e-fd9342fe.md)
- [Hijack Execution Flow - DLL Side-Loading](../content/falconfriday-hijack-execution-flow-dll-side-loading-3084b487-fad6-4000-9544-6085b9657290-16d7660f.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-91a451e3-178f-41b2-9e5d-da97d75b9971-365d2f3a.md)
- [Regsvr32 Rundll32 Image Loads Abnormal Extension](../content/microsoft-defender-xdr-regsvr32-rundll32-image-loads-abnormal-extension-36fbd4e7-5630-4414-aa42-702a7fdded21-4cc759a2.md)
- [SUNSPOT malware hashes](../content/microsoft-defender-xdr-sunspot-malware-hashes-53e936c6-6c30-4d12-8343-b8a0456e8429-b7f28a72.md)

**In solution [Standalone Content](../solutions/standalone-content.md):**
- [Europium - Hash and IP IOCs - September 2022](../content/standalone-content-europium-hash-and-ip-iocs-september-2022-9d8b5a18-b7db-4c23-84a6-95febaf7e1e4-24b34350.md)
- [Mercury - Domain, Hash and IP IOCs - August 2022](../content/standalone-content-mercury-domain,-hash-and-ip-iocs-august-2022-ae10c588-7ff7-486c-9920-ab8b0bdb6ede-8b4a9fab.md)
- [Prestige ransomware IOCs Oct 2022](../content/standalone-content-prestige-ransomware-iocs-oct-2022-bca9c877-2afc-4246-a26d-087ab1cdcd5f-ab904866.md)

### Hunting Queries (18)

**In solution [](../solutions/.md):**
- [Abuse.ch Recent Threat Feed](../content/-abuse.ch-recent-threat-feed-2bcdf59a-679d-4585-93e7-f14d674de205-f76c5da5.md)
- [Abuse.ch Recent Threat Feed (1)](../content/-abuse.ch-recent-threat-feed-1-8bd9e7c0-82b9-43b4-b58e-53d1ee6d9180-d7f2c638.md)
- [Baseline Comparison](../content/-baseline-comparison-4d17ae75-87e8-4272-9aec-16448b1430bc-7679c313.md)
- [Detect PowerShell v2 Downgrade](../content/-detect-powershell-v2-downgrade-70c41ff4-b95a-43a3-8fb5-794ed69be100-71285d2e.md)
- [Rare-process-as-a-service](../content/-rare-process-as-a-service-a60ac80f-dce6-43ec-b102-9ae8c094d5dc-b4627682.md)
- [Suspicious Image Load related to IcedId](../content/-suspicious-image-load-related-to-icedid-b64c8a59-94ad-4659-b95e-36238312da5c-1cbc6b56.md)
- [Suspicious Spoolsv Child Process](../content/-suspicious-spoolsv-child-process-ece67992-9699-44f5-a5c5-f7e5c2d1d5d4-b7e54d2d.md)
- [Zip-Doc - Creation of JPG Payload File](../content/-zip-doc-creation-of-jpg-payload-file-b760519d-392b-4baf-a2d6-087dc302de1c-91cde56e.md)
- [check-for-shadowhammer-activity-implant](../content/-check-for-shadowhammer-activity-implant-fb6f89ae-4af3-4c37-8f12-d719e882e8a5-29a3e39e.md)
- [fireeye-red-team-tools-HASHs [Nobelium]](../content/-fireeye-red-team-tools-hashs-[nobelium]-3e9ac786-134c-4917-99bd-4a7ce01049ab-68c5d733.md)
- [locate-dll-loaded-in-memory[Nobelium]](../content/-locate-dll-loaded-in-memory[nobelium]-bfea1fee-aa17-467d-b285-932d5a45ca53-84c503e8.md)
- [rare_sch_task_with_activity](../content/-rare-sch-task-with-activity-ce76992a-8cd6-4605-9f45-cde9aae87244-4e918578.md)
- [regsvr32-rundll32-abnormal-image-loads](../content/-regsvr32-rundll32-abnormal-image-loads-69eb9fb7-fe0d-4c34-8c81-3a828fc12abd-8b10935a.md)
- [regsvr32-rundll32-image-loads-abnormal-extension](../content/-regsvr32-rundll32-image-loads-abnormal-extension-f24f6403-cba0-4f3c-9f88-28782b9ea39a-cd0832da.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Rare Process as a Service](../content/microsoft-defender-xdr-rare-process-as-a-service-96976bb1-1993-45b8-a477-8236ee93976b-cf1c1157.md)
- [Regsvr32 Rundll32 Image Loads Abnormal Extension](../content/microsoft-defender-xdr-regsvr32-rundll32-image-loads-abnormal-extension-b1f8aac2-766d-47ec-8787-84bc7692ff77-8be87cf1.md)
- [Suspicious Image Load related to IcedId](../content/microsoft-defender-xdr-suspicious-image-load-related-to-icedid-853bacff-45cf-42f2-b2a6-6727fcf183ef-560dbc47.md)
- [Suspicious Spoolsv Child Process](../content/microsoft-defender-xdr-suspicious-spoolsv-child-process-084a6349-b3d6-4528-91e4-4de5d52424e5-f5f0ac34.md)

### Workbooks (10)

**In solution [](../solutions/.md):**
- [AzureSentinelCost](../content/-azuresentinelcost-75f5c34b.md)
- [MicrosoftDefenderForEndPoint](../content/-microsoftdefenderforendpoint-f98fcc1e.md)
- [MicrosoftSentinelCostEUR](../content/-microsoftsentinelcosteur-aa190070.md)
- [MicrosoftSentinelCostGBP](../content/-microsoftsentinelcostgbp-3469a46b.md)
- [MicrosoftSentinelDeploymentandMigrationTracker](../content/-microsoftsentineldeploymentandmigrationtracker-da237854.md)
- [OptimizationWorkbook](../content/-optimizationworkbook-0bd24445.md)
- [SentinelCosts](../content/-sentinelcosts-dec2b79d.md)
- [WorkspaceUsage](../content/-workspaceusage-0da12cea.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

