# AlertInfo

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Alerts from Microsoft Defender for Endpoint, Microsoft Defender for Office 365, Microsoft Defender for Cloud Apps, and Microsoft Defender for Identity, including severity information and threat categorization

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/alertinfo) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-alertinfo-table) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (13 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/alertinfo)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| AlertId | string | Unique identifier for the alert. |
| AttackTechniques | string | MITRE ATT&amp;CK techniques associated with the activity that triggered the alert. |
| Category | string | Type of threat indicator or breach activity identified by the alert. |
| DetectionSource | string | Detection technology or sensor that identified the notable component or activity. |
| ServiceSource | string | Product or service that provided the alert information. |
| Severity | string | Indicates the potential impact (high, medium, or low) of the threat indicator or breach activity identified by the alert. |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time (UTC) when the record was generated. |
| Title | string | Title of the alert. |
| Type | string | The name of the table |

## Solutions (1)

This table is used by the following solutions:

- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

---

## Content Items Using This Table (35)

### Analytic Rules (1)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `Title in "An active \,Echo command over pipe on localhost,Event log was cleared,File backups were deleted,Known attack framework activity was observed,Suspicious \,Suspicious decoded content,Suspicious process launch by Rundll32.exe,\,behavior was prevented,malware was detected"`

| Analytic Rule |
|:-------------|
| [Potential Ransomware activity related to Cobalt Strike](../content/microsoft-defender-xdr-potential-ransomware-activity-related-to-cobalt-strike-4bd9ce9d-8586-4beb-8fdb-bd018cacbe7d-af20888f.md) |

### Hunting Queries (32)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Alerts Related to Log4j Vulnerability](../content/microsoft-defender-xdr-alerts-related-to-log4j-vulnerability-e7791695-c103-4d20-a75a-53e90788616b-ae157950.md) | `Title == "Suspicious script launched"` |
| [Devices with Log4j vulnerability alerts and additional other alert related context](../content/microsoft-defender-xdr-devices-with-log4j-vulnerability-alerts-and-additional-other-alert-related-contex-8fe88892-3a55-4220-9141-939a8e7a15c5-0d5237c7.md) |  |
| [Microsoft Teams chat initiated by a suspicious external user](../content/microsoft-defender-xdr-microsoft-teams-chat-initiated-by-a-suspicious-external-user-b8eb3e2e-0f95-458e-b6d1-fe36a0ee8310-2a289095.md) | `Title == "Microsoft Teams chat initiated by a suspicious external user"` |
| [Potential Ransomware activity related to Cobalt Strike](../content/microsoft-defender-xdr-potential-ransomware-activity-related-to-cobalt-strike-74cc0176-3900-440e-b179-45d6a957145a-62723a0f.md) | `Title in "An active \,Echo command over pipe on localhost,Event log was cleared,File backups were deleted,Known attack framework activity was observed,Suspicious \,Suspicious decoded content,Suspicious process launch by Rundll32.exe,\,behavior was prevented,malware was detected"` |

