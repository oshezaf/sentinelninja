# AlertEvidence

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Files, IP addresses, URLs, users, or devices associated with alerts

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/alertevidence) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-alertevidence-table) |

## Solutions (6)

This table is used by the following solutions:

- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [Vectra XDR](../solutions/vectra-xdr.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (10)

### Analytic Rules (2)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `ActionType == "BrowserLaunchedToOpenUrl"`

| Content Item |
|:-------------|
| [Possible Phishing with CSL and Network Sessions](../content/microsoft-defender-xdr-possible-phishing-with-csl-and-network-sessions-6c3a1258-bcdd-4fcd-b753-1a9bc826ce12-631549a4.md) |

**In solution [Vectra XDR](../solutions/vectra-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Defender Alert Evidence](../content/vectra-xdr-defender-alert-evidence-8138863e-e55f-4f02-ac94-72796e203d27-c82db71e.md) |  |

### Hunting Queries (3)

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MDO daily detection summary report](../content/microsoft-defender-xdr-mdo-daily-detection-summary-report-deb4b2c6-c10e-4044-8cf4-84243e40db73-ce48d397.md) |  |
| [URL click on ZAP email](../content/microsoft-defender-xdr-url-click-on-zap-email-efe27064-6d35-4720-b7f5-e0326695613d-1ef7f440.md) |  |
| [URLClick details based on malicious URL click alert](../content/microsoft-defender-xdr-urlclick-details-based-on-malicious-url-click-alert-03e61096-20d0-46eb-b8e0-a507dd00a19f-7d8998d0.md) |  |

### Workbooks (5)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |  |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):** `ActionType in "Add member to role,Add user,InteractiveLogon,RemoteInteractiveLogon,Reset user password,ResourceAccess,Sign-in,Update user"`

| Content Item |
|:-------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `ActionType in "AdminSubmissionSubmitted,AttackSimUserSubmission,ClickBlocked,Malware ZAP,Phish ZAP,Spam ZAP,UserSubmission"`<br>`ActionType == "Automated Remediation"`<br>`ActionType contains "Submission"`<br>`ActionType contains "UserSubmission"`<br>`ActionType contains "ZAP"`<br>`ActionType has "Malware ZAP"`<br>`ActionType has "Phish ZAP"`<br>`ActionType has "Spam ZAP"`<br>`ActionType has "ZAP"`<br>`ActionType has_any "ClickAllowed"`<br>`ActionType has_any "ClickBlocked"`<br>`ActionType has_any "UrlErrorPage"`<br>`ActionType has_any "UrlScanInProgress"`

| Content Item |
|:-------------|
| [MicrosoftDefenderForOffice365detectionsandinsights](../content/microsoft-defender-xdr-microsoftdefenderforoffice365detectionsandinsights-c34bc8fb.md) |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |  |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):** `ActionType in "Add member to role,Add user,InteractiveLogon,RemoteInteractiveLogon,Reset user password,ResourceAccess,Sign-in,Update user"`

| Content Item |
|:-------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAlertEventMicrosoftDefenderXDR](../asim/asimalerteventmicrosoftdefenderxdr.md) | AlertEvent | Microsoft Defender XDR |  |

## Selection Criteria Summary (3 criteria, 4 total references)

References by type: 0 connectors, 4 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ActionType in "Add member to role,Add user,InteractiveLogon,RemoteInteractiveLogon,Reset user password,ResourceAccess,Sign-in,Update user"` | - | 2 | - | - | **2** |
| `ActionType == "BrowserLaunchedToOpenUrl"` | - | 1 | - | - | **1** |
| `ActionType in "AdminSubmissionSubmitted,AttackSimUserSubmission,ClickBlocked,Malware ZAP,Phish ZAP,Spam ZAP,UserSubmission"`<br>`ActionType == "Automated Remediation"`<br>`ActionType contains "Submission"`<br>`ActionType contains "UserSubmission"`<br>`ActionType contains "ZAP"`<br>`ActionType has "Malware ZAP"`<br>`ActionType has "Phish ZAP"`<br>`ActionType has "Spam ZAP"`<br>`ActionType has "ZAP"`<br>`ActionType has_any "ClickAllowed"`<br>`ActionType has_any "ClickBlocked"`<br>`ActionType has_any "UrlErrorPage"`<br>`ActionType has_any "UrlScanInProgress"` | - | 1 | - | - | **1** |
| **Total** | **0** | **4** | **0** | **0** | **4** |

### ActionType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Add member to role` | - | 2 | - | - | **2** |
| `Add user` | - | 2 | - | - | **2** |
| `InteractiveLogon` | - | 2 | - | - | **2** |
| `RemoteInteractiveLogon` | - | 2 | - | - | **2** |
| `Reset user password` | - | 2 | - | - | **2** |
| `ResourceAccess` | - | 2 | - | - | **2** |
| `Sign-in` | - | 2 | - | - | **2** |
| `Update user` | - | 2 | - | - | **2** |
| `BrowserLaunchedToOpenUrl` | - | 1 | - | - | **1** |
| `AdminSubmissionSubmitted` | - | 1 | - | - | **1** |
| `AttackSimUserSubmission` | - | 1 | - | - | **1** |
| `ClickBlocked` | - | 1 | - | - | **1** |
| `Malware ZAP` | - | 1 | - | - | **1** |
| `Phish ZAP` | - | 1 | - | - | **1** |
| `Spam ZAP` | - | 1 | - | - | **1** |
| `UserSubmission` | - | 1 | - | - | **1** |
| `Automated Remediation` | - | 1 | - | - | **1** |
| `contains Submission` | - | 1 | - | - | **1** |
| `contains UserSubmission` | - | 1 | - | - | **1** |
| `contains ZAP` | - | 1 | - | - | **1** |
| `has Malware ZAP` | - | 1 | - | - | **1** |
| `has Phish ZAP` | - | 1 | - | - | **1** |
| `has Spam ZAP` | - | 1 | - | - | **1** |
| `has ZAP` | - | 1 | - | - | **1** |
| `has_any ClickAllowed` | - | 1 | - | - | **1** |
| `has_any ClickBlocked` | - | 1 | - | - | **1** |
| `has_any UrlErrorPage` | - | 1 | - | - | **1** |
| `has_any UrlScanInProgress` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

