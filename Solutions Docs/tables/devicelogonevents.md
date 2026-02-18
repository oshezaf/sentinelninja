# DeviceLogonEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Sign-ins and other authentication events on devices

| Attribute | Value |
|:----------|:------|
| **Category** | MDE |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devicelogonevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-devicelogonevents-table) |

## Solutions (6)

This table is used by the following solutions:

- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [FalconFriday](../solutions/falconfriday.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Standalone Content](../solutions/standalone-content.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (32)

### Analytic Rules (3)

**In solution [FalconFriday](../solutions/falconfriday.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Access Token Manipulation - Create Process with Token](../content/falconfriday-access-token-manipulation-create-process-with-token-8df80270-b4fa-4a7a-931e-8d17c0b321ae-d1e3f3fd.md) |  |
| [Password Spraying](../content/falconfriday-password-spraying-e00f72ab-fea1-4a31-9ecc-eea6397cd38d-9fc40186.md) |  |
| [Remote Desktop Protocol - SharpRDP](../content/falconfriday-remote-desktop-protocol-sharprdp-cc46e76c-0d04-40b0-9c8b-929aa40513e7-7ea028f9.md) |  |

### Hunting Queries (20)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Account Brute Force](../content/microsoft-defender-xdr-account-brute-force-4095e430-d3f4-426f-92c5-aa5c5e137ca0-7ac90fd9.md) |  |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MDE_DeviceInventory-LastUserLoggedIn](../content/standalone-content-mde-deviceinventory-lastuserloggedin-39226090-3c73-407f-bef8-9a09f98fc668-613b4c17.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Account brute force](../content/github-only-account-brute-force-ab619659-ab7c-4ca4-be0c-ca71a07bf4cd-13940f40.md) |  |
| [Account brute force (1)](../content/github-only-account-brute-force-1-89cc68d2-1330-40ce-aaca-5c76fc4f52b3-c435332d.md) |  |
| [Baseline Comparison](../content/github-only-baseline-comparison-4d17ae75-87e8-4272-9aec-16448b1430bc-6e7e6931.md) |  |
| [Device Logons from Unknown IPs](../content/github-only-device-logons-from-unknown-ips-a6d76204-efb2-4ccd-a068-d5a9e6876236-62ddb799.md) |  |
| [Events surrounding alert](../content/github-only-events-surrounding-alert-a4dfa95d-eb8a-4d71-b669-dcb6dcfcf37a-e671473f.md) |  |
| [Events surrounding alert (1)](../content/github-only-events-surrounding-alert-1-55a29d46-2cd5-44af-80aa-20d0ac4c86f8-fa59386c.md) |  |
| [Events surrounding alert (2)](../content/github-only-events-surrounding-alert-2-683549f4-4f4a-4cc8-becf-ff5b91dc6f07-78e30d23.md) |  |
| [Events surrounding alert (3)](../content/github-only-events-surrounding-alert-3-c4955324-02ff-46fa-a642-64952334482d-11006aac.md) |  |
| [Failed Logon Attempt](../content/github-only-failed-logon-attempt-95d68a9c-91d3-41ce-ab9f-f1baadc74f8a-5ac66053.md) |  |
| [ImpersonatedUserFootprint](../content/github-only-impersonateduserfootprint-aeb65be9-7a40-409e-a227-56ebbcf33de4-ee8b7da4.md) |  |
| [Network Logons with Local Accounts](../content/github-only-network-logons-with-local-accounts-95a44d0f-b717-4e34-902f-2fad4d6fcbe3-eb5d3cb9.md) |  |
| [Non-local logons with -500 account](../content/github-only-non-local-logons-with-500-account-435fead8-a25e-44be-9508-1985f8d724e6-8ff66fb2.md) |  |
| [Non_intended_user_logon](../content/github-only-non-intended-user-logon-ef645ae9-da22-4ebe-b2ad-c3ad024b807c-7d6ee057.md) |  |
| [insider-threat-detection-queries](../content/github-only-insider-threat-detection-queries-d69ccf9a-4592-41db-a78f-f24108fea06e-bfaa02b6.md) |  |
| [insider-threat-detection-queries (15)](../content/github-only-insider-threat-detection-queries-15-659e686d-850e-4240-a339-b24928f95e90-614419df.md) |  |
| [insider-threat-detection-queries (19)](../content/github-only-insider-threat-detection-queries-19-a358a812-0e1b-4cbb-a91c-0bb1dbd3ea13-e876eef3.md) |  |
| [localAdminAccountLogon](../content/github-only-localadminaccountlogon-2211b57b-7d13-435d-89a9-40f333249605-83bc8635.md) |  |
| [rare_sch_task_with_activity](../content/github-only-rare-sch-task-with-activity-ce76992a-8cd6-4605-9f45-cde9aae87244-3f342058.md) |  |

### Workbooks (9)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |  |

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md) |  |

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md) |  |

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DoDZeroTrustWorkbook](../content/github-only-dodzerotrustworkbook-844294c8.md) |  |
| [InvestigationInsights](../content/github-only-investigationinsights-8694eaf8.md) |  |
| [MicrosoftDefenderForEndPoint](../content/github-only-microsoftdefenderforendpoint-ac005534.md) |  |
| [MicrosoftSentinelDeploymentandMigrationTracker](../content/github-only-microsoftsentineldeploymentandmigrationtracker-1aa72202.md) |  |
| [ZeroTrustStrategyWorkbook](../content/github-only-zerotruststrategyworkbook-cd80dc2b.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuthenticationM365Defender](../asim/asimauthenticationm365defender.md) | Authentication | M365 Defender for EndPoint |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

