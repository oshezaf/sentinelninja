# DeviceInfo

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Machine information, including OS information

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/deviceinfo) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-deviceinfo-table) |

## Solutions (6)

This table is used by the following solutions:

- [HIPAA Compliance](../solutions/hipaa-compliance.md)
- [Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Microsoft Entra ID](../solutions/microsoft-entra-id.md)
- [Standalone Content](../solutions/standalone-content.md)
- [Zinc Open Source](../solutions/zinc-open-source.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (40)

### Analytic Rules (10)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Dataverse - Terminated employee exfiltration to USB drive](../content/microsoft-business-applications-dataverse-terminated-employee-exfiltration-to-usb-drive-c5e75cb6-cea0-49c2-a998-da414035aac1-627b05d7.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AV detections related to SpringShell Vulnerability](../content/microsoft-defender-xdr-av-detections-related-to-springshell-vulnerability-3bd33158-3f0b-47e3-a50f-7c20a1b88038-091061ce.md) |  |
| [AV detections related to Tarrask malware](../content/microsoft-defender-xdr-av-detections-related-to-tarrask-malware-1785d372-b9fe-4283-96a6-3a1d83cabfd1-8b612d87.md) |  |

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [[Deprecated] Explicit MFA Deny](../content/microsoft-entra-id-[deprecated]-explicit-mfa-deny-a22740ec-fc1e-4c91-8de6-c29c6450ad00-04320464.md) |  |

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AV detections related to Zinc actors](../content/zinc-open-source-av-detections-related-to-zinc-actors-3705158d-e008-49c9-92dd-e538e1549090-62580aab.md) |  |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AV detections related to Dev-0530 actors](../content/standalone-content-av-detections-related-to-dev-0530-actors-5f171045-88ab-4634-baae-a7b6509f483b-61a76c5a.md) |  |
| [AV detections related to Europium actors](../content/standalone-content-av-detections-related-to-europium-actors-186970ee-5001-41c1-8c73-3178f75ce96a-1724290f.md) |  |
| [AV detections related to Hive Ransomware](../content/standalone-content-av-detections-related-to-hive-ransomware-4e5914a4-2ccd-429d-a845-fa597f0bd8c5-0f4ac020.md) |  |
| [Microsoft Defender for Endpoint (MDE) signatures for Azure Synapse pipelines and Azure Data Factory](../content/standalone-content-microsoft-defender-for-endpoint-mde-signatures-for-azure-synapse-pipelines-and-azure--a333d8bf-22a3-4c55-a1e9-5f0a135c0253-63a30dd5.md) |  |
| [Solorigate Defender Detections](../content/standalone-content-solorigate-defender-detections-e70fa6e0-796a-4e85-9420-98b17b0bb749-ecd5908d.md) |  |