**GitHub Only:**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Alerts related to Log4j vulnerability](../content/github-only-alerts-related-to-log4j-vulnerability-ef76733a-86ab-4592-b341-64a4b369f4b7-22008ff5.md) | `Title == "Suspicious script launched"` |
| [Antivirus detections (1)](../content/github-only-antivirus-detections-1-05250700-5123-45be-826d-dd14c623fade-0bd2622d.md) | `Title contains "Defender AV detected"` |
| [Baseline Comparison](../content/github-only-baseline-comparison-4d17ae75-87e8-4272-9aec-16448b1430bc-6e7e6931.md) |  |
| [Cobalt Strike Lateral Movement](../content/github-only-cobalt-strike-lateral-movement-1212ae5c-43cc-4c17-bcbb-d23cf9ad3483-6573d950.md) | `Title in "File dropped`<br>`launched from remote location,Suspicious transfer of an executable file"` |
| [Devices with Log4j vulnerability alerts and additional other alert related context](../content/github-only-devices-with-log4j-vulnerability-alerts-and-additional-other-alert-related-context-f0f222ae-a6c9-4992-9fdb-4b1601da244c-7e659d00.md) |  |
| [Distribution from remote location](../content/github-only-distribution-from-remote-location-4e070afe-7a9b-4313-a964-c3168fffc1e2-3a8453c3.md) | `Title == "File dropped`<br>`launched from remote location"` |
| [Events surrounding alert (1)](../content/github-only-events-surrounding-alert-1-55a29d46-2cd5-44af-80aa-20d0ac4c86f8-fa59386c.md) |  |
| [Events surrounding alert (3)](../content/github-only-events-surrounding-alert-3-c4955324-02ff-46fa-a642-64952334482d-11006aac.md) |  |
| [ExploitGuardBlockOfficeChildProcess (1)](../content/github-only-exploitguardblockofficechildprocess-1-fed32a95-bba6-47a6-8519-8d2a2cee97f9-0998c1f7.md) |  |
| [ExploitGuardBlockOfficeChildProcess (3)](../content/github-only-exploitguardblockofficechildprocess-3-521f58f9-92b8-407b-9434-798a9f527b3c-86c63dc2.md) |  |
| [File Backup Deletion Alerts](../content/github-only-file-backup-deletion-alerts-21444f27-9184-45bf-a335-7b7169a56790-6fbb279e.md) | `Title == "File backups were deleted"` |
| [Gootkit File Delivery](../content/github-only-gootkit-file-delivery-11d725f5-93d8-4b34-a64f-bf8450cdb184-deb3f803.md) | `Title == "Suspected delivery of Gootkit malware"` |
| [Gootkit-malware](../content/github-only-gootkit-malware-c8796d76-9a84-4cc8-91b5-d01f882869d4-8f087754.md) | `Title == "Suspected delivery of Gootkit malware"` |
| [ImpersonatedUserFootprint](../content/github-only-impersonateduserfootprint-aeb65be9-7a40-409e-a227-56ebbcf33de4-ee8b7da4.md) |  |
| [Microsoft Teams chat initiated by a suspicious external user](../content/github-only-microsoft-teams-chat-initiated-by-a-suspicious-external-user-8b88ecaf-88b3-4d70-814f-a55b96748ff5-5307d1cf.md) | `Title == "Microsoft Teams chat initiated by a suspicious external user"` |
| [Open email link](../content/github-only-open-email-link-67be3fdd-6942-45f8-8663-d825b61d1ab9-581f8253.md) |  |
| [Potential ransomware activity related to Cobalt Strike](../content/github-only-potential-ransomware-activity-related-to-cobalt-strike-95db9b9c-7a12-4c0b-85c8-1c54f67c5ac7-3e03f975.md) | `Title in "An active \,Echo command over pipe on localhost,Event log was cleared,File backups were deleted,Known attack framework activity was observed,Suspicious \,Suspicious decoded content,Suspicious process launch by Rundll32.exe,\,behavior was prevented,malware was detected"` |
| [Ransomware hits healthcare - Backup deletion](../content/github-only-ransomware-hits-healthcare-backup-deletion-b0188e2d-734d-4d54-8e70-c4157a195bb1-839b41cd.md) | `Title == "File backups were deleted"` |
| [Ransomware hits healthcare - Possible compromised accounts](../content/github-only-ransomware-hits-healthcare-possible-compromised-accounts-f4506828-36f5-4668-8203-de062963be63-3aa55254.md) | `Title in "Event log was cleared,File backups were deleted,Suspicious decoded content,malware was detected"` |
| [Sticky Keys](../content/github-only-sticky-keys-3c82774a-df78-44eb-9ab3-13ef37c63ae4-282aa16f.md) | `Title == "Sticky Keys binary hijack detected"` |
| [SuspiciousUrlClicked](../content/github-only-suspiciousurlclicked-959f8d6a-53b8-488f-a628-999b3410702e-9def1dab.md) |  |
| [URL click on ZAP email](../content/microsoft-defender-xdr-url-click-on-zap-email-efe27064-6d35-4720-b7f5-e0326695613d-1ef7f440.md) | `Title contains "Email messages containing malicious URL removed after delivery"` |
| [URL click on ZAP email](../content/github-only-url-click-on-zap-email-efe27064-6d35-4720-b7f5-e0326695613d-2bbd70d9.md) | `Title contains "Email messages containing malicious URL removed after delivery"` |
| [URLClick details based on malicious URL click alert](../content/microsoft-defender-xdr-urlclick-details-based-on-malicious-url-click-alert-03e61096-20d0-46eb-b8e0-a507dd00a19f-7d8998d0.md) | `Title contains "Potentially malicious"` |
| [URLClick details based on malicious URL click alert](../content/github-only-urlclick-details-based-on-malicious-url-click-alert-03e61096-20d0-46eb-b8e0-a507dd00a19f-8acf46eb.md) | `Title contains "Potentially malicious"` |
| [backup-deletion](../content/github-only-backup-deletion-1df2054c-5c63-4a2c-943b-0069af45bd38-2c1d187c.md) | `Title == "File backups were deleted"` |
| [cobalt-strike](../content/github-only-cobalt-strike-0a6e58fa-0689-418e-b05c-758c41664081-42d4a357.md) | `Title in "Event log was cleared,File backups were deleted,Suspicious decoded content,\,malware was detected"` |
| [identify-accounts-logged-on-to-endpoints-affected-by-cobalt-strike](../content/github-only-identify-accounts-logged-on-to-endpoints-affected-by-cobalt-strike-28558a10-d431-443b-886d-543a5b5d1871-a8644f1f.md) | `Title in "Event log was cleared,File backups were deleted,Suspicious decoded content,\,malware was detected"` |

