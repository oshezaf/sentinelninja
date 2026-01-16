# AlertEvidence

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

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

## Solutions (8)

This table is used by the following solutions:

- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Standalone Content](../solutions/standalone-content.md)
- [Vectra XDR](../solutions/vectra-xdr.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

## Connectors (1)

This table is ingested by the following connectors:

- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md)

---

## Content Items Using This Table (27)

### Analytic Rules (2)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [Possible Phishing with CSL and Network Sessions](../content/microsoft-defender-xdr-possible-phishing-with-csl-and-network-sessions-6c3a1258-bcdd-4fcd-b753-1a9bc826ce12-631549a4.md)

**In solution [Vectra XDR](../solutions/vectra-xdr.md):**
- [Defender Alert Evidence](../content/vectra-xdr-defender-alert-evidence-8138863e-e55f-4f02-ac94-72796e203d27-c82db71e.md)

### Hunting Queries (12)

**In solution [](../solutions/.md):**
- [Baseline Comparison](../content/-baseline-comparison-4d17ae75-87e8-4272-9aec-16448b1430bc-7679c313.md)
- [Identify Microsoft Defender Antivirus detection related to EUROPIUM](../content/-identify-microsoft-defender-antivirus-detection-related-to-europium-d02275d6-45ba-4ddc-be90-8fa260aebe55-b6f95791.md)
- [ImpersonatedUserFootprint](../content/-impersonateduserfootprint-aeb65be9-7a40-409e-a227-56ebbcf33de4-5ce685b6.md)
- [KNOTWEED-AV Detections](../content/-knotweed-av-detections-24b0f252-08fd-4f70-b387-9015bea1b34c-75d308a9.md)
- [MDO daily detection summary report](../content/-mdo-daily-detection-summary-report-deb4b2c6-c10e-4044-8cf4-84243e40db73-c5a92bdb.md)
- [SuspiciousUrlClicked](../content/-suspiciousurlclicked-959f8d6a-53b8-488f-a628-999b3410702e-41b2fb21.md)
- [URL click on ZAP email](../content/-url-click-on-zap-email-efe27064-6d35-4720-b7f5-e0326695613d-5104f190.md)
- [URLClick details based on malicious URL click alert](../content/-urlclick-details-based-on-malicious-url-click-alert-03e61096-20d0-46eb-b8e0-a507dd00a19f-a1c0bbf7.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MDO daily detection summary report](../content/microsoft-defender-xdr-mdo-daily-detection-summary-report-deb4b2c6-c10e-4044-8cf4-84243e40db73-ce48d397.md)
- [URL click on ZAP email](../content/microsoft-defender-xdr-url-click-on-zap-email-efe27064-6d35-4720-b7f5-e0326695613d-1ef7f440.md)
- [URLClick details based on malicious URL click alert](../content/microsoft-defender-xdr-urlclick-details-based-on-malicious-url-click-alert-03e61096-20d0-46eb-b8e0-a507dd00a19f-7d8998d0.md)

**In solution [Standalone Content](../solutions/standalone-content.md):**
- [MDE_Evidenceforasingledevice](../content/standalone-content-mde-evidenceforasingledevice-f173f87f-fa09-4258-8eaf-d95164318e7e-49f4057e.md)

### Workbooks (13)

**In solution [](../solutions/.md):**
- [AzureSentinelCost](../content/-azuresentinelcost-75f5c34b.md)
- [DoDZeroTrustWorkbook](../content/-dodzerotrustworkbook-93adac1a.md)
- [MicrosoftSentinelCostEUR](../content/-microsoftsentinelcosteur-aa190070.md)
- [MicrosoftSentinelCostGBP](../content/-microsoftsentinelcostgbp-3469a46b.md)
- [OptimizationWorkbook](../content/-optimizationworkbook-0bd24445.md)
- [SentinelCosts](../content/-sentinelcosts-dec2b79d.md)
- [ZeroTrustStrategyWorkbook](../content/-zerotruststrategyworkbook-e9062fae.md)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**
- [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md)

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**
- [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**
- [MicrosoftDefenderForOffice365detectionsandinsights](../content/microsoft-defender-xdr-microsoftdefenderforoffice365detectionsandinsights-c34bc8fb.md)

**In solution [NISTSP80053](../solutions/nistsp80053.md):**
- [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**
- [AzureSentinelCost](../content/soc-handbook-azuresentinelcost-81caaf3b.md)

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**
- [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md)

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product |
|:-------|:-------|:--------|
| [ASimAlertEventMicrosoftDefenderXDR](../asim/asimalerteventmicrosoftdefenderxdr.md) | AlertEvent |  |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Tables Index](../tables-index.md)

