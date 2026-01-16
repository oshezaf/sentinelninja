# DeviceLogonEvents

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

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

## Solutions (7)

This table is used by the following solutions:

- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [FalconFriday](../solutions/falconfriday.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Standalone Content](../solutions/standalone-content.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (40)

### Analytic Rules (3)

**In solution [FalconFriday](../solutions/falconfriday.md):**
- [Access Token Manipulation - Create Process with Token](../content/falconfriday-access-token-manipulation-create-process-with-token-8df80270-b4fa-4a7a-931e-8d17c0b321ae-d1e3f3fd.md)
- [Password Spraying](../content/falconfriday-password-spraying-e00f72ab-fea1-4a31-9ecc-eea6397cd38d-9fc40186.md)
- [Remote Desktop Protocol - SharpRDP](../content/falconfriday-remote-desktop-protocol-sharprdp-cc46e76c-0d04-40b0-9c8b-929aa40513e7-7ea028f9.md)

### Hunting Queries (20)

**In solution [](../solutions/.md):**
- [Account brute force](../content/-account-brute-force-ab619659-ab7c-4ca4-be0c-ca71a07bf4cd-926e9f47.md)
- [Account brute force (1)](../content/-account-brute-force-1-89cc68d2-1330-40ce-aaca-5c76fc4f52b3-48d6d24b.md)
- [Baseline Comparison](../content/-baseline-comparison-4d17ae75-87e8-4272-9aec-16448b1430bc-7679c313.md)
- [Device Logons from Unknown IPs](../content/-device-logons-from-unknown-ips-a6d76204-efb2-4ccd-a068-d5a9e6876236-51c24d96.md)
- [Events surrounding alert](../content/-events-surrounding-alert-a4dfa95d-eb8a-4d71-b669-dcb6dcfcf37a-b30ca74e.md)
- [Events surrounding alert (1)](../content/-events-surrounding-alert-1-55a29d46-2cd5-44af-80aa-20d0ac4c86f8-cc21e9aa.md)
- [Events surrounding alert (2)](../content/-events-surrounding-alert-2-683549f4-4f4a-4cc8-becf-ff5b91dc6f07-cd98588a.md)
- [Events surrounding alert (3)](../content/-events-surrounding-alert-3-c4955324-02ff-46fa-a642-64952334482d-55825ea1.md)
- [Failed Logon Attempt](../content/-failed-logon-attempt-95d68a9c-91d3-41ce-ab9f-f1baadc74f8a-941cf23a.md)
- [ImpersonatedUserFootprint](../content/-impersonateduserfootprint-aeb65be9-7a40-409e-a227-56ebbcf33de4-5ce685b6.md)
- [Network Logons with Local Accounts](../content/-network-logons-with-local-accounts-95a44d0f-b717-4e34-902f-2fad4d6fcbe3-39b1c668.md)
- [Non-local logons with -500 account](../content/-non-local-logons-with-500-account-435fead8-a25e-44be-9508-1985f8d724e6-ea4dbc41.md)
- [Non_intended_user_logon](../content/-non-intended-user-logon-ef645ae9-da22-4ebe-b2ad-c3ad024b807c-db717488.md)
- [insider-threat-detection-queries](../content/-insider-threat-detection-queries-d69ccf9a-4592-41db-a78f-f24108fea06e-3bd05454.md)
- [insider-threat-detection-queries (15)](../content/-insider-threat-detection-queries-15-659e686d-850e-4240-a339-b24928f95e90-9ac2742c.md)
- [insider-threat-detection-queries (19)](../content/-insider-threat-detection-queries-19-a358a812-0e1b-4cbb-a91c-0bb1dbd3ea13-3cdfce24.md)
- [localAdminAccountLogon](../content/-localadminaccountlogon-2211b57b-7d13-435d-89a9-40f333249605-10a6f374.md)
- [rare_sch_task_with_activity](../content/-rare-sch-task-with-activity-ce76992a-8cd6-4605-9f45-cde9aae87244-4e918578.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Account Brute Force](../content/microsoft-defender-xdr-account-brute-force-4095e430-d3f4-426f-92c5-aa5c5e137ca0-7ac90fd9.md)

**In solution [Standalone Content](../solutions/standalone-content.md):**
- [MDE_DeviceInventory-LastUserLoggedIn](../content/standalone-content-mde-deviceinventory-lastuserloggedin-39226090-3c73-407f-bef8-9a09f98fc668-613b4c17.md)

### Workbooks (17)

**In solution [](../solutions/.md):**
- [AzureSentinelCost](../content/-azuresentinelcost-75f5c34b.md)
- [DoDZeroTrustWorkbook](../content/-dodzerotrustworkbook-93adac1a.md)
- [InvestigationInsights](../content/-investigationinsights-2251e94c.md)
- [MicrosoftDefenderForEndPoint](../content/-microsoftdefenderforendpoint-f98fcc1e.md)
- [MicrosoftSentinelCostEUR](../content/-microsoftsentinelcosteur-aa190070.md)
- [MicrosoftSentinelCostGBP](../content/-microsoftsentinelcostgbp-3469a46b.md)
- [MicrosoftSentinelDeploymentandMigrationTracker](../content/-microsoftsentineldeploymentandmigrationtracker-da237854.md)
- [OptimizationWorkbook](../content/-optimizationworkbook-0bd24445.md)
- [SentinelCosts](../content/-sentinelcosts-dec2b79d.md)
- [WorkspaceUsage](../content/-workspaceusage-0da12cea.md)
- [ZeroTrustStrategyWorkbook](../content/-zerotruststrategyworkbook-e9062fae.md)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**
- [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MicrosoftDefenderForEndPoint](../content/microsoft-defender-xdr-microsoftdefenderforendpoint-1735d964.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md)
- [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md)

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**
- [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md)

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product |
|:-------|:-------|:--------|
| [ASimAuthenticationM365Defender](../asim/asimauthenticationm365defender.md) | Authentication |  |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