### Workbooks (2)

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DoDZeroTrustWorkbook](../content/github-only-dodzerotrustworkbook-844294c8.md) |  |
| [ZeroTrustStrategyWorkbook](../content/github-only-zerotruststrategyworkbook-cd80dc2b.md) |  |

## Selection Criteria Summary (13 criteria, 23 total references)

References by type: 0 connectors, 23 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Title in "An active \,Echo command over pipe on localhost,Event log was cleared,File backups were deleted,Known attack framework activity was observed,Suspicious \,Suspicious decoded content,Suspicious process launch by Rundll32.exe,\,behavior was prevented,malware was detected"` | - | 3 | - | - | **3** |
| `Title == "File backups were deleted"` | - | 3 | - | - | **3** |
| `Title == "Microsoft Teams chat initiated by a suspicious external user"` | - | 2 | - | - | **2** |
| `Title contains "Email messages containing malicious URL removed after delivery"` | - | 2 | - | - | **2** |
| `Title contains "Potentially malicious"` | - | 2 | - | - | **2** |
| `Title == "Suspicious script launched"` | - | 2 | - | - | **2** |
| `Title in "Event log was cleared,File backups were deleted,Suspicious decoded content,\,malware was detected"` | - | 2 | - | - | **2** |
| `Title == "Suspected delivery of Gootkit malware"` | - | 2 | - | - | **2** |
| `Title in "Event log was cleared,File backups were deleted,Suspicious decoded content,malware was detected"` | - | 1 | - | - | **1** |
| `Title contains "Defender AV detected"` | - | 1 | - | - | **1** |
| `Title == "File dropped`<br>`launched from remote location"` | - | 1 | - | - | **1** |
| `Title == "Sticky Keys binary hijack detected"` | - | 1 | - | - | **1** |
| `Title in "File dropped`<br>`launched from remote location,Suspicious transfer of an executable file"` | - | 1 | - | - | **1** |
| **Total** | **0** | **23** | **0** | **0** | **23** |

### Title

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `File backups were deleted` | - | 9 | - | - | **9** |
| `Event log was cleared` | - | 6 | - | - | **6** |
| `Suspicious decoded content` | - | 6 | - | - | **6** |
| `malware was detected` | - | 6 | - | - | **6** |
| `\` | - | 5 | - | - | **5** |
| `An active \` | - | 3 | - | - | **3** |
| `Echo command over pipe on localhost` | - | 3 | - | - | **3** |
| `Known attack framework activity was observed` | - | 3 | - | - | **3** |
| `Suspicious \` | - | 3 | - | - | **3** |
| `Suspicious process launch by Rundll32.exe` | - | 3 | - | - | **3** |
| `behavior was prevented` | - | 3 | - | - | **3** |
| `Microsoft Teams chat initiated by a suspicious external user` | - | 2 | - | - | **2** |
| `contains Email messages containing malicious URL removed after delivery` | - | 2 | - | - | **2** |
| `contains Potentially malicious` | - | 2 | - | - | **2** |
| `Suspicious script launched` | - | 2 | - | - | **2** |
| `Suspected delivery of Gootkit malware` | - | 2 | - | - | **2** |
| `File dropped` | - | 2 | - | - | **2** |
| `contains Defender AV detected` | - | 1 | - | - | **1** |
| `Sticky Keys binary hijack detected` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