### Hunting Queries (22)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Dataverse - Dataverse export copied to USB devices](../content/microsoft-business-applications-dataverse-dataverse-export-copied-to-usb-devices-f9658e11-e277-4a65-8f91-2cb94cf7497c-664d805c.md) |  |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MDE_Find_Out_of_date_clients](../content/standalone-content-mde-find-out-of-date-clients-bade21c4-36b2-4661-a895-776790aef6a3-a7c1dba3.md) |  |
| [MDE_FindstatuschangefromExposurelevel](../content/standalone-content-mde-findstatuschangefromexposurelevel-c555a09f-361c-4f77-b06d-14bb139ea5ad-09da3633.md) |  |
| [MDE_ListAllNotOnboardedEnpoints](../content/standalone-content-mde-listallnotonboardedenpoints-cf984ec4-d67e-4d45-a2e5-0c97fb1b4c22-4f65c0aa.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Anomalous Device Models](../content/github-only-anomalous-device-models-9ec67c0b-e319-4f1c-bbea-67119d03740a-3de88416.md) |  |
| [Baseline Comparison](../content/github-only-baseline-comparison-4d17ae75-87e8-4272-9aec-16448b1430bc-6e7e6931.md) |  |
| [Can Be Onboarded Devices](../content/github-only-can-be-onboarded-devices-90f30a21-5de6-4c5e-85cf-d81347361aec-f16fa7b2.md) |  |
| [Commonality of Operating Systems](../content/github-only-commonality-of-operating-systems-5a540d69-a196-4e1f-9029-df8a100aa4a7-5e991975.md) |  |
| [Count and Percentage of DeviceType out of total inventory](../content/github-only-count-and-percentage-of-devicetype-out-of-total-inventory-37b7a9cb-1304-49c3-84e6-9de8545f4043-724ba48a.md) |  |
| [DetectTorRelayConnectivity](../content/github-only-detecttorrelayconnectivity-26be4a5f-7e6f-4c2e-967d-467bddcbb51a-a133b014.md) |  |
| [Device Count by DNS Suffix](../content/github-only-device-count-by-dns-suffix-fcd06834-86f9-43ce-817a-b5104ef279e0-0aa68d2a.md) |  |
| [Device uptime calculation](../content/github-only-device-uptime-calculation-2fe0bb17-2e2e-407f-b82e-baf16161196a-c5dc58ff.md) |  |
| [Devices By Specific DeviceType and DeviceSubtype](../content/github-only-devices-by-specific-devicetype-and-devicesubtype-88adf141-5058-4f0f-a665-cd56eed754a5-fa879b42.md) |  |
| [Machine info from IP address (1)](../content/github-only-machine-info-from-ip-address-1-49cf658e-f446-476e-a7da-30909caaa3e3-db8ff898.md) |  |
| [Machine info from IP address (2)](../content/github-only-machine-info-from-ip-address-2-a6208585-9910-4855-b847-dfd49ff9beb1-46ffe11d.md) |  |
| [Machine info from IP address (3)](../content/github-only-machine-info-from-ip-address-3-e10dd84f-e4d6-4b21-a9da-816699de0ba8-0cc85c2d.md) |  |
| [Non_intended_user_logon](../content/github-only-non-intended-user-logon-ef645ae9-da22-4ebe-b2ad-c3ad024b807c-7d6ee057.md) |  |
| [NotOnboarded Devices by DeviceName Prefix](../content/github-only-notonboarded-devices-by-devicename-prefix-6ed94608-316e-4a2d-85dd-91fc9294749e-57327790.md) |  |
| [NotOnboarded Devices by DeviceName Suffix](../content/github-only-notonboarded-devices-by-devicename-suffix-bfb4c0e1-aa4b-45c4-9035-75c9ae63ce21-8f8cdb36.md) |  |
| [Potential SSH Tunnel to AAD Connect Host](../content/github-only-potential-ssh-tunnel-to-aad-connect-host-7f52bc1d-138e-4a02-af25-a04dbea85646-782fcf41.md) |  |
| [detect-suspicious-rdp-connections](../content/github-only-detect-suspicious-rdp-connections-f2458594-5671-493d-9c08-aee4bf783a1d-e5b62958.md) |  |
| [devices_with_vuln_and_users_received_payload](../content/github-only-devices-with-vuln-and-users-received-payload-fbcb7ff3-0d5a-4565-9caa-fc454138081f-1adec9cd.md) |  |

### Workbooks (8)

**In solution [HIPAA Compliance](../solutions/hipaa-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [HIPAACompliance](../content/hipaa-compliance-hipaacompliance-3850f8c8.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `ActionType in "FileCreated,UsbDriveMounted"`

| Content Item |
|:-------------|
| [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md) |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DoDZeroTrustWorkbook](../content/github-only-dodzerotrustworkbook-844294c8.md) | `ActionType == "AntivirusScanCompleted"` |
| [ExchangeCompromiseHunting](../content/github-only-exchangecompromisehunting-4fe3c3f0.md) | `ActionType == "FileCreated"` |
| [MicrosoftDefenderForEndPoint](../content/github-only-microsoftdefenderforendpoint-ac005534.md) | `ActionType in "FileCreated,UsbDriveMounted"` |
| [MicrosoftSentinelDeploymentandMigrationTracker](../content/github-only-microsoftsentineldeploymentandmigrationtracker-1aa72202.md) |  |
| [SentinelWorkspaceReconTools](../content/github-only-sentinelworkspacerecontools-74b07e4a.md) |  |
| [ZeroTrustStrategyWorkbook](../content/github-only-zerotruststrategyworkbook-cd80dc2b.md) | `ActionType == "AntivirusScanCompleted"` |

## Selection Criteria Summary (1 criteria, 1 total references)

References by type: 0 connectors, 1 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ActionType in "FileCreated,UsbDriveMounted"` | - | 1 | - | - | **1** |
| **Total** | **0** | **1** | **0** | **0** | **1** |

### ActionType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `FileCreated` | - | 1 | - | - | **1** |
| `UsbDriveMounted` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

