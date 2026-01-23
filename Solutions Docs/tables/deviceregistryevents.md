# DeviceRegistryEvents

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

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

## Solutions (4)

This table is used by the following solutions:

- [FalconFriday](../solutions/falconfriday.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Standalone Content](../solutions/standalone-content.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (24)

### Analytic Rules (3)

**In solution [FalconFriday](../solutions/falconfriday.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Component Object Model Hijacking - Vault7 trick](../content/falconfriday-component-object-model-hijacking-vault7-trick-1aaff41f-4e18-45b1-bb34-de6eb4943cf2-23d9ec72.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MosaicLoader](../content/microsoft-defender-xdr-mosaicloader-506f4d6b-3864-4bb1-8f75-a13fb066f97a-66639731.md) |  |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [COM Registry Key Modified to Point to File in Color Profile Folder](../content/standalone-content-com-registry-key-modified-to-point-to-file-in-color-profile-folder-ed8c9153-6f7a-4602-97b4-48c336b299e1-d490be15.md) |  |

### Hunting Queries (17)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MosaicLoader](../content/microsoft-defender-xdr-mosaicloader-0efbcea0-1dc0-4844-8a9c-3a1d98fc1697-1d4d4510.md) |  |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MDE_FindMountedISOandDriveLetters](../content/standalone-content-mde-findmountedisoanddriveletters-19270420-5d36-43df-8bed-c34a47fadc92-9edbea2e.md) |  |
| [MDE_ProxyChangesViaRegistry](../content/standalone-content-mde-proxychangesviaregistry-7d905049-7e23-451e-bb57-0bfb6dd43f60-5f256293.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Accessibility Features](../content/github-only-accessibility-features-a5649d8b-e54b-4e2b-925a-106bf838d69c-dbe14580.md) |  |
| [KNOTWEED-COM Registry Key Modified to Point to Color Profile Folder](../content/github-only-knotweed-com-registry-key-modified-to-point-to-color-profile-folder-9c1331df-9bb3-4b52-b7d7-5a6e9e6d97b4-d37a60f6.md) |  |
| [MosaicLoader](../content/github-only-mosaicloader-625dce50-2fec-4f49-be92-ad4cab98b313-31f04ab2.md) |  |
| [OceanLotus registry activity](../content/github-only-oceanlotus-registry-activity-3e571521-6f73-423f-9280-aff6170c9d81-1a08b9f1.md) |  |
| [RunMRU with non-ASCII characters](../content/github-only-runmru-with-non-ascii-characters-6e8ee46f-80ee-46f6-be49-49a66f01edce-e16ca0cd.md) |  |
| [Services](../content/github-only-services-dd76f1c0-edc9-45cb-aeae-f5142caf583c-adae9da2.md) |  |
| [Suspicious Registry Keys](../content/github-only-suspicious-registry-keys-fab0fc37-d74a-43b6-9f13-d517b9cbcb14-4ef94be0.md) |  |
| [detect-impacket-atexec](../content/github-only-detect-impacket-atexec-75e3a1b2-bd6d-4e79-8c74-85a3bc0b0617-a33eaf14.md) |  |
| [qakbot-campaign-registry-edit](../content/github-only-qakbot-campaign-registry-edit-3f305589-cde2-4509-8204-63cb2a00117c-2575a13b.md) |  |
| [suspicious-base64-encoded-registry-keys](../content/github-only-suspicious-base64-encoded-registry-keys-4751319e-6d20-4c26-893d-baaad90f0747-3b8dcc39.md) |  |
| [suspicious-command-interpreters-added-to-registry](../content/github-only-suspicious-command-interpreters-added-to-registry-74dd8aa9-996b-44b1-bf36-9ac9ef6d2c02-d9fd92fe.md) |  |
| [suspicious-keywords-in-registry](../content/github-only-suspicious-keywords-in-registry-749f313e-08b4-48f6-9f9d-ba57c1abbf55-0fb6d342.md) |  |
| [wadhrama-credential-dump](../content/github-only-wadhrama-credential-dump-8348d279-c95f-4dbe-b952-65048dc06559-6f945582.md) |  |
| [wdigest-caching](../content/github-only-wdigest-caching-05a01ec8-ecab-4f9a-9aae-8d8cc061fe05-30a7e092.md) |  |

### Workbooks (4)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md) |  |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForEndPoint](../content/github-only-microsoftdefenderforendpoint-ac005534.md) |  |
| [MicrosoftSentinelDeploymentandMigrationTracker](../content/github-only-microsoftsentineldeploymentandmigrationtracker-1aa72202.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimRegistryEventMicrosoft365D](../asim/asimregistryeventmicrosoft365d.md) | RegistryEvent | Microsoft 365 Defender for Endpoint |  |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

